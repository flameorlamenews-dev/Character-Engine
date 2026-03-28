// ============================================
// CHARACTER ENGINE — MAIN CALCULATOR
// ============================================
// Input: CharacterProfile + ExtractedStimulant[]
// Output: ChapterEmotionState[] (per-chapter emotion values)
//
// Pipeline:
//   For each chapter:
//     1. Get stimulants for this chapter
//     2. For each stimulant: trigger level → event→emotion map → base impact → trait mods → subject/source mults
//     3. Sum all deltas per emotion
//     4. Apply suppression
//     5. Apply decay for untriggered emotions
//     6. Clamp values (0-75 track, 0-100 VU)
//     7. Record results

import { ALL_EMOTIONS, type EmotionType, type CharacterProfile, type ExtractedStimulant, type ChapterEmotionState } from './types';
import { EVENT_EMOTION_MAP, SUBJECT_MULTIPLIER, SOURCE_MULTIPLIER, calculateTriggerMultiplier } from './event-emotion-map';
import { calculateTraitModifier } from './trait-modifiers';
import { applySuppression } from './suppression';

/** Decay rate: 12% per chapter for untriggered emotions */
const DECAY_RATE = 0.12;
/** Faster decay for red zone (above 75): 20% per chapter */
const RED_ZONE_DECAY_RATE = 0.20;

/**
 * Run the full emotional engine for a character across all chapters.
 */
