import { useState } from 'react';
import { useAuthorStore } from '../../../stores/author-store';

interface Props {
  characterId: string;
  characterName: string;
}

const AUDIENCES = ['(none)', 'Friend', 'Rival', 'Superior', 'Subordinate', 'Stranger', 'Love Interest'];
const EMOTIONS = ['Neutral', 'Fear', 'Anger', 'Grief', 'Joy', 'Jealousy', 'Triumph'];

export function TextGenerator({ characterId: _characterId, characterName }: Props) {
  void _characterId; // reserved for future Claude API call
  const store = useAuthorStore();

  const [prompt, setPrompt] = useState('');
  const [audience, setAudience] = useState('');
  const [emotion, setEmotion] = useState('');
  const [situation, setSituation] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    if (!store.claudeApiKey) {
      alert('Please set your Claude API key first (top-right corner of the Author tab).');
      return;
    }

    setLoading(true);
    // Placeholder — replace with real Claude API call
    setTimeout(() => {
      setGeneratedText(
        `[Claude API placeholder]\n\nCharacter: ${characterName}\nPrompt: ${prompt}\nAudience: ${audience || 'any'}\nEmotion: ${emotion || 'neutral'}\n\nThis is where Claude would generate text in ${characterName}'s voice using their profile data. Connect your Claude API key and implement the call to see real results.`
      );
      setLoading(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
  };

  return (
    <div className="space-y-4">
      {/* Prompt */}
      <div>
        <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">
          What should {characterName} say or do? *
        </label>
        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder={`e.g. "Respond to an insult from a rival" or "React to discovering a betrayal"`}
          className="w-full h-20 px-3 py-2 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none resize-none"
        />
      </div>

      {/* Options row */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Speaking to</label>
          <select
            value={audience}
            onChange={e => setAudience(e.target.value)}
            className="w-full px-2 py-1.5 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
          >
            <option value="">Select...</option>
            {AUDIENCES.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Emotional state</label>
          <select
            value={emotion}
            onChange={e => setEmotion(e.target.value)}
            className="w-full px-2 py-1.5 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
          >
            <option value="">Select...</option>
            {EMOTIONS.map(e => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-widest text-ce-text-muted mb-1 block">Context</label>
          <input
            type="text"
            value={situation}
            onChange={e => setSituation(e.target.value)}
            placeholder="Brief scene context..."
            className="w-full px-2 py-1.5 text-[10px] bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
          />
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={loading || !prompt.trim()}
        className="w-full px-4 py-2 text-xs font-semibold rounded bg-ce-accent text-white hover:bg-ce-accent/90 disabled:opacity-40 transition-colors"
      >
        {loading ? 'Generating...' : 'Generate with Claude'}
      </button>

      {/* Output */}
      {generatedText && (
        <div className="bg-ce-body border border-ce-border rounded p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-widest text-ce-text-muted">Generated Text</span>
            <button onClick={handleCopy} className="text-[9px] text-ce-accent hover:text-ce-accent/80">Copy</button>
          </div>
          <div className="text-[11px] text-ce-text leading-relaxed whitespace-pre-wrap font-mono-readout">
            {generatedText}
          </div>
        </div>
      )}
    </div>
  );
}
