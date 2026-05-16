"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function GuidesBrowser({ guides, icons }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredGuides = useMemo(() => {
    if (!normalizedQuery) return guides;
    return guides.filter((guide) => {
      return `${guide.title} ${guide.excerpt}`.toLowerCase().includes(normalizedQuery);
    });
  }, [guides, normalizedQuery]);

  return (
    <>
      <div className="site-search">
        <label htmlFor="guide-search">Find a guide</label>
        <input
          id="guide-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try sugar, protein, sodium, cereal, ingredient..."
        />
        <span role="status">{filteredGuides.length} guides shown</span>
        {query ? (
          <button type="button" onClick={() => setQuery("")}>Clear</button>
        ) : null}
      </div>

      {filteredGuides.length ? (
        <div className="grid three">
          {filteredGuides.map((guide, index) => (
            <Link className="card" href={`/guides/${guide.slug}`} key={guide.slug}>
              <div className="card-icon" aria-hidden="true">{icons[index % icons.length]}</div>
              <h3>{guide.title}</h3>
              <p>{guide.excerpt}</p>
              <span className="text-link">Read guide</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="callout">
          <h2>No matching guides</h2>
          <p>Try a broader term such as snack, label, sugar, sodium, protein, or pantry.</p>
        </div>
      )}
    </>
  );
}
