import PlaceholderMedia from "./PlaceholderMedia";

type Player = {
  name: string;
  category: string;
  belt: string;
  bio: string;
};

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm">
      <PlaceholderMedia icon="player" tone="red" className="h-48 w-full" />
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-navy">{player.name}</h3>
        <p className="text-sm font-medium text-red">{player.category}</p>
        <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">
          {player.belt}
        </p>
        <p className="mt-3 text-sm text-foreground/70">{player.bio}</p>
      </div>
    </div>
  );
}
