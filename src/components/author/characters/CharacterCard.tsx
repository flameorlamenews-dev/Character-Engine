import type { Character } from '../../../stores/author-store';

interface Props {
  character: Character;
  onViewProfile: () => void;
  onGenerate: () => void;
  onBlock: () => void;
  onUnblock: () => void;
  onDelete: () => void;
  isBlocked: boolean;
}

export function CharacterCard({ character, onViewProfile, onGenerate, onBlock, onUnblock, onDelete, isBlocked }: Props) {
  const chapterNums = character.timelineEntries.map(t => t.chapterNumber).sort((a, b) => a - b);

  return (
    <div className="bg-ce-panel border border-ce-border rounded p-4 flex flex-col gap-3 hover:border-ce-accent/40 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="text-[12px] font-semibold text-ce-text-bright truncate">{character.name}</h4>
          {character.role && (
            <span className="text-[9px] text-ce-accent">{character.role}</span>
          )}
          {chapterNums.length > 0 && (
            <p className="text-[9px] text-ce-text-muted mt-0.5">
              Ch {chapterNums.join(', ')}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {isBlocked ? (
            <>
              <button onClick={onUnblock} className="text-[9px] text-green-400 hover:text-green-300 px-1" title="Unblock">&#x21BB;</button>
              <button onClick={onDelete} className="text-[9px] text-red-400 hover:text-red-300 px-1" title="Delete permanently">x</button>
            </>
          ) : (
            <button onClick={onBlock} className="text-[9px] text-ce-text-muted hover:text-red-400 px-1" title="Block">x</button>
          )}
        </div>
      </div>

      {/* Description */}
      {character.description && (
        <p className="text-[10px] text-ce-text-muted line-clamp-3 leading-relaxed">{character.description}</p>
      )}

      {/* Traits preview */}
      {character.traits.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {character.traits.slice(0, 5).map((t, i) => (
            <span key={i} className="text-[8px] px-1.5 py-0.5 rounded bg-ce-body border border-ce-border-subtle text-ce-text-muted">{t}</span>
          ))}
          {character.traits.length > 5 && (
            <span className="text-[8px] text-ce-text-muted">+{character.traits.length - 5}</span>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 mt-auto pt-1">
        <button
          onClick={onViewProfile}
          className="flex-1 px-2 py-1 text-[10px] font-semibold rounded border border-ce-border text-ce-text hover:bg-ce-panel-alt transition-colors"
        >
          View Profile
        </button>
        <button
          onClick={onGenerate}
          className="flex-1 px-2 py-1 text-[10px] font-semibold rounded border border-ce-border text-ce-text hover:bg-ce-panel-alt transition-colors"
        >
          Generate Text
        </button>
      </div>
    </div>
  );
}
