import Link from "next/link";
import { reviewerSections } from "../../lib/content";

export const metadata = {
  title: "For Reviewers",
  description:
    "A quick overview of BetterCart AI for affiliate network, advertiser, and partner review."
};

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

        <div className="callout">
          <h2>Useful review links</h2>
          <div className="link-list">
            <Link href="/about">About</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/editorial-policy">Editorial Policy</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/partner-policy">Partner Policy</Link>
            <Link href="/data-sources">Data Sources</Link>
            <Link href="/corrections-policy">Corrections Policy</Link>
            <Link href="/tools/food-comparison-demo">Demo Tool</Link>
          </div>
        </div>

        <div className="disclaimer">
          BetterCart AI is an early publisher property. Current comparison examples use sample editorial data unless a page states otherwise.
        </div>
      </div>
    </section>
  );
}
