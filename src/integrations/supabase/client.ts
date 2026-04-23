import { createClient } from '@supabase/supabase-js';
import { analyzeManuscript, analyzeManuscriptEngine, generateCharacterText, hasClaudeKey } from '../../services/claude-api';

type EngineError = { table: string; character: string; chapter?: number; message: string };

// Sentence-length statistics from a character's externalDialogue samples.
// Nulls when insufficient data — writer treats nulls as "leave column empty."
function computeSentenceStats(externalDialogue: string[] | undefined | null): {
  avg_sentence_length_words: number | null;
  sentence_length_stddev: number | null;
  max_sentence_length_words: number | null;
} {
  if (!externalDialogue || externalDialogue.length === 0) {
    return { avg_sentence_length_words: null, sentence_length_stddev: null, max_sentence_length_words: null };
  }
  const lengths: number[] = [];
  for (const line of externalDialogue) {
    if (typeof line !== 'string') continue;
    for (const s of line.split(/[.!?]+/).map(x => x.trim()).filter(Boolean)) {
      const n = s.split(/\s+/).filter(Boolean).length;
      if (n > 0) lengths.push(n);
    }
  }
  if (lengths.length === 0) {
    return { avg_sentence_length_words: null, sentence_length_stddev: null, max_sentence_length_words: null };
  }
  const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const variance = lengths.reduce((acc, n) => acc + (n - avg) ** 2, 0) / lengths.length;
  return {
    avg_sentence_length_words: Math.round(avg),
    sentence_length_stddev: Math.round(Math.sqrt(variance) * 100) / 100,
    max_sentence_length_words: Math.max(...lengths),
  };
}

// CHECK-constraint coercers: Claude occasionally emits integers or synonyms for
// enum columns. DB rejects anything outside the whitelist with a 400.
// These normalize before writing; null return = skip row rather than error.
function coerceFrequencyHint(v: any): 'low' | 'med' | 'high' | null {
  if (v === 'low' || v === 'med' || v === 'high') return v;
  if (typeof v === 'number') return v <= 1 ? 'low' : v === 2 ? 'med' : 'high';
  if (typeof v === 'string') {
    const l = v.trim().toLowerCase();
    if (l.startsWith('low')) return 'low';
    if (l.startsWith('med')) return 'med';
    if (l.startsWith('high')) return 'high';
  }
  return null;
}

