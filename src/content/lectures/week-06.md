---
title: "The Secretary Problem"
description:
  Optimal stopping, the 1/e rule, and why "you'll know when you know" is a
  bad strategy
week: 6
date: 2028-03-27
teachers:
  - sunk-costa
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
