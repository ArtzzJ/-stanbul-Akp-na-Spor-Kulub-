import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import news from "@/data/news.json";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

function getNewsItem(slug: string) {
  return news.find((n) => n.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  return (
    <article>
      <PlaceholderMedia icon="news" tone="navy" className="h-64 w-full sm:h-80" />
      <Container className="max-w-3xl py-16">
        <Link href="/haberler" className="text-sm font-semibold text-red hover:underline">
          ← Tüm haberler
        </Link>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-red">
          {item.category}
        </span>
        <h1 className="font-heading mt-2 text-3xl font-bold text-navy">{item.title}</h1>
        <time dateTime={item.date} className="mt-2 block text-sm text-foreground/50">
          {new Date(item.date).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
        <p className="mt-6 leading-relaxed text-foreground/80">{item.content}</p>
      </Container>
    </article>
  );
}
