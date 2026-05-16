import { comparisons } from "../../lib/content";
import ComparisonsBrowser from "./ComparisonsBrowser";

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
        <div className="index-visual-hero">
          <img
            src="/images/food-comparison-visual-v2.webp"
            alt="Sample AI food comparison dashboard with product cards and nutrition metrics"
          />
          <div>
            <strong>Side-by-side, not score-only</strong>
            <span>Comparison pages are designed to show tradeoffs clearly before any purchase link is added.</span>
          </div>
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
        <ComparisonsBrowser comparisons={comparisons} icons={comparisonIcons} />
      </div>
    </section>
  );
}
