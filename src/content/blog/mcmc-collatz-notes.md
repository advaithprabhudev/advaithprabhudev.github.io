---
title: Sampling the Collatz map with MCMC
date: 2026-09-01
summary: Building a Markov chain over residue classes of the accelerated Collatz map, and the pleasant surprise that its transition matrix turns out to be a 0-1 permutation matrix.
---

The Collatz conjecture resists direct attack, so I stopped trying to prove anything
about individual orbits and asked a statistical question instead: if I treat the
accelerated Collatz map as a dynamical system on residue classes, what does its
stationary behaviour look like, and can I sample from it?

The construction is small. Take the accelerated map (the version that divides out
all factors of two in one step), partition the integers into residue classes, and
read off transition frequencies between classes as a Markov chain. The surprise is
structural rather than numerical: the transition matrix I get is a 0-1 permutation
matrix. Every residue class has exactly one successor in the support of the chain,
which makes the stationary distribution analytically available instead of something
I have to estimate by brute force.

That structure is also what makes the sampling interesting. Because the chain is
deterministic in its support, a naive random walk degenerates, so I sample with
Metropolis–Hastings against a target defined on the class space, using numpy/scipy
for the linear algebra and the acceptance bookkeeping. The algorithmic part is
deliberately paired with proofs: each sampler ships next to a formal argument that
it preserves the intended stationary distribution, because a Markov chain Monte
Carlo result without a correctness proof is just a histogram with extra steps.

What I took away is less about Collatz and more about method. Choosing the right
state space — residue classes rather than integers — turned an intractable question
into a finite linear-algebra object with a clean invariant. And writing the proofs
alongside the code caught two bugs that empirical testing had missed, both in how I
indexed class boundaries. Five modules, five proofs, and a healthy respect for the
gap between "the samples look right" and "the sampler is right".
