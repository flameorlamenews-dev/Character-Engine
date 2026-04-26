-- =============================================
-- Migration 010 — Character unmerge + cascading delete
-- =============================================
-- Two related changes:
--
-- 1. Soft-merge with audit: characters.merged_into + character_merge_audit
--    table track which character was merged into which, and which child
--    rows were moved. Replaces the destructive "DELETE A; UPDATE A's
--    children to point at B" pattern with a reversible one. Active queries
--    must filter `WHERE merged_into IS NULL` to hide soft-merged sources
--    (filter applied at the query layer in code, not via view, because
--    20+ call sites need different shapes).
--
-- 2. Cascade FKs on the 9 author-schema voice-layer tables in migration
--    002 that reference characters(id) without ON DELETE CASCADE. Today
--    a `DELETE FROM characters` fails with FK violation 23503; making
--    these CASCADE lets a one-step character delete succeed without the
--    handler having to manually clean up 14+ child tables.
--
-- Atomic merge/unmerge live as Postgres functions to prevent concurrent-
-- merge data corruption (two browser tabs racing on the same source row).
--
-- Pre-existing destructive merges (from before this migration) cannot be
-- recovered — those source rows are gone and there's no audit trail. The
-- Merged tab UI surfaces this fact.

-- ─── 1. Soft-merge state on characters ───────────────────────────────────

-- ON DELETE RESTRICT (not SET NULL): blocks deleting a character that has
-- soft-merged sources pointing at it. Without RESTRICT, deleting B would
-- null A.merged_into and resurrect A in Active tab — but A's data already
-- moved into B and was just cascade-destroyed. Forcing the user to unmerge
-- A first preserves their data and gives them a deliberate decision.
ALTER TABLE characters
  ADD COLUMN IF NOT EXISTS merged_into UUID REFERENCES characters(id) ON DELETE RESTRICT,
  ADD COLUMN IF NOT EXISTS merged_at TIMESTAMPTZ;

-- A character can never be merged into itself.
ALTER TABLE characters DROP CONSTRAINT IF EXISTS characters_no_self_merge;
ALTER TABLE characters ADD CONSTRAINT characters_no_self_merge
  CHECK (merged_into IS NULL OR merged_into <> id);

-- merged_into and merged_at are coupled — both null or both set.
ALTER TABLE characters DROP CONSTRAINT IF EXISTS characters_merge_state_consistent;
ALTER TABLE characters ADD CONSTRAINT characters_merge_state_consistent
  CHECK ((merged_into IS NULL) = (merged_at IS NULL));

-- Partial index for the common "show me merged characters" query.
CREATE INDEX IF NOT EXISTS characters_merged_into_idx
  ON characters(merged_into) WHERE merged_into IS NOT NULL;

-- ─── 2. Audit table tracks every child row moved during a merge ──────────

CREATE TABLE IF NOT EXISTS character_merge_audit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  target_character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  table_name TEXT NOT NULL,
  child_row_id UUID NOT NULL,
  merged_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS character_merge_audit_source_idx
  ON character_merge_audit(source_character_id);
CREATE INDEX IF NOT EXISTS character_merge_audit_target_idx
  ON character_merge_audit(target_character_id);

ALTER TABLE character_merge_audit ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read access" ON character_merge_audit;
CREATE POLICY "Public read access" ON character_merge_audit FOR SELECT USING (true);
DROP POLICY IF EXISTS "Public write access" ON character_merge_audit;
CREATE POLICY "Public write access" ON character_merge_audit FOR ALL USING (true) WITH CHECK (true);

-- ─── 3. ON DELETE CASCADE on author-schema voice-layer FKs ───────────────
-- Without this, a one-step character delete fails 23503 because these 9
-- tables RESTRICT. With CASCADE, deleting a character cleanly removes
-- its child rows in one statement. Migration-001 engine tables already
-- have ON DELETE CASCADE; migration-008 character_verbal_tics already
-- does too.

DO $$
DECLARE
  fk record;
  fk_tables text[] := ARRAY[
    'character_traits',
    'character_mottos',
    'character_lexicon',
    'character_audience_mods',
    'character_emotion_map',
    'character_voice_scales',
    'character_style_rules',
    'character_conflict_profile',
    'character_voice_feedback',
    'character_timeline_entries'
  ];
  t text;
  target_constraint_name text;
