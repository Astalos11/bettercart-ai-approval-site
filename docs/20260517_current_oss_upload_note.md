# Current OSS Upload Note

Date: 2026-05-17

Upload package content baseline:

```text
a83bccd
```

Later docs-only commits may advance the GitHub repo without changing the uploaded static site package.

Current upload package:

```text
/home/astalos/bettercart-ai-approval-site/approval-site-out.zip
```

Current package size:

```text
1005K
```

## Why Upload Again

The latest repo version includes a richer USDA-derived demo:

- 80 static USDA FDC sample products
- product search
- quick searches
- category filters
- category icons
- dataset snapshot
- no live affiliate links
- no retailer inventory calls

GitHub push does not update Alibaba OSS automatically.

The site only updates after manually uploading / extracting the latest `approval-site-out.zip` to the OSS bucket root.

## Upload Reminder

Use Alibaba Cloud OSS bucket:

```text
bettercartai-site
```

The extracted bucket root should contain:

```text
index.html
404.html
_next/
about/
contact/
for-reviewers/
tools/
...
```

It should not contain:

```text
out/index.html
```

## Verify After Upload

Run:

```bash
npm run check:live
```

Then manually open:

```text
https://www.bettercartai.com/tools/food-comparison-demo/
```

Confirm the demo mentions:

```text
80 static USDA FDC sample products
```
