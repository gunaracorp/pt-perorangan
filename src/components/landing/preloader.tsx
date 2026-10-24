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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FBFAFF] transition-opacity duration-700 ${
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
                <stop offset="0%" stopColor="#5B21B6" />
                <stop offset="50%" stopColor="#6D28D9" />
                <stop offset="100%" stopColor="#5B21B6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="preloader-logo flex flex-col items-center">
          <span className="font-serif-lux text-gold-grad text-5xl font-bold md:text-6xl">
            G
          </span>
          <span className="font-serif-lux mt-3 text-sm tracking-[0.32em] text-[#241A4F]/90 md:text-base">
            GUNARA
          </span>
          <span className="mt-2 text-[10px] tracking-[0.42em] text-[#7C3AED]/80">
            CONSULTANT
          </span>
        </div>
      </div>
      <div className="mt-14 h-px w-52 overflow-hidden rounded-full bg-[#7C3AED]/12">
        <div className="preloader-bar h-full bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#7C3AED]" />
      </div>
      <p className="mt-4 text-[10px] tracking-[0.3em] text-[#241A4F]/40">
        STANDAR KELAS DUNIA · SEJAK 2009
      </p>
    </div>
  );
}
