import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import RosterGrid from "@/components/RosterGrid";
import staff from "@/data/staff.json";

export const metadata: Metadata = {
  title: "Kadro",
  description: "Kulübümüzün sporcu kadrosu ve teknik ekibi.",
};

export default function RosterPage() {
  return (
    <>
      <PageHero title="Kadro" subtitle="Sporcularımız ve teknik ekibimizle tanışın." />

      <Container className="py-16">
        <SectionHeading eyebrow="Teknik Ekip" title="Antrenörlerimiz" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden rounded-lg border border-black/5 bg-white"
            >
              <PlaceholderMedia icon="team" tone="navy" className="h-40 w-full" />
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="text-sm text-red">{member.role}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">
                  {member.belt}
                </p>
                <p className="mt-3 text-sm text-foreground/70">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="bg-black/[0.03]">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Sporcular"
            title="Oyuncu Profilleri"
            description="Branşa göre filtreleyerek sporcularımızı inceleyebilirsiniz."
          />
          <RosterGrid />
        </Container>
      </div>
    </>
  );
}