BEGIN
  FOREACH t IN ARRAY fk_tables LOOP
    target_constraint_name := t || '_character_id_fkey';
    -- 1. Drop the deterministic-named FK if it exists (handles re-runs of
    --    this migration after the first successful pass).
    EXECUTE format('ALTER TABLE %I DROP CONSTRAINT IF EXISTS %I', t, target_constraint_name);
    -- 2. Drop any OTHER FK on character_id whose name differs (handles the
    --    first run where migration 002 may have given the FK a non-standard
    --    name like character_traits_character_id_fkey1).
    FOR fk IN
      SELECT conname
      FROM pg_constraint c
      JOIN pg_class cls ON cls.oid = c.conrelid
      WHERE cls.relname = t
        AND c.contype = 'f'
        AND c.conname <> target_constraint_name
        AND EXISTS (
          SELECT 1 FROM pg_attribute a
          WHERE a.attrelid = c.conrelid
            AND a.attnum = ANY (c.conkey)
            AND a.attname = 'character_id'
        )
    LOOP
      EXECUTE format('ALTER TABLE %I DROP CONSTRAINT %I', t, fk.conname);
    END LOOP;
    -- 3. Re-add with CASCADE under the deterministic name. Re-runs are
    --    safe because step 1 dropped any existing instance.
    EXECUTE format(
      'ALTER TABLE %I ADD CONSTRAINT %I FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE',
      t, target_constraint_name
    );
  END LOOP;
END $$;

