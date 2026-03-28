import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ConsistencyIssue {
  severity: 'low' | 'medium' | 'high';
  type: 'voice' | 'behavior' | 'relationship' | 'trait';
  description: string;
  chapters: number[];
  suggestion?: string;
}

interface ConsistencyCheckerProps {
  characterName: string;
  chapterData: Record<number, {
    formality?: number;
    emotionalState?: string;
    dialoguePatterns?: string[];
    relationships?: string;
  }>;
  consistencyFlags?: string[];
  voiceScales?: Record<string, number>;
  chapters: Array<{ number: number }>;
}

export const ConsistencyChecker = ({
  characterName,
  chapterData,
  consistencyFlags = [],
  voiceScales,
  chapters
}: ConsistencyCheckerProps) => {
  const detectIssues = (): ConsistencyIssue[] => {
    const issues: ConsistencyIssue[] = [];
    
    // Check for drastic formality shifts
    const chaptersWithData = chapters.filter(ch => chapterData[ch.number]?.formality !== undefined);
    for (let i = 1; i < chaptersWithData.length; i++) {
      const prev = chaptersWithData[i - 1];
      const curr = chaptersWithData[i];
      const prevFormality = chapterData[prev.number]?.formality || 5;
      const currFormality = chapterData[curr.number]?.formality || 5;
      
      if (Math.abs(prevFormality - currFormality) > 4) {
        issues.push({
          severity: 'high',
          type: 'voice',
          description: `Drastic formality shift from ${prevFormality}/10 to ${currFormality}/10`,
          chapters: [prev.number, curr.number],
          suggestion: `Consider smoothing the transition between chapters ${prev.number} and ${curr.number} to make the voice change feel more organic.`
        });
      } else if (Math.abs(prevFormality - currFormality) > 2) {
        issues.push({
          severity: 'medium',
          type: 'voice',
          description: `Notable formality change from ${prevFormality}/10 to ${currFormality}/10`,
          chapters: [prev.number, curr.number],
          suggestion: `If this shift is intentional, consider adding narrative context to explain ${characterName}'s change in tone.`
        });
      }
    }


    // Convert consistency flags to issues
    consistencyFlags.forEach(flag => {
      issues.push({
        severity: 'medium',
        type: 'trait',
        description: flag,
        chapters: [],
        suggestion: 'Review the flagged chapters and ensure character behavior aligns with their established profile.'
      });
    });

    return issues;
  };

  const issues = detectIssues();
  const highSeverity = issues.filter(i => i.severity === 'high');
  const mediumSeverity = issues.filter(i => i.severity === 'medium');
  const lowSeverity = issues.filter(i => i.severity === 'low');

  // Build comprehensive advice sections even when no explicit issues are detected
  const buildAdvice = () => {
    const sections: Array<{ title: string; items: string[] }> = [];

    // Formality & tone across chapters
    const formalityVals = chapters
      .map((ch) => chapterData[ch.number]?.formality)
      .filter((v): v is number => typeof v === 'number');
    if (formalityVals.length > 0) {
      const avg = Math.round(formalityVals.reduce((a, b) => a + b, 0) / formalityVals.length);
      const max = Math.max(...formalityVals);
      const min = Math.min(...formalityVals);
      const maxDiff = max - min;
      const items = [
        `Average formality across chapters: ${avg}/10 (range ${min}–${max}).`,
        maxDiff > 3
          ? `Large swings detected. Bridge shifts with interior beats or scene stakes when tone changes.`
          : `Variation is subtle. Maintain small cues (punctuation rhythm, fillers) to keep tone coherent.`,
        'When tension rises, gradually tighten sentence rhythm and reduce filler to signal intent.'
      ];
      sections.push({ title: 'Formality & Tone', items });
    }


    // Speech patterns
    const patterns = chapters.flatMap((ch) => chapterData[ch.number]?.dialoguePatterns || []);
    if (patterns.length > 0) {
      const uniq = Array.from(new Set(patterns.map((p) => p.toLowerCase())));
      sections.push({
        title: 'Speech Patterns',
        items: [
          `Recurring patterns: ${uniq.join(', ')}`,
          'Keep signature tics consistent in high‑stress scenes; if suppressed, add an internal cue explaining the restraint.',
          'Use 1–2 anchor phrases or habits per chapter to reinforce voice.'
        ],
      });
    }

    // Voice technique from scales
    if (voiceScales) {
      const vs = voiceScales as Record<string, number>;
      const tips: string[] = [];
      if (typeof vs.masking === 'number') {
        tips.push(
          vs.masking >= 7
            ? 'High masking: surface subtext via evasive answers and deflection; show leakage under pressure.'
            : 'Low masking: let them speak plainly; avoid sudden evasiveness without cause.'
        );
      }
      if (typeof vs.fid_level === 'number') {
        tips.push(
          vs.fid_level >= 7
            ? 'High free‑indirect style: let interior diction color narration; keep lexical choices consistent.'
            : 'Lower FID: keep narration neutral; characterize through dialogue and action beats.'
        );
      }
      if (typeof vs.internal_external === 'number') {
        tips.push(
          vs.internal_external >= 6
            ? 'Internal‑leaning: weave thought beats between lines to carry emotional causality.'
            : 'External‑leaning: rely on action beats and physicality to communicate state.'
        );
      }
      if (tips.length) sections.push({ title: 'Voice Technique', items: tips });
    }

    // Relationship dynamics
    const relChapters = chapters.filter((ch) => !!chapterData[ch.number]?.relationships);
    if (relChapters.length > 0) {
      sections.push({
        title: 'Relationship Dynamics',
        items: [
          'Track power balance and address formal/informal address shifts with a cue (gesture, memory, title).',
          'If a relationship status changes, seed foreshadowing 1–2 scenes earlier to avoid whiplash.'
        ],
      });
    }

    return sections;
  };
  const adviceSections = buildAdvice();

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'medium':
        return <Info className="h-4 w-4 text-amber-500" />;
      case 'low':
        return <CheckCircle2 className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getSeverityBadgeVariant = (severity: string): "destructive" | "secondary" | "outline" => {
    switch (severity) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {issues.length === 0 ? (
            <>
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              No Consistency Issues Detected
            </>
          ) : (
            <>
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Consistency Analysis
            </>
          )}
        </CardTitle>
        <CardDescription>
          {issues.length === 0
            ? `${characterName}'s voice and behavior appear consistent across chapters.`
            : `Found ${issues.length} potential consistency issue${issues.length > 1 ? 's' : ''} for ${characterName}`
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {issues.length === 0 ? (
          <>
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                No critical inconsistencies detected. Here's a tailored breakdown with concrete guidance to keep the voice tight.
              </AlertDescription>
            </Alert>

            {adviceSections.length > 0 && (
              <div className="rounded-md border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950 p-4">
                <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-2">Comprehensive Breakdown & Suggestions</h4>
                <div className="space-y-3">
                  {adviceSections.map((sec, i) => (
                    <div key={i}>
                      <div className="text-sm font-medium text-amber-900 dark:text-amber-100 mb-1">{sec.title}</div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800 dark:text-amber-200">
                        {sec.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {highSeverity.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-destructive flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  High Priority ({highSeverity.length})
                </h4>
                {highSeverity.map((issue, idx) => (
                  <Alert key={idx} variant="destructive">
                    <AlertDescription className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {getSeverityIcon(issue.severity)}
                            <Badge variant={getSeverityBadgeVariant(issue.severity)} className="text-xs">
                              {issue.type}
                            </Badge>
                            {issue.chapters.length > 0 && (
                              <span className="text-xs">Chapters {issue.chapters.join(', ')}</span>
                            )}
                          </div>
                          <p className="text-sm">{issue.description}</p>
                          {issue.suggestion && (
                            <p className="text-sm text-muted-foreground italic mt-1">
                              💡 {issue.suggestion}
                            </p>
                          )}
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            )}

            {mediumSeverity.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Worth Reviewing ({mediumSeverity.length})
                </h4>
                {mediumSeverity.map((issue, idx) => (
                  <Alert key={idx} className="border-amber-200 bg-amber-50 dark:bg-amber-950">
                    <AlertDescription className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {getSeverityIcon(issue.severity)}
                            <Badge variant={getSeverityBadgeVariant(issue.severity)} className="text-xs">
                              {issue.type}
                            </Badge>
                            {issue.chapters.length > 0 && (
                              <span className="text-xs text-amber-800 dark:text-amber-200">
                                Chapters {issue.chapters.join(', ')}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-amber-800 dark:text-amber-200">{issue.description}</p>
                          {issue.suggestion && (
                            <p className="text-sm text-amber-700 dark:text-amber-300 italic mt-1">
                              💡 {issue.suggestion}
                            </p>
                          )}
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            )}

            {lowSeverity.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Minor Notes ({lowSeverity.length})
                </h4>
                {lowSeverity.map((issue, idx) => (
                  <Alert key={idx} className="border-muted">
                    <AlertDescription className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {getSeverityIcon(issue.severity)}
                            <Badge variant={getSeverityBadgeVariant(issue.severity)} className="text-xs">
                              {issue.type}
                            </Badge>
                            {issue.chapters.length > 0 && (
                              <span className="text-xs text-muted-foreground">
                                Chapters {issue.chapters.join(', ')}
                              </span>
                            )}
                          </div>
                          <p className="text-sm">{issue.description}</p>
                          {issue.suggestion && (
                            <p className="text-sm text-muted-foreground italic mt-1">
                              💡 {issue.suggestion}
                            </p>
                          )}
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            )}
            {adviceSections.length > 0 && (
              <div className="rounded-md border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950 p-4">
                <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-2">Comprehensive Breakdown & Suggestions</h4>
                <div className="space-y-3">
                  {adviceSections.map((sec, i) => (
                    <div key={i}>
                      <div className="text-sm font-medium text-amber-900 dark:text-amber-100 mb-1">{sec.title}</div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800 dark:text-amber-200">
                        {sec.items.map((it, j) => (<li key={j}>{it}</li>))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
