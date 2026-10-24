"use client";

import { BadgeCheck, Clock3, Banknote, ShieldCheck, ArrowDown, Sparkles, Landmark } from "lucide-react";
import { GoldParticles } from "./particles";
import { Counter, useTilt } from "./reveal";
import { STATS, waLink, WA_DEFAULT_MSG, BCA_ACCOUNT, BCA_NAME } from "@/lib/landing-constants";

export function Hero() {
  const tiltRef = useTilt<HTMLDivElement>(7);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-16 md:pt-20">
      {/* background layers */}
      <div className="absolute inset-0 bg-grid-lux" />
      <div className="aurora left-[-10%] top-[-15%] h-[480px] w-[480px] bg-[#d4af37]/14" />
      <div className="aurora right-[-12%] top-[22%] h-[420px] w-[420px] bg-[#b8860b]/12" style={{ animationDelay: "-6s" }} />
      <div className="aurora bottom-[-20%] left-[30%] h-[380px] w-[520px] bg-[#6b5417]/16" style={{ animationDelay: "-3s" }} />
      <GoldParticles />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-4 pb-16 pt-10 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-4">
        {/* ---- Left: copy ---- */}
        <div className="flex flex-col items-start">
          <div className="glass gold-hairline reveal is-visible mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f1de9b]" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-[#f1de9b]">
              SPESIALIS PT PERSEORANGAN · SEJAK 2009
            </span>
          </div>

          <h1 className="font-serif-lux text-[2.55rem] font-bold leading-[1.06] tracking-tight text-[#EDE6D6] sm:text-6xl lg:text-[4.35rem]">
            PT Atas Nama Anda,
            <br />
            <span className="text-gold-grad shine-wrap shine-sweep inline-block py-1 italic">
              Sah Dalam 1 Hari
            </span>
            <br />
            Kerja.
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-[#EDE6D6]/70 md:text-base">
            <strong className="font-semibold text-[#f1de9b]">
              Pendirian PT Perseorangan (Perseroan Perseorangan)
            </strong>{" "}
            oleh konsultan bersertifikasi ISO 9001:2015 —{" "}
            <em className="text-[#EDE6D6]/85">
              tanpa notaris, cukup KTP + NPWP + Alamat
            </em>
            . NIB, Sertifikat Pendaftaran, dan Akta Perseorangan: semua terbit lewat jalur
            resmi pemerintah.
          </p>

          <ul className="mt-7 grid gap-2.5 text-sm text-[#EDE6D6]/75 sm:grid-cols-2">
            {[
              "Cukup 3 dokumen — KTP, NPWP, Alamat",
              "Tanpa notaris — hemat jutaan rupiah",
              "Aset pribadi terlindungi badan hukum",
              "Jalur resmi OSS-RBA & Kemenkumham RI",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <BadgeCheck className="h-4 w-4 shrink-0 text-[#d4af37]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex w-full flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={waLink(WA_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-bold tracking-wide"
            >
              <Sparkles className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-12" />
              Daftar — PT Jadi Besok
            </a>
            <a
              href="#paket"
              className="glass gold-hairline flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-[#EDE6D6] transition-all duration-300 hover:bg-[#d4af37]/10 hover:text-[#f1de9b]"
            >
              Lihat 3 Paket & Harga
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>

          <p className="mt-5 text-xs text-[#EDE6D6]/45">
            Konsultasi awal <span className="font-semibold text-[#f1de9b]">gratis tanpa komitmen</span> — dijawab langsung tim di jam kerja.
          </p>

          {/* stats */}
          <div className="mt-12 grid w-full max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#d4af37]/15 bg-[#d4af37]/10 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center bg-[#07080e]/95 px-3 py-5">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-serif-lux text-2xl font-bold text-[#f1de9b] md:text-[1.7rem]"
                />
                <span className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-[#EDE6D6]/50">
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
            <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-[#d4af37]/25 via-transparent to-[#b8860b]/20 blur-2xl" />

            <div className="glass-strong gold-hairline glow-gold relative overflow-hidden rounded-[1.8rem] p-7 md:p-9">
              {/* decorative top */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#f1de9b] to-transparent opacity-80" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-[#d4af37]" />
                  <span className="text-[11px] font-bold tracking-[0.28em] text-[#d4af37]">
                    OFFER HARI INI
                  </span>
                </div>
                <span className="rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-[#f1de9b]">
                  SLOT TERBATAS
                </span>
              </div>

              <h3 className="font-serif-lux mt-6 text-2xl font-semibold text-[#EDE6D6] md:text-[1.7rem]">
                Pendirian PT Perseorangan
              </h3>
              <p className="mt-1.5 text-sm text-[#EDE6D6]/55">
                Paket Legalitas — NIB + Sertifikat + Akta Perseorangan
              </p>

              <div className="mt-6 flex items-end gap-3">
                <div className="flex flex-col">
                  <span className="text-sm text-[#EDE6D6]/50 line-through decoration-red-400/70">
                    Rp2.000.000
                  </span>
                  <div className="flex items-end gap-1.5">
                    <span className="text-sm text-[#EDE6D6]/70">Rp</span>
                    <span className="font-serif-lux text-gold-grad text-[3.2rem] font-bold leading-none">
                      750<span className="text-[1.6rem]">rb</span>
                    </span>
                  </div>
                </div>
                <span className="mb-1.5 rounded-full bg-gradient-to-r from-[#b8342f] to-[#e0483f] px-2.5 py-1 text-[10px] font-black tracking-wide text-white shadow-lg">
                  HEMAT 62%
                </span>
              </div>
              <p className="mt-1 text-[11px] text-[#EDE6D6]/45">
                *Harga khusus hari ini — normal Rp2.000.000
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="count-box flex items-center gap-2.5 rounded-xl px-3.5 py-3">
                  <Clock3 className="h-5 w-5 shrink-0 text-[#d4af37]" />
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-[#EDE6D6]">1 Hari</p>
                    <p className="text-[10px] text-[#EDE6D6]/50">langsung jadi</p>
                  </div>
                </div>
                <div className="count-box flex items-center gap-2.5 rounded-xl px-3.5 py-3">
                  <Banknote className="h-5 w-5 shrink-0 text-[#d4af37]" />
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-[#EDE6D6]">3 Dokumen</p>
                    <p className="text-[10px] text-[#EDE6D6]/50">KTP · NPWP · Alamat</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#25D366]/25 bg-[#25D366]/8 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#25D366]">
                      TRANSFER RESMI KE
                    </p>
                    <p className="mt-1 font-mono text-sm font-bold tracking-wider text-[#EDE6D6]">
                      BCA {BCA_ACCOUNT}
                    </p>
                    <p className="text-[10px] text-[#EDE6D6]/55">a.n. {BCA_NAME}</p>
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
              <p className="mt-3 text-center text-[10px] text-[#EDE6D6]/40">
                Transfer + kirim KTP, NPWP, alamat hari ini → 1 hari langsung jadi PT
              </p>
            </div>
          </div>

          {/* floating chips */}
          <div className="float-slow glass gold-hairline absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 md:block lg:-left-10">
            <p className="text-[10px] font-bold tracking-[0.16em] text-[#d4af37]">BADAN HUKUM RESMI</p>
            <p className="mt-0.5 text-[11px] text-[#EDE6D6]/70">UU Cipta Kerja · OSS-RBA</p>
          </div>
          <div className="float-slower glass gold-hairline absolute -right-3 bottom-16 hidden rounded-2xl px-4 py-3 md:block lg:-right-8">
            <p className="text-[10px] font-bold tracking-[0.16em] text-[#d4af37]">TINGKAT SUKSES</p>
            <p className="font-serif-lux mt-0.5 text-lg font-bold text-[#f1de9b]">98%</p>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-[#EDE6D6]/35">
          <span className="text-[9px] tracking-[0.4em]">GULIR</span>
          <div className="h-10 w-px overflow-hidden bg-white/10">
            <div className="h-4 w-px animate-[floatY_1.6s_ease-in-out_infinite] bg-[#d4af37]" />
          </div>
        </div>
      </div>
    </section>
  );
}
