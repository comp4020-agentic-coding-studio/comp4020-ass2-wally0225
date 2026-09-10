---
title: Run Gale–Shapley by Hand
description:
  Execute the stable matching algorithm on a small preference table, from
  both sides
week: 8
date: 2028-04-17
teachers:
  - barry-gaining
spec:
  - you ran the algorithm to completion on a supplied preference table
  - you ran it again with the proposing side reversed
  - you can point to at least one person whose outcome changed between the
    two runs
related:
  - lectures/week-08
---

## Before the tutorial

Bring the week 8 deck's worked example fresh in mind — this session repeats
the exercise on a fresh table you haven't seen.

## In the tutorial

Working in pairs, run the algorithm by hand: propose, hold, reject, repeat,
until every match is final. Then swap which side proposes and re-run on the
same preferences. Compare the two outcomes.

## Afterwards

If the two runs gave different matches — they usually do — you've just
demonstrated the proposer-optimal / receiver-optimal asymmetry yourself,
which sets up week 9's question directly: stability was never the whole
story.
