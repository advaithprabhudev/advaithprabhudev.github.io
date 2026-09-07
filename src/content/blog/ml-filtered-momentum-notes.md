---
title: Notes on an ML filter for momentum signals
date: 2026-09-05
summary: Why I trained a classifier to suppress risk rather than predict returns, and what a ~52% accuracy regime actually bought me on 15 years of daily equity data.
---

The first version of this project asked the wrong question. I wanted a model that
predicts whether an EMA(20/50) crossover trade will be profitable, and I judged it
the way everyone judges classifiers: accuracy. It sat around 52% on held-out data
and I assumed the project was dead.

It wasn't dead, it was mis-scored. A momentum filter does not need to pick winners.
It needs to keep me out of the crossovers that happen exactly when the regime turns
— the ones that produce the long left tail of the drawdown distribution. Those events
are a small, imbalanced slice of the data, so a model can be barely better than a
coin flip on the base rate and still remove most of the damage.

So the objective became drawdown, not accuracy. Across 12 S&P 500 equities from 2010
to 2025, filtering crossovers by MLP confidence cut mean maximum drawdown by 5.81
percentage points while leaving the signal count largely intact. The honest framing
is risk suppression: the filter is a position-veto, and I now report it via Sharpe
decomposition rather than as a return enhancer, because that is what the evidence
supports.

Two engineering details did most of the work. First, features are lag-adjusted —
RSI, ATR, volume z-score, multi-horizon returns and volatility computed strictly on
information available at the decision bar — which is unglamorous and absolutely
where look-ahead bias hides. Second, the split is chronological: train, validation
and test are contiguous blocks of time, never a random shuffle. Random shuffling on
autocorrelated price data leaks the future into the past and inflates every number
you will ever report.

The 52% stays in the writeup on purpose. It is the most instructive number in the
project: it is a reminder that in markets, the metric you optimise and the metric
you care about are rarely the same thing.
