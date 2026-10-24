"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Reveal } from "./reveal";
import { TESTIMONIALS } from "@/lib/landing-constants";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(next, 5200);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused]);

  const t = TESTIMONIALS[index];

  return (
    <section
      id="testimoni"
      className="relative overflow-hidden border-y border-[#7C3AED]/10 bg-[#F6F4FE]/60 py-24 md:py-32"
    >
      <div className="aurora left-[20%] top-[-10%] h-[320px] w-[520px] bg-[#7C3AED]/8" />

      <div
        className="relative z-10 mx-auto max-w-4xl px-4 md:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal className="text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
            TESTIMONI ASLI
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#241A4F] md:text-5xl">
            Kata Mereka yang Sudah{" "}
            <span className="text-gold-grad italic">Legal & Tenang</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/25 bg-[#7C3AED]/8 px-4 py-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#7C3AED] text-[#7C3AED]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#6D28D9]">
              4.9/5.0 — rata-rata kepuasan klien
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} variant="scale" className="mt-12">
          <div className="glass-strong gold-hairline relative rounded-3xl px-7 py-10 md:px-14 md:py-12">
            <Quote className="absolute -top-5 left-8 h-11 w-11 rounded-full border border-[#7C3AED]/30 bg-[#F3F0FE] p-2.5 text-[#7C3AED]" />

            <div key={index} className="testi-enter min-h-[190px] md:min-h-[160px]">
              <span className="mb-4 inline-block rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#6D28D9]">
                {t.pkg}
              </span>
              <p className="font-serif-lux text-lg font-medium leading-relaxed text-[#241A4F]/90 md:text-[1.4rem] md:leading-relaxed">
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7C3AED]/40 bg-gradient-to-br from-[#7C3AED]/20 to-transparent">
                  <span className="font-serif-lux text-sm font-bold text-[#6D28D9]">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#241A4F]">{t.name}</p>
                  <p className="mt-0.5 text-xs text-[#241A4F]/50">{t.role}</p>
                </div>
              </div>
            </div>

            {/* controls */}
            <div className="mt-9 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Testimoni ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-400 ${
                        i === index
                          ? "w-8 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9]"
                          : "w-3 bg-[#7C3AED]/20 hover:bg-[#7C3AED]/[0.05]0"
                      }`}
                    />
                  ))}
                </div>
                {/* autoplay progress */}
                <span
                  key={`progress-${index}-${paused}`}
                  className="hidden h-1 w-14 overflow-hidden rounded-full bg-[#7C3AED]/12 sm:block"
                >
                  <span
                    className={`block h-full rounded-full bg-[#7C3AED]/70 ${paused ? "w-full opacity-40" : "progress-run"}`}
                  />
                </span>
              </div>
              <div className="flex gap-2.5">
                <button
                  onClick={prev}
                  aria-label="Testimoni sebelumnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7C3AED]/30 text-[#241A4F]/70 transition-all hover:border-[#7C3AED]/60 hover:text-[#6D28D9]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Testimoni berikutnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7C3AED]/30 text-[#241A4F]/70 transition-all hover:border-[#7C3AED]/60 hover:text-[#6D28D9]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
