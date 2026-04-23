# CLAUDE.md — Character Engine

## Persistent workflow rules

### Pre-push QA loop (MANDATORY)

Every build MUST go through this loop before any push to main:

1. Write the fix.
2. Launch **2 QA agents in parallel** (Explore subagent_type), each covering DIFFERENT bug surfaces (e.g. one on data-flow / schema / writer semantics, one on UI / render / types / prompt quality). Prompt them to find bugs, not confirm correctness. Instruct each agent to be adversarial and to NOT repeat prior rounds' findings.
3. Triage each finding myself (engine owner) as **CONFIRM** (real bug, fix it) or **NAB** (not-a-bug / out of scope / already fine). Do not defer triage to the user — the engine owner makes the call.
4. Apply all confirmed fixes, then loop back to step 2 with two FRESH agent prompts (different focus from prior rounds to catch regressions).
5. Repeat until a QA round produces zero confirmed (CONFIRM) bugs. Diminishing-returns nit-picks (tech debt, hygiene, micro-optimizations) do NOT block push — they get NAB'd with a note.
6. Only THEN commit and push to main.

The same loop is triggered whenever Flame says "run a diagnostic" on existing code.

**Rationale:** Drop 2 shipped with three bugs (truncated Pass 2 response, voice-foundation detection, enum coercion) that QA agents would have caught. This rule eliminates that class of failure.

### Branching

All work lands directly on `main`. No feature branches. Incremental single-purpose commits; Flame verifies each on Vercel before the next.

### Scale conventions (engine-wide, locked)

- `temperament_grids.*`, `emotional_baselines.*`, `moral_structures.moral_rigidity/guilt_sensitivity/justification_tendency`, `general_traits.*`, `influence_sliders.*`, `desires.score`, `conditional_traits.intensity_score/override_strength` → integer 0-75 (midpoint 37)
- `character_voice_scales.*` integer columns → 0-75 (midpoint 37)
- `character_audience_mods.{brevity,deference,defiance,warmth}` → 0-75 (column type is REAL in the live schema — tech debt; values are always emitted as integers)
- `character_conflict_profile.truth_bias` → 0-75 (midpoint 37)
- `character_style_rules.{avg,max}_sentence_length_words` → raw word counts
- `character_style_rules.sentence_length_stddev` → raw float stddev
- `character_timeline_entries.voice_scales` → JSONB, LEGACY 0-10 scale (written by Pass 1 — distinct from `character_voice_scales` TABLE which is 0-75)

The canonical voice surface is the `character_voice_scales` table. The legacy JSONB should not be consumed by new UI.

### Extraction quality guardrails

- Pass 2 prompt system message must NOT call 37 a "default" — that primes Claude to copy it across every slider. 37 is a scale anchor, used only when the text is genuinely silent on a trait.
- Example JSON values in the prompt template must be DELIBERATELY VARIED (not all 37) to prevent default-copying.
- Rules section must include "DIFFERENTIATION IS MANDATORY" with an explicit warning against uniform output.
- Voice prose fields must paraphrase observed dialogue, not generic descriptions.

### Performance

- Writer loops must use `Promise.all` across independent writes. Never serialize DB calls when they can race.
- Claude call `max_tokens` should be sized to actual content + ~50% headroom, not the model's ceiling. Oversized `max_tokens` does not truncate but lengthens response latency.
- Foundation fields (psych, voice) are only requested from Claude when at least one character in the current chapter is missing that foundation. Cached foundations are not re-emitted.
