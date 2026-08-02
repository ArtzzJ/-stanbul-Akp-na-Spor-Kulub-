import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import branches from "@/data/branches.json";

export function generateStaticParams() {
  return branches.map((branch) => ({ slug: branch.slug }));
}

function getBranch(slug: string) {
  return branches.find((b) => b.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranch(slug);
  if (!branch) return {};
  return { title: branch.name, description: branch.summary };
}

export default async function BranchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = getBranch(slug);
  if (!branch) notFound();

  return (
    <>
      <PageHero title={branch.name} subtitle={branch.summary} />
      <Container className="grid gap-10 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PlaceholderMedia icon="team" tone="red" className="h-64 w-full rounded-lg" />
          <p className="mt-6 text-foreground/80">{branch.description}</p>

          <h2 className="font-heading mt-10 text-lg font-semibold text-navy">Başarılar</h2>
          <ul className="mt-3 space-y-2">
            {branch.achievements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                <span className="mt-1 text-red">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-lg border border-black/5 bg-white p-6">
          <h2 className="font-heading text-base font-semibold text-navy">Branş Antrenörü</h2>
          <p className="mt-2 text-foreground/70">{branch.coach}</p>
        </aside>
      </Container>
    </>
  );
}
