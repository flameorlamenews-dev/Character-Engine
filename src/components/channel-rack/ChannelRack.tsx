import { useSession } from '../../context/SessionContext';
import { EMOTION_LIST, EMOTION_LABELS, EMOTION_COLORS, EMOTION_COLORS_BRIGHT } from '../../theme/colors';
import type { EmotionType } from '../../theme/colors';
import { Fader } from './Fader';
import { VUMeter } from './VUMeter';
import { LANE_HEIGHT } from '../../utils/timeline-math';
import { EQ_DETAIL_HEIGHT } from '../timeline/EmotionEQDetail';

interface ChannelRackProps {
  mutedTracks: Set<string>;
  soloTrack: string | null;
  onToggleMute: (emotion: string) => void;
  onToggleSolo: (emotion: string) => void;
  playheadPosition: number;
  expandedTrack: string | null;
  onToggleExpand: (emotion: string | null) => void;
}

function getIntensityAtPosition(
  emotion: EmotionType,
  position: number,
  character: { emotionTimelines: { emotionType: string; baseline: number; driftLine: number[]; surges: { chapterIndex: number; scenePosition: number; peakIntensity: number; duration: number }[] }[] }
): number {
  const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
  if (!timeline) return 0;

  const chapterIndex = Math.floor(position);
  const scenePos = position - chapterIndex;
  const baseline = timeline.driftLine[chapterIndex] ?? timeline.baseline;

  let intensity = baseline;
  for (const surge of timeline.surges) {
    if (surge.chapterIndex !== chapterIndex) continue;
    const surgeStart = surge.scenePosition - surge.duration * 0.3;
    const surgeEnd = surge.scenePosition + surge.duration * 0.7;
    if (scenePos >= surgeStart && scenePos <= surgeEnd) {
      if (scenePos <= surge.scenePosition) {
        const t = (scenePos - surgeStart) / (surge.scenePosition - surgeStart);
        intensity = Math.max(intensity, baseline + (surge.peakIntensity - baseline) * t);
      } else {
        const t = (scenePos - surge.scenePosition) / (surgeEnd - surge.scenePosition);
        intensity = Math.max(intensity, surge.peakIntensity - (surge.peakIntensity - baseline) * t);
      }
    }
  }

  return Math.round(Math.max(0, Math.min(75, intensity)));
}

export function ChannelRack({ mutedTracks, soloTrack, onToggleMute, onToggleSolo, playheadPosition, expandedTrack, onToggleExpand }: ChannelRackProps) {
  const { session } = useSession();
  const { character, currentChapter } = session;

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
        const timeline = character?.emotionTimelines?.find((t) => t.emotionType === emotion);
        const baseline = timeline?.driftLine[currentChapter] ?? timeline?.baseline ?? 0;
        const color = EMOTION_COLORS[emotion];
        const brightColor = EMOTION_COLORS_BRIGHT[emotion];
        const isMuted = mutedTracks.has(emotion);
        const isSolo = soloTrack === emotion;
        const isExpanded = expandedTrack === emotion;
        const currentIntensity = character ? getIntensityAtPosition(emotion, playheadPosition, character as any) : 0;

        // When solo is active, hide non-solo tracks
        if (soloTrack && soloTrack !== emotion) return null;
        if (mutedTracks.has(emotion) && !soloTrack) {
          // Still show but dimmed
        }

        return (
          <div key={emotion}>
            {/* Track row — fixed height matching the timeline lane */}
            <div
              className={`flex items-center gap-2 px-3 border-b transition-all cursor-pointer ${
                isMuted && !isSolo ? 'opacity-40' : ''
              } ${isExpanded ? 'bg-ce-panel-alt border-b-0' : ''}`}
              style={{
                height: LANE_HEIGHT,
                borderBottomColor: isExpanded ? 'transparent' : '#3a3a5a',
              }}
              onClick={() => onToggleExpand(isExpanded ? null : emotion)}
            >
              {/* Color indicator */}
              <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: color }} />

              {/* Label */}
              <span className="text-xs text-ce-text flex-1 truncate">
                {EMOTION_LABELS[emotion]}
              </span>

              {/* Value readout */}
              <span className="font-mono-readout text-[11px] w-6 text-right" style={{ color }}>
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
                    isMuted ? 'bg-ce-mute text-white' : 'bg-ce-panel-alt text-ce-text-muted hover:text-ce-text border border-ce-border-subtle'
                  }`}
                >M</button>
                <button
                  onClick={() => onToggleSolo(emotion)}
                  className={`w-5 h-4 text-[9px] font-bold rounded-sm transition-colors ${
                    isSolo ? 'bg-ce-solo text-black' : 'bg-ce-panel-alt text-ce-text-muted hover:text-ce-text border border-ce-border-subtle'
                  }`}
                >S</button>
              </div>

              {/* Expand arrow */}
              <span className={`text-[9px] text-ce-text-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>

            {/* Expanded dropdown — VU Meter + Stats, height matches EQ_DETAIL_HEIGHT */}
            {isExpanded && (
              <div
                className="border-b flex"
                style={{
                  height: EQ_DETAIL_HEIGHT,
                  borderBottomColor: '#3a3a5a',
                  background: `linear-gradient(180deg, ${color}08 0%, #0a0a18 100%)`,
                }}
              >
                {/* VU Meter — large */}
                <div className="flex flex-col items-center justify-center px-4 border-r border-ce-border-subtle">
                  <VUMeter emotion={emotion} value={currentIntensity} peakHold={Math.max(currentIntensity, baseline)} />
                </div>

                {/* Stats panel */}
                <div className="flex-1 p-3 space-y-2 overflow-y-auto">
                  <div className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: brightColor }}>
                    {EMOTION_LABELS[emotion]} Detail
                  </div>

                  <div className="space-y-1.5">
                    {[
                      { label: 'Baseline', value: baseline, valueColor: color },
                      { label: 'Current', value: currentIntensity, valueColor: brightColor },
                      { label: 'Delta', value: currentIntensity - baseline, valueColor: currentIntensity > baseline ? '#dc3545' : currentIntensity < baseline ? '#2aad8e' : '#555568' },
                    ].map(({ label, value, valueColor }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">{label}</span>
                        <span className="font-mono-readout text-[11px] font-bold" style={{ color: valueColor }}>
                          {label === 'Delta' && value > 0 ? '+' : ''}{value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tier */}
                  <div className="flex items-center justify-between pt-1">
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

                  {/* Surge count */}
                  <div className="flex items-center justify-between pt-1 border-t border-ce-border-subtle">
                    <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Surges</span>
                    <span className="font-mono-readout text-[11px] text-ce-text-muted">
                      {timeline?.surges.length ?? 0}
                    </span>
                  </div>

                  {/* Active traits affecting this emotion */}
                  <div className="pt-2 border-t border-ce-border-subtle">
                    <span className="text-[9px] uppercase tracking-widest text-ce-text-muted block mb-1">
                      Trait Modifiers
                    </span>
                    <div className="text-[9px] text-ce-text-muted italic">
                      See EQ curve →
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
