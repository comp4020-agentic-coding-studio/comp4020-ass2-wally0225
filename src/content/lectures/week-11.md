---
title: "Mechanism Design for Two"
description:
  Working backwards from the outcome you want to the rules that would
  produce it
week: 11
date: 2028-05-08
teachers:
  - barry-gaining
slides: /decks/week-11/
related:
  - sessions/11-redesign-the-rulebook
  - assessments/assignment-2
---

Every prior week analyzed a market as given: these are the rules, what
happens? Mechanism design runs the direction: this is the outcome we want,
what rules would produce it, and are those rules incentive-compatible — do
they still work once everyone plays them strategically rather than
honestly?

Applied to a relationship, this reframes "we should set some ground rules"
as a genuine design problem with a genuine failure mode: a rule that isn't
incentive-compatible doesn't get followed, it gets gamed. Assignment 2
asks you to design one that would actually hold.

Incentive compatibility isn't the only bar a rule has to clear, either. A
rule can be perfectly game-proof and still fail if it's worse than just
walking away from it — nobody's obligated to play a mechanism, however
cleverly designed, that leaves them worse off than opting out entirely.
That second requirement, individual rationality, is easy to forget
precisely because the incentive-compatibility puzzle is the more
interesting one to solve, and a redesign that nails the first while
ignoring the second produces a rule that's technically ungameable and
practically ignored.

The households in this week's examples show why a rule fails in stages,
not all at once. "Whoever's less busy plans date night" fails
immediately, because being busy is cheap to claim and expensive to check —
the same cheap-talk problem week 3 diagnosed in a profile now diagnosing a
household rule instead. A stricter fix, strict alternation with no
exceptions, becomes incentive-compatible by removing the thing anyone
could lie about — but it can fail individual rationality the moment one
side is genuinely, not strategically, overwhelmed, and the rule has no way
to tell the difference between a real bad week and a gamed one. The
redesign that actually holds usually attaches a real, scarce cost to
claiming an exception, so that only a genuinely bad week is worth spending
it on.

That's the shape Assignment 2 wants back: not a rule that sounds fair, but
one you can show surviving an attempt, by a rational and self-interested
person, to break it on purpose.

## Outline

- mechanism design as inverse game theory: outcome first, rules second
- incentive compatibility, and why a rule everyone agrees to isn't the same
  as a rule everyone will keep following
- individual rationality, and why a game-proof rule can still fail by
  being worse than opting out
- watching a household rule fail, get patched, and fail again — cheap
  talk, then a blind spot around genuine bad weeks, then a real cost
  attached to claiming an exception
- what makes a household "rule" a mechanism rather than a wish

## One thing this framework won't explain

Every mechanism this week designs assumes a neutral party choosing the
best rule for both sides — the framework itself is silent about who
actually gets to propose the rule in a relationship that has no outside
designer. Whoever puts a ground rule on the table is also a player who
will live under it, with every reason to make it incentive-compatible for
the *other* person while quietly favoring themselves, and mechanism
design has no term for that conflict of interest.

That's the same missing ingredient this course keeps finding under a
different name each time it shows up: week 7 couldn't say who breaks a
standoff, week 8 couldn't say who gets labeled the proposer, week 9
couldn't say whose outside-option claim gets believed, week 10 couldn't
say which of many equilibria two people settle into — and this week,
nothing says who gets to design the mechanism in the first place. Week 12
is where this, and every prior week's gap, come back at once.

## Further reading

- Hurwicz, L. (1973).
  ["The Design of Mechanisms for Resource Allocation."](https://www.leonidhurwicz.org/wp-content/uploads/2019/01/mech_for_resource_allocation.pdf)
  _The American Economic Review_, 63(2), 1–30. The paper that named the
  field this week draws on — Hurwicz shared the 2007 Nobel Memorial Prize
  in Economic Sciences for founding mechanism design as its own subject,
  separate from the game theory it reverses.
- Myerson, R. B., & Satterthwaite, M. A. (1983).
  ["Efficient Mechanisms for Bilateral Trading."](https://www.cs.princeton.edu/courses/archive/spr10/cos444/papers/myerson_satterthwaite83.pdf)
  _Journal of Economic Theory_, 29(2), 265–281. A mechanism design problem
  for exactly two people — one buyer, one seller — proving that no rule
  can simultaneously be efficient, incentive-compatible, individually
  rational, and require no outside subsidy. Worth sitting with before
  Assignment 2: even the two-person case has a hard limit on how good a
  rule can be.
