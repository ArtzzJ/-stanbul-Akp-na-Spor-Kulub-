import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import facilities from "@/data/facilities.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Tesisler",
  description: "Kulübümüzün antrenman salonları ve tesis bilgileri.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero title="Tesisler" subtitle={site.address} />
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="overflow-hidden rounded-lg border border-black/5 bg-white"
            >
              <PlaceholderMedia icon="facility" tone="navy" className="h-40 w-full" />
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {facility.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">
                  Kapasite: {facility.capacity}
                </p>
                <p className="mt-3 text-sm text-foreground/70">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
