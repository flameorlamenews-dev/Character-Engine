/** Width of a single chapter in pixels at zoom level 1 */
export const BASE_CHAPTER_WIDTH = 160;

/** Height of a single emotion lane in pixels */
export const LANE_HEIGHT = 72;

/** Max score value */
export const MAX_SCORE = 75;

export function chapterToX(chapterIndex: number, zoom: number): number {
  return chapterIndex * BASE_CHAPTER_WIDTH * zoom;
}

export function chapterMidX(chapterIndex: number, zoom: number): number {
  return chapterToX(chapterIndex, zoom) + (BASE_CHAPTER_WIDTH * zoom) / 2;
}

export function scoreToY(score: number, laneHeight: number = LANE_HEIGHT): number {
  const clamped = Math.max(0, Math.min(MAX_SCORE, score));
  const padding = 6;
  const usableHeight = laneHeight - padding * 2;
  return padding + usableHeight * (1 - clamped / MAX_SCORE);
}

export function getTimelineWidth(chapterCount: number, zoom: number): number {
  return chapterCount * BASE_CHAPTER_WIDTH * zoom;
}

export interface TimelinePoint {
  x: number;
  y: number;
  chapterIndex: number;
  isSurgePeak?: boolean;
  surgeId?: string;
}

/** A segment of points — one continuous section between gaps */
export type PointSegment = TimelinePoint[];

/**
 * Build points for an emotion across all chapters.
 * Returns SEGMENTS — each segment is a continuous run of points
 * separated by gaps where the character doesn't appear.
 */
export function buildContinuousSegments(
  driftLine: number[],
  surges: { chapterIndex: number; scenePosition: number; peakIntensity: number; duration: number; id: string }[],
  silenceBlocks: [number, number][],
  zoom: number,
  laneHeight: number = LANE_HEIGHT
): PointSegment[] {
  const chapterWidth = BASE_CHAPTER_WIDTH * zoom;

  const silentChapters = new Set<number>();
  for (const [start, end] of silenceBlocks) {
    for (let i = start; i <= end; i++) {
      silentChapters.add(i);
    }
  }

  const sortedSurges = [...surges].sort((a, b) => {
    if (a.chapterIndex !== b.chapterIndex) return a.chapterIndex - b.chapterIndex;
    return a.scenePosition - b.scenePosition;
  });

  const segments: PointSegment[] = [];
  let currentSegment: TimelinePoint[] = [];

  for (let ch = 0; ch < driftLine.length; ch++) {
    if (silentChapters.has(ch)) {
      // Gap — save current segment if it has points, start a new one
      if (currentSegment.length > 0) {
        segments.push(currentSegment);
        currentSegment = [];
      }
      continue;
    }

    const baseValue = driftLine[ch];
    const chapterStartX = chapterToX(ch, zoom);
    const chapterSurges = sortedSurges.filter((s) => s.chapterIndex === ch);

    if (chapterSurges.length === 0) {
      currentSegment.push({
        x: chapterStartX,
        y: scoreToY(baseValue, laneHeight),
        chapterIndex: ch,
      });
      currentSegment.push({
        x: chapterStartX + chapterWidth,
        y: scoreToY(baseValue, laneHeight),
        chapterIndex: ch,
      });
    } else {
      currentSegment.push({
        x: chapterStartX,
        y: scoreToY(baseValue, laneHeight),
        chapterIndex: ch,
      });

      for (const surge of chapterSurges) {
        const surgeX = chapterStartX + surge.scenePosition * chapterWidth;
        const riseStartX = surgeX - surge.duration * 0.3 * chapterWidth;
        const decayEndX = surgeX + surge.duration * 0.7 * chapterWidth;

        currentSegment.push({
          x: Math.max(chapterStartX, riseStartX),
          y: scoreToY(baseValue, laneHeight),
          chapterIndex: ch,
        });

        currentSegment.push({
          x: surgeX,
          y: scoreToY(surge.peakIntensity, laneHeight),
          chapterIndex: ch,
          isSurgePeak: true,
          surgeId: surge.id,
        });

        currentSegment.push({
          x: Math.min(chapterStartX + chapterWidth, decayEndX),
          y: scoreToY(baseValue, laneHeight),
          chapterIndex: ch,
        });
      }

      currentSegment.push({
        x: chapterStartX + chapterWidth,
        y: scoreToY(baseValue, laneHeight),
        chapterIndex: ch,
      });
    }
  }

  // Don't forget the last segment
  if (currentSegment.length > 0) {
    segments.push(currentSegment);
  }

  return segments;
}

/** Render segments as sharp SVG paths (one path per segment = gaps between) */
export function segmentsToSharpPaths(segments: PointSegment[]): string[] {
  return segments.map((points) => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x} ${points[i].y}`;
    }
    return d;
  });
}

/** Render segments as smooth SVG paths (one path per segment = gaps between) */
export function segmentsToSmoothPaths(segments: PointSegment[]): string[] {
  return segments.map((points) => {
    if (points.length === 0) return '';
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev.x + curr.x) / 2;
      d += ` C ${cpx} ${prev.y} ${cpx} ${curr.y} ${curr.x} ${curr.y}`;
    }
    return d;
  });
}

/** Render a segment as a filled area path */
export function segmentToFilledPath(points: TimelinePoint[], laneHeight: number, sharp: boolean): string {
  if (points.length < 2) return '';
  const linePath = sharp
    ? segmentsToSharpPaths([points])[0]
    : segmentsToSmoothPaths([points])[0];
  const last = points[points.length - 1];
  const first = points[0];
  return `${linePath} L ${last.x} ${laneHeight} L ${first.x} ${laneHeight} Z`;
}

/** Get all surge peak points from all segments */
export function getAllPeakPoints(segments: PointSegment[]): TimelinePoint[] {
  return segments.flatMap((seg) => seg.filter((p) => p.isSurgePeak));
}
