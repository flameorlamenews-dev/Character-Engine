-- =============================================
-- Migration 012 — Atomic delete_project_cascade RPC
-- =============================================
-- The client-side cleanup in ProjectsPage.handleDelete (migration 011 + the
-- accompanying handler) suffered three race / consistency landmines:
--   1. SELECT mids → DELETE child rows → DELETE project happens across N
--      separate Supabase round-trips. An in-flight analysis edge function
--      can insert new character_timeline_entries rows AFTER our cleanup
--      and BEFORE the project delete, then 23503-block on the cascade.
--   2. PostgREST .delete().in() with permissive USING(true) RLS occasionally
--      reports success while affecting zero rows on certain auth states
--      (observed in the field: project delete fails with FK violation on
--      character_timeline_entries even though the cleanup "succeeded").
--   3. The cleanup is only as complete as the cleanupSpecs array in the
--      handler — adding a new manuscript_id child table requires editing
--      the client. A server function makes it harder to forget.
--
-- This migration replaces all of that with a single SECURITY DEFINER
-- function that runs the whole sequence in one transaction:
--   - Owner check via auth.uid() against projects.user_id.
--   - DELETE every manuscript_id child row (via subquery, no client list).
--   - NULL merged_into for in-project sources AND cross-project sources
--     pointing INTO this project (RESTRICT on characters.merged_into would
--     otherwise block the cascade).
--   - DELETE the project; migration 011's cascade handles manuscripts /
--     characters / world_glossary, and migration 010's character_id
--     CASCADEs handle the child voice tables under each character.
--
-- Idempotent: CREATE OR REPLACE FUNCTION.

CREATE OR REPLACE FUNCTION delete_project_cascade(project_uuid UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  caller_uid UUID := auth.uid();
  proj_owner UUID;
BEGIN
  -- Ownership check. SECURITY DEFINER runs as the function owner (postgres),
  -- bypassing RLS, so we must verify the caller actually owns this project
  -- before doing anything destructive.
  SELECT user_id INTO proj_owner FROM projects WHERE id = project_uuid;
  IF proj_owner IS NULL THEN
    RAISE EXCEPTION 'Project not found' USING ERRCODE = 'P0002';
  END IF;
  IF caller_uid IS NULL OR proj_owner <> caller_uid THEN
    RAISE EXCEPTION 'Not authorized to delete this project' USING ERRCODE = '42501';
  END IF;

  -- Clear every manuscript_id child row in one transaction. Order doesn't
  -- matter here (none of these reference each other); the project DELETE at
  -- the end is what trips the FKs, so they all need to be gone before that
  -- statement runs.
  DELETE FROM character_timeline_entries
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM analysis_queue
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_traits
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_mottos
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_lexicon
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_audience_mods
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_emotion_map
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_voice_feedback
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_verbal_tics
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM world_glossary
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_voice_scales
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_style_rules
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);
  DELETE FROM character_conflict_profile
    WHERE manuscript_id IN (SELECT id FROM manuscripts WHERE project_id = project_uuid);

  -- Break merged_into pointers before the cascade fires.
  -- characters.merged_into is ON DELETE RESTRICT (migration 010:35).
  --   (a) In-project sources: PG processes cascade rows non-deterministically,
  --       so a target may be deleted before its source — RESTRICT then aborts.
  --   (b) Cross-project sources pointing INTO this project: those sources
  --       survive the project delete; their pointer to a deleted target
  --       would also RESTRICT.
  UPDATE characters
    SET merged_into = NULL, merged_at = NULL
    WHERE project_id = project_uuid AND merged_into IS NOT NULL;
  UPDATE characters
    SET merged_into = NULL, merged_at = NULL
    WHERE merged_into IN (SELECT id FROM characters WHERE project_id = project_uuid);

  -- Now delete the project. Migration 011's cascade handles manuscripts,
  -- characters, and world_glossary; migration 010's character_id CASCADEs
  -- handle each character's voice/engine child rows.
  DELETE FROM projects WHERE id = project_uuid;
END;
$$;

REVOKE ALL ON FUNCTION delete_project_cascade(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION delete_project_cascade(UUID) TO authenticated;
