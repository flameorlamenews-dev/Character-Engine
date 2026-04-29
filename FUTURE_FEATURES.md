# Character Engine — Future Features

Deferred work, organized by urgency. Each item lists **what**, **why**, **scope**, and **when** to revisit.

---

## P0 — Do Before Onboarding Any Other Author

### Server-side analysis migration

**What.** Move all Anthropic API calls from the browser (`src/services/claude-api.ts` + the Proxy shim in `src/integrations/supabase/client.ts:81-110`) to a server-side worker (Supabase Edge Function or Cloudflare Worker). The frontend's job becomes "upload + poll status + display"; the server's job becomes "run Pass 1 + Pass 2 + write DB rows."

**Why.** Three blockers for multi-author use:

1. **API key leakage.** `VITE_CLAUDE_API_KEY` is a Vite env var prefixed with `VITE_`, which means it gets baked into the client-side bundle at build time. Anyone who opens DevTools on the deployed site can extract the key and burn the project's Anthropic credits. Single-user (Stephon) is annoying; multi-user is a money-leakage vulnerability.
2. **Shared rate-limit budget.** All authors hit the same Anthropic key, so two users clicking Analyze at once fight for the 50 RPM / 8k OTPM/min Tier 1 budget. They throw 429s at each other. A server-side queue lets you fairly schedule.
3. **Tab-must-stay-open.** Browser-side analysis dies when the tab closes. Each chapter takes 5-10 minutes; the auto-chain takes hours. Nobody will keep a tab open for that. Server-side means upload, close tab, return later (or get an email).

**Sketch.**

```
┌──────────────────┐     ┌─────────────────────┐     ┌──────────────────┐
│  Browser (auth)  │     │  Edge Function       │     │  Anthropic API   │
│                  │     │  /analyze-chapter    │     │                  │
│  POST manuscriptId────►│  - validates owner   │────►│  Pass 1 + Pass 2 │
│                  │     │  - reads from Supabase│    │                  │
│  GET status      │◄────│  - calls Claude      │◄────│                  │
│  (poll every 5s) │     │  - writes results    │     │                  │
│                  │     │  - returns 202       │     │                  │
└──────────────────┘     └─────────────────────┘     └──────────────────┘
```

**Concrete changes:**
- New Supabase Edge Function (or Vercel cron / Cloudflare Worker) at `supabase/functions/analyze-chapter/`. Reads `manuscripts.id` from POST body, fetches content + character context, runs the existing `analyzeManuscript` + `analyzeManuscriptEngine` logic, writes to DB. Runs as `service_role` so it bypasses RLS for cross-table writes.
- Move `CLAUDE_API_KEY` from `VITE_CLAUDE_API_KEY` (client) to a non-`VITE_` server env (`CLAUDE_API_KEY` on Vercel; Supabase secrets for edge functions).
- Strip `claude-api.ts` and the Proxy shim. Replace with a thin client that calls `supabase.functions.invoke('analyze-chapter', { body: { manuscriptId } })` and polls `manuscripts.analysis_progress` via the existing polling effect.
- The auto-chain logic in `ManuscriptsView.tsx` still works — it just sees `progress=100` arrive without needing a tab to drive the analysis. Even better: the chain can run server-side too if we add a `manuscripts.queue_position` column and have the edge function loop through eligible rows.
- Delete the `saved-repo/` dir at the same time — it's the original Lovable Gemini edge function, dead code that confuses future investigation.

**Scope.** ~1-2 days of focused work. Bulk of the time is testing the FK chain still works under `service_role` and that the proxy-shim removal doesn't leave dead imports.

**When.** Before the first non-Stephon user uploads anything. The security issue alone justifies it.

---

## P1 — Do When Comfortable

### Concurrent analysis (lift the single-analysis lock)

**What.** Allow multiple chapter analyses to run in parallel instead of one-at-a-time. The current `isAnalyzingRef.current` guard in `ManuscriptsView.handleAnalyze` blocks a second click while a first analysis is running.

**Why.** User explicitly noted earlier: "we will turn that on in next build." The single-lock pattern makes sense for one user not wanting to double-spend tokens accidentally, but with multi-author it doesn't scale. Two authors hitting Analyze simultaneously should both work.

