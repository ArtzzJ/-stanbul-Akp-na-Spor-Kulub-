"use client";

import { useEffect, useState } from "react";

function getRemaining(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  return { days, hours, minutes, expired: diff <= 0 };
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemaining(targetDate));
    }, 60_000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (remaining.expired) {
    return <p className="text-sm text-white/70">Müsabaka başladı / tamamlandı.</p>;
  }

  const units = [
    { label: "Gün", value: remaining.days },
    { label: "Saat", value: remaining.hours },
    { label: "Dakika", value: remaining.minutes },
  ];

  return (
    <div className="flex gap-4">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-wide text-white/60">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
