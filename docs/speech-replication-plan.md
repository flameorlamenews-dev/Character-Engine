# Speech Replication Plan

Goal: capture enough structured signal about how each character *speaks* that
the engine can synthesize new dialogue indistinguishable from the canon —
and do it chapter-by-chapter so a character's voice in Ch. 1 (naive,
formal) is demonstrably different from Ch. 14 (bitter, clipped).

Today the pipeline records `speechPattern` as a free-text field and stores
a few `dialogue_patterns` per chapter. That's enough to *describe* the
voice; not enough to *reproduce* it. This plan closes that gap.

---

## 1. What to capture (per chapter, per character)

For each analyzed chapter we extract a **SpeechSignature** object. All
numeric fields are 0-100 so the Channel Rack / Producer sliders can edit
them later.

### 1.1 Lexical fingerprint
- `vocabulary_tier`: `academic | formal | colloquial | street | mixed`
- `avg_word_length`: float, 3.0 – 8.0
- `vocabulary_diversity`: type-token ratio 0-1 (computed client-side from the
  text, not Claude — cheap and deterministic)
- `signature_words`: top 15 words/phrases that are statistically
  over-represented in this character's dialogue vs. the manuscript's
  baseline (computed client-side via TF-IDF against all other characters)
- `forbidden_words`: short list of words this character would *never*
  use (Claude extracts; e.g. Vera never says "sorry")
