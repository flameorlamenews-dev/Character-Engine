// ============================================
// CHARACTER ENGINE — TYPES
// ============================================

export type EmotionType = 'joy' | 'sadness' | 'anger' | 'fear' | 'disgust' | 'surprise' | 'trust' | 'anticipation';

export const ALL_EMOTIONS: EmotionType[] = ['joy', 'sadness', 'anger', 'fear', 'disgust', 'surprise', 'trust', 'anticipation'];

export type EventType =
  | 'threat' | 'harm' | 'loss' | 'rejection' | 'insult'
  | 'betrayal' | 'injustice' | 'constraint' | 'failure' | 'obstacle'
  | 'success' | 'reward' | 'connection' | 'separation' | 'humiliation'
  | 'danger_cue' | 'disgust_cue' | 'surprise_reveal' | 'reminder_cue' | 'moral_cue';

export type TriggerSubject = 'self' | 'family' | 'friend' | 'rival' | 'stranger' | 'authority' | 'group' | 'principle' | 'object';

export type TriggerSource = 'self_caused' | 'ally_caused' | 'enemy_caused' | 'authority_caused' | 'world_caused';

export type TriggerDomain = 'safety' | 'belonging' | 'status' | 'autonomy' | 'competence' | 'morality' | 'attachment' | 'future_security';

export interface ExtractedStimulant {
  description: string;
  eventType: EventType;
  subject: TriggerSubject;
  source: TriggerSource;
  domain: TriggerDomain;
  stakes: 0 | 1 | 2 | 3;
  immediacy: 0 | 1 | 2 | 3;
  certainty: 0 | 1 | 2 | 3;
  targetCharacter: string;
  chapterIndex: number;
}

export interface CharacterProfile {
  name: string;
  /** Core Personality: emotional baseline per emotion (0-75) — sensitivity/reactivity */
  emotionalBaseline: Record<EmotionType, number>;
  /** Temperament grid values (0-75) */
  temperament: {
    patience: number;
    impulsiveness: number;
    confrontationalTendency: number;
    agreeableness: number;
    emotionalContainment: number;
    riskAppetite: number;
    curiosity: number;
    prideSensitivity: number;
    shameSensitivity: number;
    empathyBaseline: number;
    dominanceVsDeference: number;
    adaptabilityVsRigidity: number;
  };
  /** Moral structure */
  moralStructure: {
    primaryDriver: string;
    moralRigidity: number;
    guiltSensitivity: number;
    justificationTendency: number;
  };
  /** Which chapters the character is present in */
  presentInChapters: number[];
  /** Reasoning for each value assignment */
  reasoning: Record<string, string>;
}

export interface ChapterEmotionState {
  chapterIndex: number;
  emotions: Record<EmotionType, number>;
  /** The VU value (can exceed 75, up to 100) */
  vuEmotions: Record<EmotionType, number>;
  /** Stimulants that fired this chapter */
  stimulantsFired: ExtractedStimulant[];
  /** Calculation breakdown for documentation */
  breakdown: string[];
}

export interface AIEmotionGuess {
  chapterIndex: number;
  emotions: Record<EmotionType, number>;
  reasoning: string;
}

export interface ComparisonResult {
  character: string;
  chapterIndex: number;
  emotion: EmotionType;
  mathValue: number;
  aiGuess: number;
  gap: number;
  flag: boolean; // true if gap > 15
}
