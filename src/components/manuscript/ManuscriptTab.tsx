import { useState } from 'react';

interface Chapter {
  number: number;
  title: string;
  content: string;
  scenes: Scene[];
  analyzed: boolean;
  analyzing: boolean;
}

interface Scene {
  id: string;
  sceneIndex: number;
  startLine: number;
  endLine: number;
  summary: string;
  characters: string[];
  stimulants: any[];
}

/**
 * Split chapter text into scenes based on scene break markers.
 * Common markers: ***, ---, blank lines between paragraphs, POV shifts
 */
function splitIntoScenes(text: string, chapterNumber: number): Scene[] {
  // Split on common scene break patterns: ***, ---, or 3+ blank lines
  const parts = text.split(/\n\s*(?:\*\*\*|---)\s*\n|\n{3,}/);
  const scenes: Scene[] = [];

  let lineOffset = 0;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (!part || part.length < 50) {
      lineOffset += parts[i].split('\n').length;
      continue;
    }

    const lines = part.split('\n');
    scenes.push({
      id: `ch${chapterNumber}-scene${scenes.length}`,
      sceneIndex: scenes.length,
      startLine: lineOffset,
      endLine: lineOffset + lines.length,
      summary: part.substring(0, 120).replace(/\n/g, ' ').trim() + '...',
      characters: [],
      stimulants: [],
    });
    lineOffset += lines.length;
  }

  return scenes;
}

