// ============================================
// SPEECH STATS — client-side deterministic voice metrics
// ============================================
// Computed from extracted dialogue (externalDialogue + internalDialogue
// arrays on each character_timeline_entry) without a Claude call. These
// numbers are objective and cheap — no point asking an LLM to count.

import type {
  SpeechSignature,
  PunctuationHabits,
  SentenceLengthDistribution,
  SentenceStructureBias,
  VocabularyTier,
} from '@/types/speech';

const COMMON_PROFANITY = new Set([
  'fuck', 'fucking', 'fucked', 'shit', 'shitty', 'bitch', 'bastard',
  'damn', 'damned', 'hell', 'ass', 'asshole', 'crap', 'piss',
]);

const FILLER_WORDS = new Set(['um', 'uh', 'er', 'hmm', 'like', 'well', 'so', 'just']);

const HEDGE_WORDS = new Set([
  "maybe", "perhaps", "possibly", "probably", "somewhat",
  "kinda", "sorta", "guess", "suppose", "think",
]);

const INTENSIFIERS = new Set([
  "really", "very", "absolutely", "totally", "completely", "utterly",
  "fucking", "goddamn", "incredibly", "extremely",
]);

/** Strip surrounding quotes and normalize whitespace. Preserves internal
 *  punctuation so downstream stats can count em-dashes, ellipses, etc. */
