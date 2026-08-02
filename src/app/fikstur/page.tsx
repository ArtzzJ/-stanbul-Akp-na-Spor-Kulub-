import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import competitions from "@/data/competitions.json";

export const metadata: Metadata = {
  title: "Müsabaka Sonuçları & Fikstür",
  description: "Yaklaşan müsabakalar, geçmiş sonuçlar ve madalya tablosu.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function FixturesPage() {
  return (
    <>
      <PageHero
        title="Müsabaka Sonuçları & Fikstür"
        subtitle="Yaklaşan müsabakalarımız, geçmiş sonuçlarımız ve sezonluk madalya tablomuz."
      />

      <Container className="py-16">
        <SectionHeading eyebrow="Takvim" title="Yaklaşan Müsabakalar" />
        <div className="overflow-hidden rounded-lg border border-black/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3 font-medium">Müsabaka</th>
                <th className="px-4 py-3 font-medium">Tarih</th>
                <th className="px-4 py-3 font-medium">Yer</th>
                <th className="px-4 py-3 font-medium">Kategoriler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 bg-white">
              {competitions.upcoming.map((c) => (
                <tr key={c.id}>
                  <td className="px-4 py-3 font-medium text-navy">{c.name}</td>
                  <td className="px-4 py-3 text-foreground/70">{formatDate(c.date)}</td>
                  <td className="px-4 py-3 text-foreground/70">{c.venue}</td>
                  <td className="px-4 py-3 text-foreground/70">{c.categories.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <div className="bg-black/[0.03]">
        <Container className="py-16">
          <SectionHeading eyebrow="Geçmiş" title="Geçmiş Sonuçlar" />
          <div className="overflow-hidden rounded-lg border border-black/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3 font-medium">Müsabaka</th>
                  <th className="px-4 py-3 font-medium">Tarih</th>
                  <th className="px-4 py-3 font-medium">Yer</th>
                  <th className="px-4 py-3 font-medium">Sonuç</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 bg-white">
                {competitions.past.map((c) => (
                  <tr key={c.id}>
                    <td className="px-4 py-3 font-medium text-navy">{c.name}</td>
                    <td className="px-4 py-3 text-foreground/70">{formatDate(c.date)}</td>
                    <td className="px-4 py-3 text-foreground/70">{c.venue}</td>
                    <td className="px-4 py-3 font-semibold text-red">{c.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <SectionHeading eyebrow="Sezon Performansı" title="Madalya Tablosu" />
        <div className="overflow-hidden rounded-lg border border-black/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3 font-medium">Sezon</th>
                <th className="px-4 py-3 font-medium">🥇 Altın</th>
                <th className="px-4 py-3 font-medium">🥈 Gümüş</th>
                <th className="px-4 py-3 font-medium">🥉 Bronz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 bg-white">
              {competitions.medalTable.map((row) => (
                <tr key={row.season}>
                  <td className="px-4 py-3 font-medium text-navy">{row.season}</td>
                  <td className="px-4 py-3 text-foreground/70">{row.gold}</td>
                  <td className="px-4 py-3 text-foreground/70">{row.silver}</td>
                  <td className="px-4 py-3 text-foreground/70">{row.bronze}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
