import { useSession } from '../../context/SessionContext';
import { EMOTION_LIST, EMOTION_LABELS, EMOTION_COLORS } from '../../theme/colors';
import { Fader } from './Fader';

interface ChannelRackProps {
  mutedTracks: Set<string>;
  soloTrack: string | null;
  onToggleMute: (emotion: string) => void;
  onToggleSolo: (emotion: string) => void;
}

export function ChannelRack({ mutedTracks, soloTrack, onToggleMute, onToggleSolo }: ChannelRackProps) {
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
        const timeline = character.emotionTimelines.find((t) => t.emotionType === emotion);
        const baseline = timeline?.driftLine[currentChapter] ?? timeline?.baseline ?? 0;
        const color = EMOTION_COLORS[emotion];
        const isMuted = mutedTracks.has(emotion);
        const isSolo = soloTrack === emotion;

        return (
          <div
            key={emotion}
            className={`flex items-center gap-2 px-3 py-2 border-b border-ce-border-subtle transition-opacity ${
              isMuted ? 'opacity-40' : ''
            }`}
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
              {baseline}
            </span>

            {/* Fader */}
            <Fader value={baseline} color={color} />

            {/* Mute/Solo */}
            <div className="flex flex-col gap-0.5">
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
          </div>
        );
      })}
    </div>
  );
}
