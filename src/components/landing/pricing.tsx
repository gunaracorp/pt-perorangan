"use client";

import { useEffect, useState } from "react";
import { Check, Flame, Users, BadgePercent } from "lucide-react";
import { Reveal, useTilt, useSpotlight } from "./reveal";
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
    <div className="flex items-center gap-2.5" role="timer" aria-label="Hitung mundur harga khusus bulan ini">
      {units.map((u) => (
        <div key={u.l} className="count-box flex w-[62px] flex-col items-center rounded-xl py-2.5 md:w-[70px] md:py-3">
          <span className="font-serif-lux text-xl font-bold tabular-nums text-[#6D28D9] md:text-2xl">
            {u.v === undefined ? "--" : String(u.v).padStart(2, "0")}
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-[#241A4F]/45">
            {u.l}
          </span>
        </div>
      ))}
    </div>
  );
}

function TierCard({ tier }: { tier: (typeof PRICING_TIERS)[number] }) {
  const ref = useTilt<HTMLDivElement>(tier.featured ? 4 : 6);
  const spotRef = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`tilt-card relative ${tier.featured ? "lg:-translate-y-5" : ""}`}
    >
      {tier.featured && (
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#7C3AED]/25 via-transparent to-[#8B5CF6]/15 blur-2xl" />
      )}
      <div
        ref={spotRef}
        className={`spotlight-card relative flex h-full flex-col rounded-3xl p-7 md:p-8 ${
          tier.featured
            ? "glass-strong gold-hairline glow-gold"
            : "glass gold-hairline"
        }`}
      >
        {tier.badge && (
          <span className="btn-gold absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[10px] font-black tracking-[0.18em]">
            {tier.badge}
          </span>
        )}
        <h3 className="font-serif-lux text-xl font-semibold text-[#241A4F] md:text-2xl">
          {tier.name}
        </h3>
        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7C3AED]/85">
          {tier.subtitle}
        </p>
        <p className="mt-2 text-sm text-[#241A4F]/55">{tier.tagline}</p>

        <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
          <span className="mb-1 rounded-md bg-gradient-to-r from-[#b8342f] to-[#e0483f] px-2 py-0.5 text-[10px] font-black tracking-wide text-white">
            -{(100 - Math.round(Number(tier.price.replace(/\./g, "")) / Number(tier.oldPrice.replace(/\./g, "")) * 100))}%
          </span>
          <span className="text-sm text-[#241A4F]/45 line-through decoration-red-400/70">
            Rp{tier.oldPrice}
          </span>
        </div>
        <div className="mt-1 flex items-end gap-1.5">
          <span className="text-sm text-[#241A4F]/60">Rp</span>
          <span
            className={`font-serif-lux text-[2.6rem] font-bold leading-none ${
              tier.featured ? "text-gold-grad" : "text-[#241A4F]"
            }`}
          >
            {tier.price}
          </span>
        </div>
        <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#241A4F]/40">
          <BadgePercent className="h-3.5 w-3.5 text-[#7C3AED]" />
          Harga khusus hari ini — sekali bayar
        </p>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />

        <ul className="flex flex-1 flex-col gap-3">
          {tier.deliverables.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-[#241A4F]/75">
              <span
                className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                  tier.featured ? "bg-[#7C3AED]/25" : "bg-[#7C3AED]/12"
                }`}
              >
                <Check className="h-3 w-3 text-[#6D28D9]" />
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
            tier.featured ? "btn-gold" : "glass gold-hairline text-[#6D28D9] hover:bg-[#7C3AED]/10"
          }`}
        >
          Ambil Paket Ini — Transfer Sekarang
        </a>
        <p className="mt-3 text-center text-[10px] leading-relaxed text-[#241A4F]/40">
          Transfer + kirim KTP, NPWP, alamat → proses 1 hari langsung jalan
        </p>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="paket" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora left-[-8%] top-[15%] h-[400px] w-[400px] bg-[#7C3AED]/12" />
      <div className="aurora right-[-6%] bottom-[10%] h-[340px] w-[340px] bg-[#8B5CF6]/10" style={{ animationDelay: "-7s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
            PILIH SENJATA ANDA
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#241A4F] md:text-5xl">
            3 Paket <span className="text-gold-grad italic">Harga Khusus</span> Hari Ini
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#241A4F]/60">
            Diskon besar berlaku untuk pendaftar bulan ini. Besok harga bisa kembali
            normal — yang ambil hari ini mengunci harga khusus selamanya.
          </p>
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3">
            <div className="slot-bar h-1.5 flex-1 overflow-hidden rounded-full bg-[#7C3AED]/10">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#A78BFA]" />
            </div>
            <span className="shrink-0 text-[10px] font-bold tracking-[0.14em] text-[#6D28D9]">
              17/25 TERISI
            </span>
          </div>
        </Reveal>

        {/* urgency strip */}
        <Reveal delay={140} className="mt-10">
          <div className="glass-strong gold-hairline mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl px-6 py-6 md:flex-row md:justify-between md:gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED]/25 to-transparent">
                <Flame className="h-6 w-6 text-[#6D28D9]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#241A4F]">
                  Harga khusus & kuota prioritas bulan ini
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-[#241A4F]/55">
                  <Users className="h-3.5 w-3.5 text-[#7C3AED]" />
                  Tersisa <span className="font-bold text-[#6D28D9]">8 dari 30 slot</span> —
                  1 NIK = 1 PT, jangan tunggu
                </p>
              </div>
            </div>
            <Countdown />
          </div>
        </Reveal>

        {/* tiers */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 130} variant="scale">
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </div>

        {/* guarantee band */}
        <Reveal delay={200} className="mt-14">
          <div className="glass-strong gold-hairline relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-7 py-9 text-center md:px-12">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#25D366]/10 blur-3xl" />
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#4ade80]">
              JAMINAN GANDA GUNARA
            </p>
            <p className="font-serif-lux mx-auto mt-4 max-w-2xl text-xl font-medium leading-relaxed text-[#241A4F]/90 md:text-2xl">
              Garansi 1: PT ditolak bukan karena dokumen Anda?{" "}
              <span className="text-gold-grad italic">Kami proses ulang gratis.</span>
              <br className="hidden md:block" />
              Garansi 2: Ikuti aturan Paket Sultan 20X dan omzet belum naik?{" "}
              <span className="text-gold-grad italic">Pendampingan kami ulang gratis sampai naik.</span>
            </p>
            <p className="mt-5 text-xs text-[#241A4F]/45">
              Keduanya tertulis jelas di kontrak Anda — bukan janji lisan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
