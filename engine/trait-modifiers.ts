// ============================================
// TRAIT → EMOTION MODIFIER TABLE
// ============================================
// Traits amplify or dampen specific emotions.
// modifier = (trait_score / 75) × modifier_strength

import type { EmotionType } from './types';

interface TraitModifierEntry {
  /** Key in the temperament grid or moral structure */
  traitKey: string;
  /** Which emotion this modifies */
  emotion: EmotionType | 'ALL';
  /** Modifier strength: positive = amplify, negative = dampen */
  strength: number;
  /** Human-readable explanation */
  reason: string;
}

export const TRAIT_MODIFIER_TABLE: TraitModifierEntry[] = [
  // Empathy amplifies sadness (feels others' pain) and joy (empathic joy)
  { traitKey: 'empathyBaseline', emotion: 'sadness', strength: 0.4, reason: 'High empathy = feels loss/pain more deeply' },
  { traitKey: 'empathyBaseline', emotion: 'joy', strength: 0.2, reason: 'Empathic joy — shares in others\' happiness' },

  // Emotional containment dampens ALL emotions (suppression)
  { traitKey: 'emotionalContainment', emotion: 'ALL', strength: -0.3, reason: 'High containment = suppresses emotional expression' },

  // Confrontational tendency amplifies anger
  { traitKey: 'confrontationalTendency', emotion: 'anger', strength: 0.3, reason: 'Confrontational = anger rises faster in conflict' },

  // Pride sensitivity amplifies anger (when pride is hit)
  { traitKey: 'prideSensitivity', emotion: 'anger', strength: 0.2, reason: 'Sensitive pride = anger when status/competence challenged' },

  // Shame sensitivity amplifies sadness
  { traitKey: 'shameSensitivity', emotion: 'sadness', strength: 0.3, reason: 'Shame-sensitive = sadness from exposure/failure' },

  // Guilt sensitivity amplifies sadness
  { traitKey: 'guiltSensitivity', emotion: 'sadness', strength: 0.3, reason: 'High guilt = sadness from moral self-judgment' },

  // Risk appetite dampens fear (brave = less fear)
  { traitKey: 'riskAppetite', emotion: 'fear', strength: -0.15, reason: 'High risk appetite = slightly less fear (but being harmed still terrifies)' },

  // Stubbornness amplifies anger (won't let go)
  { traitKey: 'stubbornness', emotion: 'anger', strength: 0.15, reason: 'Stubborn = anger persists, won\'t release' },

  // Warmth amplifies joy and trust
  { traitKey: 'warmth', emotion: 'joy', strength: 0.2, reason: 'Warm personality = amplifies positive connections' },
  { traitKey: 'warmth', emotion: 'trust', strength: 0.2, reason: 'Warmth builds trust faster' },

  // Skepticism dampens trust
  { traitKey: 'skepticism', emotion: 'trust', strength: -0.3, reason: 'Skeptical = trust is harder to build' },

  // Adaptability dampens surprise (adapts to unexpected quickly)
  { traitKey: 'adaptabilityVsRigidity', emotion: 'surprise', strength: -0.2, reason: 'Adaptable = recovers from surprise faster' },

  // Patience dampens anger
  { traitKey: 'patience', emotion: 'anger', strength: -0.2, reason: 'Patient = slower to anger' },

  // Impulsiveness amplifies surprise and anger
  { traitKey: 'impulsiveness', emotion: 'surprise', strength: 0.15, reason: 'Impulsive = reacts more to surprises' },
  { traitKey: 'impulsiveness', emotion: 'anger', strength: 0.1, reason: 'Impulsive = anger flares quickly' },

  // Moral rigidity amplifies disgust (at moral violations)
  { traitKey: 'moralRigidity', emotion: 'disgust', strength: 0.3, reason: 'Rigid morals = stronger moral disgust' },
  { traitKey: 'moralRigidity', emotion: 'anger', strength: 0.2, reason: 'Rigid morals = anger at injustice' },

  // Curiosity amplifies anticipation
  { traitKey: 'curiosity', emotion: 'anticipation', strength: 0.2, reason: 'Curious = heightened anticipation for new info' },
];

/**
 * Calculate the total trait modifier for a specific emotion given a character's traits.
 * Returns the sum of all applicable modifiers.
 */
export function calculateTraitModifier(
  emotion: EmotionType,
  temperament: Record<string, number>,
  moralStructure: { moralRigidity: number; guiltSensitivity: number; justificationTendency: number }
): { totalModifier: number; breakdown: string[] } {
  const allTraits: Record<string, number> = { ...temperament, ...moralStructure };
  let totalModifier = 0;
  const breakdown: string[] = [];

  for (const entry of TRAIT_MODIFIER_TABLE) {
    if (entry.emotion !== emotion && entry.emotion !== 'ALL') continue;

    const traitValue = allTraits[entry.traitKey];
    if (traitValue === undefined) continue;

    const modifier = (traitValue / 75) * entry.strength;
    totalModifier += modifier;
    breakdown.push(`  ${entry.traitKey}(${traitValue}/75 × ${entry.strength}) = ${modifier > 0 ? '+' : ''}${modifier.toFixed(3)} [${entry.reason}]`);
  }

  return { totalModifier, breakdown };
}
