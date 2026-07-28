# Customer preview registry

**Canon host:** `https://formandframedesign.com/customer/{slug}/`  
**Rules:** `docs/PREVIEW_HYGIENE.md`  
**Update when:** open · status change · claim · kill · portfolio permission

| Slug | Business | Package | Status | Opened | Kill-by | Notes |
|------|----------|---------|--------|--------|---------|-------|
| `tias` | Tia's Taco Hut (SA multi-door) | **L2** multi-site | private-preview | 2026-07 (approx) | **2026-08-27** | Was top-level `/tias/`; moved under `/customer/tias/`. Unlisted. Not homepage proof. Claim path required before treating as engaged. |

## Status legend

`draft` · `private-preview` · `claimable` · `engaged` · `claimed` · `portfolio` · `killed`

## Ops checklist (new slug)

1. Classify package (Identity / Shop / L2) — refuse wrong tier.  
2. Add registry row **before** first public host.  
3. Ship only under `/customer/{slug}/` with noindex stack.  
4. Share URL privately; never homepage / sitemap.  
5. Set kill-by (default +30d).  
6. CHANGELOG one line on open and on kill/claim.
