import { createClient } from '@supabase/supabase-js';
import { analyzeManuscript, analyzeManuscriptEngine, generateCharacterText, hasClaudeKey } from '../../services/claude-api';

type EngineError = { table: string; character: string; chapter?: number; message: string };

// Sentence-length statistics from a character's externalDialogue samples.
// Returns nulls when insufficient data — writer treats nulls as "leave column empty."
function computeSentenceStats(externalDialogue: string[] | undefined | null): {
  avg_sentence_length_words: number | null;
  sentence_length_stddev: number | null;
  max_sentence_length_words: number | null;
} {
  if (!externalDialogue || externalDialogue.length === 0) {
    return { avg_sentence_length_words: null, sentence_length_stddev: null, max_sentence_length_words: null };
  }
  const sentenceLengths: number[] = [];
  for (const line of externalDialogue) {
    if (typeof line !== 'string') continue;
    const sentences = line.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
    for (const sentence of sentences) {
      const wordCount = sentence.split(/\s+/).filter(Boolean).length;
      if (wordCount > 0) sentenceLengths.push(wordCount);
    }
  }
  if (sentenceLengths.length === 0) {
    return { avg_sentence_length_words: null, sentence_length_stddev: null, max_sentence_length_words: null };
  }
  const sum = sentenceLengths.reduce((a, b) => a + b, 0);
  const avg = sum / sentenceLengths.length;
  const variance = sentenceLengths.reduce((acc, n) => acc + (n - avg) ** 2, 0) / sentenceLengths.length;
  return {
    avg_sentence_length_words: Math.round(avg),
    sentence_length_stddev: Math.round(Math.sqrt(variance) * 100) / 100,
    max_sentence_length_words: Math.max(...sentenceLengths),
  };
}

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
                .select('id, name')
                .eq('project_id', manuscript.project_id);

              const charNames = (existingChars || []).map((c: any) => c.name);

              // Fetch the most recent knowledge_at_chapter per existing character
              // from chapters before the one being analyzed — so the analyzer can
              // carry cumulative spoiler-safe knowledge forward.
              const priorKnowledge: Record<string, string> = {};
              const currentChapter = manuscript.chapter_number || 0;
              for (const existingChar of existingChars || []) {
                const { data: priorEntry } = await realSupabase
                  .from('character_timeline_entries')
                  .select('knowledge_at_chapter, chapter_number')
                  .eq('character_id', existingChar.id)
                  .lt('chapter_number', currentChapter)
                  .not('knowledge_at_chapter', 'is', null)
                  .order('chapter_number', { ascending: false })
                  .limit(1)
                  .maybeSingle();
                if (priorEntry?.knowledge_at_chapter) {
                  priorKnowledge[existingChar.name] = priorEntry.knowledge_at_chapter;
                }
              }

              // Call Claude to analyze
              const analysis = await analyzeManuscript(
                manuscript.content || '',
                manuscript.chapter_number || 0,
                manuscript.title || `Chapter ${manuscript.chapter_number}`,
                charNames,
                priorKnowledge
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
                // active_hours_local is a stable character trait — only write on create.
                // activity_pattern_note can refine across chapters.
                const activeHoursLocal = char.activeHoursLocal || 'all-day';
                const activityPatternNote = char.activityPatternNote || '';
                if (existing) {
                  characterId = existing.id;
                  await realSupabase
                    .from('characters')
                    .update({
                      description: char.description,
                      role: char.role,
                      source_type: 'ai',
                      activity_pattern_note: activityPatternNote,
                    } as any)
                    .eq('id', characterId);
                } else {
                  const { data: newChar } = await realSupabase
                    .from('characters')
                    .insert({
                      name: char.name,
                      description: char.description,
                      role: char.role,
                      user_id: body.userId || manuscript.user_id,
                      project_id: manuscript.project_id,
                      source_type: 'ai',
                      active_hours_local: activeHoursLocal,
                      activity_pattern_note: activityPatternNote,
                    } as any)
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
                      user_id: body.userId || manuscript.user_id,
                      emotional_state: char.emotionalState,
                      traits: char.traits,
                      dialogue_patterns: char.dialoguePatterns,
                      relationships: char.relationships,
                      analysis_text: char.speechPattern || null,
                      views_of_others: char.viewsOfOthers || null,
                      views_by_others: char.viewsByOthers || null,
                      internal_dialogue: char.internalDialogue || [],
                      external_dialogue: char.externalDialogue || [],
                      knowledge_at_chapter: char.knowledgeAtChapter || null,
                      notable_actions: char.notableActions || null,
                      reader_tone: char.readerTone || null,
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
              // Errors are captured per-table and persisted to manuscripts.engine_errors
              // at the end of the block. No silent swallowing.
              const engineErrors: EngineError[] = [];

              await realSupabase.from('manuscripts').update({ analysis_progress: 60 }).eq('id', body.manuscriptId);

              const charIds = [...characterNameToId.values()];
              const { data: existingEngine } = charIds.length > 0
                ? await realSupabase.from('temperament_grids').select('character_id').in('character_id', charIds).limit(1)
                : { data: [] };
              const isFirstAnalysis = !existingEngine || existingEngine.length === 0;

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

              const condensedContext = analysis.characters.map(c =>
                `CHARACTER: ${c.name} (${c.role})\nDescription: ${c.description}\nTraits: ${c.traits.join(', ')}\nEmotional state: ${c.emotionalState}\nRelationships: ${c.relationships}\nSpeech pattern: ${c.speechPattern || 'N/A'}\nViews of others: ${c.viewsOfOthers || 'N/A'}\nViewed by others: ${c.viewsByOthers || 'N/A'}\nInternal dialogue: ${(c.internalDialogue || []).join(' | ') || 'N/A'}\nExternal dialogue: ${(c.externalDialogue || []).join(' | ') || 'N/A'}`
              ).join('\n\n');

              let engineResult: Awaited<ReturnType<typeof analyzeManuscriptEngine>> | null = null;
              try {
                engineResult = await analyzeManuscriptEngine(
                  condensedContext,
                  manuscript.chapter_number || 0,
                  manuscript.title || `Chapter ${manuscript.chapter_number}`,
                  [...characterNameToId.keys()],
                  isFirstAnalysis,
                  existingContext || undefined
                );
              } catch (err: any) {
                engineErrors.push({
                  table: 'analyzeManuscriptEngine',
                  character: '',
                  chapter: manuscript.chapter_number,
                  message: err?.message || String(err),
                });
              }

              if (engineResult) {
                console.log('Engine analysis returned', engineResult.characters.length, 'characters:', engineResult.characters.map(c => c.name));
                await realSupabase.from('manuscripts').update({ analysis_progress: 80 }).eq('id', body.manuscriptId);

                const write = async (
                  table: string,
                  charName: string,
                  fn: () => PromiseLike<{ error: any }>
                ) => {
                  try {
                    const { error } = await fn();
                    if (error) engineErrors.push({ table, character: charName, chapter: manuscript.chapter_number, message: error.message });
                  } catch (err: any) {
                    engineErrors.push({ table, character: charName, chapter: manuscript.chapter_number, message: err?.message || String(err) });
                  }
                };

                const chapterIndex = (manuscript.chapter_number || 1) - 1;
                const manuscriptId = body.manuscriptId;

                for (const engineChar of engineResult.characters) {
                  const charId = characterNameToId.get(engineChar.name)
                    || [...characterNameToId.entries()].find(([k]) => k.toLowerCase() === engineChar.name?.toLowerCase())?.[1];
                  if (!charId) {
                    engineErrors.push({
                      table: 'character_lookup',
                      character: engineChar.name || '(unknown)',
                      chapter: manuscript.chapter_number,
                      message: 'no character ID found',
                    });
                    continue;
                  }
                  const name = engineChar.name;

                  // Pull Pass 1 dialogue to compute sentence-length stats (engine 008 columns)
                  const pass1Char = analysis.characters.find(c => c.name === engineChar.name)
                    || analysis.characters.find(c => c.name?.toLowerCase() === engineChar.name?.toLowerCase());
                  const sentenceStats = computeSentenceStats(pass1Char?.externalDialogue);

                  // ── Foundation psychology tables ──
                  if (engineChar.temperament) {
                    await write('temperament_grids', name, () =>
                      realSupabase.from('temperament_grids').upsert(
                        { character_id: charId, ...engineChar.temperament } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  }
                  if (engineChar.emotional_baseline) {
                    await write('emotional_baselines', name, () =>
                      realSupabase.from('emotional_baselines').upsert(
                        { character_id: charId, ...engineChar.emotional_baseline } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  }
                  if (engineChar.moral_structure) {
                    await write('moral_structures', name, () =>
                      realSupabase.from('moral_structures').upsert(
                        { character_id: charId, ...engineChar.moral_structure } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  }
                  if (engineChar.general_traits) {
                    await write('general_traits', name, () =>
                      realSupabase.from('general_traits').upsert(
                        { character_id: charId, ...engineChar.general_traits } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  }
                  if (engineChar.influence_sliders) {
                    await write('influence_sliders', name, () =>
                      realSupabase.from('influence_sliders').upsert(
                        { character_id: charId, ...engineChar.influence_sliders } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  }
                  if (engineChar.desires && engineChar.desires.length > 0) {
                    await write('desires.delete', name, () =>
                      realSupabase.from('desires').delete().eq('character_id', charId)
                    );
                    await write('desires.insert', name, () =>
                      realSupabase.from('desires').insert(
                        engineChar.desires!.map(d => ({ character_id: charId, name: d.name, score: d.score, rank: d.rank }))
                      )
                    );
                  }
                  if (engineChar.conditional_traits && engineChar.conditional_traits.length > 0) {
                    await write('conditional_traits.delete', name, () =>
                      realSupabase.from('conditional_traits').delete().eq('character_id', charId)
                    );
                    await write('conditional_traits.insert', name, () =>
                      realSupabase.from('conditional_traits').insert(
                        engineChar.conditional_traits!.map(t => ({
                          character_id: charId, trait_label: t.trait_label, trigger_condition: t.trigger_condition,
                          target_scope: t.target_scope, intensity_score: t.intensity_score, override_strength: t.override_strength,
                        }))
                      )
                    );
                  }

                  // ── Voice layer (engine 008 target tables — audio Claude consumes these) ──
                  if (engineChar.voice_scales) {
                    // engine 008 columns: 11 integer sliders, 0-75 scale
                    await write('character_voice_scales', name, () =>
                      realSupabase.from('character_voice_scales').upsert(
                        {
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          source_type: 'ai',
                          ...engineChar.voice_scales,
                        } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  }
                  if (engineChar.style_rules) {
                    // engine 008 columns: sentence_rhythm/lexical_range/cadence/emphasis_method/
                    //   forbidden_patterns/world_term_rules/punctuation_habits (text), plus new:
                    //   avg/stddev/max_sentence_length_words, profanity_level, profanity_vocabulary
                    const sr = engineChar.style_rules;
                    await write('character_style_rules', name, () =>
                      realSupabase.from('character_style_rules').upsert(
                        {
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          source_type: 'ai',
                          sentence_rhythm: sr.sentence_rhythm,
                          lexical_range: sr.lexical_range,
                          cadence: sr.cadence,
                          punctuation_habits: sr.punctuation_habits,
                          emphasis_method: sr.emphasis_method,
                          forbidden_patterns: sr.forbidden_patterns,
                          world_term_rules: sr.world_term_rules,
                          profanity_level: sr.profanity_level,
                          profanity_vocabulary: sr.profanity_vocabulary,
                          ...sentenceStats,
                        } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  } else if (sentenceStats.avg_sentence_length_words !== null) {
                    // Non-foundation chapter, but fresh dialogue — refresh sentence stats only.
                    await write('character_style_rules.stats', name, () =>
                      realSupabase.from('character_style_rules').upsert(
                        {
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          source_type: 'ai',
                          ...sentenceStats,
                        } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  }
                  if (engineChar.conflict_profile) {
                    // engine 008 columns: conflict_strategy, morality_axis (text), truth_bias (0-75 int)
                    await write('character_conflict_profile', name, () =>
                      realSupabase.from('character_conflict_profile').upsert(
                        {
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          source_type: 'ai',
                          ...engineChar.conflict_profile,
                        } as any,
                        { onConflict: 'character_id' }
                      )
                    );
                  }
                  if (engineChar.mottos && engineChar.mottos.length > 0) {
                    await write('character_mottos.delete', name, () =>
                      realSupabase.from('character_mottos').delete().eq('character_id', charId).eq('source_type', 'ai')
                    );
                    await write('character_mottos.insert', name, () =>
                      realSupabase.from('character_mottos').insert(
                        engineChar.mottos!.map(m => ({
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          motto: m,
                          source_type: 'ai',
                        }))
                      )
                    );
                  }
                  if (engineChar.lexicon && engineChar.lexicon.length > 0) {
                    await write('character_lexicon.delete', name, () =>
                      realSupabase.from('character_lexicon').delete().eq('character_id', charId).eq('source_type', 'ai')
                    );
                    await write('character_lexicon.insert', name, () =>
                      realSupabase.from('character_lexicon').insert(
                        engineChar.lexicon!.map(l => ({
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          phrase: l.phrase,
                          meaning: l.meaning,
                          source_type: 'ai',
                        }))
                      )
                    );
                  }
                  if (engineChar.audience_mods && engineChar.audience_mods.length > 0) {
                    // engine 008: brevity/deference/defiance/warmth 0-75
                    await write('character_audience_mods.delete', name, () =>
                      realSupabase.from('character_audience_mods').delete().eq('character_id', charId).eq('source_type', 'ai')
                    );
                    await write('character_audience_mods.insert', name, () =>
                      realSupabase.from('character_audience_mods').insert(
                        engineChar.audience_mods!.map(a => ({
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          source_type: 'ai',
                          audience_tag: a.audience_tag,
                          brevity: a.brevity,
                          deference: a.deference,
                          defiance: a.defiance,
                          warmth: a.warmth,
                        }))
                      )
                    );
                  }
                  if (engineChar.emotion_map && engineChar.emotion_map.length > 0) {
                    await write('character_emotion_map.delete', name, () =>
                      realSupabase.from('character_emotion_map').delete().eq('character_id', charId).eq('source_type', 'ai')
                    );
                    await write('character_emotion_map.insert', name, () =>
                      realSupabase.from('character_emotion_map').insert(
                        engineChar.emotion_map!.map(e => ({
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          source_type: 'ai',
                          trigger: e.trigger,
                          voice_shift: e.voice_shift,
                        }))
                      )
                    );
                  }

                  // ── Per-chapter: emotion drift ──
                  if (engineChar.emotion_drift) {
                    for (const drift of engineChar.emotion_drift) {
                      await write('emotion_drift', name, () =>
                        realSupabase.from('emotion_drift').upsert(
                          { character_id: charId, emotion_type: drift.emotion_type, chapter_index: chapterIndex, value: drift.value },
                          { onConflict: 'character_id,emotion_type,chapter_index' }
                        )
                      );
                    }
                  }

                  // ── Per-chapter: surges (replace for this chapter) ──
                  if (engineChar.surges && engineChar.surges.length > 0) {
                    await write('surges.delete', name, () =>
                      realSupabase.from('surges').delete().eq('character_id', charId).eq('chapter_index', chapterIndex)
                    );
                    await write('surges.insert', name, () =>
                      realSupabase.from('surges').insert(
                        engineChar.surges.map(s => ({
                          character_id: charId, chapter_index: chapterIndex,
                          emotion_type: s.emotion_type, scene_position: s.scene_position,
                          peak_intensity: s.peak_intensity, decay_rate: s.decay_rate, duration: s.duration,
                          event_type: s.event_type, trigger_subject: s.trigger_subject,
                          trigger_source: s.trigger_source, trigger_domain: s.trigger_domain,
                          stakes: s.stakes, immediacy: s.immediacy, certainty: s.certainty,
                          description: s.description,
                        }))
                      )
                    );
                  }

                  // ── Relationships (replace all for this character) ──
                  if (engineChar.relationships && engineChar.relationships.length > 0) {
                    await write('relationships.delete', name, () =>
                      realSupabase.from('relationships').delete().eq('character_id', charId)
                    );
                    await write('relationships.insert', name, () =>
                      realSupabase.from('relationships').insert(
                        engineChar.relationships.map(r => ({
                          character_id: charId, target_name: r.target_name,
                          trust: r.trust, threat: r.threat, admiration: r.admiration,
                          envy: r.envy, suspicion: r.suspicion, perception_care: r.perception_care,
                        }))
                      )
                    );
                  }

                  // ── Per-manuscript: verbal tics (engine 008 target) ──
                  if (engineChar.verbal_tics && engineChar.verbal_tics.length > 0) {
                    await write('character_verbal_tics.delete', name, () =>
                      realSupabase.from('character_verbal_tics').delete().eq('character_id', charId).eq('manuscript_id', manuscriptId)
                    );
                    await write('character_verbal_tics.insert', name, () =>
                      realSupabase.from('character_verbal_tics').insert(
                        engineChar.verbal_tics!.map(t => ({
                          character_id: charId,
                          manuscript_id: manuscriptId,
                          source_type: 'ai',
                          phrase: t.phrase,
                          context: t.context,
                          frequency_hint: t.frequency_hint,
                        }))
                      )
                    );
                  }
                }
              }

              // Persist (or clear) error accumulator — observability replaces silent try/catch
              await realSupabase.from('manuscripts').update({
                engine_errors: engineErrors.length > 0 ? engineErrors : null,
              } as any).eq('id', body.manuscriptId);

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
