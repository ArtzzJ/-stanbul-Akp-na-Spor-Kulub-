const ICONS: Record<string, string> = {
  hero: "🥋",
  news: "📰",
  player: "🥋",
  gallery: "📷",
  video: "🎬",
  match: "🏆",
  facility: "🏢",
  sponsor: "🤝",
  team: "👥",
};

export default function PlaceholderMedia({
  label,
  icon = "hero",
  className = "",
  tone = "navy",
}: {
  label?: string;
  icon?: keyof typeof ICONS;
  className?: string;
  tone?: "navy" | "red" | "gold";
}) {
  const toneClasses: Record<string, string> = {
    navy: "from-navy to-navy-light",
    red: "from-red to-red-dark",
    gold: "from-gold to-red-dark",
  };

  return (
    <div
      className={`placeholder-media relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br text-white/90 ${toneClasses[tone]} ${className}`}
      aria-hidden="true"
    >
      <span className="text-4xl">{ICONS[icon] ?? "🥋"}</span>
      {label && (
        <span className="px-3 text-center text-xs font-medium uppercase tracking-wide text-white/70">
          {label}
        </span>
      )}
    </div>
  );
}
