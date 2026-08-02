import Container from "./Container";

export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-black/5 bg-navy">
      <Container className="py-14 sm:py-16">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>
        )}
      </Container>
    </div>
  );
}
