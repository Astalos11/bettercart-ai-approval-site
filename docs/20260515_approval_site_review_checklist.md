# BetterCart AI Approval Site Review Checklist

Date: 2026-05-15

## Current Site Purpose

BetterCart AI is currently positioned as an early affiliate publisher / comparison content site for packaged food shoppers.

The site is not presented as a final retailer product, medical tool, or live recommendation engine. It is positioned as a responsible shopping research property with guides, sample comparisons, disclosure pages, and a small demo.

## Pages Currently Covered

Core pages:

- Home
- For Reviewers
- Publisher Kit
- Topics
- Site Index
- About
- Contact
- Food Guides index
- Comparison Examples index
- Food Comparison Demo

Trust and policy pages:

- Affiliate Disclosure
- Editorial Policy
- Methodology
- Privacy Policy
- Terms and Disclaimer
- FAQ
- Partner and Advertiser Policy
- Data Sources
- Corrections Policy
- Publishing Standards
- Review Process
- Content Calendar

Content pages:

- How to Choose Low Sugar Snacks
- How to Compare Protein Bars
- How to Read Nutrition Labels Without Overthinking It
- What to Check in Kids Snacks
- How to Compare Breakfast Cereals
- Ingredient Red Flags in Packaged Foods
- How to Compare Lower Sodium Packaged Foods
- How to Choose Pantry Staples

Comparison examples:

- Low Sugar Snack Comparison
- High Protein Bar Comparison
- Breakfast Cereal Comparison
- Lower Sodium Pantry Food Comparison

## Approval Strengths

- Clear site purpose.
- Visible contact path using `contact@bettercartai.com`.
- Affiliate disclosure exists.
- Privacy, terms, editorial policy, methodology, corrections, and data-source pages exist.
- Content is focused on packaged food shopping and comparison.
- Site avoids medical advice and universal food scores.
- Site discloses that sample comparisons are not live product reviews.
- Static export works for Netlify.
- Sitemap and robots routes are generated.
- A reviewer overview page exists for affiliate network and advertiser review.
- A publisher kit page summarizes audience, content formats, promotional methods, and non-goals.
- A topic hub connects related guides and comparison examples.
- A site index page exposes all guides, comparisons, tools, and trust pages in one place.
- A reusable static QA script checks required routes, internal links, and obvious placeholders.

## Known Manual Follow-Ups

- Create or activate `contact@bettercartai.com`.
- Bind `bettercartai.com` and `www.bettercartai.com` to the Netlify site after domain review passes.
- Update `NEXT_PUBLIC_SITE_URL` in Netlify to `https://bettercartai.com` after the custom domain works.
- Rebuild after setting the final domain so sitemap and robots use the production domain.
- Consider replacing sample comparison data with verified product examples before applying to stricter advertisers.
- Consider adding a few screenshots or product-label source references once real product pages are available.

## Current Risk Notes

- The site is still an early content property, not a mature publisher with traffic history.
- It may be acceptable for network-level review but could still fail advertiser-level review if the advertiser expects traffic, social proof, or established content.
- Sample comparison pages are useful for demonstrating format but should not be represented as real hands-on reviews.
- No real affiliate links are currently included.

## Build Result

Latest local production build during optimization:

- `npm run build` passed.
- Static export generated successfully.
- `npm run check:static` passed.
- Current static page count: 40 generated routes.
