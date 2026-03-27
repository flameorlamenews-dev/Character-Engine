import { useInspector } from '../../context/InspectorContext';
import { useSession } from '../../context/SessionContext';
import { EMOTION_COLORS, EMOTION_LABELS } from '../../theme/colors';
import { calculateTriggerLevel } from '../../types/emotions';

export function InspectorPanel() {
  const { selectedSurge, selectSurge } = useInspector();
  const { session } = useSession();

  if (!selectedSurge) {
    return (
      <div className="h-10 bg-ce-panel border-t border-ce-border flex items-center px-4 shrink-0">
        <span className="text-xs text-ce-text-muted">Select a surge peak to inspect</span>
      </div>
    );
  }

  const { trigger } = selectedSurge;
  const color = EMOTION_COLORS[selectedSurge.emotionType];
  const triggerLevel = calculateTriggerLevel(trigger.stakes, trigger.immediacy, trigger.certainty);
  const triggerTotal = trigger.stakes + trigger.immediacy + trigger.certainty;

  const chapter = session.book.chapters[selectedSurge.chapterIndex];


  const triggerLevelColors: Record<string, string> = {
    low: '#2aad8e',
    medium: '#e0a832',
    high: '#e08a2e',
    extreme: '#dc3545',
  };

  return (
    <div className="bg-ce-panel border-t border-ce-border shrink-0 transition-all duration-300 overflow-hidden"
      style={{ height: 220 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-ce-border-subtle">
        <div className="w-3 h-3 rounded-sm" style={{ background: color }} />
        <span className="text-sm font-semibold text-ce-text-bright">
          {EMOTION_LABELS[selectedSurge.emotionType]} Surge
        </span>
        <span className="font-mono-readout text-xs" style={{ color }}>
          Peak: {selectedSurge.peakIntensity}/75
        </span>
        <span className="text-xs text-ce-text-muted">
          Ch. {selectedSurge.chapterIndex + 1} — {chapter?.title}
        </span>
        <div className="flex-1" />
        <button
          onClick={() => selectSurge(null)}
          className="text-ce-text-muted hover:text-ce-text-bright text-sm"
        >
          ✕
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-4 p-4 text-xs">
        {/* Column 1: Stimulant + Trigger */}
        <div className="space-y-3">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1">Stimulant</div>
            <div className="text-ce-text-bright">{trigger.description}</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-ce-text-muted">Event: </span>
              <span className="text-ce-text">{trigger.eventType.replace('_', ' ')}</span>
            </div>
            <div>
              <span className="text-ce-text-muted">Subject: </span>
              <span className="text-ce-text">{trigger.subject}</span>
            </div>
            <div>
              <span className="text-ce-text-muted">Source: </span>
              <span className="text-ce-text">{trigger.source.replace('_', ' ')}</span>
            </div>
            <div>
              <span className="text-ce-text-muted">Domain: </span>
              <span className="text-ce-text">{trigger.domain.replace('_', ' ')}</span>
            </div>
          </div>
        </div>

        {/* Column 2: Trigger Calculation */}
        <div className="space-y-3">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1">Trigger Level</div>
            <div className="flex items-center gap-2">
              <span
                className="font-mono-readout text-sm font-bold uppercase px-2 py-0.5 rounded"
                style={{
                  color: triggerLevelColors[triggerLevel],
                  background: triggerLevelColors[triggerLevel] + '20',
                  border: `1px solid ${triggerLevelColors[triggerLevel]}44`,
                }}
              >
                {triggerLevel}
              </span>
              <span className="font-mono-readout text-ce-text-muted">
                ({triggerTotal}/9)
              </span>
            </div>
          </div>
          <div className="space-y-1">
            {[
              { label: 'Stakes', value: trigger.stakes },
              { label: 'Immediacy', value: trigger.immediacy },
              { label: 'Certainty', value: trigger.certainty },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-ce-text-muted w-16">{label}</span>
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-4 h-2 rounded-sm"
                      style={{
                        background: i < value ? triggerLevelColors[triggerLevel] : '#2a2a4a',
                      }}
                    />
                  ))}
                </div>
                <span className="font-mono-readout text-ce-text-muted">{value}/3</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Outcome + Decay */}
        <div className="space-y-3">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1">Emotional Outcome</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="text-ce-text-bright">
                {EMOTION_LABELS[selectedSurge.emotionType]} → {selectedSurge.peakIntensity}
              </span>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1">Decay</div>
            <div className="flex items-center gap-2">
              <span className="text-ce-text-muted">Rate:</span>
              <div className="flex-1 h-1.5 bg-ce-panel-alt rounded overflow-hidden">
                <div
                  className="h-full rounded"
                  style={{
                    width: `${selectedSurge.decayRate * 100}%`,
                    background: color,
                  }}
                />
              </div>
              <span className="font-mono-readout text-ce-text-muted">
                {(selectedSurge.decayRate * 100).toFixed(0)}%
              </span>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1">Duration</div>
            <span className="font-mono-readout text-ce-text">
              {(selectedSurge.duration * 100).toFixed(0)}% of chapter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
