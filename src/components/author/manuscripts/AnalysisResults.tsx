import type { AnalysisResults as AnalysisType } from '../../../stores/author-store';

interface Props {
  analysis: AnalysisType;
}

export function AnalysisResults({ analysis }: Props) {
  return (
    <div className="space-y-5">
      {/* Synopsis */}
      {analysis.summary && (
        <section className="bg-ce-panel rounded border border-ce-border p-4">
          <h4 className="text-xs font-semibold text-ce-text-bright mb-2 flex items-center gap-2">
            <span className="text-ce-accent">&#9670;</span> Chapter Synopsis
          </h4>
          <p className="text-[11px] text-ce-text leading-relaxed">{analysis.summary}</p>
        </section>
      )}

      {/* Character Impressions */}
      {analysis.characterImpressions && (
        <section className="bg-ce-panel rounded border border-ce-border p-4">
          <h4 className="text-xs font-semibold text-ce-text-bright mb-2 flex items-center gap-2">
            <span className="text-ce-accent">&#9670;</span> AI First Impressions
          </h4>
          <div className="text-[11px] text-ce-text leading-relaxed whitespace-pre-wrap">
            {analysis.characterImpressions}
          </div>
        </section>
      )}

      {/* New Characters */}
      {analysis.newCharacters && analysis.newCharacters.length > 0 && (
        <section className="bg-ce-panel rounded border border-ce-border p-4">
          <h4 className="text-xs font-semibold text-ce-text-bright mb-3 flex items-center gap-2">
            <span className="text-green-400">+</span> Newly Introduced Characters
          </h4>
          <div className="space-y-3">
            {analysis.newCharacters.map((c, i) => (
              <div key={i} className="border-l-2 border-ce-accent pl-3">
                <span className="text-[11px] font-semibold text-ce-accent">{c.name}</span>
                <p className="text-[10px] text-ce-text-muted mt-0.5">{c.firstImpressions}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recurring Characters */}
      {analysis.recurringCharacters && analysis.recurringCharacters.length > 0 && (
        <section className="bg-ce-panel rounded border border-ce-border p-4">
          <h4 className="text-xs font-semibold text-ce-text-bright mb-3 flex items-center gap-2">
            <span className="text-blue-400">~</span> Recurring Characters
          </h4>
          <div className="space-y-3">
            {analysis.recurringCharacters.map((c, i) => (
              <div key={i} className="border-l-2 border-blue-400/40 pl-3">
                <span className="text-[11px] font-semibold text-ce-text-bright">{c.name}</span>
                <p className="text-[10px] text-ce-text-muted mt-0.5">{c.evolution}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Character Arcs */}
      {analysis.characterArcs && analysis.characterArcs.length > 0 && (
        <section className="bg-ce-panel rounded border border-ce-border p-4">
          <h4 className="text-xs font-semibold text-ce-text-bright mb-3 flex items-center gap-2">
            <span className="text-ce-accent">&#8599;</span> Character Development Arcs
          </h4>
          <div className="space-y-4">
            {analysis.characterArcs.map((arc, i) => (
              <div key={i} className="border-l-2 border-ce-accent/30 pl-3">
                <span className="text-[11px] font-semibold text-ce-text-bright">{arc.character}</span>
                <p className="text-[10px] text-ce-text-muted mt-0.5">{arc.overallDevelopment}</p>
                {arc.keyMoments && arc.keyMoments.length > 0 && (
                  <div className="mt-2 space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-ce-text-muted">Key moments</span>
                    {arc.keyMoments.map((m, j) => (
                      <div key={j} className="text-[9px] text-ce-text bg-ce-body rounded px-2 py-1 border border-ce-border-subtle">{m}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Voice Consistency Analysis */}
      {analysis.consistencyAnalysis && (
        <section className="bg-ce-panel rounded border border-ce-border p-4">
          <h4 className="text-xs font-semibold text-ce-text-bright mb-2 flex items-center gap-2">
            <span className="text-yellow-400">!</span> Voice Consistency Overview
          </h4>
          <div className="text-[11px] text-ce-text leading-relaxed whitespace-pre-wrap">
            {analysis.consistencyAnalysis}
          </div>
        </section>
      )}

      {/* Consistency Issues */}
      {analysis.consistencyIssues && analysis.consistencyIssues.length > 0 && (
        <section className="bg-ce-panel rounded border border-red-500/30 p-4">
          <h4 className="text-xs font-semibold text-red-400 mb-3">
            Consistency Issues ({analysis.consistencyIssues.length})
          </h4>
          <div className="space-y-3">
            {analysis.consistencyIssues.map((issue, i) => (
              <div key={i} className="bg-red-900/10 border border-red-500/20 rounded p-3">
                <div className="text-[11px] font-semibold text-ce-text-bright mb-1">
                  {issue.character}{issue.chapter != null && ` — Chapter ${issue.chapter}`}
                </div>
                <p className="text-[10px] text-ce-text-muted">{issue.issue}</p>
                {issue.examples && issue.examples.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {issue.examples.map((ex, j) => (
                      <div key={j} className="text-[9px] text-ce-text-muted italic bg-ce-body rounded px-2 py-1">
                        "{ex}"
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {!analysis.summary && !analysis.characterImpressions && !analysis.consistencyAnalysis &&
       (!analysis.newCharacters || analysis.newCharacters.length === 0) &&
       (!analysis.characterArcs || analysis.characterArcs.length === 0) && (
        <div className="text-center py-8 text-[11px] text-ce-text-muted">
          No analysis data available yet. Click "Analyze with Claude" to generate results.
        </div>
      )}
    </div>
  );
}
