"use client";

import {
  Zap,
  FileCheck2,
  HandCoins,
  Crown,
  ShieldCheck,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { Reveal, useTilt, Counter } from "./reveal";
import { waLink, WA_DEFAULT_MSG } from "@/lib/landing-constants";

const CARDS = [
  {
    icon: Zap,
    title: "2–4 Hari Kerja",
    desc: "NIB dan sertifikat badan usaha terbit dalam hitungan hari — bukan bulan. Kami bekerja secepat Anda butuh membuka gerbang bisnis.",
    span: "md:col-span-2",
    big: true,
  },
  {
    icon: HandCoins,
    title: "Mulai Rp750.000",
    desc: "Tanpa notaris tanpa biaya siluman. Satu kali bayar, legalitas lengkap.",
  },
  {
    icon: Crown,
    title: "Akses Tender & Korporat",
    desc: "Dengan badan usaha resmi, Anda bisa ikut pengadaan pemerintah, bekerja sama dengan perusahaan besar, dan buka rekening korporat.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Proses Ulang",
    desc: "Ditolak bukan karena dokumen Anda? Kami proses ulang gratis. Itu tertulis di kontrak.",
  },
  {
    icon: FileCheck2,
    title: "Diperiksa Dua Kali",
    desc: "Setiap berkas melewati dual-review khas metodologi Mic Kinsey sebelum masuk instansi — itulah rahasia tingkat keberhasilan kami.",
    span: "md:col-span-2",
    big: true,
  },
  {
    icon: MapPin,
    title: "38 Provinsi",
    desc: "Tim ahli lokal dari Aceh sampai Papua Pegunungan.",
  },
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useTilt<HTMLDivElement>(5);
  return (
    <div ref={ref} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
}

export function Advantages() {
  return (
    <section id="keunggulan" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora left-[-8%] top-[10%] h-[360px] w-[360px] bg-[#d4af37]/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
            MENGAPA GUNARA
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#EDE6D6] md:text-5xl">
            Alasan Pemilik Usaha{" "}
            <span className="text-gold-grad italic">Tidak Pernah Ragu</span> kepada Kami
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#EDE6D6]/60">
            Kami membangun kepercayaan lewat legalitas yang benar, proses yang transparan,
            dan standar mutu internasional. Berakar dari Mic Kinsey sejak 2009 — kini
            melayani 38 provinsi Indonesia.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 90}
              variant="scale"
              className={card.span ?? ""}
            >
              <TiltCard className={card.span ?? ""}>
                <div className="glass gold-hairline group h-full rounded-2xl p-6 transition-colors duration-500 hover:bg-[#d4af37]/[0.06] md:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/15 to-transparent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <card.icon className="h-5.5 w-5.5 text-[#f1de9b]" />
                    </div>
                    {card.big && (
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37]/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-serif-lux mt-5 font-semibold text-[#EDE6D6] ${
                      card.big ? "text-xl md:text-2xl" : "text-lg"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#EDE6D6]/60">
                    {card.desc}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={630} variant="scale">
            <TiltCard>
              <a
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex h-full min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center"
              >
                <TrendingUp className="h-7 w-7" />
                <span className="font-serif-lux text-xl font-bold leading-snug">
                  Naikkan Level
                  <br />
                  Usaha Anda Hari Ini
                </span>
                <span className="text-xs font-semibold opacity-80">
                  Klik — chat langsung dengan tim pakar
                </span>
              </a>
            </TiltCard>
          </Reveal>
        </div>

        {/* heritage band */}
        <Reveal delay={150} className="mt-16">
          <div className="glass gold-hairline relative overflow-hidden rounded-2xl px-6 py-10 md:px-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d4af37]/10 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#d4af37]">
                  WARISAN MIC KINSEY · SEJAK 2009
                </p>
                <p className="font-serif-lux mt-4 text-xl font-medium leading-relaxed text-[#EDE6D6]/85 md:text-2xl">
                  “Legalitas bukan biaya, melainkan{" "}
                  <span className="text-gold-grad italic">fondasi keberanian</span>{" "}
                  berbisnis besar.”
                </p>
                <p className="mt-4 text-sm text-[#EDE6D6]/50">
                  — Gugun Gunara, Pendiri & Direktur Utama
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { v: 15, s: "+", l: "Tahun" },
                  { v: 1200, s: "+", l: "Klien" },
                  { v: 98, s: "%", l: "Sukses" },
                ].map((m) => (
                  <div key={m.l} className="border-l border-[#d4af37]/20 pl-4 text-left first:border-0 first:pl-0 md:text-center md:border-0 md:pl-0">
                    <Counter
                      value={m.v}
                      suffix={m.s}
                      className="font-serif-lux text-2xl font-bold text-[#f1de9b] md:text-3xl"
                    />
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#EDE6D6]/45">
                      {m.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
