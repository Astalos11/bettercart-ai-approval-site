import { comparisons, guides, trustPages } from "../lib/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bettercart-ai-approval-site.vercel.app";

export default function sitemap() {
  const staticRoutes = ["", "/guides", "/compare", "/tools/food-comparison-demo"];
  const trustRoutes = Object.keys(trustPages).map((page) => `/${page}`);
  const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
  const comparisonRoutes = comparisons.map((comparison) => `/compare/${comparison.slug}`);

  return [...staticRoutes, ...trustRoutes, ...guideRoutes, ...comparisonRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
