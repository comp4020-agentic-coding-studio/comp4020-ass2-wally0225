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

Stability is also not unique. Run the same preferences with the two sides
swapped — whoever was receiving now proposes — and the algorithm still
terminates, still produces a stable matching, and very often produces a
*different* one. The side doing the proposing ends up with the best stable
outcome available to it, every member of that side, at the same time. That
result has a name (proposer-optimality), and it's the sharpest thing this
week's theorem says, sharper than "stability exists."

This isn't a toy result, either. The mechanism behind the U.S. medical
residency match — where tens of thousands of doctors and hospitals are
matched every year — is Gale–Shapley, adopted specifically because the
market it replaced kept collapsing under exactly the "who moves first"
pressure this week is about.

## Outline

- the algorithm, worked by hand: proposals, tentative holds, rejection
- the proof of stability, and what exactly "stable" does and doesn't claim
- the proposer-optimal / receiver-optimal asymmetry: stability is not
  unique, and who moves first still matters
- running the same preferences both ways, to see the asymmetry rather than
  take it on faith
- what a solved matching problem leaves for the rest of the semester to
  solve

## One thing this framework won't explain

Gale–Shapley proves something sharper than "a stable match exists": the
side that proposes gets the *best* stable match available to it, every
member of that side, simultaneously. Being the proposer isn't a technical
detail — it's the single biggest determinant of who does better out of an
otherwise-fair-sounding "stable" outcome.

The theorem has nothing to say about how a real matching market decides
which side plays that role. That's last week's gap again, one level up:
week 7 couldn't say who breaks a standoff; this week, whoever a market
*labels* the proposer wins the same way, and the model treats that label
as given rather than fought over.

## Further reading

- Gale, D., & Shapley, L. S. (1962).
  ["College Admissions and the Stability of Marriage."](https://sites.math.washington.edu/~billey/classes/562.winter.2018/articles/Gale.Shapley.pdf)
  _The American Mathematical Monthly_, 69(1), 9–15. The paper this week's
  algorithm and its proof are drawn from directly — the "marriage" framing
  isn't a metaphor layered on afterward, it's the paper's own. Shapley
  shared the 2012 Nobel Memorial Prize in Economic Sciences with Alvin Roth
  for the theory this result founded.
- Roth, A. E. (1984).
  ["The Evolution of the Labor Market for Medical Interns and Residents: A Case Study in Game Theory."](https://web.stanford.edu/~alroth/papers/evolut.pdf)
  _Journal of Political Economy_, 92(6), 991–1016. The paper behind this
  week's residency-match claim — a real market that kept failing until it
  adopted a mechanism economically equivalent to Gale–Shapley, worked out
  independently before anyone realized the connection.
