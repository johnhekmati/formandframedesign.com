# FFD Preview Hygiene — claimable work without unpaid theater

**Parent:** `AGENTS.md` · `ECONOMICS_RUNWAY.md` · Claim & Handoff  
**Why:** Same class as TCF signed packs — **free public inventory without a claim contract feels dirty** and trains the wrong buyer. Revenue needs real posture, not mockup parking.

**Risk-Weight:** Medium (public brand + commercial). Unpaid homepage proof stays **High / Gate**.

---

## Intent (one line)

Host **claimable previews** under a controlled namespace so prospects can see craft; never confuse that with **paid portfolio proof** or free L2 consulting on the open homepage.

---

## Sharp Lines (non‑negotiable)

1. **No unpaid pitch on homepage proof** — not hero, not portfolio carousel, not “live work” copy, not sitemaps.  
2. **Canon path only:** `/customer/{slug}/` — never top-level brand paths for new work (`/tias` is legacy redirect only).  
3. **Unlisted until claim:** `noindex, nofollow, noarchive` + `X-Robots-Tag` + `robots.txt` `Disallow: /customer/`.  
4. **Package class stamped before host** — Identity / Shop / L2 written in registry; do not host multi-door work as if it were Identity.  
5. **Claim path required** — every live preview has a next step (claim CTA, package price band, or explicit “remove this preview”). No orphan demos.  
6. **Paid → portfolio; unpaid → private URL only.** After claim/payment, migrate off FFD domain (client DNS/repo) or keep managed under written engagement.  
7. **Timebox** — unpaid previews without engagement movement expire (default **30 days**). Archive or delete; do not accumulate a free mockup warehouse.  
8. **CHANGELOG** — deploy that adds/removes a customer preview or changes hygiene → entry.

---

## Soft Edges (operator judgment)

| Soft | Notes |
|------|--------|
| Slug shape | Prefer short opaque or brand slug (`tias`, not `tias-taco-hut-redesign-final-v3`) |
| Local-only draft | Build in `clients/{slug}/` or private branch until ready to host |
| Password / CF Access | Optional later if leaks or ape risk; **not** required for v1 hygiene |
| Engagement brief depth | Minimum: ICP package + one-line offer + open/kill date |
| Banner chrome | Recommended: thin “Private FFD preview” strip on claimable pages |

---

## Status classes (use in registry)

| Status | Meaning | Host on FFD? | Homepage proof? |
|--------|---------|--------------|-----------------|
| **draft** | Local / ops only | no | no |
| **private-preview** | URL shared 1:1; iterating | yes `/customer/{slug}/` | no |
| **claimable** | Soft CTA + package band; ready to pay | yes | no |
| **engaged** | Deposit / signed / Stripe in flight | yes until cutover | no (unless Principal OK) |
| **claimed** | Paid + ownership handoff | **no** (client domain) | only with written OK |
| **portfolio** | Explicit permission to show as FFD proof | optional archive | **yes** |
| **killed** | Timebox or no-fit | removed / 410 | no |

---

## Lifecycle (operator)

```
draft (local)
  → private-preview (host + registry row + noindex)
  → claimable (claim CTA + package band visible to prospect)
  → engaged (money / written yes)
  → claimed (DNS/repo handoff; remove or redirect off FFD)
  → portfolio (only if they allow public proof)
```

Any step can **kill** → remove path, registry = killed, CHANGELOG note.

---

## Registry (living ledger)

Maintain `docs/CUSTOMER_REGISTRY.md` (this repo). One row per slug.

Required columns: slug · business · package · status · opened · kill-by · notes.

---

## Parallel to TCF content moat

| TCF | FFD |
|-----|-----|
| Signed manifests first | Registry + package class first |
| Allow-unsigned off for household | Unpaid off homepage proof |
| Encrypt late | Password wall late (only if needed) |
| Park SaaS/online license theater | Park “infinite free mockups on brand domain” |
| Living densify = moat | Living claim + ship + cash = moat |

---

## Anti-patterns

- Top-level `/coolclient/` with no registry row  
- Schema/marketing that implies FFD *is* the client’s production site without claim framing  
- Adding unpaid work to Proof because “it looks good”  
- Discounting L2 multi-door to Identity price to “justify” the mockup  
- Letting previews rot past kill-by with no decision  

---

## Related

| Doc | Role |
|-----|------|
| `AGENTS.md` | Agent rails + gates |
| `ECONOMICS_RUNWAY.md` | Package prices / floors |
| `Claim_and_Handoff.html` | Pay → own path |
| `docs/CUSTOMER_REGISTRY.md` | Active previews ledger |
| `clients/*` | Engagement briefs (may stay local) |

---

*Preview hygiene v1 · 2026-07-28 · Form & Frame Design*
