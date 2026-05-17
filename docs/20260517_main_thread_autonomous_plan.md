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

### 14:24 CST - Forum / Publisher Experience Added

Reason:

- Official docs explain formal requirements, but operational risk often appears in publisher experience: unexplained rejection, low-traffic skepticism, advertiser-level declines.

Change:

- Updated `docs/20260517_affiliate_approval_reality_check.md` with anecdotal publisher-experience notes.

Conclusion:

- Rejections should be treated as fit / maturity data points, not project invalidation.
- BetterCart AI should use precise application language, keep reviewer URLs visible, and apply in stages rather than assuming a single network solves access.

### 14:37 CST - Target Advertiser Matrix Added

Reason:

- After network approval, the team needs a practical plan for which advertiser categories to apply to and what fields to inspect.
- A generic "apply to brands" instruction is too vague for MVP data-access validation.

Change:

- Added `docs/20260517_affiliate_target_advertiser_matrix.md`.
- Added it to README application docs.

Main points:

- First useful target is not "many brands"; it is 3-5 approved commerce surfaces with stable links or feeds.
- Better early target is 8-15 useful advertisers / merchants.
- Feed inspection must happen before building ingestion.
- Nutrition / ingredients remain external enrichment fields, not assumed affiliate feed fields.

### 14:43 CST - Reviewer Readiness Matrix Updated

Reason:

- The public reviewer page should reflect the current site state: custom domain, contact email, and verification path are now active.

Change:

- Updated `app/for-reviewers/page.jsx`.
- Added readiness rows for contact path and domain verification.

Expected value:

- Faster reviewer understanding.
- Less ambiguity during Awin / FlexOffers review.

### 14:52 CST - Main Thread AI Workflow Documented

Reason:

- User explicitly wants global project and AI workflow cognition, not only website edits.
- The project needs a durable convention for long-running autonomous Main Thread sessions.

Change:

- Added `/home/astalos/usda_food_pipeline/project_ops/conventions/main_thread_ai_workflow.md`.
- Added a reference to it in `/home/astalos/usda_food_pipeline/AGENTS.md`.

Content:

- Human / ChatGPT / Codex / repo-docs workflow.
- Main Thread vs specialized thread responsibilities.
- Autonomous work loop.
- Documentation and commit rules.
- Website / affiliate and data experiment rules.

### 15:05 CST - Awin Application Runbook Added

Reason:

- "Register Awin tomorrow" should be an executable checklist, not a vague next step.

Change:

- Added `docs/20260517_awin_application_runbook.md`.
- Added it to README docs.

Contents:

- Exact website URL and contact email.
- Short / long description copy.
- Promotional methods wording.
- Reviewer URLs.
- Claims to avoid.
- Network approval checklist.
- Post-approval advertiser/feed inspection checklist.
- Fallback if declined.

### 15:17 CST - Product Feed Identifier Evidence Strengthened

Reason:

- We need to know whether affiliate feeds are even plausible UPC seed sources.

Additional evidence:

- FlexOffers Product Files can include UPC, SKU, MPN, price, image, and product attributes.
- Awin enhanced feeds can follow Google product spec and include `gtin`, `mpn`, `brand`, product links, images, price, availability, and category.

Docs updated:

- `docs/20260517_affiliate_approval_reality_check.md`
- `docs/20260517_affiliate_target_advertiser_matrix.md`

Conclusion:

- The affiliate-feed UPC seed route is plausible.
- It remains advertiser-dependent; real feed field inspection is mandatory before building import logic.

### 15:27 CST - Affiliate Application Tracker Template Added

Reason:

- After network approval, the most valuable data will be advertiser statuses, feed availability, and actual feed fields.
- Without a tracker, the project will lose evidence needed to decide whether affiliate feeds can support the MVP.

Change:

- Added `docs/20260517_affiliate_application_tracker_template.md`.
- Added it to README docs.

Use:

- Track network applications.
- Track advertiser applications.
- Track feed fields such as UPC / GTIN / SKU / MPN / price / product URL.
- Label each advertiser/feed as useful, partial, or not useful now.

### 15:38 CST - Global Affiliate Coverage Decision Added

Reason:

- The MVP threshold should be recorded in project_ops, not only in website docs.

Change:

