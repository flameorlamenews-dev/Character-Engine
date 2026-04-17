import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SpeechSignature } from "@/types/speech";

interface SpeechSignaturePanelProps {
  canonical: SpeechSignature | null;
  /** Optional: the signature for the currently-selected chapter, shown
   *  side-by-side with the canonical signature. */
  perChapter?: SpeechSignature | null;
  perChapterLabel?: string;
}

function fmt(n: number | undefined | null, digits = 1): string {
  if (n === undefined || n === null || !Number.isFinite(n)) return '—';
  return n.toFixed(digits);
}

function hasData(sig: SpeechSignature | null | undefined): boolean {
  return !!sig && sig.dialogue_token_count > 0;
}

function StatRow({ label, value, suffix }: { label: string; value: string | number; suffix?: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-mono">{value}{suffix ? ` ${suffix}` : ''}</span>
    </div>
  );
}

function SignatureColumn({ sig, title }: { sig: SpeechSignature; title: string }) {
  return (
    <div className="space-y-4">
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{title}</div>

      <div className="space-y-1.5">
        <StatRow label="Vocabulary tier" value={sig.vocabulary_tier} />
        <StatRow label="Avg word length" value={fmt(sig.avg_word_length, 2)} suffix="chars" />
        <StatRow label="Vocab diversity (TTR)" value={fmt(sig.vocabulary_diversity, 3)} />
        <StatRow
          label="Sentence length"
          value={`${fmt(sig.sentence_length_distribution.mean)} (p25=${fmt(sig.sentence_length_distribution.p25)}, p75=${fmt(sig.sentence_length_distribution.p75)})`}
        />
        <StatRow label="Structure bias" value={sig.sentence_structure_bias} />
        <StatRow label="Contractions" value={`${fmt(sig.contractions)}%`} />
        <StatRow label="Dropped g's" value={`${fmt(sig.dropped_gs)}%`} />
        <StatRow label="Filler rate" value={fmt(sig.filler_rate, 2)} suffix="/ 1k words" />
        <StatRow label="Profanity" value={fmt(sig.profanity_frequency, 1)} suffix="/ 1k words" />
        <StatRow label="Self-reference" value={fmt(sig.self_reference_rate, 2)} suffix="/ 1k words" />
        <StatRow label="Rhetorical questions" value={`${fmt(sig.rhetorical_questions, 0)}/100`} />
        <StatRow label="Hedges" value={`${fmt(sig.hedges, 0)}/100`} />
        <StatRow label="Intensifiers" value={`${fmt(sig.intensifiers, 0)}/100`} />
        <StatRow label="Imperatives" value={`${fmt(sig.imperatives, 0)}/100`} />
        <StatRow label="Metaphor density" value={`${fmt(sig.metaphor_density, 0)}/100`} />
        <StatRow label="Internal vs external" value={`${fmt(sig.internal_vs_external_ratio, 0)}% internal`} />
        <StatRow label="Dialogue sample size" value={`${sig.dialogue_token_count} tokens`} />
      </div>

      {sig.signature_words.length > 0 && (
        <div>
          <div className="text-xs font-semibold mb-1">Signature words</div>
          <div className="flex flex-wrap gap-1">
            {sig.signature_words.map((w, i) => (
              <Badge key={`${w}-${i}`} variant="secondary">{w}</Badge>
            ))}
          </div>
        </div>
      )}

      {sig.verbal_tics.length > 0 && (
        <div>
          <div className="text-xs font-semibold mb-1">Verbal tics</div>
          <div className="flex flex-wrap gap-1">
            {sig.verbal_tics.map((t, i) => (
              <Badge key={`${t}-${i}`} variant="outline">{t}</Badge>
            ))}
          </div>
        </div>
      )}

      {sig.forbidden_words.length > 0 && (
        <div>
          <div className="text-xs font-semibold mb-1 text-destructive">Forbidden words</div>
          <div className="flex flex-wrap gap-1">
            {sig.forbidden_words.map((t, i) => (
              <Badge key={`${t}-${i}`} variant="destructive">{t}</Badge>
            ))}
          </div>
        </div>
      )}

      {sig.dialect_markers.length > 0 && (
        <div>
          <div className="text-xs font-semibold mb-1">Dialect markers</div>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            {sig.dialect_markers.map((m, i) => <li key={`${m}-${i}`}>{m}</li>)}
          </ul>
        </div>
      )}

      {sig.sentence_openers.length > 0 && (
        <div>
          <div className="text-xs font-semibold mb-1">Common openers</div>
          <div className="flex flex-wrap gap-1">
            {sig.sentence_openers.map((o, i) => (
              <Badge key={`${o}-${i}`} variant="secondary" className="font-mono text-[10px]">{o}</Badge>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-1">
        <div className="text-xs font-semibold">Register by audience</div>
        <div className="text-xs space-y-1">
          {(['family', 'friend', 'rival', 'authority', 'stranger'] as const).map(k => (
            sig.register_by_audience[k] ? (
              <div key={k}>
                <span className="font-medium capitalize">{k}:</span>{' '}
                <span className="text-muted-foreground">{sig.register_by_audience[k]}</span>
              </div>
            ) : null
          ))}
          {!Object.values(sig.register_by_audience).some(v => v) && (
            <div className="text-muted-foreground italic">No audience-specific register extracted yet.</div>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-xs font-semibold">Emotional register shifts</div>
        <div className="text-xs space-y-1">
          {(['joy', 'sadness', 'anger', 'fear', 'disgust', 'surprise', 'trust', 'anticipation'] as const).map(k => (
            sig.emotional_register_shifts[k] ? (
              <div key={k}>
                <span className="font-medium capitalize">{k}:</span>{' '}
                <span className="text-muted-foreground">{sig.emotional_register_shifts[k]}</span>
              </div>
            ) : null
          ))}
          {!Object.values(sig.emotional_register_shifts).some(v => v) && (
            <div className="text-muted-foreground italic">No emotional-register shifts extracted yet.</div>
          )}
        </div>
      </div>

      {sig.signature_lines.length > 0 && (
        <div>
          <div className="text-xs font-semibold mb-1">Signature lines</div>
          <ul className="space-y-1 text-sm">
            {sig.signature_lines.slice(0, 6).map((line, i) => (
              <li key={i} className="italic text-muted-foreground border-l-2 border-primary/40 pl-2">
                "{line}"
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function SpeechSignaturePanel({ canonical, perChapter, perChapterLabel }: SpeechSignaturePanelProps) {
  if (!hasData(canonical) && !hasData(perChapter)) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Speech Signature</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No speech-signature data yet. Run the manuscript analysis (or re-analyze an
            existing chapter) to extract this character's voice fingerprint.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Speech Signature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`grid gap-8 ${hasData(perChapter) ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
          {hasData(canonical) && canonical && (
            <SignatureColumn sig={canonical} title="Canonical (all chapters aggregated)" />
          )}
          {hasData(perChapter) && perChapter && (
            <SignatureColumn
              sig={perChapter}
              title={perChapterLabel || `Chapter ${perChapter.chapter_number ?? '?'} snapshot`}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
