-- =============================================
-- CHARACTER ENGINE — Voice-layer extensions (Drop 2)
-- =============================================
-- Columns consumed by Book Buddy Worker prompt builder (audio Claude):
--   character_style_rules:  avg_sentence_length_words, sentence_length_stddev,
--                           max_sentence_length_words, profanity_level,
--                           profanity_vocabulary
--   character_verbal_tics:  phrase, context, frequency_hint
--   characters:             active_hours_local, activity_pattern_note
--   manuscripts:            engine_errors (observability for Pass 2 writer)
--
-- Do not drop or rename any of the above columns without syncing with
-- audio Claude — the worker prompt builder has matching formatter call sites.
--
-- NUMERIC SCALE CONVENTIONS (engine-wide, locked):
--   character_voice_scales.* integer columns:     0-75 (midpoint 37)
--   character_audience_mods.{brevity,deference,defiance,warmth}: 0-75 (midpoint 37)
--   character_conflict_profile.truth_bias:        0-75 (midpoint 37)
--   character_style_rules.{avg,max}_sentence_length_words: raw word count
--   character_style_rules.sentence_length_stddev: raw float stddev
--   temperament_grids.*, emotional_baselines.*, moral_structures.*,
--     general_traits.*, influence_sliders.*, desires.score,
--     conditional_traits.intensity_score/override_strength: 0-75
--   surges.peak_intensity/stakes/immediacy/certainty: see 001 (mixed)
--   DISTINCT from timeline_entries.voice_scales JSONB (legacy 0-10 scale,
--     written by Pass 1 — not the same surface). Voice layer moving forward
--     is 0-75 throughout the character_voice_scales TABLE.

-- Statistical sentence-length metrics + profanity enrichment on style_rules
ALTER TABLE character_style_rules
  ADD COLUMN IF NOT EXISTS avg_sentence_length_words INTEGER,
  ADD COLUMN IF NOT EXISTS sentence_length_stddev REAL,
  ADD COLUMN IF NOT EXISTS max_sentence_length_words INTEGER,
  ADD COLUMN IF NOT EXISTS profanity_level TEXT
    CHECK (profanity_level IN ('none','mild','moderate','heavy')),
  ADD COLUMN IF NOT EXISTS profanity_vocabulary TEXT[];

-- Verbal tics: recurring fillers, exclamations, catchphrases (not mottos)
CREATE TABLE IF NOT EXISTS character_verbal_tics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  manuscript_id UUID REFERENCES manuscripts(id) ON DELETE CASCADE,
  phrase TEXT NOT NULL,
  context TEXT,
  frequency_hint TEXT CHECK (frequency_hint IN ('low','med','high')),
  source_type TEXT NOT NULL DEFAULT 'ai',
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS character_verbal_tics_character_id_idx
  ON character_verbal_tics(character_id);

ALTER TABLE character_verbal_tics ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read access" ON character_verbal_tics;
CREATE POLICY "Public read access" ON character_verbal_tics FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON character_verbal_tics;
CREATE POLICY "Public write access" ON character_verbal_tics FOR ALL USING (true) WITH CHECK (true);

-- Active-hours metadata on characters (one-shot, not per-chapter)
ALTER TABLE characters
  ADD COLUMN IF NOT EXISTS active_hours_local TEXT DEFAULT 'all-day',
  ADD COLUMN IF NOT EXISTS activity_pattern_note TEXT;

-- Observability: accumulate per-table Pass 2 failures here instead of
-- swallowing them in a try/catch. Surfaced in the author UI.
ALTER TABLE manuscripts
  ADD COLUMN IF NOT EXISTS engine_errors JSONB;
