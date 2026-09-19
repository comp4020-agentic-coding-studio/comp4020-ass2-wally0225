---
title: "The Secretary Problem"
description:
  Optimal stopping, the 1/e rule, and why "you'll know when you know" is a
  bad strategy
week: 6
date: 2028-03-27
teachers:
  - sunk-costa
slides: /decks/week-06/
related:
  - sessions/06-secretary-simulator
---

You interview candidates one at a time, in random order, and must accept or
reject each before seeing the next; rejected candidates can't be recalled.
This is the secretary problem, and its answer is exact: reject the first
roughly 37% of your expected pool outright, gathering information only,
then accept the next candidate who beats everyone seen so far. No other
stopping rule does better against an unknown distribution.

This week is where the semester turns from description to prescription for
the only time: not because the rule tells you when to commit, but because
it tells you exactly how much looking is enough, which is the one thing
search-cost intuition alone can't answer. Tutorial 6 runs the rule against
your own intuition, live.

## Outline

- the problem, the 1/e derivation, and why the threshold is exact rather
  than approximate
- what the model assumes that real search doesn't (no recall, sequential,
  one slot) and what breaks when those assumptions don't hold
- what the rule is and isn't good advice for
- why the rule only optimizes your half of the decision

## One thing this framework won't explain

The rule tells you exactly when to stop looking. It says nothing about
whether the person you stop on would also stop on you. The secretary
problem is one-sided by construction — the interviewer chooses, the
candidate has no vote — and every guarantee about the 37% threshold quietly
assumes that whoever you pick, picks you back. Real dating doesn't grant
that assumption for free.

That's a fifth kind of gap this course keeps finding, and it's a different
shape from the others: Weeks 1, 3, 4, and 5 each found something the model
couldn't price or distinguish. This one is missing a whole side of the
interaction. It's also the first gap with a partial answer already
scheduled — Week 8's stable matching is exactly what happens when you stop
assuming the choice runs one way. Week 12 is still where all five come back
at once.

## Further reading

- Ferguson, T. S. (1989).
  ["Who Solved the Secretary Problem?"](https://www2.math.upenn.edu/~ted/210F10/References/Secretary.pdf)
  _Statistical Science_, 4(3), 282–289. Less a derivation than a history —
  the 1/e rule's actual origin (Cayley, Kepler, and a 1960 Scientific
  American column) is more tangled than "the math says 37%" suggests, and
  this is the paper that sorts out who actually solved what.
