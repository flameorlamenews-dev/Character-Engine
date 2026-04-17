// ============================================
// SPEECH SIGNATURE — canonical aggregation
// ============================================
// Aggregates per-chapter SpeechSignature rows into ONE canonical
// signature that represents who the character fundamentally is.
//
// Weighting: chapters contribute proportional to their dialogue token
// count (a chapter with 2000 spoken words outweighs one with 50) and
// with recency decay — halve every 6 chapters so recent canon matters
// more than ancient canon.

import type { SpeechSignature, VocabularyTier, SentenceStructureBias, EmotionalRegisterShifts, RegisterByAudience } from '@/types/speech';
import { emptySignature } from '@/types/speech';

export interface PerChapterSignature {
  chapterIndex: number;
  signature: SpeechSignature;
}

const RECENCY_HALF_LIFE_CHAPTERS = 6;

function recencyFactor(latestChapter: number, thisChapter: number): number {
  const distance = Math.max(0, latestChapter - thisChapter);
  return Math.pow(0.5, distance / RECENCY_HALF_LIFE_CHAPTERS);
}

function weightedMean(values: Array<{ value: number; weight: number }>): number {
  const wSum = values.reduce((s, v) => s + v.weight, 0);
  if (wSum <= 0) return 0;
  const vSum = values.reduce((s, v) => s + v.value * v.weight, 0);
  return vSum / wSum;
}

function majorityVote<T extends string>(
  choices: Array<{ value: T; weight: number }>,
  fallback: T,
): T {
  if (choices.length === 0) return fallback;
  const tally: Record<string, number> = {};
  for (const c of choices) tally[c.value] = (tally[c.value] || 0) + c.weight;
  let best: T | null = null;
  let bestWeight = -Infinity;
  for (const [k, w] of Object.entries(tally)) {
    if (w > bestWeight) { bestWeight = w; best = k as T; }
  }
  return best ?? fallback;
}

function unionByFrequency(
  lists: Array<{ items: string[]; weight: number; minChaptersSeen?: number }>,
  topN: number,
  minChapters = 1,
): string[] {
  const freq: Record<string, { weight: number; chapters: Set<number> }> = {};
  lists.forEach((l, idx) => {
    for (const item of l.items) {
      if (!item) continue;
      const key = item.trim().toLowerCase();
      if (!key) continue;
      if (!freq[key]) freq[key] = { weight: 0, chapters: new Set() };
      freq[key].weight += l.weight;
      freq[key].chapters.add(idx);
    }
  });
  return Object.entries(freq)
    .filter(([, info]) => info.chapters.size >= minChapters)
    .sort((a, b) => b[1].weight - a[1].weight)
    .slice(0, topN)
    .map(([k]) => k);
}

/** Aggregate per-chapter signatures into a canonical signature.
 *  Returns an empty signature if the input array is empty. */
