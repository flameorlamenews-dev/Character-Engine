import { EMOTION_COLORS, EMOTION_COLORS_BRIGHT, EMOTION_LABELS } from '../../theme/colors';
import type { EmotionType } from '../../theme/colors';
import type { TraitEQPoint } from '../../types/trait-eq';
import type { EmotionTimeline } from '../../types/emotions';
import {
  chapterToX,
  scoreToY,
  BASE_CHAPTER_WIDTH,
  buildContinuousLine,
  pointsToSmoothPath,
  pointsToFilledPath,
} from '../../utils/timeline-math';

interface EmotionEQDetailProps {
  emotion: EmotionType;
  timeline: EmotionTimeline;
  traitPoints: TraitEQPoint[];
  totalChapters: number;
  zoomLevel: number;
  totalWidth: number;
}

/** Height of the expanded EQ detail lane */
export const EQ_DETAIL_HEIGHT = 220;

/** Convert a chapter position to X */
function posToX(chapterPos: number, zoom: number): number {
  return chapterToX(Math.floor(chapterPos), zoom) +
    (chapterPos - Math.floor(chapterPos)) * BASE_CHAPTER_WIDTH * zoom;
}

export function EmotionEQDetail({
  emotion,
  timeline,
  traitPoints,
  totalChapters,
  zoomLevel,
  totalWidth,
}: EmotionEQDetailProps) {
  const color = EMOTION_COLORS[emotion];
  const brightColor = EMOTION_COLORS_BRIGHT[emotion];

  // Build the SAME continuous line data as the collapsed view,
  // but rendered at EQ_DETAIL_HEIGHT for more vertical detail
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
    EQ_DETAIL_HEIGHT
  );

  // Smooth curve for the expanded view
  const smoothPath = pointsToSmoothPath(linePoints);
  const smoothFilledPath = pointsToFilledPath(linePoints, EQ_DETAIL_HEIGHT, false);

  // Sort trait points by chapter position
  const sorted = [...traitPoints].sort((a, b) => a.chapterPosition - b.chapterPosition);

  // For each trait point, find the Y position on the emotion line at that chapter position
  // by interpolating the drift line
  function getEmotionYAtChapter(chapterPos: number): number {
    const chIdx = Math.floor(chapterPos);
    const frac = chapterPos - chIdx;
    const val1 = timeline.driftLine[chIdx] ?? timeline.baseline;
    const val2 = timeline.driftLine[Math.min(chIdx + 1, timeline.driftLine.length - 1)] ?? val1;
    const interpolated = val1 + (val2 - val1) * frac;
    return scoreToY(interpolated, EQ_DETAIL_HEIGHT);
  }

  // Score grid lines
  const gridScores = [0, 15, 25, 37, 50, 62, 75];

  return (
    <svg width={totalWidth} height={EQ_DETAIL_HEIGHT} className="block">
      {/* Background */}
      <rect x={0} y={0} width={totalWidth} height={EQ_DETAIL_HEIGHT} fill="#0a0a18" />

      {/* Horizontal grid lines with score labels */}
      {gridScores.map((score) => {
        const y = scoreToY(score, EQ_DETAIL_HEIGHT);
        const isTierBoundary = score === 25 || score === 50;
        return (
          <g key={score}>
            <line
              x1={0} y1={y} x2={totalWidth} y2={y}
              stroke={isTierBoundary ? '#2a2a4a' : '#1a1a30'}
              strokeWidth={isTierBoundary ? 1 : 0.5}
              strokeDasharray={isTierBoundary ? '6 4' : '3 4'}
            />
            <text
              x={4} y={y - 3}
              fill="#555568" fontSize={8}
              fontFamily="'JetBrains Mono', monospace"
            >
              {score}
            </text>
          </g>
        );
      })}

      {/* Tier zone labels */}
      <text x={totalWidth - 40} y={scoreToY(12, EQ_DETAIL_HEIGHT)} fill="#2aad8e" fontSize={8} opacity={0.4}
        fontFamily="'JetBrains Mono', monospace">LOW</text>
      <text x={totalWidth - 40} y={scoreToY(37, EQ_DETAIL_HEIGHT)} fill="#e0a832" fontSize={8} opacity={0.4}
        fontFamily="'JetBrains Mono', monospace">MOD</text>
      <text x={totalWidth - 44} y={scoreToY(62, EQ_DETAIL_HEIGHT)} fill="#dc3545" fontSize={8} opacity={0.4}
        fontFamily="'JetBrains Mono', monospace">HIGH</text>

      {/* Vertical chapter grid lines */}
      {Array.from({ length: totalChapters }, (_, i) => {
        const x = chapterToX(i, zoomLevel);
        return (
          <line key={i} x1={x} y1={0} x2={x} y2={EQ_DETAIL_HEIGHT} stroke="#1a1a30" strokeWidth={0.5} />
        );
      })}

      {/* Filled area under the smooth emotion curve */}
      {smoothFilledPath && (
        <path d={smoothFilledPath} fill={color} opacity={0.1} />
      )}

      {/* The smooth emotion curve — same data as collapsed, but smooth */}
      {smoothPath && (
        <path
          d={smoothPath}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 4px ${color}44)` }}
        />
      )}

      {/* Trait control points overlaid ON the emotion curve */}
      {sorted.map((point) => {
        const x = posToX(point.chapterPosition, zoomLevel);
        // Place the trait point ON the emotion line at this chapter position
        const lineY = getEmotionYAtChapter(point.chapterPosition);
        // Then offset vertically based on boost/cut to show influence direction
        const offsetY = -(point.boostCut / 37) * 40;
        const pointY = lineY + offsetY;
        const isBoost = point.boostCut > 0;

        return (
          <g key={point.id}>
            {/* Connection line from emotion curve to the trait point */}
            <line
              x1={x} y1={lineY} x2={x} y2={pointY}
              stroke={isBoost ? '#2aad8e' : '#dc3545'} strokeWidth={1} opacity={0.4}
              strokeDasharray="2 2"
            />

            {/* Dot on the emotion line showing where trait applies */}
            <circle cx={x} cy={lineY} r={3} fill={color} stroke="#0a0a18" strokeWidth={1} />

            {/* Outer glow ring */}
            <circle cx={x} cy={pointY} r={12} fill="none" stroke={color} strokeWidth={1} opacity={0.15} />

            {/* Main control point circle */}
            <circle
              cx={x} cy={pointY} r={7}
              fill="#0a0a18" stroke={brightColor} strokeWidth={2}
              className="cursor-pointer"
              style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
            />

            {/* Inner dot */}
            <circle cx={x} cy={pointY} r={3} fill={brightColor} />

            {/* Label */}
            <g transform={`translate(${x}, ${isBoost ? pointY - 18 : pointY + 22})`}>
              <rect x={-28} y={-8} width={56} height={16} rx={3}
                fill="#0d0d1a" stroke={color} strokeWidth={0.5} opacity={0.9} />
              <text x={0} y={3} textAnchor="middle" fill={brightColor}
                fontSize={8} fontFamily="'JetBrains Mono', monospace" fontWeight="bold">
                {point.label}
              </text>
            </g>

            {/* Boost/cut value badge */}
            <g transform={`translate(${x + 14}, ${pointY - 6})`}>
              <rect x={-2} y={-6} width={24} height={12} rx={2}
                fill={isBoost ? '#2aad8e22' : '#dc354522'}
                stroke={isBoost ? '#2aad8e' : '#dc3545'} strokeWidth={0.5} />
              <text x={10} y={2} textAnchor="middle"
                fill={isBoost ? '#2aad8e' : '#dc3545'}
                fontSize={7} fontFamily="'JetBrains Mono', monospace" fontWeight="bold">
                {isBoost ? '+' : ''}{point.boostCut}
              </text>
            </g>

            <title>{point.traitName}: {point.traitScore}/75 → {isBoost ? 'Boosts' : 'Cuts'} {EMOTION_LABELS[emotion]} by {Math.abs(point.boostCut)}</title>
          </g>
        );
      })}

      {/* Title */}
      <text x={8} y={14} fill={brightColor} fontSize={10}
        fontFamily="'Inter', sans-serif" fontWeight="600" opacity={0.7}>
        {EMOTION_LABELS[emotion]} — Trait EQ
      </text>
      <text x={8} y={26} fill="#555568" fontSize={8}
        fontFamily="'JetBrains Mono', monospace">
        Traits that amplify (+) or suppress (-) this emotion
      </text>

      {/* Borders */}
      <line x1={0} y1={0} x2={totalWidth} y2={0} stroke="#3a3a5a" strokeWidth={1.5} />
      <line x1={0} y1={EQ_DETAIL_HEIGHT} x2={totalWidth} y2={EQ_DETAIL_HEIGHT} stroke="#3a3a5a" strokeWidth={1.5} />
    </svg>
  );
}
