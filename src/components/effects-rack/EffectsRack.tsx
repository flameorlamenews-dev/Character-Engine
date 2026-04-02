import { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { EMOTION_COLORS } from '../../theme/colors';
import type { InfluencePanelData } from '../../types/influence';

interface EffectsRackProps {
  influenceData: InfluencePanelData;
}

/** Mini slider bar for items inside dropdowns */
function ItemSlider({ value, max = 75, color = '#aa3bff' }: { value: number; max?: number; color?: string }) {
  const percent = (value / max) * 100;
  return (
    <div className="flex items-center gap-1.5 mt-1">
      <div className="flex-1 h-1.5 bg-ce-body rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm"
          style={{
            width: `${percent}%`,
            background: `linear-gradient(to right, ${color}88, ${color})`,
          }}
        />
      </div>
      <span className="font-mono-readout text-[9px] text-ce-text-muted w-5 text-right">{value}</span>
    </div>
  );
}

/** Global slider for the standalone bar variables */
function GlobalSlider({ label, value, max = 75 }: { label: string; value: number; max?: number }) {
  const percent = (value / max) * 100;
  const hue = 120 - (value / max) * 120;
  const barColor = `hsl(${hue}, 70%, 50%)`;

  return (
    <div className="px-3 py-2 border-b border-ce-border-subtle">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] text-ce-text-muted">{label}</span>
        <span className="font-mono-readout text-[10px] text-ce-text-muted">{value}</span>
      </div>
      <div className="h-2 bg-ce-body rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm transition-all"
          style={{
            width: `${percent}%`,
            background: `linear-gradient(to right, #2aad8e, ${barColor})`,
          }}
        />
      </div>
    </div>
  );
}

type DropdownSection = 'traits' | 'lingering' | 'desires' | 'habits' | null;

