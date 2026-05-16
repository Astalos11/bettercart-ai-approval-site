"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function ComparisonsBrowser({ comparisons, icons }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredComparisons = useMemo(() => {
    if (!normalizedQuery) return comparisons;
    return comparisons.filter((comparison) => {
      return `${comparison.title} ${comparison.intro}`.toLowerCase().includes(normalizedQuery);
    });
  }, [comparisons, normalizedQuery]);

  return (
    <>
      <div className="site-search">
        <label htmlFor="comparison-search">Find a comparison</label>
        <input
          id="comparison-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try snack, protein, beverage, sodium, frozen..."
        />
        <span role="status">{filteredComparisons.length} comparisons shown</span>
        {query ? (
          <button type="button" onClick={() => setQuery("")}>Clear</button>
        ) : null}
      </div>

      {filteredComparisons.length ? (
        <div className="grid two">
          {filteredComparisons.map((comparison, index) => (
            <Link className="card" href={`/compare/${comparison.slug}`} key={comparison.slug}>
              <div className="card-icon" aria-hidden="true">{icons[index % icons.length]}</div>
              <h3>{comparison.title}</h3>
              <p>{comparison.intro}</p>
              <span className="text-link">View sample comparison</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="callout">
          <h2>No matching comparisons</h2>
          <p>Try a broader term such as snack, protein, beverage, sodium, frozen, or sauce.</p>
        </div>
      )}
    </>
  );
}
