import { EMOTION_COLORS, EMOTION_COLORS_BRIGHT, EMOTION_LABELS } from '../../theme/colors';
import type { EmotionType } from '../../theme/colors';
import type { TraitEQPoint } from '../../types/trait-eq';
import type { EmotionTimeline } from '../../types/emotions';
import {
  chapterToX,
  BASE_CHAPTER_WIDTH,
  buildContinuousLine,
  pointsToSmoothPath,
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

/** The zero line (no boost/cut) sits at the vertical center */
const CENTER_Y = EQ_DETAIL_HEIGHT / 2;
/** Max boost/cut range in pixels from center */
const MAX_RANGE = 80;

/** Convert a boost/cut value (-37 to +37) to a Y position */
function boostToY(boostCut: number): number {
  const clamped = Math.max(-37, Math.min(37, boostCut));
  return CENTER_Y - (clamped / 37) * MAX_RANGE;
}

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

  // Sort trait points by chapter position
  const sorted = [...traitPoints].sort((a, b) => a.chapterPosition - b.chapterPosition);

  // Build the smooth EQ curve path through all trait points
  const curvePoints: { x: number; y: number }[] = [];

  // Start at zero
  curvePoints.push({ x: 0, y: CENTER_Y });

  // Add each trait point
  for (const point of sorted) {
    const x = posToX(point.chapterPosition, zoomLevel);
    const y = boostToY(point.boostCut);
    curvePoints.push({ x, y });
  }

  // End at zero
  curvePoints.push({ x: totalWidth, y: CENTER_Y });

  // Build smooth SVG path
  let curvePath = `M ${curvePoints[0].x} ${curvePoints[0].y}`;
  for (let i = 1; i < curvePoints.length; i++) {
    const prev = curvePoints[i - 1];
    const curr = curvePoints[i];
    const cpx = (prev.x + curr.x) / 2;
    curvePath += ` C ${cpx} ${prev.y} ${cpx} ${curr.y} ${curr.x} ${curr.y}`;
  }

  // Filled area from curve to center line
  const filledPath = curvePath +
    ` L ${curvePoints[curvePoints.length - 1].x} ${CENTER_Y}` +
    ` L ${curvePoints[0].x} ${CENTER_Y} Z`;

  // Reference emotion line (dimmed, smooth)
  const emotionLinePoints = buildContinuousLine(
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
  const emotionLinePath = pointsToSmoothPath(emotionLinePoints);

  return (
    <svg width={totalWidth} height={EQ_DETAIL_HEIGHT} className="block">
      {/* Background */}
      <rect x={0} y={0} width={totalWidth} height={EQ_DETAIL_HEIGHT} fill="#0a0a18" />

      {/* Grid lines — horizontal */}
      {[-30, -20, -10, 0, 10, 20, 30].map((val) => {
        const y = boostToY(val);
        const isCenter = val === 0;
        return (
          <g key={val}>
            <line
              x1={0} y1={y} x2={totalWidth} y2={y}
              stroke={isCenter ? '#3a3a5a' : '#1a1a30'}
              strokeWidth={isCenter ? 1.5 : 0.5}
              strokeDasharray={isCenter ? 'none' : '4 4'}
            />
            <text
              x={4} y={y - 3}
              fill="#555568" fontSize={8}
              fontFamily="'JetBrains Mono', monospace"
            >
              {val > 0 ? `+${val}` : val === 0 ? '0' : `${val}`}
            </text>
          </g>
        );
      })}

      {/* Vertical chapter grid lines */}
      {Array.from({ length: totalChapters }, (_, i) => {
        const x = chapterToX(i, zoomLevel);
        return (
          <line key={i} x1={x} y1={0} x2={x} y2={EQ_DETAIL_HEIGHT} stroke="#1a1a30" strokeWidth={0.5} />
        );
      })}

      {/* Filled area under/over the EQ curve */}
      <path d={filledPath} fill={color} opacity={0.12} />

      {/* The smooth EQ curve */}
      <path
        d={curvePath}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 4px ${color}44)` }}
      />

      {/* Reference emotion line (dimmed) */}
      {emotionLinePath && (
        <path
          d={emotionLinePath}
          fill="none"
          stroke={color}
          strokeWidth={1}
          strokeDasharray="3 3"
          opacity={0.25}
        />
      )}

      {/* Trait control points */}
      {sorted.map((point) => {
        const x = posToX(point.chapterPosition, zoomLevel);
        const y = boostToY(point.boostCut);
        const isBoost = point.boostCut > 0;

        return (
          <g key={point.id}>
            {/* Vertical line from center to point */}
            <line
              x1={x} y1={CENTER_Y} x2={x} y2={y}
              stroke={color} strokeWidth={1} opacity={0.3}
              strokeDasharray="2 2"
            />

            {/* Outer glow ring */}
            <circle cx={x} cy={y} r={12} fill="none" stroke={color} strokeWidth={1} opacity={0.15} />

            {/* Main control point circle */}
            <circle
              cx={x} cy={y} r={7}
              fill="#0a0a18"
              stroke={brightColor}
              strokeWidth={2}
              className="cursor-pointer"
              style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
            />

            {/* Inner dot */}
            <circle cx={x} cy={y} r={3} fill={brightColor} />

            {/* Label above/below the point */}
            <g transform={`translate(${x}, ${isBoost ? y - 18 : y + 22})`}>
              <rect
                x={-28} y={-8} width={56} height={16} rx={3}
                fill="#0d0d1a" stroke={color} strokeWidth={0.5} opacity={0.9}
              />
              <text
                x={0} y={3} textAnchor="middle" fill={brightColor}
                fontSize={8} fontFamily="'JetBrains Mono', monospace" fontWeight="bold"
              >
                {point.label}
              </text>
            </g>

            {/* Boost/cut value badge */}
            <g transform={`translate(${x + 14}, ${y - 6})`}>
              <rect
                x={-2} y={-6} width={24} height={12} rx={2}
                fill={isBoost ? '#2aad8e22' : '#dc354522'}
                stroke={isBoost ? '#2aad8e' : '#dc3545'} strokeWidth={0.5}
              />
              <text
                x={10} y={2} textAnchor="middle"
                fill={isBoost ? '#2aad8e' : '#dc3545'}
                fontSize={7} fontFamily="'JetBrains Mono', monospace" fontWeight="bold"
              >
                {isBoost ? '+' : ''}{point.boostCut}
              </text>
            </g>

            <title>{point.traitName}: {point.traitScore}/75 → {isBoost ? 'Boosts' : 'Cuts'} {EMOTION_LABELS[emotion]} by {Math.abs(point.boostCut)}</title>
          </g>
        );
      })}

      {/* Title */}
      <text
        x={8} y={14} fill={brightColor} fontSize={10}
        fontFamily="'Inter', sans-serif" fontWeight="600" opacity={0.7}
      >
        {EMOTION_LABELS[emotion]} — Trait EQ
      </text>
      <text
        x={8} y={26} fill="#555568" fontSize={8}
        fontFamily="'JetBrains Mono', monospace"
      >
        Traits that amplify (+) or suppress (-) this emotion
      </text>

      {/* Borders */}
      <line x1={0} y1={0} x2={totalWidth} y2={0} stroke="#3a3a5a" strokeWidth={1.5} />
      <line x1={0} y1={EQ_DETAIL_HEIGHT} x2={totalWidth} y2={EQ_DETAIL_HEIGHT} stroke="#3a3a5a" strokeWidth={1.5} />
    </svg>
  );
}
