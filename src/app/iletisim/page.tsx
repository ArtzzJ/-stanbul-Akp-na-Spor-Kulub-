import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Kulüp adresimiz, iletişim bilgilerimiz ve iletişim formu.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="İletişim" subtitle="Sorularınız için bize ulaşın." />
      <Container className="grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-lg font-semibold text-navy">
            Kulüp Adresi & İletişim Bilgileri
          </h2>
          <dl className="mt-4 space-y-3 text-sm text-foreground/70">
            <div>
              <dt className="font-medium text-navy">Adres</dt>
              <dd>{site.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Telefon</dt>
              <dd>{site.phone}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">E-posta</dt>
              <dd>{site.email}</dd>
            </div>
          </dl>

          <div className="mt-8 overflow-hidden rounded-lg border border-black/5">
            <iframe
              title="Kulüp Konumu"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                site.address
              )}&output=embed`}
            />
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-navy">İletişim Formu</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