export function calculateEmotions(
  profile: CharacterProfile,
  stimulants: ExtractedStimulant[],
  totalChapters: number
): ChapterEmotionState[] {
  const results: ChapterEmotionState[] = [];

  // All emotions start at 0
  let currentEmotions: Record<EmotionType, number> = {} as Record<EmotionType, number>;
  for (const e of ALL_EMOTIONS) currentEmotions[e] = 0;

  for (let ch = 0; ch < totalChapters; ch++) {
    const breakdown: string[] = [];
    breakdown.push(`\n=== Chapter ${ch} ===`);

    // Check if character is present
    if (!profile.presentInChapters.includes(ch)) {
      breakdown.push(`Character NOT PRESENT — values frozen, no line drawn`);
      results.push({
        chapterIndex: ch,
        emotions: { ...currentEmotions },
        vuEmotions: { ...currentEmotions },
        stimulantsFired: [],
        breakdown,
      });
      continue;
    }

    // Get stimulants for this chapter
    const chapterStimulants = stimulants.filter(s => s.chapterIndex === ch);
    breakdown.push(`Stimulants this chapter: ${chapterStimulants.length}`);

    // Track which emotions were triggered this chapter
    const triggeredEmotions = new Set<EmotionType>();

    // Calculate deltas from all stimulants
    const deltas: Record<EmotionType, number> = {} as Record<EmotionType, number>;
    for (const e of ALL_EMOTIONS) deltas[e] = 0;

    for (const stim of chapterStimulants) {
      breakdown.push(`\n  Stimulant: "${stim.description}"`);
      breakdown.push(`    Event: ${stim.eventType} | Subject: ${stim.subject} | Source: ${stim.source} | Domain: ${stim.domain}`);

      // Step 2: Trigger level
      const trigger = calculateTriggerMultiplier(stim.stakes, stim.immediacy, stim.certainty);
      breakdown.push(`    Trigger: stakes=${stim.stakes} imm=${stim.immediacy} cert=${stim.certainty} → total=${trigger.total} → ${trigger.level} (×${trigger.multiplier})`);

      // Step 3: Event → emotion mapping
      const emotionWeights = EVENT_EMOTION_MAP[stim.eventType];
      if (!emotionWeights) {
        breakdown.push(`    WARNING: No emotion mapping for event type "${stim.eventType}"`);
        continue;
      }

      // Subject and source multipliers
      const subjectMult = SUBJECT_MULTIPLIER[stim.subject] ?? 1.0;
      const sourceMult = SOURCE_MULTIPLIER[stim.source] ?? 1.0;
      breakdown.push(`    Subject mult: ${stim.subject} → ×${subjectMult}`);
      breakdown.push(`    Source mult: ${stim.source} → ×${sourceMult}`);

      for (const { emotion, weight } of emotionWeights) {
        const isCollapse = emotion === 'trust_collapse';
        const targetEmotion: EmotionType = isCollapse ? 'trust' : emotion as EmotionType;

        // Step 4: Base impact from emotional baseline
        const baseImpact = profile.emotionalBaseline[targetEmotion];
        const rawDelta = baseImpact * trigger.multiplier * weight;
        breakdown.push(`    ${targetEmotion}${isCollapse ? ' (COLLAPSE)' : ''}: base=${baseImpact} × trig=${trigger.multiplier} × weight=${weight} → raw=${rawDelta.toFixed(2)}`);

        // Step 5: Trait modifiers
        const traitMod = calculateTraitModifier(targetEmotion, profile.temperament, profile.moralStructure);
        const modifiedDelta = rawDelta * (1 + traitMod.totalModifier);
        if (traitMod.breakdown.length > 0) {
          breakdown.push(`    Trait modifiers for ${targetEmotion} (total: ${traitMod.totalModifier > 0 ? '+' : ''}${traitMod.totalModifier.toFixed(3)}):`);
          breakdown.push(...traitMod.breakdown);
        }
        breakdown.push(`    Modified delta: ${rawDelta.toFixed(2)} × (1 + ${traitMod.totalModifier.toFixed(3)}) = ${modifiedDelta.toFixed(2)}`);

        // Step 6: Subject & source multipliers
        const finalDelta = modifiedDelta * subjectMult * sourceMult;
        breakdown.push(`    Final delta: ${modifiedDelta.toFixed(2)} × ${subjectMult} × ${sourceMult} = ${finalDelta.toFixed(2)}`);

        // Apply (collapse = negative)
        if (isCollapse) {
          deltas[targetEmotion] -= Math.abs(finalDelta);
          breakdown.push(`    → Trust COLLAPSED by -${Math.abs(finalDelta).toFixed(2)}`);
        } else {
          deltas[targetEmotion] += finalDelta;
          triggeredEmotions.add(targetEmotion);
        }
      }
    }

    // Step 7b: Apply suppression
    const suppressionLog = applySuppression(currentEmotions, deltas);
    if (suppressionLog.length > 0) {
      breakdown.push(`\n  Suppression applied:`);
      breakdown.push(...suppressionLog);
    }

    // Step 7: Update emotion values
    breakdown.push(`\n  Emotion updates:`);
    const vuEmotions: Record<EmotionType, number> = {} as Record<EmotionType, number>;

    for (const e of ALL_EMOTIONS) {
      const prevValue = currentEmotions[e];
      let newValue = prevValue + deltas[e];

      // Decay: if emotion was NOT triggered this chapter, decay toward zero
      if (!triggeredEmotions.has(e) && deltas[e] <= 0) {
        const decayRate = prevValue > 75 ? RED_ZONE_DECAY_RATE : DECAY_RATE;
        const decay = decayRate * prevValue;
        newValue -= decay;
        if (decay > 0.01) {
          breakdown.push(`    ${e}: ${prevValue.toFixed(1)} + delta(${deltas[e].toFixed(2)}) - decay(${decay.toFixed(2)}) = ${newValue.toFixed(2)}`);
        }
      } else if (deltas[e] !== 0) {
        breakdown.push(`    ${e}: ${prevValue.toFixed(1)} + delta(${deltas[e].toFixed(2)}) = ${newValue.toFixed(2)}`);
      }

      // VU value: 0-100 (can exceed 75)
      vuEmotions[e] = Math.max(0, Math.min(100, newValue));

      // Track value: 0-75 soft cap for the timeline
      currentEmotions[e] = Math.max(0, Math.min(75, newValue));

      if (vuEmotions[e] > 75) {
        breakdown.push(`    *** ${e} in RED ZONE: VU=${vuEmotions[e].toFixed(1)} (track capped at 75) ***`);
      }
    }

    results.push({
      chapterIndex: ch,
      emotions: { ...currentEmotions },
      vuEmotions,
      stimulantsFired: chapterStimulants,
      breakdown,
    });
  }

  return results;
}
