import { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { EMOTION_LIST, EMOTION_LABELS, EMOTION_COLORS, EMOTION_COLORS_BRIGHT } from '../../theme/colors';
import type { EmotionType } from '../../theme/colors';
import { Fader } from './Fader';
import { VUMeter } from './VUMeter';

interface ChannelRackProps {
  mutedTracks: Set<string>;
  soloTrack: string | null;
  onToggleMute: (emotion: string) => void;
  onToggleSolo: (emotion: string) => void;
  /** Current playhead position as a fractional chapter index (e.g., 2.5 = halfway through ch3) */
  playheadPosition: number;
}

/** Calculate the emotion intensity at a specific fractional chapter position */
function getIntensityAtPosition(
  emotion: EmotionType,
  position: number,
  character: { emotionTimelines: { emotionType: string; baseline: number; driftLine: number[]; surges: { chapterIndex: number; scenePosition: number; peakIntensity: number; duration: number }[] }[] }
): number {
  const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
  if (!timeline) return 0;

  const chapterIndex = Math.floor(position);
  const scenePos = position - chapterIndex;

  // Get baseline at this chapter
  const baseline = timeline.driftLine[chapterIndex] ?? timeline.baseline;

  // Check if we're in any surge
  let intensity = baseline;
  for (const surge of timeline.surges) {
    if (surge.chapterIndex !== chapterIndex) continue;

    const surgeStart = surge.scenePosition - surge.duration * 0.3;
    const surgeEnd = surge.scenePosition + surge.duration * 0.7;

    if (scenePos >= surgeStart && scenePos <= surgeEnd) {
      // We're in this surge — calculate intensity
      if (scenePos <= surge.scenePosition) {
        // Rising phase
        const t = (scenePos - surgeStart) / (surge.scenePosition - surgeStart);
        intensity = Math.max(intensity, baseline + (surge.peakIntensity - baseline) * t);
      } else {
        // Decay phase
        const t = (scenePos - surge.scenePosition) / (surgeEnd - surge.scenePosition);
        intensity = Math.max(intensity, surge.peakIntensity - (surge.peakIntensity - baseline) * t);
      }
    }
  }

  return Math.round(Math.max(0, Math.min(75, intensity)));
}

export function ChannelRack({ mutedTracks, soloTrack, onToggleMute, onToggleSolo, playheadPosition }: ChannelRackProps) {
  const { session } = useSession();
  const { character, currentChapter } = session;
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  return (
    <div className="flex flex-col bg-ce-panel w-[240px] shrink-0 border-r border-ce-border overflow-y-auto">
      {/* Header */}
      <div className="px-3 py-2 border-b border-ce-border">
        <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">
          Emotion Tracks
        </span>
      </div>

      {/* Tracks */}
      {EMOTION_LIST.map((emotion) => {
        const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
        const baseline = timeline?.driftLine[currentChapter] ?? timeline?.baseline ?? 0;
        const color = EMOTION_COLORS[emotion];
        const brightColor = EMOTION_COLORS_BRIGHT[emotion];
        const isMuted = mutedTracks.has(emotion);
        const isSolo = soloTrack === emotion;
        const isExpanded = expandedTrack === emotion;
        const currentIntensity = getIntensityAtPosition(emotion, playheadPosition, character);

        return (
          <div key={emotion}>
            {/* Track row */}
            <div
              className={`flex items-center gap-2 px-3 py-2 border-b transition-all cursor-pointer ${
                isMuted ? 'opacity-40' : ''
              } ${isExpanded ? 'border-b-0 bg-ce-panel-alt' : ''}`}
              style={{ borderBottomColor: isExpanded ? 'transparent' : '#3a3a5a' }}
              onClick={() => setExpandedTrack(isExpanded ? null : emotion)}
            >
              {/* Color indicator */}
              <div
                className="w-3 h-3 rounded-sm shrink-0"
                style={{ background: color }}
              />

              {/* Label */}
              <span className="text-xs text-ce-text flex-1 truncate">
                {EMOTION_LABELS[emotion]}
              </span>

              {/* Value readout */}
              <span
                className="font-mono-readout text-[11px] w-6 text-right"
                style={{ color }}
              >
                {currentIntensity}
              </span>

              {/* Fader */}
              <div onClick={(e) => e.stopPropagation()}>
                <Fader value={baseline} color={color} />
              </div>

              {/* Mute/Solo */}
              <div className="flex flex-col gap-0.5" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => onToggleMute(emotion)}
                  className={`w-5 h-4 text-[9px] font-bold rounded-sm transition-colors ${
                    isMuted
                      ? 'bg-ce-mute text-white'
                      : 'bg-ce-panel-alt text-ce-text-muted hover:text-ce-text border border-ce-border-subtle'
                  }`}
                >
                  M
                </button>
                <button
                  onClick={() => onToggleSolo(emotion)}
                  className={`w-5 h-4 text-[9px] font-bold rounded-sm transition-colors ${
                    isSolo
                      ? 'bg-ce-solo text-black'
                      : 'bg-ce-panel-alt text-ce-text-muted hover:text-ce-text border border-ce-border-subtle'
                  }`}
                >
                  S
                </button>
              </div>

              {/* Expand arrow */}
              <span className={`text-[9px] text-ce-text-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>

            {/* Expanded dropdown — VU Meter panel */}
            {isExpanded && (
              <div
                className="px-3 py-3 border-b"
                style={{
                  borderBottomColor: '#3a3a5a',
                  background: `linear-gradient(180deg, ${color}08 0%, #141428 100%)`,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* VU Meter */}
                  <VUMeter
                    emotion={emotion}
                    value={currentIntensity}
                    peakHold={Math.max(currentIntensity, baseline)}
                  />

                  {/* Stats */}
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Baseline</span>
                      <span className="font-mono-readout text-[11px]" style={{ color }}>{baseline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Current</span>
                      <span className="font-mono-readout text-[11px] font-bold" style={{ color: brightColor }}>
                        {currentIntensity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Delta</span>
                      <span
                        className="font-mono-readout text-[11px]"
                        style={{
                          color: currentIntensity > baseline ? '#dc3545'
                            : currentIntensity < baseline ? '#2aad8e'
                            : '#555568',
                        }}
                      >
                        {currentIntensity > baseline ? '+' : ''}{currentIntensity - baseline}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Tier</span>
                      <span
                        className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded"
                        style={{
                          color: currentIntensity > 50 ? '#dc3545' : currentIntensity > 25 ? '#e0a832' : '#2aad8e',
                          background: currentIntensity > 50 ? '#dc354520' : currentIntensity > 25 ? '#e0a83220' : '#2aad8e20',
                        }}
                      >
                        {currentIntensity > 50 ? 'High' : currentIntensity > 25 ? 'Moderate' : 'Low'}
                      </span>
                    </div>

                    {/* Mini surge count */}
                    <div className="flex items-center justify-between pt-1 border-t border-ce-border-subtle">
                      <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Surges</span>
                      <span className="font-mono-readout text-[11px] text-ce-text-muted">
                        {timeline?.surges.length ?? 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
