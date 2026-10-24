"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { TrendingUp, Calculator, ArrowRight, Sparkles } from "lucide-react";
import { Reveal, useSpotlight } from "./reveal";
import { waLink } from "@/lib/landing-constants";

/** omzet options in millions of rupiah per month */
const STEPS = [3, 5, 10, 15, 25, 40, 60, 100, 150, 250, 400, 600];

function fmt(v: number): string {
  if (v >= 1000) {
    const m = (v / 1000).toLocaleString("id-ID", {
      maximumFractionDigits: 1,
    });
    return `Rp${m} Miliar`;
  }
  return `Rp${v.toLocaleString("id-ID")} Juta`;
}

/** eased count-up toward target whenever target changes */
function useEasedNumber(target: number) {
  const [display, setDisplay] = useState(target);
  const raf = useRef(0);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    const dur = 700;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = from + (target - from) * eased;
      setDisplay(val);
      fromRef.current = val;
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target]);

  return display;
}

export function RoiCalculator() {
  const [idx, setIdx] = useState(3); // default Rp25 juta
  const spotlightRef = useSpotlight<HTMLDivElement>();

  const current = STEPS[idx];
  const target = Math.round(current * 20 * 10) / 10;
  const yearly = target * 12;

  const easedTarget = useEasedNumber(target);
  const easedYearly = useEasedNumber(yearly);

  const pct = Math.round((idx / (STEPS.length - 1)) * 100);

  const waMsg = `Halo Gunara Consultant! Saya baru mencoba *Kalkulator Omzet 20X* di landing page: omzet saya sekarang ${fmt(current)}/bulan, potensinya jadi ${fmt(target)}/bulan dengan Paket Sultan 20X. Saya serius naik kelas — saya siap transfer ke BCA dan kirim KTP + NPWP + Alamat sekarang!`;

  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="aurora right-[-8%] top-[10%] h-[360px] w-[360px] bg-[#d4af37]/12" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
            <Calculator className="h-4 w-4" />
            KALKULATOR OMZET 20X
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#EDE6D6] md:text-5xl">
            Coba Sendiri: Geser, Lihat{" "}
            <span className="text-gold-grad italic">Potensi 20 Kali Lipat</span> Anda
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#EDE6D6]/60">
            Geser omzet bulanan Anda saat ini — dan lihat sendiri apa yang terjadi
            bila sistem Paket Sultan 20X bekerja untuk bisnis Anda.
          </p>
        </Reveal>

        <Reveal delay={150} variant="scale" className="mt-12">
          <div
            ref={spotlightRef}
            className="spotlight-card glass-strong gold-hairline glow-gold rounded-3xl p-7 md:p-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
              {/* left: slider */}
              <div>
                <div className="flex items-end justify-between gap-4">
                  <label
                    htmlFor="roi-range"
                    className="text-xs font-bold uppercase tracking-[0.18em] text-[#EDE6D6]/55"
                  >
                    Omzet Anda Sekarang / Bulan
                  </label>
                  <span
                    key={current}
                    className="comp-pop rounded-lg border border-[#d4af37]/35 bg-[#d4af37]/10 px-3 py-1.5 font-serif-lux text-lg font-bold text-[#f1de9b]"
                  >
                    {fmt(current)}
                  </span>
                </div>

                <input
                  id="roi-range"
                  type="range"
                  min={0}
                  max={STEPS.length - 1}
                  step={1}
                  value={idx}
                  onChange={(e) => setIdx(Number(e.target.value))}
                  className="range-gold mt-6"
                  style={{ "--range-progress": `${pct}%` } as CSSProperties}
                  aria-valuetext={fmt(current)}
                />
                <div className="mt-2.5 flex justify-between text-[10px] font-semibold uppercase tracking-wider text-[#EDE6D6]/35">
                  <span>Rp3 jt</span>
                  <span>Rp600 jt</span>
                </div>

                {/* result card */}
                <div className="count-box mt-8 rounded-2xl p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d4af37]">
                    POTENSI ANDA DENGAN SISTEM 20X
                  </p>
                  <p className="font-serif-lux text-gold-grad mt-2 text-4xl font-bold leading-none tabular-nums md:text-5xl">
                    {fmt(Math.round(easedTarget))}
                    <span className="ml-2 text-base text-[#EDE6D6]/45">/bulan</span>
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-[#EDE6D6]/60">
                    <TrendingUp className="h-4 w-4 text-[#4ade80]" />
                    Setara{" "}
                    <span className="font-bold text-[#4ade80]">
                      {fmt(Math.round(easedYearly))}
                    </span>{" "}
                    per tahun
                  </p>
                </div>
              </div>

              {/* right: comparison bars */}
              <div className="flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EDE6D6]/55">
                  Visualisasi Lompatan Omzet
                </p>
                <div className="mt-6 flex flex-1 items-end justify-center gap-10 rounded-2xl border border-[#d4af37]/12 bg-white/[0.02] px-6 pb-6 pt-10 md:min-h-[300px]">
                  <div className="flex h-full w-20 flex-col items-center justify-end gap-3 md:w-24">
                    <span className="whitespace-nowrap text-[11px] font-semibold text-[#EDE6D6]/55">
                      {fmt(current)}
                    </span>
                    <div
                      className="w-full rounded-t-xl bg-gradient-to-t from-[#3a3320] to-[#6b5c2e] transition-all duration-700"
                      style={{ height: `${Math.max(6, (current / target) * 100)}%` }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#EDE6D6]/40">
                      Sekarang
                    </span>
                  </div>
                  <div className="flex h-full w-24 flex-col items-center justify-end gap-3 md:w-28">
                    <span
                      key={Math.round(target)}
                      className="comp-pop whitespace-nowrap text-[11px] font-bold text-[#f1de9b]"
                    >
                      {fmt(Math.round(target))}
                    </span>
                    <div
                      key={`bar-${Math.round(target)}`}
                      className="roi-bar-grow slot-bar w-full rounded-t-xl bg-gradient-to-t from-[#8a6a1f] via-[#d4af37] to-[#f7ecc9]"
                      style={{ height: "100%" }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                      20X
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-center text-[11px] leading-relaxed text-[#EDE6D6]/40">
                  Ilustrasi berdasarkan sistem pendampingan Paket Sultan 20X — hasil
                  bergantung pada kedisiplinan mengikuti aturan program.
                </p>
              </div>
            </div>

            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-10 flex items-center justify-center gap-2.5 rounded-full py-4 text-[15px] font-bold"
            >
              <Sparkles className="h-4.5 w-4.5" />
              Klaim Potensi {fmt(Math.round(target))} Ini — Paket Sultan 20X
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
            <p className="mt-3 text-center text-[11px] text-[#EDE6D6]/45">
              Garansi: ikuti aturan kami — omzet belum naik? Pendampingan diulang{" "}
              <span className="font-semibold text-[#f1de9b]">gratis sampai naik</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
