# Changelog — formandframedesign.com

Public site (FFD). Newest first.

**Release rule:** ship that changes public copy, pricing surface, assets, or deploy → entry here with date.

---

## 2026-07-28 — JH chip center + hero desktop stills

- JH world marks: restore framed logos + `object-fit: contain` (full H · CF · PMMAI, equal squares, optical center)
- Hero browser viewport: **desktop still overlay** syncs with slides so TCF shows current logo (not baked video frame)
- Phone + desktop + chip stay in lockstep; video remains only as timing source under the still

## 2026-07-28 — Nav scroll-spy + JH chip alignment

- Header links get TCF-style scroll-spy underline in **FFD teal** as sections enter view
- `data-nav` + IntersectionObserver (`-40% / -55%` band); `aria-current` on active link
- JH world chips height-aligned: letterbox crop on HCG + `object-fit: cover` on work-marks
- Cache-bust `ffd12`

## 2026-07-28 — TCF proof stills corrected

- Desktop/phone heroes: static capture (animations off) so CF mark is fully readable — not mid-rotation
- Proof tiles restored to **HAL-E · AAE · CSS** brand logos (not desktop-app screenshots)
- Hero carousel phone + chip thumb use current flat matte CF mark / settled phone frame (`?v=3`)

## 2026-07-28 — FFD monogram split (hero logo + chrome mark)

- **`ffd-logo.jpg`** — dimensional monogram sits with hero copy (identity still, not nav)
- **`ffd-mark-nav.png`** — flat mark for nav + footer; rebuilds **favicon-32** + **apple-touch**
- Schema logo stays flat `ffd-mark.png`; OG/social image → `ffd-logo.jpg`
- Cache-bust `ffd11` on CSS, favicons, mark-nav, hero logo

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