export function ManuscriptTab() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [selectedScene, setSelectedScene] = useState<string | null>(null);
  const [uploadText, setUploadText] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');
  const [showUpload, setShowUpload] = useState(false);

  const handleUploadChapter = () => {
    if (!uploadText.trim()) return;

    const chapterNum = chapters.length + 1;
    const scenes = splitIntoScenes(uploadText, chapterNum);

    const newChapter: Chapter = {
      number: chapterNum,
      title: chapterTitle || `Chapter ${chapterNum}`,
      content: uploadText,
      scenes,
      analyzed: false,
      analyzing: false,
    };

    setChapters([...chapters, newChapter]);
    setUploadText('');
    setChapterTitle('');
    setShowUpload(false);
    setSelectedChapter(chapterNum);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.name.endsWith('.txt') || file.name.endsWith('.md')) {
      const text = await file.text();
      setUploadText(text);
    } else {
      alert('For now, please upload .txt or .md files. DOCX support coming with Claude API integration.');
    }
  };

  const handleAnalyzeChapter = (chapterNum: number) => {
    // Placeholder — will call Claude API when key is provided
    setChapters(prev => prev.map(ch =>
      ch.number === chapterNum ? { ...ch, analyzing: true } : ch
    ));

    // Simulate analysis with a timeout (replace with real Claude API call)
    setTimeout(() => {
      setChapters(prev => prev.map(ch => {
        if (ch.number !== chapterNum) return ch;
        return {
          ...ch,
          analyzing: false,
          analyzed: true,
          scenes: ch.scenes.map(scene => ({
            ...scene,
            characters: ['(Claude API analysis pending)'],
            stimulants: [],
          })),
        };
      }));
    }, 2000);
  };

  const currentChapter = selectedChapter ? chapters.find(ch => ch.number === selectedChapter) : null;
  const currentScene = selectedScene && currentChapter
    ? currentChapter.scenes.find(s => s.id === selectedScene)
    : null;

  return (
    <div className="flex flex-col h-full bg-ce-body">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-ce-border bg-ce-panel-alt">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-ce-text-bright">Manuscript Analyzer</h2>
          <span className="text-[10px] text-ce-text-muted bg-ce-panel px-2 py-0.5 rounded border border-ce-border">
            {chapters.length} chapters uploaded
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-ce-accent bg-ce-accent/10 px-2 py-0.5 rounded border border-ce-accent/30">
            AI: Claude (API key required)
          </span>
          <button
            onClick={() => setShowUpload(true)}
            className="px-3 py-1.5 text-xs font-semibold rounded bg-ce-accent text-white hover:bg-ce-accent/90 transition-colors"
          >
            + Upload Chapter
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar — Chapter list */}
        <div className="w-[220px] shrink-0 border-r border-ce-border bg-ce-panel overflow-y-auto">
          <div className="px-3 py-2 border-b border-ce-border">
            <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">Chapters</span>
          </div>
          {chapters.length === 0 ? (
            <div className="px-3 py-4 text-[10px] text-ce-text-muted text-center">
              No chapters uploaded yet.<br />Click "Upload Chapter" to begin.
            </div>
          ) : (
            chapters.map((ch) => (
              <button
                key={ch.number}
                onClick={() => { setSelectedChapter(ch.number); setSelectedScene(null); }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left border-b border-ce-border-subtle transition-colors ${
                  selectedChapter === ch.number ? 'bg-ce-panel-alt' : 'hover:bg-ce-panel-alt/50'
                }`}
              >
                <span className="font-mono-readout text-[10px] text-ce-text-muted w-6">
                  {String(ch.number).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-ce-text truncate">{ch.title}</div>
                  <div className="text-[9px] text-ce-text-muted">
                    {ch.scenes.length} scenes
                    {ch.analyzed && <span className="text-green-400 ml-1">analyzed</span>}
                    {ch.analyzing && <span className="text-ce-accent ml-1">analyzing...</span>}
                  </div>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Center — Scene list or content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {currentChapter ? (
            <>
              {/* Chapter header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-ce-border bg-ce-panel-alt">
                <div>
                  <span className="text-xs text-ce-text-bright font-semibold">{currentChapter.title}</span>
                  <span className="text-[10px] text-ce-text-muted ml-2">
                    {currentChapter.scenes.length} scenes · {currentChapter.content.split(/\s+/).length} words
                  </span>
                </div>
                <button
                  onClick={() => handleAnalyzeChapter(currentChapter.number)}
                  disabled={currentChapter.analyzing}
                  className={`px-3 py-1 text-[10px] font-semibold rounded transition-colors ${
                    currentChapter.analyzed
                      ? 'bg-green-900/30 text-green-400 border border-green-500/30'
                      : currentChapter.analyzing
                      ? 'bg-ce-accent/20 text-ce-accent border border-ce-accent/30 animate-pulse'
                      : 'bg-ce-accent text-white hover:bg-ce-accent/90'
                  }`}
                >
                  {currentChapter.analyzed ? 'Re-analyze' : currentChapter.analyzing ? 'Analyzing...' : 'Analyze with Claude'}
                </button>
              </div>

              {/* Scene list */}
              <div className="flex flex-1 overflow-hidden">
                <div className="w-[280px] shrink-0 border-r border-ce-border overflow-y-auto bg-ce-body">
                  <div className="px-3 py-2 border-b border-ce-border">
                    <span className="text-[10px] uppercase tracking-widest text-ce-text-muted font-semibold">Scenes</span>
                  </div>
                  {currentChapter.scenes.map((scene) => (
                    <button
                      key={scene.id}
                      onClick={() => setSelectedScene(scene.id)}
                      className={`w-full text-left px-3 py-2 border-b border-ce-border-subtle transition-colors ${
                        selectedScene === scene.id ? 'bg-ce-panel-alt border-l-2 border-l-ce-accent' : 'hover:bg-ce-panel/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono-readout text-[9px] text-ce-text-muted">
                          S{scene.sceneIndex + 1}
                        </span>
                        <span className="text-[10px] text-ce-text truncate">{scene.summary}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[8px] text-ce-text-muted">
                          Lines {scene.startLine}–{scene.endLine}
                        </span>
                        {scene.characters.length > 0 && scene.characters[0] !== '(Claude API analysis pending)' && (
                          <span className="text-[8px] text-ce-accent">
                            {scene.characters.length} characters
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Scene detail */}
                <div className="flex-1 overflow-y-auto px-4 py-3">
                  {currentScene ? (
                    <div>
                      <h3 className="text-xs font-semibold text-ce-text-bright mb-2">
                        Scene {currentScene.sceneIndex + 1} — Lines {currentScene.startLine}–{currentScene.endLine}
                      </h3>
                      {currentScene.characters.length > 0 && (
                        <div className="mb-3">
                          <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Characters in scene</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {currentScene.characters.map((c, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-ce-panel border border-ce-border text-ce-text">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="text-[10px] text-ce-text-muted leading-relaxed whitespace-pre-wrap bg-ce-panel rounded p-3 border border-ce-border-subtle max-h-[60vh] overflow-y-auto">
                        {currentChapter.content.split('\n').slice(currentScene.startLine, currentScene.endLine).join('\n')}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-[11px] text-ce-text-muted">
                      Select a scene to view its content and analysis
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-[11px] text-ce-text-muted">
              {chapters.length === 0
                ? 'Upload a chapter to begin analyzing your manuscript'
                : 'Select a chapter from the sidebar'
              }
            </div>
          )}
        </div>
      </div>

      {/* Upload modal */}
      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-ce-panel border border-ce-border rounded-lg w-[600px] max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-ce-border">
              <h3 className="text-sm font-semibold text-ce-text-bright">Upload Chapter</h3>
              <button onClick={() => setShowUpload(false)} className="text-ce-text-muted hover:text-ce-text-bright">✕</button>
            </div>
            <div className="p-4 space-y-3 overflow-y-auto">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Chapter Title</label>
                <input
                  type="text"
                  value={chapterTitle}
                  onChange={(e) => setChapterTitle(e.target.value)}
                  placeholder="e.g. The Hunter Exam"
                  className="w-full px-3 py-2 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Upload File</label>
                <input
                  type="file"
                  accept=".txt,.md"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-ce-text-muted file:mr-3 file:py-1 file:px-3 file:rounded file:border file:border-ce-border file:bg-ce-panel file:text-ce-text file:text-xs file:cursor-pointer"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Or Paste Text</label>
                <textarea
                  value={uploadText}
                  onChange={(e) => setUploadText(e.target.value)}
                  placeholder="Paste your chapter text here..."
                  className="w-full h-48 px-3 py-2 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none resize-none font-mono-readout leading-relaxed"
                />
              </div>
              {uploadText && (
                <div className="text-[9px] text-ce-text-muted">
                  {uploadText.split(/\s+/).length} words · {splitIntoScenes(uploadText, 0).length} scenes detected
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 px-4 py-3 border-t border-ce-border">
              <button
                onClick={() => setShowUpload(false)}
                className="px-4 py-1.5 text-xs text-ce-text-muted hover:text-ce-text border border-ce-border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadChapter}
                disabled={!uploadText.trim()}
                className="px-4 py-1.5 text-xs font-semibold bg-ce-accent text-white rounded disabled:opacity-40"
              >
                Upload Chapter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
