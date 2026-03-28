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

/** Decay rate: 50% per chapter for untriggered emotions — emotions fade fast if not reinforced */
const DECAY_RATE = 0.50;
/** Faster decay for red zone (above 75): 65% per chapter */
const RED_ZONE_DECAY_RATE = 0.65;
/** Even triggered emotions decay partially — carry-over dampening */
const TRIGGERED_CARRY_DECAY = 0.25;

/**
 * Ambient emotion inference: when a chapter has intense events,
 * certain emotions fire at a base level even if not explicitly mapped.
 * This models the "atmosphere" of a chapter — high-stakes events
 * create surprise, anticipation, and fear as ambient background.
 */
function inferAmbientEmotions(
  stimulants: ExtractedStimulant[],
  deltas: Record<EmotionType, number>,
  triggered: Set<EmotionType>,
  breakdown: string[]
) {
  if (stimulants.length === 0) return;

  // Average trigger intensity of this chapter
  const avgTrigger = stimulants.reduce((sum, s) => {
    const t = calculateTriggerMultiplier(s.stakes, s.immediacy, s.certainty);
    return sum + t.multiplier;
  }, 0) / stimulants.length;

  // If chapter has high average intensity (>=0.6) and surprise wasn't explicitly triggered
  if (avgTrigger >= 0.6 && !triggered.has('surprise')) {
    const ambient = avgTrigger * 15;
    deltas.surprise += ambient;
    triggered.add('surprise');
    breakdown.push(`  Ambient surprise: avg_trigger(${avgTrigger.toFixed(2)}) × 15 = +${ambient.toFixed(1)}`);
  }

  // If chapter has ANY extreme event (>=0.85), anticipation and fear get ambient boost
  const hasExtreme = stimulants.some(s => {
    const t = calculateTriggerMultiplier(s.stakes, s.immediacy, s.certainty);
    return t.multiplier >= 0.85;
  });

  if (hasExtreme) {
    if (!triggered.has('anticipation')) {
      const ambient = avgTrigger * 10;
      deltas.anticipation += ambient;
      triggered.add('anticipation');
      breakdown.push(`  Ambient anticipation: extreme event detected → +${ambient.toFixed(1)}`);
    }
    if (!triggered.has('fear')) {
      const ambient = avgTrigger * 12;
      deltas.fear += ambient;
      triggered.add('fear');
      breakdown.push(`  Ambient fear: extreme event detected → +${ambient.toFixed(1)}`);
    }
  }

  // If chapter has positive events (success, reward, connection), add ambient joy/trust
  const hasPositive = stimulants.some(s => ['success', 'reward', 'connection'].includes(s.eventType));
  if (hasPositive) {
    if (!triggered.has('joy')) {
      deltas.joy += 8;
      triggered.add('joy');
      breakdown.push(`  Ambient joy: positive event detected → +8`);
    }
    if (!triggered.has('trust')) {
      deltas.trust += 6;
      triggered.add('trust');
      breakdown.push(`  Ambient trust: positive event detected → +6`);
    }
  }
}

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
        let finalDelta = modifiedDelta * subjectMult * sourceMult;

        // Step 6b: Domain amplifier — certain domains amplify specific emotions
        const domainAmps: Record<string, Partial<Record<EmotionType, number>>> = {
          safety: { fear: 1.6, anger: 1.2 },
          morality: { disgust: 2.0, anger: 1.3 },
          belonging: { sadness: 1.3, trust: 1.3 },
          attachment: { sadness: 1.4, trust: 1.3 },
          autonomy: { anger: 1.4, fear: 1.3 },
          status: { anger: 1.2, sadness: 1.1 },
          competence: { sadness: 1.1, fear: 1.1 },
          future_security: { fear: 1.3, anticipation: 1.3 },
        };
        const domainAmpBase = domainAmps[stim.domain]?.[targetEmotion];
        // Domain amp only kicks in at High+ triggers, and scales with trigger level
        const domainAmp = domainAmpBase && trigger.multiplier >= 0.85
          ? 1 + (domainAmpBase - 1) * trigger.multiplier
          : undefined;
        if (domainAmp && domainAmp > 1) {
          finalDelta *= domainAmp;
          breakdown.push(`    Domain amp: ${stim.domain} → ${targetEmotion} ×${domainAmp.toFixed(2)} (only at High+ trigger)`);
        }
        breakdown.push(`    Final delta: ${modifiedDelta.toFixed(2)} × ${subjectMult} × ${sourceMult}${domainAmp ? ' × ' + domainAmp : ''} = ${finalDelta.toFixed(2)}`);

        // Cap per-stimulant delta at 50
        const cappedDelta = Math.min(50, Math.abs(finalDelta)) * Math.sign(finalDelta);
        if (Math.abs(cappedDelta) < Math.abs(finalDelta)) {
          breakdown.push(`    Capped: ${finalDelta.toFixed(2)} → ${cappedDelta.toFixed(2)} (max 40 per stimulant)`);
        }

        // Apply (collapse = negative)
        if (isCollapse) {
          deltas[targetEmotion] -= Math.abs(cappedDelta);
          breakdown.push(`    → Trust COLLAPSED by -${Math.abs(cappedDelta).toFixed(2)}`);
        } else {
          deltas[targetEmotion] += cappedDelta;
          triggeredEmotions.add(targetEmotion);
        }
      }
    }

    // Step 7a: Chapter tone adjustment
    // If more positive events than negative, dampen negative emotions (and vice versa)
    const positiveTypes = new Set(['success', 'reward', 'connection']);
    const negativeTypes = new Set(['threat', 'harm', 'loss', 'rejection', 'insult', 'betrayal', 'injustice', 'constraint', 'failure', 'humiliation', 'danger_cue', 'disgust_cue']);
    const posCount = chapterStimulants.filter(s => positiveTypes.has(s.eventType)).length;
    const negCount = chapterStimulants.filter(s => negativeTypes.has(s.eventType)).length;

    if (posCount > negCount && negCount > 0) {
      const dampenFactor = 0.4; // positive-dominant chapters dampen negative emotions
      for (const e of ['anger', 'sadness', 'fear', 'disgust'] as EmotionType[]) {
        if (deltas[e] > 0) {
          const dampened = deltas[e] * dampenFactor;
          breakdown.push(`  Tone adjustment: positive chapter dampens ${e}: ${deltas[e].toFixed(1)} × ${dampenFactor} = ${dampened.toFixed(1)}`);
          deltas[e] = dampened;
        }
      }
    } else if (negCount > posCount && posCount > 0) {
      const dampenFactor = 0.4; // negative-dominant chapters dampen positive emotions
      for (const e of ['joy', 'trust', 'anticipation'] as EmotionType[]) {
        if (deltas[e] > 0) {
          const dampened = deltas[e] * dampenFactor;
          breakdown.push(`  Tone adjustment: negative chapter dampens ${e}: ${deltas[e].toFixed(1)} × ${dampenFactor} = ${dampened.toFixed(1)}`);
          deltas[e] = dampened;
        }
      }
    }

    // Step 7a2: Infer ambient emotions from chapter intensity
    inferAmbientEmotions(chapterStimulants, deltas, triggeredEmotions, breakdown);

    // Step 7a2: Normalize chapter deltas — diminishing returns for stacking
    // But ONLY compress when average trigger is below Extreme
    // Extreme chapters should be allowed to hit hard
    const avgTriggerLevel = chapterStimulants.length > 0
      ? chapterStimulants.reduce((sum, s) => sum + s.stakes + s.immediacy + s.certainty, 0) / chapterStimulants.length
      : 0;
    const compressionThreshold = avgTriggerLevel >= 7 ? 75 : 55; // no compression for extreme chapters

    for (const e of ALL_EMOTIONS) {
      const raw = deltas[e];
      if (raw > compressionThreshold) {
        const compressed = compressionThreshold + Math.sqrt(raw - compressionThreshold) * 4;
        breakdown.push(`  Compression: ${e} raw=${raw.toFixed(1)} → compressed=${compressed.toFixed(1)} (threshold=${compressionThreshold})`);
        deltas[e] = compressed;
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

      // Emotion value = weighted blend of carry-over + current chapter events
      // carry_weight: how much of previous value persists (0.30 = 30%)
      // current_weight: how much current chapter events dominate (0.70 = 70%)
      // Carry-over depends on whether the emotion was reinforced
      // If reinforced this chapter: keep 35% of previous + new deltas
      // If NOT reinforced: keep only 15% (fades fast without reinforcement)
      // Carry depends on trigger, intensity, AND emotion type
      // Sadness and anger are volatile — they fade faster
      // Fear persists more (anxiety lingers)
      const emotionCarryBase: Partial<Record<EmotionType, number>> = {
        sadness: 0.08,  // volatile — fades fast unless reinforced
        anger: 0.08,    // very volatile — spikes high, drops fast
        fear: 0.25,     // persistent — anxiety lingers
        disgust: 0.12,  // fades relatively fast
      };
      const baseCarry = triggeredEmotions.has(e)
        ? (emotionCarryBase[e] ?? 0.20)
        : 0.02;
      const intensityPenalty = prevValue > 50 ? 0.5 : prevValue > 30 ? 0.7 : 1.0;
      const CARRY_WEIGHT = baseCarry * intensityPenalty;
      const carryValue = prevValue * CARRY_WEIGHT;

      if (!triggeredEmotions.has(e) && deltas[e] <= 0) {
        // Not triggered: carry-over decays, plus any negative deltas (suppression)
        newValue = carryValue + deltas[e];
        if (prevValue > 0.5) {
          breakdown.push(`    ${e}: carry(${prevValue.toFixed(1)} × ${CARRY_WEIGHT}) + delta(${deltas[e].toFixed(2)}) = ${newValue.toFixed(2)}`);
        }
      } else {
        // Triggered: carry-over + new deltas
        newValue = carryValue + deltas[e];
        breakdown.push(`    ${e}: carry(${prevValue.toFixed(1)} × ${CARRY_WEIGHT}) + delta(${deltas[e].toFixed(2)}) = ${newValue.toFixed(2)}`);
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
