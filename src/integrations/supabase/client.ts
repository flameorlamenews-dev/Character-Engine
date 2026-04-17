import { createClient } from '@supabase/supabase-js';
import { analyzeManuscript, analyzeManuscriptEngine, generateCharacterText, hasClaudeKey } from '../../services/claude-api';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found in .env — database features will not work.');
}

// Create the real Supabase client for database operations
const realSupabase = createClient(
  supabaseUrl || 'http://localhost:54321',
  supabaseAnonKey || 'missing-key'
);

// Export the real client for Auth UI (Proxy doesn't work with auth-ui-react)
export const supabaseAuth = realSupabase;

// Wrap the client to intercept edge function calls and route them to Claude API
export const supabase = new Proxy(realSupabase, {
  get(target, prop) {
    if (prop === 'functions') {
      return {
        invoke: async (functionName: string, options?: { body?: any }) => {
          const body = options?.body || {};

          if (functionName === 'ai-analyze-manuscript') {
            if (!hasClaudeKey()) {
              return { data: null, error: { message: 'Claude API key not configured' } };
            }
            try {
              // The ManuscriptsView passes manuscriptId and userId
              // We need to fetch the manuscript content first, then analyze
              const { data: manuscript } = await realSupabase
                .from('manuscripts')
                .select('*')
                .eq('id', body.manuscriptId)
                .single();

              if (!manuscript) {
                return { data: null, error: { message: 'Manuscript not found' } };
              }

              // Update progress to show analysis started
              await realSupabase
                .from('manuscripts')
                .update({ analysis_progress: 10 })
                .eq('id', body.manuscriptId);

              // Get existing characters for context
              const { data: existingChars } = await realSupabase
                .from('characters')
                .select('name')
                .eq('project_id', manuscript.project_id);

              const charNames = (existingChars || []).map((c: any) => c.name);

              // Call Claude to analyze
              const analysis = await analyzeManuscript(
                manuscript.content || '',
                manuscript.chapter_number || 0,
                manuscript.title || `Chapter ${manuscript.chapter_number}`,
                charNames
              );

              // Update progress
              await realSupabase
                .from('manuscripts')
                .update({ analysis_progress: 50 })
                .eq('id', body.manuscriptId);

              // Save characters to database and build name→id map for engine.
              // Name-matching is case-insensitive + whitespace-trimmed to stop
              // Claude's casing drift (e.g. "John" vs "john ") from producing
              // duplicate character rows.
              const characterNameToId = new Map<string, string>();
              for (const char of analysis.characters) {
                const cleanName = (char.name || '').trim();
                if (!cleanName) continue;

                // Case-insensitive lookup within this project
                const { data: existing } = await realSupabase
                  .from('characters')
                  .select('id, manuscript_id')
                  .ilike('name', cleanName)
                  .eq('project_id', manuscript.project_id)
                  .maybeSingle();

                let characterId: string | undefined;
                if (existing) {
                  characterId = existing.id;
                  // Update existing character. Preserve the originating
                  // manuscript_id — it records which chapter first introduced
                  // the character and is used by delete/merge flows.
                  const { error: updErr } = await realSupabase
                    .from('characters')
                    .update({
                      description: char.description,
                      role: char.role,
                      source_type: 'ai',
                    })
                    .eq('id', characterId);
                  if (updErr) console.error('Update character failed:', cleanName, updErr.message);
                } else {
                  // Create new character, tying it to the manuscript that
                  // first introduced it so cascade-delete/merge flows work.
                  const { data: newChar, error: insErr } = await realSupabase
                    .from('characters')
                    .insert({
                      name: cleanName,
                      description: char.description,
                      role: char.role,
                      user_id: body.userId || manuscript.user_id,
                      project_id: manuscript.project_id,
                      manuscript_id: body.manuscriptId,
                      source_type: 'ai',
                    })
                    .select('id')
                    .single();
                  if (insErr) console.error('Insert character failed:', cleanName, insErr.message);
                  characterId = newChar?.id;
                }

                if (characterId) {
                  // Use lower-case key so the engine-analysis pass can resolve
                  // names case-insensitively without a second fallback.
                  characterNameToId.set(cleanName.toLowerCase(), characterId);

                  // Timeline entry — UPSERT on (character_id, manuscript_id,
                  // chapter_number) so re-analyzing a chapter REPLACES rather
                  // than appends. Relies on the unique index added in 006.
                  // profile_text and chapter_title are populated so the
                  // CharacterDialog and per-chapter profile UI have data to
                  // show instead of blank strings.
                  const { error: timelineErr } = await realSupabase
                    .from('character_timeline_entries')
                    .upsert({
                      character_id: characterId,
                      manuscript_id: body.manuscriptId,
                      chapter_number: manuscript.chapter_number,
                      chapter_title: manuscript.chapter_title || manuscript.title || null,
                      user_id: body.userId || manuscript.user_id,
                      emotional_state: char.emotionalState,
                      traits: char.traits,
                      dialogue_patterns: char.dialoguePatterns,
                      relationships: char.relationships,
                      profile_text: char.description || null,
                      analysis_text: char.speechPattern || null,
                      master_summary: char.emotionalState || null,
                      views_of_others: char.viewsOfOthers || null,
                      views_by_others: char.viewsByOthers || null,
                      internal_dialogue: char.internalDialogue || [],
                      external_dialogue: char.externalDialogue || [],
                      source_type: 'ai',
                      updated_at: new Date().toISOString(),
                    }, { onConflict: 'character_id,manuscript_id,chapter_number' });
                  if (timelineErr) console.error('Timeline entry upsert failed:', cleanName, timelineErr.message);

                  // Traits — delete-then-insert per (character, manuscript) so
                  // re-analysis replaces the trait set for THIS chapter
                  // without touching traits from other chapters.
                  await realSupabase
                    .from('character_traits')
                    .delete()
                    .eq('character_id', characterId)
                    .eq('manuscript_id', body.manuscriptId);
                  if (char.traits && char.traits.length > 0) {
                    // De-dupe traits within the same chapter (Claude sometimes repeats)
                    const uniq = Array.from(new Set(char.traits.map(t => t.trim()).filter(Boolean)));
                    const { error: trErr } = await realSupabase
                      .from('character_traits')
                      .insert(uniq.map(trait => ({
                        character_id: characterId,
                        manuscript_id: body.manuscriptId,
                        trait,
                        source_type: 'ai',
                      })));
                    if (trErr) console.error('Insert traits failed:', cleanName, trErr.message);
                  }
                }
              }

              // Save glossary terms — case-insensitive dedupe within a project.
              // For terms that already exist, append the current chapter to
              // appears_in so the UI can show every chapter a term is used in.
              const currentChapterNum = manuscript.chapter_number ?? 0;
              for (const term of analysis.glossaryTerms) {
                const cleanWord = (term.word || '').trim();
                if (!cleanWord) continue;

                const { data: existingTerm } = await realSupabase
                  .from('world_glossary')
                  .select('id, appears_in')
                  .ilike('word', cleanWord)
                  .eq('project_id', manuscript.project_id)
                  .maybeSingle();

                if (existingTerm) {
                  const existingAppears: number[] = existingTerm.appears_in || [];
                  if (!existingAppears.includes(currentChapterNum)) {
                    await realSupabase
                      .from('world_glossary')
                      .update({ appears_in: [...existingAppears, currentChapterNum].sort((a, b) => a - b) })
                      .eq('id', existingTerm.id);
                  }
                } else {
                  const { error: glossErr } = await realSupabase
                    .from('world_glossary')
                    .insert({
                      word: cleanWord,
                      definition: term.definition,
                      word_type: term.wordType,
                      project_id: manuscript.project_id,
                      user_id: body.userId || manuscript.user_id,
                      manuscript_id: body.manuscriptId,
                      source_type: 'ai',
                      appears_in: [currentChapterNum],
                    });
                  if (glossErr) console.error('Glossary insert failed:', cleanWord, glossErr.message);
                }
              }

              // ── Engine Analysis (second Claude call) ──────────────
              let engineStatus: 'ok' | 'failed' | 'skipped' = 'ok';
              let engineError: string | undefined;
              try {
                await realSupabase.from('manuscripts').update({ analysis_progress: 60 }).eq('id', body.manuscriptId);

                // Check if this is the first engine analysis for this project
                const charIds = [...characterNameToId.values()];
                const { data: existingEngine } = charIds.length > 0
                  ? await realSupabase.from('temperament_grids').select('character_id').in('character_id', charIds).limit(1)
                  : { data: [] };
                const isFirstAnalysis = !existingEngine || existingEngine.length === 0;

                // Build existing context for subsequent chapters
                let existingContext = '';
                if (!isFirstAnalysis && charIds.length > 0) {
                  const { data: baselines } = await realSupabase.from('emotional_baselines').select('*').in('character_id', charIds);
                  if (baselines) {
                    existingContext = baselines.map((b: any) => {
                      const name = [...characterNameToId.entries()].find(([, id]) => id === b.character_id)?.[0];
                      return name ? `${name}: joy=${b.joy} sadness=${b.sadness} anger=${b.anger} fear=${b.fear} trust=${b.trust} anticipation=${b.anticipation}` : '';
                    }).filter(Boolean).join('\n');
                  }
                }

                // Build condensed context from Call #1 results instead of raw chapter text
                const condensedContext = analysis.characters.map(c =>
                  `CHARACTER: ${c.name} (${c.role})\nDescription: ${c.description}\nTraits: ${c.traits.join(', ')}\nEmotional state: ${c.emotionalState}\nRelationships: ${c.relationships}\nSpeech pattern: ${c.speechPattern || 'N/A'}\nViews of others: ${c.viewsOfOthers || 'N/A'}\nViewed by others: ${c.viewsByOthers || 'N/A'}\nInternal dialogue: ${(c.internalDialogue || []).join(' | ') || 'N/A'}\nExternal dialogue: ${(c.externalDialogue || []).join(' | ') || 'N/A'}`
                ).join('\n\n');

                const engineResult = await analyzeManuscriptEngine(
                  condensedContext,
                  manuscript.chapter_number || 0,
                  manuscript.title || `Chapter ${manuscript.chapter_number}`,
                  [...characterNameToId.keys()],
                  isFirstAnalysis,
                  existingContext || undefined
                );

                console.log('Engine analysis returned', engineResult.characters.length, 'characters:', engineResult.characters.map(c => c.name));
                await realSupabase.from('manuscripts').update({ analysis_progress: 80 }).eq('id', body.manuscriptId);

                // Save engine data per character. The name→id map was built
                // with lowercased keys so we do the same lookup here.
                // chapter_number is 1-indexed in the UI and DB; the engine
                // stores chapter_index (0-indexed). A null chapter_number
                // shouldn't happen (ManuscriptDialog enforces 0-200) but we
                // default to 0 so a bad input still lands deterministically
                // in the first slot rather than scattering across chapters.
                const chapterIndex = manuscript.chapter_number != null
                  ? manuscript.chapter_number - 1
                  : 0;
                for (const engineChar of engineResult.characters) {
                  const key = (engineChar.name || '').trim().toLowerCase();
                  const charId = characterNameToId.get(key);
                  if (!charId) {
                    console.warn('Engine analysis: no character ID found for', engineChar.name);
                    continue;
                  }

                  // Foundation tables (first analysis or personality shift)
                  if (engineChar.temperament) {
                    const { error: tErr } = await realSupabase.from('temperament_grids').upsert({
                      character_id: charId, ...engineChar.temperament,
                    }, { onConflict: 'character_id' });
                    if (tErr) console.error('Engine save temperament_grids failed:', tErr.message);
                  }
                  if (engineChar.emotional_baseline) {
                    const { error: bErr } = await realSupabase.from('emotional_baselines').upsert({
                      character_id: charId, ...engineChar.emotional_baseline,
                    }, { onConflict: 'character_id' });
                    if (bErr) console.error('Engine save emotional_baselines failed:', bErr.message);
                  }
                  if (engineChar.moral_structure) {
                    const { error: mErr } = await realSupabase.from('moral_structures').upsert({
                      character_id: charId, ...engineChar.moral_structure,
                    }, { onConflict: 'character_id' });
                    if (mErr) console.error('Engine save moral_structures failed:', mErr.message);
                  }
                  if (engineChar.general_traits) {
                    const { error: gErr } = await realSupabase.from('general_traits').upsert({
                      character_id: charId, ...engineChar.general_traits,
                    }, { onConflict: 'character_id' });
                    if (gErr) console.error('Engine save general_traits failed:', gErr.message);
                  }
                  if (engineChar.influence_sliders) {
                    const { error: iErr } = await realSupabase.from('influence_sliders').upsert({
                      character_id: charId, ...engineChar.influence_sliders,
                    }, { onConflict: 'character_id' });
                    if (iErr) console.error('Engine save influence_sliders failed:', iErr.message);
                  }
                  if (engineChar.desires && engineChar.desires.length > 0) {
                    await realSupabase.from('desires').delete().eq('character_id', charId);
                    await realSupabase.from('desires').insert(
                      engineChar.desires.map(d => ({ character_id: charId, name: d.name, score: d.score, rank: d.rank }))
                    );
                  }
                  if (engineChar.conditional_traits && engineChar.conditional_traits.length > 0) {
                    await realSupabase.from('conditional_traits').delete().eq('character_id', charId);
                    await realSupabase.from('conditional_traits').insert(
                      engineChar.conditional_traits.map(t => ({
                        character_id: charId, trait_label: t.trait_label, trigger_condition: t.trigger_condition,
                        target_scope: t.target_scope, intensity_score: t.intensity_score, override_strength: t.override_strength,
                      }))
                    );
                  }

                  // Per-chapter: emotion drift
                  if (engineChar.emotion_drift) {
                    for (const drift of engineChar.emotion_drift) {
                      await realSupabase.from('emotion_drift').upsert({
                        character_id: charId, emotion_type: drift.emotion_type,
                        chapter_index: chapterIndex, value: drift.value,
                      }, { onConflict: 'character_id,emotion_type,chapter_index' });
                    }
                  }

                  // Per-chapter: surges (delete old + insert new)
                  if (engineChar.surges && engineChar.surges.length > 0) {
                    await realSupabase.from('surges').delete()
                      .eq('character_id', charId).eq('chapter_index', chapterIndex);
                    await realSupabase.from('surges').insert(
                      engineChar.surges.map(s => ({
                        character_id: charId, chapter_index: chapterIndex,
                        emotion_type: s.emotion_type, scene_position: s.scene_position,
                        peak_intensity: s.peak_intensity, decay_rate: s.decay_rate, duration: s.duration,
                        event_type: s.event_type, trigger_subject: s.trigger_subject,
                        trigger_source: s.trigger_source, trigger_domain: s.trigger_domain,
                        stakes: s.stakes, immediacy: s.immediacy, certainty: s.certainty,
                        description: s.description,
                      }))
                    );
                  }

                  // Relationships (replace all for this character)
                  if (engineChar.relationships && engineChar.relationships.length > 0) {
                    await realSupabase.from('relationships').delete().eq('character_id', charId);
                    await realSupabase.from('relationships').insert(
                      engineChar.relationships.map(r => ({
                        character_id: charId, target_name: r.target_name,
                        trust: r.trust, threat: r.threat, admiration: r.admiration,
                        envy: r.envy, suspicion: r.suspicion, perception_care: r.perception_care,
                      }))
                    );
                  }
                }
              } catch (engineErr: any) {
                engineStatus = 'failed';
                engineError = engineErr?.message || String(engineErr);
                console.error('Engine analysis failed (non-blocking):', engineError);
                // Author data is already saved. We surface the failure via
                // analysis_results.engineStatus so the UI can warn the user
                // that the Producer/Player view won't have full personality
                // data for this chapter.
              }

              // Save analysis results and mark complete
              await realSupabase
                .from('manuscripts')
                .update({
                  analysis_progress: 100,
                  analysis_results: {
                    summary: analysis.summary,
                    characterImpressions: analysis.characters.map(c => `${c.name}: ${c.description}`).join('\n\n'),
                    newCharacters: analysis.characters
                      .filter(c => !charNames.includes(c.name))
                      .map(c => ({ name: c.name, description: c.description })),
                    recurringCharacters: analysis.characters
                      .filter(c => charNames.includes(c.name))
                      .map(c => ({ name: c.name, evolution: c.emotionalState })),
                    engineStatus,
                    engineError,
                  },
                })
                .eq('id', body.manuscriptId);

              return { data: { success: true, engineStatus }, error: null };
            } catch (err: any) {
              console.error('Analysis failed:', err);
              await realSupabase
                .from('manuscripts')
                .update({ analysis_progress: -1 })
                .eq('id', body.manuscriptId);
              return { data: null, error: { message: err.message } };
            }
          }

          if (functionName === 'generate-character-text') {
            if (!hasClaudeKey()) {
              return { data: null, error: { message: 'Claude API key not configured' } };
            }
            try {
              // Fetch character data
              const { data: character } = await realSupabase
                .from('characters')
                .select('*')
                .eq('id', body.characterId)
                .single();

              if (!character) {
                return { data: null, error: { message: 'Character not found' } };
              }

              const { data: traits } = await realSupabase
                .from('character_traits')
                .select('trait')
                .eq('character_id', body.characterId);

              // Pull the most recent timeline entry for per-chapter voice
              // context — speech pattern, internal/external dialogue, and
              // emotional state. Without this Claude falls back to a thin
              // global prompt and the generated text drifts toward a
              // neutral voice rather than the character's latest register.
              const { data: recentTimeline } = await realSupabase
                .from('character_timeline_entries')
                .select('analysis_text, emotional_state, dialogue_patterns, internal_dialogue, external_dialogue, chapter_number')
                .eq('character_id', body.characterId)
                .order('chapter_number', { ascending: false })
                .limit(1)
                .maybeSingle();

              const voiceContext = recentTimeline
                ? [
                    recentTimeline.analysis_text ? `Speech pattern: ${recentTimeline.analysis_text}` : '',
                    recentTimeline.dialogue_patterns && recentTimeline.dialogue_patterns.length
                      ? `Dialogue patterns: ${recentTimeline.dialogue_patterns.join('; ')}`
                      : '',
                    recentTimeline.internal_dialogue && recentTimeline.internal_dialogue.length
                      ? `Sample internal thoughts: ${recentTimeline.internal_dialogue.slice(0, 3).join(' | ')}`
                      : '',
                    recentTimeline.external_dialogue && recentTimeline.external_dialogue.length
                      ? `Sample spoken lines: ${recentTimeline.external_dialogue.slice(0, 3).join(' | ')}`
                      : '',
                  ].filter(Boolean).join('\n')
                : '';

              const enrichedDescription = voiceContext
                ? `${character.description || ''}\n\nCanonical voice reference (from most recent analyzed chapter):\n${voiceContext}`
                : character.description || '';

              const text = await generateCharacterText(
                character.name,
                enrichedDescription,
                (traits || []).map((t: any) => t.trait),
                body.prompt || '',
                body.audience,
                body.emotionalState || recentTimeline?.emotional_state,
                body.situation
              );

              return { data: { generatedText: text }, error: null };
            } catch (err: any) {
              return { data: null, error: { message: err.message } };
            }
          }

          if (functionName === 'parse-manuscript') {
            // Parsing is handled client-side via mammoth — just return success
            return { data: { success: true }, error: null };
          }

          // Unknown function
          return { data: null, error: { message: `Unknown function: ${functionName}` } };
        },
      };
    }

    // Auth passes through to real Supabase Auth (login/signup/logout)
    return (target as any)[prop];
  },
});
