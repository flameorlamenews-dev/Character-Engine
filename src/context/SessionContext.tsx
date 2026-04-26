import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Session, Character, Book } from '../types/session';

const defaultSession: Session = {
  book: { id: '', title: '', chapters: [] },
  character: null,
  currentChapter: 0,
  zoomLevel: 1,
  viewMode: 'producer',
  editMode: false,
};

// localStorage keys for persisting selectedProjectId across SessionProvider
// remounts (which can happen on auth refresh edge cases) and full page reloads.
// We store the userId alongside so a stale projectId from User A never leaks
// into User B's session.
const PROJECT_ID_STORAGE_KEY = 'characterEngine.session.v1';

type PersistedSession = { userId: string | null; projectId: string | null };

function readPersistedSession(): PersistedSession {
  try {
    const raw = localStorage.getItem(PROJECT_ID_STORAGE_KEY);
    if (!raw) return { userId: null, projectId: null };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return {
        userId: typeof parsed.userId === 'string' ? parsed.userId : null,
        projectId: typeof parsed.projectId === 'string' ? parsed.projectId : null,
      };
    }
  } catch {/* localStorage may be unavailable (private mode); fall through */}
  return { userId: null, projectId: null };
}

function writePersistedSession(s: PersistedSession) {
  try {
    if (!s.userId && !s.projectId) {
      localStorage.removeItem(PROJECT_ID_STORAGE_KEY);
    } else {
      localStorage.setItem(PROJECT_ID_STORAGE_KEY, JSON.stringify(s));
    }
  } catch {/* storage unavailable — just keep React state */}
}

interface SessionContextValue {
  session: Session;
  setCurrentChapter: (ch: number) => void;
  setZoomLevel: (z: number) => void;
  setViewMode: (mode: 'producer' | 'player' | 'author') => void;
  setEditMode: (edit: boolean) => void;
  setCharacter: (character: Character) => void;
  setBook: (book: Book) => void;
  /** Set both character and book atomically to avoid race conditions */
  setCharacterAndBook: (character: Character, book: Book) => void;
  userId: string | null;
  projectId: string | null;
  // setUserContext signature:
  //   projectId: string  → set projectId to this value
  //   projectId: null    → explicitly clear projectId (return to landing)
  //   projectId: undefined → keep current projectId (used by auth bootstrap
  //     so it doesn't clobber a hydrated value from localStorage)
  setUserContext: (userId: string, projectId: string | null | undefined) => void;
}

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session>(defaultSession);
  // Hydrate userId AND projectId from localStorage on mount so a transient
  // SessionProvider remount (caused by Supabase auth events that briefly
  // re-render App.tsx's auth-gated branch) doesn't kick the user out of
  // their selected project. The persisted userId guards against leaking
  // User A's projectId into User B's first render after a swap.
  const [userId, setUserId] = useState<string | null>(() => readPersistedSession().userId);
  const [projectId, setProjectId] = useState<string | null>(() => readPersistedSession().projectId);

  // Mirror userId+projectId into localStorage on every change so the next
  // mount can restore. A separate effect (rather than calling write inside
  // each setter) keeps the persistence logic in one place and immune to
  // direct setUserId/setProjectId calls bypassing setUserContext.
  useEffect(() => {
    writePersistedSession({ userId, projectId });
  }, [userId, projectId]);

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

  const setCharacterAndBook = (character: Character, book: Book) =>
    setSession((s) => ({ ...s, character, book, currentChapter: 0 }));

  const setUserContext = (uid: string, pid: string | null | undefined) => {
    setUserId((prev) => {
      if (prev !== null && prev !== uid) {
        // Real user swap — drop session state AND the previous user's
        // persisted projectId so it doesn't leak into the new user's view.
        setSession(defaultSession);
        setProjectId(null);
      }
      return uid;
    });
    // pid semantics:
    //   string  → set explicitly (user picked a project)
    //   null    → explicitly clear (user clicked "Switch book")
    //   undefined → keep current value (auth bootstrap on tab return —
    //               don't clobber the hydrated projectId from localStorage)
    if (pid === undefined) return;
    setProjectId(pid && pid.length > 0 ? pid : null);
  };

  return (
    <SessionContext.Provider
      value={{
        session, setCurrentChapter, setZoomLevel, setViewMode, setEditMode,
        setCharacter, setBook, setCharacterAndBook, userId, projectId, setUserContext,
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
