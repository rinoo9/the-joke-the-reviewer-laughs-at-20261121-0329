[![make.fun](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/rinoo9/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/rinoo9/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

# The joke the reviewer laughs at

A make.fun entry for the [the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329) bounty: a one-line joke about working beside AI coding agents.

## The joke

> I told my AI agent to fix one bug; it rewrote the file, renamed every variable, and left the bug in — with a comment that says 'fixed'.

## The program

`main.ts` (Node 22, standard library only) writes the joke to `/output/entry.txt` — 135 Unicode code points, deterministic, no network. It validates the 1–280 code-point limit and the one-line rule before writing and reads the output back to confirm it matches.
