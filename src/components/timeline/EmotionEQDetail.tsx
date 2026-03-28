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
 * Build a smooth flowing curve through drift + surge values.
 * Drift = one point per chapter midpoint. Surges = extra points for peaks.
 * Silent chapters create gaps (returns multiple path strings).
 */
interface SmoothResult {
  paths: string[];
  segments: { x: number; y: number }[][];
}

function buildSmoothData(
  driftLine: number[],
  surges: { chapterIndex: number; scenePosition: number; peakIntensity: number; duration: number }[],
  silenceBlocks: [number, number][],
  zoom: number,
  totalWidth: number,
  laneHeight: number
): SmoothResult {
  if (driftLine.length === 0) return { paths: [], segments: [] };

  const chapterWidth = BASE_CHAPTER_WIDTH * zoom;

  // Silent chapter set
  const silentChapters = new Set<number>();
  for (const [start, end] of silenceBlocks) {
    for (let i = start; i <= end; i++) silentChapters.add(i);
  }

  // Sort surges
  const sortedSurges = [...surges].sort((a, b) => {
    if (a.chapterIndex !== b.chapterIndex) return a.chapterIndex - b.chapterIndex;
    return a.scenePosition - b.scenePosition;
  });

  // Build points per chapter, grouping into segments separated by gaps
  const segments: { x: number; y: number }[][] = [];
  let currentSeg: { x: number; y: number }[] = [];

  for (let ch = 0; ch < driftLine.length; ch++) {
    if (silentChapters.has(ch)) {
      if (currentSeg.length > 0) {
        segments.push(currentSeg);
        currentSeg = [];
      }
      continue;
    }

    const baseY = scoreToY(driftLine[ch], laneHeight);
    const chStart = chapterToX(ch, zoom);
    const chMid = chStart + chapterWidth / 2;

    // Get surges for this chapter
    const chSurges = sortedSurges.filter((s) => s.chapterIndex === ch);

    if (chSurges.length === 0) {
      // Just the drift point at chapter midpoint
      currentSeg.push({ x: chMid, y: baseY });
    } else {
      // Add drift point at chapter start area
      currentSeg.push({ x: chStart + chapterWidth * 0.15, y: baseY });

      for (const surge of chSurges) {
        const surgeX = chStart + surge.scenePosition * chapterWidth;
        // Pre-surge baseline
        const preX = surgeX - surge.duration * 0.2 * chapterWidth;
        if (preX > chStart + chapterWidth * 0.15) {
          currentSeg.push({ x: preX, y: baseY });
        }
        // Surge peak
        currentSeg.push({ x: surgeX, y: scoreToY(surge.peakIntensity, laneHeight) });
        // Post-surge baseline
        const postX = surgeX + surge.duration * 0.5 * chapterWidth;
        currentSeg.push({ x: Math.min(postX, chStart + chapterWidth * 0.85), y: baseY });
      }

      // Drift point at chapter end area
      currentSeg.push({ x: chStart + chapterWidth * 0.85, y: baseY });
    }
  }
  if (currentSeg.length > 0) segments.push(currentSeg);

  // Render each segment as a smooth bezier path
  const paths = segments.map((points) => {
    if (points.length === 0) return '';
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

    // Extend to edges for first/last segments
    const first = points[0];
    const last = points[points.length - 1];

    let d = `M ${Math.max(0, first.x - chapterWidth * 0.3)} ${first.y}`;
    // Smooth to first point
    d += ` C ${first.x - chapterWidth * 0.15} ${first.y} ${first.x - chapterWidth * 0.05} ${first.y} ${first.x} ${first.y}`;

    // Smooth curves between all points
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev.x + curr.x) / 2;
      d += ` C ${cpx} ${prev.y} ${cpx} ${curr.y} ${curr.x} ${curr.y}`;
    }

    // Extend to right edge
    d += ` C ${last.x + chapterWidth * 0.05} ${last.y} ${last.x + chapterWidth * 0.15} ${last.y} ${Math.min(totalWidth, last.x + chapterWidth * 0.3)} ${last.y}`;

    return d;
  });

  return { paths, segments };
}

/** Build filled versions of smooth paths */
function buildSmoothFilledPaths(
  driftLine: number[],
  surges: { chapterIndex: number; scenePosition: number; peakIntensity: number; duration: number }[],
  silenceBlocks: [number, number][],
  zoom: number,
  totalWidth: number,
  laneHeight: number
): string[] {
  const { paths } = buildSmoothData(driftLine, surges, silenceBlocks, zoom, totalWidth, laneHeight);
  return paths.map((p) => {
    if (!p) return '';
    // Extract first and last x from the path
    const coords = p.match(/[\d.]+/g);
    if (!coords || coords.length < 4) return '';
    const firstX = parseFloat(coords[0]);
    const lastCoords = p.split(/[CML]\s*/).filter(Boolean).pop()?.trim().split(/\s+/);
    const lastX = lastCoords ? parseFloat(lastCoords[lastCoords.length - 2] || lastCoords[0]) : totalWidth;
    return `${p} L ${lastX} ${laneHeight} L ${firstX} ${laneHeight} Z`;
  });
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

  // Build smooth flowing curve from drift + surge values (same data as collapsed)
  const surgeData = timeline.surges.map((s) => ({
    chapterIndex: s.chapterIndex,
    scenePosition: s.scenePosition,
    peakIntensity: s.peakIntensity,
    duration: s.duration,
  }));
  const { paths: smoothPaths, segments: smoothSegments } = buildSmoothData(timeline.driftLine, surgeData, timeline.silenceBlocks, zoomLevel, totalWidth, EQ_DETAIL_HEIGHT);
  const smoothFilledPaths = buildSmoothFilledPaths(timeline.driftLine, surgeData, timeline.silenceBlocks, zoomLevel, totalWidth, EQ_DETAIL_HEIGHT);

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

      {/* Silence blocks — no overlay, just gap in the line */}

      {/* Filled areas — one per segment, gaps between */}
      {smoothFilledPaths.map((fp, i) => fp && (
        <path key={`fill-${i}`} d={fp} fill={color} opacity={0.1} />
      ))}

      {/* Smooth curves — one per segment, gaps between */}
      {smoothPaths.map((sp, i) => sp && (
        <path
          key={`line-${i}`}
          d={sp}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 4px ${color}44)` }}
        />
      ))}

      {/* Start/end dots for each segment */}
      {smoothSegments.map((seg, i) => {
        if (seg.length === 0) return null;
        const first = seg[0];
        const last = seg[seg.length - 1];
        return (
          <g key={`endpoints-${i}`}>
            <circle cx={first.x} cy={first.y} r={5} fill={color} stroke="#0a0a18" strokeWidth={2} />
            <circle cx={last.x} cy={last.y} r={5} fill={color} stroke="#0a0a18" strokeWidth={2} />
          </g>
        );
      })}

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