export function aggregateSignature(rows: PerChapterSignature[]): SpeechSignature {
  if (!rows || rows.length === 0) return emptySignature();

  const latestChapter = rows.reduce((max, r) => Math.max(max, r.chapterIndex), 0);
  const weighted = rows.map(r => {
    const tokens = Math.max(1, r.signature.dialogue_token_count || 0);
    const weight = tokens * recencyFactor(latestChapter, r.chapterIndex);
    return { row: r, weight };
  });

  const num = (fn: (s: SpeechSignature) => number) =>
    weightedMean(weighted.map(w => ({ value: fn(w.row.signature), weight: w.weight })));

  const canonical: SpeechSignature = {
    ...emptySignature(),
    vocabulary_tier: majorityVote<VocabularyTier>(
      weighted.map(w => ({ value: w.row.signature.vocabulary_tier, weight: w.weight })),
      'mixed',
    ),
    avg_word_length: +num(s => s.avg_word_length).toFixed(2),
    vocabulary_diversity: +num(s => s.vocabulary_diversity).toFixed(3),
    signature_words: unionByFrequency(
      weighted.map(w => ({ items: w.row.signature.signature_words, weight: w.weight })),
      15,
      1,
    ),
    forbidden_words: unionByFrequency(
      weighted.map(w => ({ items: w.row.signature.forbidden_words, weight: w.weight })),
      10,
      2, // must appear in ≥2 chapter signatures to promote to canonical
    ),
    profanity_frequency: +num(s => s.profanity_frequency).toFixed(2),
    register_by_audience: mergeRegisters(weighted.map(w => ({
      register: w.row.signature.register_by_audience, weight: w.weight, chapter: w.row.chapterIndex,
    }))),
    sentence_length_distribution: {
      mean: +num(s => s.sentence_length_distribution.mean).toFixed(2),
      p25: +num(s => s.sentence_length_distribution.p25).toFixed(2),
      p75: +num(s => s.sentence_length_distribution.p75).toFixed(2),
    },
    sentence_structure_bias: majorityVote<SentenceStructureBias>(
      weighted.map(w => ({ value: w.row.signature.sentence_structure_bias, weight: w.weight })),
      'simple',
    ),
    punctuation_habits: {
      em_dash: +num(s => s.punctuation_habits.em_dash).toFixed(2),
      ellipsis: +num(s => s.punctuation_habits.ellipsis).toFixed(2),
      exclamation: +num(s => s.punctuation_habits.exclamation).toFixed(2),
      question: +num(s => s.punctuation_habits.question).toFixed(2),
      comma: +num(s => s.punctuation_habits.comma).toFixed(2),
      semicolon: +num(s => s.punctuation_habits.semicolon).toFixed(2),
    },
    clause_complexity: +num(s => s.clause_complexity).toFixed(1),
    interruption_rate: +num(s => s.interruption_rate).toFixed(1),
    contractions: +num(s => s.contractions).toFixed(1),
    dropped_gs: +num(s => s.dropped_gs).toFixed(1),
    dialect_markers: unionByFrequency(
      weighted.map(w => ({ items: w.row.signature.dialect_markers, weight: w.weight })),
      8,
      1,
    ),
    verbal_tics: unionByFrequency(
      weighted.map(w => ({ items: w.row.signature.verbal_tics, weight: w.weight })),
      10,
      2, // must appear in ≥2 chapters to be canonical
    ),
    filler_rate: +num(s => s.filler_rate).toFixed(2),
    sentence_openers: unionByFrequency(
      weighted.map(w => ({ items: w.row.signature.sentence_openers, weight: w.weight })),
      10,
      1,
    ),
    rhetorical_questions: +num(s => s.rhetorical_questions).toFixed(1),
    imperatives: +num(s => s.imperatives).toFixed(1),
    hedges: +num(s => s.hedges).toFixed(1),
    intensifiers: +num(s => s.intensifiers).toFixed(1),
    metaphor_density: +num(s => s.metaphor_density).toFixed(1),
    self_reference_rate: +num(s => s.self_reference_rate).toFixed(2),
    emotional_register_shifts: mergeEmotionalShifts(
      weighted.map(w => ({ shifts: w.row.signature.emotional_register_shifts, weight: w.weight, chapter: w.row.chapterIndex })),
    ),
    signature_lines: pickBestLines(weighted.map(w => ({
      lines: w.row.signature.signature_lines, weight: w.weight, chapter: w.row.chapterIndex,
    }))),
    internal_vs_external_ratio: +num(s => s.internal_vs_external_ratio).toFixed(1),
    dialogue_token_count: rows.reduce((s, r) => s + (r.signature.dialogue_token_count || 0), 0),
    chapter_number: undefined,
  };

  return canonical;
}

/** For each audience slot, pick the description from the most recent
 *  chapter that had one, falling back to older chapters if missing. */
function mergeRegisters(
  rows: Array<{ register: RegisterByAudience; weight: number; chapter: number }>,
): RegisterByAudience {
  const keys: Array<keyof RegisterByAudience> = ['family', 'friend', 'rival', 'authority', 'stranger'];
  const result = { family: '', friend: '', rival: '', authority: '', stranger: '' };
  const sorted = [...rows].sort((a, b) => b.chapter - a.chapter);
  for (const k of keys) {
    for (const r of sorted) {
      const v = r.register?.[k];
      if (v && v.trim()) { (result as any)[k] = v.trim(); break; }
    }
  }
  return result;
}

/** Same strategy as mergeRegisters but for the 8-emotion block. */
function mergeEmotionalShifts(
  rows: Array<{ shifts: EmotionalRegisterShifts; weight: number; chapter: number }>,
): EmotionalRegisterShifts {
  const keys: Array<keyof EmotionalRegisterShifts> = [
    'joy', 'sadness', 'anger', 'fear', 'disgust', 'surprise', 'trust', 'anticipation',
  ];
  const result: EmotionalRegisterShifts = {
    joy: '', sadness: '', anger: '', fear: '', disgust: '', surprise: '', trust: '', anticipation: '',
  };
  const sorted = [...rows].sort((a, b) => b.chapter - a.chapter);
  for (const k of keys) {
    for (const r of sorted) {
      const v = r.shifts?.[k];
      if (v && v.trim()) { (result as any)[k] = v.trim(); break; }
    }
  }
  return result;
}

/** Canonical signature keeps the most recent 5 signature lines,
 *  deduped. Older lines bubble up only if recent chapters had none. */
function pickBestLines(
  rows: Array<{ lines: string[]; weight: number; chapter: number }>,
): string[] {
  const sorted = [...rows].sort((a, b) => b.chapter - a.chapter);
  const out: string[] = [];
  const seen = new Set<string>();
  for (const r of sorted) {
    for (const line of r.lines || []) {
      const clean = line.trim();
      if (!clean || seen.has(clean.toLowerCase())) continue;
      seen.add(clean.toLowerCase());
      out.push(clean);
      if (out.length >= 8) return out;
    }
  }
  return out;
}
