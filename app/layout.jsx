import "./globals.css";
import Link from "next/link";
import { getSiteUrl } from "../lib/site";

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "BetterCart AI | Packaged Food Comparison Guides",
    template: "%s | BetterCart AI"
  },
  description:
    "Compare packaged foods by nutrition facts, ingredients, and shopping intent. Explore guides for low sugar snacks, protein bars, cereals, and pantry foods.",
  openGraph: {
    title: "BetterCart AI",
    description: "AI-assisted packaged food comparison guides for everyday grocery decisions.",
    type: "website",
    url: "/",
    siteName: "BetterCart AI"
  }
};

function Header() {
  return (
    <header className="header">
      <nav className="container nav" aria-label="Main navigation">
        <Link href="/" className="brand">
          <span className="brand-mark">B</span>
          <span>BetterCart AI</span>
        </Link>
        <div className="nav-links">
          <Link href="/guides">Guides</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/topics">Topics</Link>
          <Link href="/tools/food-comparison-demo">Demo</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/for-reviewers">For Reviewers</Link>
          <Link href="/publisher-kit">Publisher Kit</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <span className="brand-mark">B</span>
            <span>BetterCart AI</span>
          </div>
          <p>
            AI-assisted packaged food comparison guides for everyday grocery decisions.
          </p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/guides">Food Guides</Link>
          <Link href="/compare">Comparison Examples</Link>
          <Link href="/topics">Topics</Link>
          <Link href="/tools/food-comparison-demo">Demo Tool</Link>
          <Link href="/for-reviewers">For Reviewers</Link>
          <Link href="/publisher-kit">Publisher Kit</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <strong>Trust</strong>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/publishing-standards">Publishing Standards</Link>
          <Link href="/review-process">Review Process</Link>
          <Link href="/content-calendar">Content Calendar</Link>
          <Link href="/data-sources">Data Sources</Link>
          <Link href="/corrections-policy">Corrections</Link>
          <Link href="/partner-policy">Partner Policy</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  const siteUrl = getSiteUrl();
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BetterCart AI",
    url: siteUrl,
    email: "contact@bettercartai.com",
    description: "Packaged food comparison guides for everyday grocery decisions."
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
