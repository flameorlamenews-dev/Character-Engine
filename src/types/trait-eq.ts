import type { EmotionType } from '../theme/colors';
import type { Score75 } from './emotions';

/**
 * A trait control point on the EQ curve for an emotion.
 * Each trait that modifies this emotion gets a point on the curve.
 * The point's position shows WHERE along the story it has most effect,
 * and its boost/cut value shows HOW MUCH it pushes the emotion up or down.
 */
export interface TraitEQPoint {
  id: string;
  /** Which trait this point represents */
  traitName: string;
  /** Short label for the UI */
  label: string;
  /** Horizontal position: which chapter region this trait most affects (0 to chapterCount-1) */
  chapterPosition: number;
  /** Boost or cut: positive = amplifies emotion, negative = suppresses it (-37 to +37) */
  boostCut: number;
  /** The trait's score (0-75) — shown in tooltip */
  traitScore: Score75;
  /** Color override if needed */
  color?: string;
}

/** Map of trait modifiers per emotion — defines which traits shape each emotion's EQ curve */
export type EmotionTraitEQ = Record<EmotionType, TraitEQPoint[]>;
