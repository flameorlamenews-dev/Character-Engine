-- =============================================
-- Migration 009 — Book Buddy worker views
-- =============================================
-- Read-only Postgres views consumed by the Book Buddy iOS Cloudflare Worker
-- (book-buddy-api). They alias our internal `projects` + `manuscripts` schema
-- into the naming the Book Buddy app expects: books + chapters.
--
-- Background: the Book Buddy Worker treated every row in the `manuscripts`
-- table as one book. Our schema uses `manuscripts` for chapter drafts and
-- `projects` for book-level metadata. Stephon's Library tab was rendering
-- "Chapter 1/2/3/4" as separate book tiles. These views give the worker the
-- shape it expects without renaming any engine tables.
--
-- Coordinated with audio Claude (Book Buddy iOS engineer). Worker query
-- targets agreed:
--   from('books').select('id, title, author_name, ...')
--   from('book_chapters').select('id, book_id, chapter_number, title')
--     .eq('book_id', $bookId).order('chapter_number')
--
-- Character → Book path resolved via existing characters.project_id column;
-- no third view needed (audio Claude's option (a)).
--
-- Rollback: DROP VIEW IF EXISTS books, book_chapters CASCADE;

-- Drop-then-create to keep migration replay-safe even if a future migration
-- changes the projected columns (CREATE OR REPLACE alone would fail).
DROP VIEW IF EXISTS books CASCADE;
DROP VIEW IF EXISTS book_chapters CASCADE;

-- One row per book. Live-computed from projects + profiles join.
-- security_invoker=true: the view honors the calling role's RLS rights on
-- the underlying tables (service_role bypasses; authenticated honors
-- per-row policies). Default in PG15+, declared explicitly to future-proof.
CREATE VIEW books
  WITH (security_invoker = true) AS
SELECT
  p.id,
  p.user_id           AS author_user_id,
  p.name              AS title,
  p.description,
  p.created_at,
  p.updated_at,
  pr.full_name        AS author_name
FROM projects p
LEFT JOIN profiles pr ON pr.id = p.user_id;

-- One row per chapter. Filters out null-chapter rows (test seeds, drafts
-- without a chapter assignment) so the chapter list is clean. `book_id`
-- aliases `manuscripts.project_id` to match the `books` view's primary key
-- naming and the Book Buddy worker's query shape.
--
-- Chapter title fallback: if both chapter_title and title are NULL on a
-- legitimate chapter row, render "Chapter N" so the iOS list never shows
-- a blank cell.
CREATE VIEW book_chapters
  WITH (security_invoker = true) AS
SELECT
  m.id,
  m.project_id        AS book_id,
  m.chapter_number,
  COALESCE(m.chapter_title, NULLIF(m.title, ''), 'Chapter ' || m.chapter_number) AS title,
  m.created_at
FROM manuscripts m
WHERE m.chapter_number IS NOT NULL
ORDER BY m.project_id, m.chapter_number;

-- Service-role + authenticated read access. The Worker authenticates with
-- SUPABASE_SERVICE_KEY (service_role) so RLS doesn't block reads.
-- authenticated grant lets the in-app session also read if the worker is
-- bypassed in dev. anon NOT granted — Book Buddy iOS uses a logged-in
-- session; there's no public unauthenticated read surface.
GRANT SELECT ON books TO service_role, authenticated;
GRANT SELECT ON book_chapters TO service_role, authenticated;
