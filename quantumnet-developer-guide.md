# Quantumnet: A Developer's First Look

> Independent community resource. Not official Tezos documentation.

## 1. What is Quantumnet?

Quantumnet is Tezos' first experimental post-quantum testnet. It brings multiple post-quantum changes into a shared experimental network so engineers and technical contributors can evaluate how the pieces work together.

The official Tezos announcement describes it as an engineering playground rather than a production network.

## 2. Why does it matter?

Preparing a blockchain for a post-quantum environment is broader than replacing one account signature.

Different parts of a blockchain can rely on different cryptographic mechanisms. Tezos' Quantumnet experiment therefore touches several layers:

- account authorization
- consensus attestations
- baking-right selection
- data availability

The important developer lesson is that post-quantum migration is a systems problem, not just a wallet-key problem.

## 3. The four major areas

### Accounts — ML-DSA-44

Quantumnet enables `tz5` accounts using ML-DSA-44.

ML-DSA is a post-quantum digital-signature scheme standardized by NIST. In this context, it is used to authorize operations from the new account type.

### Consensus — XMSS + PQ aggregation

Quantumnet changes how consensus attestations are handled.

The official announcement describes hash-based XMSS signatures combined with a post-quantum STARK aggregation system developed by the LeanEthereum project.

This is also an area with active experimental implementation work in the Tezos/tezos repository.

### Baking rights — Smooth Weighted Round Robin

Quantumnet removes the Verifiable Delay Function and the associated protocol-randomness approach used for the previous lottery mechanism.

The experimental network instead uses Smooth Weighted Round Robin (SWRR) to distribute baking rights according to baker weight.

### Data Availability Layer — ZODA

The Data Availability Layer changes from KZG commitments/proofs to ZODA.

The official announcement describes ZODA as being based on two-dimensional tensor codes and as a possible route to post-quantum data availability.

## 4. What is not included in this iteration?

The official announcement says that this iteration leaves out:

- Sapling
- timelock puzzles

The announcement also notes ongoing application-level exploration around post-quantum confidential transactions.

## 5. What should a developer keep in mind?

Quantumnet is not presented as a finished production environment.

The official announcement says its UX is intentionally limited and that the current focus is integration and evaluation of core components. Future iterations can include further security analysis, performance work, additional functionality and better tooling.

That means documentation should clearly separate:

- what is currently implemented
- what is experimental
- what is planned or being investigated
- what is merely a possible future direction

## 6. Current implementation work worth watching

The Tezos/tezos GitLab currently has an open milestone titled **Post-Quantum Signature Aggregation**.

The milestone describes work on the `lean_multisig` library for aggregating attestations and potentially manager operations signed with XMSS. It explicitly marks the work as experimental and says it will not be merged into `master` in its current form.

There is also an experimental merge request adding OCaml bindings for lean_multisig with XMSS signature aggregation support.

This is advanced protocol/cryptography work. A newcomer does not need to modify it to make a useful contribution.

## 7. A safer contribution ladder

A practical path for a new contributor is:

1. Read the official Quantumnet announcement.
2. Read the relevant Octez contribution and documentation guidelines.
3. Use the independent guide to organize the concepts.
4. Check current GitLab issues/MRs before choosing a technical task.
5. Start with documentation, tests, reproducibility, UI/UX or a narrowly scoped issue where appropriate.
6. Ask maintainers/contributors whether a proposed documentation change is useful before presenting it as an official-doc contribution.
7. Move into deeper Octez/OCaml work only after understanding the repository and its contribution workflow.

## 8. Architecture at a glance

```text
                         QUANTUMNET
                              |
       +----------------------+----------------------+
       |                      |                      |
    Accounts              Consensus            Data Availability
       |                      |                      |
   tz5 / ML-DSA-44      XMSS + PQ STARK             ZODA
                              |
                     Baking-right selection
                              |
                           SWRR
```

## 9. Official vs independent

This guide is independent.

The correct way to use it is as a learning and navigation layer that points back to primary sources. When the guide conflicts with official documentation or the current repository, the primary source should be treated as authoritative and the guide should be corrected.

## 10. Questions worth investigating

- Which Quantumnet APIs and RPCs are currently stable enough for external tooling?
- Which developer workflows are intentionally limited in the current iteration?
- What reproducible performance measurements are maintainers most interested in?
- Which documentation pages should eventually live in the official Octez documentation?
- Which test scenarios would be most useful for validating Quantumnet behavior?

These are research questions, not claims that a particular gap has already been accepted by Tezos maintainers.
