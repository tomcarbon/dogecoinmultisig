# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Browser-based, decentralized Dogecoin multi-signature wallet. All cryptography runs client-side in JavaScript - no server component. Fork of coinb.in (June 2016).

**Status**: Localhost only. The web-friendly (deprecated) version is in the `classic` branch.

## Development

**No build system** - static files served directly. Open `index.html` in a browser.

All dependencies are bundled in `js/` directory (jQuery 1.9.1, Bootstrap 3, crypto libraries).

## Architecture

### Core Modules (in `js/`)

| File | Purpose |
|------|---------|
| `coin.js` | Core crypto: address generation, key management, transaction building |
| `coinbin.js` | Main application framework and utilities |
| `moist.js` | Transaction creation, signing, and broadcasting workflow |
| `banksuite.js` | Banking Suite wallet (2 keys, 6 addresses) |
| `tripleshibe.js` | TripleShibe wallet (3 keys, various multisig combos) |
| `quatroshibe.js` | QuatroShibe wallet (4 keys, x/4 multisigs) |
| `payspot.js` | Payment receiving interface |
| `blockcypher.js` | BlockCypher API integration (primary blockchain data source) |
| `language_pack.js` | Multi-language UI strings |

### Wallet Types

1. **Banking Suite** - Simple 2-key wallet controlling 6 addresses
2. **TripleShibe** - 3-key multisig (1/1, 1/2, 2/2, 1/3, 2/3, 3/3 options)
3. **QuatroShibe** - 4-key multisig (x/4 options)
4. **PaySpot** - Public-facing address for receiving payments (works with all wallet types)

### Blockchain APIs

- **Primary**: BlockCypher API (`blockcypher.js`)
- **Fallback**: chain.so API

### Global Variables

The codebase uses global variables extensively:
- `coinjs.*` - Core cryptocurrency functions
- `work_*` - Working state during transaction workflows

## Key Constraints

- Maximum 60 transaction inputs per output
- Minimum send: 1.01 DOGE (1 DOGE + 0.01 fee)
- Large transactions (3K+) may require manual copy/paste between steps

## Multi-language Support

Language files in `docs/*.json`. Template at `docs/template.json` for adding new languages.
