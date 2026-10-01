# Quantumnet Developer Resource

An independent, developer-focused community resource for exploring **Tezos Quantumnet**, the experimental post-quantum Tezos testnet.

> **Important:** This is an independent community resource. It is not an official Tezos publication, and it does not speak for Tezos, Nomadic Labs, Trilitech, or any other ecosystem contributor.

## What is included?

- A concise technical guide to Quantumnet
- A visual architecture explorer
- A terminology reference
- A contribution/onboarding path
- A source and verification ledger
- Draft outreach text for requesting technical feedback
- A factual-correction issue template

## Why this exists

Quantumnet is an engineering playground for bringing several post-quantum approaches into one experimental Tezos network. The official announcement describes changes spanning accounts, consensus, baking rights, and data availability.

This project translates those changes into a format that is easier for developers and technically curious contributors to navigate.

## Key facts covered

According to the official Quantumnet announcement:

- `tz5` accounts use **ML-DSA-44**.
- Baking rights use **Smooth Weighted Round Robin (SWRR)** instead of the previous VDF/randomness approach.
- Consensus attestations use **XMSS** signatures with a post-quantum **STARK aggregation** system developed by LeanEthereum.
- The Data Availability Layer uses **ZODA** instead of KZG commitments/proofs.
- Sapling and timelock puzzles are omitted from this iteration.
- Quantumnet is experimental and is **not intended for production use** at this stage.

## Run locally

No build system is required.

```bash
cd site
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also deploy the `site/` directory to a static host or GitHub Pages.

## Suggested GitHub repository name

`quantumnet-developer-resource`

Alternative:

`quantumnet-dev-guide`

## Before publishing

1. Keep the independent-resource disclaimer.
2. Keep the source links in `SOURCES.md`.
3. Re-check official sources before making future technical edits.
4. Do not describe this project as official Tezos documentation.
5. If proposing a change to Octez documentation, ask maintainers whether the proposed page/content belongs in the official docs before presenting it as a contribution.

## Current research boundary

The resource intentionally avoids pretending that an official paid opportunity, bounty, or role exists for Quantumnet. The goal is to create a useful public artifact and use it to start technically grounded conversations.

## License

MIT. See `LICENSE`.
