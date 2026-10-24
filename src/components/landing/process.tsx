"use client";

import { PROCESS_STEPS } from "@/lib/landing-constants";
import { Reveal } from "./reveal";
import { BadgeCheck } from "lucide-react";

export function Process() {
  return (
    <section id="proses" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-lux opacity-60" />
      <div className="aurora left-[-6%] bottom-[5%] h-[340px] w-[340px] bg-[#d4af37]/8" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
            ALUR KERJA BAKU TERSERTIFIKASI
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#EDE6D6] md:text-5xl">
            5 Langkah Menuju{" "}
            <span className="text-gold-grad italic">Legalitas Resmi</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#EDE6D6]/60">
            Proses baku tersertifikasi ISO 9001:2015 — Anda selalu tahu posisi berkas Anda
            di setiap langkah.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#d4af37]/60 via-[#d4af37]/20 to-transparent md:left-1/2" />

          <div className="flex flex-col gap-10">
            {PROCESS_STEPS.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal
                  key={step.num}
                  delay={i * 110}
                  variant={left ? "left" : "right"}
                  className="relative"
                >
                  <div
                    className={`flex items-start gap-6 md:w-1/2 ${
                      left ? "md:pr-14" : "md:ml-auto md:flex-row-reverse md:pl-14"
                    }`}
                  >
                    {/* node */}
                    <div
                      className={`absolute left-0 top-0 md:relative md:left-auto md:top-1 ${
                        left ? "md:-right-[26px] md:pr-0" : "md:-left-[26px]"
                      }`}
                      style={left ? { right: "auto" } : undefined}
                    >
                      <div className="relative flex h-14 w-14 items-center justify-center">
                        <span className="absolute inset-0 rounded-full border border-[#d4af37]/35 bg-[#0a0c14]" />
                        <span className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-md" />
                        <span className="font-serif-lux text-gold-grad relative text-lg font-bold">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`glass gold-hairline flex-1 rounded-2xl p-6 transition-colors duration-500 hover:bg-[#d4af37]/[0.05] ${
                        left ? "md:text-right" : ""
                      }`}
                    >
                      <h3 className="font-serif-lux text-lg font-semibold text-[#EDE6D6] md:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#EDE6D6]/60">
                        {step.desc}
                      </p>
                      {i === 2 && (
                        <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#25D366]/25 bg-[#25D366]/8 px-3 py-1.5 text-[11px] font-semibold text-[#4ade80]">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          BCA 0860742187 a.n. Gugun Gunara
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
