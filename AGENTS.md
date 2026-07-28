# AGENTS.md

## Principal trust (director mode)

Obey home rules: `principal-trust-default` · `principal-reports` (~/.grok/rules/).

**Default:** ~75% delegated trust — decide → do → report. Principal is PM/director, not junior merge queue.

### Full ship (when intent is ship / publish / go live)
1. Implement + cache-bust CSS (`?v=` in `index.html`).  
2. Commit on `main` (or agreed branch) with a complete sentence message.  
3. `git pull --rebase` if needed; resolve conflicts toward agreed package/spine.  
4. Push `origin`.  
5. Prefer **GitHub Actions → Cloudflare Pages** as deploy path; watch the run when possible. Local `wrangler` only if token is available.  
6. End with a **ship report** (shipped / decisions / held / status).  

Do **not** stop after “ready to commit?” when the Principal already said ship.

### Package rails (public) — display order Identity → Shop → L2
| Package | Who | Public price | Live proof |
|---------|-----|--------------|------------|
| **L1 Identity** | Weekenders + online anchors | **$500–$1,000** (volume $500 is valid) | johnhekmati.com |
| **L1 Shop** | 1–2 doors | **$2,500** | professionalmmainstitute.com |
| **L2 Multi-site & platform** | Multi-door **or** product platform (web / desktop / mobile / all) | **$10k–$15k** (list ~$12k) | thecognitionfactory.com |

- Multi-door **or** real product platform → L2. Do not sell L2 as L1.  
- Identity $500 flea/table work is **in-tier**, not a discount.  
- L2 rock bottom $8k is **operator-only** (not marketing page). Below $8k = walk or re-scope to L1.  
- Package CTAs: all “Claim my site” — black off-hover, accent green on-hover.  
- VAS (location SEO pages, menu depth, retainers) separate from turnkey core.  
- Cache-bust: bump `?v=` on `styles.css` when CSS changes (current target `ffd13`+).

### Gates (ask Principal)
New public price floors · unpaid pitch on homepage proof · DNS/secrets · live cold send to a named prospect · reclass multi-site under $8k as if it were L2.

### Stripe claim payments
- **Not a WP plugin** — static site + **Payment Links** (`docs/STRIPE.md`).
- Public link map: `js/stripe-links.js` · wiring: `js/claim-pay.js`.
- Empty links → mailto fallback. Never commit secret API keys.
- CLI (operator machine): `stripe login` after `winget install Stripe.StripeCli`.

### Customer preview hygiene (revenue posture)
Full rails: **`docs/PREVIEW_HYGIENE.md`** · ledger: **`docs/CUSTOMER_REGISTRY.md`**.

| Rule | Practice |
|------|----------|
| Canon path | `/customer/{slug}/` only (legacy `/tias` = redirect) |
| Unlisted | noindex + `X-Robots-Tag` + `robots.txt` Disallow `/customer/` |
| Before host | Package class + registry row + kill-by (default +30d) |
| Homepage proof | **Paid / portfolio permission only** — never unpaid |
| Claim path | Required; no orphan free mockup warehouse |
| CHANGELOG | Open / claim / kill of a preview = entry |

---

## Cursor Cloud specific instructions

### What this is
Static marketing site (`formandframedesign.com`) — plain HTML + CSS + a little inline/vanilla JS. There is **no build step**, and there are **no lint or automated test scripts** in `package.json`.

### Run it (dev)
- `npm run preview` serves the repo root via `npx serve` on `http://127.0.0.1:5290` (see `package.json`).
- The site is entirely static, so edits to `index.html` / `css/styles.css` / `assets/**` are picked up on browser refresh (no hot reload).

### Non-obvious caveats
- `not_found_handling: "404-page"` in `wrangler.jsonc` is intentional: missing `/assets/*` must return 404, **not** SPA-fallback to `index.html`. A prior HTML-200 fallback poisoned image/preview paths. Do not add SPA fallback.
- CSS/asset URLs are cache-busted with `?v=` query strings (e.g. `styles.css?v=ffd8`). When changing `css/styles.css`, bump the `?v=` token in `index.html` so live caches invalidate.
- `deploy` (`wrangler pages deploy`) targets Cloudflare Pages and needs Cloudflare credentials — often covered by **GitHub Actions on push to main** instead of local wrangler.
- Operator/factory docs are intentionally kept off this public repo (see `.gitignore`), so some paths referenced elsewhere won't exist here.

### Claimable client pitches
- Live only under **`/customer/{slug}/`**. Registry row required (`docs/CUSTOMER_REGISTRY.md`).
- **Do not** add unpaid pitches to the FFD homepage Proof/portfolio, hero carousel, or public “live work” claims until paid / portfolio OK.
- Unlisted stack: page `noindex` + `_headers` `X-Robots-Tag` + `robots.txt` `Disallow: /customer/`. Share URL privately; no sitemaps / public FFD copy.
- Timebox unpaid previews (default 30 days). Kill or claim — do not park forever.
- Preview chrome: thin FFD private-preview bar + claim link (see Tia's).
- “We could do this on Wix for $10/mo” is a **no-fit signal** — decline politely; do not discount the factory package to chase that buyer.
