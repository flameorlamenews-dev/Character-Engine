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
  threat:          [{ emotion: 'fear', weight: 0.7 },      { emotion: 'anger', weight: 0.15 },    { emotion: 'anticipation', weight: 0.15 }],
  harm:            [{ emotion: 'fear', weight: 0.6 },      { emotion: 'anger', weight: 0.2 },     { emotion: 'sadness', weight: 0.1 },     { emotion: 'surprise', weight: 0.1 }],
  loss:            [{ emotion: 'sadness', weight: 0.6 },   { emotion: 'fear', weight: 0.15 },     { emotion: 'anger', weight: 0.1 },       { emotion: 'surprise', weight: 0.15 }],
  rejection:       [{ emotion: 'sadness', weight: 0.5 },   { emotion: 'anger', weight: 0.2 },     { emotion: 'fear', weight: 0.15 },       { emotion: 'surprise', weight: 0.15 }],
  insult:          [{ emotion: 'anger', weight: 0.5 },     { emotion: 'disgust', weight: 0.2 },   { emotion: 'sadness', weight: 0.15 },    { emotion: 'surprise', weight: 0.15 }],
  betrayal:        [{ emotion: 'sadness', weight: 0.3 },   { emotion: 'anger', weight: 0.25 },    { emotion: 'trust_collapse', weight: 0.25 }, { emotion: 'surprise', weight: 0.2 }],
  injustice:       [{ emotion: 'anger', weight: 0.4 },     { emotion: 'disgust', weight: 0.3 },   { emotion: 'sadness', weight: 0.15 },    { emotion: 'surprise', weight: 0.15 }],
  constraint:      [{ emotion: 'fear', weight: 0.5 },      { emotion: 'anger', weight: 0.3 },     { emotion: 'sadness', weight: 0.1 },     { emotion: 'anticipation', weight: 0.1 }],
  failure:         [{ emotion: 'sadness', weight: 0.4 },   { emotion: 'fear', weight: 0.25 },     { emotion: 'anger', weight: 0.2 },       { emotion: 'surprise', weight: 0.15 }],
  obstacle:        [{ emotion: 'anger', weight: 0.3 },     { emotion: 'fear', weight: 0.3 },      { emotion: 'anticipation', weight: 0.25 }, { emotion: 'surprise', weight: 0.15 }],
  success:         [{ emotion: 'joy', weight: 0.5 },       { emotion: 'trust', weight: 0.2 },     { emotion: 'anticipation', weight: 0.15 }, { emotion: 'surprise', weight: 0.15 }],
  reward:          [{ emotion: 'joy', weight: 0.5 },       { emotion: 'trust', weight: 0.25 },    { emotion: 'anticipation', weight: 0.15 }, { emotion: 'surprise', weight: 0.1 }],
  connection:      [{ emotion: 'trust', weight: 0.4 },     { emotion: 'joy', weight: 0.3 },       { emotion: 'anticipation', weight: 0.2 }, { emotion: 'surprise', weight: 0.1 }],
  separation:      [{ emotion: 'sadness', weight: 0.5 },   { emotion: 'fear', weight: 0.25 },     { emotion: 'anger', weight: 0.15 },      { emotion: 'surprise', weight: 0.1 }],
  humiliation:     [{ emotion: 'sadness', weight: 0.3 },   { emotion: 'anger', weight: 0.25 },    { emotion: 'disgust', weight: 0.25 },    { emotion: 'surprise', weight: 0.2 }],
  danger_cue:      [{ emotion: 'fear', weight: 0.45 },     { emotion: 'anticipation', weight: 0.25 }, { emotion: 'anger', weight: 0.15 },   { emotion: 'surprise', weight: 0.15 }],
  disgust_cue:     [{ emotion: 'disgust', weight: 0.6 },   { emotion: 'anger', weight: 0.15 },    { emotion: 'fear', weight: 0.15 },       { emotion: 'surprise', weight: 0.1 }],
  surprise_reveal: [{ emotion: 'surprise', weight: 0.6 },  { emotion: 'fear', weight: 0.2 },      { emotion: 'anticipation', weight: 0.2 }],
  reminder_cue:    [{ emotion: 'sadness', weight: 0.4 },   { emotion: 'fear', weight: 0.2 },      { emotion: 'anticipation', weight: 0.2 }, { emotion: 'trust', weight: 0.2 }],
  moral_cue:       [{ emotion: 'disgust', weight: 0.35 },  { emotion: 'anger', weight: 0.25 },    { emotion: 'sadness', weight: 0.2 },     { emotion: 'surprise', weight: 0.2 }],
};

// Subject multipliers — WHO it happened to
export const SUBJECT_MULTIPLIER: Record<string, number> = {
  self: 1.0,
  family: 0.95,
  friend: 0.85,
  group: 0.85,       // witnessing group suffering hits hard for empathetic characters
  authority: 0.65,
  rival: 0.5,
  principle: 0.6,    // moral principles matter more
  stranger: 0.4,
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
  if (total <= 2) return { total, level: 'Low', multiplier: 0.15 };
  if (total <= 5) return { total, level: 'Medium', multiplier: 0.4 };
  if (total <= 7) return { total, level: 'High', multiplier: 0.75 };
  return { total, level: 'Extreme', multiplier: 1.2 };
}
