"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setDone(true), 1900);
    const t2 = window.setTimeout(() => setHidden(true), 2700);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05060A] transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* rotating gold ring */}
        <div className="absolute -inset-10 flex items-center justify-center">
          <svg className="spin-ring h-40 w-40" viewBox="0 0 100 100" fill="none">
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="url(#preloaderGold)"
              strokeWidth="0.75"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="preloaderGold" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#8a6a1f" />
                <stop offset="50%" stopColor="#f1de9b" />
                <stop offset="100%" stopColor="#8a6a1f" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="preloader-logo flex flex-col items-center">
          <span className="font-serif-lux text-gold-grad text-5xl font-bold md:text-6xl">
            G
          </span>
          <span className="font-serif-lux mt-3 text-sm tracking-[0.32em] text-[#EDE6D6]/90 md:text-base">
            GUNARA
          </span>
          <span className="mt-2 text-[10px] tracking-[0.42em] text-[#d4af37]/80">
            CONSULTANT
          </span>
        </div>
      </div>
      <div className="mt-14 h-px w-52 overflow-hidden rounded-full bg-white/10">
        <div className="preloader-bar h-full bg-gradient-to-r from-[#8a6a1f] via-[#f1de9b] to-[#d4af37]" />
      </div>
      <p className="mt-4 text-[10px] tracking-[0.3em] text-[#EDE6D6]/40">
        STANDAR KELAS DUNIA · SEJAK 2009
      </p>
    </div>
  );
}
