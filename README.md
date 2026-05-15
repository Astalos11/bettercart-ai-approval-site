# BetterCart AI Approval Site

Fast publisher-site MVP for affiliate network approval testing.

## Purpose

This repo contains the early BetterCart AI affiliate approval website.

It is a static Next.js site for:

- packaged food buying guides
- sample comparison pages
- affiliate disclosure and trust pages
- an AI-assisted food comparison demo
- reviewer-facing approval context

It is not the full BetterCart AI product backend and does not contain live retailer inventory.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The Netlify publish directory is:

```text
out
```

## Static QA

After building, run:

```bash
npm run check:static
```

This checks required exported routes, internal links, and obvious placeholder text.

## Deployment Notes

Current hosting target:

- Netlify

Before affiliate applications, complete:

- connect `bettercartai.com`
- connect `www.bettercartai.com`
- enable HTTPS
- update `NEXT_PUBLIC_SITE_URL=https://bettercartai.com`
- redeploy
- activate `contact@bettercartai.com`

## Important Pages

- `/for-reviewers`
- `/affiliate-disclosure`
- `/editorial-policy`
- `/methodology`
- `/partner-policy`
- `/data-sources`
- `/corrections-policy`
- `/privacy`
- `/terms`

## Content Boundaries

Avoid adding:

- fake reviews
- fake traffic claims
- medical advice
- disease-treatment claims
- undisclosed paid placements
- universal healthy/unhealthy food scores
