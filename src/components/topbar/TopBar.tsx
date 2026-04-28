import { useState, useEffect, useRef } from 'react';
import { useSession } from '../../context/SessionContext';
import { AlgorithmInfo } from '../shared/AlgorithmInfo';
import { supabase } from '@/integrations/supabase/client';
import { fetchCharacterList, loadCharacterForEngine } from '@/services/character-loader';

interface TopBarProps {
  isPlaying?: boolean;
  playheadPosition?: number;
  onPlay?: () => void;
  onPause?: () => void;
  onStop?: () => void;
  // New optional handlers for the user menu. AuthorLayout passes both; the
  // Producer/Player layouts don't, so the menu items hide when undefined.
  onOpenProfile?: () => void;
  onBackToProjects?: () => void;
}

export function TopBar({
  isPlaying = false,
  playheadPosition = 0,
  onPlay,
  onPause,
  onStop,
  onOpenProfile,
  onBackToProjects,
}: TopBarProps) {
  const { session, setCurrentChapter, setZoomLevel, setViewMode, setEditMode, setCharacterAndBook, userId, projectId } = useSession();
  const [showAlgorithm, setShowAlgorithm] = useState(false);
  const [characterList, setCharacterList] = useState<Array<{ id: string; name: string }>>([]);
  const [loadingCharacter, setLoadingCharacter] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const { book, character, currentChapter, zoomLevel, viewMode, editMode } = session;

  // Close the user menu on outside click. Listener is attached only while the
  // menu is open to keep the cost negligible.
  useEffect(() => {
    if (!userMenuOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [userMenuOpen]);

  const chapter = book.chapters[currentChapter];

  // Fetch character list when userId/projectId become available
  useEffect(() => {
    if (!userId) {
      setCharacterList([]);
      return;
    }
    fetchCharacterList(userId, projectId || undefined).then(setCharacterList);
  }, [userId, projectId]);

  const handleCharacterChange = async (characterId: string) => {
    if (character && characterId === character.id) return;
    if (loadingCharacter) return;
    setLoadingCharacter(true);
    try {
      const result = await loadCharacterForEngine(characterId);
      if (result) {
        setCharacterAndBook(result.character, result.book);
      }
    } catch (err) {
      console.error('Failed to load character:', err);
    } finally {
      setLoadingCharacter(false);
    }
  };

  return (
    <div className="flex items-center gap-3 px-4 h-14 bg-ce-panel-alt border-b border-ce-border shrink-0">
      {/* Book + Character Dropdown */}
      <div className="flex items-center gap-3 min-w-0">
        <div
          className="w-8 h-8 rounded-full border-2 shrink-0"
          style={{
            borderColor: character?.avatarColor || '#555',
            background: (character?.avatarColor || '#555') + '22',
          }}
        />
        <div className="min-w-0">
          <div className="text-xs text-ce-text-muted truncate">{book.seriesName || book.title || 'No book loaded'}</div>
          {characterList.length > 0 ? (
            <select
              value={character?.id || ''}
              onChange={(e) => handleCharacterChange(e.target.value)}
              disabled={loadingCharacter}
              className="text-sm text-ce-text-bright font-semibold bg-transparent border-none outline-none cursor-pointer hover:text-ce-accent transition-colors p-0 -ml-0.5"
              style={{ appearance: 'auto' }}
            >
              {!character && <option value="">Select a character...</option>}
              {characterList.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          ) : (
            <div className="text-sm text-ce-text-muted truncate">
              {loadingCharacter ? 'Loading...' : character?.name || 'No characters'}
            </div>
          )}
        </div>
      </div>

      <div className="w-px h-8 bg-ce-border" />

      {/* Transport Controls — Play/Pause/Stop */}
      <div className="flex items-center gap-1">
        {/* Stop / Reset to start */}
        <button
          onClick={onStop ?? undefined}
          className="w-7 h-7 flex items-center justify-center rounded bg-ce-panel border border-ce-border hover:bg-ce-surface text-ce-text-muted hover:text-ce-text transition-colors"
          title="Stop"
        >
          <svg width="10" height="10" viewBox="0 0 10 10">
            <rect x="1" y="1" width="8" height="8" fill="currentColor" rx="1" />
          </svg>
        </button>

        {/* Play/Pause */}
        <button
          onClick={isPlaying ? (onPause ?? undefined) : (onPlay ?? undefined)}
          className={`w-8 h-8 flex items-center justify-center rounded border transition-all ${
            isPlaying
              ? 'bg-red-900/30 border-red-500/40 text-red-400 shadow-[0_0_8px_rgba(255,60,60,0.15)]'
              : 'bg-ce-panel border-ce-border text-ce-text-muted hover:text-ce-text hover:bg-ce-surface'
          }`}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="1" width="3.5" height="10" fill="currentColor" rx="0.5" />
              <rect x="7.5" y="1" width="3.5" height="10" fill="currentColor" rx="0.5" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12">
              <polygon points="2,1 11,6 2,11" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      {/* Playhead position readout */}
      <div className="font-mono-readout text-[10px] text-ce-text-muted bg-ce-panel px-2 py-1 rounded border border-ce-border">
        <span className="text-ce-text-bright">
          {Math.floor(playheadPosition) + 1}
        </span>
        <span className="text-ce-text-muted">.</span>
        <span className="text-ce-text">
          {Math.round((playheadPosition % 1) * 100).toString().padStart(2, '0')}
        </span>
      </div>

      <div className="w-px h-8 bg-ce-border" />

      {/* Chapter Transport */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
          className="w-6 h-6 flex items-center justify-center text-ce-text-muted hover:text-ce-text-bright rounded bg-ce-panel hover:bg-ce-surface transition-colors"
        >
          &#9664;
        </button>
        <div className="font-mono-readout text-sm text-ce-text-bright bg-ce-panel px-3 py-1 rounded border border-ce-border min-w-[100px] text-center">
          Ch. {currentChapter + 1} / {book.chapters.length || 0}
        </div>
        <button
          onClick={() => setCurrentChapter(Math.min(Math.max(0, book.chapters.length - 1), currentChapter + 1))}
          className="w-6 h-6 flex items-center justify-center text-ce-text-muted hover:text-ce-text-bright rounded bg-ce-panel hover:bg-ce-surface transition-colors"
        >
          &#9654;
        </button>
        <span className="text-xs text-ce-text-muted truncate max-w-[120px]">{chapter?.title}</span>
      </div>

      <div className="flex-1" />

      {/* Build version stamp — short git SHA injected at build time via
          vite.config.ts. Lets the user (and us) verify at a glance which
          commit is actually live in the browser without checking Vercel.
          Click-to-copy convenience for sharing in bug reports. */}
      <button
        type="button"
        onClick={() => navigator.clipboard?.writeText(import.meta.env.VITE_BUILD_VERSION || 'dev')}
        className="font-mono text-[10px] text-ce-text-muted hover:text-ce-text px-1.5 py-0.5 rounded border border-ce-border/40 hover:border-ce-border transition-colors"
        title="Build version (click to copy)"
      >
        build {import.meta.env.VITE_BUILD_VERSION || 'dev'}
      </button>

      {/* Zoom */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-ce-text-muted">Zoom</span>
        <input
          type="range"
          min={0.5}
          max={3}
          step={0.1}
          value={zoomLevel}
          onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
          className="w-20 accent-ce-accent"
        />
        <span className="font-mono-readout text-xs text-ce-text-muted w-8">{zoomLevel.toFixed(1)}x</span>
      </div>

      <div className="w-px h-8 bg-ce-border" />

      {/* Edit Mode */}
      <button
        onClick={() => setEditMode(!editMode)}
        className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
          editMode
            ? 'bg-red-900/40 text-red-400 border border-red-500/50 shadow-[0_0_12px_rgba(255,60,60,0.2)]'
            : 'bg-ce-panel text-ce-text-muted border border-ce-border hover:text-ce-text'
        }`}
      >
        {editMode ? '🔓 Edit' : '🔒 Read'}
      </button>

      {/* Algorithm Info Button */}
      <button
        onClick={() => setShowAlgorithm(true)}
        className="px-2 py-1 rounded text-xs font-semibold bg-ce-panel text-ce-text-muted border border-ce-border hover:text-ce-text hover:border-ce-accent transition-colors"
        title="View Algorithm Reference"
      >
        f(x)
      </button>

      {/* View Toggle */}
      <div className="flex rounded overflow-hidden border border-ce-border">
        <button
          onClick={() => setViewMode('author')}
          className={`px-3 py-1 text-xs font-semibold transition-colors ${
            viewMode === 'author'
              ? 'bg-ce-accent text-white'
              : 'bg-ce-panel text-ce-text-muted hover:text-ce-text'
          }`}
        >
          Author
        </button>
        <button
          onClick={() => setViewMode('producer')}
          className={`px-3 py-1 text-xs font-semibold transition-colors ${
            viewMode === 'producer'
              ? 'bg-ce-accent text-white'
              : 'bg-ce-panel text-ce-text-muted hover:text-ce-text'
          }`}
        >
          Emotional Engine
        </button>
        <button
          onClick={() => setViewMode('player')}
          className={`px-3 py-1 text-xs font-semibold transition-colors ${
            viewMode === 'player'
              ? 'bg-ce-accent text-white'
              : 'bg-ce-panel text-ce-text-muted hover:text-ce-text'
          }`}
        >
          Player
        </button>
      </div>

      {/* User menu — Profile / Switch book / Sign out. Replaces the bare
          Logout button. Items render conditionally on whether the parent
          layout passed the corresponding handler. */}
      <div className="relative" ref={userMenuRef}>
        <button
          onClick={() => setUserMenuOpen((v) => !v)}
          className="px-2 py-1 rounded text-xs bg-ce-panel text-ce-text-muted border border-ce-border hover:text-ce-text hover:border-ce-accent transition-colors flex items-center gap-1"
          title="Account"
          aria-haspopup="menu"
          aria-expanded={userMenuOpen}
        >
          Account
          <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
            <path d="M1 2 L4 6 L7 2" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {userMenuOpen && (
          <div
            role="menu"
            className="absolute right-0 top-full mt-1 w-44 bg-ce-panel-alt border border-ce-border rounded shadow-lg overflow-hidden z-50"
          >
            {onOpenProfile && (
              <button
                role="menuitem"
                onClick={() => { setUserMenuOpen(false); onOpenProfile(); }}
                className="w-full text-left px-3 py-2 text-xs text-ce-text hover:bg-ce-surface transition-colors"
              >
                Author name
              </button>
            )}
            {onBackToProjects && (
              <button
                role="menuitem"
                onClick={() => { setUserMenuOpen(false); onBackToProjects(); }}
                className="w-full text-left px-3 py-2 text-xs text-ce-text hover:bg-ce-surface transition-colors border-t border-ce-border"
              >
                Switch book
              </button>
            )}
            <button
              role="menuitem"
              onClick={() => { setUserMenuOpen(false); (supabase as any).auth.signOut(); }}
              className="w-full text-left px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 transition-colors border-t border-ce-border"
            >
              Sign out
            </button>
          </div>
        )}
      </div>

      {/* Algorithm Info Modal */}
      {showAlgorithm && <AlgorithmInfo onClose={() => setShowAlgorithm(false)} />}
    </div>
  );
}