- `profanity_frequency`: 0-100 (per 1000 words spoken)
- `register_by_audience`: `{ family, friend, rival, authority, stranger }`
  each is a one-line style note ("clipped with authority, playful with
  friends")

### 1.2 Syntactic patterns
- `sentence_length_distribution`: `{ mean, p25, p75 }` words per sentence
  (computed client-side)
- `sentence_structure_bias`: `simple | compound | complex | fragment_heavy`
- `punctuation_habits`: object of per-1000-word rates for
  `em_dash, ellipsis, exclamation, question, comma, semicolon`
- `clause_complexity`: 0-100
- `interruption_rate`: how often they cut themselves off mid-thought

### 1.3 Prosodic / phonological
- `contractions`: 0-100 (0 = always "do not", 100 = always "don't")
- `dropped_gs`: 0-100 ("going" vs "goin'")
- `dialect_markers`: string list — regional, class, generational
- `verbal_tics`: string list — actual recurring phrases ("you know",
  "right?", "listen", "look")
- `filler_rate`: per 1000 words — "um", "uh", "like", "so"
- `sentence_openers`: top 10 ways they start a sentence

### 1.4 Rhetorical posture
- `rhetorical_questions`: 0-100 rate
- `imperatives`: 0-100 rate
- `hedges`: 0-100 rate ("maybe", "I guess", "sort of")
- `intensifiers`: 0-100 rate ("really", "absolutely", "fucking")
- `metaphor_density`: 0-100
- `self_reference_rate`: how often "I/me/my" per 1000 words

### 1.5 Emotional register shifts
For each of the 8 base emotions, a one-sentence description of how the
voice mutates when that emotion is dominant. Example for Vera when anger
is dominant: *"Sentences collapse to 4-8 words, em-dashes multiply,
contractions drop, profanity climbs."* These become 8 short style
transforms the synthesizer can apply.

### 1.6 Canonical exemplars
- `signature_lines`: 5-10 verbatim quotes from this chapter that most
  distill the voice
- `internal_vs_external_ratio`: 0-100 (how much of the character's
  chapter presence is in internal thought vs spoken lines)

All of the above lives in a new JSONB column:
`characters.speech_signature` (already added in migration 006 as a stub)
plus per-chapter copies inside
`character_timeline_entries.voice_scales` so we can query voice
evolution.

---

## 2. How to capture it (pipeline changes)

### 2.1 Claude Call #3 — `analyzeSpeechPatterns`
Runs as the third pass in the existing Proxy (`functions.invoke('ai-analyze-manuscript')`),
after the literary and engine calls. Input: raw chapter text (already
loaded), plus the character names extracted by Call #1. Output: a
`SpeechSignature` per character for this chapter.

Why a third call instead of bolting it onto Call #1:
- Call #1's output is already near the 16k-token JSON budget.
- Speech analysis benefits from looking at only the dialogue lines in
  isolation — a narrower, more focused prompt gets better precision.
- Call #3 can be skipped if a chapter has < N dialogue tokens for a
  character (keeps cost down).

Rough prompt shape:
```
You are a linguistic fingerprinting engine. For each character listed
below, extract a SpeechSignature from THEIR dialogue and internal
monologue in this chapter. Quantify — do not describe in prose.

CHAPTER TEXT:
<...>

CHARACTERS: Vera, Ash, Ren

Return JSON: { "signatures": [ { "name": "...", "signature": {...} } ] }
```

### 2.2 Client-side statistics
The three deterministic fields (`sentence_length_distribution`,
`vocabulary_diversity`, `punctuation_habits`) are computed in the
browser before Call #3 fires, using the chapter text and the
`externalDialogue` / `internalDialogue` arrays Call #1 already
extracts. Cheaper, more accurate than asking Claude to count tokens.

We do this in a new `src/services/speech-stats.ts` module:
```
export function computeDeterministicStats(lines: string[]): Partial<SpeechSignature>
```

### 2.3 Storage
- `characters.speech_signature` JSONB — the **canonical** signature.
  Refreshed after every chapter by merging the new per-chapter
  signature into the existing canonical via recency-weighted blending
  (see §3).
- `character_timeline_entries.voice_scales` JSONB — the per-chapter
  signature for this specific chapter. Already present in the schema;
  we'll finally use it.
- Migration 007 will add indexes:
  ```
  CREATE INDEX IF NOT EXISTS char_ts_voice_scales_gin
    ON character_timeline_entries USING gin (voice_scales);
  ```

### 2.4 Backfill
Provide a one-click "Regenerate voice data for all chapters" button in
the author dashboard. This iterates over every (character, chapter)
pair that lacks a signature and runs Call #3 on the cached chapter
content. Cost-capped at 500 calls per click.

---

## 3. Canonical signature aggregation

The per-chapter signatures form a time series. The engine needs both:
- a **canonical** signature that represents "who this character IS" overall
- **per-chapter deltas** so we can honor the voice at chapter X

Aggregation for each numeric field:
```
canonical[field] = Σ (chapter_signature[field] × weight_i) / Σ weight_i
weight_i         = (dialogue_token_count_in_chapter_i) × recency_factor_i
recency_factor_i = 0.5 ** ((latest_chapter - i) / 6)
```
Recency_factor halves every 6 chapters — recent canon matters more than
ancient canon, but old chapters still anchor the voice.

For string-list fields (signature_words, verbal_tics, forbidden_words):
- Take union, rank by total frequency, keep top N.
- A tic that appears in ≥3 chapters is promoted to canonical.

For enum fields (vocabulary_tier): majority vote with tie-breaking to
the most recent.

This lives in `src/services/speech-signature.ts`:
```
export function aggregateSignature(
  perChapter: { chapterIndex: number; dialogueTokens: number; signature: SpeechSignature }[]
): SpeechSignature
```

Triggered after every Call #3. Cached on characters.speech_signature.

---

## 4. Synthesis — replicating speech

Two entry points:
- **Generate in character** (existing TextGenerator UI): uses canonical
  signature + the currently-selected chapter's signature as a voice
  override.
- **Continue this scene** (new): paste a scene fragment, choose a
  character, engine produces the next N lines in their voice for the
  current chapter's emotional state.

Prompt for synthesis:
```
SYSTEM:
You are replicating the speech of <name>. You must produce lines that
a reader would identify as theirs. Use the fingerprint below EXACTLY —
do not paraphrase.

CANONICAL FINGERPRINT (the whole character):
<canonical signature JSON>

CHAPTER CONTEXT (how they sound RIGHT NOW):
<per-chapter signature JSON>
<emotional state from engine: drift + active surges>

SIGNATURE LINES (do not copy verbatim, but match their rhythm):
<5 canonical_exemplars>

AUDIENCE: <target>
SITUATION: <what's happening>

Rules:
- Match sentence_length_distribution within ±1 word of the mean.
- Use contractions at the stated rate.
- Pull from signature_words and verbal_tics; avoid forbidden_words.
- Apply the emotion register shift for the dominant emotion.
- Internal vs external ratio: <value>.

Produce <N> lines of dialogue. No narration.
```

This replaces the current thin prompt in `generateCharacterText()`.

---

## 5. Engine integration

The audio engine can now drive a text-to-speech layer because the
signature is numeric enough:
- `avg_word_length` + `sentence_length_distribution` → cadence
- `contractions` + `dropped_gs` → prosody
- `filler_rate` → pause model
- `intensifiers` + dominant emotion → volume envelope
- `vocabulary_tier` → voice selection (ElevenLabs voice picker per tier)

For the minimum viable voice synth: pipe the synthesized dialogue text
into ElevenLabs with a per-character voice ID stored on
`characters.ai_version_id` (already in schema). The emotional state from
the existing calculator picks the ElevenLabs `stability` and
`similarity_boost` params.

---

## 6. Rollout order

1. **Migration 007** — GIN index on voice_scales + no-op guards (1 hr)
2. **`src/services/speech-stats.ts`** — client-side deterministic stats (2 hrs)
3. **`analyzeSpeechPatterns` in `src/services/claude-api.ts`** — Call #3
   with the prompt above (3 hrs)
4. **Proxy wiring** — integrate Call #3 into the existing analysis flow,
   save per-chapter signatures, aggregate canonical (2 hrs)
5. **Enrich `generateCharacterText`** — new synthesis prompt using both
   canonical and per-chapter signature (2 hrs)
6. **Backfill button** — "Regenerate voice data" in dashboard (1 hr)
7. **ElevenLabs wiring** — only after text synthesis reads well (spike 4 hrs)

Total: ~15 hrs of coding for the text side, +4 for voice.

---

## 7. Quality gates before shipping voice to production

- Blind test: given 10 sentences (5 real canon, 5 synthesized), can a
  reader who knows the book tell them apart? Target ≥ 70% indistinguishable.
- Consistency test: a character's ch.14 synthesis should match ch.14's
  canon tokens more closely than ch.1's canon. Measure with TF-IDF
  cosine similarity.
- Regression test: adding a new chapter shouldn't shift the canonical
  signature by more than 15% on any numeric field unless the character
  has demonstrably changed (measured by engine's personality_drift).

---

## Open questions

1. Do we want a UI for the author to manually pin a signature line
   ("this is the definitive Vera line — never let canonical drift away
   from this")?
2. For multi-POV manuscripts, should the narration voice (not dialogue)
   feed into a separate "narrator signature" per POV character?
3. How should we handle characters that speak in multiple languages /
   code-switch? Signature would need a language field per clause.
