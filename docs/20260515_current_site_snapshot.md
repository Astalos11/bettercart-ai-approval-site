# BetterCart AI Current Site Snapshot

Date: 2026-05-15

## Current Deployment

Temporary live site:

- `https://illustrious-cranachan-4a01a9.netlify.app`

Final intended domain:

- `https://bettercartai.com`
- `https://www.bettercartai.com`

The final domain is not active in the site build until domain review, DNS, HTTPS, and `NEXT_PUBLIC_SITE_URL` are completed.

## Current Site Assets

- 10 food guides
- 6 comparison examples
- 17 trust / policy pages
- 1 demo tool
- 1 reviewer overview page
- 1 publisher kit page
- 1 site index page
- 1 `humans.txt` reviewer/contact file

## Current QA Status

Latest local checks:

- `npm run build` passes.
- `npm run check:static` passes.
- `npm run check:live` passes against the temporary Netlify URL.

Current QA coverage includes:

- required route existence
- internal static links
- obvious placeholder markers
- high-risk claim phrases
- missing image alt text
- key live route availability
- stale invalid Netlify URL detection

## Current Approval Strengths

- Clear packaged-food comparison positioning.
- Affiliate disclosure, privacy, terms, methodology, editorial policy, corrections, partner policy, and review process pages exist.
- A monetization transparency page explains how affiliate compensation should work without guaranteeing favorable coverage.
- A program compliance page documents planned promotional methods and prohibited tactics.
- Reviewer-facing and publisher-facing summary pages exist.
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
