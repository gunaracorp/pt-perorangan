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
      className="relative overflow-hidden border-y border-[#d4af37]/10 bg-[#07080e]/60 py-24 md:py-32"
    >
      <div className="aurora left-[20%] top-[-10%] h-[320px] w-[520px] bg-[#d4af37]/8" />

      <div
        className="relative z-10 mx-auto max-w-4xl px-4 md:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal className="text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
            TESTIMONI ASLI
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#EDE6D6] md:text-5xl">
            Kata Mereka yang Sudah{" "}
            <span className="text-gold-grad italic">Legal & Tenang</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/8 px-4 py-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#d4af37] text-[#d4af37]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#f1de9b]">
              4.9/5.0 — rata-rata kepuasan klien
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} variant="scale" className="mt-12">
          <div className="glass-strong gold-hairline relative rounded-3xl px-7 py-10 md:px-14 md:py-12">
            <Quote className="absolute -top-5 left-8 h-11 w-11 rounded-full border border-[#d4af37]/30 bg-[#0a0c14] p-2.5 text-[#d4af37]" />

            <div key={index} className="testi-enter min-h-[190px] md:min-h-[160px]">
              <p className="font-serif-lux text-lg font-medium leading-relaxed text-[#EDE6D6]/90 md:text-[1.4rem] md:leading-relaxed">
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                  <span className="font-serif-lux text-sm font-bold text-[#f1de9b]">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#EDE6D6]">{t.name}</p>
                  <p className="mt-0.5 text-xs text-[#EDE6D6]/50">{t.role}</p>
                </div>
              </div>
            </div>

            {/* controls */}
            <div className="mt-9 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Testimoni ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === index
                        ? "w-8 bg-gradient-to-r from-[#d4af37] to-[#f1de9b]"
                        : "w-3 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2.5">
                <button
                  onClick={prev}
                  aria-label="Testimoni sebelumnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#EDE6D6]/70 transition-all hover:border-[#d4af37]/60 hover:text-[#f1de9b]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Testimoni berikutnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#EDE6D6]/70 transition-all hover:border-[#d4af37]/60 hover:text-[#f1de9b]"
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
