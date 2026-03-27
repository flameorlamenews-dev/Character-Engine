import { useState, useCallback } from 'react';
import { TopBar } from '../components/topbar/TopBar';
import { ChannelRack } from '../components/channel-rack/ChannelRack';
import { Timeline } from '../components/timeline/Timeline';
import { InspectorPanel } from '../components/inspector/InspectorPanel';
import { EffectsRack } from '../components/effects-rack/EffectsRack';

export function ProducerLayout() {
  const [mutedTracks, setMutedTracks] = useState<Set<string>>(new Set());
  const [soloTrack, setSoloTrack] = useState<string | null>(null);

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
      {/* Top Bar */}
      <TopBar />

      {/* Main content: Channel Rack + Timeline + Effects Rack */}
      <div className="flex flex-1 overflow-hidden">
        <ChannelRack
          mutedTracks={mutedTracks}
          soloTrack={soloTrack}
          onToggleMute={handleToggleMute}
          onToggleSolo={handleToggleSolo}
        />
        <Timeline mutedTracks={mutedTracks} soloTrack={soloTrack} />
        <EffectsRack />
      </div>

      {/* Bottom Inspector */}
      <InspectorPanel />
    </div>
  );
}
