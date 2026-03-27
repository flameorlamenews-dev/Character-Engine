import { useSession } from '../../context/SessionContext';

export function TopBar() {
  const { session, setCurrentChapter, setZoomLevel, setViewMode, setEditMode } = useSession();
  const { book, character, currentChapter, zoomLevel, viewMode, editMode } = session;

  const chapter = book.chapters[currentChapter];

  return (
    <div className="flex items-center gap-4 px-4 h-14 bg-ce-panel-alt border-b border-ce-border shrink-0">
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

      {/* Divider */}
      <div className="w-px h-8 bg-ce-border" />

      {/* Chapter Transport */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
          className="w-6 h-6 flex items-center justify-center text-ce-text-muted hover:text-ce-text-bright rounded bg-ce-panel hover:bg-ce-surface transition-colors"
        >
          &#9664;
        </button>
        <div className="font-mono-readout text-sm text-ce-text-bright bg-ce-panel px-3 py-1 rounded border border-ce-border min-w-[120px] text-center">
          Ch. {currentChapter + 1} / {book.chapters.length}
        </div>
        <button
          onClick={() => setCurrentChapter(Math.min(book.chapters.length - 1, currentChapter + 1))}
          className="w-6 h-6 flex items-center justify-center text-ce-text-muted hover:text-ce-text-bright rounded bg-ce-panel hover:bg-ce-surface transition-colors"
        >
          &#9654;
        </button>
        <span className="text-xs text-ce-text-muted truncate max-w-[140px]">{chapter?.title}</span>
      </div>

      {/* Spacer */}
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

      {/* Divider */}
      <div className="w-px h-8 bg-ce-border" />

      {/* Edit Mode Toggle */}
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
    </div>
  );
}
