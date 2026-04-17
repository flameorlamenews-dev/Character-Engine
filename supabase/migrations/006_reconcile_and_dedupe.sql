-- =============================================
-- 006 — Reconcile characters schema (001 vs 002 collision)
--       + add per-chapter uniqueness for timeline/traits
--       + dedupe existing duplicates
-- =============================================
-- Background: 001 created characters(book_id,...). 002 later did
-- CREATE TABLE IF NOT EXISTS characters(user_id, project_id, manuscript_id, ...).
-- On databases that ran 001 first, the 002 column set never landed and the
-- author pipeline silently fails when it inserts characters with project_id.
-- This migration adds any missing columns (idempotent) and repairs per-chapter
-- data that has duplicated across re-analyses.

-- ── Characters: ensure every column the author pipeline writes exists ──
ALTER TABLE characters ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES profiles(id);
ALTER TABLE characters ADD COLUMN IF NOT EXISTS project_id UUID REFERENCES projects(id);
ALTER TABLE characters ADD COLUMN IF NOT EXISTS manuscript_id UUID REFERENCES manuscripts(id);
ALTER TABLE characters ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS role TEXT;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS source_type TEXT;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS author_edited BOOLEAN;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS blocked BOOLEAN DEFAULT false;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS aggression_level REAL;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS brashness_scale REAL;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS sophistication_scale REAL;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS free_indirect_discourse_level REAL;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS internal_external_filter REAL;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS ai_version_id TEXT;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS mottos TEXT[];
ALTER TABLE characters ADD COLUMN IF NOT EXISTS personality_traits TEXT[];
ALTER TABLE characters ADD COLUMN IF NOT EXISTS speech_patterns JSONB;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS timeline_data JSONB;
ALTER TABLE characters ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();

-- Speech-replication data lives here (used by the voice synthesis engine)
ALTER TABLE characters ADD COLUMN IF NOT EXISTS speech_signature JSONB;

-- Case-insensitive unique index prevents Claude's casing drift from
-- creating duplicate characters (e.g. "John" vs "john") within a project.
CREATE UNIQUE INDEX IF NOT EXISTS characters_project_name_lower_idx
  ON characters (project_id, LOWER(name));

-- ── character_timeline_entries: one row per (character, chapter) ──
-- Step 1: collapse existing duplicates, keeping the most recent entry
DELETE FROM character_timeline_entries a
USING character_timeline_entries b
WHERE a.character_id = b.character_id
  AND a.manuscript_id = b.manuscript_id
  AND a.chapter_number = b.chapter_number
  AND a.updated_at < b.updated_at;

-- Step 2: enforce uniqueness so future UPSERTs work
CREATE UNIQUE INDEX IF NOT EXISTS character_timeline_entries_unique
  ON character_timeline_entries (character_id, manuscript_id, chapter_number);

-- ── character_traits: one row per (character, manuscript, trait) ──
DELETE FROM character_traits a
USING character_traits b
WHERE a.character_id = b.character_id
  AND a.manuscript_id = b.manuscript_id
  AND a.trait = b.trait
  AND a.created_at < b.created_at;

CREATE UNIQUE INDEX IF NOT EXISTS character_traits_unique
  ON character_traits (character_id, manuscript_id, trait);

-- ── world_glossary: one row per (project, word) ──
-- Collapses "same term, multiple chapters" duplicates. Before deleting the
-- dupes we MERGE their appears_in arrays into the surviving row so no
-- chapter attribution is lost. NULL appears_in values are filtered out
-- of the union and the final result defaults to an empty array rather
-- than NULL (downstream filters expect an array).
WITH merged AS (
  SELECT project_id, LOWER(word) AS lw,
         COALESCE(
           (SELECT ARRAY_AGG(DISTINCT x ORDER BY x)
              FROM UNNEST(COALESCE(array_agg(appears_in) FILTER (WHERE appears_in IS NOT NULL), ARRAY[]::int[][])) AS arr,
                   UNNEST(arr) AS x
             WHERE x IS NOT NULL),
           ARRAY[]::int[]
         ) AS combined
  FROM world_glossary
  GROUP BY project_id, LOWER(word)
  HAVING COUNT(*) > 1
)
UPDATE world_glossary g
SET appears_in = m.combined
FROM merged m
WHERE g.project_id = m.project_id
  AND LOWER(g.word) = m.lw
  AND g.id = (
    SELECT id FROM world_glossary g2
    WHERE g2.project_id = m.project_id AND LOWER(g2.word) = m.lw
    ORDER BY g2.created_at ASC LIMIT 1
  );

WITH ranked AS (
  SELECT id, project_id, LOWER(word) AS lw,
         ROW_NUMBER() OVER (PARTITION BY project_id, LOWER(word) ORDER BY created_at ASC) AS rn
  FROM world_glossary
)
DELETE FROM world_glossary
WHERE id IN (SELECT id FROM ranked WHERE rn > 1);

CREATE UNIQUE INDEX IF NOT EXISTS world_glossary_project_word_idx
  ON world_glossary (project_id, LOWER(word));

-- ── Relationships: one row per (character, target) ──
-- The Proxy deletes all rows for a character then re-inserts, so a unique
-- constraint is cheap insurance.
DELETE FROM relationships a
USING relationships b
WHERE a.character_id = b.character_id
  AND LOWER(a.target_name) = LOWER(b.target_name)
  AND a.id < b.id;

CREATE UNIQUE INDEX IF NOT EXISTS relationships_char_target_idx
  ON relationships (character_id, LOWER(target_name));

-- ── Surges: one row per (character, chapter, scene_position, emotion) ──
-- Re-analysis should REPLACE rather than append, but without a unique
-- constraint duplicates silently accumulate.
DELETE FROM surges a
USING surges b
WHERE a.character_id = b.character_id
  AND a.chapter_index = b.chapter_index
  AND a.emotion_type = b.emotion_type
  AND a.scene_position = b.scene_position
  AND a.id < b.id;

-- Note: no unique constraint here because one chapter can legitimately have
-- multiple distinct surges for the same emotion (e.g. joy spikes at scene
-- position 0.2 and 0.7). The Proxy deletes-per-chapter before re-inserting.
