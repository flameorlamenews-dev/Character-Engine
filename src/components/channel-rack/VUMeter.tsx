import type { EmotionType } from '../../theme/colors';

interface VUMeterProps {
  emotion: EmotionType;
  /** Current intensity value at the playhead position (0-75) */
  value: number;
  /** Peak hold value — highest recent value (0-75) */
  peakHold?: number;
}

const SEGMENTS = 30;
const MAX_SCORE = 75;

/** Get the color for a segment based on its position */
function getSegmentColor(index: number, total: number): string {
  const ratio = index / total;
  if (ratio < 0.6) return '#2aad8e'; // Green zone
  if (ratio < 0.8) return '#e0a832'; // Yellow zone
  return '#dc3545';                   // Red zone
}

export function VUMeter({ value, peakHold }: VUMeterProps) {
  const filledSegments = Math.round((value / MAX_SCORE) * SEGMENTS);
  const peakSegment = peakHold != null ? Math.round((peakHold / MAX_SCORE) * SEGMENTS) : null;

  return (
    <div className="flex flex-col items-center gap-1.5 py-2">
      {/* Value readout */}
      <span className="font-mono-readout text-[11px] text-ce-text-bright">{value}</span>

      {/* Meter bar — vertical, bottom-up */}
      <div className="flex flex-col-reverse gap-[1px] w-6">
        {Array.from({ length: SEGMENTS }, (_, i) => {
          const isActive = i < filledSegments;
          const isPeak = peakSegment != null && i === peakSegment - 1;
          const segColor = getSegmentColor(i, SEGMENTS);

          return (
            <div
              key={i}
              className="h-[3px] w-full rounded-[1px] transition-opacity duration-75"
              style={{
                background: isActive ? segColor : isPeak ? segColor : '#1a1a2e',
                opacity: isActive ? 1 : isPeak ? 0.9 : 0.3,
                boxShadow: isActive && i >= SEGMENTS * 0.8 ? `0 0 4px ${segColor}66` : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Tier label */}
      <span
        className="text-[8px] uppercase tracking-wider font-semibold"
        style={{ color: value > 50 ? '#dc3545' : value > 25 ? '#e0a832' : '#2aad8e' }}
      >
        {value > 50 ? 'HIGH' : value > 25 ? 'MOD' : 'LOW'}
      </span>
    </div>
  );
}

