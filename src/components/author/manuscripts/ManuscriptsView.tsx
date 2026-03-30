import { useState } from 'react';
import { useAuthorStore } from '../../../stores/author-store';
import { ManuscriptUpload } from './ManuscriptUpload';
import { AnalysisResults } from './AnalysisResults';

export function ManuscriptsView() {
  const store = useAuthorStore();
  const { manuscripts } = store;

  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedScene, setSelectedScene] = useState<string | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const selected = selectedId ? manuscripts.find(m => m.id === selectedId) ?? null : null;
  const currentScene = selected && selectedScene
    ? selected.scenes.find(s => s.id === selectedScene) ?? null
    : null;

  /* ------ Analyze stub ------ */
  const handleAnalyze = (id: string) => {
    if (!store.claudeApiKey) {
      alert('Please set your Claude API key first (top-right corner).');
      return;
    }
    store.updateManuscript(id, { analyzing: true });

    // Simulated — replace with real Claude call
    setTimeout(() => {
      store.updateManuscript(id, {
        analyzing: false,
        analyzed: true,
        analysisResults: {
          summary: '(Claude analysis placeholder) Chapter analysed successfully. Replace this stub with a real Claude API call.',
          newCharacters: [{ name: 'Character A', firstImpressions: 'Detected from dialogue patterns.' }],
          recurringCharacters: [],
          characterArcs: [],
          consistencyIssues: [],
        },
        scenes: (manuscripts.find(m => m.id === id)?.scenes ?? []).map(s => ({
          ...s,
          characters: ['(Pending real Claude analysis)'],
        })),
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-ce-border bg-ce-panel-alt shrink-0">
        <span className="text-[10px] text-ce-text-muted font-mono-readout">
          {manuscripts.length} chapter{manuscripts.length !== 1 ? 's' : ''} uploaded
        </span>
        <button
          onClick={() => setShowUpload(true)}
          className="px-3 py-1.5 text-xs font-semibold rounded bg-ce-accent text-white hover:bg-ce-accent/90 transition-colors"
        >
          + Upload Chapter
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* ---- Left sidebar: chapter list ---- */}
        <div className="w-[220px] shrink-0 border-r border-ce-border bg-ce-panel overflow-y-auto">
          <div className="px-3 py-2 border-b border-ce-border">
            <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">Chapters</span>
          </div>

          {manuscripts.length === 0 ? (
            <div className="px-3 py-4 text-[10px] text-ce-text-muted text-center">
              No chapters uploaded yet.<br />Click "+ Upload Chapter" to begin.
            </div>
          ) : (
            manuscripts.map(ch => (
              <button
                key={ch.id}
                onClick={() => { setSelectedId(ch.id); setSelectedScene(null); setShowAnalysis(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left border-b border-ce-border-subtle transition-colors ${
                  selectedId === ch.id ? 'bg-ce-panel-alt' : 'hover:bg-ce-panel-alt/50'
                }`}
              >
                <span className="font-mono-readout text-[10px] text-ce-text-muted w-6">
                  {String(ch.chapterNumber).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-ce-text truncate">{ch.title}</div>
                  <div className="text-[9px] text-ce-text-muted">
                    {ch.sceneCount} scene{ch.sceneCount !== 1 ? 's' : ''}
                    {ch.analyzed && <span className="text-green-400 ml-1">analyzed</span>}
                    {ch.analyzing && <span className="text-ce-accent ml-1">analyzing...</span>}
                  </div>
                </div>
              </button>
            ))
          )}
        </div>

        {/* ---- Center ---- */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {selected ? (
            <>
              {/* chapter header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-ce-border bg-ce-panel-alt shrink-0">
                <div>
                  <span className="text-xs text-ce-text-bright font-semibold">{selected.title}</span>
                  <span className="text-[10px] text-ce-text-muted ml-2">
                    {selected.sceneCount} scenes · {selected.content.split(/\s+/).length} words
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {selected.analyzed && (
                    <button
                      onClick={() => setShowAnalysis(!showAnalysis)}
                      className="px-3 py-1 text-[10px] font-semibold rounded bg-ce-panel border border-ce-border text-ce-text hover:bg-ce-panel-alt transition-colors"
                    >
                      {showAnalysis ? 'Scenes' : 'View Analysis'}
                    </button>
                  )}
                  <button
                    onClick={() => handleAnalyze(selected.id)}
                    disabled={selected.analyzing}
                    className={`px-3 py-1 text-[10px] font-semibold rounded transition-colors ${
                      selected.analyzed
                        ? 'bg-green-900/30 text-green-400 border border-green-500/30'
                        : selected.analyzing
                        ? 'bg-ce-accent/20 text-ce-accent border border-ce-accent/30 animate-pulse'
                        : 'bg-ce-accent text-white hover:bg-ce-accent/90'
                    }`}
                  >
                    {selected.analyzed ? 'Re-analyze with Claude' : selected.analyzing ? 'Analyzing...' : 'Analyze with Claude'}
                  </button>
                  <button
                    onClick={() => store.deleteManuscript(selected.id)}
                    className="px-2 py-1 text-[10px] text-red-400 hover:bg-red-900/20 rounded transition-colors"
                    title="Delete chapter"
                  >
                    x
                  </button>
                </div>
              </div>

              {showAnalysis && selected.analysisResults ? (
                <div className="flex-1 overflow-y-auto p-4">
                  <AnalysisResults analysis={selected.analysisResults} />
                </div>
              ) : (
                /* scene list + detail */
                <div className="flex flex-1 overflow-hidden">
                  <div className="w-[280px] shrink-0 border-r border-ce-border overflow-y-auto bg-ce-body">
                    <div className="px-3 py-2 border-b border-ce-border">
                      <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">Scenes</span>
                    </div>
                    {selected.scenes.map(scene => (
                      <button
                        key={scene.id}
                        onClick={() => setSelectedScene(scene.id)}
                        className={`w-full text-left px-3 py-2 border-b border-ce-border-subtle transition-colors ${
                          selectedScene === scene.id ? 'bg-ce-panel-alt border-l-2 border-l-ce-accent' : 'hover:bg-ce-panel/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono-readout text-[9px] text-ce-text-muted">S{scene.sceneIndex + 1}</span>
                          <span className="text-[10px] text-ce-text truncate">{scene.summary}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[8px] text-ce-text-muted">Lines {scene.startLine}-{scene.endLine}</span>
                          {scene.characters.length > 0 && scene.characters[0] !== '(Pending real Claude analysis)' && (
                            <span className="text-[8px] text-ce-accent">{scene.characters.length} characters</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* scene detail */}
                  <div className="flex-1 overflow-y-auto px-4 py-3">
                    {currentScene ? (
                      <div>
                        <h3 className="text-xs font-semibold text-ce-text-bright mb-2">
                          Scene {currentScene.sceneIndex + 1} — Lines {currentScene.startLine}-{currentScene.endLine}
                        </h3>
                        {currentScene.characters.length > 0 && (
                          <div className="mb-3">
                            <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Characters in scene</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {currentScene.characters.map((c, i) => (
                                <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-ce-panel border border-ce-border text-ce-text">{c}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="text-[10px] text-ce-text-muted leading-relaxed whitespace-pre-wrap bg-ce-panel rounded p-3 border border-ce-border-subtle max-h-[60vh] overflow-y-auto">
                          {selected.content.split('\n').slice(currentScene.startLine, currentScene.endLine).join('\n')}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-[11px] text-ce-text-muted">
                        Select a scene to view its content
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-[11px] text-ce-text-muted">
              {manuscripts.length === 0
                ? 'Upload a chapter to begin analyzing your manuscript'
                : 'Select a chapter from the sidebar'}
            </div>
          )}
        </div>
      </div>

      {/* Upload dialog */}
      {showUpload && <ManuscriptUpload onClose={() => setShowUpload(false)} />}
    </div>
  );
}
