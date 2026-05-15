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
  "/editorial-policy/",
  "/review-process/",
  "/methodology/",
  "/partner-policy/",
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
  for (const file of searchableFiles) {
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of placeholderPatterns) {
      if (pattern.test(text)) placeholderHits.push(`${path.relative(outDir, file)} matched ${pattern}`);
    }
  }

  console.log(`required_routes=${requiredRoutes.length}`);
  console.log(`missing_required=${missingRequired.length}`);
  console.log(`bad_internal_links=${badLinks.length}`);
  console.log(`placeholder_hits=${placeholderHits.length}`);

  if (missingRequired.length) console.log(`Missing required routes:\n${missingRequired.join("\n")}`);
  if (badLinks.length) console.log(`Bad internal links:\n${badLinks.join("\n")}`);
  if (placeholderHits.length) console.log(`Placeholder hits:\n${placeholderHits.join("\n")}`);

  if (missingRequired.length || badLinks.length || placeholderHits.length) process.exit(1);
}

main();