function cleanLine(line: string): string {
  return line
    .replace(/^[\s"“”‘’'`]+|[\s"“”‘’'`]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Split a body of dialogue into sentences. Handles ..., em-dashes, and
 *  Unicode smart quotes. Empty results are filtered out. */
function splitSentences(text: string): string[] {
  if (!text) return [];
  // Replace ellipses and em-dashes with markers so we don't count them
  // as sentence terminators by accident.
  const normalized = text
    .replace(/\.{2,}/g, '§ELLIPSIS§')
    .replace(/—/g, '§EMDASH§');
  const parts = normalized.split(/([.!?]+)(\s|$)/);
  const sentences: string[] = [];
  for (let i = 0; i < parts.length; i += 3) {
    const chunk = (parts[i] || '').trim();
    const terminator = parts[i + 1] || '';
    if (!chunk) continue;
    sentences.push(
      (chunk + terminator).replace(/§ELLIPSIS§/g, '...').replace(/§EMDASH§/g, '—')
    );
  }
  return sentences;
}

function tokenize(text: string): string[] {
  // Keep contractions and hyphenated words as single tokens.
  return (text.toLowerCase().match(/[a-zA-Z][a-zA-Z'-]*/g) || []);
}

function percentile(sorted: number[], p: number): number {
  if (sorted.length === 0) return 0;
  if (sorted.length === 1) return sorted[0];
  const idx = (sorted.length - 1) * p;
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo];
  return sorted[lo] * (hi - idx) + sorted[hi] * (idx - lo);
}

/** Per-1000-word rate for a count. Returns 0 if wordCount is zero. */
function rate(count: number, wordCount: number): number {
  if (wordCount <= 0) return 0;
  return (count * 1000) / wordCount;
}

function computePunctuation(text: string, wordCount: number): PunctuationHabits {
  const emDash = (text.match(/—/g) || []).length + (text.match(/--/g) || []).length;
  const ellipsis = (text.match(/\.{3,}|…/g) || []).length;
  const exclamation = (text.match(/!/g) || []).length;
  const question = (text.match(/\?/g) || []).length;
  const comma = (text.match(/,/g) || []).length;
  const semicolon = (text.match(/;/g) || []).length;
  return {
    em_dash: rate(emDash, wordCount),
    ellipsis: rate(ellipsis, wordCount),
    exclamation: rate(exclamation, wordCount),
    question: rate(question, wordCount),
    comma: rate(comma, wordCount),
    semicolon: rate(semicolon, wordCount),
  };
}

function computeSentenceLength(sentences: string[]): SentenceLengthDistribution {
  if (sentences.length === 0) return { mean: 0, p25: 0, p75: 0 };
  const lengths = sentences.map(s => tokenize(s).length).filter(n => n > 0).sort((a, b) => a - b);
  if (lengths.length === 0) return { mean: 0, p25: 0, p75: 0 };
  const mean = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  return {
    mean: +mean.toFixed(2),
    p25: +percentile(lengths, 0.25).toFixed(2),
    p75: +percentile(lengths, 0.75).toFixed(2),
  };
}

function inferSentenceBias(lengths: SentenceLengthDistribution, punct: PunctuationHabits): SentenceStructureBias {
  if (lengths.mean < 6) return 'fragment_heavy';
  if (punct.comma > 40 || punct.semicolon > 2) return 'complex';
  if (punct.comma > 20) return 'compound';
  return 'simple';
}

function inferVocabularyTier(tokens: string[], avgWordLength: number): VocabularyTier {
  const unique = new Set(tokens);
  // Heuristic: long average word length + varied vocabulary → formal/academic.
  if (avgWordLength > 5.5 && unique.size / Math.max(1, tokens.length) > 0.5) return 'academic';
  if (avgWordLength > 4.8) return 'formal';
  if (avgWordLength < 3.8) return 'street';
  if (unique.size / Math.max(1, tokens.length) < 0.35) return 'colloquial';
  return 'mixed';
}

/** TF-IDF-ish: words this character uses markedly more than the
 *  manuscript baseline. `speakerTokens` and `baselineTokens` should
 *  be lower-cased arrays. */
function signatureWords(speakerTokens: string[], baselineTokens: string[]): string[] {
  if (speakerTokens.length === 0) return [];

  const speakerFreq: Record<string, number> = {};
  for (const t of speakerTokens) speakerFreq[t] = (speakerFreq[t] || 0) + 1;

  const baselineFreq: Record<string, number> = {};
  for (const t of baselineTokens) baselineFreq[t] = (baselineFreq[t] || 0) + 1;

  const STOP = new Set([
    'the','a','an','and','or','but','of','to','in','on','at','for','with','by','is',
    'was','were','be','been','being','are','am','it','its','this','that','these','those',
    'i','you','he','she','we','they','me','him','her','us','them','my','your','his','our','their',
    'as','if','so','do','does','did','not','no','yes','up','down','out','over','here','there',
  ]);

  const scored: { word: string; score: number }[] = [];
  const totalSpeaker = speakerTokens.length;
  const totalBaseline = Math.max(1, baselineTokens.length);

  for (const [word, count] of Object.entries(speakerFreq)) {
    if (STOP.has(word) || word.length < 3) continue;
    if (count < 2) continue; // noise filter — must appear at least twice
    const speakerRate = count / totalSpeaker;
    const baselineRate = (baselineFreq[word] || 0) / totalBaseline;
    // Smooth to avoid division-by-zero when a word never appears in the baseline.
    const lift = speakerRate / Math.max(baselineRate, 1 / totalBaseline);
    if (lift > 2) {
      scored.push({ word, score: lift * count });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 15).map(s => s.word);
}

/** Find 2-3 word phrases (n-grams) that recur at least 3 times across
 *  the speaker's lines — candidate verbal tics like "you know" or "I mean". */
function repeatingPhrases(lines: string[]): string[] {
  const phraseFreq: Record<string, number> = {};
  for (const line of lines) {
    const tokens = tokenize(line);
    for (let n = 2; n <= 3; n++) {
      for (let i = 0; i + n <= tokens.length; i++) {
        const phrase = tokens.slice(i, i + n).join(' ');
        phraseFreq[phrase] = (phraseFreq[phrase] || 0) + 1;
      }
    }
  }
  return Object.entries(phraseFreq)
    .filter(([, c]) => c >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([p]) => p);
}

function countMatches(tokens: string[], set: Set<string>): number {
  let c = 0;
  for (const t of tokens) if (set.has(t)) c++;
  return c;
}

function countContractions(text: string): number {
  // Count actual apostrophized contractions (don't, you're, I'll, can't,
  // ain't). Excludes possessives like "Sarah's hat" by restricting to
  // known contraction endings.
  const matches = text.match(/\b[a-zA-Z]+'(?:t|s|re|ve|ll|d|m|en)\b/gi) || [];
  // "'s" is ambiguous (possessive vs "is"/"has"). Count half-weight so
  // we don't over-estimate the contraction rate.
  let count = 0;
  for (const m of matches) {
    count += m.toLowerCase().endsWith("'s") ? 0.5 : 1;
  }
  return Math.round(count);
}

// Common -ing words that are NOT present-progressive verbs. We subtract
// these from the dropped-g denominator so the percentage reflects real
// verb endings instead of every word that happens to end in "-ing".
const NON_VERB_ING = new Set([
  'king', 'ring', 'thing', 'bring', 'string', 'spring', 'wing', 'sing',
  'sting', 'swing', 'cling', 'fling', 'sling', 'ping', 'zing', 'wring',
  'anything', 'everything', 'nothing', 'something', 'morning', 'evening',
  'darling', 'ceiling', 'feeling', 'meaning', 'ending', 'beginning',
  'warning', 'offering', 'suffering', 'longing', 'during', 'willing',
  'being', 'seeing', 'saying',
]);

function countDroppedGs(text: string): number {
  return (text.match(/\b\w+in'/g) || []).length;
}

function countIngSites(text: string): number {
  const matches = text.toLowerCase().match(/\b\w+ing\b/gi) || [];
  let sites = 0;
  for (const m of matches) {
    if (!NON_VERB_ING.has(m.toLowerCase())) sites++;
  }
  return sites;
}

function countSelfRefs(tokens: string[]): number {
  const SELF = new Set(['i', "i'm", "i'll", "i've", "i'd", 'me', 'my', 'mine', 'myself']);
  return countMatches(tokens, SELF);
}

function countInterruptions(sentences: string[]): number {
  return sentences.filter(s => s.trimEnd().endsWith('—') || s.includes('...')).length;
}

function getSentenceOpeners(sentences: string[]): string[] {
  const freq: Record<string, number> = {};
  for (const s of sentences) {
    const tokens = tokenize(s);
    if (tokens.length === 0) continue;
    const opener = tokens.slice(0, 2).join(' ');
    freq[opener] = (freq[opener] || 0) + 1;
  }
  return Object.entries(freq)
    .filter(([, c]) => c >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([p]) => p);
}

export interface ComputeInput {
  /** External dialogue lines (spoken). */
  external: string[];
  /** Internal monologue lines (thought). */
  internal: string[];
  /** Tokens from every other character's dialogue in this chapter, used
   *  as the baseline for signature_words. Lower-cased. */
  baselineTokens: string[];
}

/** Compute deterministic speech stats. Returns ONLY the fields we can
 *  measure; qualitative fields (register_by_audience, emotional shifts,
 *  forbidden_words) remain for Claude to fill in. */
export function computeDeterministicStats(input: ComputeInput): Partial<SpeechSignature> {
  const externalText = input.external.map(cleanLine).join(' ');
  const internalText = input.internal.map(cleanLine).join(' ');
  const allText = (externalText + ' ' + internalText).trim();

  if (!allText) return { dialogue_token_count: 0 };

  const tokens = tokenize(allText);
  if (tokens.length === 0) return { dialogue_token_count: 0 };

  const sentences = [
    ...splitSentences(externalText),
    ...splitSentences(internalText),
  ];

  const avgWordLength =
    tokens.reduce((sum, t) => sum + t.length, 0) / tokens.length;
  const unique = new Set(tokens);
  const ttr = unique.size / tokens.length;

  const punct = computePunctuation(allText, tokens.length);
  const sentLen = computeSentenceLength(sentences);
  const structureBias = inferSentenceBias(sentLen, punct);
  const tier = inferVocabularyTier(tokens, avgWordLength);
  const sigWords = signatureWords(tokens, input.baselineTokens || []);
  const tics = repeatingPhrases([...input.external, ...input.internal]);
  const openers = getSentenceOpeners(sentences);

  const profanityCount = countMatches(tokens, COMMON_PROFANITY);
  const fillerCount = countMatches(tokens, FILLER_WORDS);
  const hedgeCount = countMatches(tokens, HEDGE_WORDS);
  const intensifierCount = countMatches(tokens, INTENSIFIERS);
  const selfRefCount = countSelfRefs(tokens);
  const contractionCount = countContractions(allText);
  const droppedGCount = countDroppedGs(allText);
  const interruptionCount = countInterruptions(sentences);

  // Each "rate" field normalizes to per-1000 words, and we clamp to 0-100
  // so it's compatible with the Producer sliders. "Contractions" and
  // "dropped_gs" are expressed as a PERCENT of candidate sites rather than
  // a per-1000-word rate.
  const clampPct = (n: number) => Math.max(0, Math.min(100, n));
  // Contraction sites = the uncontracted forms that COULD have been
  // contracted (do/does/did/cannot/can not/is not/are not/have not/will
  // not/would not/had not + pronoun/noun + is/am/are/have/will/would/had).
  // Matches things like "do not", "I am", "cannot", "they are". This is
  // still a heuristic — pronunciation-level accuracy is the Claude pass's
  // job — but it's better than the old "word + space + aux" pattern that
  // missed negations.
  const uncontractedAux = (allText.match(
    /\b(do\s+not|does\s+not|did\s+not|cannot|can\s+not|will\s+not|would\s+not|had\s+not|is\s+not|are\s+not|am\s+not|have\s+not|has\s+not|could\s+not|should\s+not|must\s+not|shall\s+not|i\s+am|you\s+are|they\s+are|we\s+are|he\s+is|she\s+is|it\s+is|i\s+have|you\s+have|they\s+have|we\s+have|i\s+will|you\s+will|they\s+will|we\s+will|i\s+would|you\s+would|they\s+would|we\s+would)\b/gi,
  ) || []).length;
  const contractionSites = uncontractedAux + contractionCount;
  const contractionPct = contractionSites > 0 ? (contractionCount / contractionSites) * 100 : 0;
  const ingSites = countIngSites(allText) + droppedGCount;
  const droppedGPct = ingSites > 0 ? (droppedGCount / ingSites) * 100 : 0;

  const questionRate = clampPct(punct.question / 5);

  return {
    avg_word_length: +avgWordLength.toFixed(2),
    vocabulary_diversity: +ttr.toFixed(3),
    vocabulary_tier: tier,
    signature_words: sigWords,
    profanity_frequency: clampPct(rate(profanityCount, tokens.length)),
    sentence_length_distribution: sentLen,
    sentence_structure_bias: structureBias,
    punctuation_habits: punct,
    interruption_rate: clampPct(rate(interruptionCount, sentences.length || 1) / 10),
    contractions: +contractionPct.toFixed(1),
    dropped_gs: +droppedGPct.toFixed(1),
    filler_rate: +rate(fillerCount, tokens.length).toFixed(2),
    sentence_openers: openers,
    verbal_tics: tics,
    rhetorical_questions: questionRate,
    imperatives: 0, // Claude fills this (needs semantic understanding)
    hedges: clampPct(rate(hedgeCount, tokens.length) / 5),
    intensifiers: clampPct(rate(intensifierCount, tokens.length) / 5),
    self_reference_rate: +rate(selfRefCount, tokens.length).toFixed(2),
    internal_vs_external_ratio:
      input.external.length + input.internal.length === 0
        ? 50
        : Math.round((internalText.length / (externalText.length + internalText.length)) * 100),
    dialogue_token_count: tokens.length,
  };
}
