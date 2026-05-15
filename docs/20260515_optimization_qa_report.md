# BetterCart AI Optimization QA Report

Date: 2026-05-15

## Build Check

Command:

```bash
npm run build
```

Result:

- Passed.
- Static export completed.
- Generated routes increased from 24 to 45 after optimization.

## Static QA Script

Command:

```bash
npm run check:static
```

Result:

- Passed.
- Required routes checked: 27.
- Missing required routes: 0.
- Bad internal links: 0.
- Placeholder hits: 0.
- High-risk claim hits: 0.
- Missing image alt hits: 0.
- External anchor hits: 0.
- Accessibility misses: 0.
- Sitemap path misses: 0.
- Disclosure misses: 0.

## Live QA Script

Command:

```bash
npm run check:live
```

Latest result:

- `/` returned 200.
- `/for-reviewers/` returned 200.
- `/publisher-kit/` returned 200.
- `/affiliate-disclosure/` returned 200.
- `/how-we-make-money/` returned 200.
- `/review-process/` returned 200.
- `/site-index/` returned 200.
- `/icon.svg` returned 200.
- `/robots.txt` returned 200.
- `/sitemap.xml` returned 200.
- Old invalid domain occurrences: 0.

Temporary observation:

- `/program-compliance/` passed local build/static QA but returned 404 on the temporary live Netlify site immediately after push. This is likely deploy propagation lag and should be rechecked after Netlify finishes the latest build.

## Live Netlify Smoke Check

Checked live temporary Netlify URL:

```text
https://illustrious-cranachan-4a01a9.netlify.app/for-reviewers/
```

Result after URL guard fix:

- Page returned live HTML.
- New reviewer content was present.
- `Fast review path` appeared.
- `Editorial Team` appeared.
- Old invalid domain `bettercart-ai-approval-site.netlify.app` occurrences: 0.
- Current temporary Netlify domain occurrences: 4.

## Static HTTP Route Check

Method:

- Served `out/` locally with `python3 -m http.server 4173 --directory out`.
- Requested key routes through HTTP.

All checked routes returned `200`:

- `/`
- `/guides/`
- `/guides/how-to-choose-low-sugar-snacks/`
- `/guides/how-to-compare-lower-sodium-packaged-foods/`
- `/compare/`
- `/compare/low-sugar-snacks/`
- `/tools/food-comparison-demo/`
- `/topics/`
- `/for-reviewers/`
- `/about/`
- `/contact/`
- `/affiliate-disclosure/`
- `/editorial-policy/`
- `/methodology/`
- `/privacy/`
- `/terms/`
- `/faq/`
- `/partner-policy/`
- `/program-compliance/`
- `/data-sources/`
- `/corrections-policy/`
- `/publishing-standards/`
- `/content-calendar/`
- `/robots.txt`
- `/sitemap.xml`
- `/images/food-comparison-workspace.png`

## Content QA

Checked for obvious placeholder markers:

- `hello@`
- `example.com`
- `TODO`
- `lorem`

No live-page placeholder email remained. The only intentional matches were in documentation or sample-data disclaimers.

Additional static checks now cover:

- high-risk claims such as unsupported cure/treat/prevent wording
- missing image alt text
- unexpected external anchor links
- skip link and main content anchor
- critical reviewer pages in sitemap
- sample data disclosure on comparison detail pages
- non-medical disclaimer on guide detail pages

## Notes

- The live Netlify site currently uses `https://illustrious-cranachan-4a01a9.netlify.app`.
- A stale placeholder Netlify URL was found during extended QA and corrected in the default metadata, sitemap, robots, and Netlify environment config.
- The site still needs the final custom domain and working domain email before affiliate applications.
- After `bettercartai.com` is connected, update `NEXT_PUBLIC_SITE_URL` in Netlify to `https://bettercartai.com` and redeploy so sitemap and robots use the production domain.
