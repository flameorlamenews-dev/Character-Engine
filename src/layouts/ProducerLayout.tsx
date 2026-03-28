import { useState, useCallback, useEffect, useRef } from 'react';
import { TopBar } from '../components/topbar/TopBar';
import { ChannelRack } from '../components/channel-rack/ChannelRack';
import { Timeline } from '../components/timeline/Timeline';
import { InspectorPanel } from '../components/inspector/InspectorPanel';
import { EffectsRack } from '../components/effects-rack/EffectsRack';
import { useSession } from '../context/SessionContext';

/** Playback speed: how many chapter-units per second */
const PLAYBACK_SPEED = 0.15;

export function ProducerLayout() {
  const { session } = useSession();
  const [mutedTracks, setMutedTracks] = useState<Set<string>>(new Set());
  const [soloTrack, setSoloTrack] = useState<string | null>(null);
  const [playheadPosition, setPlayheadPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const totalChapters = session.book.chapters.length;

  // Animation loop for playhead movement
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

      const delta = (timestamp - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = timestamp;

      setPlayheadPosition((prev) => {
        const next = prev + delta * PLAYBACK_SPEED;
        if (next >= totalChapters - 0.01) {
          setIsPlaying(false);
          return totalChapters - 0.01;
        }
        return next;
      });

      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, totalChapters]);

  const handlePlay = useCallback(() => setIsPlaying(true), []);
  const handlePause = useCallback(() => setIsPlaying(false), []);
  const handleStop = useCallback(() => {
    setIsPlaying(false);
    setPlayheadPosition(0);
  }, []);

  const handleSeek = useCallback((position: number) => {
    setPlayheadPosition(position);
  }, []);

  const handleToggleMute = useCallback((emotion: string) => {
    setMutedTracks((prev) => {
      const next = new Set(prev);
      if (next.has(emotion)) {
        next.delete(emotion);
      } else {
        next.add(emotion);
      }
      return next;
    });
  }, []);

  const handleToggleSolo = useCallback((emotion: string) => {
    setSoloTrack((prev) => (prev === emotion ? null : emotion));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar with transport controls */}
      <TopBar
        isPlaying={isPlaying}
        playheadPosition={playheadPosition}
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
      />

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        <ChannelRack
          mutedTracks={mutedTracks}
          soloTrack={soloTrack}
          onToggleMute={handleToggleMute}
          onToggleSolo={handleToggleSolo}
          playheadPosition={playheadPosition}
        />
        <Timeline
          mutedTracks={mutedTracks}
          soloTrack={soloTrack}
          playheadPosition={playheadPosition}
          onSeek={handleSeek}
        />
        <EffectsRack />
      </div>

      {/* Bottom Inspector */}
      <InspectorPanel />
    </div>
  );
}
