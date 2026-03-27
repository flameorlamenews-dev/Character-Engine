/** Width of a single chapter in pixels at zoom level 1 */
export const BASE_CHAPTER_WIDTH = 160;

/** Height of a single emotion lane in pixels */
export const LANE_HEIGHT = 64;

/** Max score value */
export const MAX_SCORE = 75;

/** Get the x position for a chapter index at a given zoom level */
export function chapterToX(chapterIndex: number, zoom: number): number {
  return chapterIndex * BASE_CHAPTER_WIDTH * zoom;
}

/** Get the x position for a specific point within a chapter */
export function sceneToX(chapterIndex: number, scenePosition: number, zoom: number): number {
  const chapterStart = chapterToX(chapterIndex, zoom);
  return chapterStart + scenePosition * BASE_CHAPTER_WIDTH * zoom;
}

/** Convert a score (0-75) to a Y position within a lane (0 = top = max, laneHeight = bottom = 0) */
export function scoreToY(score: number, laneHeight: number = LANE_HEIGHT): number {
  const clamped = Math.max(0, Math.min(MAX_SCORE, score));
  // Invert: higher scores are higher on screen (lower Y)
  // Leave 4px padding top and bottom
  const padding = 4;
  const usableHeight = laneHeight - padding * 2;
  return padding + usableHeight * (1 - clamped / MAX_SCORE);
}

/** Get total timeline width based on chapter count and zoom */
export function getTimelineWidth(chapterCount: number, zoom: number): number {
  return chapterCount * BASE_CHAPTER_WIDTH * zoom;
}

/** Generate SVG path data for a surge peak with decay */
export function surgePath(
  chapterIndex: number,
  scenePosition: number,
  baselineScore: number,
  peakIntensity: number,
  decayRate: number,
  duration: number,
  zoom: number,
  laneHeight: number = LANE_HEIGHT
): string {
  const chapterWidth = BASE_CHAPTER_WIDTH * zoom;
  const xStart = sceneToX(chapterIndex, Math.max(0, scenePosition - duration * 0.2), zoom);
  const xPeak = sceneToX(chapterIndex, scenePosition, zoom);
  const xEnd = sceneToX(chapterIndex, Math.min(1, scenePosition + duration), zoom);

  const yBase = scoreToY(baselineScore, laneHeight);
  const yPeak = scoreToY(peakIntensity, laneHeight);

  // Rise
  const cp1x = xStart + (xPeak - xStart) * 0.3;
  const cp2x = xStart + (xPeak - xStart) * 0.7;
  // Decay
  const cp3x = xPeak + (xEnd - xPeak) * 0.2;
  const cp4x = xPeak + (xEnd - xPeak) * 0.6;

  return [
    `M ${xStart} ${yBase}`,
    `C ${cp1x} ${yBase} ${cp2x} ${yPeak} ${xPeak} ${yPeak}`,
    `C ${cp3x} ${yPeak} ${cp4x} ${yBase} ${xEnd} ${yBase}`,
  ].join(' ');
}

/** Generate SVG path for a filled area under the surge */
export function surgeAreaPath(
  chapterIndex: number,
  scenePosition: number,
  baselineScore: number,
  peakIntensity: number,
  decayRate: number,
  duration: number,
  zoom: number,
  laneHeight: number = LANE_HEIGHT
): string {
  const xStart = sceneToX(chapterIndex, Math.max(0, scenePosition - duration * 0.2), zoom);
  const xEnd = sceneToX(chapterIndex, Math.min(1, scenePosition + duration), zoom);
  const yBase = scoreToY(baselineScore, laneHeight);

  const line = surgePath(chapterIndex, scenePosition, baselineScore, peakIntensity, decayRate, duration, zoom, laneHeight);

  return `${line} L ${xEnd} ${yBase} L ${xStart} ${yBase} Z`;
}
