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

/** A lingering emotional response toward a specific event */
export interface LingeringEmotion {
  id: string;
  /** The emotion + event combo, e.g. "Guilt toward Tien's death" */
  label: string;
  /** The core emotion type */
  emotionType: EmotionType;
  /** The specific event/scene this is tied to */
  event: string;
  /** How strongly this emotional response is still active (0-75) */
  intensity: Score75;
  /** Which chapters this gets referenced in */
  referencedInChapters: number[];
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
