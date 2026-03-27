import { useRef } from 'react';
import { useSession } from '../../context/SessionContext';
import { useInspector } from '../../context/InspectorContext';
import { EMOTION_LIST, EMOTION_COLORS, EMOTION_COLORS_BRIGHT, EMOTION_LABELS } from '../../theme/colors';
import type { EmotionType } from '../../theme/colors';
import {
  getTimelineWidth,
  chapterToX,
  BASE_CHAPTER_WIDTH,
  LANE_HEIGHT,
  buildContinuousLine,
  pointsToSmoothPath,
  pointsToFilledPath,
} from '../../utils/timeline-math';
import type { Surge } from '../../types/emotions';

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

  // Build a lookup from surge ID to full Surge object
  const surgeMap = new Map<string, Surge>();
  for (const timeline of character.emotionTimelines) {
    for (const surge of timeline.surges) {
      surgeMap.set(surge.id, surge);
    }
  }

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
                    fill={ch.characterPresent ? '#c8c8d4' : '#555568'}
                    fontSize={10}
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    Ch.{i + 1}
                  </text>
                  {!ch.characterPresent && (
                    <rect x={x} y={rulerHeight - 3} width={w} height={3} fill="#555568" opacity={0.3} />
                  )}
                </g>
              );
            })}
            {/* Final ruler border */}
            <line x1={0} y1={rulerHeight} x2={totalWidth} y2={rulerHeight} stroke="#3a3a5a" strokeWidth={1.5} />
          </g>

          {/* Emotion Lanes */}
          {visibleEmotions.map((emotion, laneIndex) => {
            const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
            if (!timeline) return null;

            const color = EMOTION_COLORS[emotion];
            const brightColor = EMOTION_COLORS_BRIGHT[emotion];
            const yOffset = rulerHeight + laneIndex * LANE_HEIGHT;

            // Build the continuous line for this emotion
            const linePoints = buildContinuousLine(
              timeline.driftLine,
              timeline.surges.map((s) => ({
                chapterIndex: s.chapterIndex,
                scenePosition: s.scenePosition,
                peakIntensity: s.peakIntensity,
                duration: s.duration,
                id: s.id,
              })),
              timeline.silenceBlocks,
              zoomLevel,
              LANE_HEIGHT
            );

            const linePath = pointsToSmoothPath(linePoints);
            const filledPath = pointsToFilledPath(linePoints, LANE_HEIGHT);

            // Get surge peak points for clickable dots
            const peakPoints = linePoints.filter((p) => p.isSurgePeak);

            return (
              <g key={emotion} transform={`translate(0, ${yOffset})`}>
                {/* Lane background — alternating */}
                <rect
                  x={0}
                  y={0}
                  width={totalWidth}
                  height={LANE_HEIGHT}
                  fill={laneIndex % 2 === 0 ? '#0d0d1e' : '#10102a'}
                />

                {/* Silence blocks (greyed out) */}
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
                      fill="#1a1a2e"
                      opacity={0.5}
                    />
                  );
                })}

                {/* Chapter grid lines within lane */}
                {book.chapters.map((_, i) => (
                  <line
                    key={i}
                    x1={chapterToX(i, zoomLevel)}
                    y1={0}
                    x2={chapterToX(i, zoomLevel)}
                    y2={LANE_HEIGHT}
                    stroke="#1e1e3a"
                    strokeWidth={0.5}
                  />
                ))}

                {/* Filled area under the line */}
                {filledPath && (
                  <path
                    d={filledPath}
                    fill={`url(#fill-${emotion})`}
                  />
                )}

                {/* The continuous emotion line */}
                {linePath && (
                  <path
                    d={linePath}
                    fill="none"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                )}

                {/* Surge peak dots (clickable) */}
                {peakPoints.map((point) => {
                  const surge = point.surgeId ? surgeMap.get(point.surgeId) : null;
                  const isSelected = selectedSurge?.id === point.surgeId;

                  return (
                    <g key={point.surgeId}>
                      {/* Glow ring on selected */}
                      {isSelected && (
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r={10}
                          fill="none"
                          stroke={brightColor}
                          strokeWidth={1}
                          opacity={0.4}
                        />
                      )}
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={isSelected ? 6 : 4}
                        fill={isSelected ? brightColor : color}
                        stroke="#0d0d1a"
                        strokeWidth={1.5}
                        className="cursor-pointer"
                        style={{
                          filter: isSelected ? `drop-shadow(0 0 8px ${brightColor})` : 'none',
                        }}
                        onClick={() => {
                          if (surge) selectSurge(isSelected ? null : surge);
                        }}
                      >
                        <title>
                          {EMOTION_LABELS[emotion as EmotionType]} surge: {surge?.peakIntensity}/75
                        </title>
                      </circle>
                    </g>
                  );
                })}

                {/* SOLID BOTTOM BORDER — divider between tracks */}
                <line
                  x1={0}
                  y1={LANE_HEIGHT}
                  x2={totalWidth}
                  y2={LANE_HEIGHT}
                  stroke="#3a3a5a"
                  strokeWidth={1.5}
                />

                {/* Gradient definition for this emotion's fill */}
                <defs>
                  <linearGradient id={`fill-${emotion}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                    <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
