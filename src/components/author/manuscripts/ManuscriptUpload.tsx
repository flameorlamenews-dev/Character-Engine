import { useState } from 'react';
import mammoth from 'mammoth';
import { useAuthorStore, splitIntoScenes } from '../../../stores/author-store';

interface Props {
  onClose: () => void;
}

export function ManuscriptUpload({ onClose }: Props) {
  const store = useAuthorStore();
  const [uploadText, setUploadText] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterNumber, setChapterNumber] = useState<number | ''>('');
  const [error, setError] = useState('');
  const [parsing, setParsing] = useState(false);
  const [fileName, setFileName] = useState('');

  const existingChapters = store.manuscripts.map(m => m.chapterNumber).sort((a, b) => a - b);
  const nextSuggested = existingChapters.length > 0 ? Math.max(...existingChapters) + 1 : 1;

  const autoDetectFromText = (text: string) => {
    const firstLine = text.split('\n').find(l => l.trim().length > 0) || '';
    const chapterMatch = firstLine.match(/^(?:Chapter|Prologue|Epilogue|Act)\s*(\d*)\s*[-—:]?\s*(.*)/i);
    if (chapterMatch) {
      const num = chapterMatch[1] ? parseInt(chapterMatch[1]) : 0;
      const title = chapterMatch[2]?.trim() || firstLine.trim();
      if (chapterNumber === '') setChapterNumber(num || nextSuggested);
      if (!chapterTitle) setChapterTitle(title || firstLine.trim());
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError('');
    setFileName(file.name);

    const ext = file.name.split('.').pop()?.toLowerCase();

    try {
      if (ext === 'txt' || ext === 'md') {
        const text = await file.text();
        setUploadText(text);
        autoDetectFromText(text);

      } else if (ext === 'docx' || ext === 'doc') {
        setParsing(true);
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        const text = result.value;
        setUploadText(text);
        autoDetectFromText(text);
        setParsing(false);

      } else if (ext === 'pdf') {
        setError('PDF support coming soon. For now, please convert to .docx or .txt and re-upload.');

      } else {
        setError(`Unsupported file type: .${ext}. Supported: .docx, .txt, .md`);
      }
    } catch (err: any) {
      setParsing(false);
      setError(`Failed to parse file: ${err.message}`);
    }
  };

  const handleUpload = () => {
    setError('');

    if (!uploadText.trim()) {
      setError('Please provide chapter text (upload a file or paste).');
      return;
    }

    if (chapterNumber === '' || chapterNumber < 0) {
      setError('Please enter a valid chapter number (0 for Prologue, 1+ for chapters).');
      return;
    }

    if (existingChapters.includes(chapterNumber)) {
      setError(`Chapter ${chapterNumber} already exists. Use a different number or delete the existing one first.`);
      return;
    }

    const scenes = splitIntoScenes(uploadText, chapterNumber);

    store.addManuscript({
      title: chapterTitle || (chapterNumber === 0 ? 'Prologue' : `Chapter ${chapterNumber}`),
      content: uploadText,
      chapterNumber,
      scenes,
      sceneCount: scenes.length,
      analyzed: false,
      analyzing: false,
      analysisResults: null,
    });

    onClose();
  };

  const previewScenes = uploadText.trim() ? splitIntoScenes(uploadText, chapterNumber || 0) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-ce-panel border border-ce-border rounded-lg w-[600px] max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-ce-border">
          <h3 className="text-sm font-semibold text-ce-text-bright">Upload Chapter</h3>
          <button onClick={onClose} className="text-ce-text-muted hover:text-ce-text-bright text-lg leading-none">&times;</button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-3 overflow-y-auto">
          {/* Chapter Number + Title */}
          <div className="flex gap-3">
            <div className="w-32">
              <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">
                Chapter # <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                min={0}
                value={chapterNumber}
                onChange={e => setChapterNumber(e.target.value === '' ? '' : parseInt(e.target.value))}
                placeholder={String(nextSuggested)}
                className="w-full px-3 py-2 text-xs bg-ce-body border border-ce-border rounded text-ce-text-bright focus:border-ce-accent outline-none font-mono-readout"
              />
              <div className="text-[8px] text-ce-text-muted mt-0.5">0 = Prologue</div>
            </div>
            <div className="flex-1">
              <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Chapter Title</label>
              <input
                type="text"
                value={chapterTitle}
                onChange={e => setChapterTitle(e.target.value)}
                placeholder="e.g. The Hunter Exam"
                className="w-full px-3 py-2 text-xs bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
              />
            </div>
          </div>

          {/* Existing chapters */}
          {existingChapters.length > 0 && (
            <div className="text-[9px] text-ce-text-muted bg-ce-body rounded px-3 py-2 border border-ce-border-subtle">
              <span className="text-ce-text-bright">Existing chapters:</span>{' '}
              {existingChapters.map(n => (
                <span key={n} className="inline-block px-1.5 py-0.5 bg-ce-panel rounded mr-1 font-mono-readout">{n}</span>
              ))}
              <span className="text-ce-text-muted ml-1">Next: <span className="text-ce-accent font-mono-readout">{nextSuggested}</span></span>
            </div>
          )}

          {/* File upload — accepts DOCX, TXT, MD */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Upload File</label>
            <input
              type="file"
              accept=".docx,.doc,.txt,.md"
              onChange={handleFileUpload}
              className="w-full text-xs text-ce-text-muted file:mr-3 file:py-1 file:px-3 file:rounded file:border file:border-ce-border file:bg-ce-panel file:text-ce-text file:text-xs file:cursor-pointer"
            />
            <div className="text-[8px] text-ce-text-muted mt-0.5">Supported: .docx, .txt, .md</div>
            {parsing && (
              <div className="text-[10px] text-ce-accent mt-1 animate-pulse">Parsing {fileName}...</div>
            )}
            {fileName && !parsing && uploadText && (
              <div className="text-[10px] text-green-400 mt-1">Loaded: {fileName}</div>
            )}
          </div>

          {/* Paste text */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Or Paste Text</label>
            <textarea
              value={uploadText}
              onChange={e => setUploadText(e.target.value)}
              placeholder="Paste your chapter text here..."
              className="w-full h-48 px-3 py-2 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none resize-none font-mono-readout leading-relaxed"
            />
          </div>

          {/* Preview stats */}
          {uploadText.trim() && (
            <div className="text-[9px] text-ce-text-muted bg-ce-body rounded px-3 py-2 border border-ce-border-subtle">
              <span className="text-ce-text-bright">{uploadText.split(/\s+/).length}</span> words
              {' · '}
              <span className="text-ce-text-bright">{previewScenes.length}</span> scene{previewScenes.length !== 1 ? 's' : ''} detected
              {' · '}
              <span className="text-ce-text-bright">{uploadText.split('\n').length}</span> lines
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-[10px] text-red-400 bg-red-900/20 border border-red-500/30 rounded px-3 py-2">
              {error}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t border-ce-border">
          <button onClick={onClose} className="px-4 py-1.5 text-xs text-ce-text-muted hover:text-ce-text border border-ce-border rounded">
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={!uploadText.trim() || chapterNumber === '' || parsing}
            className="px-4 py-1.5 text-xs font-semibold bg-ce-accent text-white rounded disabled:opacity-40"
          >
            Upload Chapter {chapterNumber !== '' ? chapterNumber : ''}
          </button>
        </div>
      </div>
    </div>
  );
}
