import type { Score75 } from './emotions';
import type { EmotionType } from '../theme/colors';

/** A character trait with its impact on decision-making */
export interface TraitEntry {
  name: string;
  /** How strongly this trait impacts decisions (0-75) */
  impact: Score75;
  /** Brief description of how it affects the character */
  effect: string;
}

/** What caused a lingering emotion to grow in weight */
export interface LingeringEmotionEvent {
  chapter: number;
  /** memory = character thinks about it, refelt = emotion hits again, behavior_change = alters how they act */
  type: 'memory' | 'refelt' | 'behavior_change';
  description: string;
  /** How much this event added to the accumulated weight */
  intensityDelta: number;
}

/**
 * A lingering emotional response toward a specific event.
 * Not the event itself, not the emotion alone — the combination.
 * Measures accumulated emotional weight: how loud is this reverb still playing?
 * Grows when: character thinks about it, re-feels it, or it changes their behavior.
 * Can fuel both action AND inaction. Higher = more present, more distorting.
 */
export interface LingeringEmotion {
  id: string;
  /** The emotion + event combo, e.g. "Guilt toward Tien's death" */
  label: string;
  /** The core emotion type */
  emotionType: EmotionType;
  /** The specific event/scene this is tied to */
  event: string;
  /** Per-chapter cumulative intensity (0-75). Index = chapter index. 0 = not yet active. */
  intensityByChapter: number[];
  /** What caused each growth in intensity */
  growthEvents: LingeringEmotionEvent[];
}

/** A desire that actively drives the character's behavior */
export interface DesirePressureEntry {
  name: string;
  /** How much this desire is currently driving actions (0-75) */
  pressure: Score75;
  /** How this desire has altered behavior */
  effect: string;
  /** Chapter where this desire becomes apparent (may be revealed later) */
  revealedAtChapter: number;
}

/** A behavioral habit/tell that indicates emotional state */
export interface HabitEntry {
  name: string;
  /** How frequently this habit occurs (0-75) */
  frequency: Score75;
  /** What it indicates about the character's state */
  indicates: string;
}

/** Full influence panel data for a character */
export interface InfluencePanelData {
  traits: TraitEntry[];
  lingeringEmotions: LingeringEmotion[];
  desirePressure: DesirePressureEntry[];
  habitFormation: HabitEntry[];
  moralOverride: Score75;
  impressionSusceptibility: Score75;
  maskStrength: Score75;
  personalityDrift: Score75;
}
