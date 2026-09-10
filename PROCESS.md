# Process overview

## What I built

`SLOP2470: Love, Markets, and Other Failures` — a 2000-level course that
treats romantic relationships as a market and spends twelve weeks running
real search/signaling/screening/matching/bargaining/mechanism-design theory
against that subject instead of the usual housing or labour examples. It's a
straight-faced course site (lectures, tutorials, four assessments summing to
100%, two people, two working slide decks) built on the shared starter
template, with a static, clearly-inert mockup of the peer-review exercise
Assignment 1 asks students to sit.

## How I got here

The content itself came out of a long design conversation before any file was
touched: picking the market-failure framing, laying out a 4-act/12-week arc,
locking the assessment weights (15/30/15/40), deciding every profile exercise
in the course must run on fictional personas only, and choosing the two
instructor personas. None of that back-and-forth is a commit — it's the
reasoning behind every choice below.

Once the design was fixed, I asked the agent to scope an implementation plan
rather than start writing files directly, so the shape of the site was agreed
before the content was. That plan is what the five build commits below each
correspond to, in order:

> scope me an implementation plan now

- [`9d69ab8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/commit/9d69ab8) —
  course code, dates, tags, the tutorial-label rename, the two instructor
  personas (reusing the existing portrait art under new identities so the
  visual theme didn't need to change), and regenerated hero/card images built
  as flat-shape SVG art in the theme's own palette via `sharp` (no image-gen
  CLI was available, so a one-off Node script rasterized hand-written SVG
  instead).
- [`31f282e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/commit/31f282e) —
  all twelve lecture pages, dated and assigned to whichever instructor owns
  that half of the semester, plus a rewritten week-1 deck and a new week-8
  deck walking through Gale-Shapley by hand.
- [`ddc010b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/commit/ddc010b) —
  the starter's two tutorials replaced with twelve, one per lecture, each
  with a person-judged spec line rather than a vague "discuss this."
- [`ea76b80`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/commit/ea76b80) —
  the four assessments and the static `PeerReviewMock` component embedded in
  Assignment 1, which one reviewer flagged mid-build as needing to be
  obviously non-functional (no click handler, an explicit "this is a
  demonstration, not a submission form" line) rather than a half-wired form.
- [`ae53302`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/commit/ae53302) —
  the leftover developer-facing placeholder copy on the home, lectures,
  sessions, assessments, and policies pages replaced with real text.

I knew the result was right because `pnpm check` — typecheck, build, and
`spec/assignment-2.test.ts` + `spec/data-integrity.test.ts` — passed clean
after the full set of content existed
([`97be574...ae53302`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/compare/97be574...ae53302)),
and because `pnpm dev` showed the peer-review mockup, a lecture page, and the
assessments listing rendering as intended before I called it done.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
