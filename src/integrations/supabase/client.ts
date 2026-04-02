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

              // Save characters to database and build name→id map for engine
              const characterNameToId = new Map<string, string>();
              for (const char of analysis.characters) {
                // Check if character already exists
                const { data: existing } = await realSupabase
                  .from('characters')
                  .select('id')
                  .eq('name', char.name)
                  .eq('project_id', manuscript.project_id)
                  .maybeSingle();

                let characterId: string;
                if (existing) {
                  characterId = existing.id;
                  // Update existing character
                  await realSupabase
                    .from('characters')
                    .update({
                      description: char.description,
                      role: char.role,
                      source_type: 'ai',
                    })
                    .eq('id', characterId);
                } else {
                  // Create new character
                  const { data: newChar } = await realSupabase
                    .from('characters')
                    .insert({
                      name: char.name,
                      description: char.description,
                      role: char.role,
                      user_id: body.userId || manuscript.user_id,
                      project_id: manuscript.project_id,
                      source_type: 'ai',
                    })
                    .select('id')
                    .single();
                  characterId = newChar?.id;
                }

                if (characterId) {
                  characterNameToId.set(char.name, characterId);
                  // Save timeline entry
                  await realSupabase
                    .from('character_timeline_entries')
                    .insert({
                      character_id: characterId,
                      manuscript_id: body.manuscriptId,
                      chapter_number: manuscript.chapter_number,
                      emotional_state: char.emotionalState,
                      traits: char.traits,
                      dialogue_patterns: char.dialoguePatterns,
                      relationships: char.relationships,
                      source_type: 'ai',
                    });

                  // Save traits
                  for (const trait of char.traits) {
                    await realSupabase
                      .from('character_traits')
                      .insert({
                        character_id: characterId,
                        manuscript_id: body.manuscriptId,
                        trait,
                        source_type: 'ai',
                      });
                  }
                }
              }

              // Save glossary terms
              for (const term of analysis.glossaryTerms) {
                const { data: existingTerm } = await realSupabase
                  .from('world_glossary')
                  .select('id')
                  .eq('word', term.word)
                  .eq('project_id', manuscript.project_id)
                  .maybeSingle();

                if (!existingTerm) {
                  await realSupabase
                    .from('world_glossary')
                    .insert({
                      word: term.word,
                      definition: term.definition,
                      word_type: term.wordType,
                      project_id: manuscript.project_id,
                      user_id: body.userId || manuscript.user_id,
                      manuscript_id: body.manuscriptId,
                      source_type: 'ai',
                    });
                }
              }

              // ── Engine Analysis (second Claude call) ──────────────
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

                const engineResult = await analyzeManuscriptEngine(
                  manuscript.content || '',
                  manuscript.chapter_number || 0,
                  manuscript.title || `Chapter ${manuscript.chapter_number}`,
                  [...characterNameToId.keys()],
                  isFirstAnalysis,
                  existingContext || undefined
                );

                await realSupabase.from('manuscripts').update({ analysis_progress: 80 }).eq('id', body.manuscriptId);

                // Save engine data per character
                const chapterIndex = (manuscript.chapter_number || 1) - 1;
                for (const engineChar of engineResult.characters) {
                  const charId = characterNameToId.get(engineChar.name);
                  if (!charId) continue;

                  // Foundation tables (first analysis or personality shift)
                  if (engineChar.temperament) {
                    await realSupabase.from('temperament_grids').upsert({
                      character_id: charId, ...engineChar.temperament,
                    }, { onConflict: 'character_id' });
                  }
                  if (engineChar.emotional_baseline) {
                    await realSupabase.from('emotional_baselines').upsert({
                      character_id: charId, ...engineChar.emotional_baseline,
                    }, { onConflict: 'character_id' });
                  }
                  if (engineChar.moral_structure) {
                    await realSupabase.from('moral_structures').upsert({
                      character_id: charId, ...engineChar.moral_structure,
                    }, { onConflict: 'character_id' });
                  }
                  if (engineChar.general_traits) {
                    await realSupabase.from('general_traits').upsert({
                      character_id: charId, ...engineChar.general_traits,
                    }, { onConflict: 'character_id' });
                  }
                  if (engineChar.influence_sliders) {
                    await realSupabase.from('influence_sliders').upsert({
                      character_id: charId, ...engineChar.influence_sliders,
                    }, { onConflict: 'character_id' });
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
              } catch (engineErr) {
                console.error('Engine analysis failed (non-blocking):', engineErr);
                // Engine analysis failure is non-blocking — author data is already saved
              }

              // Save analysis results and mark complete
              await realSupabase
                .from('manuscripts')
                .update({
                  analysis_progress: 100,
                  analysis_results: {
                    summary: analysis.summary,
                    characterImpressions: analysis.characters.map(c => `${c.name}: ${c.firstImpressions || c.description}`).join('\n\n'),
                    consistencyAnalysis: analysis.consistencyNotes,
                    newCharacters: analysis.characters
                      .filter(c => !charNames.includes(c.name))
                      .map(c => ({ name: c.name, firstImpressions: c.firstImpressions || c.description })),
                    recurringCharacters: analysis.characters
                      .filter(c => charNames.includes(c.name))
                      .map(c => ({ name: c.name, evolution: c.emotionalState })),
                  },
                })
                .eq('id', body.manuscriptId);

              return { data: { success: true }, error: null };
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

              const text = await generateCharacterText(
                character.name,
                character.description || '',
                (traits || []).map((t: any) => t.trait),
                body.prompt || '',
                body.audience,
                body.emotionalState,
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
