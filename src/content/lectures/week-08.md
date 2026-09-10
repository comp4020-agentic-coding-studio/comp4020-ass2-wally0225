---
title: "Stable Matching"
description:
  Gale–Shapley, and why an algorithm that guarantees stability doesn't
  guarantee anything else
week: 8
date: 2028-04-17
teachers:
  - barry-gaining
slides: /decks/week-08/
related:
  - sessions/08-run-gale-shapley
---

The Gale–Shapley algorithm guarantees a stable matching always exists and
can be found in finite steps: no two people would both rather be matched to
each other than to their current match. It is one of the cleanest results
in this entire course, and it is also, deliberately, the last unambiguously
good news the semester delivers.

Stability is a narrow guarantee. It says nothing about happiness, fairness
of who proposes versus who is proposed to, or what happens after the
algorithm terminates. Congratulations — you found a stable match. Now
decide who does the dishes.

## Outline

- the algorithm, worked by hand: proposals, tentative holds, rejection
- the proof of stability, and what exactly "stable" does and doesn't claim
- the proposer-optimal / receiver-optimal asymmetry: stability is not
  unique, and who moves first still matters
- what a solved matching problem leaves for the rest of the semester to
  solve
