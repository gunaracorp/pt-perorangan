"use client";

import { INSTITUTIONS } from "@/lib/landing-constants";
import { Landmark } from "lucide-react";

export function InstitutionMarquee() {
  const items = [...INSTITUTIONS, ...INSTITUTIONS];

  return (
    <section
      aria-label="Instansi yang kami layani"
      className="relative border-y border-[#d4af37]/12 bg-[#07080e]/80 py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060A] to-transparent" />

      <div className="marquee-track items-center gap-14 px-7">
        {items.map((name, i) => (
          <div key={`${name}-${i}`} className="flex shrink-0 items-center gap-3">
            <Landmark className="h-4 w-4 text-[#d4af37]/60" />
            <span className="whitespace-nowrap font-serif-lux text-sm font-medium tracking-[0.22em] text-[#EDE6D6]/55">
              {name}
            </span>
            <span className="ml-11 h-1 w-1 rounded-full bg-[#d4af37]/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
