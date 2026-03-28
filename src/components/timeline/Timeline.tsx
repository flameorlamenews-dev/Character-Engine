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
import { EmotionEQDetail, EQ_DETAIL_HEIGHT } from './EmotionEQDetail';
import type { Surge } from '../../types/emotions';
import type { TraitEQPoint } from '../../types/trait-eq';

interface TimelineProps {
  mutedTracks: Set<string>;
  soloTrack: string | null;
  playheadPosition: number;
  onSeek: (position: number) => void;
  /** Which emotion track is expanded to show EQ detail */
  expandedTrack: string | null;
  /** Trait EQ data for the expanded track */
  traitEQData: Record<string, TraitEQPoint[]>;
}

export function Timeline({ mutedTracks, soloTrack, playheadPosition, onSeek, expandedTrack, traitEQData }: TimelineProps) {
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

  // Calculate total height: normal lanes + expanded EQ detail if any
  let totalLaneHeight = 0;
  const laneOffsets: { emotion: EmotionType; yOffset: number; isExpanded: boolean }[] = [];
  for (const emotion of visibleEmotions) {
    laneOffsets.push({ emotion, yOffset: rulerHeight + totalLaneHeight, isExpanded: emotion === expandedTrack });
    totalLaneHeight += LANE_HEIGHT;
    if (emotion === expandedTrack) {
      totalLaneHeight += EQ_DETAIL_HEIGHT;
    }
  }
  const totalHeight = rulerHeight + totalLaneHeight;

  // Surge lookup
  const surgeMap = new Map<string, Surge>();
  for (const timeline of character.emotionTimelines) {
    for (const surge of timeline.surges) {
      surgeMap.set(surge.id, surge);
    }
  }

  // Playhead X
  const playheadX = chapterToX(Math.floor(playheadPosition), zoomLevel)
    + (playheadPosition - Math.floor(playheadPosition)) * BASE_CHAPTER_WIDTH * zoomLevel;

  const handleTimelineClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left + (scrollRef.current?.scrollLeft ?? 0);
    const chapterWidth = BASE_CHAPTER_WIDTH * zoomLevel;
    const position = Math.max(0, Math.min(book.chapters.length - 0.01, x / chapterWidth));
    onSeek(position);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-ce-body">
      <div ref={scrollRef} className="flex-1 overflow-auto">
        <svg
          width={totalWidth}
          height={totalHeight}
          className="block"
          onClick={handleTimelineClick}
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
                    x={x + w / 2} y={rulerHeight - 8}
                    textAnchor="middle"
                    fill={ch.characterPresent ? '#c8c8d4' : '#555568'}
                    fontSize={10} fontFamily="'JetBrains Mono', monospace"
                  >
                    Ch.{i + 1}
                  </text>
                  {!ch.characterPresent && (
                    <rect x={x} y={rulerHeight - 3} width={w} height={3} fill="#555568" opacity={0.3} />
                  )}
                </g>
              );
            })}
            <line x1={0} y1={rulerHeight} x2={totalWidth} y2={rulerHeight} stroke="#3a3a5a" strokeWidth={1.5} />
          </g>

          {/* Emotion Lanes */}
          {laneOffsets.map(({ emotion, yOffset, isExpanded }) => {
            const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
            if (!timeline) return null;

            const color = EMOTION_COLORS[emotion];
            const brightColor = EMOTION_COLORS_BRIGHT[emotion];
            const laneIndex = visibleEmotions.indexOf(emotion);

            // Build continuous line
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
            const peakPoints = linePoints.filter((p) => p.isSurgePeak);

            return (
              <g key={emotion} transform={`translate(0, ${yOffset})`}>
                {/* Normal lane */}
                <g>
                  {/* Background */}
                  <rect
                    x={0} y={0} width={totalWidth} height={LANE_HEIGHT}
                    fill={laneIndex % 2 === 0 ? '#0d0d1e' : '#10102a'}
                  />

                  {/* Highlight if expanded */}
                  {isExpanded && (
                    <rect
                      x={0} y={0} width={totalWidth} height={LANE_HEIGHT}
                      fill={color} opacity={0.04}
                    />
                  )}

                  {/* Silence blocks */}
                  {timeline.silenceBlocks.map(([start, end], si) => {
                    const sx = chapterToX(start, zoomLevel);
                    const ex = chapterToX(end + 1, zoomLevel);
                    return <rect key={si} x={sx} y={0} width={ex - sx} height={LANE_HEIGHT} fill="#1a1a2e" opacity={0.5} />;
                  })}

                  {/* Chapter grid */}
                  {book.chapters.map((_, i) => (
                    <line key={i} x1={chapterToX(i, zoomLevel)} y1={0} x2={chapterToX(i, zoomLevel)} y2={LANE_HEIGHT} stroke="#1e1e3a" strokeWidth={0.5} />
                  ))}

                  {/* Filled area */}
                  {filledPath && <path d={filledPath} fill={`url(#fill-${emotion})`} />}

                  {/* Continuous line */}
                  {linePath && (
                    <path d={linePath} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                  )}

                  {/* Surge peak dots */}
                  {peakPoints.map((point) => {
                    const surge = point.surgeId ? surgeMap.get(point.surgeId) : null;
                    const isSelected = selectedSurge?.id === point.surgeId;
                    return (
                      <g key={point.surgeId}>
                        {isSelected && (
                          <circle cx={point.x} cy={point.y} r={10} fill="none" stroke={brightColor} strokeWidth={1} opacity={0.4} />
                        )}
                        <circle
                          cx={point.x} cy={point.y} r={isSelected ? 6 : 4}
                          fill={isSelected ? brightColor : color} stroke="#0d0d1a" strokeWidth={1.5}
                          className="cursor-pointer"
                          style={{ filter: isSelected ? `drop-shadow(0 0 8px ${brightColor})` : 'none' }}
                          onClick={(e) => { e.stopPropagation(); if (surge) selectSurge(isSelected ? null : surge); }}
                        >
                          <title>{EMOTION_LABELS[emotion as EmotionType]} surge: {surge?.peakIntensity}/75</title>
                        </circle>
                      </g>
                    );
                  })}

                  {/* Bottom border */}
                  <line x1={0} y1={LANE_HEIGHT} x2={totalWidth} y2={LANE_HEIGHT} stroke="#3a3a5a" strokeWidth={isExpanded ? 0.5 : 1.5} />

                  {/* Gradient def */}
                  <defs>
                    <linearGradient id={`fill-${emotion}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                      <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                </g>

                {/* EQ Detail Panel — expanded below the normal lane */}
                {isExpanded && (
                  <g transform={`translate(0, ${LANE_HEIGHT})`}>
                    <EmotionEQDetail
                      emotion={emotion}
                      timeline={timeline}
                      traitPoints={traitEQData[emotion] ?? []}
                      totalChapters={book.chapters.length}
                      zoomLevel={zoomLevel}
                      totalWidth={totalWidth}
                    />
                  </g>
                )}
              </g>
            );
          })}

          {/* PLAYHEAD */}
          <g>
            <line x1={playheadX} y1={0} x2={playheadX} y2={totalHeight} stroke="white" strokeWidth={1.5} opacity={0.85} style={{ pointerEvents: 'none' }} />
            <polygon points={`${playheadX - 5},0 ${playheadX + 5},0 ${playheadX},8`} fill="white" opacity={0.9} style={{ pointerEvents: 'none' }} />
            <line x1={playheadX} y1={0} x2={playheadX} y2={totalHeight} stroke="white" strokeWidth={6} opacity={0.06} style={{ pointerEvents: 'none' }} />
          </g>
        </svg>
      </div>
    </div>
  );
}
