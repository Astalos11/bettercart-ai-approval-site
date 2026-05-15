const https = require("https");
const { getSiteUrl } = require("../lib/site-cjs.cjs");

const siteUrl = getSiteUrl();
const requiredPages = [
  ["/", "BetterCart AI"],
  ["/for-reviewers/", "Fast review path"],
  ["/publisher-kit/", "Publisher Kit"],
  ["/affiliate-disclosure/", "Affiliate Disclosure"],
  ["/how-we-make-money/", "How We Make Money"],
  ["/review-process/", "Review Process"],
  ["/program-compliance/", "Program Compliance Notes"],
  ["/site-index/", "Browse BetterCart AI"],
  ["/icon.svg", "<svg"],
  ["/humans.txt", "BetterCart AI"],
  ["/robots.txt", "Sitemap:"],
  ["/sitemap.xml", siteUrl]
];

const forbiddenText = ["bettercart-ai-approval-site.netlify.app"];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve({ statusCode: res.statusCode, data }));
      })
      .on("error", reject);
  });
}

async function main() {
  let failed = false;
  for (const [path, expected] of requiredPages) {
    const url = `${siteUrl}${path}`;
    const { statusCode, data } = await fetchText(url);
    const hasExpected = data.includes(expected);
    const forbiddenHits = forbiddenText.filter((needle) => data.includes(needle));
    console.log(`${statusCode} ${path} expected=${hasExpected} forbidden_hits=${forbiddenHits.length}`);
    if (statusCode !== 200 || !hasExpected || forbiddenHits.length) failed = true;
  }
  if (failed) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
