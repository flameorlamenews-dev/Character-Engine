-- =============================================
-- 007 — Speech signature storage
-- =============================================
-- The speech replication pipeline needs two things: per-chapter voice
-- data (stored inside character_timeline_entries.voice_scales — already
-- a JSONB column) and a canonical fingerprint on the character row.
-- Migration 006 already added characters.speech_signature; here we
-- confirm the column exists, add a GIN index so the engine can query
-- voice_scales quickly, and add characters.speech_canonical_updated_at
-- so we can tell when a canonical was last recomputed.

-- Column guard — 006 added this but run again idempotently for dbs
-- that only ran 001-005.
ALTER TABLE characters ADD COLUMN IF NOT EXISTS speech_signature JSONB;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS speech_canonical_updated_at TIMESTAMPTZ;

-- Let the engine filter by fields inside voice_scales (e.g. find
-- chapters where a character was a fragment-heavy speaker).
CREATE INDEX IF NOT EXISTS character_timeline_voice_scales_gin
  ON character_timeline_entries USING GIN (voice_scales);

CREATE INDEX IF NOT EXISTS characters_speech_signature_gin
  ON characters USING GIN (speech_signature);
