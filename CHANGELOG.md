# Changelog — formandframedesign.com

Public site (FFD). Newest first.

**Release rule:** ship that changes public copy, pricing surface, assets, or deploy → entry here with date.

---

## 2026-07-28 — House design pass + TCF proof refresh

- Full public-site design pass (`ffd10`): spacing, packages, work cards, FAQ, claim, mobile gutters
- Proof stack ordered **Identity → Shop → L2** (matches package rails); renumbered plates
- Fresh **thecognitionfactory.com** portfolio assets from live site + product UI:
  - desktop/phone heroes (live capture)
  - map / practice / save-place product tiles
  - CF mark thumb for hero chip
- TCF work copy aligned to current loop + product surfaces (Windows · Android · workflow floor)
- Claim pay note moved off inline style; CSS cache-bust `ffd10`

## 2026-07-28 — Stripe claim scaffold (Payment Links)

- Volume pay path: Payment Links (not cart/plugin theater)
- `js/stripe-links.js` + `js/claim-pay.js` — CTAs upgrade when links pasted
- Operator runbook: `docs/STRIPE.md`
- Mailto remains fallback until Dashboard products exist
- Stripe CLI installed on operator machine (login = Principal)

## 2026-07-28 — Customer preview hygiene (revenue posture)

- **Sharp rails:** `docs/PREVIEW_HYGIENE.md` — status classes, timebox, no unpaid homepage proof
- **Registry:** `docs/CUSTOMER_REGISTRY.md` — Tia's listed L2 · private-preview · kill-by 2026-08-27
- **Canon path:** `/customer/{slug}/` — Tia's moved from `/tias/` → `/customer/tias/`; legacy redirects
- Unlisted stack: robots + `_headers` X-Robots-Tag for `/customer/*`
- Preview chrome bar on Tia's (private · not portfolio · claim path)
- AGENTS + Claim_and_Handoff aligned

## 2026-07-28 — Release hygiene baseline

- Established this changelog as required ship surface (parity with other live LOBs)
- No product feature dump in this entry — hygiene only

<!-- Add dated sections above this line for each real ship -->