- Added `/home/astalos/usda_food_pipeline/project_ops/decisions/2026-05-17-affiliate-coverage-threshold.md`.

Decision:

- Minimum useful threshold: 3-5 approved commerce surfaces.
- Stronger early target: 8-15 useful advertisers / merchants.
- Do not build generalized feed ingestion before inspecting real approved feed fields.

### 15:44 CST - Demo Evidence Boundary Added To QA

Reason:

- The demo evidence profile is strategically important for reviewer trust.
- Future edits should not accidentally remove the separation between label evidence and commerce links.

Change:

- Updated `scripts/check_static_site.js`.

New checks:

- demo page must include `evidence profile`.
- demo page must include `commerce link` boundary language.

### 15:57 CST - Affiliate Comparison Content Policy Added

Reason:

- The product may eventually compare products unfavorably, which creates advertiser / affiliate terms risk.
- The site and future product need a reusable language boundary.

Change:

- Added `docs/20260517_affiliate_comparison_content_policy.md`.
- Added it to README docs.

Policy:

- Use `fit / not a strong fit / tradeoff / evidence flag`.
- Avoid `bad / unhealthy / worst / avoid this brand`.
- Avoid strong purchase CTAs beside poor-fit signals unless advertiser terms allow.
- Track advertiser flags such as `allows_comparative_content`, `no_disparagement_clause`, and `requires_preapproval`.

### 16:05 CST - Public Partner / Compliance Pages Aligned

Reason:

- The public trust pages should match the new affiliate comparison content policy.

Change:

- Updated `lib/content.js` for `partner-policy` and `program-compliance`.

Wording change:

- Comparison language should stay factual, evidence-based, and focused on shopping-intent fit.
- Program compliance now explicitly avoids brand-disparaging language such as `worst`, `dangerous`, or `avoid this brand`.

### 16:18 CST - Awin Payment Readiness Note Added

Reason:

- Awin application can be blocked by a small publisher joining deposit / payment step.
- This is not a website feature, but it is part of application readiness.

Change:

- Updated `docs/20260517_awin_application_runbook.md`.

Note:

- Current Awin FAQ describes a small `1 EUR/GBP/USD` or `$1` deposit used for compliance / identity checks and credited back after the first payment threshold.
- Older Awin materials mention a higher deposit, so the applicant should follow the current signup screen.

### 16:32 CST - Boss-Facing Affiliate Summary Added

Reason:

- The research and website readiness work now spans many docs.
- A boss-facing summary should state the practical decision: the site is ready enough to test, but real MVP feasibility depends on advertiser approval and feed field quality.

Change:

- Added `docs/20260517_boss_affiliate_application_summary_cn.md`.
- Added it to README docs.

Main points:

- `https://www.bettercartai.com` is ready enough for Awin / FlexOffers application attempts.
- Network approval is only gate one; advertiser approval, feed access, and field usefulness remain separate gates.
- MVP needs roughly `3-5` useful commerce surfaces minimum, with `8-15` as a stronger early target.
- Affiliate feeds should be treated as commerce / identity seeds, not nutrition evidence.

### 16:47 CST - Local / Live QA Passed And OSS Zip Refreshed

Reason:

- After documentation and application-readiness changes, the deploy package should not drift from the latest static export.
- Alibaba OSS deployment remains manual, so the zip package needs to be correct even when live upload is not performed by Codex.

Checks:

- `npm run check:local` passed.
- `npm run check:live` passed against `https://www.bettercartai.com`.

Change:

- Regenerated `approval-site-out.zip` from inside `out/`, with no outer `out/` directory.

### 16:58 CST - Affiliate Tracker CSV Added

Reason:

- The tracker template is useful as documentation, but actual Awin / FlexOffers work needs a fillable sheet.
- The important evidence is advertiser approval, feed availability, field quality, and comparison-policy risk.

Change:

- Added `docs/20260517_affiliate_application_tracker.csv`.
- Added it to README docs.

Fields included:

- network / advertiser / category / status
- feed availability and field coverage
- UPC / GTIN / SKU / MPN / brand / category availability
- comparison-content policy flags
- MVP usefulness label

### 17:05 CST - Docs Index QA Expanded Beyond Markdown

Reason:

- README now references a tracker CSV under `docs/`.
- The docs-index check should validate all backticked `docs/*` references, not only `.md` files.

