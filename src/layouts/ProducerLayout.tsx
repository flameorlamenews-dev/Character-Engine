import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { TopBar } from '../components/topbar/TopBar';
import { ChannelRack } from '../components/channel-rack/ChannelRack';
import { Timeline } from '../components/timeline/Timeline';
import { InspectorPanel } from '../components/inspector/InspectorPanel';
import { EffectsRack } from '../components/effects-rack/EffectsRack';
import { useSession } from '../context/SessionContext';
import { buildChapterLayout } from '../utils/timeline-math';

const PLAYBACK_SPEED = 0.15;

export function ProducerLayout() {
  const { session } = useSession();
  const { character, book } = session;

  // Build scene-aware layout from chapter data
  const chapterLayout = useMemo(() =>
    buildChapterLayout(
      book.chapters.map(ch => ({ index: ch.index, sceneCount: ch.sceneCount })),
      session.zoomLevel
    ),
    [book.chapters, session.zoomLevel]
  );
  const [mutedTracks, setMutedTracks] = useState<Set<string>>(new Set());
  const [soloTrack, setSoloTrack] = useState<string | null>(null);
  const [playheadPosition, setPlayheadPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const totalChapters = book.chapters.length;

  useEffect(() => {
    if (!isPlaying) {
      lastTimeRef.current = null;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const tick = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setPlayheadPosition((prev) => {
        // A 0-chapter book would make totalChapters - 0.01 = -0.01, which
        // would make the playhead jump to a negative position and trigger
        // a seek error. Clamp the end position to a non-negative value.
        const endPos = Math.max(0, totalChapters - 0.01);
        const next = prev + delta * PLAYBACK_SPEED;
        if (next >= endPos) {
          setIsPlaying(false);
          return endPos;
        }
        return next;
      });

      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, totalChapters]);

  const handlePlay = useCallback(() => setIsPlaying(true), []);
  const handlePause = useCallback(() => setIsPlaying(false), []);
  const handleStop = useCallback(() => { setIsPlaying(false); setPlayheadPosition(0); }, []);
  const handleSeek = useCallback((position: number) => setPlayheadPosition(position), []);

  const handleToggleMute = useCallback((emotion: string) => {
    setMutedTracks((prev) => {
      const next = new Set(prev);
      if (next.has(emotion)) next.delete(emotion); else next.add(emotion);
      return next;
    });
  }, []);

  const handleToggleSolo = useCallback((emotion: string) => {
    setSoloTrack((prev) => (prev === emotion ? null : emotion));
  }, []);

  const handleToggleExpand = useCallback((emotion: string | null) => {
    setExpandedTrack(emotion);
  }, []);

  // No character selected — show empty engine state
  if (!character) {
    return (
      <div className="flex flex-col h-screen">
        <TopBar
          isPlaying={false}
          playheadPosition={0}
        />
        <div className="flex-1 flex items-center justify-center bg-ce-body">
          <div className="text-center space-y-3">
            <div className="text-ce-text-muted text-lg font-semibold">No Character Loaded</div>
            <div className="text-ce-text-muted text-sm max-w-md">
              Select a character from the dropdown above to load their emotional profile into the engine.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar
        isPlaying={isPlaying}
        playheadPosition={playheadPosition}
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
      />

      <div className="flex flex-1 overflow-hidden">
        <ChannelRack
          mutedTracks={mutedTracks}
          soloTrack={soloTrack}
          onToggleMute={handleToggleMute}
          onToggleSolo={handleToggleSolo}
          playheadPosition={playheadPosition}
          expandedTrack={expandedTrack}
          onToggleExpand={handleToggleExpand}
        />
        <Timeline
          mutedTracks={mutedTracks}
          soloTrack={soloTrack}
          playheadPosition={playheadPosition}
          onSeek={handleSeek}
          expandedTrack={expandedTrack}
          traitEQData={{}}
          chapterLayout={chapterLayout}
        />
        <EffectsRack influenceData={{ traits: [], lingeringEmotions: [], desirePressure: [], habitFormation: [], moralOverride: 0 as any, impressionSusceptibility: 37 as any, maskStrength: 0 as any, personalityDrift: 0 as any }} />
      </div>

      <InspectorPanel />
    </div>
  );
}
