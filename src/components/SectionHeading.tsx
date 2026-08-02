export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <span className="font-heading text-sm font-semibold uppercase tracking-wide text-red">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading mt-1 text-2xl font-bold text-navy sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-foreground/70">{description}</p>
      )}
    </div>
  );
}
