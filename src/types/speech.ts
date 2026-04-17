// ============================================
// SPEECH SIGNATURE — per-character voice fingerprint
// ============================================
// Combined output of deterministic client-side stats and a Claude pass.
// Stored per-chapter in character_timeline_entries.voice_scales and
// aggregated into characters.speech_signature as the canonical fingerprint.

export type VocabularyTier = 'academic' | 'formal' | 'colloquial' | 'street' | 'mixed';

export type SentenceStructureBias =
  | 'simple'
  | 'compound'
  | 'complex'
  | 'fragment_heavy';

export interface PunctuationHabits {
  /** All values are per 1000 spoken-or-thought words. */
  em_dash: number;
  ellipsis: number;
  exclamation: number;
  question: number;
  comma: number;
  semicolon: number;
}

export interface SentenceLengthDistribution {
  mean: number;
  p25: number;
  p75: number;
}

export interface RegisterByAudience {
  family: string;
  friend: string;
  rival: string;
  authority: string;
  stranger: string;
}

export interface EmotionalRegisterShifts {
  joy: string;
  sadness: string;
  anger: string;
  fear: string;
  disgust: string;
  surprise: string;
  trust: string;
  anticipation: string;
}

export interface SpeechSignature {
  // ── Lexical fingerprint ─────────────────────────
  vocabulary_tier: VocabularyTier;
  avg_word_length: number;            // 3.0 – 8.0
  vocabulary_diversity: number;       // 0 – 1  (type-token ratio)
  signature_words: string[];          // top ~15 over-indexed words/phrases
  forbidden_words: string[];          // words this character never uses
  profanity_frequency: number;        // 0 – 100 (per 1000 words)
  register_by_audience: RegisterByAudience;

  // ── Syntactic patterns ──────────────────────────
  sentence_length_distribution: SentenceLengthDistribution;
  sentence_structure_bias: SentenceStructureBias;
  punctuation_habits: PunctuationHabits;
  clause_complexity: number;          // 0 – 100
  interruption_rate: number;          // 0 – 100

  // ── Prosodic / phonological ─────────────────────
  contractions: number;               // 0 – 100
  dropped_gs: number;                 // 0 – 100
  dialect_markers: string[];
  verbal_tics: string[];              // recurring phrases
  filler_rate: number;                // per 1000 words
  sentence_openers: string[];         // top ways they start sentences

  // ── Rhetorical posture ──────────────────────────
  rhetorical_questions: number;       // 0 – 100
  imperatives: number;                // 0 – 100
  hedges: number;                     // 0 – 100
  intensifiers: number;               // 0 – 100
  metaphor_density: number;           // 0 – 100
  self_reference_rate: number;        // per 1000 words

  // ── Emotional register shifts ───────────────────
  emotional_register_shifts: EmotionalRegisterShifts;

  // ── Canonical exemplars ─────────────────────────
  signature_lines: string[];          // 5 – 10 verbatim quotes
  internal_vs_external_ratio: number; // 0 – 100 (0 = all external, 100 = all internal)

  // ── Provenance ──────────────────────────────────
  /** Number of speaker tokens this signature was computed from. Used for
   *  recency-weighted aggregation. */
  dialogue_token_count: number;
  /** Chapter number this signature was extracted from (undefined on the
   *  canonical record, which is aggregated across chapters). */
  chapter_number?: number;
}

/** A blank signature used when no data is available. All numeric fields
 *  default to 0 and all string lists to empty arrays. */
export function emptySignature(): SpeechSignature {
  return {
    vocabulary_tier: 'mixed',
    avg_word_length: 0,
    vocabulary_diversity: 0,
    signature_words: [],
    forbidden_words: [],
    profanity_frequency: 0,
    register_by_audience: { family: '', friend: '', rival: '', authority: '', stranger: '' },
    sentence_length_distribution: { mean: 0, p25: 0, p75: 0 },
    sentence_structure_bias: 'simple',
    punctuation_habits: { em_dash: 0, ellipsis: 0, exclamation: 0, question: 0, comma: 0, semicolon: 0 },
    clause_complexity: 0,
    interruption_rate: 0,
    contractions: 0,
    dropped_gs: 0,
    dialect_markers: [],
    verbal_tics: [],
    filler_rate: 0,
    sentence_openers: [],
    rhetorical_questions: 0,
    imperatives: 0,
    hedges: 0,
    intensifiers: 0,
    metaphor_density: 0,
    self_reference_rate: 0,
    emotional_register_shifts: {
      joy: '', sadness: '', anger: '', fear: '', disgust: '',
      surprise: '', trust: '', anticipation: '',
    },
    signature_lines: [],
    internal_vs_external_ratio: 50,
    dialogue_token_count: 0,
  };
}
