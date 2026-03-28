// ============================================
// EVENT TYPE → EMOTION MAPPING TABLE
// ============================================
// Each event type fires specific emotions with weights.
// "trust_collapse" is special — subtracts from trust.

import type { EventType, EmotionType } from './types';

interface EmotionWeight {
  emotion: EmotionType | 'trust_collapse';
  weight: number;
}

export const EVENT_EMOTION_MAP: Record<EventType, EmotionWeight[]> = {
  threat:          [{ emotion: 'fear', weight: 0.7 },      { emotion: 'anger', weight: 0.2 },     { emotion: 'anticipation', weight: 0.1 }],
  harm:            [{ emotion: 'fear', weight: 0.5 },      { emotion: 'anger', weight: 0.3 },     { emotion: 'sadness', weight: 0.2 }],
  loss:            [{ emotion: 'sadness', weight: 0.7 },   { emotion: 'fear', weight: 0.2 },      { emotion: 'anger', weight: 0.1 }],
  rejection:       [{ emotion: 'sadness', weight: 0.6 },   { emotion: 'anger', weight: 0.2 },     { emotion: 'fear', weight: 0.2 }],
  insult:          [{ emotion: 'anger', weight: 0.6 },     { emotion: 'disgust', weight: 0.2 },   { emotion: 'sadness', weight: 0.2 }],
  betrayal:        [{ emotion: 'sadness', weight: 0.4 },   { emotion: 'anger', weight: 0.3 },     { emotion: 'trust_collapse', weight: 0.3 }],
  injustice:       [{ emotion: 'anger', weight: 0.5 },     { emotion: 'disgust', weight: 0.3 },   { emotion: 'sadness', weight: 0.2 }],
  constraint:      [{ emotion: 'anger', weight: 0.5 },     { emotion: 'fear', weight: 0.3 },      { emotion: 'sadness', weight: 0.2 }],
  failure:         [{ emotion: 'sadness', weight: 0.5 },   { emotion: 'fear', weight: 0.3 },      { emotion: 'anger', weight: 0.2 }],
  obstacle:        [{ emotion: 'anger', weight: 0.4 },     { emotion: 'anticipation', weight: 0.3 }, { emotion: 'fear', weight: 0.3 }],
  success:         [{ emotion: 'joy', weight: 0.7 },       { emotion: 'trust', weight: 0.2 },     { emotion: 'anticipation', weight: 0.1 }],
  reward:          [{ emotion: 'joy', weight: 0.6 },       { emotion: 'trust', weight: 0.3 },     { emotion: 'anticipation', weight: 0.1 }],
  connection:      [{ emotion: 'trust', weight: 0.5 },     { emotion: 'joy', weight: 0.3 },       { emotion: 'anticipation', weight: 0.2 }],
  separation:      [{ emotion: 'sadness', weight: 0.6 },   { emotion: 'fear', weight: 0.2 },      { emotion: 'anger', weight: 0.2 }],
  humiliation:     [{ emotion: 'sadness', weight: 0.4 },   { emotion: 'anger', weight: 0.3 },     { emotion: 'disgust', weight: 0.3 }],
  danger_cue:      [{ emotion: 'fear', weight: 0.7 },      { emotion: 'anticipation', weight: 0.2 }, { emotion: 'anger', weight: 0.1 }],
  disgust_cue:     [{ emotion: 'disgust', weight: 0.8 },   { emotion: 'anger', weight: 0.1 },     { emotion: 'fear', weight: 0.1 }],
  surprise_reveal: [{ emotion: 'surprise', weight: 0.7 },  { emotion: 'fear', weight: 0.15 },     { emotion: 'anticipation', weight: 0.15 }],
  reminder_cue:    [{ emotion: 'sadness', weight: 0.5 },   { emotion: 'fear', weight: 0.3 },      { emotion: 'anger', weight: 0.2 }],
  moral_cue:       [{ emotion: 'disgust', weight: 0.4 },   { emotion: 'anger', weight: 0.3 },     { emotion: 'sadness', weight: 0.3 }],
};

// Subject multipliers — WHO it happened to
export const SUBJECT_MULTIPLIER: Record<string, number> = {
  self: 1.0,
  family: 0.9,
  friend: 0.8,
  group: 0.7,
  authority: 0.6,
  rival: 0.5,
  principle: 0.5,
  stranger: 0.3,
  object: 0.2,
};

// Source multipliers — WHO caused it
export const SOURCE_MULTIPLIER: Record<string, number> = {
  ally_caused: 1.3,
  self_caused: 1.1,
  authority_caused: 1.0,
  enemy_caused: 0.8,
  world_caused: 0.7,
};

// Trigger level calculation
export function calculateTriggerMultiplier(stakes: number, immediacy: number, certainty: number): { total: number; level: string; multiplier: number } {
  const total = stakes + immediacy + certainty;
  if (total <= 2) return { total, level: 'Low', multiplier: 0.3 };
  if (total <= 5) return { total, level: 'Medium', multiplier: 0.6 };
  if (total <= 7) return { total, level: 'High', multiplier: 0.85 };
  return { total, level: 'Extreme', multiplier: 1.0 };
}
