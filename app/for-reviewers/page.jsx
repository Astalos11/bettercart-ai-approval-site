import Link from "next/link";
import { comparisons, guides, reviewerSections, trustPages } from "../../lib/content";

export const metadata = {
  title: "For Reviewers",
  description:
    "A quick overview of BetterCart AI for affiliate network, advertiser, and partner review."
};

const reviewerPath = [
  {
    icon: "🏠",
    title: "Homepage",
    text: "Check positioning, audience, sample visual, and content model."
  },
  {
    icon: "📚",
    title: "Guides + comparisons",
    text: "Review how food choices are explained with label facts and tradeoffs."
  },
  {
    icon: "🧾",
    title: "Trust pages",
    text: "Confirm disclosure, privacy, editorial standards, and compliance boundaries."
  },
  {
    icon: "🧪",
    title: "Demo tool",
    text: "Try the sample AI-assisted comparison flow without live affiliate links."
  }
];

const readinessItems = [
  ["Content site shell", "Ready", "Guides, comparisons, topics, and demo are published."],
  ["Trust pages", "Ready", "Disclosure, privacy, terms, methodology, and compliance pages exist."],
  ["Affiliate links", "Not active", "No live affiliate links are currently present."],
  ["Custom domain", "Ready", "The public review URL is https://www.bettercartai.com."]
];

const interactiveChecks = [
  {
    icon: "🧪",
    title: "Try the demo",
    text: "Switch shopping intent, filter sample products, and compare up to three USDA-derived examples.",
    href: "/tools/food-comparison-demo",
    cta: "Open demo"
  },
  {
    icon: "🔎",
    title: "Search the site map",
    text: "Use the searchable index to find disclosure, methodology, privacy, and sample content pages quickly.",
    href: "/site-index",
    cta: "Search pages"
  },
  {
    icon: "📊",
    title: "Scan comparisons",
    text: "Review color-coded sample comparisons and tradeoff cards without live affiliate links.",
    href: "/compare",
    cta: "View comparisons"
  }
];

export default function ForReviewersPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">For reviewers</div>
          <h1>Review BetterCart AI in a few minutes</h1>
          <p className="lead">
            This page summarizes what the site is, how it expects to use affiliate partnerships, and where to find the important trust pages.
          </p>
        </div>

        <div className="reviewer-hero-card">
          <img
            src="/images/food-comparison-visual-v2.webp"
            alt="Illustration of packaged food comparison dashboard for reviewer context"
            loading="lazy"
            decoding="async"
          />
          <div>
            <div className="eyebrow">30-second context</div>
            <h2>What reviewers should see first</h2>
            <p>
              BetterCart AI is a content-first packaged food comparison site. It shows sample guides, transparent affiliate boundaries, and a prototype comparison demo before adding live commerce links.
            </p>
          </div>
        </div>

        <div className="grid two">
          {reviewerSections.map((section) => (
            <div className="card" key={section.title}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="stats-row" aria-label="Current site content snapshot">
          <div><strong>{guides.length}</strong><span>food guides</span></div>
          <div><strong>{comparisons.length}</strong><span>comparison examples</span></div>
          <div><strong>{Object.keys(trustPages).length}</strong><span>trust pages</span></div>
          <div><strong>0</strong><span>undisclosed affiliate links</span></div>
        </div>

        <div className="readiness-matrix" aria-label="Affiliate application readiness status">
          <div className="readiness-row head">
            <span>Review area</span>
            <span>Status</span>
            <span>Note</span>
          </div>
          {readinessItems.map(([area, status, note]) => (
            <div className="readiness-row" key={area}>
              <strong>{area}</strong>
              <span className={`badge ${status === "Ready" ? "green" : status === "Pending" ? "orange" : "blue"}`}>{status}</span>
              <span>{note}</span>
            </div>
          ))}
        </div>

        <div className="visual-strip" aria-label="Fast reviewer path">
          {reviewerPath.map((item) => (
            <div key={item.title}>
              <strong>{item.icon} {item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="section-head compact-head">
          <div className="eyebrow">Hands-on checks</div>
          <h2>Reviewer actions that are already interactive</h2>
          <p>
            These links show the site is more than static policy pages: reviewers can test search, product-style filtering, comparison tables, and sample nutrition tradeoffs.
          </p>
        </div>

        <div className="grid three">
          {interactiveChecks.map((item) => (
            <Link className="card action-card" href={item.href} key={item.title}>
              <div className="card-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="text-link">{item.cta}</span>
            </Link>
          ))}
        </div>

        <div className="callout">
          <h2>Useful review links</h2>
          <div className="link-list">
            <Link href="/about">About</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/how-we-make-money">How We Make Money</Link>
            <Link href="/editorial-policy">Editorial Policy</Link>
            <Link href="/publishing-standards">Publishing Standards</Link>
            <Link href="/review-process">Review Process</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/partner-policy">Partner Policy</Link>
            <Link href="/data-sources">Data Sources</Link>
            <Link href="/corrections-policy">Corrections Policy</Link>
            <Link href="/program-compliance">Program Compliance</Link>
            <Link href="/authors/bettercart-editorial-team">Editorial Team</Link>
            <Link href="/publisher-kit">Publisher Kit</Link>
            <Link href="/tools/food-comparison-demo">Demo Tool</Link>
          </div>
        </div>

        <div className="callout">
          <h2>Fast review path</h2>
          <ol>
            <li>Check the homepage to understand the audience and site positioning.</li>
            <li>Open a guide and a comparison page to review the content format.</li>
            <li>Review affiliate disclosure, editorial policy, methodology, and privacy pages.</li>
            <li>Open the demo to understand the future AI-assisted comparison direction.</li>
          </ol>
        </div>

        <div className="disclaimer">
          BetterCart AI is an early publisher property. Current comparison examples use sample editorial data unless a page states otherwise.
        </div>
      </div>
    </section>
  );
}
