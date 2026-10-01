# Sources & Verification Ledger

**Verification date:** 2026-10-01

Quantumnet is an evolving experimental network. This ledger records the primary sources used for the current version of this resource.

## 1. Introducing Quantumnet

**Tezos Spotlight — Introducing Quantumnet**  
https://spotlight.tezos.com/introducing-quantumnet/

Used for:

- Quantumnet's status as an experimental post-quantum Tezos testnet
- `tz5` / ML-DSA-44
- Smooth Weighted Round Robin (SWRR)
- XMSS consensus attestations
- post-quantum STARK aggregation
- ZODA in the DAL
- omitted Sapling and timelock puzzles
- experimental/non-production scope

## 2. Why post-quantum, why now?

**Tezos Spotlight — Why post-quantum, why now?**  
https://spotlight.tezos.com/why-post-quantum-why-now/

Used for:

- background on Tezos' post-quantum work
- why migration is a broader protocol concern than account signatures alone
- context around experimental post-quantum support

## 3. Octez & Protocol documentation

**Official documentation**  
https://octez.tezos.com/

Used for:

- Octez architecture
- developer documentation
- testing and contribution resources
- RPC and implementation references

## 4. Getting started with Octez

https://octez.tezos.com/docs/introduction/howtouse.html

Used for:

- understanding the Octez toolchain
- distinguishing node, client and other Octez components
- general test-network development context

## 5. Installing Octez

https://octez.tezos.com/docs/introduction/howtoget.html

Used for:

- current installation pathways
- source, package, Docker and static-binary options

## 6. Tezos/tezos GitLab

https://gitlab.com/tezos/tezos

Used for:

- implementation source
- current issues, merge requests and development activity

## 7. Post-Quantum Signature Aggregation milestone

https://gitlab.com/tezos/tezos/-/milestones/498

Used for:

- tracking experimental PQ signature-aggregation work
- identifying work that should not be treated as production-ready

## 8. Experimental PQ aggregation merge request

https://gitlab.com/tezos/tezos/-/merge_requests/21783

Used for:

- evidence of experimental OCaml bindings around `lean_multisig`
- XMSS aggregation experimentation
- understanding the experimental status of this line of work

## Verification policy

When this project is updated:

1. re-check the official Quantumnet announcement
2. check the current Octez documentation
3. check the current `tezos/tezos` repository and relevant issues/MRs
4. record the new verification date
5. avoid carrying forward claims that are no longer current

Do not treat a blog post, community comment, screenshot, or old issue as authoritative when a newer primary source is available.