function coerceProfanityLevel(v: any): 'none' | 'mild' | 'moderate' | 'heavy' | null {
  if (v === 'none' || v === 'mild' || v === 'moderate' || v === 'heavy') return v;
  if (typeof v === 'string') {
    const l = v.trim().toLowerCase();
    if (l.includes('none') || l === 'clean') return 'none';
    if (l.includes('mild')) return 'mild';
    if (l.includes('moderate') || l.includes('medium')) return 'moderate';
    if (l.includes('heavy') || l.includes('strong') || l.includes('high')) return 'heavy';
  }
  if (typeof v === 'number') return v <= 0 ? 'none' : v === 1 ? 'mild' : v === 2 ? 'moderate' : 'heavy';
  return null;
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
                // active_hours_local is stable character trait — set on create only.
                // activity_pattern_note can refine on update.
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

              // ── Engine Analysis (Pass 2) ──────────────
              // Scope: ONLY the characters returned by Pass 1 (i.e. characters who actually
              // appear in THIS chapter). No cross-chapter fanout. Independent foundation
              // flags for psych vs voice so re-analyses don't re-emit data that's already
              // persisted. Every write is wrapped by a per-table error accumulator that
              // surfaces to manuscripts.engine_errors + the UI badge.
              const engineErrors: EngineError[] = [];

              await realSupabase.from('manuscripts').update({ analysis_progress: 60 }).eq('id', body.manuscriptId);

              const charIds = [...characterNameToId.values()];
              const [psychExisting, voiceExisting] = charIds.length > 0
                ? await Promise.all([
                    realSupabase.from('temperament_grids').select('character_id').in('character_id', charIds).limit(1),
                    realSupabase.from('character_voice_scales').select('character_id').in('character_id', charIds).limit(1),
                  ])
                : [{ data: [] }, { data: [] }];
              const includePsychFoundation = !psychExisting.data || psychExisting.data.length === 0;
              const includeVoiceFoundation = !voiceExisting.data || voiceExisting.data.length === 0;

              let existingContext = '';
              if (!includePsychFoundation && charIds.length > 0) {
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
                  includePsychFoundation,
                  includeVoiceFoundation,
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
                  fn: () => PromiseLike<{ error: any }>,
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

                // All characters and all independent tables run in parallel.
                // Delete-then-insert pairs stay sequential within each table (replace
                // semantics). Keeps writer phase to ~5s instead of 60s of serial waits.
                await Promise.all(engineResult.characters.map(async (engineChar) => {
                  const charId = characterNameToId.get(engineChar.name)
                    || [...characterNameToId.entries()].find(([k]) => k.toLowerCase() === engineChar.name?.toLowerCase())?.[1];
                  if (!charId) {
                    engineErrors.push({
                      table: 'character_lookup',
                      character: engineChar.name || '(unknown)',
                      chapter: manuscript.chapter_number,
                      message: 'no character ID found',
                    });
                    return;
                  }
                  const name = engineChar.name;

                  const pass1Char = analysis.characters.find(c => c.name === engineChar.name)
                    || analysis.characters.find(c => c.name?.toLowerCase() === engineChar.name?.toLowerCase());
                  const sentenceStats = computeSentenceStats(pass1Char?.externalDialogue);

                  const replace = (
                    label: string,
                    deleteFn: () => PromiseLike<{ error: any }>,
                    insertFn: () => PromiseLike<{ error: any }>,
                  ): Promise<void> =>
                    write(`${label}.delete`, name, deleteFn).then(() => write(`${label}.insert`, name, insertFn));

                  const tasks: Array<Promise<void>> = [];

                  // ── Foundation psychology (only when missing) ──
                  if (engineChar.temperament) {
                    tasks.push(write('temperament_grids', name, () =>
                      realSupabase.from('temperament_grids').upsert(
                        { character_id: charId, ...engineChar.temperament } as any,
                        { onConflict: 'character_id' }
                      )));
                  }
                  if (engineChar.emotional_baseline) {
                    tasks.push(write('emotional_baselines', name, () =>
                      realSupabase.from('emotional_baselines').upsert(
                        { character_id: charId, ...engineChar.emotional_baseline } as any,
                        { onConflict: 'character_id' }
                      )));
                  }
                  if (engineChar.moral_structure) {
                    tasks.push(write('moral_structures', name, () =>
                      realSupabase.from('moral_structures').upsert(
                        { character_id: charId, ...engineChar.moral_structure } as any,
                        { onConflict: 'character_id' }
                      )));
                  }
                  if (engineChar.general_traits) {
                    tasks.push(write('general_traits', name, () =>
                      realSupabase.from('general_traits').upsert(
                        { character_id: charId, ...engineChar.general_traits } as any,
                        { onConflict: 'character_id' }
                      )));
                  }
                  if (engineChar.influence_sliders) {
                    tasks.push(write('influence_sliders', name, () =>
                      realSupabase.from('influence_sliders').upsert(
                        { character_id: charId, ...engineChar.influence_sliders } as any,
                        { onConflict: 'character_id' }
                      )));
                  }
                  if (engineChar.desires && engineChar.desires.length > 0) {
                    tasks.push(replace('desires',
                      () => realSupabase.from('desires').delete().eq('character_id', charId),
                      () => realSupabase.from('desires').insert(
                        engineChar.desires!.map(d => ({ character_id: charId, name: d.name, score: d.score, rank: d.rank }))
                      ),
                    ));
                  }
                  if (engineChar.conditional_traits && engineChar.conditional_traits.length > 0) {
                    tasks.push(replace('conditional_traits',
                      () => realSupabase.from('conditional_traits').delete().eq('character_id', charId),
                      () => realSupabase.from('conditional_traits').insert(
                        engineChar.conditional_traits!.map(t => ({
                          character_id: charId, trait_label: t.trait_label, trigger_condition: t.trigger_condition,
                          target_scope: t.target_scope, intensity_score: t.intensity_score, override_strength: t.override_strength,
                        }))
                      ),
                    ));
                  }

                  // ── Foundation voice layer (only when missing) ──
                  if (engineChar.voice_scales) {
                    // engine 008: 11 integer sliders, 0-75 scale
                    tasks.push(write('character_voice_scales', name, () =>
                      realSupabase.from('character_voice_scales').upsert(
                        { character_id: charId, manuscript_id: manuscriptId, source_type: 'ai', ...engineChar.voice_scales } as any,
                        { onConflict: 'character_id' }
                      )));
                  }
                  if (engineChar.style_rules) {
                    const sr = engineChar.style_rules;
                    tasks.push(write('character_style_rules', name, () =>
                      realSupabase.from('character_style_rules').upsert(
                        {
                          character_id: charId, manuscript_id: manuscriptId, source_type: 'ai',
                          sentence_rhythm: sr.sentence_rhythm,
                          lexical_range: sr.lexical_range,
                          cadence: sr.cadence,
                          punctuation_habits: sr.punctuation_habits,
                          emphasis_method: sr.emphasis_method,
                          forbidden_patterns: sr.forbidden_patterns,
                          world_term_rules: sr.world_term_rules,
                          profanity_level: coerceProfanityLevel(sr.profanity_level),
                          profanity_vocabulary: Array.isArray(sr.profanity_vocabulary) ? sr.profanity_vocabulary : [],
                          ...sentenceStats,
                        } as any,
                        { onConflict: 'character_id' }
                      )));
                  } else if (sentenceStats.avg_sentence_length_words !== null) {
                    // Non-foundation chapter, but fresh dialogue — refresh stats only.
                    tasks.push(write('character_style_rules.stats', name, () =>
                      realSupabase.from('character_style_rules').upsert(
                        { character_id: charId, manuscript_id: manuscriptId, source_type: 'ai', ...sentenceStats } as any,
                        { onConflict: 'character_id' }
                      )));
                  }
                  if (engineChar.conflict_profile) {
                    tasks.push(write('character_conflict_profile', name, () =>
                      realSupabase.from('character_conflict_profile').upsert(
                        { character_id: charId, manuscript_id: manuscriptId, source_type: 'ai', ...engineChar.conflict_profile } as any,
                        { onConflict: 'character_id' }
                      )));
                  }
                  if (engineChar.mottos && engineChar.mottos.length > 0) {
                    tasks.push(replace('character_mottos',
                      () => realSupabase.from('character_mottos').delete().eq('character_id', charId).eq('source_type', 'ai'),
                      () => realSupabase.from('character_mottos').insert(
                        engineChar.mottos!.map(m => ({
                          character_id: charId, manuscript_id: manuscriptId, motto: m, source_type: 'ai',
                        }))
                      ),
                    ));
                  }
                  if (engineChar.lexicon && engineChar.lexicon.length > 0) {
                    tasks.push(replace('character_lexicon',
                      () => realSupabase.from('character_lexicon').delete().eq('character_id', charId).eq('source_type', 'ai'),
                      () => realSupabase.from('character_lexicon').insert(
                        engineChar.lexicon!.map(l => ({
                          character_id: charId, manuscript_id: manuscriptId, phrase: l.phrase, meaning: l.meaning, source_type: 'ai',
                        }))
                      ),
                    ));
                  }
                  if (engineChar.audience_mods && engineChar.audience_mods.length > 0) {
                    tasks.push(replace('character_audience_mods',
                      () => realSupabase.from('character_audience_mods').delete().eq('character_id', charId).eq('source_type', 'ai'),
                      () => realSupabase.from('character_audience_mods').insert(
                        engineChar.audience_mods!.map(a => ({
                          character_id: charId, manuscript_id: manuscriptId, source_type: 'ai',
                          audience_tag: a.audience_tag,
                          brevity: a.brevity, deference: a.deference, defiance: a.defiance, warmth: a.warmth,
                        }))
                      ),
                    ));
                  }
                  if (engineChar.emotion_map && engineChar.emotion_map.length > 0) {
                    tasks.push(replace('character_emotion_map',
                      () => realSupabase.from('character_emotion_map').delete().eq('character_id', charId).eq('source_type', 'ai'),
                      () => realSupabase.from('character_emotion_map').insert(
                        engineChar.emotion_map!.map(e => ({
                          character_id: charId, manuscript_id: manuscriptId, source_type: 'ai',
                          trigger: e.trigger, voice_shift: e.voice_shift,
                        }))
                      ),
                    ));
                  }

                  // ── Per-chapter (always present) ──
                  if (engineChar.emotion_drift) {
                    tasks.push(Promise.all(engineChar.emotion_drift.map(drift =>
                      write('emotion_drift', name, () =>
                        realSupabase.from('emotion_drift').upsert(
                          { character_id: charId, emotion_type: drift.emotion_type, chapter_index: chapterIndex, value: drift.value },
                          { onConflict: 'character_id,emotion_type,chapter_index' }
                        ))
                    )).then(() => {}));
                  }
                  if (engineChar.surges && engineChar.surges.length > 0) {
                    tasks.push(replace('surges',
                      () => realSupabase.from('surges').delete().eq('character_id', charId).eq('chapter_index', chapterIndex),
                      () => realSupabase.from('surges').insert(
                        engineChar.surges.map(s => ({
                          character_id: charId, chapter_index: chapterIndex,
                          emotion_type: s.emotion_type, scene_position: s.scene_position,
                          peak_intensity: s.peak_intensity, decay_rate: s.decay_rate, duration: s.duration,
                          event_type: s.event_type, trigger_subject: s.trigger_subject,
                          trigger_source: s.trigger_source, trigger_domain: s.trigger_domain,
                          stakes: s.stakes, immediacy: s.immediacy, certainty: s.certainty,
                          description: s.description,
                        }))
                      ),
                    ));
                  }
                  if (engineChar.relationships && engineChar.relationships.length > 0) {
                    tasks.push(replace('relationships',
                      () => realSupabase.from('relationships').delete().eq('character_id', charId),
                      () => realSupabase.from('relationships').insert(
                        engineChar.relationships.map(r => ({
                          character_id: charId, target_name: r.target_name,
                          trust: r.trust, threat: r.threat, admiration: r.admiration,
                          envy: r.envy, suspicion: r.suspicion, perception_care: r.perception_care,
                        }))
                      ),
                    ));
                  }
                  if (engineChar.verbal_tics && engineChar.verbal_tics.length > 0) {
                    // Coerce frequency_hint (Claude sometimes emits integers or synonyms).
                    // Drop tics we can't map rather than 400-ing.
                    const validTics = engineChar.verbal_tics
                      .map(t => ({ ...t, frequency_hint: coerceFrequencyHint(t.frequency_hint) }))
                      .filter(t => t.phrase && t.frequency_hint);
                    if (validTics.length > 0) {
                      tasks.push(replace('character_verbal_tics',
                        () => realSupabase.from('character_verbal_tics').delete().eq('character_id', charId).eq('manuscript_id', manuscriptId),
                        () => realSupabase.from('character_verbal_tics').insert(
                          validTics.map(t => ({
                            character_id: charId, manuscript_id: manuscriptId, source_type: 'ai',
                            phrase: t.phrase, context: t.context, frequency_hint: t.frequency_hint,
                          }))
                        ),
                      ));
                    }
                  }

                  await Promise.all(tasks);
                }));
              }

              // Persist (or clear) the per-table error accumulator. UI surfaces this as
              // a red badge on the manuscript card when non-null.
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
