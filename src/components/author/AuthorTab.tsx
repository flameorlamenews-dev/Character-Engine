import { useState, useCallback } from 'react';
import {
  AuthorStoreContext,
  generateId,
  type AuthorStore,
  type Manuscript,
  type Character,
  type GlossaryEntry,
} from '../../stores/author-store';
import { ManuscriptsView } from './manuscripts/ManuscriptsView';
import { CharactersView } from './characters/CharactersView';
import { GlossaryManager } from './glossary/GlossaryManager';

/* ------------------------------------------------------------------ */
/*  Tab type                                                           */
/* ------------------------------------------------------------------ */
type SubTab = 'manuscripts' | 'characters' | 'glossary';

/* ------------------------------------------------------------------ */
/*  Provider + Main UI                                                 */
/* ------------------------------------------------------------------ */

export function AuthorTab() {
  const [activeTab, setActiveTab] = useState<SubTab>('manuscripts');

  /* ---------- Claude API key ---------- */
  const [claudeApiKey, setClaudeApiKey] = useState('');

  /* ---------- Manuscripts ---------- */
  const [manuscripts, setManuscripts] = useState<Manuscript[]>([]);

  const addManuscript = useCallback((m: Omit<Manuscript, 'id'>) => {
    const created: Manuscript = { ...m, id: generateId() };
    setManuscripts(prev => [...prev, created]);
    return created;
  }, []);

  const updateManuscript = useCallback((id: string, patch: Partial<Manuscript>) => {
    setManuscripts(prev => prev.map(m => (m.id === id ? { ...m, ...patch } : m)));
  }, []);

  const deleteManuscript = useCallback((id: string) => {
    setManuscripts(prev => prev.filter(m => m.id !== id));
  }, []);

  /* ---------- Characters ---------- */
  const [characters, setCharacters] = useState<Character[]>([]);

  const addCharacter = useCallback((c: Omit<Character, 'id'>) => {
    const created: Character = { ...c, id: generateId() };
    setCharacters(prev => [...prev, created]);
    return created;
  }, []);

  const updateCharacter = useCallback((id: string, patch: Partial<Character>) => {
    setCharacters(prev => prev.map(c => (c.id === id ? { ...c, ...patch } : c)));
  }, []);

  const deleteCharacter = useCallback((id: string) => {
    setCharacters(prev => prev.filter(c => c.id !== id));
  }, []);

  /* ---------- Glossary ---------- */
  const [glossary, setGlossary] = useState<GlossaryEntry[]>([]);

  const addGlossaryEntry = useCallback((e: Omit<GlossaryEntry, 'id'>) => {
    const created: GlossaryEntry = { ...e, id: generateId() };
    setGlossary(prev => [...prev, created]);
    return created;
  }, []);

  const updateGlossaryEntry = useCallback((id: string, patch: Partial<GlossaryEntry>) => {
    setGlossary(prev => prev.map(e => (e.id === id ? { ...e, ...patch } : e)));
  }, []);

  const deleteGlossaryEntry = useCallback((id: string) => {
    setGlossary(prev => prev.filter(e => e.id !== id));
  }, []);

  /* ---------- Store value ---------- */
  const store: AuthorStore = {
    claudeApiKey, setClaudeApiKey,
    manuscripts, addManuscript, updateManuscript, deleteManuscript,
    characters, addCharacter, updateCharacter, deleteCharacter,
    glossary, addGlossaryEntry, updateGlossaryEntry, deleteGlossaryEntry,
  };

  /* ---------- Tabs config ---------- */
  const tabs: { key: SubTab; label: string }[] = [
    { key: 'manuscripts', label: 'Manuscripts' },
    { key: 'characters', label: 'Characters' },
    { key: 'glossary', label: 'Glossary' },
  ];

  return (
    <AuthorStoreContext.Provider value={store}>
      <div className="flex flex-col h-full bg-ce-body overflow-hidden">
        {/* ---- Header row ---- */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-ce-border bg-ce-panel-alt shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-semibold text-ce-text-bright">Author</h2>

            {/* Sub-tab buttons */}
            <div className="flex gap-1">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`px-3 py-1 text-[11px] font-semibold rounded transition-colors ${
                    activeTab === t.key
                      ? 'bg-ce-accent text-white'
                      : 'text-ce-text-muted hover:text-ce-text hover:bg-ce-panel'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Claude API key indicator */}
          <div className="flex items-center gap-2">
            {claudeApiKey ? (
              <span className="text-[9px] text-green-400 bg-green-900/20 px-2 py-0.5 rounded border border-green-500/30">
                Claude API key set
              </span>
            ) : (
              <button
                onClick={() => {
                  const key = prompt('Enter your Claude API key:');
                  if (key) setClaudeApiKey(key.trim());
                }}
                className="text-[9px] text-ce-accent bg-ce-accent/10 px-2 py-0.5 rounded border border-ce-accent/30 hover:bg-ce-accent/20 cursor-pointer"
              >
                Claude API key required
              </button>
            )}
          </div>
        </div>

        {/* ---- Content area ---- */}
        <div className="flex-1 overflow-hidden">
          {activeTab === 'manuscripts' && <ManuscriptsView />}
          {activeTab === 'characters' && <CharactersView />}
          {activeTab === 'glossary' && <GlossaryManager />}
        </div>
      </div>
    </AuthorStoreContext.Provider>
  );
}
