import { useState } from 'react';
import { useAuthorStore } from '../../../stores/author-store';
import { CharacterCard } from './CharacterCard';
import { CharacterProfile } from './CharacterProfile';
import { TextGenerator } from './TextGenerator';


export function CharactersView() {
  const store = useAuthorStore();
  const { characters } = store;

  const [activeFilter, setActiveFilter] = useState<'active' | 'blocked'>('active');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  /* ---- New character form state ---- */
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newRole, setNewRole] = useState('');

  const activeChars = characters.filter(c => !c.blocked);
  const blockedChars = characters.filter(c => c.blocked);
  const listed = activeFilter === 'active' ? activeChars : blockedChars;
  const selected = selectedId ? characters.find(c => c.id === selectedId) ?? null : null;

  const handleCreateCharacter = () => {
    if (!newName.trim()) return;
    store.addCharacter({
      name: newName.trim(),
      description: newDesc.trim(),
      role: newRole.trim(),
      traits: [],
      voiceScales: { brashness: 5, aggression: 5, sophistication: 5, formality: 5, empathy: 5, introspection: 5 },
      mottos: [],
      lexicon: [],
      timelineEntries: [],
      blocked: false,
    });
    setNewName(''); setNewDesc(''); setNewRole('');
    setShowCreate(false);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-ce-border bg-ce-panel-alt shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveFilter('active')}
            className={`px-2 py-0.5 text-[10px] rounded ${activeFilter === 'active' ? 'bg-ce-accent text-white' : 'text-ce-text-muted hover:text-ce-text'}`}
          >
            Active ({activeChars.length})
          </button>
          <button
            onClick={() => setActiveFilter('blocked')}
            className={`px-2 py-0.5 text-[10px] rounded ${activeFilter === 'blocked' ? 'bg-ce-accent text-white' : 'text-ce-text-muted hover:text-ce-text'}`}
          >
            Blocked ({blockedChars.length})
          </button>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="px-3 py-1.5 text-xs font-semibold rounded bg-ce-accent text-white hover:bg-ce-accent/90 transition-colors"
        >
          + New Character
        </button>
      </div>

      {/* blocked info */}
      {activeFilter === 'blocked' && (
        <div className="px-4 py-2 bg-ce-panel border-b border-ce-border text-[10px] text-ce-text-muted">
          Blocked profiles are hidden from analysis. They will not be detected during manuscript analysis.
        </div>
      )}

      {/* grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {listed.length === 0 ? (
          <div className="text-center py-12 text-[11px] text-ce-text-muted">
            {activeFilter === 'active'
              ? 'No active characters yet. Create one or analyze a manuscript.'
              : 'No blocked characters.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listed.map(ch => (
              <CharacterCard
                key={ch.id}
                character={ch}
                onViewProfile={() => { setSelectedId(ch.id); setShowProfile(true); }}
                onGenerate={() => { setSelectedId(ch.id); setShowGenerator(true); }}
                onBlock={() => store.updateCharacter(ch.id, { blocked: true })}
                onUnblock={() => store.updateCharacter(ch.id, { blocked: false })}
                onDelete={() => store.deleteCharacter(ch.id)}
                isBlocked={ch.blocked}
              />
            ))}
          </div>
        )}
      </div>

      {/* Profile modal */}
      {showProfile && selected && (
        <CharacterProfile character={selected} onClose={() => setShowProfile(false)} />
      )}

      {/* Generator modal */}
      {showGenerator && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-ce-panel border border-ce-border rounded-lg w-[640px] max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-ce-border">
              <h3 className="text-sm font-semibold text-ce-text-bright">Generate Text — {selected.name}</h3>
              <button onClick={() => setShowGenerator(false)} className="text-ce-text-muted hover:text-ce-text-bright text-lg leading-none">&times;</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <TextGenerator characterId={selected.id} characterName={selected.name} />
            </div>
          </div>
        </div>
      )}

      {/* Create character modal */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-ce-panel border border-ce-border rounded-lg w-[480px] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-ce-border">
              <h3 className="text-sm font-semibold text-ce-text-bright">New Character</h3>
              <button onClick={() => setShowCreate(false)} className="text-ce-text-muted hover:text-ce-text-bright text-lg leading-none">&times;</button>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Name *</label>
                <input
                  type="text"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  placeholder="Character name"
                  className="w-full px-3 py-2 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Role</label>
                <input
                  type="text"
                  value={newRole}
                  onChange={e => setNewRole(e.target.value)}
                  placeholder="e.g. Protagonist, Antagonist, Mentor"
                  className="w-full px-3 py-2 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Description</label>
                <textarea
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  placeholder="Brief character description..."
                  className="w-full h-24 px-3 py-2 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none resize-none font-mono-readout"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 px-4 py-3 border-t border-ce-border">
              <button onClick={() => setShowCreate(false)} className="px-4 py-1.5 text-xs text-ce-text-muted hover:text-ce-text border border-ce-border rounded">Cancel</button>
              <button onClick={handleCreateCharacter} disabled={!newName.trim()} className="px-4 py-1.5 text-xs font-semibold bg-ce-accent text-white rounded disabled:opacity-40">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
