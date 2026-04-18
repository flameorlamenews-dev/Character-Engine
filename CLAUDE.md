# Character Engine — Agent Operating Instructions

## Pre-push QA loop (MANDATORY)

Before `git push` runs in this repo, Claude MUST complete a bug-finding QA
loop. A successful build alone is not sufficient. The loop:

1. **Run two QA agents in parallel** (single message, two Agent tool calls
   with `subagent_type: "Explore"`). Split the scope across them — e.g.
   author side / engine side, or speech pipeline / site. Whatever was
   touched in the current change set gets primary focus.
2. **Wait for both reports.** Don't push while one is still running.
3. **Confirm or NAB each reported bug** by reading the cited lines. Do
   NOT trust the agents — they hallucinate. Every claim gets verified
   against the code before acting:
   - CONFIRM → fix it
   - NAB (not-a-bug / false positive) → note the reasoning, don't fix
4. **Fix every confirmed bug.** After fixing, rebuild and re-typecheck.
5. **Repeat from step 1 — swap agent scopes each round** (the agent that
   audited author code now audits engine code, and vice versa). Two
   different agents looking at the same code tends to surface different
   blind spots.
6. **Convergence condition**: stop when two consecutive rounds produce
   zero confirmed bugs. A round of only false positives counts as
   convergence.
7. **Only then push.** Commit message should summarize which rounds
   found what.

Additional rules for the QA loop:
- Never apply a "fix" just because an agent suggested it. Verify the
  bug is real first.
- If an agent flags something as CRITICAL but inspection shows it's
  a design choice, document why in the commit message so the next
  round doesn't rediscover it.
- The user authorizes unlimited tokens for this loop — do not short-
  cut to save context.
- If a confirmed bug is outside the scope of the current change
  (e.g. pre-existing RLS posture, API key exposure), note it in the
  commit message as "known; out of scope for this push" rather than
  fixing it silently.

## General conventions (carry forward from prior sessions)

- Author pipeline = src/components/author/**, src/services/claude-api.ts,
  src/integrations/supabase/client.ts (the Proxy wrapper)
- Engine pipeline = src/engine/**, src/services/character-loader.ts +
  engine-data.ts, src/components/channel-rack|timeline|effects-rack|
  inspector|topbar/**
- Speech pipeline = src/types/speech.ts, src/services/speech-stats.ts +
  speech-signature.ts, analyzeSpeechPatterns in claude-api.ts, the
  speech block inside the Proxy, SpeechSignaturePanel
- Every character_timeline_entries write goes through the unique index
  on (character_id, manuscript_id, chapter_number) — use UPSERT, not
  INSERT
- Character name matching is case-insensitive + trimmed everywhere
- Canonical speech signature aggregates all rows with
  dialogue_token_count > 0, recency-weighted half-life 6 chapters
- Known dev postures (do not "fix" without explicit request):
  - RLS policies are `USING(true) WITH CHECK(true)` — open for dev
  - VITE_CLAUDE_API_KEY is exposed in the bundle — dev only
- Migrations are run manually by the user in Supabase Studio; they are
  additive and guarded with IF NOT EXISTS / ADD COLUMN IF NOT EXISTS
