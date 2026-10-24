"use client";

import { INSTITUTIONS } from "@/lib/landing-constants";
import { Landmark } from "lucide-react";

export function InstitutionMarquee() {
  const items = [...INSTITUTIONS, ...INSTITUTIONS];

  return (
    <section
      aria-label="Instansi yang kami layani"
      className="relative border-y border-[#7C3AED]/12 bg-[#F6F4FE]/80 py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FBFAFF] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FBFAFF] to-transparent" />

      <div className="marquee-track items-center gap-14 px-7">
        {items.map((name, i) => (
          <div key={`${name}-${i}`} className="flex shrink-0 items-center gap-3">
            <Landmark className="h-4 w-4 text-[#7C3AED]/60" />
            <span className="whitespace-nowrap font-serif-lux text-sm font-medium tracking-[0.22em] text-[#241A4F]/55">
              {name}
            </span>
            <span className="ml-11 h-1 w-1 rounded-full bg-[#7C3AED]/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
