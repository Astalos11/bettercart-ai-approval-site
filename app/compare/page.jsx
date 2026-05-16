import Link from "next/link";
import { comparisons } from "../../lib/content";

const comparisonIcons = ["🍪", "💪", "🥣", "🧒", "🥫", "🥤", "🧊", "🥄"];

export const metadata = {
  title: "Food Comparison Examples",
  description: "Example product comparisons showing how nutrition facts and ingredient context can support grocery decisions."
};

export default function CompareIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Compare</div>
          <h1>Food Comparison Examples</h1>
          <p className="lead">Example product comparisons showing how nutrition facts and ingredient context can support everyday grocery decisions.</p>
        </div>
        <div className="visual-strip" aria-label="Comparison use cases">
          <div>
            <strong>🍬 Low sugar</strong>
            <span>Sort by total sugar, then check tradeoffs.</span>
          </div>
          <div>
            <strong>🧂 Low sodium</strong>
            <span>Compare sodium within similar product types.</span>
          </div>
          <div>
            <strong>💪 High protein</strong>
            <span>Check protein together with calories and sugar.</span>
          </div>
        </div>
        <div className="grid two">
          {comparisons.map((comparison, index) => (
            <Link className="card" href={`/compare/${comparison.slug}`} key={comparison.slug}>
              <div className="card-icon" aria-hidden="true">{comparisonIcons[index % comparisonIcons.length]}</div>
              <h3>{comparison.title}</h3>
              <p>{comparison.intro}</p>
              <span className="text-link">View sample comparison</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
