import { useState } from 'react';
import { useSession } from '../../context/SessionContext';

export function EffectsRack() {
  const { session } = useSession();
  const { character } = session;
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <div className="relative shrink-0">
        <button
          onClick={() => setCollapsed(false)}
          className="absolute top-2 -left-6 w-6 h-16 bg-ce-panel border border-ce-border rounded-l flex items-center justify-center text-ce-text-muted hover:text-ce-text text-xs"
        >
          ◀
        </button>
      </div>
    );
  }

  return (
    <div className="w-[220px] shrink-0 bg-ce-panel border-l border-ce-border flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-ce-border">
        <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">
          Influence Variables
        </span>
        <button
          onClick={() => setCollapsed(true)}
          className="text-ce-text-muted hover:text-ce-text text-xs"
        >
          ▶
        </button>
      </div>

      {/* Variables */}
      <div className="flex flex-col gap-1 p-3">
        {character.influenceVariables.map((variable) => {
          const percent = (variable.value / 75) * 100;
          // Color gradient: green → amber → red
          const hue = 120 - (variable.value / 75) * 120; // 120=green, 0=red
          const barColor = `hsl(${hue}, 70%, 50%)`;

          return (
            <div key={variable.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-ce-text-muted">{variable.label}</span>
                <span className="font-mono-readout text-[10px] text-ce-text-muted">
                  {variable.value}
                </span>
              </div>
              <div className="h-2 bg-ce-body rounded-sm overflow-hidden">
                <div
                  className="h-full rounded-sm transition-all"
                  style={{
                    width: `${percent}%`,
                    background: `linear-gradient(to right, #2aad8e, ${barColor})`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Perception Engine Preview */}
      <div className="mt-auto border-t border-ce-border">
        <div className="px-3 py-2">
          <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">
            Relationships
          </span>
        </div>
        <div className="flex flex-col gap-1 px-3 pb-3">
          {character.relationships.map((rel) => (
            <div key={rel.targetName} className="flex items-center gap-2 text-[10px]">
              <span className="text-ce-text w-14 truncate">{rel.targetName}</span>
              <div className="flex-1 flex gap-1">
                <div
                  className="h-1.5 rounded-sm"
                  style={{
                    width: `${(rel.trust / 75) * 100}%`,
                    background: '#2aad8e',
                    minWidth: rel.trust > 0 ? 2 : 0,
                  }}
                  title={`Trust: ${rel.trust}`}
                />
                <div
                  className="h-1.5 rounded-sm"
                  style={{
                    width: `${(rel.threat / 75) * 100}%`,
                    background: '#dc3545',
                    minWidth: rel.threat > 0 ? 2 : 0,
                  }}
                  title={`Threat: ${rel.threat}`}
                />
              </div>
              <span className="font-mono-readout text-ce-text-muted w-4 text-right">
                {rel.trust}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
