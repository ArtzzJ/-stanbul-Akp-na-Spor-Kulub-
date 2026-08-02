import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import NewsList from "@/components/NewsList";

export const metadata: Metadata = {
  title: "Haberler & Duyurular",
  description: "Kulübümüzden en güncel haberler, basın bültenleri ve etkinlik duyuruları.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero title="Haberler & Duyurular" subtitle="Kulübümüzden en güncel gelişmeler." />
      <Container className="py-16">
        <NewsList />
      </Container>
    </>
  );
}
