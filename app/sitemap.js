import { comparisons, guides, trustPages } from "../lib/content";

export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bettercart-ai-approval-site.netlify.app";
const lastModified = new Date("2026-05-15");

export default function sitemap() {
  const staticRoutes = [
    "",
    "/guides",
    "/compare",
    "/topics",
    "/tools/food-comparison-demo",
    "/for-reviewers",
    "/authors/bettercart-editorial-team"
  ];
  const trustRoutes = Object.keys(trustPages).map((page) => `/${page}`);
  const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
  const comparisonRoutes = comparisons.map((comparison) => `/compare/${comparison.slug}`);

  return [...staticRoutes, ...trustRoutes, ...guideRoutes, ...comparisonRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified
  }));
}
