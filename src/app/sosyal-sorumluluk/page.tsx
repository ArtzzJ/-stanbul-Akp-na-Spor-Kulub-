import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import projects from "@/data/social-responsibility.json";

export const metadata: Metadata = {
  title: "Sosyal Sorumluluk Projeleri",
  description: "Kulübümüzün toplumsal projeleri, bağışlar ve gönüllülük faaliyetleri.",
};

export default function SocialResponsibilityPage() {
  return (
    <>
      <PageHero
        title="Sosyal Sorumluluk Projeleri"
        subtitle="Sahanın dışında da bulunduğumuz bölgeye değer katmaya çalışıyoruz."
      />
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg border border-black/5 bg-white"
            >
              <PlaceholderMedia icon="team" tone="gold" className="h-40 w-full" />
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
