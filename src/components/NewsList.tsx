"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import news from "@/data/news.json";

const categories = ["Tümü", ...Array.from(new Set(news.map((n) => n.category)))];

export default function NewsList() {
  const [category, setCategory] = useState("Tümü");

  const filtered =
    category === "Tümü" ? news : news.filter((n) => n.category === category);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === cat ? "bg-red text-white" : "bg-black/5 text-navy hover:bg-black/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
