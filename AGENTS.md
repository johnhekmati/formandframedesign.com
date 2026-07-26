# AGENTS.md

## Cursor Cloud specific instructions

### What this is
Static marketing site (`formandframedesign.com`) — plain HTML + CSS + a little inline/vanilla JS. There is **no build step**, and there are **no lint or automated test scripts** in `package.json`.

### Run it (dev)
- `npm run preview` serves the repo root via `npx serve` on `http://127.0.0.1:5290` (see `package.json`).
- The site is entirely static, so edits to `index.html` / `css/styles.css` / `assets/**` are picked up on browser refresh (no hot reload).

### Non-obvious caveats
- `not_found_handling: "404-page"` in `wrangler.jsonc` is intentional: missing `/assets/*` must return 404, **not** SPA-fallback to `index.html`. A prior HTML-200 fallback poisoned image/preview paths. Do not add SPA fallback.
- CSS/asset URLs are cache-busted with `?v=` query strings (e.g. `styles.css?v=ffd6`). When changing `css/styles.css`, bump the `?v=` token in `index.html` so live caches invalidate.
- `deploy` (`wrangler pages deploy`) targets Cloudflare Pages and needs Cloudflare credentials — not runnable in this environment and not needed for local dev.
- Operator/factory docs are intentionally kept off this public repo (see `.gitignore`), so some paths referenced elsewhere won't exist here.

### Claimable client pitches
- Client redesign pitches may live under a path like `/tias/` for private preview/shop.
- **Do not** add unpaid pitches to the FFD homepage Proof/portfolio, hero carousel, or public “live work” claims until the client pays / claims.
- Unpaid pitches should stay unlisted: `noindex`/`nofollow` on the pages, `X-Robots-Tag` on `/tias/*`, and `Disallow: /tias/` in `robots.txt`. Share the URL privately; don’t put it in sitemaps or public FFD copy.
- “We could do this on Wix for $10/mo” is a **no-fit signal** — decline politely; do not discount the factory package to chase that buyer.
