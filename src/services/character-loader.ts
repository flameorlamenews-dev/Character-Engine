import { supabase } from '@/integrations/supabase/client';
import type { Character, Relationship, InfluenceVariable } from '@/types/session';
import type { EmotionTimeline, Score75, Surge, SurgeTrigger } from '@/types/emotions';
import type { CorePersonality, TemperamentGrid, MoralStructure, MoralDriver, GeneralTraits, DesireEntry, ConditionalTrait } from '@/types/personality';
import type { EmotionType } from '@/theme/colors';

const EMOTIONS: EmotionType[] = ['joy', 'sadness', 'anger', 'fear', 'disgust', 'surprise', 'trust', 'anticipation'];
const DEFAULT: Score75 = 37 as Score75;

/**
 * Fetch list of characters with profiles from the author dashboard.
 */
export async function fetchCharacterList(userId: string, projectId?: string) {
  let query = (supabase as any).from('characters').select('id, name').eq('user_id', userId);
  if (projectId) query = query.eq('project_id', projectId);
  const { data } = await query.order('name');
  return (data || []) as { id: string; name: string }[];
}

/**
 * Load a character's full engine data from Supabase.
 * Pulls from all engine tables (001_initial_schema) using the character ID.
 * Returns null if character not found.
 */
export async function loadCharacterForEngine(characterId: string): Promise<Character | null> {
  const [
    charResult,
    tempResult,
    baselineResult,
    moralResult,
    desiresResult,
    generalResult,
    conditionalResult,
    driftResult,
    surgesResult,
    silenceResult,
    relResult,
    influenceResult,
  ] = await Promise.all([
    (supabase as any).from('characters').select('id, name').eq('id', characterId).single(),
    (supabase as any).from('temperament_grids').select('*').eq('character_id', characterId).maybeSingle(),
    (supabase as any).from('emotional_baselines').select('*').eq('character_id', characterId).maybeSingle(),
    (supabase as any).from('moral_structures').select('*').eq('character_id', characterId).maybeSingle(),
    (supabase as any).from('desires').select('name, score, rank').eq('character_id', characterId).order('rank'),
    (supabase as any).from('general_traits').select('*').eq('character_id', characterId).maybeSingle(),
    (supabase as any).from('conditional_traits').select('*').eq('character_id', characterId),
    (supabase as any).from('emotion_drift').select('emotion_type, chapter_index, value').eq('character_id', characterId).order('chapter_index'),
    (supabase as any).from('surges').select('*').eq('character_id', characterId).order('chapter_index'),
    (supabase as any).from('silence_blocks').select('emotion_type, start_chapter, end_chapter').eq('character_id', characterId),
    (supabase as any).from('relationships').select('*').eq('character_id', characterId),
    (supabase as any).from('influence_sliders').select('*').eq('character_id', characterId).maybeSingle(),
  ]);

  const charData = charResult.data;
  if (!charData) return null;

  const temperament = buildTemperament(tempResult.data);
  const emotionalBaseline = buildBaseline(baselineResult.data);
  const moralStructure = buildMoral(moralResult.data);
  const generalTraits = buildGeneralTraits(generalResult.data);

  const desireHierarchy: DesireEntry[] = (desiresResult.data || []).map((d: any) => ({
    name: d.name, score: d.score as Score75, rank: d.rank,
  }));

  const conditionalTraits: ConditionalTrait[] = (conditionalResult.data || []).map((d: any) => ({
    traitLabel: d.trait_label,
    triggerCondition: d.trigger_condition,
    targetScope: d.target_scope,
    intensityScore: (d.intensity_score ?? DEFAULT) as Score75,
    overrideStrength: (d.override_strength ?? DEFAULT) as Score75,
  }));

  const corePersonality: CorePersonality = {
    temperament, emotionalBaseline, moralStructure, desireHierarchy, generalTraits, conditionalTraits,
  };

  const emotionTimelines = buildEmotionTimelines(
    emotionalBaseline,
    driftResult.data || [],
    surgesResult.data || [],
    silenceResult.data || [],
  );

  const relationships: Relationship[] = (relResult.data || []).map((r: any) => ({
    targetName: r.target_name || 'Unknown',
    trust: (r.trust ?? 0) as Score75,
    threat: (r.threat ?? 0) as Score75,
    admiration: (r.admiration ?? 0) as Score75,
    envy: (r.envy ?? 0) as Score75,
    suspicion: (r.suspicion ?? 0) as Score75,
    perceptionCare: (r.perception_care ?? 0) as Score75,
  }));

  const influenceVariables = buildInfluenceVariables(influenceResult.data);

  return {
    id: charData.id,
    name: charData.name,
    avatarColor: '#3b6cbf',
    corePersonality,
    emotionTimelines,
    relationships,
    influenceVariables,
  };
}

// ─── Helpers ─────────────────────────────────────────────────

