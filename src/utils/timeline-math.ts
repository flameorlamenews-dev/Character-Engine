/** Width of a single chapter in pixels at zoom level 1 */
export const BASE_CHAPTER_WIDTH = 160;

/** Height of a single emotion lane in pixels */
export const LANE_HEIGHT = 72;

/** Max score value */
export const MAX_SCORE = 75;

/** Get the x position for a chapter index at a given zoom level */
export function chapterToX(chapterIndex: number, zoom: number): number {
  return chapterIndex * BASE_CHAPTER_WIDTH * zoom;
}

/** Get the x position for the midpoint of a chapter */
export function chapterMidX(chapterIndex: number, zoom: number): number {
  return chapterToX(chapterIndex, zoom) + (BASE_CHAPTER_WIDTH * zoom) / 2;
}

/** Convert a score (0-75) to a Y position within a lane (0 = top = max, laneHeight = bottom = 0) */
export function scoreToY(score: number, laneHeight: number = LANE_HEIGHT): number {
  const clamped = Math.max(0, Math.min(MAX_SCORE, score));
  const padding = 6;
  const usableHeight = laneHeight - padding * 2;
  return padding + usableHeight * (1 - clamped / MAX_SCORE);
}

/** Get total timeline width based on chapter count and zoom */
export function getTimelineWidth(chapterCount: number, zoom: number): number {
  return chapterCount * BASE_CHAPTER_WIDTH * zoom;
}

/**
 * Build a continuous line path for an emotion across all chapters.
 * Each chapter has a value from the driftLine. Surges create peaks within chapters.
 * Returns an array of {x, y} points that form one continuous waveform.
 */
export interface TimelinePoint {
  x: number;
  y: number;
  chapterIndex: number;
  isSurgePeak?: boolean;
  surgeId?: string;
}

export function buildContinuousLine(
  driftLine: number[],
  surges: { chapterIndex: number; scenePosition: number; peakIntensity: number; duration: number; id: string }[],
  silenceBlocks: [number, number][],
  zoom: number,
  laneHeight: number = LANE_HEIGHT
): TimelinePoint[] {
  const points: TimelinePoint[] = [];
  const chapterWidth = BASE_CHAPTER_WIDTH * zoom;

  // Create a set of silent chapters for quick lookup
  const silentChapters = new Set<number>();
  for (const [start, end] of silenceBlocks) {
    for (let i = start; i <= end; i++) {
      silentChapters.add(i);
    }
  }

  // Sort surges by position
  const sortedSurges = [...surges].sort((a, b) => {
    if (a.chapterIndex !== b.chapterIndex) return a.chapterIndex - b.chapterIndex;
    return a.scenePosition - b.scenePosition;
  });

  for (let ch = 0; ch < driftLine.length; ch++) {
    const baseValue = driftLine[ch];
    const chapterStartX = chapterToX(ch, zoom);

    if (silentChapters.has(ch)) {
      // Silent chapter — no points (gap in the line)
      continue;
    }

    // Get surges in this chapter
    const chapterSurges = sortedSurges.filter((s) => s.chapterIndex === ch);

    if (chapterSurges.length === 0) {
      // No surges — just the baseline drift value at chapter start and end
      points.push({
        x: chapterStartX,
        y: scoreToY(baseValue, laneHeight),
        chapterIndex: ch,
      });
      points.push({
        x: chapterStartX + chapterWidth,
        y: scoreToY(baseValue, laneHeight),
        chapterIndex: ch,
      });
    } else {
      // Has surges — create rise and fall points
      // Start of chapter at baseline
      points.push({
        x: chapterStartX,
        y: scoreToY(baseValue, laneHeight),
        chapterIndex: ch,
      });

      for (const surge of chapterSurges) {
        const surgeX = chapterStartX + surge.scenePosition * chapterWidth;
        const riseStartX = surgeX - surge.duration * 0.3 * chapterWidth;
        const decayEndX = surgeX + surge.duration * 0.7 * chapterWidth;

        // Point before the rise (at baseline)
        points.push({
          x: Math.max(chapterStartX, riseStartX),
          y: scoreToY(baseValue, laneHeight),
          chapterIndex: ch,
        });

        // Peak point
        points.push({
          x: surgeX,
          y: scoreToY(surge.peakIntensity, laneHeight),
          chapterIndex: ch,
          isSurgePeak: true,
          surgeId: surge.id,
        });

        // Return to baseline after decay
        points.push({
          x: Math.min(chapterStartX + chapterWidth, decayEndX),
          y: scoreToY(baseValue, laneHeight),
          chapterIndex: ch,
        });
      }

      // End of chapter at baseline
      points.push({
        x: chapterStartX + chapterWidth,
        y: scoreToY(baseValue, laneHeight),
        chapterIndex: ch,
      });
    }
  }

  return points;
}

/** Convert points to a smooth SVG path using bezier curves */
export function pointsToSmoothPath(points: TimelinePoint[]): string {
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
}

/** Convert points to a sharp/angular SVG path — straight lines, EKG/heartbeat style */
export function pointsToSharpPath(points: TimelinePoint[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x} ${points[i].y}`;
  }

  return d;
}

/** Convert points to a filled area path (closed, going down to lane bottom) */
export function pointsToFilledPath(points: TimelinePoint[], laneHeight: number = LANE_HEIGHT, sharp: boolean = false): string {
  if (points.length < 2) return '';

  const linePath = sharp ? pointsToSharpPath(points) : pointsToSmoothPath(points);
  const lastPoint = points[points.length - 1];
  const firstPoint = points[0];

  return `${linePath} L ${lastPoint.x} ${laneHeight} L ${firstPoint.x} ${laneHeight} Z`;
}
