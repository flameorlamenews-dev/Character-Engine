import { useRef } from 'react';
import { useSession } from '../../context/SessionContext';
import { useInspector } from '../../context/InspectorContext';
import { EMOTION_LIST, EMOTION_COLORS, EMOTION_LABELS } from '../../theme/colors';
import {
  getTimelineWidth,
  chapterToX,
  scoreToY,
  sceneToX,
  surgePath,
  surgeAreaPath,
  BASE_CHAPTER_WIDTH,
  LANE_HEIGHT,
} from '../../utils/timeline-math';

interface TimelineProps {
  mutedTracks: Set<string>;
  soloTrack: string | null;
}

export function Timeline({ mutedTracks, soloTrack }: TimelineProps) {
  const { session } = useSession();
  const { selectedSurge, selectSurge } = useInspector();
  const { book, character, zoomLevel } = session;
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalWidth = getTimelineWidth(book.chapters.length, zoomLevel);
  const rulerHeight = 32;
  const visibleEmotions = EMOTION_LIST.filter((e) => {
    if (soloTrack) return e === soloTrack;
    return !mutedTracks.has(e);
  });
  const totalLaneHeight = visibleEmotions.length * LANE_HEIGHT;

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-ce-body">
      <div ref={scrollRef} className="flex-1 overflow-auto">
        <svg
          width={totalWidth}
          height={rulerHeight + totalLaneHeight}
          className="block"
        >
          {/* Chapter Ruler */}
          <g>
            <rect x={0} y={0} width={totalWidth} height={rulerHeight} fill="#1a1a2e" />
            {book.chapters.map((ch, i) => {
              const x = chapterToX(i, zoomLevel);
              const w = BASE_CHAPTER_WIDTH * zoomLevel;
              return (
                <g key={i}>
                  <line x1={x} y1={0} x2={x} y2={rulerHeight} stroke="#2a2a4a" strokeWidth={1} />
                  <text
                    x={x + w / 2}
                    y={rulerHeight - 8}
                    textAnchor="middle"
                    fill={ch.characterPresent ? '#c8c8d4' : '#6b6b80'}
                    fontSize={10}
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    {i + 1}
                  </text>
                  {!ch.characterPresent && (
                    <rect
                      x={x}
                      y={rulerHeight - 3}
                      width={w}
                      height={3}
                      fill="#6b6b80"
                      opacity={0.3}
                    />
                  )}
                </g>
              );
            })}
            <line x1={0} y1={rulerHeight} x2={totalWidth} y2={rulerHeight} stroke="#2a2a4a" strokeWidth={1} />
          </g>

          {/* Emotion Lanes */}
          {visibleEmotions.map((emotion, laneIndex) => {
            const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
            if (!timeline) return null;

            const color = EMOTION_COLORS[emotion];
            const yOffset = rulerHeight + laneIndex * LANE_HEIGHT;

            return (
              <g key={emotion} transform={`translate(0, ${yOffset})`}>
                {/* Lane background */}
                <rect
                  x={0}
                  y={0}
                  width={totalWidth}
                  height={LANE_HEIGHT}
                  fill={laneIndex % 2 === 0 ? '#0f0f22' : '#111130'}
                />

                {/* Lane border */}
                <line
                  x1={0}
                  y1={LANE_HEIGHT}
                  x2={totalWidth}
                  y2={LANE_HEIGHT}
                  stroke="#1a1a3a"
                  strokeWidth={0.5}
                />

                {/* Silence blocks */}
                {timeline.silenceBlocks.map(([start, end], si) => {
                  const sx = chapterToX(start, zoomLevel);
                  const ex = chapterToX(end + 1, zoomLevel);
                  return (
                    <rect
                      key={si}
                      x={sx}
                      y={0}
                      width={ex - sx}
                      height={LANE_HEIGHT}
                      fill="#2a2a4a"
                      opacity={0.2}
                    />
                  );
                })}

                {/* Baseline line */}
                <line
                  x1={0}
                  y1={scoreToY(timeline.baseline, LANE_HEIGHT)}
                  x2={totalWidth}
                  y2={scoreToY(timeline.baseline, LANE_HEIGHT)}
                  stroke={color}
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  opacity={0.35}
                />

                {/* Drift line */}
                {timeline.driftLine.length > 1 && (
                  <polyline
                    points={timeline.driftLine
                      .map((val, ci) => {
                        const x = chapterToX(ci, zoomLevel) + (BASE_CHAPTER_WIDTH * zoomLevel) / 2;
                        const y = scoreToY(val, LANE_HEIGHT);
                        return `${x},${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="white"
                    strokeWidth={1}
                    strokeDasharray="2 3"
                    opacity={0.2}
                  />
                )}

                {/* Surge peaks */}
                {timeline.surges.map((surge) => {
                  const baseline = timeline.driftLine[surge.chapterIndex] ?? timeline.baseline;
                  const isSelected = selectedSurge?.id === surge.id;

                  return (
                    <g key={surge.id}>
                      {/* Filled area */}
                      <path
                        d={surgeAreaPath(
                          surge.chapterIndex,
                          surge.scenePosition,
                          baseline,
                          surge.peakIntensity,
                          surge.decayRate,
                          surge.duration,
                          zoomLevel,
                          LANE_HEIGHT
                        )}
                        fill={color}
                        opacity={0.15}
                      />
                      {/* Surge curve */}
                      <path
                        d={surgePath(
                          surge.chapterIndex,
                          surge.scenePosition,
                          baseline,
                          surge.peakIntensity,
                          surge.decayRate,
                          surge.duration,
                          zoomLevel,
                          LANE_HEIGHT
                        )}
                        fill="none"
                        stroke={color}
                        strokeWidth={isSelected ? 2.5 : 1.5}
                        opacity={isSelected ? 1 : 0.8}
                      />
                      {/* Peak dot (clickable) */}
                      <circle
                        cx={sceneToX(surge.chapterIndex, surge.scenePosition, zoomLevel)}
                        cy={scoreToY(surge.peakIntensity, LANE_HEIGHT)}
                        r={isSelected ? 5 : 4}
                        fill={isSelected ? '#fff' : color}
                        stroke={isSelected ? color : '#fff'}
                        strokeWidth={isSelected ? 2 : 1}
                        className="cursor-pointer hover:r-[6]"
                        style={{ filter: isSelected ? `drop-shadow(0 0 6px ${color})` : 'none' }}
                        onClick={() => selectSurge(isSelected ? null : surge)}
                      >
                        <title>
                          {EMOTION_LABELS[emotion]} surge: {surge.peakIntensity}/75
                        </title>
                      </circle>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
