"use client";

import { useState } from "react";
import PlayerCard from "./PlayerCard";
import players from "@/data/players.json";
import branches from "@/data/branches.json";

export default function RosterGrid() {
  const [branch, setBranch] = useState<string>("all");

  const filtered =
    branch === "all" ? players : players.filter((p) => p.branch === branch);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setBranch("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            branch === "all" ? "bg-red text-white" : "bg-black/5 text-navy hover:bg-black/10"
          }`}
        >
          Tümü
        </button>
        {branches.map((b) => (
          <button
            key={b.slug}
            type="button"
            onClick={() => setBranch(b.slug)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              branch === b.slug ? "bg-red text-white" : "bg-black/5 text-navy hover:bg-black/10"
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}
