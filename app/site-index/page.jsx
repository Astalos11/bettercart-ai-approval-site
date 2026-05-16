import { comparisons, guides, trustPages } from "../../lib/content";
import SiteIndexBrowser from "./SiteIndexBrowser";

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
  const groups = [
    {
      title: "Core pages",
      links: coreLinks.map(([href, label]) => ({ href, label }))
    },
    {
      title: "Trust pages",
      links: Object.entries(trustPages).map(([slug, page]) => ({ href: `/${slug}`, label: page.title }))
    },
    {
      title: "Food guides",
      links: guides.map((guide) => ({ href: `/guides/${guide.slug}`, label: guide.title }))
    },
    {
      title: "Comparison examples",
      links: comparisons.map((comparison) => ({ href: `/compare/${comparison.slug}`, label: comparison.title }))
    }
  ];

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

        <SiteIndexBrowser groups={groups} />
      </div>
    </section>
  );
}
