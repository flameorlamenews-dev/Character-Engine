import { useState } from 'react';
import { EVENT_EMOTION_MAP, SUBJECT_MULTIPLIER, SOURCE_MULTIPLIER } from '../../engine/event-emotion-map';
import { TRAIT_MODIFIER_TABLE } from '../../engine/trait-modifiers';
import { SUPPRESSION_RULES } from '../../engine/suppression';

export function AlgorithmInfo({ onClose }: { onClose: () => void }) {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'trigger', label: 'Trigger Levels' },
    { id: 'events', label: 'Event → Emotion Map' },
    { id: 'traits', label: 'Trait Modifiers' },
    { id: 'multipliers', label: 'Subject/Source/Domain' },
    { id: 'suppression', label: 'Suppression Rules' },
    { id: 'carry', label: 'Carry-Over & Decay' },
    { id: 'formula', label: 'Full Formula' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-ce-panel border border-ce-border rounded-lg w-[900px] max-h-[85vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-ce-border">
          <h2 className="text-sm font-semibold text-ce-text-bright">Character Engine — Algorithm Reference</h2>
          <button onClick={onClose} className="text-ce-text-muted hover:text-ce-text-bright text-lg">✕</button>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 px-4 py-2 border-b border-ce-border overflow-x-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`px-3 py-1 text-[10px] font-semibold rounded whitespace-nowrap transition-colors ${
                activeSection === s.id
                  ? 'bg-ce-accent text-white'
                  : 'text-ce-text-muted hover:text-ce-text bg-ce-panel-alt'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 text-xs text-ce-text font-mono-readout leading-relaxed">
          {activeSection === 'overview' && <OverviewSection />}
          {activeSection === 'trigger' && <TriggerSection />}
          {activeSection === 'events' && <EventMapSection />}
          {activeSection === 'traits' && <TraitModSection />}
          {activeSection === 'multipliers' && <MultiplierSection />}
          {activeSection === 'suppression' && <SuppressionSection />}
          {activeSection === 'carry' && <CarrySection />}
          {activeSection === 'formula' && <FormulaSection />}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <h3 className="text-sm font-semibold text-ce-text-bright mb-3">{children}</h3>;
}

function Code({ children }: { children: string }) {
  return <pre className="bg-ce-body rounded p-3 text-[10px] text-ce-text overflow-x-auto whitespace-pre mb-3">{children}</pre>;
}

function OverviewSection() {
  return (
    <div>
      <SectionTitle>Algorithm Overview</SectionTitle>
      <p className="mb-3 text-ce-text-muted">The Character Engine computes emotional states per chapter using a deterministic pipeline. Only event extraction requires AI — all scoring is pure math.</p>
      <Code>{`Chapter Text
  → AI extracts stimulants (structured JSON)
  → Each stimulant scored for trigger level
  → Event type maps to emotion(s) with weights
  → Character's emotional baseline = base impact
  → Trait modifiers amplify/dampen
  → Subject & source multipliers applied
  → Domain amplifiers at High+ triggers
  → Per-stimulant cap at 50
  → Chapter tone adjustment (positive/negative balance)
  → Ambient emotion inference
  → Compression (diminishing returns)
  → Emotion suppression (opposing emotions)
  → Carry-over from previous chapter + decay
  → Output: 8 emotion values (0-75 track, 0-100 VU)`}</Code>
      <p className="text-ce-text-muted">All emotions start at 0. Core personality defines sensitivity (HOW they respond), not starting state (WHERE they begin).</p>
    </div>
  );
}

function TriggerSection() {
  const levels = [
    { range: '0-2', level: 'Low', mult: 0.15, desc: 'Trivial — barely registers' },
    { range: '3-5', level: 'Medium', mult: 0.40, desc: 'Moderate — noticeable impact' },
    { range: '6-7', level: 'High', mult: 0.75, desc: 'Significant — strong emotional response' },
    { range: '8-9', level: 'Extreme', mult: 1.20, desc: 'Life-altering — maximum impact + 20% amplification' },
  ];
  return (
    <div>
      <SectionTitle>Trigger Level Calculation</SectionTitle>
      <Code>{`trigger_total = stakes(0-3) + immediacy(0-3) + certainty(0-3)
Range: 0-9`}</Code>
      <table className="w-full text-[10px] mb-3">
        <thead><tr className="text-ce-text-muted border-b border-ce-border-subtle">
          <th className="text-left py-1">Total</th><th className="text-left">Level</th><th className="text-left">Multiplier</th><th className="text-left">Description</th>
        </tr></thead>
        <tbody>
          {levels.map((l) => (
            <tr key={l.range} className="border-b border-ce-border-subtle">
              <td className="py-1 text-ce-text-bright">{l.range}</td>
              <td>{l.level}</td>
              <td className="font-bold" style={{ color: l.mult >= 1 ? '#dc3545' : l.mult >= 0.7 ? '#e0a832' : '#2aad8e' }}>×{l.mult}</td>
              <td className="text-ce-text-muted">{l.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Code>{`Stakes:     0=trivial, 1=inconvenience, 2=meaningful loss, 3=severe/life-altering
Immediacy:  0=distant, 1=later, 2=soon, 3=now
Certainty:  0=unlikely, 1=possible, 2=likely, 3=confirmed`}</Code>
    </div>
  );
}

function EventMapSection() {
  const events = Object.entries(EVENT_EMOTION_MAP);
  return (
    <div>
      <SectionTitle>Event Type → Emotion Mapping</SectionTitle>
      <p className="text-ce-text-muted mb-3">Each event type distributes impact across multiple emotions. Weights sum to ~1.0. "trust_collapse" subtracts from trust.</p>
      <div className="space-y-1">
        {events.map(([event, weights]) => (
          <div key={event} className="flex items-start gap-2 py-1 border-b border-ce-border-subtle">
            <span className="text-ce-text-bright w-28 shrink-0">{event}</span>
            <div className="flex flex-wrap gap-2">
              {weights.map((w, i) => (
                <span key={i} className="px-1.5 py-0.5 rounded text-[9px]" style={{
                  background: w.emotion === 'trust_collapse' ? '#dc354520' : '#2a2a4a',
                  color: w.emotion === 'trust_collapse' ? '#dc3545' : '#c8c8d4',
                }}>
                  {w.emotion}({w.weight})
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TraitModSection() {
  return (
    <div>
      <SectionTitle>Trait → Emotion Modifiers</SectionTitle>
      <Code>{`modifier = (trait_score / 75) × modifier_strength
modified_delta = raw_delta × (1 + sum_of_modifiers)`}</Code>
      <table className="w-full text-[10px]">
        <thead><tr className="text-ce-text-muted border-b border-ce-border-subtle">
          <th className="text-left py-1">Trait</th><th className="text-left">Emotion</th><th className="text-left">Strength</th><th className="text-left">Effect</th>
        </tr></thead>
        <tbody>
          {TRAIT_MODIFIER_TABLE.map((t, i) => (
            <tr key={i} className="border-b border-ce-border-subtle">
              <td className="py-1 text-ce-text-bright">{t.traitKey}</td>
              <td>{t.emotion}</td>
              <td style={{ color: t.strength > 0 ? '#dc3545' : '#2aad8e' }}>
                {t.strength > 0 ? '+' : ''}{t.strength}
              </td>
              <td className="text-ce-text-muted">{t.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MultiplierSection() {
  return (
    <div>
      <SectionTitle>Subject, Source & Domain Multipliers</SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-[11px] text-ce-text-bright mb-2">Subject (WHO is affected)</h4>
          {Object.entries(SUBJECT_MULTIPLIER).map(([k, v]) => (
            <div key={k} className="flex justify-between py-0.5 border-b border-ce-border-subtle">
              <span>{k}</span><span className="text-ce-text-bright">×{v}</span>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-[11px] text-ce-text-bright mb-2">Source (WHO caused it)</h4>
          {Object.entries(SOURCE_MULTIPLIER).map(([k, v]) => (
            <div key={k} className="flex justify-between py-0.5 border-b border-ce-border-subtle">
              <span>{k.replace('_', ' ')}</span>
              <span style={{ color: v > 1 ? '#dc3545' : v < 1 ? '#2aad8e' : '#c8c8d4' }}>×{v}</span>
            </div>
          ))}
        </div>
      </div>
      <h4 className="text-[11px] text-ce-text-bright mt-4 mb-2">Domain Amplifiers (High+ triggers only)</h4>
      <Code>{`safety     → fear ×1.6, anger ×1.2
morality   → disgust ×2.0, anger ×1.3
belonging  → sadness ×1.3, trust ×1.3
attachment → sadness ×1.4, trust ×1.3
autonomy   → anger ×1.4, fear ×1.3
status     → anger ×1.2, sadness ×1.1
competence → sadness ×1.1, fear ×1.1
future_sec → fear ×1.3, anticipation ×1.3

Scaled: amp = 1 + (base_amp - 1) × trigger_multiplier`}</Code>
    </div>
  );
}

function SuppressionSection() {
  return (
    <div>
      <SectionTitle>Emotion Suppression Rules</SectionTitle>
      <p className="text-ce-text-muted mb-3">When a dominant emotion's current value ≥ 50, it suppresses opposing emotions by a percentage of its delta.</p>
      <table className="w-full text-[10px]">
        <thead><tr className="text-ce-text-muted border-b border-ce-border-subtle">
          <th className="text-left py-1">Dominant</th><th className="text-left">Suppresses</th><th className="text-left">Strength</th>
        </tr></thead>
        <tbody>
          {SUPPRESSION_RULES.map((r, i) => (
            <tr key={i} className="border-b border-ce-border-subtle">
              <td className="py-1 text-ce-text-bright">{r.dominant} (≥50)</td>
              <td>{r.suppressed}</td>
              <td className="text-red-400">-{(r.strength * 100).toFixed(0)}% of delta</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-ce-text-muted mt-3">Surprise and Anticipation do not suppress other emotions (brief/coexisting).</p>
    </div>
  );
}

function CarrySection() {
  return (
    <div>
      <SectionTitle>Carry-Over & Decay</SectionTitle>
      <Code>{`new_value = (previous × carry_weight) + chapter_deltas

CARRY WEIGHTS (when triggered this chapter):
  sadness:      8%  (volatile — fades fast)
  anger:        8%  (volatile — spikes high, drops fast)
  fear:        25%  (persistent — anxiety lingers)
  disgust:     12%  (fades relatively fast)
  all others:  20%  (moderate persistence)

NOT triggered this chapter: 2% (nearly gone)

INTENSITY PENALTY (hot signals cool faster):
  previous > 50: carry × 0.5
  previous > 30: carry × 0.7
  else: carry × 1.0

CHAPTER TONE ADJUSTMENT:
  More positive events → dampen anger/sadness/fear/disgust by ×0.4
  More negative events → dampen joy/trust/anticipation by ×0.4

COMPRESSION (diminishing returns):
  threshold = 75 if avg trigger ≥ 7 (extreme chapters), else 55
  if delta > threshold: delta = threshold + √(excess) × 4

RED ZONE (VU > 75): decays 65% per chapter
FLOOR: 0 (emotions cannot go negative)
SOFT CAP: 75 (timeline), HARD CAP: 100 (VU meter)`}</Code>
    </div>
  );
}

function FormulaSection() {
  return (
    <div>
      <SectionTitle>Complete Formula</SectionTitle>
      <Code>{`FOR EACH STIMULANT IN CHAPTER:

  1. trigger_mult = f(stakes + immediacy + certainty)
     [0.15 | 0.40 | 0.75 | 1.20]

  2. FOR EACH emotion IN event_emotion_map[eventType]:

     raw_delta = emotionalBaseline[emotion]
                 × trigger_mult
                 × emotion_weight

     trait_mod = Σ (trait_score/75 × modifier_strength)
     modified  = raw_delta × (1 + trait_mod)

     final     = modified
                 × subject_multiplier
                 × source_multiplier
                 × domain_amplifier (if trigger ≥ High)

     capped    = min(50, |final|) × sign(final)

     deltas[emotion] += capped

AFTER ALL STIMULANTS:

  3. Tone adjustment (positive/negative chapter balance)
  4. Ambient inference (surprise, anticipation, fear, joy, trust)
  5. Compression (diminishing returns above threshold)
  6. Suppression (dominant emotions crush opposing ones)
  7. Carry-over:
     carry = previous × carry_weight × intensity_penalty
     emotion_value = carry + deltas[emotion]
     CLAMP to [0, 75] for track, [0, 100] for VU

TESTED: avg gap 10.9 across 6 characters (target <15)`}</Code>
    </div>
  );
}
