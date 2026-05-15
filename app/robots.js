export const dynamic = "force-static";

export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://illustrious-cranachan-4a01a9.netlify.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
