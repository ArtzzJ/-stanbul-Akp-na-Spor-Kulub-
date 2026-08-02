import Link from "next/link";
import PlaceholderMedia from "./PlaceholderMedia";

type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/haberler/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <PlaceholderMedia icon="news" tone="navy" className="h-40 w-full" />
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-red">
          {item.category}
        </span>
        <h3 className="font-heading mt-2 text-lg font-semibold text-navy group-hover:text-red">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-foreground/70">{item.summary}</p>
        <time dateTime={item.date} className="mt-4 text-xs text-foreground/50">
          {formatDate(item.date)}
        </time>
      </div>
    </Link>
  );
}
