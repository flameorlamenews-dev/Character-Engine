import { useState } from 'react';
import { useAuthorStore } from '../../../stores/author-store';
import type { GlossaryEntry } from '../../../stores/author-store';

const WORD_TYPES = ['noun', 'verb', 'adjective', 'curse', 'proper_noun', 'phrase', 'other'] as const;
const CATEGORIES = ['concept', 'place', 'item', 'creature', 'title', 'motto', 'magic', 'technology', 'organization', 'custom'] as const;

type SortKey = 'word' | 'type' | 'category' | 'locked';

export function GlossaryManager() {
  const store = useAuthorStore();
  const { glossary } = store;

  const [sortBy, setSortBy] = useState<SortKey>('word');
  const [showDialog, setShowDialog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  /* Form state */
  const [formWord, setFormWord] = useState('');
  const [formDef, setFormDef] = useState('');
  const [formType, setFormType] = useState('noun');
  const [formCategory, setFormCategory] = useState('');

  const resetForm = () => {
    setFormWord(''); setFormDef(''); setFormType('noun'); setFormCategory('');
    setEditingId(null);
    setShowDialog(false);
  };

  const openEdit = (entry: GlossaryEntry) => {
    setEditingId(entry.id);
    setFormWord(entry.word);
    setFormDef(entry.definition);
    setFormType(entry.wordType);
    setFormCategory(entry.category);
    setShowDialog(true);
  };

  const handleSubmit = () => {
    if (!formWord.trim() || !formDef.trim()) return;
    const payload = { word: formWord.trim(), definition: formDef.trim(), wordType: formType, category: formCategory, locked: false };
    if (editingId) {
      store.updateGlossaryEntry(editingId, payload);
    } else {
      store.addGlossaryEntry(payload);
    }
    resetForm();
  };

  const sorted = [...glossary].sort((a, b) => {
    if (sortBy === 'word') return a.word.localeCompare(b.word);
    if (sortBy === 'type') return a.wordType.localeCompare(b.wordType);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    if (sortBy === 'locked') return (b.locked ? 1 : 0) - (a.locked ? 1 : 0);
    return 0;
  });

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-ce-border bg-ce-panel-alt shrink-0">
        <div>
          <span className="text-[10px] text-ce-text-muted font-mono-readout">
            {glossary.length} entr{glossary.length === 1 ? 'y' : 'ies'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortKey)}
            className="px-2 py-1 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text outline-none"
          >
            <option value="word">Sort: Word</option>
            <option value="type">Sort: Type</option>
            <option value="category">Sort: Category</option>
            <option value="locked">Sort: Locked</option>
          </select>
          <button
            onClick={() => { resetForm(); setShowDialog(true); }}
            className="px-3 py-1.5 text-xs font-semibold rounded bg-ce-accent text-white hover:bg-ce-accent/90 transition-colors"
          >
            + Add Word
          </button>
        </div>
      </div>

      {/* Info bar */}
      <div className="px-4 py-2 border-b border-ce-border bg-ce-panel text-[10px] text-ce-text-muted shrink-0">
        Define custom words for your world. Locked entries will not be modified by AI analysis.
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {sorted.length === 0 ? (
          <div className="text-center py-12 text-[11px] text-ce-text-muted">
            No glossary entries yet. Click "+ Add Word" to define terms from your world.
          </div>
        ) : (
          sorted.map(entry => (
            <div key={entry.id} className="bg-ce-panel border border-ce-border rounded p-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[12px] font-semibold text-ce-text-bright">
                    {entry.word}
                    {entry.locked && <span className="ml-1.5 text-[9px] text-ce-accent" title="Locked">&#128274;</span>}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-ce-body border border-ce-border-subtle text-ce-text-muted capitalize">{entry.wordType}</span>
                    {entry.category && (
                      <>
                        <span className="text-ce-text-muted text-[9px]">&middot;</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-ce-body border border-ce-border-subtle text-ce-text-muted capitalize">{entry.category}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => store.updateGlossaryEntry(entry.id, { locked: !entry.locked })}
                    className="text-[9px] px-1.5 py-0.5 rounded hover:bg-ce-panel-alt text-ce-text-muted"
                    title={entry.locked ? 'Unlock' : 'Lock'}
                  >
                    {entry.locked ? '&#128274;' : '&#128275;'}
                  </button>
                  <button
                    onClick={() => openEdit(entry)}
                    className="text-[9px] px-1.5 py-0.5 rounded hover:bg-ce-panel-alt text-ce-text-muted"
                    title="Edit"
                  >
                    &#9998;
                  </button>
                  <button
                    onClick={() => store.deleteGlossaryEntry(entry.id)}
                    className="text-[9px] px-1.5 py-0.5 rounded hover:bg-red-900/20 text-red-400"
                    title="Delete"
                  >
                    x
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-ce-text leading-relaxed">{entry.definition}</p>
            </div>
          ))
        )}
      </div>

      {/* Add / Edit dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-ce-panel border border-ce-border rounded-lg w-[500px] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-ce-border">
              <h3 className="text-sm font-semibold text-ce-text-bright">{editingId ? 'Edit' : 'Add'} Glossary Entry</h3>
              <button onClick={resetForm} className="text-ce-text-muted hover:text-ce-text-bright text-lg leading-none">&times;</button>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Word *</label>
                <input
                  type="text" value={formWord} onChange={e => setFormWord(e.target.value)}
                  placeholder="e.g. Ventus"
                  className="w-full px-3 py-2 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Definition *</label>
                <textarea
                  value={formDef} onChange={e => setFormDef(e.target.value)}
                  placeholder="What does this word mean?"
                  className="w-full h-24 px-3 py-2 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Word Type</label>
                  <select
                    value={formType} onChange={e => setFormType(e.target.value)}
                    className="w-full px-2 py-1.5 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text outline-none"
                  >
                    {WORD_TYPES.map(t => <option key={t} value={t}>{t.replace('_', ' ')}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Category</label>
                  <select
                    value={formCategory} onChange={e => setFormCategory(e.target.value)}
                    className="w-full px-2 py-1.5 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text outline-none"
                  >
                    <option value="">None</option>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 px-4 py-3 border-t border-ce-border">
              <button onClick={resetForm} className="px-4 py-1.5 text-xs text-ce-text-muted hover:text-ce-text border border-ce-border rounded">Cancel</button>
              <button onClick={handleSubmit} disabled={!formWord.trim() || !formDef.trim()} className="px-4 py-1.5 text-xs font-semibold bg-ce-accent text-white rounded disabled:opacity-40">
                {editingId ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
