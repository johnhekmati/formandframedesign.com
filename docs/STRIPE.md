# FFD Stripe — claim payments (volume path)

**Not a WordPress plugin.** Static site + **Stripe Payment Links** = pay without building a cart.

**Parent:** package rails in `AGENTS.md` · claim in `Claim_and_Handoff` · preview hygiene  
**Public config:** `js/stripe-links.js` (Payment Link URLs only — never secret keys)

---

## Why Payment Links

| Volume need | Payment Links |
|-------------|---------------|
| ~2hr factory + templated claim | Paste one URL in email / proposal / site CTA |
| Fixed package prices | One product per SKU |
| No backend on day one | Stripe hosts checkout |
| Audit trail | Stripe Dashboard + email receipts |

Custom Checkout + Workers is **later** (deposits, coupons, post-pay webhook → registry).

---

## One-time account setup (Principal · ~15 min)

1. Create / open [Stripe Dashboard](https://dashboard.stripe.com) (live mode when ready; test mode first).  
2. **Business details** + bank for payouts.  
3. **Products → Add product** (one-time, not subscription unless managed retainer later):

| Product name (Dashboard) | Amount | Config key in `js/stripe-links.js` |
|--------------------------|--------|-------------------------------------|
| FFD L1 Identity | **$500** | `identity_500` |
| FFD L1 Identity (upper) | **$1,000** | `identity_1000` (optional) |
| FFD L1 Shop | **$2,500** | `shop_2500` |
| FFD L2 Multi-site / platform | **$12,000** | `l2_12000` |
| FFD deposit (optional) | **$500** | `deposit_500` |

4. For each product: **Create payment link** → copy `https://buy.stripe.com/...`  
5. Paste into `js/stripe-links.js`. Commit + push (links are public by design).  
6. Site CTAs auto-switch from mailto → Stripe (`js/claim-pay.js`).

**Do not** put secret API keys, webhook secrets, or restricted keys in this public repo.

---

## Operator claim flow (2hr factory)

1. Build preview under `/customer/{slug}/` · registry row · kill-by.  
2. Proposal email + demo video + **Payment Link for package**.  
3. On paid (Stripe email / Dashboard): registry → `engaged` then `claimed`.  
4. Handoff DNS/repo; kill preview path when cut over.

---

## Stripe CLI (installed on this machine)

```bat
stripe login
stripe products list
stripe payment_links list
```

CLI is for operator terminal, not the public site. Login is interactive (browser).

Test cards (test mode): https://docs.stripe.com/testing

---

## Soft Edges later

| When | What |
|------|------|
| Need post-pay automation | Cloudflare Worker webhook → ntfy / registry note |
| Variable L2 quote | Dashboard custom amount link or invoice |
| Rock bottom $8k | Operator-only Payment Link — **not** on homepage |
| Managed monthly | Separate subscription product |

---

## Gates

- Public package floors already on site — new floors = Principal gate.  
- Live cold send of a Payment Link to a named prospect = live human send gate if first outreach.  
- Secrets never in git.

---

*Stripe scaffold v1 · 2026-07-28 · Form & Frame Design*
