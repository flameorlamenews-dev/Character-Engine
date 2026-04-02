import { supabase } from '@/integrations/supabase/client';
import type { TemperamentGrid, MoralStructure, MoralDriver, GeneralTraits, DesireEntry, ConditionalTrait } from '@/types/personality';
import type { EmotionType } from '@/theme/colors';
import type { Score75 } from '@/types/emotions';

const EMOTIONS: EmotionType[] = ['joy', 'sadness', 'anger', 'fear', 'disgust', 'surprise', 'trust', 'anticipation'];
const DEFAULT_75 = 37 as Score75;

const TEMPERAMENT_DB_MAP: Record<keyof TemperamentGrid, string> = {
  patience: 'patience', impulsiveness: 'impulsiveness',
  confrontationalTendency: 'confrontational_tendency', agreeableness: 'agreeableness',
  emotionalContainment: 'emotional_containment', riskAppetite: 'risk_appetite',
  curiosity: 'curiosity', prideSensitivity: 'pride_sensitivity',
  shameSensitivity: 'shame_sensitivity', empathyBaseline: 'empathy_baseline',
  dominanceVsDeference: 'dominance_vs_deference', adaptabilityVsRigidity: 'adaptability_vs_rigidity',
};

const GENERAL_TRAITS_DB_MAP: Record<keyof GeneralTraits, string> = {
  stubbornness: 'stubbornness', warmth: 'warmth', skepticism: 'skepticism',
  humorStyle: 'humor_style', competitiveness: 'competitiveness',
  orderliness: 'orderliness', compassion: 'compassion', reservedness: 'reservedness',
};

// ─── Temperament Grid ────────────────────────────────────────

export async function fetchTemperamentGrid(characterId: string): Promise<TemperamentGrid> {
  const { data } = await (supabase as any)
    .from('temperament_grids').select('*').eq('character_id', characterId).maybeSingle();
  const defaults: TemperamentGrid = {
    patience: DEFAULT_75, impulsiveness: DEFAULT_75, confrontationalTendency: DEFAULT_75,
    agreeableness: DEFAULT_75, emotionalContainment: DEFAULT_75, riskAppetite: DEFAULT_75,
    curiosity: DEFAULT_75, prideSensitivity: DEFAULT_75, shameSensitivity: DEFAULT_75,
    empathyBaseline: DEFAULT_75, dominanceVsDeference: DEFAULT_75, adaptabilityVsRigidity: DEFAULT_75,
  };
  if (!data) return defaults;
  const result = { ...defaults };
  for (const [camel, snake] of Object.entries(TEMPERAMENT_DB_MAP)) {
    if (data[snake] != null) (result as any)[camel] = data[snake];
  }
  return result;
}

export async function saveTemperamentGrid(characterId: string, grid: TemperamentGrid) {
  const row: Record<string, any> = { character_id: characterId };
  for (const [camel, snake] of Object.entries(TEMPERAMENT_DB_MAP)) row[snake] = (grid as any)[camel];
  await (supabase as any).from('temperament_grids').upsert(row, { onConflict: 'character_id' });
}

// ─── Emotional Baseline ──────────────────────────────────────

export async function fetchEmotionalBaseline(characterId: string): Promise<Record<EmotionType, Score75>> {
  const { data } = await (supabase as any)
    .from('emotional_baselines').select('*').eq('character_id', characterId).maybeSingle();
  const defaults = Object.fromEntries(EMOTIONS.map(e => [e, DEFAULT_75])) as Record<EmotionType, Score75>;
  if (!data) return defaults;
  for (const e of EMOTIONS) { if (data[e] != null) defaults[e] = data[e] as Score75; }
  return defaults;
}

export async function saveEmotionalBaseline(characterId: string, baseline: Record<EmotionType, Score75>) {
  const row: Record<string, any> = { character_id: characterId };
  for (const e of EMOTIONS) row[e] = baseline[e];
  await (supabase as any).from('emotional_baselines').upsert(row, { onConflict: 'character_id' });
}

// ─── Moral Structure ─────────────────────────────────────────

export async function fetchMoralStructure(characterId: string): Promise<MoralStructure> {
  const { data } = await (supabase as any)
    .from('moral_structures').select('*').eq('character_id', characterId).maybeSingle();
  if (!data) return { primaryDriver: 'fairness', moralRigidity: DEFAULT_75, guiltSensitivity: DEFAULT_75, justificationTendency: DEFAULT_75 };
  return {
    primaryDriver: (data.primary_driver || 'fairness') as MoralDriver,
    moralRigidity: (data.moral_rigidity ?? DEFAULT_75) as Score75,
    guiltSensitivity: (data.guilt_sensitivity ?? DEFAULT_75) as Score75,
    justificationTendency: (data.justification_tendency ?? DEFAULT_75) as Score75,
  };
}

export async function saveMoralStructure(characterId: string, moral: MoralStructure) {
  await (supabase as any).from('moral_structures').upsert({
    character_id: characterId, primary_driver: moral.primaryDriver,
    moral_rigidity: moral.moralRigidity, guilt_sensitivity: moral.guiltSensitivity,
    justification_tendency: moral.justificationTendency,
  }, { onConflict: 'character_id' });
}

// ─── General Traits ──────────────────────────────────────────

