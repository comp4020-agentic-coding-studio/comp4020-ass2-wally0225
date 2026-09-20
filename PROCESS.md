# Process overview

## What I built

`SLOP2470: Love, Markets, and Other Failures` — a 2000-level course that
treats romantic relationships as a market and spends twelve weeks running real
search/signaling/screening/matching/bargaining/mechanism-design theory against
that subject instead of the usual housing or labour examples. Lectures,
tutorials, four assessments summing to 100%, two instructor personas, two
working slide decks, and a static signal-or-noise mockup embedded in
Assignment 1 — plus, after a second pass, a nine-level performance rubric on
every assessment and a running joke in every week that had gone quiet.

## How I got here

The market-failure framing, the 4-act/12-week arc, the locked assessment
weights (15/30/15/40), and the two instructor personas came out of a design
conversation before any file was touched. I then asked the agent to scope an
implementation plan rather than start writing content, so the site's shape
was agreed before its content was. The initial five build commits each answer
one piece of that plan — config, people, and regenerated
images; twelve lecture pages and two real decks; twelve tutorials replacing
the starter's two; four assessments plus the static mockup; and real copy on
every static page
([`9d69ab8...ae53302`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/compare/9d69ab8...ae53302)).
That mockup was originally planned as peer review — students critiquing a
classmate's fictional dating profile. I dropped that before building it:
publicly rating a "peer's" romantic desirability felt like the wrong thing
to simulate, fictional or not, so it became a private signal-or-noise sort
instead.

## Making the rubrics actually markable

A plain criterion/weight table technically satisfies "assessment structure
totaling 100%," but I wanted a marker to be able to tell an HD attempt from a
pass without guessing. I handed the agent a screenshot of an unrelated rubric
with a nine-level HD-to-not-shown scale and asked it to reuse that
*structure*, not its content, against this course's own criteria. It extended
the marking schema with an optional `levels` field so assessments without it
kept rendering the old simple table, then wrote all nine levels for
Assignment 1's two criteria
([`6e89ef2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/commit/6e89ef2)),
then Assignment 2's and the midterm's.

## Making it funnier without losing the point

I kept returning to one instruction: this course's voice is a deliberate
straight-faced joke, and losing it flattens the submission, not just the tone.
The capstone's single holistic paragraph became four weighted criteria, one
"the case is playful, not just correct," and I asked for a matching playful
criterion — tailored to what each assessment tests, not one joke copy-pasted
four times — on Assignment 1, Assignment 2, and the midterm too
([`79cd6fa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/commit/79cd6fa)).

Before calling it done, I asked the agent to re-read all twelve weeks together
for coherence and tone, flagging anywhere the humour had gone missing. It
found a typo'd course tag, a "won't explain" callback repeated nearly verbatim
across weeks 7–11 (undercutting week 12's own payoff), and five flatter weeks
with no comic voice at all. Fixing that meant trimming the repeat to one real
setup, correcting a gap-count the repetition had let go stale, and giving
weeks 2, 6, and 10, plus five tutorials, a running bit tied to the actual
mechanism rather than sitting next to it
([`9d20945`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wally0225/commit/9d20945)).

I knew the result was right because `pnpm check` passed clean after each
round, and because I looked at the rendered pages, not just the diff.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that citations
resolve to real commits, and that `CLAUDE.md` is present — that this account
is traceable, not that it is good; that's the marker's call. Images aren't
checked: a broken one is visible the moment this file renders on GitHub.
