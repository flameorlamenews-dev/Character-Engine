import type { EmotionType } from '../theme/colors';
import type { Score75 } from './emotions';

/** Core Personality Profile — The stable foundation */
export interface CorePersonality {
  /** Section 1: Baseline Temperament Grid (0-75 sliders) */
  temperament: TemperamentGrid;
  /** Section 2: Default Emotional Baseline (0-75 per core emotion) */
  emotionalBaseline: Record<EmotionType, Score75>;
  /** Section 3: Moral Structure */
  moralStructure: MoralStructure;
  /** Section 4: Desire Hierarchy (scored 0-75, then ranked) */
  desireHierarchy: DesireEntry[];
  /** Section 5A: General Traits (0-75) */
  generalTraits: GeneralTraits;
  /** Section 5B: Core Conditional Traits */
  conditionalTraits: ConditionalTrait[];
}

export interface TemperamentGrid {
  patience: Score75;
  impulsiveness: Score75;
  confrontationalTendency: Score75;
  agreeableness: Score75;
  emotionalContainment: Score75;
  riskAppetite: Score75;
  curiosity: Score75;
  prideSensitivity: Score75;
  shameSensitivity: Score75;
  empathyBaseline: Score75;
  dominanceVsDeference: Score75;
  adaptabilityVsRigidity: Score75;
}

export interface MoralStructure {
  primaryDriver: MoralDriver;
  moralRigidity: Score75;
  guiltSensitivity: Score75;
  justificationTendency: Score75;
}

export type MoralDriver =
  | 'protection' | 'fairness' | 'loyalty' | 'autonomy' | 'order';

export interface DesireEntry {
  name: string;
  score: Score75;
  rank: number;
}

export interface GeneralTraits {
  stubbornness: Score75;
  warmth: Score75;
  skepticism: Score75;
  humorStyle: Score75;
  competitiveness: Score75;
  orderliness: Score75;
  compassion: Score75;
  reservedness: Score75;
}

export interface ConditionalTrait {
  traitLabel: string;
  triggerCondition: string;
  targetScope: string;
  intensityScore: Score75;
  overrideStrength: Score75;
}
