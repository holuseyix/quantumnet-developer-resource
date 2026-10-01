# Quantumnet Developer Resource

An independent, developer-focused community resource for exploring **Tezos Quantumnet**, the experimental post-quantum Tezos testnet.

> **Independent resource:** This project is not official Tezos documentation and does not speak for Tezos, Nomadic Labs, Trilitech, or other ecosystem contributors.

## What this project does

Quantumnet brings several post-quantum approaches into one experimental Tezos environment. This resource turns the official descriptions into a compact map for developers who want to understand the architecture before diving into implementation work.

It includes:

- a source-first technical overview
- an interactive architecture map
- a contribution path for newcomers
- a verification/source ledger
- outreach drafts for requesting technical feedback
- a factual-correction issue template

## Core topics

The current guide covers the first Quantumnet iteration, including:

- **Accounts:** `tz5` with **ML-DSA-44**
- **Consensus attestations:** **XMSS** with post-quantum **STARK aggregation**
- **Baking rights:** **Smooth Weighted Round Robin (SWRR)** in place of the previous VDF/randomness approach
- **Data Availability Layer:** **ZODA** in place of KZG
- **Scope:** experimental engineering work, not a production network

These points are based on the official Quantumnet announcement and related Tezos/Octez documentation. Quantumnet is an evolving experiment, so implementation details should be re-checked before relying on them.

## Repository layout

This repository is intentionally flat so it can be published directly from the GitHub Pages **root**:

```text
.
├── index.html
├── styles.css
├── app.js
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── CONTRIBUTING.md
├── OUTREACH.md
├── SOURCES.md
├── LICENSE
├── research/
│   └── quantumnet-developer-guide.md
└── .github/
    └── ISSUE_TEMPLATE/
        └── factual-correction.md
```

## Run locally

No build system is required.

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Because the site is static, it can be published from the repository root on GitHub Pages or another static host.

## Source-first rule

For technical claims, use primary sources whenever possible:

1. Tezos Spotlight
2. Octez & Protocol documentation
3. The official `tezos/tezos` GitLab repository, issues, milestones and merge requests

If a detail is uncertain, label it as an observation or open question instead of presenting it as established fact.

## Contribution boundary

This repository is independent. A pull request here is **not** a contribution to Tezos/Octez.

If you want to contribute to Octez itself, use the official contribution workflow and check the current repository state before proposing changes.

For a first contribution, documentation, reproducibility, testing, accessibility, and narrowly scoped improvements can be useful ways to build understanding before attempting deep protocol or cryptographic work.

## Research boundary

This project does not claim that an official paid role, bounty, grant, or employment opportunity exists for Quantumnet. Its purpose is to make technical material easier to navigate and to create a useful artifact that can receive informed feedback.

## License

MIT. See `LICENSE`.

## Verification date

Primary-source checks for this version were performed on **2026-10-01**.
