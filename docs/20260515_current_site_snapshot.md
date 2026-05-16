# BetterCart AI Current Site Snapshot

Date: 2026-05-16

## Current Deployment

Temporary live site:

- `https://illustrious-cranachan-4a01a9.netlify.app`

Final intended domain:

- `https://bettercartai.com`
- `https://www.bettercartai.com`

The final domain is not active in the site build until domain review, DNS, HTTPS, and `NEXT_PUBLIC_SITE_URL` are completed.

## Current Site Assets

- 12 food guides
- 8 comparison examples
- 18 trust / policy pages
- 1 demo tool
- 12 USDA-derived static demo product samples
- 1 reviewer overview page
- 1 publisher kit page
- 1 site index page
- 1 `humans.txt` reviewer/contact file
- 1 Netlify `_headers` file for basic static security headers
- 2 optimized generated WebP visual assets:
  - `/images/food-comparison-visual-v2.webp`
  - `/images/packaged-food-guide-flatlay.webp`

## Current QA Status

Latest local checks:

- `npm run build` passes.
- `npm run check:static` passes.
- `npm run check:docs` passes.
- `npm run check:local` passes.
- `npm run check:live` currently shows the temporary Netlify deploy is stale for newly added routes.

Current QA coverage includes:

- required route existence
- internal static links
- obvious placeholder markers
- high-risk claim phrases
- missing image alt text
- unexpected external anchor links
- skip link and main content anchor
- comparison table header scopes
- key live route availability
- stale invalid Netlify URL detection
- sample data disclosure on comparison detail pages
- non-medical disclaimer on guide detail pages
- docs referenced from README exist
- oversized public images are blocked
- demo USDA FDC sample provenance is present
- homepage demo sample provenance is present
- interactive search controls are present on guides, comparisons, topics, and site index
- demo reset selection control is present
- Netlify `_headers` is exported

## Current Approval Strengths

- Clear packaged-food comparison positioning.
- Affiliate disclosure, privacy, terms, methodology, editorial policy, corrections, partner policy, and review process pages exist.
- A monetization transparency page explains how affiliate compensation should work without guaranteeing favorable coverage.
- A program compliance page documents planned promotional methods and prohibited tactics.
- Reviewer-facing and publisher-facing summary pages exist.
- Homepage, guide index, guide articles, comparison index, comparison pages, topics, reviewer page, and key trust pages now include visual summaries, image assets, emoji cards, content chips, or next-step cards.
- Guides, comparisons, topics, and site index include searchable browser controls with visible result counts, quick search chips, clear controls, and active states.
- The demo includes intent controls, category filtering, selected-product comparison, a reset control, a selected count, a top-sample result card, dynamic top-result reasoning, color-coded metric cells, and metric bars.
- Publisher Kit, Data Sources, and Program Compliance pages include snapshot matrices for reviewer scanning.
- Demo examples are static, rounded USDA-derived samples with FDC provenance labels.
- Sample data is disclosed on demo and comparison pages.
- No real affiliate links are present yet, so there are no undisclosed affiliate placements.
- Site avoids medical advice, fake traffic claims, fake testimonials, and universal food scores.
- A `humans.txt` file exposes reviewer, disclosure, and contact paths.

## Manual Blockers Before Application

- Complete `bettercartai.com` domain review.
- Connect `bettercartai.com` and `www.bettercartai.com` in Netlify.
- Enable HTTPS.
- Set `NEXT_PUBLIC_SITE_URL=https://bettercartai.com` in Netlify.
- Redeploy after setting the final domain.
- Activate a working `contact@bettercartai.com` mailbox.

## Remaining Approval Risks

- The site has limited operating history.
- Traffic history is not yet established.
- Comparison examples use sample editorial data, not live verified retailer product pages.
- Some advertisers may require stronger proof of content authority or audience.

## Recommended Application Posture

Use the site for lightweight network-level approval tests after domain and email setup.

Do not represent it as a mature high-traffic publisher or a credentialed medical nutrition service.
