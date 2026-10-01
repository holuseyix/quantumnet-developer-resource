# Sources and verification ledger

Research checked on **2026-10-01**.

## Primary sources

### Quantumnet announcement
**Introducing Quantumnet | Tezos Spotlight**  
https://spotlight.tezos.com/introducing-quantumnet/

Used for:
- Quantumnet's status as an experimental post-quantum testnet
- tz5 / ML-DSA-44
- Smooth Weighted Round Robin
- XMSS
- post-quantum STARK aggregation
- ZODA
- omitted Sapling and timelock puzzles
- experimental/non-production scope

### Why post-quantum, why now?
**Tezos Spotlight**  
https://spotlight.tezos.com/why-post-quantum-why-now/

Used for:
- background on Tezos' post-quantum migration
- the role of testnet experimentation
- broader cryptographic migration context

### Octez & Protocol documentation
https://octez.tezos.com/

Used for:
- Octez/protocol developer documentation
- contribution, testing, architecture and reference material

### Octez contribution guide
https://octez.tezos.com/docs/developer/contributing_index.html

Used for:
- contribution workflow context
- merge-request and protocol-development guidance

### Octez documentation guidelines
https://octez.tezos.com/docs/developer/guidelines.html

Used for:
- documentation/coding quality expectations

### Building Octez from source
https://octez.tezos.com/docs/introduction/howtobuild.html

Used for:
- the distinction between normal usage and source-code development
- the fact that source development requires a substantial local environment

### Tezos/tezos GitLab
https://gitlab.com/tezos/tezos

Used for:
- source repository
- current development activity

### Post-Quantum Signature Aggregation milestone
https://gitlab.com/tezos/tezos/-/milestones/498

Used for:
- current experimental work around XMSS signature aggregation
- the explicit warning that this milestone is experimental and not for merging into master

### Experimental PQ aggregation MR
https://gitlab.com/tezos/tezos/-/merge_requests/21783

Used for:
- evidence of experimental OCaml bindings for lean_multisig/XMSS aggregation
- explicit experimental status

## Verification policy

If this project is updated later, re-check the primary sources above. Quantumnet is explicitly an evolving experimental network, so technical details may change between iterations.
