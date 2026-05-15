# BetterCart AI Domain Cutover Runbook

Date: 2026-05-15

Target domain:

```text
bettercartai.com
www.bettercartai.com
```

Current temporary Netlify URL:

```text
https://illustrious-cranachan-4a01a9.netlify.app
```

## Step 1: Wait For Domain Status

In Alibaba Cloud, confirm:

- registration review passed
- real-name verification passed if required
- DNS management is available
- domain status is normal

Do not change records before the domain can be managed normally.

## Step 2: Add Domain In Netlify

In Netlify:

```text
Site → Domain management → Add custom domain
```

Add:

```text
bettercartai.com
www.bettercartai.com
```

Use Netlify's exact DNS instructions instead of guessing records.

## Step 3: Configure DNS In Alibaba Cloud

Typical pattern:

```text
www    CNAME    <your-netlify-site>.netlify.app
@      A/ALIAS  <Netlify-provided target>
```

Use the records shown by Netlify for this exact site.

## Step 4: Wait For HTTPS

In Netlify:

```text
Domain management → HTTPS
```

Wait for the certificate to become active.

## Step 5: Update Site URL

In Netlify environment variables, set:

```text
NEXT_PUBLIC_SITE_URL=https://bettercartai.com
```

Then trigger a new deploy.

## Step 6: Verify SEO Routes

After deployment, check:

```text
https://bettercartai.com/robots.txt
https://bettercartai.com/sitemap.xml
https://bettercartai.com/for-reviewers/
```

Confirm sitemap URLs use:

```text
https://bettercartai.com
```

not the temporary Netlify domain.

## Step 7: Set Up Email

Minimum required mailbox:

```text
contact@bettercartai.com
```

Options:

- Google Workspace
- Zoho Mail
- Alibaba Cloud email
- Cloudflare Email Routing plus an external sending account

Confirm the mailbox can receive replies before applying to affiliate networks.

## Step 8: Affiliate Application Readiness

Use:

```text
Website: https://bettercartai.com
Email: contact@bettercartai.com
Publisher type: Content publisher / comparison site / shopping guide
```

Key page to include if the application allows notes:

```text
https://bettercartai.com/for-reviewers/
```

