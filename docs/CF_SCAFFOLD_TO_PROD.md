# Cloudflare Pages — formandframedesign.com

Same house pattern as **hekmaticonsulting.com**, **thecognitionfactory.com**, **johnhekmati.com**.

```text
GitHub (johnhekmati/formandframedesign.com)
    │  push main
    ▼
GitHub Actions  →  CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID
    │
    ▼
wrangler pages deploy  →  project form-and-frame-design
    │
    ▼
*.pages.dev  +  formandframedesign.com / www
```

**Note:** Local disk also holds factory docs (`agent.md`, `pipeline/`, etc.) that are **gitignored** from this public repo. Marketing surface only deploys.

## Secrets

```powershell
gh secret set CLOUDFLARE_ACCOUNT_ID -R johnhekmati/formandframedesign.com
gh secret set CLOUDFLARE_API_TOKEN  -R johnhekmati/formandframedesign.com
```

Reuse the same token/account as HCG/TCF.

## Domain

1. Zone `formandframedesign.com` on the **same** Cloudflare account as Pages.
2. Run workflow **Attach Cloudflare custom domain** (or push that yml once).
3. Ensure **DNS records** for apex + `www` (attach alone may leave zone SOA-only until CNAMEs exist).
4. Wait cert **pending → active**. Apex uses CF CNAME flattening.

**DNS operator card (records + Proton placeholders):** [`DNS.md`](DNS.md)

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `@` | `form-and-frame-design.pages.dev` | Proxied |
| CNAME | `www` | `form-and-frame-design.pages.dev` | Proxied |
