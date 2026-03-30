/** Width of a single SCENE in pixels at zoom level 1 */
export const BASE_SCENE_WIDTH = 80;

/** Legacy: approximate chapter width (used as fallback) */
export const BASE_CHAPTER_WIDTH = 160;

/** Height of a single emotion lane in pixels */
export const LANE_HEIGHT = 72;

/** Max score value */
export const MAX_SCORE = 75;

/**
 * Scene-aware layout: calculates x positions based on scene counts per chapter.
 * Chapters with more scenes take up proportionally more space.
 */
export interface ChapterLayout {
  index: number;
  startX: number;
  width: number;
  sceneCount: number;
  sceneWidth: number;
}

export function buildChapterLayout(
  chapters: { index: number; sceneCount: number }[],
  zoom: number
): ChapterLayout[] {
  const layouts: ChapterLayout[] = [];
  let x = 0;

  for (const ch of chapters) {
    const scenes = Math.max(1, ch.sceneCount);
    const sceneWidth = BASE_SCENE_WIDTH * zoom;
    const width = scenes * sceneWidth;
    layouts.push({
      index: ch.index,
      startX: x,
      width,
      sceneCount: scenes,
      sceneWidth,
    });
    x += width;
  }

  return layouts;
}

/** Get the x position for a chapter using the layout */
export function chapterToX(chapterIndex: number, zoom: number, layout?: ChapterLayout[]): number {
  if (layout) {
    const ch = layout.find(l => l.index === chapterIndex);
    return ch ? ch.startX : 0;
  }
  // Fallback to uniform width
  return chapterIndex * BASE_CHAPTER_WIDTH * zoom;
}

/** Get the width of a specific chapter */
export function getChapterWidth(chapterIndex: number, zoom: number, layout?: ChapterLayout[]): number {
  if (layout) {
    const ch = layout.find(l => l.index === chapterIndex);
    return ch ? ch.width : BASE_CHAPTER_WIDTH * zoom;
  }
  return BASE_CHAPTER_WIDTH * zoom;
}

/** Get total timeline width from layout */
export function getTimelineWidth(chapterCount: number, zoom: number, layout?: ChapterLayout[]): number {
  if (layout && layout.length > 0) {
    const last = layout[layout.length - 1];
    return last.startX + last.width;
  }
  return chapterCount * BASE_CHAPTER_WIDTH * zoom;
}

/** Convert a score (0-75) to a Y position within a lane (0 = top = max, laneHeight = bottom = 0) */
export function scoreToY(score: number, laneHeight: number = LANE_HEIGHT): number {
  const clamped = Math.max(0, Math.min(MAX_SCORE, score));
  const padding = 6;
  const usableHeight = laneHeight - padding * 2;
  return padding + usableHeight * (1 - clamped / MAX_SCORE);
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
  laneHeight: number = LANE_HEIGHT,
  layout?: ChapterLayout[]
): TimelinePoint[] {
  const points: TimelinePoint[] = [];

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
    const chapterStartX = chapterToX(ch, zoom, layout);
    const chapterWidth = getChapterWidth(ch, zoom, layout);

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

/**
 * Split a flat array of TimelinePoints into segments wherever there's a
 * gap in chapter indices (i.e. silent chapters that were skipped).
 */
export function splitIntoSegments(
  points: TimelinePoint[],
  silenceBlocks: [number, number][]
): TimelinePoint[][] {
  if (points.length === 0) return [];

  const silentChapters = new Set<number>();
  for (const [start, end] of silenceBlocks) {
    for (let i = start; i <= end; i++) silentChapters.add(i);
  }

  const segments: TimelinePoint[][] = [];
  let current: TimelinePoint[] = [];

  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    // Check if there's a silent chapter between the previous point and this one
    if (current.length > 0) {
      const prevCh = current[current.length - 1].chapterIndex;
      const currCh = point.chapterIndex;
      // If we jumped over a silent chapter, start a new segment
      let gapFound = false;
      for (let ch = prevCh + 1; ch <= currCh; ch++) {
        if (silentChapters.has(ch)) { gapFound = true; break; }
      }
      if (gapFound && prevCh !== currCh) {
        segments.push(current);
        current = [];
      }
    }

    current.push(point);
  }

  if (current.length > 0) segments.push(current);
  return segments;
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

/**
 * Build a line from trait EQ boost/cut data — same shape as the EQ dropdown curve.
 * This maps the trait boost/cut values onto a vertical center line within the lane.
 * The center of the lane = zero boost/cut.
 * Positive boost = line goes up. Negative cut = line goes down.
 */
export function buildTraitEQLine(
  traitPoints: { chapterPosition: number; boostCut: number }[],
  totalWidth: number,
  zoom: number,
  laneHeight: number = LANE_HEIGHT
): TimelinePoint[] {
  const centerY = laneHeight / 2;
  const maxRange = (laneHeight / 2) - 6; // leave padding
  const maxBoost = 37; // max boost/cut value

  const sorted = [...traitPoints].sort((a, b) => a.chapterPosition - b.chapterPosition);

  const points: TimelinePoint[] = [];

  // Start at center (zero)
  points.push({ x: 0, y: centerY, chapterIndex: 0 });

  // Each trait point
  for (const point of sorted) {
    const x = chapterToX(Math.floor(point.chapterPosition), zoom)
      + (point.chapterPosition - Math.floor(point.chapterPosition)) * BASE_CHAPTER_WIDTH * zoom;
    const clamped = Math.max(-maxBoost, Math.min(maxBoost, point.boostCut));
    const y = centerY - (clamped / maxBoost) * maxRange;
    points.push({ x, y, chapterIndex: Math.floor(point.chapterPosition) });
  }

  // End at center (zero)
  points.push({ x: totalWidth, y: centerY, chapterIndex: 0 });

  return points;
}