**Risks.**
- **Character creation race.** If two analyses both detect a new character "Asher" before either writes the row, you get duplicate characters. Need a `findOrCreateCharacter` helper with row-locking or upsert-on-name.
- **Foundation cache double-fetch.** Both analyses see the foundation as missing, both call Claude for it, both write — wasted tokens but data is consistent (last write wins).
- **Per-user vs global lock.** Concurrent across users is fine; concurrent within a single user might still want a queue to keep token costs predictable.

**Scope.** ~half a day. Mostly the character-creation upsert + reconfigure the lock to be per-user (or remove it entirely after server-side migration handles queueing).

**When.** Right after server-side migration. Easier to add concurrency to a server-side queue than to client-side guards.

### Auto-resume chain after refresh

**What.** Currently `chainActive` is in-memory only — refresh the page and the chain dies (you have to click Analyze on the next un-analyzed chapter to re-arm). Could persist `chainActive` to localStorage so the chain auto-resumes.

**Why.** Smaller win than server-side analysis (which makes browser session irrelevant), but quick UX fix.

**Scope.** ~1 hour. Persist `chainActive` boolean to localStorage; on mount, if true and there's an eligible chapter, queue handleAnalyze.

**When.** Optional — server-side analysis (P0) makes this obsolete. Skip if migrating soon.

### Pass 1 → Pass 2 parallelization

**What.** Currently Pass 2 starts after Pass 1's DB writes complete. Pass 2 only needs Pass 1's in-memory response, not its DB commits. Could race them: kick Pass 2's Claude call immediately after Pass 1 returns, while Pass 1's DB writes happen in parallel.

**Why.** Saves 3-5 seconds per chapter. Across an 18-chapter chain, ~60-90 seconds.

**Scope.** Low (~2 hours) but requires careful refactor of `client.ts` invoke handler to extract Pass 2's input from Pass 1's response object before the writes settle.

**When.** Optional polish. After server-side migration.

### Prompt caching

**What.** Add `cache_control: { type: 'ephemeral' }` to the system prompts in `analyzeManuscript` and `analyzeManuscriptEngine`. Anthropic caches the system prompt for ~5 minutes; subsequent chapters in the same session reuse the cache and pay reduced input-token cost.

**Why.** ~5-10% input token cost savings on chapters 2+ in a chain. With 18 chapters and chain runs being ~hourly, this is real money.

**Scope.** ~30 minutes. Add the cache_control field to the messages array in `callClaude`.

**When.** After server-side migration (so the cache_control parameter lives in one place instead of two).

### Streaming responses (`stream: true`)

**What.** Enable streaming on the Claude API calls. Currently the call blocks until the full response generates; with stream=true, tokens arrive incrementally.

**Why.** No wall-clock impact (total tokens generated are the same), but UX wins:
- Show real-time progress in the analysis dialog (% based on tokens received vs max_tokens)
- Detect refusal stops earlier (mid-stream rather than at end)
- Allow user to cancel mid-generation cleanly via the AbortController

**Scope.** ~2-3 hours. Refactor `callClaude` to consume the SSE stream and accumulate tokens into the response text. Plus update the Stop Analysis button to actually abort the stream.

**When.** After server-side migration (streaming over a server-side WebSocket / SSE is cleaner than browser-side SSE).

---

## P2 — UX & Hygiene Polish

### Per-character foundation cache

**What.** Currently `includePsychFoundation` and `includeVoiceFoundation` are all-or-nothing flags in `client.ts:343-344`. If even ONE major character lacks foundations, Claude is asked to emit foundation for ALL characters — even ones that already have it.

**Why.** Wastes ~1-2k tokens per analysis when mixing new characters with existing ones (e.g., a chapter introducing one new character to your existing cast).

**Scope.** Medium (~3-4 hours). Need to filter the `characters` list passed to Pass 2 by per-character foundation existence, then merge per-character results back into the writer's character list.

**When.** Optional. Token savings are modest compared to the structural wins.

### Toast spam reduction during chain

**What.** Each chapter transition fires a sonner toast. For a 10-chapter chain that's 10+ transition toasts plus a final "no more upcoming chapters" toast. They overlap if chapters complete quickly.

**Why.** Currently fine for 5-10 chapter chains but starts feeling cluttered at 20+.

**Scope.** Small (~1 hour). Either reduce toast duration to 2000ms or replace per-transition toasts with a persistent "Analyzing chapter X of N…" indicator that updates in place.

**When.** Optional polish.

### Failed-chapter summary at chain end

**What.** When the chain skips a failed chapter and continues, the failure is recorded in the failed chapter's `engine_errors`. But the user is probably away — they come back to a chain that ended without a clear "these N chapters failed" summary.

