"use client";

import {
  BadgeCheck,
  Clock3,
  Banknote,
  ShieldCheck,
  ArrowDown,
  Sparkles,
  Landmark,
  Star,
} from "lucide-react";
import { GoldParticles } from "./particles";
import { Counter, useTilt, SplitWords, Magnetic } from "./reveal";
import { STATS, waLink, WA_DEFAULT_MSG, BCA_ACCOUNT, BCA_NAME } from "@/lib/landing-constants";

const AVATARS = [
  { initials: "DK", bg: "from-[#5B21B6] to-[#4C1D95]" },
  { initials: "RS", bg: "from-[#7C3AED] to-[#4C1D95]" },
  { initials: "HG", bg: "from-[#6D28D9] to-[#5B21B6]" },
  { initials: "MO", bg: "from-[#8B5CF6] to-[#6D28D9]" },
];

export function Hero() {
  const tiltRef = useTilt<HTMLDivElement>(7);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-16 md:pt-20">
      {/* background layers */}
      <div className="absolute inset-0 bg-grid-lux" />
      <div className="aurora left-[-10%] top-[-15%] h-[480px] w-[480px] bg-[#7C3AED]/14" />
      <div className="aurora right-[-12%] top-[22%] h-[420px] w-[420px] bg-[#8B5CF6]/12" style={{ animationDelay: "-6s" }} />
      <div className="aurora bottom-[-20%] left-[30%] h-[380px] w-[520px] bg-[#7C3AED]/16" style={{ animationDelay: "-3s" }} />
      {/* giant watermark */}
      <span
        aria-hidden="true"
        className="text-outline font-serif-lux pointer-events-none absolute -right-8 top-24 select-none text-[11rem] font-black leading-none md:text-[17rem]"
      >
        PT
      </span>
      <GoldParticles />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-4 pb-16 pt-10 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-4">
        {/* ---- Left: copy ---- */}
        <div className="flex flex-col items-start">
          <div className="glass gold-hairline reveal is-visible mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C3AED] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6D28D9]" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-[#6D28D9]">
              SPESIALIS PT PERSEORANGAN · SEJAK 2009
            </span>
          </div>

          <h1 className="font-serif-lux text-[2.55rem] font-bold leading-[1.06] tracking-tight text-[#241A4F] sm:text-6xl lg:text-[4.35rem]">
            <SplitWords text="PT Atas Nama Anda," delay={2450} stagger={95} />
            <br />
            <SplitWords
              text="Sah Dalam 1 Hari"
              highlight="Sah Dalam 1 Hari"
              delay={2950}
              stagger={95}
              highlightClass="text-gold-grad shine-wrap shine-sweep italic"
            />
            <br />
            <SplitWords text="Kerja." delay={3550} stagger={95} />
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-[#241A4F]/70 md:text-base">
            <strong className="font-semibold text-[#6D28D9]">
              Pendirian PT Perseorangan (Perseroan Perseorangan)
            </strong>{" "}
            oleh konsultan bersertifikasi ISO 9001:2015 —{" "}
            <em className="text-[#241A4F]/85">
              tanpa notaris, cukup KTP + NPWP + Alamat
            </em>
            . NIB, Sertifikat Pendaftaran, dan Akta Perseorangan: semua terbit lewat jalur
            resmi pemerintah.
          </p>

          <ul className="mt-7 grid gap-2.5 text-sm text-[#241A4F]/75 sm:grid-cols-2">
            {[
              "Cukup 3 dokumen — KTP, NPWP, Alamat",
              "Tanpa notaris — hemat jutaan rupiah",
              "Aset pribadi terlindungi badan hukum",
              "Jalur resmi OSS-RBA & Kemenkumham RI",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <BadgeCheck className="h-4 w-4 shrink-0 text-[#7C3AED]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex w-full flex-col gap-4 sm:flex-row sm:items-center">
            <Magnetic>
              <a
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold group flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-bold tracking-wide"
              >
                <Sparkles className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-12" />
                Daftar — PT Jadi Besok
              </a>
            </Magnetic>
            <a
              href="#paket"
              className="glass gold-hairline flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-[#241A4F] transition-all duration-300 hover:bg-[#7C3AED]/10 hover:text-[#6D28D9]"
            >
              Lihat 3 Paket & Harga
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>

          {/* trust: avatars + rating + live counter */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center">
              {AVATARS.map((a, i) => (
                <span
                  key={a.initials}
                  className={`avatar-ring -ml-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${a.bg} first:ml-0`}
                  style={{ zIndex: AVATARS.length - i }}
                >
                  <span className="text-[10px] font-bold text-white drop-shadow-sm">{a.initials}</span>
                </span>
              ))}
              <span className="avatar-ring -ml-2.5 flex h-9 items-center justify-center rounded-full bg-[#F3F0FE] px-2.5">
                <span className="text-[10px] font-bold text-[#6D28D9]">1.2rb+</span>
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#7C3AED] text-[#7C3AED]" />
                ))}
              </div>
              <span className="text-[11px] text-[#241A4F]/55">
                <span className="font-bold text-[#241A4F]/85">4.9/5</span> dari 1.200+ founder
              </span>
            </div>
            <div className="glass gold-hairline flex items-center gap-2 rounded-full px-3.5 py-1.5">
              <span className="live-dot h-2 w-2 rounded-full bg-[#4ade80]" />
              <span className="text-[11px] font-semibold text-[#241A4F]/75">
                <span className="font-bold text-[#4ade80]">6 PT</span> terbit hari ini
              </span>
            </div>
          </div>

          <p className="mt-5 text-xs text-[#241A4F]/45">
            Konsultasi awal <span className="font-semibold text-[#6D28D9]">gratis tanpa komitmen</span> — dijawab langsung tim di jam kerja.
          </p>

          {/* stats */}
          <div className="mt-10 grid w-full max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#7C3AED]/15 bg-[#7C3AED]/10 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center bg-[#F6F4FE]/95 px-3 py-5">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-serif-lux text-2xl font-bold text-[#6D28D9] md:text-[1.7rem]"
                />
                <span className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-[#241A4F]/50">
                  {s.label}
                </span>
                {i === 0 && <span className="sr-only">Jenis perizinan lebih dari lima ratus</span>}
              </div>
            ))}
          </div>
        </div>

        {/* ---- Right: floating premium card ---- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" style={{ perspective: "1200px" }}>
          <div ref={tiltRef} className="tilt-card relative">
            {/* glow behind card */}
            <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-[#7C3AED]/25 via-transparent to-[#8B5CF6]/20 blur-2xl" />

            <div className="glass-strong gold-hairline glow-gold shine-wrap relative overflow-hidden rounded-[1.8rem] p-7 md:p-9">
              <div className="shine-sweep pointer-events-none absolute inset-0" />
              {/* decorative top */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#6D28D9] to-transparent opacity-80" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-[#7C3AED]" />
                  <span className="text-[11px] font-bold tracking-[0.28em] text-[#7C3AED]">
                    OFFER HARI INI
                  </span>
                </div>
                <span className="rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-[#6D28D9]">
                  SLOT TERBATAS
                </span>
              </div>

              <h3 className="font-serif-lux mt-6 text-2xl font-semibold text-[#241A4F] md:text-[1.7rem]">
                Pendirian PT Perseorangan
              </h3>
              <p className="mt-1.5 text-sm text-[#241A4F]/55">
                Paket Legalitas — NIB + Sertifikat + Akta Perseorangan
              </p>

              <div className="mt-6 flex items-end gap-3">
                <div className="flex flex-col">
                  <span className="text-sm text-[#241A4F]/50 line-through decoration-red-400/70">
                    Rp2.000.000
                  </span>
                  <div className="flex items-end gap-1.5">
                    <span className="text-sm text-[#241A4F]/70">Rp</span>
                    <span className="font-serif-lux text-gold-grad text-[3.2rem] font-bold leading-none">
                      750<span className="text-[1.6rem]">rb</span>
                    </span>
                  </div>
                </div>
                <span className="mb-1.5 rounded-full bg-gradient-to-r from-[#b8342f] to-[#e0483f] px-2.5 py-1 text-[10px] font-black tracking-wide text-white shadow-lg">
                  HEMAT 62%
                </span>
              </div>
              <p className="mt-1 text-[11px] text-[#241A4F]/45">
                *Harga khusus hari ini — normal Rp2.000.000
              </p>

              {/* quota bar */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em]">
                  <span className="text-[#241A4F]/50">Kuota harga khusus hari ini</span>
                  <span className="text-[#6D28D9]">17/25 terisi</span>
                </div>
                <div className="slot-bar mt-2 h-2 overflow-hidden rounded-full bg-[#7C3AED]/10">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#A78BFA]" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="count-box flex items-center gap-2.5 rounded-xl px-3.5 py-3">
                  <Clock3 className="h-5 w-5 shrink-0 text-[#7C3AED]" />
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-[#241A4F]">1 Hari</p>
                    <p className="text-[10px] text-[#241A4F]/50">langsung jadi</p>
                  </div>
                </div>
                <div className="count-box flex items-center gap-2.5 rounded-xl px-3.5 py-3">
                  <Banknote className="h-5 w-5 shrink-0 text-[#7C3AED]" />
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-[#241A4F]">3 Dokumen</p>
                    <p className="text-[10px] text-[#241A4F]/50">KTP · NPWP · Alamat</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#25D366]/25 bg-[#25D366]/8 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#25D366]">
                      TRANSFER RESMI KE
                    </p>
                    <p className="mt-1 font-mono text-sm font-bold tracking-wider text-[#241A4F]">
                      BCA {BCA_ACCOUNT}
                    </p>
                    <p className="text-[10px] text-[#241A4F]/55">a.n. {BCA_NAME}</p>
                  </div>
                  <ShieldCheck className="h-8 w-8 text-[#25D366]/80" />
                </div>
              </div>

              <a
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold"
              >
                Transfer Sekarang — PT Sah Besok
              </a>
              <p className="mt-3 text-center text-[10px] text-[#241A4F]/40">
                Transfer + kirim KTP, NPWP, alamat hari ini → 1 hari langsung jadi PT
              </p>
            </div>
          </div>

          {/* floating chips */}
          <div className="float-slow glass gold-hairline absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 md:block lg:-left-10">
            <p className="text-[10px] font-bold tracking-[0.16em] text-[#7C3AED]">BADAN HUKUM RESMI</p>
            <p className="mt-0.5 text-[11px] text-[#241A4F]/70">UU Cipta Kerja · OSS-RBA</p>
          </div>
          <div className="float-slower glass gold-hairline absolute -right-3 bottom-16 hidden rounded-2xl px-4 py-3 md:block lg:-right-8">
            <p className="text-[10px] font-bold tracking-[0.16em] text-[#7C3AED]">TINGKAT SUKSES</p>
            <p className="font-serif-lux mt-0.5 text-lg font-bold text-[#6D28D9]">98%</p>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-[#241A4F]/35">
          <span className="text-[9px] tracking-[0.4em]">GULIR</span>
          <div className="h-10 w-px overflow-hidden bg-[#7C3AED]/12">
            <div className="h-4 w-px animate-[floatY_1.6s_ease-in-out_infinite] bg-[#7C3AED]" />
          </div>
        </div>
      </div>
    </section>
  );
}
