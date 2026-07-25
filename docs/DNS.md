# DNS — formandframedesign.com

Operator card for the **FFD** zone on Cloudflare (same account as Pages).  
Sibling pattern: `hekmaticonsulting.com` · `johnhekmati.com` · `thecognitionfactory.com`.

| | |
|--|--|
| **Zone** | `formandframedesign.com` |
| **Nameservers (live)** | `bruce.ns.cloudflare.com` · `jessica.ns.cloudflare.com` |
| **Pages project** | `form-and-frame-design` |
| **Pages URL** | `https://form-and-frame-design.pages.dev` |
| **Custom hosts** | apex + `www` (attached via Actions) |
| **Zone tag (attach log)** | `1ba7d906ebd3d493d97f952670376d11` |

---

## Status checklist

- [x] Registrar NS → Cloudflare (`bruce` / `jessica`)
- [x] Pages project deployed (green Actions)
- [x] Custom domains attached (`attach-domain.yml` → apex + www) after API token fix
- [ ] **Web DNS records present** (apex / www resolve) — apply § Web below if still SOA-only
- [ ] SSL cert **active** on both custom hosts
- [ ] Proton mail path (after capital gate) — § Mail; tokens from Proton UI only

As of 2026-07-25 probes: NS on CF, **no public A/CNAME** for apex/www yet → custom host NXDOMAIN; `https://form-and-frame-design.pages.dev` returns 200.

---

## Web (required for site)

| Type | Name | Content | Proxy | TTL |
|------|------|---------|-------|-----|
| `CNAME` | `@` | `form-and-frame-design.pages.dev` | Proxied | Auto |
| `CNAME` | `www` | `form-and-frame-design.pages.dev` | Proxied | Auto |

Apex uses Cloudflare **CNAME flattening**. Prefer orange-cloud **Proxied**.

### Dashboard path

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → zone **formandframedesign.com** → **DNS → Records**
2. Add the two CNAMEs above if missing
3. Workers & Pages → **form-and-frame-design** → **Custom domains** → wait **pending → active**
4. Hard-refresh `https://formandframedesign.com` and `https://www.formandframedesign.com`

### Optional BIND-style import

```text
;; FFD — web (Pages). Set Proxy ON in UI after import if import lands DNS-only.
@     IN  CNAME  form-and-frame-design.pages.dev.
www   IN  CNAME  form-and-frame-design.pages.dev.
```

### API sketch (token with Zone · DNS · Edit)

```powershell
$headers = @{ Authorization = "Bearer $env:CLOUDFLARE_API_TOKEN"; "Content-Type" = "application/json" }
$zone = "<ZONE_ID>"
$body = '{"type":"CNAME","name":"@","content":"form-and-frame-design.pages.dev","proxied":true,"ttl":1}'
Invoke-RestMethod -Method Post -Uri "https://api.cloudflare.com/client/v4/zones/$zone/dns_records" -Headers $headers -Body $body
$body = '{"type":"CNAME","name":"www","content":"form-and-frame-design.pages.dev","proxied":true,"ttl":1}'
Invoke-RestMethod -Method Post -Uri "https://api.cloudflare.com/client/v4/zones/$zone/dns_records" -Headers $headers -Body $body
```

GitHub **Pages Edit** token may not write DNS. Add **Zone · DNS · Edit** for these zones if you automate.

---

## Mail — Proton (park until ready)

House shape matches personal / TCF / HCG. **Do not** copy verification or DKIM targets from other domains — open Proton → Domains → add `formandframedesign.com` and paste *its* values.

| Type | Name | Content | Proxy | Notes |
|------|------|---------|-------|-------|
| `MX` | `@` | `mail.protonmail.ch` | DNS only | Priority **10** |
| `MX` | `@` | `mailsec.protonmail.ch` | DNS only | Priority **20** |
| `TXT` | `@` | `protonmail-verification=<from Proton UI>` | DNS only | Verify domain |
| `TXT` | `@` | `v=spf1 include:_spf.protonmail.ch ~all` | DNS only | SPF |
| `CNAME` | `protonmail._domainkey` | `<from Proton UI>.domains.proton.ch` | DNS only | DKIM 1 |
| `CNAME` | `protonmail2._domainkey` | `<from Proton UI>.domains.proton.ch` | DNS only | DKIM 2 |
| `CNAME` | `protonmail3._domainkey` | `<from Proton UI>.domains.proton.ch` | DNS only | DKIM 3 |
| `TXT` | `_dmarc` | `v=DMARC1; p=quarantine` | DNS only | Or `p=none` while testing |

### BIND-style placeholders

```text
;; FFD — Proton mail (fill from Proton dashboard for THIS domain)
@     IN  MX   10 mail.protonmail.ch.
@     IN  MX   20 mailsec.protonmail.ch.
@     IN  TXT  "protonmail-verification=PASTE_FROM_PROTON"
@     IN  TXT  "v=spf1 include:_spf.protonmail.ch ~all"
protonmail._domainkey   IN CNAME PASTE1.domains.proton.ch.
protonmail2._domainkey  IN CNAME PASTE2.domains.proton.ch.
protonmail3._domainkey  IN CNAME PASTE3.domains.proton.ch.
_dmarc IN TXT "v=DMARC1; p=quarantine"
```

---

## Client preview subdomains (later)

FFD operator notes prefer claimable previews under this zone (e.g. `client.formandframedesign.com`). Pattern when needed:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| `CNAME` | `<client-slug>` | `form-and-frame-design.pages.dev` **or** a dedicated Pages project | Proxied |

Attach each hostname in Pages **Custom domains** before relying on the CNAME (avoids 522).

---

## Verify (PowerShell)

```powershell
Resolve-DnsName formandframedesign.com -Type NS
Resolve-DnsName formandframedesign.com -Type A
Resolve-DnsName www.formandframedesign.com
Invoke-WebRequest https://formandframedesign.com -Method Head
Invoke-WebRequest https://form-and-frame-design.pages.dev -Method Head
```

---

## Gotchas

| Symptom | Fix |
|---------|-----|
| Apex NXDOMAIN | Add § Web CNAMEs |
| Attach failed with empty secrets | Fixed — re-ran attach after `CLOUDFLARE_*` secrets set |
| 522 | Host attached in Pages **and** CNAME present |
| CAA / cert stuck | Allow Google + Let’s Encrypt + SSL.com issue records if any CAA exists |
| Mail proxied | Grey-cloud MX/TXT/DKIM only |

See also: [`CF_SCAFFOLD_TO_PROD.md`](CF_SCAFFOLD_TO_PROD.md)
