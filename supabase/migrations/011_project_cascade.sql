-- =============================================
-- Migration 011 — Project delete cascade
-- =============================================
-- Project delete (ProjectsPage trash icon) was 23503 RESTRICT-blocked
-- because manuscripts.project_id, characters.project_id, and
-- world_glossary.project_id all defaulted to NO ACTION (effectively
-- RESTRICT for DELETE). Any non-empty project couldn't be deleted at all.
--
-- This migration adds ON DELETE CASCADE to those THREE FKs only.
-- Deleting a project now removes its manuscripts, characters, and
-- glossary entries; those then cascade further via:
--   - characters → all migration-001 engine tables (already CASCADE)
--   - characters → all migration-002 voice tables (CASCADE since 010)
--   - manuscripts → no auto-cascade (deliberate; see note below)
--
-- DELIBERATE LIMITATION: we do NOT add CASCADE to manuscript_id FKs.
-- The manuscript-delete handler (ManuscriptsView.handleDeleteConfirm)
-- intentionally manages per-child cleanup based on a "Keep Data" vs
-- "Delete All Data" toggle. If we cascaded manuscript_id, the "Keep
-- Data" path would be broken — every chapter delete would silently
-- destroy character voice profiles the user wanted preserved. Project
-- delete still removes manuscripts (via this migration) but each
-- manuscript-row delete bypasses the per-chapter cleanup; that's an
-- acceptable trade-off because project-delete is a "delete everything"
-- intent anyway. Per-chapter delete is unaffected.
--
-- Idempotent: drops the deterministic-named FK if present, drops any
-- other FK on project_id (handles non-standard pg-generated names),
-- then re-adds with CASCADE under the deterministic name. Safe to
-- re-run.

DO $$
DECLARE
  fk record;
  fk_tables text[] := ARRAY[
    'manuscripts',
    'characters',
    'world_glossary'
  ];
  t text;
  target_constraint_name text;
BEGIN
  FOREACH t IN ARRAY fk_tables LOOP
    target_constraint_name := t || '_project_id_fkey';
    -- 1. Drop the deterministic-named FK if it exists (handles re-runs).
    EXECUTE format('ALTER TABLE %I DROP CONSTRAINT IF EXISTS %I', t, target_constraint_name);
    -- 2. Drop any OTHER FK on project_id (handles non-standard names from
    --    earlier migrations).
    FOR fk IN
      SELECT conname FROM pg_constraint c
      JOIN pg_class cls ON cls.oid = c.conrelid
      WHERE cls.relname = t
        AND c.contype = 'f'
        AND c.conname <> target_constraint_name
        AND EXISTS (
          SELECT 1 FROM pg_attribute a
          WHERE a.attrelid = c.conrelid
            AND a.attnum = ANY (c.conkey)
            AND a.attname = 'project_id'
        )
    LOOP
      EXECUTE format('ALTER TABLE %I DROP CONSTRAINT %I', t, fk.conname);
    END LOOP;
    -- 3. Re-add with CASCADE under the deterministic name.
    EXECUTE format(
      'ALTER TABLE %I ADD CONSTRAINT %I FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE',
      t, target_constraint_name
    );
  END LOOP;
END $$;
