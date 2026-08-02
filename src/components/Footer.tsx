import Link from "next/link";
import Container from "./Container";
import { navLinks } from "@/lib/nav";
import site from "@/data/site.json";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-navy text-white/80">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-heading flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red text-base">
              🥋
            </span>
            {site.shortName}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{site.tagline}</p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Hızlı Bağlantılar
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            İletişim
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>{site.email}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Sosyal Medya
          </h3>
          <div className="mt-3 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-red"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-red"
              aria-label="Facebook"
            >
              FB
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-red"
              aria-label="YouTube"
            >
              YT
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} {site.clubName}. Tüm hakları saklıdır.
        </Container>
      </div>
    </footer>
  );
}
