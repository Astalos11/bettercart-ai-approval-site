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

## Live QA

After Netlify deploys, run:

```bash
npm run check:live
```

This checks the live temporary Netlify site for key pages, expected content, and stale invalid-domain metadata.

## Full QA

Before a final application submission or domain cutover, run:

```bash
npm run check:all
```

This runs the production build, static export QA, and live site QA in sequence.

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

## Application Docs

- `docs/20260515_launch_and_affiliate_application_checklist.md`
- `docs/20260515_current_site_snapshot.md`
- `docs/20260515_affiliate_application_notes.md`
- `docs/20260515_approval_site_review_checklist.md`
- `docs/20260515_domain_cutover_runbook.md`
- `docs/20260515_netlify_stale_deploy_troubleshooting.md`
- `docs/20260515_optimization_qa_report.md`

## Important Pages

- `/for-reviewers`
- `/publisher-kit`
- `/site-index`
- `/humans.txt`
- `/affiliate-disclosure`
- `/editorial-policy`
- `/review-process`
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