Change:

- Updated `scripts/check_docs_index.js` to validate any README `docs/*` reference.

### 17:17 CST - Alibaba OSS Deployment Runbook Added

Reason:

- The older domain cutover runbook still reflects the Netlify deployment path.
- Current deployment is Alibaba Cloud OSS static hosting, and the most common operational mistake is zipping / uploading an extra `out/` wrapper directory.

Change:

- Added `docs/20260517_aliyun_oss_deployment_runbook.md`.
- Added it to README docs.

Core rule:

- `approval-site-out.zip` must contain `index.html`, `_next/`, and route folders at zip root.
- It must not contain `out/index.html`.

### 17:31 CST - Affiliate Feed Source Notes Added

Reason:

- Current strategy depends on public claims about feed fields, merchant access, and network behavior.
- These should be preserved as source notes rather than left as unsourced memory.

Change:

- Added `docs/20260517_affiliate_feed_access_source_notes.md`.
- Added it to README docs.

Sources summarized:

- FlexOffers data feed subscriptions and Product Files.
- Awin public food / nutrition-adjacent program examples.
- Skimlinks merchant / publisher approval model.
- ShareASale datafeed context.

### 17:43 CST - OSS Zip Structure QA Added

Reason:

- Alibaba OSS deployment depends on uploading a zip whose root directly contains `index.html`, `_next/`, and route folders.
- This was a real operational footgun during the migration from Netlify.

Change:

- Added `scripts/check_export_zip.py`.
- Added `npm run check:zip`.
- Documented the zip check in README.

### 17:52 CST - OSS Zip Creation Script Added

Reason:

- Zip creation was documented as an inline Python snippet, which is easy to copy incorrectly.
- The repo should have one canonical command for creating the Alibaba OSS upload package.

Change:

- Added `scripts/create_export_zip.py`.
- Added `npm run build:zip`.
- Updated README and Alibaba OSS deployment runbook to use the command.

### 18:04 CST - Application Submission Copy v2 Added

Reason:

- The previous submission draft was useful, but the project strategy has tightened around transparent sample data, no fake partnership claims, and affiliate links as commerce paths rather than food evidence.
- Tomorrow's Awin / FlexOffers application should use concise, consistent wording.

Change:

- Added `docs/20260517_affiliate_application_submission_copy_v2.md`.
- Added it to README docs.

Focus:

- Website URL and contact email.
- Short / long publisher description.
- Promotional methods.
- New-site traffic note.
- Data / product coverage note.
- Awin / FlexOffers-specific snippets.
- Claims to avoid.

### 18:25 CST - Publisher Kit Reviewer Facts Panel Added

Reason:

- The publisher kit had the right information, but reviewers still had to read paragraphs.
- A compact facts panel makes the application URL, contact email, publisher type, link status, commerce model, and data boundary scannable.

Change:

- Updated `app/[page]/page.jsx`.
- Updated `app/globals.css`.

Boundary:

- No new claims were introduced.
- The panel repeats existing application-readiness facts and keeps `No live affiliate links` visible.

### 18:33 CST - Publisher Kit Facts Added To Static QA

Reason:

- The publisher facts panel contains application-critical text.
- Future edits should not accidentally remove the public URL, contact email, publisher type, no-live-affiliate-links status, or sample-data boundary.

Change:

- Updated `scripts/check_static_site.js`.

### 18:40 CST - Publisher Kit Facts Added To Live QA

Reason:

- Static QA only protects the latest local export.
- Since Alibaba OSS upload is manual, live QA should also detect whether the published site has application-critical publisher-kit facts.

Change:

- Updated `scripts/check_live_site.js`.

### 18:49 CST - User Strategy Decisions Recorded

Reason:

- User clarified three product / operations decisions while present.
- These decisions change later autonomous work and advertiser application strategy.

Decisions:

- Brand name is fixed for now as `BetterCart AI`.
- After network approval, apply broadly to advertisers to observe approval rate, while still prioritizing more relevant food / grocery / nutrition / snack / beverage / supplement advertisers.
- Website should not be limited to the previous "minimum approval site" bar; it should keep improving toward a credible real content site.

Change:

- Added `docs/20260517_affiliate_application_strategy_update.md`.
- Added it to README docs.
