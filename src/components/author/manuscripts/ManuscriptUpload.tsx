import { useState } from 'react';
import { useAuthorStore, splitIntoScenes } from '../../../stores/author-store';

interface Props {
  onClose: () => void;
}

export function ManuscriptUpload({ onClose }: Props) {
  const store = useAuthorStore();
  const [uploadText, setUploadText] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.name.endsWith('.txt') || file.name.endsWith('.md')) {
      const text = await file.text();
      setUploadText(text);
    } else {
      alert('Please upload .txt or .md files.');
    }
  };

  const handleUpload = () => {
    if (!uploadText.trim()) return;
    const chapterNum = store.manuscripts.length + 1;
    const scenes = splitIntoScenes(uploadText, chapterNum);

    store.addManuscript({
      title: chapterTitle || `Chapter ${chapterNum}`,
      content: uploadText,
      chapterNumber: chapterNum,
      scenes,
      sceneCount: scenes.length,
      analyzed: false,
      analyzing: false,
      analysisResults: null,
    });

    onClose();
  };

  const previewScenes = uploadText.trim() ? splitIntoScenes(uploadText, 0) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-ce-panel border border-ce-border rounded-lg w-[600px] max-h-[80vh] flex flex-col">
        {/* header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-ce-border">
          <h3 className="text-sm font-semibold text-ce-text-bright">Upload Chapter</h3>
          <button onClick={onClose} className="text-ce-text-muted hover:text-ce-text-bright text-lg leading-none">&times;</button>
        </div>

        {/* body */}
        <div className="p-4 space-y-3 overflow-y-auto">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Chapter Title</label>
            <input
              type="text"
              value={chapterTitle}
              onChange={e => setChapterTitle(e.target.value)}
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
              onChange={e => setUploadText(e.target.value)}
              placeholder="Paste your chapter text here..."
              className="w-full h-48 px-3 py-2 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none resize-none font-mono-readout leading-relaxed"
            />
          </div>

          {uploadText.trim() && (
            <div className="text-[9px] text-ce-text-muted">
              {uploadText.split(/\s+/).length} words &middot; {previewScenes.length} scene{previewScenes.length !== 1 ? 's' : ''} detected
            </div>
          )}
        </div>

        {/* footer */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t border-ce-border">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs text-ce-text-muted hover:text-ce-text border border-ce-border rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={!uploadText.trim()}
            className="px-4 py-1.5 text-xs font-semibold bg-ce-accent text-white rounded disabled:opacity-40"
          >
            Upload Chapter
          </button>
        </div>
      </div>
    </div>
  );
}