export async function fetchGeneralTraits(characterId: string): Promise<GeneralTraits> {
  const { data } = await (supabase as any)
    .from('general_traits').select('*').eq('character_id', characterId).maybeSingle();
  const defaults: GeneralTraits = {
    stubbornness: DEFAULT_75, warmth: DEFAULT_75, skepticism: DEFAULT_75, humorStyle: DEFAULT_75,
    competitiveness: DEFAULT_75, orderliness: DEFAULT_75, compassion: DEFAULT_75, reservedness: DEFAULT_75,
  };
  if (!data) return defaults;
  const result = { ...defaults };
  for (const [camel, snake] of Object.entries(GENERAL_TRAITS_DB_MAP)) {
    if (data[snake] != null) (result as any)[camel] = data[snake];
  }
  return result;
}

export async function saveGeneralTraits(characterId: string, traits: GeneralTraits) {
  const row: Record<string, any> = { character_id: characterId };
  for (const [camel, snake] of Object.entries(GENERAL_TRAITS_DB_MAP)) row[snake] = (traits as any)[camel];
  await (supabase as any).from('general_traits').upsert(row, { onConflict: 'character_id' });
}

// ─── Desires ─────────────────────────────────────────────────

export async function fetchDesires(characterId: string): Promise<DesireEntry[]> {
  const { data } = await (supabase as any)
    .from('desires').select('name, score, rank').eq('character_id', characterId).order('rank');
  if (!data || data.length === 0) return [];
  return data.map((d: any) => ({ name: d.name, score: d.score as Score75, rank: d.rank }));
}

export async function saveDesires(characterId: string, desires: DesireEntry[]) {
  await (supabase as any).from('desires').delete().eq('character_id', characterId);
  if (desires.length > 0) {
    await (supabase as any).from('desires').insert(
      desires.map(d => ({ character_id: characterId, name: d.name, score: d.score, rank: d.rank }))
    );
  }
}

// ─── Conditional Traits ──────────────────────────────────────

export async function fetchConditionalTraits(characterId: string): Promise<ConditionalTrait[]> {
  const { data } = await (supabase as any)
    .from('conditional_traits').select('trait_label, trigger_condition, target_scope, intensity_score, override_strength')
    .eq('character_id', characterId);
  if (!data || data.length === 0) return [];
  return data.map((d: any) => ({
    traitLabel: d.trait_label, triggerCondition: d.trigger_condition, targetScope: d.target_scope,
    intensityScore: (d.intensity_score ?? DEFAULT_75) as Score75, overrideStrength: (d.override_strength ?? DEFAULT_75) as Score75,
  }));
}

export async function saveConditionalTraits(characterId: string, traits: ConditionalTrait[]) {
  await (supabase as any).from('conditional_traits').delete().eq('character_id', characterId);
  if (traits.length > 0) {
    await (supabase as any).from('conditional_traits').insert(
      traits.map(t => ({
        character_id: characterId, trait_label: t.traitLabel, trigger_condition: t.triggerCondition,
        target_scope: t.targetScope, intensity_score: t.intensityScore, override_strength: t.overrideStrength,
      }))
    );
  }
}

// ─── Influence Sliders ───────────────────────────────────────

export interface InfluenceSliders {
  moralOverride: Score75;
  impressionSusceptibility: Score75;
  maskStrength: Score75;
  personalityDrift: Score75;
}

export async function fetchInfluenceSliders(characterId: string): Promise<InfluenceSliders> {
  const { data } = await (supabase as any)
    .from('influence_sliders').select('*').eq('character_id', characterId).maybeSingle();
  if (!data) return { moralOverride: 0 as Score75, impressionSusceptibility: DEFAULT_75, maskStrength: 0 as Score75, personalityDrift: 0 as Score75 };
  return {
    moralOverride: (data.moral_override ?? 0) as Score75,
    impressionSusceptibility: (data.impression_susceptibility ?? DEFAULT_75) as Score75,
    maskStrength: (data.mask_strength ?? 0) as Score75,
    personalityDrift: (data.personality_drift ?? 0) as Score75,
  };
}

export async function saveInfluenceSliders(characterId: string, sliders: InfluenceSliders) {
  await (supabase as any).from('influence_sliders').upsert({
    character_id: characterId, moral_override: sliders.moralOverride,
    impression_susceptibility: sliders.impressionSusceptibility,
    mask_strength: sliders.maskStrength, personality_drift: sliders.personalityDrift,
  }, { onConflict: 'character_id' });
}

// ─── Bulk operations ─────────────────────────────────────────

export async function fetchAllEngineData(characterId: string) {
  const [temperament, emotionalBaseline, moralStructure, generalTraits, desires, conditionalTraits, influenceSliders] =
    await Promise.all([
      fetchTemperamentGrid(characterId),
      fetchEmotionalBaseline(characterId),
      fetchMoralStructure(characterId),
      fetchGeneralTraits(characterId),
      fetchDesires(characterId),
      fetchConditionalTraits(characterId),
      fetchInfluenceSliders(characterId),
    ]);
  return { temperament, emotionalBaseline, moralStructure, generalTraits, desires, conditionalTraits, influenceSliders };
}

export async function saveAllEngineData(
  characterId: string,
  data: {
    temperament: TemperamentGrid;
    emotionalBaseline: Record<EmotionType, Score75>;
    moralStructure: MoralStructure;
    generalTraits: GeneralTraits;
    desires: DesireEntry[];
    conditionalTraits: ConditionalTrait[];
    influenceSliders: InfluenceSliders;
  }
) {
  await Promise.all([
    saveTemperamentGrid(characterId, data.temperament),
    saveEmotionalBaseline(characterId, data.emotionalBaseline),
    saveMoralStructure(characterId, data.moralStructure),
    saveGeneralTraits(characterId, data.generalTraits),
    saveDesires(characterId, data.desires),
    saveConditionalTraits(characterId, data.conditionalTraits),
    saveInfluenceSliders(characterId, data.influenceSliders),
  ]);
}
