import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import gallery from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Kulüp etkinliklerinden fotoğraf ve video galerisi.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Galeri" subtitle="Etkinliklerimizden ve müsabakalarımızdan kareler." />

      <Container className="py-16">
        <SectionHeading eyebrow="Fotoğraflar" title="Fotoğraf Albümleri" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.albums.map((album) => (
            <div key={album.id} className="overflow-hidden rounded-lg border border-black/5 bg-white">
              <PlaceholderMedia icon="gallery" tone="navy" className="h-40 w-full" />
              <div className="p-4">
                <h3 className="font-heading text-sm font-semibold text-navy">{album.title}</h3>
                <p className="mt-1 text-xs text-foreground/50">
                  {new Date(album.date).toLocaleDateString("tr-TR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  &middot; {album.photoCount} fotoğraf
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="bg-black/[0.03]">
        <Container className="py-16">
          <SectionHeading eyebrow="Videolar" title="Video Galerisi" />
          <div className="grid gap-6 sm:grid-cols-2">
            {gallery.videos.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-lg border border-black/5 bg-white">
                <PlaceholderMedia icon="video" tone="red" className="h-48 w-full" />
                <div className="p-4">
                  <h3 className="font-heading text-sm font-semibold text-navy">{video.title}</h3>
                  <p className="mt-1 text-xs text-foreground/50">
                    {new Date(video.date).toLocaleDateString("tr-TR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
