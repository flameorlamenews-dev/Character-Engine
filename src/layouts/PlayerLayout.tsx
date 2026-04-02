import { TopBar } from '../components/topbar/TopBar';
import { useSession } from '../context/SessionContext';
import { EMOTION_LIST, EMOTION_LABELS, EMOTION_COLORS } from '../theme/colors';

export function PlayerLayout() {
  const { session } = useSession();
  const { character, currentChapter } = session;

  if (!character) {
    return (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 flex items-center justify-center bg-ce-body">
          <div className="text-ce-text-muted text-sm">Select a character from the dropdown to view their emotional state.</div>
        </div>
      </div>
    );
  }

  // Get current emotional state at this chapter
  const emotionStates = EMOTION_LIST.map((emotion) => {
    const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
    const value = timeline?.driftLine[currentChapter] ?? timeline?.baseline ?? 0;
    return { emotion, value, color: EMOTION_COLORS[emotion], label: EMOTION_LABELS[emotion] };
  }).sort((a, b) => b.value - a.value);

  const dominant = emotionStates[0];
  const topDesires = character.corePersonality.desireHierarchy.slice(0, 3);

  // Radar chart
  const radarSize = 200;
  const radarCenter = radarSize / 2;
  const radarRadius = 80;

  const radarPoints = EMOTION_LIST.map((emotion, i) => {
    const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
    const value = timeline?.driftLine[currentChapter] ?? timeline?.baseline ?? 0;
    const angle = (i / EMOTION_LIST.length) * Math.PI * 2 - Math.PI / 2;
    const r = (value / 75) * radarRadius;
    return {
      x: radarCenter + Math.cos(angle) * r,
      y: radarCenter + Math.sin(angle) * r,
      labelX: radarCenter + Math.cos(angle) * (radarRadius + 18),
      labelY: radarCenter + Math.sin(angle) * (radarRadius + 18),
      emotion,
      color: EMOTION_COLORS[emotion],
      label: EMOTION_LABELS[emotion],
      value,
    };
  });

  const radarPath = radarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex-1 flex items-center justify-center bg-ce-body overflow-auto">
        <div className="flex flex-col items-center gap-8 p-8 max-w-lg">
          {/* Character Portrait */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-20 h-20 rounded-full border-3"
              style={{
                borderColor: dominant.color,
                background: dominant.color + '22',
                boxShadow: `0 0 24px ${dominant.color}33`,
              }}
            />
            <h2 className="text-xl font-semibold text-ce-text-bright">{character.name}</h2>
            <span className="text-xs text-ce-text-muted">
              Ch. {currentChapter + 1} — {session.book.chapters[currentChapter]?.title}
            </span>
          </div>

          {/* Dominant Emotion */}
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-widest text-ce-text-muted">Dominant Emotion</span>
            <div className="text-2xl font-bold mt-1" style={{ color: dominant.color }}>
              {dominant.label}
            </div>
            <span className="font-mono-readout text-sm text-ce-text-muted">{dominant.value}/75</span>
          </div>

          {/* Radar Chart */}
          <svg width={radarSize} height={radarSize} className="shrink-0">
            {/* Grid rings */}
            {[25, 50, 75].map((ring) => (
              <circle
                key={ring}
                cx={radarCenter}
                cy={radarCenter}
                r={(ring / 75) * radarRadius}
                fill="none"
                stroke="#2a2a4a"
                strokeWidth={0.5}
              />
            ))}
            {/* Axis lines */}
            {radarPoints.map((_, i) => (
              <line
                key={i}
                x1={radarCenter}
                y1={radarCenter}
                x2={radarCenter + Math.cos((i / 8) * Math.PI * 2 - Math.PI / 2) * radarRadius}
                y2={radarCenter + Math.sin((i / 8) * Math.PI * 2 - Math.PI / 2) * radarRadius}
                stroke="#2a2a4a"
                strokeWidth={0.5}
              />
            ))}
            {/* Filled shape */}
            <path d={radarPath} fill={dominant.color + '22'} stroke={dominant.color} strokeWidth={1.5} />
            {/* Points */}
            {radarPoints.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={3} fill={p.color} />
                <text
                  x={p.labelX}
                  y={p.labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={p.color}
                  fontSize={8}
                  fontFamily="'Inter', sans-serif"
                >
                  {p.label}
                </text>
              </g>
            ))}
          </svg>

          {/* Top Desires */}
          <div className="w-full">
            <span className="text-[10px] uppercase tracking-widest text-ce-text-muted">Top Desires</span>
            <div className="mt-2 space-y-2">
              {topDesires.map((d, i) => (
                <div key={d.name} className="flex items-center gap-3">
                  <span className="font-mono-readout text-xs text-ce-text-muted w-4">#{i + 1}</span>
                  <span className="text-sm text-ce-text flex-1">{d.name}</span>
                  <div className="w-24 h-1.5 bg-ce-panel rounded overflow-hidden">
                    <div
                      className="h-full rounded"
                      style={{
                        width: `${(d.score / 75) * 100}%`,
                        background: '#aa3bff',
                      }}
                    />
                  </div>
                  <span className="font-mono-readout text-xs text-ce-text-muted w-6 text-right">{d.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emotion bars */}
          <div className="w-full">
            <span className="text-[10px] uppercase tracking-widest text-ce-text-muted">Emotional State</span>
            <div className="mt-2 space-y-1.5">
              {emotionStates.map(({ emotion, value, color, label }) => (
                <div key={emotion} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-sm" style={{ background: color }} />
                  <span className="text-[11px] text-ce-text w-20">{label}</span>
                  <div className="flex-1 h-1.5 bg-ce-panel rounded overflow-hidden">
                    <div
                      className="h-full rounded transition-all"
                      style={{ width: `${(value / 75) * 100}%`, background: color }}
                    />
                  </div>
                  <span className="font-mono-readout text-[10px] text-ce-text-muted w-4 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
