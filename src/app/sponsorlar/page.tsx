import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import sponsors from "@/data/sponsors.json";

export const metadata: Metadata = {
  title: "Sponsorlar",
  description: "Kulübümüzü destekleyen sponsorlarımız.",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        title="Sponsorlar"
        subtitle="Kulübümüze verdikleri destek için sponsorlarımıza teşekkür ederiz."
      />
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="overflow-hidden rounded-lg border border-black/5 bg-white text-center"
            >
              <PlaceholderMedia icon="sponsor" tone="navy" className="h-32 w-full" />
              <div className="p-5">
                <h3 className="font-heading text-base font-semibold text-navy">
                  {sponsor.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-foreground/50">
          Bu alan yalnızca sponsorlarımızı tanıtım amaçlıdır; site üzerinden ürün satışı
          yapılmamaktadır.
        </p>
      </Container>
    </>
  );
}
