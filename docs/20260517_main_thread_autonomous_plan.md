# Main Thread Autonomous Work Plan

Date: 2026-05-17

Time box: up to the current long-running session / token budget. The original 2-hour window was relaxed by the user because this is weekend autonomous work.

Role: Main Thread. This role owns the current most important project work, not only retailer mapping. Current priority is the BetterCart AI approval website and affiliate application readiness, while also maintaining global project reasoning and AI workflow notes.

## Operating Rules

- This is a time-boxed autonomous loop, not a fixed checklist.
- If the initial plan finishes early, continue finding the next highest-value work.
- Favor reversible changes: inspect, make scoped changes, run QA, commit snapshots when meaningful.
- Website changes are allowed when they improve approval readiness, trust, interactivity, or demo credibility.
- Larger website changes should remain modular and backed by build / QA.
- Do not add fake reviews, fake traffic, fake partnerships, medical claims, disease claims, or real affiliate links.
- Avoid getting stuck on slow network requests or long timeouts; switch direction when a path is low-value.

## Initial Plan

1. Restore project context.
   - Read current docs and site structure.
   - Update project cognition from Retailer Mapping Thread to Main Thread.
   - Record current priority and next working assumptions.

2. Research affiliate approval reality.
   - Separate network approval, advertiser approval, product feed access, deep linking, and API access.
   - Focus on Awin, FlexOffers, ShareASale, Impact, CJ, Skimlinks, and related publisher experiences.
   - Identify likely bottlenecks after network approval.

3. Define MVP affiliate coverage threshold.
   - Estimate how many advertiser / retailer approvals are enough for a useful MVP.
   - Distinguish grocery, supplement, DTC packaged food, marketplace, and content monetization routes.
   - Identify fallback routes if direct advertiser approvals are slow.

4. Improve website only where it supports approval or reviewer understanding.
   - Check whether current site exposes enough credible interaction.
   - Consider a small enhancement to the demo or reviewer path using existing static data.
   - Avoid broad redesign.

5. Update documentation continuously.
   - Append every material change, reason, and result to this document.
   - Add or update supporting docs when needed.
   - Final summary must live in this document.

## Execution Log

### 13:19 CST - Start

- Repo: `/home/astalos/bettercart-ai-approval-site`
- Latest commit: `67b2a88 Prepare approval site for affiliate applications`
- Working tree: clean at start.
- Current live site from prior work: `https://www.bettercartai.com`
- Current immediate next human task from shutdown summary: register Awin using `https://www.bettercartai.com` and `contact@bettercartai.com`.

### 13:23 CST - Time Box Expanded

- User relaxed the time box from 2 hours to a longer autonomous session.
- Updated working assumption: continue beyond the initial plan if useful; focus on main-thread project cognition, affiliate approval reality, website credibility, and demo usefulness.

### 13:25 CST - Global Role Cognition Updated

Reason:

- Global project docs still treated Nutrition Engine / Retailer Mapping as the only concrete recovery roles.
- User explicitly updated this session role to Main Thread: current highest-priority project work plus global reasoning.

Changes:

- Updated `/home/astalos/usda_food_pipeline/AGENTS.md`.
- Updated `/home/astalos/usda_food_pipeline/DEVELOPMENT_STATUS.md`.
- Added `/home/astalos/usda_food_pipeline/project_ops/decisions/2026-05-17-main-thread-role-update.md`.

Result:

- Main Thread is now documented as the default project-driving role for website, affiliate application, advertiser / data access strategy, and AI workflow reasoning.

### 13:42 CST - Affiliate Approval Reality: Initial Evidence

Research focus:

- Awin, FlexOffers, ShareASale, Impact, Skimlinks.
- Distinguish platform approval, advertiser approval, and data feed / product catalog access.

Key official evidence:

- Awin says publishers must apply to advertiser programmes and receive approval before promoting them. Advertisers / Awin account managers review applications; common rejection reasons include inaccessible promotional site, poor fit with brand, or inadequate account description.
- Awin has some auto-approval advertisers and a soft membership concept for selected advertisers with auto-join and valid data feeds, but this is not a universal path.
- Awin product feeds contain deep links, name / description, price, images, and vertical-specific fields. Product feeds are useful for price comparison and niche product displays.
- FlexOffers says data feed subscriptions are for approved affiliate programs and include advertiser ID/name, update timestamp, application status, and product count. FlexOffers publisher marketing claims access to large product/feed scale, but per-advertiser approval still matters.
- ShareASale merchant datafeeds are optional: merchants decide whether to upload and maintain feeds. Required feed fields are SKU, product URL, price, category, subcategory, merchant ID; nutrition/ingredients are not implied.
- Impact has catalog APIs and product marketplace/catalog objects with advertiser/campaign IDs and number of items, but access is to catalogs available to the partner.
- Skimlinks aggregates many merchants and can reduce direct advertiser application friction, but it manually evaluates publishers and states a low acceptance rate on its merchant-facing page. It is useful as a fallback or later monetization route, not guaranteed access.

Initial conclusion:

- Affiliate approval has at least four gates:
  1. network/publisher account approval
  2. advertiser/program approval
  3. product feed/catalog availability
  4. field-level usefulness for our pipeline, especially UPC / GTIN / product URL / price / images
- Nutrition facts and ingredients should still be acquired from USDA/OFF/label sources, not expected from affiliate feeds.
- MVP should not assume one network approval unlocks enough product data.

### 13:55 CST - Affiliate Approval Strategy Doc Added

Reason:

- The project needs an explicit model of post-network advertiser approval and MVP coverage threshold.
- This is currently more important than expanding retailer mapping code.

Change:

- Added `docs/20260517_affiliate_approval_reality_check.md`.
- Added it to README application docs.

Main conclusions:

- Affiliate access has four gates: network approval, advertiser approval, product feed access, and field usefulness.
- Product feeds are mostly commerce / identity seed sources, not nutrition evidence sources.
- Early MVP can be useful with 3-5 approved commerce surfaces; a stronger early target is 8-15 useful advertisers / merchants.
- Recommended order: Awin, FlexOffers, ShareASale, Skimlinks/Sovrn-style aggregator, then Impact/CJ.

### 14:00 CST - Project-Wide Current Task Updated

Reason:

- `/home/astalos/usda_food_pipeline/project_ops/next_steps/CURRENT_TASK.md` still pointed to OFF barcode enrichment.
- OFF enrichment is still useful, but it should come after actual affiliate / advertiser feed access reality is known.

Change:

- Updated project-wide current task to Awin / FlexOffers application and advertiser-access reality check.

Result:

- Current task now matches the Main Thread priority:

```text
approval website -> affiliate network application -> advertiser approval / feed access -> product identity seeds
```

### 14:12 CST - Demo Evidence Profile Added

Reason:

- Current demo already sorts sample products by intent, but it did not explicitly show the future production boundary between food evidence and commerce links.
- Affiliate approval reviewers may need to see that the site is not pretending to have live inventory, paid rankings, or undisclosed affiliate data.

Change:

- Updated `app/tools/food-comparison-demo/page.jsx`.
- Updated `app/globals.css`.
- Added an `Evidence profile` panel for the current top sample.

Content added:

- Product evidence source.
- Rounded nutrition fields used by the demo.
- Commerce link status: `Not active`.
- Review status: sample only, with future label / retailer verification boundary.

Expected value:

- Better reviewer clarity.
- Stronger distinction between label evidence and future affiliate links.
- More product-like demo without adding backend, fake links, or recommendation logic.
