# Quantumnet Developer Guide

## 1. What Quantumnet is

Quantumnet is Tezos' first experimental post-quantum testnet. The official announcement describes it as an engineering playground that brings several post-quantum approaches together in one environment.

It should be treated as experimental engineering work, not as a production network.

## 2. Why several components change

A quantum-resistant blockchain cannot rely only on replacing one account-signature scheme. Different parts of a blockchain use different cryptographic mechanisms.

Quantumnet therefore experiments with changes across:

- account signatures
- consensus attestations
- baking-right selection
- data availability

The important developer question is not simply "Which signature is quantum-safe?" but "Which cryptographic dependency exists at each layer?"

## 3. Account signatures: tz5 and ML-DSA-44

Quantumnet uses `tz5` accounts with ML-DSA-44.

ML-DSA is a post-quantum digital-signature scheme standardized by NIST.

For a developer, the key architectural point is that account authentication can be changed at the protocol/account layer without implying that every other cryptographic mechanism in the network has already migrated.

## 4. Consensus attestations: XMSS + post-quantum STARK aggregation

Consensus attestations in Quantumnet use XMSS signatures together with a post-quantum STARK aggregation system.

This illustrates a different requirement from ordinary account authentication: consensus needs a mechanism that can handle many attestations efficiently while keeping the resulting proof or aggregated representation practical.

The exact implementation should be checked against the current Tezos/tezos source and active experimental work before making implementation-level claims.

## 5. Baking rights: SWRR

Quantumnet replaces the previous VDF/randomness approach for baking-right selection with Smooth Weighted Round Robin (SWRR).

The practical takeaway is that quantum-resistance work can affect how protocol participants are selected, not only how messages are signed.

## 6. Data availability: ZODA

The Data Availability Layer (DAL) uses ZODA instead of KZG in this experiment.

This matters because data-availability mechanisms introduce their own cryptographic commitments/proofs. A post-quantum migration therefore has to consider the data layer as well.

## 7. What is intentionally missing

The official Quantumnet announcement states that Sapling and timelock puzzles are omitted from this iteration.

Do not interpret an omitted component as a permanent protocol decision. Quantumnet is an experimental iteration.

## 8. How to approach the codebase

A sensible learning path is:

1. Read the official Quantumnet announcement.
2. Read the relevant Octez/protocol documentation.
3. Locate the current implementation or experimental work in `tezos/tezos`.
4. Reproduce a narrow behavior or documentation claim.
5. Record what you observed and what source supports it.
6. Only then propose a narrowly scoped change.

## 9. Good first contribution shapes

For an independent learner, useful contribution-shaped work can include:

- correcting or improving documentation
- writing a reproducibility note
- adding a focused test
- improving an explanation or diagram
- documenting a confusing developer workflow
- reporting a concrete discrepancy with exact reproduction steps

A contribution should solve a real problem rather than exist only to create activity.

## 10. Questions worth asking

When investigating a component, ask:

- What problem does it solve?
- Which cryptographic assumption does it replace?
- Where is it implemented?
- How is it tested?
- What performance or operational trade-offs are being measured?
- What is still experimental?
- What evidence would show that the approach needs revision?

## 11. Verification rule

For every technical statement, prefer a primary source and record the verification date.

Quantumnet can change. A guide that was accurate for one iteration can become outdated as implementation, testing, or design evolves.
