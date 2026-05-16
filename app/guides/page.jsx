import Link from "next/link";
import { guides } from "../../lib/content";

const guideIcons = ["🍪", "💪", "🏷️", "🧒", "🥣", "🔎", "🧂", "🥫", "🥤", "🧊", "🥄", "🥜"];

export const metadata = {
  title: "Food Buying Guides",
  description: "Simple guides for comparing packaged foods by nutrition facts, ingredients, and shopping intent."
};

export default function GuidesIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Guides</div>
          <h1>Food Buying Guides</h1>
          <p className="lead">Simple guides for comparing packaged foods by nutrition facts, ingredients, and shopping intent.</p>
        </div>
        <div className="visual-strip" aria-label="Guide topic overview">
          <div>
            <strong>📊 Label-first</strong>
            <span>Start with facts shoppers can verify.</span>
          </div>
          <div>
            <strong>🛒 Intent-based</strong>
            <span>Compare by low sugar, high protein, low sodium, or category fit.</span>
          </div>
          <div>
            <strong>🧾 Disclosure-ready</strong>
            <span>Keep affiliate context separate from product facts.</span>
          </div>
        </div>
        <div className="grid three">
          {guides.map((guide, index) => (
            <Link className="card" href={`/guides/${guide.slug}`} key={guide.slug}>
              <div className="card-icon" aria-hidden="true">{guideIcons[index % guideIcons.length]}</div>
              <h3>{guide.title}</h3>
              <p>{guide.excerpt}</p>
              <span className="text-link">Read guide</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
