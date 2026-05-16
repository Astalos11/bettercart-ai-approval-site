import Link from "next/link";
import { comparisons, guides, trustPages } from "../../lib/content";

export const metadata = {
  title: "Site Index",
  description: "Browse all BetterCart AI guides, comparison examples, tools, and trust pages."
};

const coreLinks = [
  ["/", "Home"],
  ["/for-reviewers", "For Reviewers"],
  ["/publisher-kit", "Publisher Kit"],
  ["/topics", "Topics"],
  ["/tools/food-comparison-demo", "Food Comparison Demo"],
  ["/authors/bettercart-editorial-team", "Editorial Team"]
];

export default function SiteIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Site index</div>
          <h1>Browse BetterCart AI</h1>
          <p className="lead">
            A quick index of the current guides, comparison examples, tools, and trust pages available on the site.
          </p>
        </div>

        <div className="visual-strip" aria-label="Site index sections">
          <div><strong>🏠 Core</strong><span>Homepage, reviewer page, publisher kit, demo.</span></div>
          <div><strong>📚 Content</strong><span>Food guides, topics, and comparison examples.</span></div>
          <div><strong>🧾 Trust</strong><span>Disclosure, privacy, methodology, and policies.</span></div>
        </div>

        <div className="grid two">
          <div className="card">
            <h2>Core pages</h2>
            <div className="link-list vertical">
              {coreLinks.map(([href, label]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
            </div>
          </div>
          <div className="card">
            <h2>Trust pages</h2>
            <div className="link-list vertical">
              {Object.entries(trustPages).map(([slug, page]) => (
                <Link href={`/${slug}`} key={slug}>{page.title}</Link>
              ))}
            </div>
          </div>
          <div className="card">
            <h2>Food guides</h2>
            <div className="link-list vertical">
              {guides.map((guide) => (
                <Link href={`/guides/${guide.slug}`} key={guide.slug}>{guide.title}</Link>
              ))}
            </div>
          </div>
          <div className="card">
            <h2>Comparison examples</h2>
            <div className="link-list vertical">
              {comparisons.map((comparison) => (
                <Link href={`/compare/${comparison.slug}`} key={comparison.slug}>{comparison.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
