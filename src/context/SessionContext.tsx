import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Session, Character, Book } from '../types/session';

const defaultSession: Session = {
  book: { id: '', title: '', chapters: [] },
  character: null as any,
  currentChapter: 0,
  zoomLevel: 1,
  viewMode: 'producer',
  editMode: false,
};

interface SessionContextValue {
  session: Session;
  setCurrentChapter: (ch: number) => void;
  setZoomLevel: (z: number) => void;
  setViewMode: (mode: 'producer' | 'player' | 'author') => void;
  setEditMode: (edit: boolean) => void;
  setCharacter: (character: Character) => void;
  setBook: (book: Book) => void;
  userId: string | null;
  projectId: string | null;
  setUserContext: (userId: string, projectId: string) => void;
}

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session>(defaultSession);
  const [userId, setUserId] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);

  const setCurrentChapter = (ch: number) =>
    setSession((s) => ({ ...s, currentChapter: ch }));

  const setZoomLevel = (z: number) =>
    setSession((s) => ({ ...s, zoomLevel: z }));

  const setViewMode = (mode: 'producer' | 'player' | 'author') =>
    setSession((s) => ({ ...s, viewMode: mode }));

  const setEditMode = (edit: boolean) =>
    setSession((s) => ({ ...s, editMode: edit }));

  const setCharacter = (character: Character) =>
    setSession((s) => ({ ...s, character, currentChapter: 0 }));

  const setBook = (book: Book) =>
    setSession((s) => ({ ...s, book, currentChapter: 0 }));

  const setUserContext = (uid: string, pid: string) => {
    setUserId(uid);
    setProjectId(pid);
  };

  return (
    <SessionContext.Provider
      value={{
        session, setCurrentChapter, setZoomLevel, setViewMode, setEditMode,
        setCharacter, setBook, userId, projectId, setUserContext,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('useSession must be used within SessionProvider');
  return ctx;
}
