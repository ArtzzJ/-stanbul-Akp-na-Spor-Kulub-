"use client";

import { useEffect, useState } from "react";

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setFadeOut(true), 2800);
    const t2 = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-navy transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-red/10 blur-[100px]" />

      <div className="relative flex flex-col items-center">
        <video
          src="/karate-kick.mp4"
          autoPlay
          muted
          playsInline
          className="h-64 w-64 object-contain"
        />

        <span
          className={`font-heading mt-2 text-2xl font-bold uppercase tracking-[0.4em] text-white transition-all duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          KIAI
        </span>
      </div>
    </div>
  );
}