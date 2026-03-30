import type { Manuscript } from '../../../stores/author-store';

interface Props {
  manuscript: Manuscript;
  selected: boolean;
  onSelect: () => void;
}

/** Compact chapter card for sidebar or grid layouts. */
export function ManuscriptCard({ manuscript, selected, onSelect }: Props) {
  const wordCount = manuscript.content.split(/\s+/).length;

  return (
    <button
      onClick={onSelect}
      className={`w-full text-left px-3 py-3 border border-ce-border-subtle rounded transition-colors ${
        selected ? 'bg-ce-panel-alt border-ce-accent' : 'bg-ce-panel hover:bg-ce-panel-alt/50'
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono-readout text-[10px] text-ce-text-muted">
          Ch {String(manuscript.chapterNumber).padStart(2, '0')}
        </span>
        <span className="text-[11px] text-ce-text-bright font-semibold truncate">{manuscript.title}</span>
      </div>
      <div className="flex items-center gap-3 text-[9px] text-ce-text-muted">
        <span>{wordCount} words</span>
        <span>{manuscript.sceneCount} scenes</span>
        {manuscript.analyzed && <span className="text-green-400">analyzed</span>}
        {manuscript.analyzing && <span className="text-ce-accent animate-pulse">analyzing...</span>}
      </div>
      {manuscript.content && (
        <p className="text-[9px] text-ce-text-muted mt-1 line-clamp-2 leading-relaxed">
          {manuscript.content.substring(0, 120)}...
        </p>
      )}
    </button>
  );
}
