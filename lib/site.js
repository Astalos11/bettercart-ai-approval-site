const FALLBACK_SITE_URL = "https://www.bettercartai.com";
const INVALID_SITE_URLS = new Set([
  "https://bettercart-ai-approval-site.netlify.app",
  "https://illustrious-cranachan-4a01a9.netlify.app",
  "https://bettercartai.com"
]);

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!configured || INVALID_SITE_URLS.has(configured)) return FALLBACK_SITE_URL;
  return configured;
}