export function EffectsRack({ influenceData }: EffectsRackProps) {
  const { session } = useSession();
  const { character, currentChapter } = session;
  const [collapsed, setCollapsed] = useState(false);
  const [openSection, setOpenSection] = useState<DropdownSection>(null);

  const toggleSection = (section: DropdownSection) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Filter lingering emotions active at current chapter (intensity > 0)
  const visibleLingeringEmotions = influenceData.lingeringEmotions.filter(
    (le) => (le.intensityByChapter[currentChapter] ?? 0) > 0
  );

  // Filter desires revealed by current chapter
  const visibleDesires = influenceData.desirePressure.filter(
    (d) => d.revealedAtChapter <= currentChapter
  );

  if (collapsed) {
    return (
      <div className="relative shrink-0">
        <button
          onClick={() => setCollapsed(false)}
          className="absolute top-2 -left-6 w-6 h-16 bg-ce-panel border border-ce-border rounded-l flex items-center justify-center text-ce-text-muted hover:text-ce-text text-xs"
        >
          ◀
        </button>
      </div>
    );
  }

  return (
    <div className="w-[240px] shrink-0 bg-ce-panel border-l border-ce-border flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-ce-border">
        <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">
          Influence Variables
        </span>
        <button
          onClick={() => setCollapsed(true)}
          className="text-ce-text-muted hover:text-ce-text text-xs"
        >
          ▶
        </button>
      </div>

      {/* === DROPDOWN SECTIONS === */}

      {/* 1. Traits */}
      <div className="border-b border-ce-border-subtle">
        <button
          onClick={() => toggleSection('traits')}
          className="w-full flex items-center justify-between px-3 py-2 hover:bg-ce-panel-alt transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-ce-accent" />
            <span className="text-[10px] uppercase tracking-widest text-ce-text font-semibold">Traits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono-readout text-[9px] text-ce-text-muted">{influenceData.traits.length}</span>
            <span className={`text-[8px] text-ce-text-muted transition-transform ${openSection === 'traits' ? 'rotate-180' : ''}`}>▼</span>
          </div>
        </button>
        {openSection === 'traits' && (
          <div className="px-3 pb-2 space-y-2">
            {influenceData.traits.map((trait) => (
              <div key={trait.name} className="bg-ce-body/50 rounded px-2 py-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-ce-text-bright font-semibold">{trait.name}</span>
                </div>
                <p className="text-[9px] text-ce-text-muted mt-0.5 leading-tight">{trait.effect}</p>
                <ItemSlider value={trait.impact} color="#aa3bff" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. Lingering Emotions */}
      <div className="border-b border-ce-border-subtle">
        <button
          onClick={() => toggleSection('lingering')}
          className="w-full flex items-center justify-between px-3 py-2 hover:bg-ce-panel-alt transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emotion-anger" />
            <span className="text-[10px] uppercase tracking-widest text-ce-text font-semibold">Lingering Emotions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono-readout text-[9px] text-ce-text-muted">{visibleLingeringEmotions.length}</span>
            <span className={`text-[8px] text-ce-text-muted transition-transform ${openSection === 'lingering' ? 'rotate-180' : ''}`}>▼</span>
          </div>
        </button>
        {openSection === 'lingering' && (
          <div className="px-3 pb-2 space-y-2">
            {visibleLingeringEmotions.length === 0 ? (
              <p className="text-[9px] text-ce-text-muted italic py-1">No lingering emotions at this chapter</p>
            ) : (
              visibleLingeringEmotions.map((le) => {
                const emotionColor = EMOTION_COLORS[le.emotionType];
                const currentIntensity = le.intensityByChapter[currentChapter] ?? 0;
                const growthEventsToNow = le.growthEvents.filter((ge) => ge.chapter <= currentChapter);
                const typeIcons: Record<string, string> = {
                  memory: '💭',
                  refelt: '🔁',
                  behavior_change: '⚡',
                };
                const typeLabels: Record<string, string> = {
                  memory: 'Memory',
                  refelt: 'Re-felt',
                  behavior_change: 'Behavior',
                };
                return (
                  <div key={le.id} className="bg-ce-body/50 rounded px-2 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: emotionColor }} />
                      <span className="text-[10px] text-ce-text-bright font-semibold leading-tight">{le.label}</span>
                    </div>
                    <p className="text-[9px] text-ce-text-muted mt-0.5 leading-tight">{le.event}</p>
                    <ItemSlider value={currentIntensity} color={emotionColor} />

                    {/* Growth event log */}
                    {growthEventsToNow.length > 0 && (
                      <div className="mt-1.5 space-y-1 border-t border-ce-border-subtle pt-1.5">
                        <span className="text-[8px] uppercase tracking-widest text-ce-text-muted">Accumulation</span>
                        {growthEventsToNow.map((ge, gi) => (
                          <div key={gi} className="flex items-start gap-1">
                            <span className="text-[9px] shrink-0">{typeIcons[ge.type]}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1">
                                <span className="text-[8px] text-ce-text-muted">Ch.{ge.chapter + 1}</span>
                                <span className="text-[8px] px-1 rounded"
                                  style={{
                                    color: emotionColor,
                                    background: emotionColor + '15',
                                  }}
                                >{typeLabels[ge.type]}</span>
                                <span className="text-[8px] font-mono-readout" style={{ color: '#dc3545' }}>
                                  +{ge.intensityDelta}
                                </span>
                              </div>
                              <p className="text-[8px] text-ce-text-muted leading-tight truncate">{ge.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      {/* 3. Desire Pressure */}
      <div className="border-b border-ce-border-subtle">
        <button
          onClick={() => toggleSection('desires')}
          className="w-full flex items-center justify-between px-3 py-2 hover:bg-ce-panel-alt transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emotion-anticipation" />
            <span className="text-[10px] uppercase tracking-widest text-ce-text font-semibold">Desire Pressure</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono-readout text-[9px] text-ce-text-muted">{visibleDesires.length}</span>
            <span className={`text-[8px] text-ce-text-muted transition-transform ${openSection === 'desires' ? 'rotate-180' : ''}`}>▼</span>
          </div>
        </button>
        {openSection === 'desires' && (
          <div className="px-3 pb-2 space-y-2">
            {visibleDesires.length === 0 ? (
              <p className="text-[9px] text-ce-text-muted italic py-1">No desires revealed yet</p>
            ) : (
              visibleDesires.map((desire) => (
                <div key={desire.name} className="bg-ce-body/50 rounded px-2 py-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-ce-text-bright font-semibold">{desire.name}</span>
                  </div>
                  <p className="text-[9px] text-ce-text-muted mt-0.5 leading-tight">{desire.effect}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[8px] text-ce-text-muted">Revealed Ch.{desire.revealedAtChapter + 1}</span>
                  </div>
                  <ItemSlider value={desire.pressure} color="#e08a2e" />
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* 4. Habit Formation */}
      <div className="border-b border-ce-border-subtle">
        <button
          onClick={() => toggleSection('habits')}
          className="w-full flex items-center justify-between px-3 py-2 hover:bg-ce-panel-alt transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emotion-trust" />
            <span className="text-[10px] uppercase tracking-widest text-ce-text font-semibold">Habit Formation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono-readout text-[9px] text-ce-text-muted">{influenceData.habitFormation.length}</span>
            <span className={`text-[8px] text-ce-text-muted transition-transform ${openSection === 'habits' ? 'rotate-180' : ''}`}>▼</span>
          </div>
        </button>
        {openSection === 'habits' && (
          <div className="px-3 pb-2 space-y-2">
            {influenceData.habitFormation.map((habit) => (
              <div key={habit.name} className="bg-ce-body/50 rounded px-2 py-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-ce-text-bright font-semibold">{habit.name}</span>
                </div>
                <p className="text-[9px] text-ce-text-muted mt-0.5 leading-tight">{habit.indicates}</p>
                <ItemSlider value={habit.frequency} color="#2aad8e" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* === SLIDER SECTIONS === */}

      <GlobalSlider label="Moral Override" value={influenceData.moralOverride} />
      <GlobalSlider label="Impression Susceptibility" value={influenceData.impressionSusceptibility} />
      <GlobalSlider label="Mask Strength" value={influenceData.maskStrength} />
      <GlobalSlider label="Personality Drift" value={influenceData.personalityDrift} />

      {/* Perception Engine Preview */}
      <div className="mt-auto border-t border-ce-border">
        <div className="px-3 py-2">
          <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">
            Relationships
          </span>
        </div>
        <div className="flex flex-col gap-1 px-3 pb-3">
          {(character?.relationships || []).map((rel) => (
            <div key={rel.targetName} className="flex items-center gap-2 text-[10px]">
              <span className="text-ce-text w-14 truncate">{rel.targetName}</span>
              <div className="flex-1 flex gap-1">
                <div
                  className="h-1.5 rounded-sm"
                  style={{
                    width: `${(rel.trust / 75) * 100}%`,
                    background: '#2aad8e',
                    minWidth: rel.trust > 0 ? 2 : 0,
                  }}
                  title={`Trust: ${rel.trust}`}
                />
                <div
                  className="h-1.5 rounded-sm"
                  style={{
                    width: `${(rel.threat / 75) * 100}%`,
                    background: '#dc3545',
                    minWidth: rel.threat > 0 ? 2 : 0,
                  }}
                  title={`Threat: ${rel.threat}`}
                />
              </div>
              <span className="font-mono-readout text-ce-text-muted w-4 text-right">
                {rel.trust}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
