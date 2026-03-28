// ============================================
// EMOTION SUPPRESSION MAP
// ============================================
// When a dominant emotion's CURRENT VALUE is above 40,
// it suppresses specific other emotions.
// Suppression is applied AFTER all deltas are calculated.

import type { EmotionType } from './types';

interface SuppressionRule {
  /** The dominant emotion that does the suppressing */
  dominant: EmotionType;
  /** The emotion being suppressed */
  suppressed: EmotionType;
  /** How much of the dominant's delta is applied as negative to the suppressed */
  strength: number;
}

export const SUPPRESSION_RULES: SuppressionRule[] = [
  // Anger suppresses...
  { dominant: 'anger', suppressed: 'joy', strength: 0.5 },
  { dominant: 'anger', suppressed: 'trust', strength: 0.3 },
  { dominant: 'anger', suppressed: 'fear', strength: 0.15 },  // anger overrides fear

  // Sadness suppresses...
  { dominant: 'sadness', suppressed: 'joy', strength: 0.6 },
  { dominant: 'sadness', suppressed: 'anticipation', strength: 0.3 },
  { dominant: 'sadness', suppressed: 'surprise', strength: 0.2 },

  // Fear suppresses...
  { dominant: 'fear', suppressed: 'joy', strength: 0.4 },
  { dominant: 'fear', suppressed: 'trust', strength: 0.3 },
  { dominant: 'fear', suppressed: 'anticipation', strength: 0.2 },

  // Joy suppresses...
  { dominant: 'joy', suppressed: 'sadness', strength: 0.4 },
  { dominant: 'joy', suppressed: 'fear', strength: 0.3 },
  { dominant: 'joy', suppressed: 'anger', strength: 0.2 },

  // Disgust suppresses...
  { dominant: 'disgust', suppressed: 'joy', strength: 0.4 },
  { dominant: 'disgust', suppressed: 'trust', strength: 0.5 },

  // Trust suppresses...
  { dominant: 'trust', suppressed: 'fear', strength: 0.3 },
  { dominant: 'trust', suppressed: 'disgust', strength: 0.2 },

  // Surprise — no suppression (brief, coexists)
  // Anticipation — no suppression (future-looking, coexists)
];

/** Threshold: suppression only kicks in when dominant emotion is above this */
const SUPPRESSION_THRESHOLD = 40;

/**
 * Apply suppression to emotion deltas based on current emotion values.
 * Modifies the deltas in place.
 */
export function applySuppression(
  currentValues: Record<EmotionType, number>,
  deltas: Record<EmotionType, number>
): string[] {
  const log: string[] = [];

  for (const rule of SUPPRESSION_RULES) {
    const dominantValue = currentValues[rule.dominant] + (deltas[rule.dominant] || 0);

    if (dominantValue >= SUPPRESSION_THRESHOLD) {
      const dominantDelta = deltas[rule.dominant] || 0;
      if (dominantDelta > 0) {
        const suppression = dominantDelta * rule.strength;
        deltas[rule.suppressed] = (deltas[rule.suppressed] || 0) - suppression;
        log.push(`  Suppression: ${rule.dominant}(${dominantValue.toFixed(1)}) suppresses ${rule.suppressed} by -${suppression.toFixed(2)} (${rule.strength * 100}% of ${rule.dominant} delta)`);
      }
    }
  }

  return log;
}
