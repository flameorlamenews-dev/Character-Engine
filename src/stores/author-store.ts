import { createContext, useContext } from 'react';

/* ------------------------------------------------------------------ */
/*  Data shapes (mirror the Supabase tables, stored in-memory)        */
/* ------------------------------------------------------------------ */

export interface Scene {
  id: string;
  sceneIndex: number;
  startLine: number;
  endLine: number;
  summary: string;
  characters: string[];
}

export interface AnalysisResults {
  summary?: string;
  characterImpressions?: string;
  consistencyAnalysis?: string;
  newCharacters?: Array<{ name: string; firstImpressions: string }>;
  recurringCharacters?: Array<{ name: string; evolution: string }>;
  characterArcs?: Array<{ character: string; overallDevelopment: string; keyMoments?: string[] }>;
  consistencyIssues?: Array<{ character: string; chapter?: number; issue: string; examples?: string[] }>;
}

export interface Manuscript {
  id: string;
  title: string;
  content: string;
  chapterNumber: number;
  scenes: Scene[];
  sceneCount: number;
  analyzed: boolean;
  analyzing: boolean;
  analysisResults: AnalysisResults | null;
}

export interface TimelineEntry {
  chapterNumber: number;
  emotionalState: string;
  traits: string[];
  dialoguePatterns: string[];
}

export interface Character {
  id: string;
  name: string;
  description: string;
  role: string;
  traits: string[];
  voiceScales: Record<string, number>;
  mottos: string[];
  lexicon: string[];
  timelineEntries: TimelineEntry[];
  blocked: boolean;
}

export interface GlossaryEntry {
  id: string;
  word: string;
  definition: string;
  wordType: string;
  category: string;
  locked: boolean;
}

/* ------------------------------------------------------------------ */
/*  Store interface (provided via React context)                       */
/* ------------------------------------------------------------------ */

export interface AuthorStore {
  claudeApiKey: string;
  setClaudeApiKey: (key: string) => void;

  manuscripts: Manuscript[];
  addManuscript: (m: Omit<Manuscript, 'id'>) => Manuscript;
  updateManuscript: (id: string, patch: Partial<Manuscript>) => void;
  deleteManuscript: (id: string) => void;

  characters: Character[];
  addCharacter: (c: Omit<Character, 'id'>) => Character;
  updateCharacter: (id: string, patch: Partial<Character>) => void;
  deleteCharacter: (id: string) => void;

  glossary: GlossaryEntry[];
  addGlossaryEntry: (e: Omit<GlossaryEntry, 'id'>) => GlossaryEntry;
  updateGlossaryEntry: (id: string, patch: Partial<GlossaryEntry>) => void;
  deleteGlossaryEntry: (id: string) => void;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

let _nextId = 1;
export function generateId(): string {
  return `local_${Date.now()}_${_nextId++}`;
}

/** Split chapter text into scenes on *** markers */
export function splitIntoScenes(text: string, chapterNumber: number): Scene[] {
  const parts = text.split(/\n\s*(?:\*\*\*|---)\s*\n|\n{3,}/);
  const scenes: Scene[] = [];
  let lineOffset = 0;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (!part || part.length < 50) {
      lineOffset += parts[i].split('\n').length;
      continue;
    }
    const lines = part.split('\n');
    scenes.push({
      id: `ch${chapterNumber}-scene${scenes.length}`,
      sceneIndex: scenes.length,
      startLine: lineOffset,
      endLine: lineOffset + lines.length,
      summary: part.substring(0, 120).replace(/\n/g, ' ').trim() + '...',
      characters: [],
    });
    lineOffset += lines.length;
  }
  return scenes;
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

export const AuthorStoreContext = createContext<AuthorStore | null>(null);

export function useAuthorStore(): AuthorStore {
  const ctx = useContext(AuthorStoreContext);
  if (!ctx) throw new Error('useAuthorStore must be used inside AuthorStoreProvider');
  return ctx;
}
