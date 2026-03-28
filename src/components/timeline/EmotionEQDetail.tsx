import { EMOTION_COLORS, EMOTION_COLORS_BRIGHT, EMOTION_LABELS } from '../../theme/colors';
import type { EmotionType } from '../../theme/colors';
import type { TraitEQPoint } from '../../types/trait-eq';
import type { EmotionTimeline } from '../../types/emotions';
import {
  chapterToX,
  scoreToY,
  BASE_CHAPTER_WIDTH,
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

/**
 * Build a smooth flowing curve through the drift line values.
 * One point per chapter at the midpoint, connected with smooth bezier curves.
 */
function buildSmoothDriftPath(
  driftLine: number[],
  zoom: number,
  totalWidth: number,
  laneHeight: number
): string {
  if (driftLine.length === 0) return '';

  const points: { x: number; y: number }[] = [];

  for (let i = 0; i < driftLine.length; i++) {
    const x = chapterToX(i, zoom) + (BASE_CHAPTER_WIDTH * zoom) / 2;
    const y = scoreToY(driftLine[i], laneHeight);
    points.push({ x, y });
  }

  // Start at left edge at first value
  let d = `M 0 ${scoreToY(driftLine[0], laneHeight)}`;

  // Smooth curve to first point
  d += ` C ${points[0].x / 2} ${scoreToY(driftLine[0], laneHeight)} ${points[0].x / 2} ${points[0].y} ${points[0].x} ${points[0].y}`;

  // Smooth curves between all points
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx = (prev.x + curr.x) / 2;
    d += ` C ${cpx} ${prev.y} ${cpx} ${curr.y} ${curr.x} ${curr.y}`;
  }

  // Extend to right edge
  const last = points[points.length - 1];
  d += ` C ${(last.x + totalWidth) / 2} ${last.y} ${(last.x + totalWidth) / 2} ${last.y} ${totalWidth} ${last.y}`;

  return d;
}

/** Build a filled version of the smooth drift path */
function buildSmoothDriftFilledPath(
  driftLine: number[],
  zoom: number,
  totalWidth: number,
  laneHeight: number
): string {
  const linePath = buildSmoothDriftPath(driftLine, zoom, totalWidth, laneHeight);
  if (!linePath) return '';
  return `${linePath} L ${totalWidth} ${laneHeight} L 0 ${laneHeight} Z`;
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

  // Build smooth flowing curve from drift line values
  const smoothPath = buildSmoothDriftPath(timeline.driftLine, zoomLevel, totalWidth, EQ_DETAIL_HEIGHT);
  const smoothFilledPath = buildSmoothDriftFilledPath(timeline.driftLine, zoomLevel, totalWidth, EQ_DETAIL_HEIGHT);

  // Sort trait points
  const sorted = [...traitPoints].sort((a, b) => a.chapterPosition - b.chapterPosition);

  // Get the Y position on the curve at a chapter position
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

      {/* Horizontal grid lines */}
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
            <text x={4} y={y - 3} fill="#555568" fontSize={8}
              fontFamily="'JetBrains Mono', monospace">
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

      {/* Filled area under curve */}
      {smoothFilledPath && (
        <path d={smoothFilledPath} fill={color} opacity={0.1} />
      )}

      {/* Smooth flowing emotion curve */}
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

      {/* Trait control points overlaid on the curve */}
      {sorted.map((point) => {
        const x = posToX(point.chapterPosition, zoomLevel);
        const lineY = getEmotionYAtChapter(point.chapterPosition);
        const offsetY = -(point.boostCut / 37) * 40;
        const pointY = lineY + offsetY;
        const isBoost = point.boostCut > 0;

        return (
          <g key={point.id}>
            {/* Connection line from curve to trait point */}
            <line
              x1={x} y1={lineY} x2={x} y2={pointY}
              stroke={isBoost ? '#2aad8e' : '#dc3545'} strokeWidth={1} opacity={0.4}
              strokeDasharray="2 2"
            />

            {/* Dot on the emotion line */}
            <circle cx={x} cy={lineY} r={3} fill={color} stroke="#0a0a18" strokeWidth={1} />

            {/* Outer glow ring */}
            <circle cx={x} cy={pointY} r={12} fill="none" stroke={color} strokeWidth={1} opacity={0.15} />

            {/* Main control point */}
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

            {/* Boost/cut badge */}
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
        {EMOTION_LABELS[emotion]} — Trait Influence
      </text>
      <text x={8} y={26} fill="#555568" fontSize={8}
        fontFamily="'JetBrains Mono', monospace">
        Smooth emotion curve with trait modifiers
      </text>

      {/* Borders */}
      <line x1={0} y1={0} x2={totalWidth} y2={0} stroke="#3a3a5a" strokeWidth={1.5} />
      <line x1={0} y1={EQ_DETAIL_HEIGHT} x2={totalWidth} y2={EQ_DETAIL_HEIGHT} stroke="#3a3a5a" strokeWidth={1.5} />
    </svg>
  );
}
