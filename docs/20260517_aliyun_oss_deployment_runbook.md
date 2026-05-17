# Alibaba Cloud OSS Deployment Runbook

Date: 2026-05-17

## Current Hosting Model

BetterCart AI approval site is deployed as:

```text
Next.js static export
-> Alibaba Cloud OSS static website hosting
-> https://www.bettercartai.com
```

Current public URL for affiliate applications:

```text
https://www.bettercartai.com
```

Do not use the bare domain as the primary application URL unless it is separately configured and verified.

## Build Locally

From repo root:

```bash
npm run build
```

Expected result:

```text
out/
  index.html
  404.html
  _next/
  about/
  contact/
  guides/
  compare/
  tools/
```

## Run Local QA

```bash
npm run check:local
```

This runs:

```text
npm run build
npm run check:static
npm run check:docs
```

## Create Upload Zip

Important:

The zip must contain files from inside `out/`, not an outer `out/` folder.

Correct structure inside zip:

```text
index.html
404.html
_next/
about/
contact/
guides/
compare/
tools/
```

Incorrect structure:

```text
out/index.html
out/_next/
```

Current repo stores the ready package as:

```text
approval-site-out.zip
```

Regenerate it after `npm run build` with:

```bash
npm run build:zip
```

## Upload To OSS

Alibaba Cloud OSS bucket:

```text
bettercartai-site
```

Deployment expectation:

- Upload / extract `approval-site-out.zip`.
- Ensure bucket root directly contains `index.html`, `404.html`, `_next/`, and route folders.
- Do not leave the site under an extra `out/` directory.

Static website hosting:

```text
Default homepage: index.html
Default 404 page: 404.html
```

## DNS / HTTPS

Current working host:

```text
www.bettercartai.com
```

Current DNS pattern:

```text
www CNAME -> Alibaba OSS custom-domain target
```

HTTPS:

- Managed through OSS custom domain certificate hosting.
- Current certificate is a free personal DV certificate.
- Free certificate validity may be short, so renewal must be tracked manually.

## Post-Upload QA

After manually uploading to OSS:

```bash
npm run check:live
```

Expected:

- All required public pages return `200`.
- `sitemap.xml` uses `https://www.bettercartai.com`.
- No stale Netlify domain appears.

Important manual pages:

- `https://www.bettercartai.com/`
- `https://www.bettercartai.com/for-reviewers/`
- `https://www.bettercartai.com/publisher-kit/`
- `https://www.bettercartai.com/affiliate-disclosure/`
- `https://www.bettercartai.com/tools/food-comparison-demo/`

## Affiliate Application Notes

Use:

```text
Website URL: https://www.bettercartai.com
Contact email: contact@bettercartai.com
```

Do not claim:

- live affiliate partnerships
- live retailer inventory
- real-time prices
- medical advice
- guaranteed health outcomes
