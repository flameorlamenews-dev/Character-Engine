import { useState } from 'react';
import { useAuthorStore } from '../../../stores/author-store';
import type { Character } from '../../../stores/author-store';

interface Props {
  character: Character;
  onClose: () => void;
}

const SCALE_KEYS = ['brashness', 'aggression', 'sophistication', 'formality', 'empathy', 'introspection'] as const;

export function CharacterProfile({ character, onClose }: Props) {
  const store = useAuthorStore();

  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);
  const [role, setRole] = useState(character.role);
  const [traits, setTraits] = useState<string[]>([...character.traits]);
  const [traitInput, setTraitInput] = useState('');
  const [mottos, setMottos] = useState<string[]>([...character.mottos]);
  const [mottoInput, setMottoInput] = useState('');
  const [lexicon, setLexicon] = useState<string[]>([...character.lexicon]);
  const [lexiconInput, setLexiconInput] = useState('');
  const [voiceScales, setVoiceScales] = useState<Record<string, number>>({ ...character.voiceScales });

  const [activeSection, setActiveSection] = useState<'basic' | 'voice' | 'timeline'>('basic');

  const handleSave = () => {
    store.updateCharacter(character.id, {
      name: name.trim(),
      description: description.trim(),
      role: role.trim(),
      traits,
      mottos,
      lexicon,
      voiceScales,
    });
    onClose();
  };

  const addItem = (
    input: string,
    setInput: (v: string) => void,
    list: string[],
    setList: (v: string[]) => void,
  ) => {
    const val = input.trim();
    if (val && !list.includes(val)) {
      setList([...list, val]);
      setInput('');
    }
  };

  const removeItem = (list: string[], setList: (v: string[]) => void, idx: number) => {
    setList(list.filter((_, i) => i !== idx));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-ce-panel border border-ce-border rounded-lg w-[720px] max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-ce-border shrink-0">
          <h3 className="text-sm font-semibold text-ce-text-bright">{character.name}</h3>
          <button onClick={onClose} className="text-ce-text-muted hover:text-ce-text-bright text-lg leading-none">&times;</button>
        </div>

        {/* Section tabs */}
        <div className="flex gap-1 px-4 pt-3 shrink-0">
          {(['basic', 'voice', 'timeline'] as const).map(sec => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`px-3 py-1 text-[10px] font-semibold rounded-t transition-colors ${
                activeSection === sec ? 'bg-ce-panel-alt text-ce-text-bright border border-b-0 border-ce-border' : 'text-ce-text-muted hover:text-ce-text'
              }`}
            >
              {sec === 'basic' ? 'Basic Info' : sec === 'voice' ? 'Voice & Traits' : 'Timeline'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {activeSection === 'basic' && (
            <>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Name</label>
                <input
                  type="text" value={name} onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Role</label>
                <input
                  type="text" value={role} onChange={e => setRole(e.target.value)}
                  placeholder="e.g. Protagonist, Antagonist"
                  className="w-full px-3 py-2 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Description</label>
                <textarea
                  value={description} onChange={e => setDescription(e.target.value)}
                  className="w-full h-32 px-3 py-2 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none resize-none font-mono-readout leading-relaxed"
                />
              </div>
            </>
          )}

          {activeSection === 'voice' && (
            <>
              {/* Traits */}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Personality Traits</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text" value={traitInput} onChange={e => setTraitInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addItem(traitInput, setTraitInput, traits, setTraits))}
                    placeholder="Add trait..."
                    className="flex-1 px-3 py-1.5 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                  />
                  <button onClick={() => addItem(traitInput, setTraitInput, traits, setTraits)} className="px-3 py-1.5 text-xs bg-ce-accent text-white rounded">+</button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {traits.map((t, i) => (
                    <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-ce-body border border-ce-border text-ce-text flex items-center gap-1">
                      {t}
                      <button onClick={() => removeItem(traits, setTraits, i)} className="text-ce-text-muted hover:text-red-400">&times;</button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Mottos */}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Mottos / Catchphrases</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text" value={mottoInput} onChange={e => setMottoInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addItem(mottoInput, setMottoInput, mottos, setMottos))}
                    placeholder="Add motto..."
                    className="flex-1 px-3 py-1.5 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                  />
                  <button onClick={() => addItem(mottoInput, setMottoInput, mottos, setMottos)} className="px-3 py-1.5 text-xs bg-ce-accent text-white rounded">+</button>
                </div>
                <div className="space-y-1">
                  {mottos.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-ce-text">
                      <span className="text-ce-accent">"</span>{m}<span className="text-ce-accent">"</span>
                      <button onClick={() => removeItem(mottos, setMottos, i)} className="text-ce-text-muted hover:text-red-400 ml-auto text-[9px]">&times;</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lexicon */}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Lexicon (characteristic words)</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text" value={lexiconInput} onChange={e => setLexiconInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addItem(lexiconInput, setLexiconInput, lexicon, setLexicon))}
                    placeholder="Add word..."
                    className="flex-1 px-3 py-1.5 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                  />
                  <button onClick={() => addItem(lexiconInput, setLexiconInput, lexicon, setLexicon)} className="px-3 py-1.5 text-xs bg-ce-accent text-white rounded">+</button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {lexicon.map((w, i) => (
                    <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-ce-body border border-ce-border text-ce-text-muted font-mono-readout flex items-center gap-1">
                      {w}
                      <button onClick={() => removeItem(lexicon, setLexicon, i)} className="hover:text-red-400">&times;</button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Voice scales */}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-2 block">Voice Scales</label>
                <div className="space-y-3">
                  {SCALE_KEYS.map(key => (
                    <div key={key} className="flex items-center gap-3">
                      <span className="text-[10px] text-ce-text-muted w-28 capitalize">{key}</span>
                      <input
                        type="range" min={1} max={10} step={1}
                        value={voiceScales[key] ?? 5}
                        onChange={e => setVoiceScales(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                        className="flex-1 accent-ce-accent"
                      />
                      <span className="font-mono-readout text-[10px] text-ce-text w-6 text-right">{voiceScales[key] ?? 5}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSection === 'timeline' && (
            <div>
              {character.timelineEntries.length === 0 ? (
                <div className="text-center py-8 text-[11px] text-ce-text-muted">
                  No timeline data yet. Analyze manuscripts that feature this character to populate the timeline.
                </div>
              ) : (
                <div className="space-y-4">
                  {character.timelineEntries
                    .sort((a, b) => a.chapterNumber - b.chapterNumber)
                    .map((entry, i) => (
                    <div key={i} className="bg-ce-body border border-ce-border-subtle rounded p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono-readout text-[10px] text-ce-accent">Ch {entry.chapterNumber}</span>
                        {entry.emotionalState && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-ce-panel border border-ce-border text-ce-text-muted">{entry.emotionalState}</span>
                        )}
                      </div>
                      {entry.traits.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {entry.traits.map((t, j) => (
                            <span key={j} className="text-[8px] px-1.5 py-0.5 rounded bg-ce-panel border border-ce-border-subtle text-ce-text-muted">{t}</span>
                          ))}
                        </div>
                      )}
                      {entry.dialoguePatterns.length > 0 && (
                        <div className="space-y-1">
                          <span className="text-[9px] text-ce-text-muted uppercase tracking-widest">Dialogue patterns</span>
                          {entry.dialoguePatterns.map((d, k) => (
                            <div key={k} className="text-[9px] text-ce-text-muted italic pl-2 border-l border-ce-border-subtle">{d}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t border-ce-border shrink-0">
          <button onClick={onClose} className="px-4 py-1.5 text-xs text-ce-text-muted hover:text-ce-text border border-ce-border rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-1.5 text-xs font-semibold bg-ce-accent text-white rounded">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
