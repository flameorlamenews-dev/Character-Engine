import type { CorePersonality } from './personality';
import type { EmotionTimeline } from './emotions';
import type { Score75 } from './emotions';

export interface Book {
  id: string;
  title: string;
  seriesName?: string;
  seriesOrder?: number;
  chapters: Chapter[];
}

export interface Chapter {
  index: number;
  title: string;
  /** Whether the character appears in this chapter */
  characterPresent: boolean;
}

export interface Character {
  id: string;
  name: string;
  avatarColor: string;
  corePersonality: CorePersonality;
  emotionTimelines: EmotionTimeline[];
  relationships: Relationship[];
  influenceVariables: InfluenceVariable[];
}

/** Perception Engine — per-character relationship data */
export interface Relationship {
  targetName: string;
  trust: Score75;
  threat: Score75;
  admiration: Score75;
  envy: Score75;
  suspicion: Score75;
  /** How much they care about this person's perception of them */
  perceptionCare: Score75;
}

/** Influence Variables — the effects rack */
export interface InfluenceVariable {
  name: string;
  label: string;
  value: Score75;
}

export interface Session {
  book: Book;
  character: Character;
  currentChapter: number;
  zoomLevel: number;
  viewMode: 'producer' | 'player';
  editMode: boolean;
}
