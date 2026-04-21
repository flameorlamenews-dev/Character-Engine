-- Book Buddy integration: richer per-chapter fields for live character chat.
--
-- Adds three columns to character_timeline_entries so the chat Worker can
-- assemble a cumulative, spoiler-safe prompt for the character at chapter N:
--
--   knowledge_at_chapter  Free-text summary: what this character knows /
--                         suspects / is unaware of as of the end of this
--                         chapter. Written cumulatively by the analyzer,
--                         so each row is self-contained.
--
--   notable_actions       JSONB array of one-off textured behaviors unique
--                         to this chapter. Shape: [{action, trigger}, ...].
--                         Distinct from surges (emotional spikes) and
--                         habit_formation (recurring tics).
--
--   reader_tone           JSONB object describing how the character would
--                         address a reader of their story at this chapter.
--                         Shape: {
--                           openingLineOptions: string[],
--                           wouldAnswerOpenly: string,
--                           wouldDeflectAbout: string,
--                           wouldLieAbout: string
--                         }

ALTER TABLE character_timeline_entries
  ADD COLUMN IF NOT EXISTS knowledge_at_chapter TEXT,
  ADD COLUMN IF NOT EXISTS notable_actions JSONB,
  ADD COLUMN IF NOT EXISTS reader_tone JSONB;
