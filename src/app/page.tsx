import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import Countdown from "@/components/Countdown";
import site from "@/data/site.json";
import news from "@/data/news.json";
import competitions from "@/data/competitions.json";
import socialResponsibility from "@/data/social-responsibility.json";

export default function HomePage() {
  const latestNews = news.slice(0, 3);
  const nextCompetition = competitions.upcoming[0];
  const lastResult = competitions.past[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy">
        {/* dekoratif ışık efektleri */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-red/20 blur-[100px]" />

        <PlaceholderMedia
          icon="hero"
          tone="navy"
          className="absolute inset-0 h-full w-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/60 to-navy" />


        <Container className="relative py-28 sm:py-40">
          <div className="flex flex-col items-start">
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-gold/30 blur-xl" />
              <Image
                src="/logo.png"
                alt={site.clubName}
                width={96}
                height={96}
                className="relative rounded-full ring-2 ring-gold/60"
              />
            </div>

            <span className="font-heading inline-flex items-center gap-2 border-b-2 border-gold pb-2 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {site.tagline}
            </span>

            <h1 className="font-heading mt-6 max-w-2xl text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              {site.clubName}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {site.mission}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/kulup-hakkinda"
                className="group relative overflow-hidden rounded-md bg-red px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-xl shadow-red/30 transition-transform duration-300 hover:scale-[1.03]"
              >
                <span className="relative z-10">Kulübü Tanı</span>
                <span className="absolute inset-0 -translate-x-full bg-red-dark transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/iletisim"
                className="rounded-md border border-white/25 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors duration-300 hover:border-gold/60 hover:bg-white/10"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </Container>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* SIRADAKİ MÜSABAKA - cam efektli şerit */}
      {nextCompetition && (
        <section className="relative border-b border-white/5 bg-navy-light">
          <Container className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
            <div>
              <span className="font-heading inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                <span className="h-1 w-1 animate-pulse rounded-full bg-gold" />
                Sıradaki Müsabaka
              </span>
              <h2 className="font-heading mt-2 text-2xl font-semibold text-white">
                {nextCompetition.name}
              </h2>
              <p className="mt-1 text-sm text-white/60">
                {new Date(nextCompetition.date).toLocaleDateString("tr-TR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}{" "}
                &middot; {nextCompetition.venue}
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
              <Countdown targetDate={nextCompetition.date} />
            </div>
          </Container>
        </section>
      )}

      {/* İSTATİSTİK ŞERİDİ */}
      <div className="relative overflow-hidden border-b border-black/5 bg-navy">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-red/5" />
        <Container className="relative grid grid-cols-2 gap-8 py-14 text-center sm:grid-cols-4">
          {[
            { value: "20+", label: "Yıllık Tecrübe" },
            { value: "150+", label: "Aktif Sporcu" },
            { value: "40+", label: "Kupa ve Madalya" },
            { value: "4", label: "Uzman Antrenör" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <p className="font-heading bg-gradient-to-br from-white to-gold bg-clip-text text-4xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </div>

      {/* HABERLER */}
      <Container className="py-20">
        <SectionHeading
          eyebrow="Haberler"
          title="Son Haberler ve Duyurular"
          description="Kulübümüzden en güncel gelişmeler."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -inset-px rounded-lg bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 opacity-0 transition-opacity duration-300 group-hover:from-gold/20 group-hover:opacity-100" />
              <NewsCard item={item} />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/haberler"
            className="font-heading inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red transition-all hover:gap-3 hover:underline"
          >
            Tüm haberleri gör <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>

      {/* SON SONUÇ */}
      {lastResult && (
        <div className="relative overflow-hidden bg-black/[0.03]">
          <Container className="relative py-20">
            <SectionHeading eyebrow="Sonuçlar" title="Son Müsabaka Sonucu" />
            <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg border border-black/5 bg-white p-8 shadow-lg shadow-black/5 sm:flex-row sm:items-center sm:justify-between">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold via-red to-gold" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {lastResult.name}
                </h3>
                <p className="text-sm text-foreground/60">
                  {new Date(lastResult.date).toLocaleDateString("tr-TR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  &middot; {lastResult.venue}
                </p>
              </div>
              <span className="font-heading rounded-full bg-red/10 px-5 py-2.5 text-sm font-semibold text-red">
                {lastResult.result}
              </span>
            </div>
            <div className="mt-10">
              <Link
                href="/fikstur"
                className="font-heading inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red transition-all hover:gap-3 hover:underline"
              >
                Tüm sonuçları ve fikstürü gör <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Container>
        </div>
      )}

      {/* SOSYAL SORUMLULUK */}
      <Container className="py-20">
        <SectionHeading
          eyebrow="Kulüp Faaliyetleri"
          title="Sahanın Dışında da Buradayız"
          description="Sosyal sorumluluk projelerimizle bulunduğumuz bölgeye değer katmaya devam ediyoruz."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {socialResponsibility.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-gold/10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y--4" />
              <h3 className="font-heading relative text-base font-semibold text-navy">
                {item.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/sosyal-sorumluluk"
            className="font-heading inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red transition-all hover:gap-3 hover:underline"
          >
            Tüm projeleri gör <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </>
  );
}