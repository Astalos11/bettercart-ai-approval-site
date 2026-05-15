const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "out");

const requiredRoutes = [
  "/",
  "/guides/",
  "/compare/",
  "/topics/",
  "/for-reviewers/",
  "/publisher-kit/",
  "/site-index/",
  "/authors/bettercart-editorial-team/",
  "/tools/food-comparison-demo/",
  "/about/",
  "/contact/",
  "/affiliate-disclosure/",
  "/how-we-make-money/",
  "/editorial-policy/",
  "/review-process/",
  "/methodology/",
  "/partner-policy/",
  "/program-compliance/",
  "/data-sources/",
  "/corrections-policy/",
  "/publishing-standards/",
  "/content-calendar/",
  "/privacy/",
  "/terms/",
  "/faq/",
  "/robots.txt",
  "/sitemap.xml"
];

const placeholderPatterns = [
  /hello@bettercartai\.com/i,
  /example\.com/i,
  /lorem ipsum/i,
  /todo/i
];

const highRiskClaimPatterns = [
  /miracle/i,
  /\b(cures|cured|cure) (diabetes|cancer|disease|illness|obesity|anxiety|depression|hypertension)\b/i,
  /\b(treats|treated|treat) (diabetes|cancer|disease|illness|obesity|anxiety|depression|hypertension)\b/i,
  /\b(prevents|prevented|prevent) (diabetes|cancer|disease|illness|obesity|anxiety|depression|hypertension)\b/i,
  /guaranteed results/i,
  /best product/i,
  /must buy/i,
  /clinically proven/i
];

const requiredSitemapPaths = [
  "/for-reviewers",
  "/publisher-kit",
  "/affiliate-disclosure",
  "/how-we-make-money",
  "/editorial-policy",
  "/review-process",
  "/program-compliance",
  "/site-index"
];

function routeExists(route) {
  if (route === "/") return fs.existsSync(path.join(outDir, "index.html"));
  if (route.endsWith(".txt") || route.endsWith(".xml")) {
    return fs.existsSync(path.join(outDir, route.replace(/^\//, "")));
  }
  const trimmed = route.replace(/^\//, "").replace(/\/$/, "");
  return fs.existsSync(path.join(outDir, trimmed, "index.html"));
}

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath, results);
    else results.push(fullPath);
  }
  return results;
}

function collectHtmlLinks() {
  const htmlFiles = walk(outDir).filter((file) => file.endsWith(".html"));
  const hrefs = new Set();
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1].split("#")[0].split("?")[0];
      if (href.startsWith("/") && !href.startsWith("/_next/")) hrefs.add(href);
    }
  }
  return [...hrefs];
}

function main() {
  if (!fs.existsSync(outDir)) {
    console.error("Missing out/ directory. Run npm run build first.");
    process.exit(1);
  }

  const missingRequired = requiredRoutes.filter((route) => !routeExists(route));
  const badLinks = collectHtmlLinks().filter((route) => {
    if (route.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) return !fs.existsSync(path.join(outDir, route.replace(/^\//, "")));
    return !routeExists(route);
  });

  const searchableFiles = walk(outDir).filter((file) => file.endsWith(".html") || file.endsWith(".txt") || file.endsWith(".xml"));
  const placeholderHits = [];
  const highRiskClaimHits = [];
  const missingImageAltHits = [];
  const sitemapPathMisses = [];
  for (const file of searchableFiles) {
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of placeholderPatterns) {
      if (pattern.test(text)) placeholderHits.push(`${path.relative(outDir, file)} matched ${pattern}`);
    }
    for (const pattern of highRiskClaimPatterns) {
      if (pattern.test(text)) highRiskClaimHits.push(`${path.relative(outDir, file)} matched ${pattern}`);
    }
    if (file.endsWith(".html")) {
      for (const match of text.matchAll(/<img\b[^>]*>/gi)) {
        const tag = match[0];
        if (!/\balt="[^"]+"/i.test(tag)) {
          missingImageAltHits.push(`${path.relative(outDir, file)} has image without non-empty alt`);
        }
      }
    }
  }

  const sitemapPath = path.join(outDir, "sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    const sitemapText = fs.readFileSync(sitemapPath, "utf8");
    for (const route of requiredSitemapPaths) {
      if (!sitemapText.includes(route)) sitemapPathMisses.push(route);
    }
  } else {
    sitemapPathMisses.push("sitemap.xml missing");
  }

  console.log(`required_routes=${requiredRoutes.length}`);
  console.log(`missing_required=${missingRequired.length}`);
  console.log(`bad_internal_links=${badLinks.length}`);
  console.log(`placeholder_hits=${placeholderHits.length}`);
  console.log(`high_risk_claim_hits=${highRiskClaimHits.length}`);
  console.log(`missing_image_alt_hits=${missingImageAltHits.length}`);
  console.log(`sitemap_path_misses=${sitemapPathMisses.length}`);

  if (missingRequired.length) console.log(`Missing required routes:\n${missingRequired.join("\n")}`);
  if (badLinks.length) console.log(`Bad internal links:\n${badLinks.join("\n")}`);
  if (placeholderHits.length) console.log(`Placeholder hits:\n${placeholderHits.join("\n")}`);
  if (highRiskClaimHits.length) console.log(`High-risk claim hits:\n${highRiskClaimHits.join("\n")}`);
  if (missingImageAltHits.length) console.log(`Missing image alt hits:\n${missingImageAltHits.join("\n")}`);
  if (sitemapPathMisses.length) console.log(`Sitemap path misses:\n${sitemapPathMisses.join("\n")}`);

  if (missingRequired.length || badLinks.length || placeholderHits.length || highRiskClaimHits.length || missingImageAltHits.length || sitemapPathMisses.length) process.exit(1);
}

main();
