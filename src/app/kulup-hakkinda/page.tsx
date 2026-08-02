import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import site from "@/data/site.json";
import board from "@/data/board.json";

export const metadata: Metadata = {
  title: "Kulüp Hakkında",
  description: site.mission,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Kulüp Hakkında"
        subtitle={`${site.foundedYear} yılından bu yana ${site.clubName}.`}
      />

      <Container className="py-16">
        <SectionHeading eyebrow="Tarihçe" title="Kulübümüzün Yolculuğu" />
        <ol className="relative space-y-8 border-l border-black/10 pl-6">
          {site.history.map((event) => (
            <li key={event.year} className="relative">
              <span className="absolute -left-[31px] flex h-4 w-4 items-center justify-center rounded-full bg-red ring-4 ring-white" />
              <span className="font-heading text-sm font-bold text-red">{event.year}</span>
              <p className="mt-1 text-foreground/80">{event.text}</p>
            </li>
          ))}
        </ol>
      </Container>

      <div className="bg-black/[0.03]">
        <Container className="py-16">
          <SectionHeading eyebrow="Yönetim" title="Yönetim Kurulu" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden rounded-lg border border-black/5 bg-white"
              >
                <PlaceholderMedia icon="team" tone="navy" className="h-36 w-full" />
                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold text-navy">
                    {member.name}
                  </h3>
                  <p className="text-sm text-red">{member.role}</p>
                  <p className="mt-2 text-xs text-foreground/60">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <SectionHeading eyebrow="Değerlerimiz" title="Misyon, Vizyon ve Değerler" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-black/5 bg-white p-6">
            <h3 className="font-heading text-lg font-semibold text-navy">Misyonumuz</h3>
            <p className="mt-2 text-foreground/70">{site.mission}</p>
          </div>
          <div className="rounded-lg border border-black/5 bg-white p-6">
            <h3 className="font-heading text-lg font-semibold text-navy">Vizyonumuz</h3>
            <p className="mt-2 text-foreground/70">{site.vision}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {site.values.map((value) => (
            <span
              key={value}
              className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white"
            >
              {value}
            </span>
          ))}
        </div>
      </Container>

      <div className="bg-black/[0.03]">
        <Container className="py-16">
          <SectionHeading eyebrow="Kurumsal Kimlik" title="Kulüp Amblemi ve Renkleri" />
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <PlaceholderMedia icon="hero" tone="red" className="h-40 w-40 rounded-full" />
            <div>
              <p className="text-foreground/70">{site.emblem.meaning}</p>
              <div className="mt-4 flex gap-3">
                {site.emblem.colors.map((color) => (
                  <span
                    key={color}
                    className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-medium text-navy"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
