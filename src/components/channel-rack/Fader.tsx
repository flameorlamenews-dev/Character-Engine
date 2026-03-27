import { useRef, useCallback } from 'react';
import { useSession } from '../../context/SessionContext';

interface FaderProps {
  value: number;
  max?: number;
  color: string;
  onChange?: (value: number) => void;
}

export function Fader({ value, max = 75, color, onChange }: FaderProps) {
  const { session } = useSession();
  const trackRef = useRef<HTMLDivElement>(null);

  const fillPercent = (value / max) * 100;

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!session.editMode || !onChange || !trackRef.current) return;

      const track = trackRef.current;
      const rect = track.getBoundingClientRect();
      const el = e.currentTarget as HTMLElement;
      el.setPointerCapture(e.pointerId);

      const update = (clientY: number) => {
        const percent = 1 - (clientY - rect.top) / rect.height;
        const clamped = Math.max(0, Math.min(1, percent));
        onChange(Math.round(clamped * max));
      };

      update(e.clientY);

      const onMove = (ev: PointerEvent) => update(ev.clientY);
      const onUp = () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerup', onUp);
      };

      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerup', onUp);
    },
    [session.editMode, onChange, max]
  );

  return (
    <div
      ref={trackRef}
      className={`relative w-3 h-12 rounded-sm ${session.editMode ? 'cursor-ns-resize' : 'cursor-default'}`}
      style={{ background: '#0d0d1a' }}
      onPointerDown={handlePointerDown}
    >
      {/* Fill */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-sm transition-all duration-150"
        style={{
          height: `${fillPercent}%`,
          background: `linear-gradient(to top, ${color}88, ${color})`,
        }}
      />
      {/* Knob */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-4 h-2 rounded-sm border border-white/20"
        style={{
          bottom: `calc(${fillPercent}% - 4px)`,
          background: color,
          boxShadow: session.editMode ? `0 0 6px ${color}88` : 'none',
        }}
      />
    </div>
  );
}