function buildTemperament(data: any): TemperamentGrid {
  if (!data) return {
    patience: DEFAULT, impulsiveness: DEFAULT, confrontationalTendency: DEFAULT,
    agreeableness: DEFAULT, emotionalContainment: DEFAULT, riskAppetite: DEFAULT,
    curiosity: DEFAULT, prideSensitivity: DEFAULT, shameSensitivity: DEFAULT,
    empathyBaseline: DEFAULT, dominanceVsDeference: DEFAULT, adaptabilityVsRigidity: DEFAULT,
  };
  return {
    patience: (data.patience ?? DEFAULT) as Score75,
    impulsiveness: (data.impulsiveness ?? DEFAULT) as Score75,
    confrontationalTendency: (data.confrontational_tendency ?? DEFAULT) as Score75,
    agreeableness: (data.agreeableness ?? DEFAULT) as Score75,
    emotionalContainment: (data.emotional_containment ?? DEFAULT) as Score75,
    riskAppetite: (data.risk_appetite ?? DEFAULT) as Score75,
    curiosity: (data.curiosity ?? DEFAULT) as Score75,
    prideSensitivity: (data.pride_sensitivity ?? DEFAULT) as Score75,
    shameSensitivity: (data.shame_sensitivity ?? DEFAULT) as Score75,
    empathyBaseline: (data.empathy_baseline ?? DEFAULT) as Score75,
    dominanceVsDeference: (data.dominance_vs_deference ?? DEFAULT) as Score75,
    adaptabilityVsRigidity: (data.adaptability_vs_rigidity ?? DEFAULT) as Score75,
  };
}

function buildBaseline(data: any): Record<EmotionType, Score75> {
  const result = {} as Record<EmotionType, Score75>;
  for (const e of EMOTIONS) {
    result[e] = (data?.[e] ?? DEFAULT) as Score75;
  }
  return result;
}

function buildMoral(data: any): MoralStructure {
  if (!data) return { primaryDriver: 'fairness', moralRigidity: DEFAULT, guiltSensitivity: DEFAULT, justificationTendency: DEFAULT };
  return {
    primaryDriver: (data.primary_driver || 'fairness') as MoralDriver,
    moralRigidity: (data.moral_rigidity ?? DEFAULT) as Score75,
    guiltSensitivity: (data.guilt_sensitivity ?? DEFAULT) as Score75,
    justificationTendency: (data.justification_tendency ?? DEFAULT) as Score75,
  };
}

function buildGeneralTraits(data: any): GeneralTraits {
  if (!data) return {
    stubbornness: DEFAULT, warmth: DEFAULT, skepticism: DEFAULT, humorStyle: DEFAULT,
    competitiveness: DEFAULT, orderliness: DEFAULT, compassion: DEFAULT, reservedness: DEFAULT,
  };
  return {
    stubbornness: (data.stubbornness ?? DEFAULT) as Score75,
    warmth: (data.warmth ?? DEFAULT) as Score75,
    skepticism: (data.skepticism ?? DEFAULT) as Score75,
    humorStyle: (data.humor_style ?? DEFAULT) as Score75,
    competitiveness: (data.competitiveness ?? DEFAULT) as Score75,
    orderliness: (data.orderliness ?? DEFAULT) as Score75,
    compassion: (data.compassion ?? DEFAULT) as Score75,
    reservedness: (data.reservedness ?? DEFAULT) as Score75,
  };
}

function buildEmotionTimelines(
  baseline: Record<EmotionType, Score75>,
  driftRows: any[],
  surgeRows: any[],
  silenceRows: any[],
): EmotionTimeline[] {
  return EMOTIONS.map(emotion => {
    const base = baseline[emotion];

    // Build drift line
    const driftMap = new Map<number, number>();
    for (const row of driftRows) {
      if (row.emotion_type === emotion) {
        driftMap.set(row.chapter_index, row.value);
      }
    }
    const allChapters = new Set<number>([...driftMap.keys()]);
    surgeRows.forEach(s => { if (s.emotion_type === emotion) allChapters.add(s.chapter_index); });
    const maxChapter = allChapters.size > 0 ? Math.max(...allChapters) : 0;

    const driftLine: Score75[] = [];
    for (let i = 0; i <= maxChapter; i++) {
      driftLine.push((driftMap.get(i) ?? base) as Score75);
    }
    if (driftLine.length === 0) driftLine.push(base);

    // Build surges
    const surges: Surge[] = surgeRows
      .filter((s: any) => s.emotion_type === emotion)
      .map((s: any) => ({
        id: s.id,
        emotionType: emotion,
        chapterIndex: s.chapter_index,
        scenePosition: s.scene_position,
        peakIntensity: s.peak_intensity as Score75,
        decayRate: s.decay_rate ?? 0.3,
        duration: s.duration ?? 0.3,
        trigger: {
          description: s.description || '',
          eventType: s.event_type || 'reminder_cue',
          subject: s.trigger_subject || 'self',
          source: s.trigger_source || 'world_caused',
          domain: s.trigger_domain || 'safety',
          stakes: s.stakes ?? 1,
          immediacy: s.immediacy ?? 1,
          certainty: s.certainty ?? 1,
        } as SurgeTrigger,
      }));

    // Build silence blocks
    const silenceBlocks: [number, number][] = silenceRows
      .filter((s: any) => s.emotion_type === emotion)
      .map((s: any) => [s.start_chapter, s.end_chapter] as [number, number]);

    return {
      emotionType: emotion,
      baseline: base,
      driftLine,
      surges,
      silenceBlocks,
    };
  });
}

function buildInfluenceVariables(data: any): InfluenceVariable[] {
  return [
    { name: 'moralOverride', label: 'Moral Override', value: (data?.moral_override ?? 0) as Score75 },
    { name: 'impressionSusceptibility', label: 'Impression Susceptibility', value: (data?.impression_susceptibility ?? DEFAULT) as Score75 },
    { name: 'maskStrength', label: 'Mask Strength', value: (data?.mask_strength ?? 0) as Score75 },
    { name: 'personalityDrift', label: 'Personality Drift', value: (data?.personality_drift ?? 0) as Score75 },
  ];
}
