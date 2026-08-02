import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import branches from "@/data/branches.json";

export const metadata: Metadata = {
  title: "Şubeler / Branşlar",
  description: "Kulübümüz bünyesindeki karate branşları ve alt yapı programları.",
};

export default function BranchesPage() {
  return (
    <>
      <PageHero
        title="Şubeler / Branşlar"
        subtitle="Kata, kumite, minikler ve yetişkin gruplarıyla her yaşa ve seviyeye uygun antrenman programları."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {branches.map((branch) => (
            <Link
              key={branch.slug}
              href={`/subeler/${branch.slug}`}
              className="group overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <PlaceholderMedia icon="team" tone="navy" className="h-40 w-full" />
              <div className="p-6">
                <h2 className="font-heading text-xl font-semibold text-navy group-hover:text-red">
                  {branch.name}
                </h2>
                <p className="mt-2 text-sm text-foreground/70">{branch.summary}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-red">
                  Detayları gör →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
