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

Zone `formandframedesign.com` on the same CF account → run **Attach Cloudflare custom domain**.
