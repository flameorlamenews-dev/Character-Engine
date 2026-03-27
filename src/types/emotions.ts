import type { EmotionType } from '../theme/colors';

/** Score constrained to 0-75 range, 25-point tiers */
export type Score75 = number;

export type IntensityTier = 'low' | 'moderate' | 'high';

export function getIntensityTier(score: Score75): IntensityTier {
  if (score <= 25) return 'low';
  if (score <= 50) return 'moderate';
  return 'high';
}

export function clampScore(value: number): Score75 {
  return Math.max(0, Math.min(75, Math.round(value)));
}

/** A single surge event on the emotional timeline */
export interface Surge {
  id: string;
  emotionType: EmotionType;
  chapterIndex: number;
  /** Position within the chapter (0-1) */
  scenePosition: number;
  /** How high the emotion peaks (0-75) */
  peakIntensity: Score75;
  /** Rate of return to baseline (0-1, higher = faster decay) */
  decayRate: number;
  /** Duration in chapter-fractions */
  duration: number;
  /** What caused this surge */
  trigger: SurgeTrigger;
}

export interface SurgeTrigger {
  eventType: EventType;
  subject: TriggerSubject;
  source: TriggerSource;
  domain: TriggerDomain;
  /** Stakes 0-3 */
  stakes: number;
  /** Immediacy 0-3 */
  immediacy: number;
  /** Certainty 0-3 */
  certainty: number;
  description: string;
}

export type TriggerLevel = 'low' | 'medium' | 'high' | 'extreme';

export function calculateTriggerLevel(stakes: number, immediacy: number, certainty: number): TriggerLevel {
  const total = stakes + immediacy + certainty;
  if (total <= 2) return 'low';
  if (total <= 5) return 'medium';
  if (total <= 7) return 'high';
  return 'extreme';
}

export type EventType =
  | 'threat' | 'harm' | 'loss' | 'rejection' | 'insult'
  | 'betrayal' | 'injustice' | 'constraint' | 'failure' | 'obstacle'
  | 'success' | 'reward' | 'connection' | 'separation' | 'humiliation'
  | 'danger_cue' | 'disgust_cue' | 'surprise_reveal' | 'reminder_cue' | 'moral_cue';

export type TriggerSubject =
  | 'self' | 'family' | 'friend' | 'rival' | 'stranger'
  | 'authority' | 'group' | 'principle' | 'object';

export type TriggerSource =
  | 'self_caused' | 'ally_caused' | 'enemy_caused' | 'authority_caused' | 'world_caused';

export type TriggerDomain =
  | 'safety' | 'belonging' | 'status' | 'autonomy'
  | 'competence' | 'morality' | 'attachment' | 'future_security';

/** Timeline data for a single emotion across the whole book */
export interface EmotionTimeline {
  emotionType: EmotionType;
  /** Resting baseline value (0-75) */
  baseline: Score75;
  /** Baseline drift per chapter — how the resting level shifts */
  driftLine: Score75[];
  /** All surge events */
  surges: Surge[];
  /** Chapters where character doesn't appear: [startChapter, endChapter] */
  silenceBlocks: [number, number][];
}

/** Inspector data for a selected surge */
export interface SurgeInspectorData {
  surge: Surge;
  triggerLevel: TriggerLevel;
  traitModifiers: TraitModifier[];
  emotionalOutcome: EmotionalOutcome;
  bodyLanguage: string[];
  speechMarkers: string[];
  aftermath: SurgeAftermath;
}

export interface TraitModifier {
  traitName: string;
  traitScore: Score75;
  effect: string;
}

export interface EmotionalOutcome {
  primary: { emotion: EmotionType; intensity: Score75 };
  secondary?: { emotion: EmotionType; intensity: Score75 };
  lingering?: string;
}

export interface SurgeAftermath {
  selfAwareness: 'low' | 'moderate' | 'high';
  ruminationLevel: 'low' | 'moderate' | 'high';
  repairBehavior: 'low' | 'moderate' | 'high';
  denialTendency: 'low' | 'moderate' | 'high';
}
