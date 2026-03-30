import { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { AlgorithmInfo } from '../shared/AlgorithmInfo';

interface TopBarProps {
  isPlaying?: boolean;
  playheadPosition?: number;
  onPlay?: () => void;
  onPause?: () => void;
  onStop?: () => void;
}

export function TopBar({ isPlaying = false, playheadPosition = 0, onPlay, onPause, onStop }: TopBarProps) {
  const { session, setCurrentChapter, setZoomLevel, setViewMode, setEditMode } = useSession();
  const [showAlgorithm, setShowAlgorithm] = useState(false);
  const { book, character, currentChapter, zoomLevel, viewMode, editMode } = session;

  const chapter = book.chapters[currentChapter];

  return (
    <div className="flex items-center gap-3 px-4 h-14 bg-ce-panel-alt border-b border-ce-border shrink-0">
      {/* Book + Character */}
      <div className="flex items-center gap-3 min-w-0">
        <div
          className="w-8 h-8 rounded-full border-2 shrink-0"
          style={{ borderColor: character.avatarColor, background: character.avatarColor + '22' }}
        />
        <div className="min-w-0">
          <div className="text-xs text-ce-text-muted truncate">{book.seriesName || book.title}</div>
          <div className="text-sm text-ce-text-bright font-semibold truncate">{character.name}</div>
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
          Ch. {currentChapter + 1} / {book.chapters.length}
        </div>
        <button
          onClick={() => setCurrentChapter(Math.min(book.chapters.length - 1, currentChapter + 1))}
          className="w-6 h-6 flex items-center justify-center text-ce-text-muted hover:text-ce-text-bright rounded bg-ce-panel hover:bg-ce-surface transition-colors"
        >
          &#9654;
        </button>
        <span className="text-xs text-ce-text-muted truncate max-w-[120px]">{chapter?.title}</span>
      </div>

      <div className="flex-1" />

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
          onClick={() => setViewMode('producer')}
          className={`px-3 py-1 text-xs font-semibold transition-colors ${
            viewMode === 'producer'
              ? 'bg-ce-accent text-white'
              : 'bg-ce-panel text-ce-text-muted hover:text-ce-text'
          }`}
        >
          Producer
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

      {/* Algorithm Info Modal */}
      {showAlgorithm && <AlgorithmInfo onClose={() => setShowAlgorithm(false)} />}
    </div>
  );
}
