"use client";

import { FileBadge2, Award, ScrollText, ShieldCheck } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/landing-constants";
import { Reveal, useTilt } from "./reveal";

const RESULTS = [
  {
    icon: FileBadge2,
    code: "NIB",
    title: "Nomor Induk Berusaha",
    note: "Berfungsi sebagai akta pendirian + SK pengesahan badan hukum",
  },
  {
    icon: Award,
    code: "SERTIFIKAT",
    title: "Sertifikat Pendaftaran",
    note: "Bukti resmi terdaftarnya PT Perseorangan Anda",
  },
  {
    icon: ScrollText,
    code: "AKTA",
    title: "Akta Perseorangan",
    note: "Disusun langsung oleh tim Gunara Consultant",
  },
];

function ResultCard({
  item,
}: {
  item: (typeof RESULTS)[number];
}) {
  const ref = useTilt<HTMLDivElement>(6);

  return (
    <div ref={ref} className="tilt-card">
      <div className="glass-strong gold-hairline shine-wrap relative overflow-hidden rounded-2xl p-6 text-center">
        <div className="shine-sweep pointer-events-none absolute inset-0" />
        {/* gold seal */}
        <div className="cert-seal mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#7C3AED]/70 bg-gradient-to-br from-[#E9E1FC] to-[#F3F0FE]">
          <ShieldCheck className="h-5.5 w-5.5 text-[#6D28D9]" />
        </div>
        <p className="mt-4 text-[10px] font-black tracking-[0.3em] text-[#7C3AED]">
          {item.code}
        </p>
        <h4 className="font-serif-lux mt-1.5 text-lg font-semibold text-[#241A4F]">
          {item.title}
        </h4>
        <p className="mt-2 text-xs leading-relaxed text-[#241A4F]/55">{item.note}</p>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="proses" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-lux opacity-60" />
      <div className="aurora left-[-6%] bottom-[5%] h-[340px] w-[340px] bg-[#7C3AED]/8" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
            ALUR CEPAT TERSERTIFIKASI ISO 9001:2015
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#241A4F] md:text-5xl">
            Transfer Hari Ini,{" "}
            <span className="text-gold-grad italic">PT Sah Besok</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#241A4F]/60">
            Lima langkah — Anda hanya menyentuh langkah pertama. Selebihnya kami yang
            berjuang untuk Anda.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#7C3AED]/60 via-[#7C3AED]/20 to-transparent md:left-1/2" />

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
                        <span className="absolute inset-0 rounded-full border border-[#7C3AED]/35 bg-[#F3F0FE]" />
                        <span className="absolute inset-0 rounded-full bg-[#7C3AED]/10 blur-md" />
                        <span className="font-serif-lux text-gold-grad relative text-lg font-bold">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`glass gold-hairline flex-1 rounded-2xl p-6 transition-colors duration-500 hover:bg-[#7C3AED]/[0.05] ${
                        left ? "md:text-right" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 md:justify-end">
                        <span className={`inline-block rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-2.5 py-1 text-[9px] font-black tracking-[0.18em] text-[#6D28D9] ${
                          step.tag === "1×24 JAM" ? "border-[#25D366]/40 bg-[#25D366]/10 text-[#4ade80]" : ""
                        }`}>
                          {step.tag}
                        </span>
                        <h3 className="font-serif-lux text-lg font-semibold text-[#241A4F] md:text-xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#241A4F]/60">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* final deliverables showcase */}
        <Reveal delay={120} className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="shimmer-line mx-auto w-40" />
            <p className="mt-8 text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
              YANG ANDA TERIMA DI TANGAN
            </p>
            <h3 className="font-serif-lux mt-3 text-2xl font-bold text-[#241A4F] md:text-3xl">
              3 Dokumen Kunci{" "}
              <span className="text-gold-grad italic">Pembuktian Keberadaan PT Anda</span>
            </h3>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {RESULTS.map((r, i) => (
              <Reveal key={r.code} delay={i * 140} variant="scale">
                <ResultCard item={r} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
