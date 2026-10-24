"use client";

import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink } from "@/lib/landing-constants";

type EntityKey = "po" | "pt-perseorangan" | "pt";

const ENTITIES: Record<
  EntityKey,
  {
    name: string;
    tagline: string;
    price: string;
    time: string;
    bestFor: string;
    pros: string[];
    cons: string[];
    waMsg: string;
  }
> = {
  po: {
    name: "PO / UPTA",
    tagline: "Badan Usaha Perseorangan",
    price: "Rp750.000",
    time: "2–4 hari kerja",
    bestFor: "UMKM, pedagang, freelancer, usaha rumahan yang ingin cepat legal dengan biaya ringan",
    pros: [
      "Tanpa notaris & tanpa modal dasar",
      "Tercepat — 2–4 hari kerja selesai",
      "Bisa ikut tender & pengadaan pemerintah",
      "Buka rekening korporat & payment gateway",
      "Pajak ringan di awal pengembangan usaha",
    ],
    cons: [
      "Tanggung jawab melekat pada pemilik usaha",
      "Kredibilitas di bawah PT untuk proyek besar",
    ],
    waMsg:
      "Halo Gunara Consultant! Setelah membandingkan, saya memilih *PO/UPTA (Rp750.000)*. Mohon dibantu prosesnya. Terima kasih!",
  },
  "pt-perseorangan": {
    name: "PT Perseorangan",
    tagline: "Perseroan Terbatas — 1 Pemegang Saham",
    price: "Rp2.500.000",
    time: "5–10 hari kerja",
    bestFor: "Pemilik usaha yang sudah tumbuh, butuh perlindungan aset pribadi & kredibilitas tinggi",
    pros: [
      "Tanggung jawab terbatas — aset pribadi terlindungi hukum",
      "Badan hukum penuh dengan 1 pemegang saham",
      "Kredibilitas tertinggi untuk bank & investor",
      "Bisa rekrut karyawan & ekspansi multi-cabang",
      "Fondasi kuat untuk M&A dan pendanaan",
    ],
    cons: [
      "Biaya & proses lebih lama dari PO",
      "Ada kewajiban pelaporan badan hukum",
    ],
    waMsg:
      "Halo Gunara Consultant! Setelah membandingkan, saya memilih *Pendirian PT Perseorangan (Rp2.500.000)*. Mohon dibantu prosesnya. Terima kasih!",
  },
  pt: {
    name: "PT / CV",
    tagline: "Dengan Mitra / Kolega",
    price: "Rp1.500.000",
    time: "3–10 hari kerja",
    bestFor: "Bisnis keluarga atau kongsi dengan 2 orang atau lebih yang berbagi kepemilikan",
    pros: [
      "Struktur ideal untuk bisnis bersama",
      "CV: modal fleksibel, biaya lebih ringan",
      "PT: paling kredibel untuk investor & proyek besar",
      "Pembagian keuntungan jelas di akta",
    ],
    cons: [
      "Perlu akta notaris (tambahan biaya)",
      "Butuh kesepakatan antar pemegang bagian/saham",
    ],
    waMsg:
      "Halo Gunara Consultant! Saya tertarik mendirikan *PT/CV bersama mitra*. Mohon konsultasi untuk pilihan terbaik. Terima kasih!",
  },
};

const KEYS: EntityKey[] = ["po", "pt-perseorangan", "pt"];

export function Comparison() {
  const [active, setActive] = useState<EntityKey>("po");
  const data = ENTITIES[active];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora right-[-10%] top-[30%] h-[380px] w-[380px] bg-[#b8860b]/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
            PILIH YANG TEPAT
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#EDE6D6] md:text-5xl">
            Bentuk Badan Usaha Mana yang{" "}
            <span className="text-gold-grad italic">Paling Menguntungkan</span> Anda?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#EDE6D6]/60">
            Salah pilih bentuk badan usaha bisa merugikan waktu dan biaya jauh lebih besar.
            Klik kartu di bawah — atau konsultasikan gratis dengan pakar kami.
          </p>
        </Reveal>

        {/* tab buttons */}
        <Reveal delay={120} className="mt-10">
          <div
            role="tablist"
            aria-label="Pilihan bentuk badan usaha"
            className="glass mx-auto grid max-w-2xl grid-cols-3 gap-1.5 rounded-2xl p-1.5"
          >
            {KEYS.map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={`rounded-xl px-2 py-3 text-center text-xs font-bold transition-all duration-400 sm:text-sm ${
                  active === key
                    ? "bg-gradient-to-br from-[#d4af37] to-[#a37e1e] text-[#171203] shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)]"
                    : "text-[#EDE6D6]/55 hover:text-[#f1de9b]"
                }`}
              >
                {ENTITIES[key].name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* active panel */}
        <Reveal delay={200} variant="scale" className="mt-8">
          <div
            key={active}
            className="testi-enter glass-strong gold-hairline grid gap-10 rounded-3xl p-7 md:grid-cols-[1fr_1.1fr] md:p-10"
          >
            <div>
              <p className="text-[11px] font-bold tracking-[0.26em] text-[#d4af37]">
                {data.tagline.toUpperCase()}
              </p>
              <h3 className="font-serif-lux mt-3 text-3xl font-bold text-[#EDE6D6] md:text-4xl">
                {data.name}
              </h3>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-serif-lux text-gold-grad text-4xl font-bold md:text-5xl">
                  {data.price}
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="count-box rounded-xl px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#EDE6D6]/45">
                    Estimasi
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#EDE6D6]">{data.time}</p>
                </div>
                <div className="count-box rounded-xl px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#EDE6D6]/45">
                    Cocok untuk
                  </p>
                  <p className="mt-1 text-sm font-bold leading-snug text-[#EDE6D6]">
                    {active === "po" ? "UMKM & Solo" : active === "pt-perseorangan" ? "Solo Skala Besar" : "Bisnis Bersama"}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#EDE6D6]/65">
                {data.bestFor}
              </p>
              <a
                href={waLink(data.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-8 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold"
              >
                Pilih {data.name}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {data.pros.map((pro) => (
                <div
                  key={pro}
                  className="flex items-start gap-3 rounded-xl border border-[#25D366]/20 bg-[#25D366]/[0.05] px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20">
                    <Check className="h-3 w-3 text-[#4ade80]" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#EDE6D6]/85">{pro}</span>
                </div>
              ))}
              {data.cons.map((con) => (
                <div
                  key={con}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/8">
                    <X className="h-3 w-3 text-[#EDE6D6]/45" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#EDE6D6]/50">{con}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
