import { useRef } from 'react';
import { useSession } from '../../context/SessionContext';
import { useInspector } from '../../context/InspectorContext';
import { EMOTION_LIST, EMOTION_COLORS, EMOTION_COLORS_BRIGHT, EMOTION_LABELS } from '../../theme/colors';
import type { EmotionType } from '../../theme/colors';
import {
  getTimelineWidth,
  chapterToX,
  getChapterWidth,
  LANE_HEIGHT,
  buildContinuousLine,
  splitIntoSegments,
  pointsToSharpPath,
  pointsToFilledPath,
  type ChapterLayout,
} from '../../utils/timeline-math';
import { EmotionEQDetail, EQ_DETAIL_HEIGHT } from './EmotionEQDetail';
import type { Surge } from '../../types/emotions';
import type { TraitEQPoint } from '../../types/trait-eq';

interface TimelineProps {
  mutedTracks: Set<string>;
  soloTrack: string | null;
  playheadPosition: number;
  onSeek: (position: number) => void;
  expandedTrack: string | null;
  traitEQData: Record<string, TraitEQPoint[]>;
  chapterLayout: ChapterLayout[];
}

export function Timeline({ mutedTracks, soloTrack, playheadPosition, onSeek, expandedTrack, traitEQData, chapterLayout }: TimelineProps) {
  const { session } = useSession();
  const { selectedSurge, selectSurge } = useInspector();
  const { book, character, zoomLevel } = session;
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalWidth = getTimelineWidth(book.chapters.length, zoomLevel, chapterLayout);
  const rulerHeight = 32;
  const visibleEmotions = EMOTION_LIST.filter((e) => {
    if (soloTrack) return e === soloTrack;
    return !mutedTracks.has(e);
  });

  // Calculate total height with expanded lanes
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
  for (const tl of (character?.emotionTimelines || [])) {
    for (const surge of tl.surges) {
      surgeMap.set(surge.id, surge);
    }
  }

  // Playhead X — uses layout-aware positioning
  const playheadChapter = Math.floor(playheadPosition);
  const playheadFrac = playheadPosition - playheadChapter;
  const playheadX = chapterToX(playheadChapter, zoomLevel, chapterLayout)
    + playheadFrac * getChapterWidth(playheadChapter, zoomLevel, chapterLayout);

  const handleTimelineClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clickX = e.clientX - rect.left + (scrollRef.current?.scrollLeft ?? 0);
    // Find which chapter was clicked using layout
    let position = 0;
    for (const lay of chapterLayout) {
      if (clickX >= lay.startX && clickX < lay.startX + lay.width) {
        position = lay.index + (clickX - lay.startX) / lay.width;
        break;
      }
    }
    onSeek(Math.max(0, Math.min(book.chapters.length - 0.01, position)));
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-ce-body">
      <div ref={scrollRef} className="flex-1 overflow-auto">
        <svg width={totalWidth} height={totalHeight} className="block" onClick={handleTimelineClick}>
          {/* Chapter Ruler */}
          <g>
            <rect x={0} y={0} width={totalWidth} height={rulerHeight} fill="#1a1a2e" />
            {book.chapters.map((ch, i) => {
              const lay = chapterLayout.find(l => l.index === i);
              if (!lay) return null;
              const x = lay.startX;
              const w = lay.width;
              return (
                <g key={i}>
                  {/* Chapter border */}
                  <line x1={x} y1={0} x2={x} y2={rulerHeight} stroke="#2a2a4a" strokeWidth={1} />
                  {/* Chapter label */}
                  <text
                    x={x + w / 2} y={rulerHeight - 14}
                    textAnchor="middle"
                    fill={ch.characterPresent ? '#c8c8d4' : '#555568'}
                    fontSize={10} fontFamily="'JetBrains Mono', monospace"
                  >
                    Ch.{i + 1}
                  </text>
                  {/* Scene count indicator */}
                  <text
                    x={x + w / 2} y={rulerHeight - 4}
                    textAnchor="middle"
                    fill="#555568"
                    fontSize={7} fontFamily="'JetBrains Mono', monospace"
                  >
                    {ch.sceneCount}s
                  </text>
                  {/* Scene subdivision ticks within chapter */}
                  {Array.from({ length: ch.sceneCount - 1 }, (_, si) => {
                    const sceneX = x + (si + 1) * lay.sceneWidth;
                    return (
                      <line key={si} x1={sceneX} y1={rulerHeight - 6} x2={sceneX} y2={rulerHeight}
                        stroke="#3a3a5a" strokeWidth={0.5} />
                    );
                  })}
                  {!ch.characterPresent && (
                    <rect x={x} y={rulerHeight - 2} width={w} height={2} fill="#555568" opacity={0.3} />
                  )}
                </g>
              );
            })}
            <line x1={0} y1={rulerHeight} x2={totalWidth} y2={rulerHeight} stroke="#3a3a5a" strokeWidth={1.5} />
          </g>

          {/* Emotion Lanes */}
          {laneOffsets.map(({ emotion, yOffset, isExpanded }) => {
            const timeline = character?.emotionTimelines?.find((t) => t.emotionType === emotion);
            if (!timeline) return null;

            const color = EMOTION_COLORS[emotion];
            const brightColor = EMOTION_COLORS_BRIGHT[emotion];
            const laneIndex = visibleEmotions.indexOf(emotion);

            // Build from REAL emotion drift + surge data
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
              LANE_HEIGHT,
              chapterLayout
            );

            // Split into segments (gaps where character absent)
            const segments = splitIntoSegments(linePoints, timeline.silenceBlocks);
            const sharpLinePaths = segments.map((seg) => pointsToSharpPath(seg));
            const sharpFilledPaths = segments.map((seg) => pointsToFilledPath(seg, LANE_HEIGHT, true));
            const peakPoints = linePoints.filter((p) => p.isSurgePeak);

            return (
              <g key={emotion} transform={`translate(0, ${yOffset})`}>
                {/* Normal collapsed lane */}
                <g>
                  {/* Background */}
                  <rect x={0} y={0} width={totalWidth} height={LANE_HEIGHT} fill={laneIndex % 2 === 0 ? '#0d0d1e' : '#10102a'} />

                  {/* Highlight if expanded */}
                  {isExpanded && <rect x={0} y={0} width={totalWidth} height={LANE_HEIGHT} fill={color} opacity={0.04} />}

                  {/* Silence blocks — keep lane color, no dark overlay */}

                  {/* Chapter + scene grid */}
                  {chapterLayout.map((lay) => (
                    <g key={`grid-${lay.index}`}>
                      {/* Chapter border */}
                      <line x1={lay.startX} y1={0} x2={lay.startX} y2={LANE_HEIGHT} stroke="#1e1e3a" strokeWidth={0.5} />
                      {/* Scene subdivision lines */}
                      {Array.from({ length: lay.sceneCount - 1 }, (_, si) => (
                        <line key={si} x1={lay.startX + (si + 1) * lay.sceneWidth} y1={0}
                          x2={lay.startX + (si + 1) * lay.sceneWidth} y2={LANE_HEIGHT}
                          stroke="#1a1a30" strokeWidth={0.3} strokeDasharray="2 3" />
                      ))}
                    </g>
                  ))}

                  {/* Filled areas — one per segment, gaps between */}
                  {sharpFilledPaths.map((fp, i) => fp && (
                    <path key={`fill-${i}`} d={fp} fill={`url(#fill-${emotion})`} />
                  ))}

                  {/* Sharp lines — one per segment, gaps between */}
                  {sharpLinePaths.map((sp, i) => sp && (
                    <path key={`line-${i}`} d={sp} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="miter" strokeLinecap="butt" />
                  ))}

                  {/* Start/end dots for each segment — like a studio session clip */}
                  {segments.map((seg, i) => {
                    if (seg.length === 0) return null;
                    const first = seg[0];
                    const last = seg[seg.length - 1];
                    return (
                      <g key={`endpoints-${i}`}>
                        <circle cx={first.x} cy={first.y} r={4} fill={color} stroke="#0d0d1a" strokeWidth={1.5} />
                        <circle cx={last.x} cy={last.y} r={4} fill={color} stroke="#0d0d1a" strokeWidth={1.5} />
                      </g>
                    );
                  })}

                  {/* Surge peak dots (clickable) */}
                  {peakPoints.map((point) => {
                    const surge = point.surgeId ? surgeMap.get(point.surgeId) : null;
                    const isSelected = selectedSurge?.id === point.surgeId;
                    return (
                      <g key={point.surgeId}>
                        {isSelected && (
                          <circle cx={point.x} cy={point.y} r={8} fill="none" stroke={brightColor} strokeWidth={1} opacity={0.4} />
                        )}
                        <circle
                          cx={point.x} cy={point.y} r={isSelected ? 5 : 3}
                          fill={isSelected ? brightColor : color} stroke="#0d0d1a" strokeWidth={1}
                          className="cursor-pointer"
                          style={{ filter: isSelected ? `drop-shadow(0 0 6px ${brightColor})` : 'none' }}
                          onClick={(e) => { e.stopPropagation(); if (surge) selectSurge(isSelected ? null : surge); }}
                        >
                          <title>{EMOTION_LABELS[emotion as EmotionType]} surge: {surge?.peakIntensity}/75</title>
                        </circle>
                      </g>
                    );
                  })}

                  {/* Bottom border */}
                  <line x1={0} y1={LANE_HEIGHT} x2={totalWidth} y2={LANE_HEIGHT} stroke="#3a3a5a" strokeWidth={isExpanded ? 0.5 : 1.5} />

                  <defs>
                    <linearGradient id={`fill-${emotion}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                      <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                </g>

                {/* EQ Detail — expanded, shows trait influence curves */}
                {isExpanded && (
                  <g transform={`translate(0, ${LANE_HEIGHT})`}>
                    <EmotionEQDetail
                      emotion={emotion}
                      timeline={timeline}
                      traitPoints={traitEQData[emotion] ?? []}
                      totalChapters={book.chapters.length}
                      zoomLevel={zoomLevel}
                      totalWidth={totalWidth}
                      chapterLayout={chapterLayout}
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
