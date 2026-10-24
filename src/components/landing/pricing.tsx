"use client";

import { useEffect, useState } from "react";
import { Check, Flame, Users } from "lucide-react";
import { Reveal, useTilt } from "./reveal";
import { PRICING_TIERS, waLink } from "@/lib/landing-constants";

function useMonthCountdown() {
  const [t, setT] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const deadline = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
      const diff = Math.max(0, deadline.getTime() - now.getTime());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return t;
}

function Countdown() {
  const t = useMonthCountdown();
  const units = [
    { v: t?.d, l: "Hari" },
    { v: t?.h, l: "Jam" },
    { v: t?.m, l: "Menit" },
    { v: t?.s, l: "Detik" },
  ];

  return (
    <div className="flex items-center gap-2.5" role="timer" aria-label="Hitung mundur kuota bulan ini">
      {units.map((u) => (
        <div key={u.l} className="count-box flex w-[62px] flex-col items-center rounded-xl py-2.5 md:w-[70px] md:py-3">
          <span className="font-serif-lux text-xl font-bold tabular-nums text-[#f1de9b] md:text-2xl">
            {u.v === undefined ? "--" : String(u.v).padStart(2, "0")}
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-[#EDE6D6]/45">
            {u.l}
          </span>
        </div>
      ))}
    </div>
  );
}

function TierCard({ tier }: { tier: (typeof PRICING_TIERS)[number] }) {
  const ref = useTilt<HTMLDivElement>(tier.featured ? 4 : 6);

  return (
    <div
      ref={ref}
      className={`tilt-card relative ${tier.featured ? "lg:-translate-y-5" : ""}`}
    >
      {tier.featured && (
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#d4af37]/25 via-transparent to-[#b8860b]/15 blur-2xl" />
      )}
      <div
        className={`relative flex h-full flex-col rounded-3xl p-7 md:p-8 ${
          tier.featured
            ? "glass-strong gold-hairline glow-gold"
            : "glass gold-hairline"
        }`}
      >
        {tier.badge && (
          <span className="btn-gold absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[10px] font-black tracking-[0.2em]">
            {tier.badge}
          </span>
        )}
        <h3 className="font-serif-lux text-xl font-semibold text-[#EDE6D6] md:text-2xl">
          {tier.name}
        </h3>
        <p className="mt-1.5 text-sm text-[#EDE6D6]/55">{tier.tagline}</p>

        <div className="mt-6 flex items-end gap-1.5">
          <span className="text-sm text-[#EDE6D6]/50">Rp</span>
          <span
            className={`font-serif-lux text-[2.6rem] font-bold leading-none ${
              tier.featured ? "text-gold-grad" : "text-[#EDE6D6]"
            }`}
          >
            {tier.price}
          </span>
        </div>
        <p className="mt-1.5 text-[11px] text-[#EDE6D6]/40">
          Sekali bayar · tanpa biaya tersembunyi
        </p>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

        <ul className="flex flex-1 flex-col gap-3">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-[#EDE6D6]/75">
              <span
                className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                  tier.featured ? "bg-[#d4af37]/25" : "bg-[#d4af37]/12"
                }`}
              >
                <Check className="h-3 w-3 text-[#f1de9b]" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={waLink(tier.ctaMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 flex items-center justify-center rounded-full py-3.5 text-sm font-bold ${
            tier.featured ? "btn-gold" : "glass gold-hairline text-[#f1de9b] hover:bg-[#d4af37]/10"
          }`}
        >
          Pilih Paket Ini
        </a>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="paket" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora left-[-8%] top-[15%] h-[400px] w-[400px] bg-[#d4af37]/12" />
      <div className="aurora right-[-6%] bottom-[10%] h-[340px] w-[340px] bg-[#b8860b]/10" style={{ animationDelay: "-7s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
            INVESTASI LEGALITAS
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#EDE6D6] md:text-5xl">
            Lebih Murah dari <span className="text-gold-grad italic">Satu Penalti</span>{" "}
            Kepatuhan
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#EDE6D6]/60">
            Beroperasi tanpa legalitas itu mahal: denda, tilang instansi, bisnis diblokir
            marketplace. Sekali beres — Anda berbisnis tenang selamanya.
          </p>
        </Reveal>

        {/* urgency strip */}
        <Reveal delay={140} className="mt-10">
          <div className="glass-strong gold-hairline mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl px-6 py-6 md:flex-row md:justify-between md:gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37]/25 to-transparent">
                <Flame className="h-6 w-6 text-[#f1de9b]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#EDE6D6]">
                  Kuota penanganan prioritas bulan ini
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-[#EDE6D6]/55">
                  <Users className="h-3.5 w-3.5 text-[#d4af37]" />
                  Tersisa <span className="font-bold text-[#f1de9b]">8 dari 30 slot</span> —
                  minggu ini
                </p>
              </div>
            </div>
            <Countdown />
          </div>
        </Reveal>

        {/* tiers */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 130} variant="scale">
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-sm text-[#EDE6D6]/50">
            Butuh paket kombinasi atau perizinan lain?{" "}
            <a
              href={waLink("Halo Gunara Consultant! Saya butuh paket kombinasi/kustom. Mohon dibantu konsultasi gratisnya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#f1de9b] underline decoration-[#d4af37]/50 underline-offset-4 transition-colors hover:text-[#d4af37]"
            >
              Konsultasikan gratis di sini →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