**Why.** Right now the user has to manually scan all 18 cards for error badges to find the skipped ones.

**Scope.** Small (~2 hours). Track `failedChaptersInChain: number[]` state during the chain run; on chain end, show a single toast: "Chain complete. 2 chapters failed: Ch 7, Ch 11. Click to retry."

**When.** Optional polish.

### Token cost confirmation on long chains

**What.** Currently a single Analyze click can spend ~$5+ in Claude tokens silently (10 chapters × ~$0.50). No upfront confirmation.

**Why.** UX for new authors. Less critical for Stephon who knows the cost.

**Scope.** Small (~2 hours). Pre-chain modal: "This will auto-analyze N un-analyzed chapters (est. $X total based on chapter sizes). Continue?" with a "Don't ask again this session" checkbox.

**When.** Optional, more important for multi-author onboarding.

---

## P3 — Schema / Tech Debt

### `manuscripts.updated_at` UPDATE trigger

**What.** Currently we manually bump `updated_at: new Date().toISOString()` on every progress update in `client.ts` (6 places). A standard Postgres `BEFORE UPDATE` trigger would do this automatically.

**Why.** One source of truth. New writers won't accidentally forget to bump the timestamp, breaking staleness detection (which is what bug 3 from the refresh-recovery investigation was).

**Scope.** Tiny (~30 min). New migration file:

```sql
CREATE OR REPLACE FUNCTION bump_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;

CREATE TRIGGER manuscripts_updated_at
  BEFORE UPDATE ON manuscripts
  FOR EACH ROW EXECUTE FUNCTION bump_updated_at();
```

Then strip the `updated_at: new Date().toISOString()` lines from `client.ts` (6 places).

**When.** Anytime. Pure cleanup.

### `audience_mods` REAL → INTEGER column type

**What.** `character_audience_mods.{brevity,deference,defiance,warmth}` are `REAL` (float) in the live schema, but values are always emitted as integers in the 0-75 range. Listed in CLAUDE.md as tech debt.

**Why.** Schema honesty + slightly smaller storage.

**Scope.** Tiny migration, but requires careful column type change without data loss.

**When.** Anytime.

### `projects.updated_at` not bumped on child changes

**What.** A project's `updated_at` only updates when the `projects` row itself changes. Adding a chapter, analyzing characters, etc., don't bump it. The "Last edited" string on `ProjectCard` is therefore based on project-row activity only, not actual content activity.

**Why.** UX accuracy on the project landing page.

**Scope.** Medium (~1 day). Need triggers on manuscripts, characters, and a few engine tables to bubble up `updated_at` to the parent project. Or compute it dynamically in the `books` view.

**When.** Optional.

### Test-seed project (`00000000-...-002`) cleanup

**What.** A seed row from migration 002 with empty data. Currently shows up as an "Untitled" tile in iOS Library because it has no `name`.

**Why.** Cosmetic.

**Scope.** Trivial (delete via SQL, or a seed-purge migration).

**When.** Anytime.

### Allow chain to fall back to lower-numbered un-analyzed chapters

**What.** Currently the chain only goes UP in chapter_number. If user clicks Analyze on Ch 5 and the chain finishes everything > 5, it stops — even if Chs 1-4 are also un-analyzed.

**Why.** Mild UX surprise. User expects "analyze everything" semantics, gets "analyze everything from here."

**Scope.** Tiny (~30 min). Modify `findNextChapterToAnalyze` to fall back to lowest un-analyzed chapter if no higher-numbered candidate exists.

**When.** Optional.

---

## Notes for Future Claude

- **Always run the QA loop** per CLAUDE.md before pushing. Two parallel agents, triage CONFIRM/NAB, loop until clean. The discipline matters.
- **The `[claude] stop_reason=...` and `[chain] ...` diagnostic logs are intentional** and help debug production issues. Don't strip them.
- **`saved-repo/` is dead code** (original Lovable export). Safe to delete in the server-side migration commit.
- **The Proxy shim** (`src/integrations/supabase/client.ts:81-110`) is the single biggest source of "why is X happening?" confusion. The server-side migration removes it entirely — that's part of why the migration is high value.
- **Anthropic streaming refusal** (`stop_reason=refusal`) is a real possibility for content moderation on darker manuscripts. The error path in `callClaude` already handles it specifically; keep that handling if any of this code moves server-side.
