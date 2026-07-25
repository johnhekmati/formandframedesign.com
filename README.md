# formandframedesign.com — Form & Frame Design

Claimable websites from real business signals. Light studio face · **Claim my site**.

| | |
|--|--|
| **Path** | `C:\Grok\formandframedesign.com` |
| **GitHub** | `johnhekmati/formandframedesign.com` |
| **Pages project** | `form-and-frame-design` |
| **Live** | `https://formandframedesign.com` (after domain) · `*.pages.dev` first |
| **Deploy** | Push `main` → Actions → `wrangler pages deploy` |

## Stack

- Static HTML + CSS (no build step)
- Brand assets under `assets/images/`
- Cache: `_headers`
- Local factory docs (agent, pipeline, economics) stay **on disk only** — not in this public repo

## Local preview

```powershell
cd C:\Grok\formandframedesign.com
npm run preview
# http://127.0.0.1:5290
```

## Ops

[`docs/CF_SCAFFOLD_TO_PROD.md`](docs/CF_SCAFFOLD_TO_PROD.md)
