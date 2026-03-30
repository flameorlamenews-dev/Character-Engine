import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Session } from '../types/session';
import { mockBook, mockCharacter } from '../data/mock-character';

const defaultSession: Session = {
  book: mockBook,
  character: mockCharacter,
  currentChapter: 1,
  zoomLevel: 1,
  viewMode: 'producer',
  editMode: false,
};

interface SessionContextValue {
  session: Session;
  setCurrentChapter: (ch: number) => void;
  setZoomLevel: (z: number) => void;
  setViewMode: (mode: 'producer' | 'player' | 'manuscript') => void;
  setEditMode: (edit: boolean) => void;
}

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session>(defaultSession);

  const setCurrentChapter = (ch: number) =>
    setSession((s) => ({ ...s, currentChapter: ch }));

  const setZoomLevel = (z: number) =>
    setSession((s) => ({ ...s, zoomLevel: z }));

  const setViewMode = (mode: 'producer' | 'player' | 'manuscript') =>
    setSession((s) => ({ ...s, viewMode: mode }));

  const setEditMode = (edit: boolean) =>
    setSession((s) => ({ ...s, editMode: edit }));

  return (
    <SessionContext.Provider
      value={{ session, setCurrentChapter, setZoomLevel, setViewMode, setEditMode }}
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
