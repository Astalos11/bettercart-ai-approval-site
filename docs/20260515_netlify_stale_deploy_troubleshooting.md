# Netlify Stale Deploy Troubleshooting

Date: 2026-05-15

## Symptom

Local build and static QA pass, but the temporary Netlify site does not show the newest pushed routes.

Observed examples:

- Local `out/program-compliance/index.html` exists.
- Local `out/humans.txt` exists.
- Temporary live site returned 404 for `/program-compliance/` and `/humans.txt` shortly after push.

## First Checks

1. Open Netlify deploys for the site.
2. Confirm a new production deploy was triggered from GitHub `main`.
3. Confirm the deploy finished successfully.
4. Open the deploy log and check:
   - build command: `npm run build`
   - publish directory: `out`
   - branch: `main`
   - no build errors

## Repo-Side Checks

Run locally:

```bash
npm run build
npm run check:static
```

Confirm:

- `out/program-compliance/index.html` exists.
- `out/humans.txt` exists.
- `out/sitemap.xml` includes `/program-compliance`.

## Netlify Settings To Verify

- Site is connected to `Astalos11/bettercart-ai-approval-site`.
- Production branch is `main`.
- Build command is `npm run build`.
- Publish directory is `out`.
- Environment variable is currently:
  - `NEXT_PUBLIC_SITE_URL=https://illustrious-cranachan-4a01a9.netlify.app`
- After final domain setup, update it to:
  - `NEXT_PUBLIC_SITE_URL=https://bettercartai.com`

## When To Recheck

After a successful Netlify production deploy, run:

```bash
npm run check:live
```

If the same new routes still 404 after a successful deploy, clear Netlify cache and redeploy.

## 2026-05-16 Recheck

`npm run check:live` still returned the same stale-route pattern after multiple successful local builds and GitHub pushes:

- `/program-compliance/` returned 404
- `/humans.txt` returned 404
- existing older pages such as `/for-reviewers/`, `/publisher-kit/`, `/affiliate-disclosure/`, `/how-we-make-money/`, and `/site-index/` returned 200

Repo config currently includes:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

This suggests the next manual check should happen inside Netlify:

- verify the latest production deploy SHA matches GitHub `main`
- verify Netlify is reading `netlify.toml`
- verify publish directory is not overridden to `.next` in the Netlify UI
- trigger "Clear cache and deploy site"
