# Shutdown Summary

Date: 2026-05-16

## Current Status

BetterCart AI approval site is live on Alibaba Cloud OSS:

```text
https://www.bettercartai.com
```

This is the active URL to use for affiliate network applications. Do not use the bare domain yet.

## Completed Today

- Migrated public hosting path from Netlify to Alibaba Cloud OSS static website hosting.
- Confirmed static export uses `output: "export"` and `images.unoptimized`.
- Generated root-safe OSS upload package:

```text
/home/astalos/bettercart-ai-approval-site/approval-site-out.zip
```

- Fixed OSS directory route behavior so `/about/`, `/contact/`, and other routes resolve to their page `index.html`.
- Confirmed `robots.txt` and `sitemap.xml` use `https://www.bettercartai.com`.
- Confirmed `contact@bettercartai.com` is the public contact email across site content.
- Added FlexOffers verification meta to the homepage:

```html
<meta name="fo-verify" content="8bc90301-1e4b-4f06-8e86-46a56816ca5b" />
```

- Confirmed `/fo-verify.html` returns HTTP 200 on the live site.
- Ran live QA successfully.

## Verification

Passed:

```text
npm run build
npm run check:live
```

Previous local QA also passed:

```text
npm run check:local
```

## Next Task

Register Awin tomorrow using:

```text
Website URL: https://www.bettercartai.com
Contact email: contact@bettercartai.com
Site type: Comparison / Shopping guide / Content publisher
```

Use the site positioning:

```text
AI-assisted packaged food comparison guide helping shoppers compare packaged foods using nutrition facts, ingredient context, and editorial buying guides.
```

## Notes

- Do not claim existing affiliate partnerships unless approval is granted.
- Do not claim live price coverage or complete product coverage.
- Do not use fake traffic, fake reviews, or fake testimonials.
- Keep medical and disease-treatment claims out of application copy.