-- ─── 4. merge_characters(source, target) function ────────────────────────
-- Atomic merge with row lock. Captures audit rows for every child reassigned,
-- then sets characters.merged_into. Handles 1:many tables (audit + UPDATE) and
-- 1:1 tables (audit + DROP source's row when target already has one — target
-- wins by definition since we can't have two rows per character).
--
-- Tables touched (per character_id):
--   1:many — character_traits, character_mottos, character_lexicon,
--            character_audience_mods, character_emotion_map,
--            character_voice_feedback, character_timeline_entries,
--            character_verbal_tics, desires, conditional_traits,
--            emotion_drift, surges, silence_blocks, trait_eq_points,
--            relationships, influence_traits, lingering_emotions,
--            desire_pressure, habit_formation
--   1:1   — character_voice_scales, character_style_rules,
--           character_conflict_profile, temperament_grids,
--           emotional_baselines, moral_structures, general_traits,
--           influence_sliders

CREATE OR REPLACE FUNCTION merge_characters(source UUID, target UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY INVOKER
AS $$
DECLARE
  -- Tables with no UNIQUE constraint involving character_id — straightforward
  -- audit-then-UPDATE works.
  many_tables text[] := ARRAY[
    'character_traits', 'character_mottos', 'character_lexicon',
    'character_audience_mods', 'character_emotion_map',
    'character_voice_feedback', 'character_timeline_entries',
    'character_verbal_tics', 'desires', 'conditional_traits',
    'surges', 'silence_blocks', 'trait_eq_points',
    'relationships', 'influence_traits', 'lingering_emotions',
    'desire_pressure', 'habit_formation'
  ];
  -- emotion_drift has UNIQUE(character_id, emotion_type, chapter_index).
  -- Naive UPDATE crashes 23505 when both A and B have the same
  -- emotion@chapter row. Handled explicitly below: target wins (keep
  -- character's value), source's conflicting rows are dropped silently.
  one_tables text[] := ARRAY[
    'character_voice_scales', 'character_style_rules',
    'character_conflict_profile', 'temperament_grids',
    'emotional_baselines', 'moral_structures', 'general_traits',
    'influence_sliders'
  ];
  t text;
  src_locked uuid;
  src_owner uuid;
  tgt_owner uuid;
  caller uuid;
BEGIN
  IF source = target THEN
    RAISE EXCEPTION 'cannot merge a character into itself';
  END IF;

  -- Ownership check. The characters table's RLS is permissive (public
  -- read/write per migration 002), so without this check any signed-in
  -- user could call this RPC with another user's UUIDs and merge their
  -- characters. Require both characters to belong to the caller.
  caller := auth.uid();
  IF caller IS NULL THEN
    RAISE EXCEPTION 'authentication required to merge characters';
  END IF;
  SELECT user_id INTO src_owner FROM characters WHERE id = source;
  SELECT user_id INTO tgt_owner FROM characters WHERE id = target;
  IF src_owner IS NULL OR tgt_owner IS NULL THEN
    RAISE EXCEPTION 'character not found';
  END IF;
  IF src_owner <> caller OR tgt_owner <> caller THEN
    RAISE EXCEPTION 'cannot merge characters you do not own';
  END IF;

  -- Row-lock the source. If it's already merged or doesn't exist, abort
  -- the whole transaction.
  SELECT id INTO src_locked
  FROM characters
  WHERE id = source AND merged_into IS NULL
  FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'source character not found or already merged';
  END IF;

  -- Verify target exists and isn't merged elsewhere.
  IF NOT EXISTS (SELECT 1 FROM characters WHERE id = target AND merged_into IS NULL) THEN
    RAISE EXCEPTION 'target character not found or itself merged';
  END IF;

  -- 1:many tables — audit each row, then UPDATE to point at target.
  FOREACH t IN ARRAY many_tables LOOP
    EXECUTE format(
      'INSERT INTO character_merge_audit (source_character_id, target_character_id, table_name, child_row_id) '
      || 'SELECT $1, $2, %L, id FROM %I WHERE character_id = $1',
      t, t
    ) USING source, target;
    EXECUTE format(
      'UPDATE %I SET character_id = $2 WHERE character_id = $1',
      t
    ) USING source, target;
  END LOOP;

  -- emotion_drift: target-wins conflict resolution. Source rows whose
  -- (emotion_type, chapter_index) already exist on target are dropped
  -- (no audit, no UPDATE) so the unique constraint can't trip the merge.
  -- Surviving source rows are audited + moved.
  DELETE FROM emotion_drift
  WHERE character_id = source
    AND (emotion_type, chapter_index) IN (
      SELECT emotion_type, chapter_index FROM emotion_drift WHERE character_id = target
    );
  INSERT INTO character_merge_audit (source_character_id, target_character_id, table_name, child_row_id)
  SELECT source, target, 'emotion_drift', id FROM emotion_drift WHERE character_id = source;
  UPDATE emotion_drift SET character_id = target WHERE character_id = source;

  -- 1:1 tables — if target already has a row, source loses (delete source's
  -- row; do NOT audit since it wasn't moved). If target doesn't have a row,
  -- audit + UPDATE moves source's to target.
  FOREACH t IN ARRAY one_tables LOOP
    EXECUTE format(
      'WITH target_exists AS (SELECT 1 FROM %I WHERE character_id = $2 LIMIT 1) '
      || 'INSERT INTO character_merge_audit (source_character_id, target_character_id, table_name, child_row_id) '
      || 'SELECT $1, $2, %L, id FROM %I '
      || 'WHERE character_id = $1 AND NOT EXISTS (SELECT 1 FROM target_exists)',
      t, t, t
    ) USING source, target;
    EXECUTE format(
      'WITH target_exists AS (SELECT 1 FROM %I WHERE character_id = $2 LIMIT 1) '
      || 'UPDATE %I SET character_id = $2 '
      || 'WHERE character_id = $1 AND NOT EXISTS (SELECT 1 FROM target_exists)',
      t, t
    ) USING source, target;
    EXECUTE format(
      'DELETE FROM %I WHERE character_id = $1',
      t
    ) USING source;
  END LOOP;

  -- Mark source as merged. characters_merge_state_consistent CHECK ensures
  -- merged_at is co-set.
  UPDATE characters
  SET merged_into = target, merged_at = now()
  WHERE id = source;
END $$;

-- ─── 5. unmerge_character(source) function ───────────────────────────────
-- Reverses a merge by reading the audit table. Child rows are matched by id
-- (which is stable across further merges), so even an A→B→C chain reverts
-- A's data correctly: the audit IDs are still valid even though the rows
-- now live under C, and the UPDATE pulls them back to A in one shot.

CREATE OR REPLACE FUNCTION unmerge_character(source UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY INVOKER
AS $$
DECLARE
  r record;
  src_owner uuid;
  caller uuid;
BEGIN
  -- Ownership check (see merge_characters comments). Permissive RLS on
  -- characters means this RPC needs its own auth gate.
  caller := auth.uid();
  IF caller IS NULL THEN
    RAISE EXCEPTION 'authentication required to unmerge characters';
  END IF;
  SELECT user_id INTO src_owner FROM characters WHERE id = source;
  IF src_owner IS NULL THEN
    RAISE EXCEPTION 'character not found';
  END IF;
  IF src_owner <> caller THEN
    RAISE EXCEPTION 'cannot unmerge characters you do not own';
  END IF;

  -- Lock source's row; abort if it isn't currently merged.
  PERFORM 1 FROM characters WHERE id = source AND merged_into IS NOT NULL FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'source character is not currently merged';
  END IF;

  -- Group audit rows by table_name and bulk-update each. Dynamic SQL because
  -- table_name comes from the audit row.
  FOR r IN
    SELECT table_name, array_agg(child_row_id) AS ids
    FROM character_merge_audit
    WHERE source_character_id = source
    GROUP BY table_name
  LOOP
    EXECUTE format(
      'UPDATE %I SET character_id = $1 WHERE id = ANY($2)',
      r.table_name
    ) USING source, r.ids;
  END LOOP;

  -- Clear the soft-merge state and the audit rows.
  UPDATE characters
  SET merged_into = NULL, merged_at = NULL
  WHERE id = source;

  DELETE FROM character_merge_audit WHERE source_character_id = source;
END $$;

GRANT EXECUTE ON FUNCTION merge_characters(UUID, UUID) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION unmerge_character(UUID) TO authenticated, service_role;
