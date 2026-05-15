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
  "/cookie-policy/",
  "/terms/",
  "/faq/",
  "/humans.txt",
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
  const disclosureMisses = [];
  const externalAnchorHits = [];
  const accessibilityMisses = [];
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
      for (const match of text.matchAll(/<a\b[^>]*href="https?:\/\/[^"]+"/gi)) {
        externalAnchorHits.push(`${path.relative(outDir, file)} has external anchor ${match[0]}`);
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

  const comparisonFiles = walk(path.join(outDir, "compare")).filter(
    (file) => file.endsWith("index.html") && path.dirname(file) !== path.join(outDir, "compare")
  );
  for (const file of comparisonFiles) {
    const text = fs.readFileSync(file, "utf8").toLowerCase();
    if (!text.includes("sample data")) {
      disclosureMisses.push(`${path.relative(outDir, file)} missing sample data disclosure`);
    }
    if (!text.includes("added sugar")) {
      disclosureMisses.push(`${path.relative(outDir, file)} missing added sugar comparison column`);
    }
  }

  const guideFiles = walk(path.join(outDir, "guides")).filter(
    (file) => file.endsWith("index.html") && path.dirname(file) !== path.join(outDir, "guides")
  );
  for (const file of guideFiles) {
    const text = fs.readFileSync(file, "utf8").toLowerCase();
    if (!text.includes("not medical advice")) {
      disclosureMisses.push(`${path.relative(outDir, file)} missing non-medical disclaimer`);
    }
  }

  const demoPath = path.join(outDir, "tools", "food-comparison-demo", "index.html");
  if (fs.existsSync(demoPath)) {
    const demoText = fs.readFileSync(demoPath, "utf8").toLowerCase();
    for (const phrase of ["sample-data demo", "does not contain affiliate links", "paid placement"]) {
      if (!demoText.includes(phrase)) disclosureMisses.push(`tools/food-comparison-demo/index.html missing ${phrase}`);
    }
  }

  const contactPath = path.join(outDir, "contact", "index.html");
  if (fs.existsSync(contactPath)) {
    const contactText = fs.readFileSync(contactPath, "utf8").toLowerCase();
    if (!contactText.includes("mailto:contact@bettercartai.com")) {
      disclosureMisses.push("contact/index.html missing mailto contact action");
    }
  }

  const homePath = path.join(outDir, "index.html");
  if (fs.existsSync(homePath)) {
    const homeText = fs.readFileSync(homePath, "utf8");
    if (!homeText.includes('href="#main-content"')) accessibilityMisses.push("index.html missing skip link");
    if (!homeText.includes('id="main-content"')) accessibilityMisses.push("index.html missing main content anchor");
  }

  console.log(`required_routes=${requiredRoutes.length}`);
  console.log(`missing_required=${missingRequired.length}`);
  console.log(`bad_internal_links=${badLinks.length}`);
  console.log(`placeholder_hits=${placeholderHits.length}`);
  console.log(`high_risk_claim_hits=${highRiskClaimHits.length}`);
  console.log(`missing_image_alt_hits=${missingImageAltHits.length}`);
  console.log(`external_anchor_hits=${externalAnchorHits.length}`);
  console.log(`accessibility_misses=${accessibilityMisses.length}`);
  console.log(`sitemap_path_misses=${sitemapPathMisses.length}`);
  console.log(`disclosure_misses=${disclosureMisses.length}`);

  if (missingRequired.length) console.log(`Missing required routes:\n${missingRequired.join("\n")}`);
  if (badLinks.length) console.log(`Bad internal links:\n${badLinks.join("\n")}`);
  if (placeholderHits.length) console.log(`Placeholder hits:\n${placeholderHits.join("\n")}`);
  if (highRiskClaimHits.length) console.log(`High-risk claim hits:\n${highRiskClaimHits.join("\n")}`);
  if (missingImageAltHits.length) console.log(`Missing image alt hits:\n${missingImageAltHits.join("\n")}`);
  if (externalAnchorHits.length) console.log(`External anchor hits:\n${externalAnchorHits.join("\n")}`);
  if (accessibilityMisses.length) console.log(`Accessibility misses:\n${accessibilityMisses.join("\n")}`);
  if (sitemapPathMisses.length) console.log(`Sitemap path misses:\n${sitemapPathMisses.join("\n")}`);
  if (disclosureMisses.length) console.log(`Disclosure misses:\n${disclosureMisses.join("\n")}`);

  if (missingRequired.length || badLinks.length || placeholderHits.length || highRiskClaimHits.length || missingImageAltHits.length || externalAnchorHits.length || accessibilityMisses.length || sitemapPathMisses.length || disclosureMisses.length) process.exit(1);
}

main();
