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

### Package rails (public)
| Package | Who | Public price |
|---------|-----|--------------|
| **L1 Shop** | 1–2 doors | **$2,500** |
| **L1 Identity** | Weekenders + online anchors | **$500–$1,000** (volume $500 is valid) |
| **L2 Multi-site** | Several–many doors | **$10k–$15k** (list ~$12k) |

- Multi-door → L2. Do not sell L2 as L1.  
- Identity $500 flea/table work is **in-tier**, not a discount.  
- L2 rock bottom $8k is **operator-only** (not marketing page). Below $8k = walk or re-scope to L1.  
- VAS (location SEO pages, menu depth, retainers) separate from turnkey core.

### Gates (ask Principal)
New public price floors · unpaid pitch on homepage proof · DNS/secrets · live cold send to a named prospect · reclass multi-site under $8k as if it were L2.

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
- Client redesign pitches may live under a path like `/tias/` for private preview/shop.
- **Do not** add unpaid pitches to the FFD homepage Proof/portfolio, hero carousel, or public “live work” claims until the client pays / claims.
- Unpaid pitches should stay unlisted: `noindex`/`nofollow` on the pages, `X-Robots-Tag` on `/tias/*`, and `Disallow: /tias/` in `robots.txt`. Share the URL privately; don’t put it in sitemaps or public FFD copy.
- “We could do this on Wix for $10/mo” is a **no-fit signal** — decline politely; do not discount the factory package to chase that buyer.
