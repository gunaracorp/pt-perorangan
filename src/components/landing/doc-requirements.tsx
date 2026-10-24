"use client";

import { CreditCard, ReceiptText, MapPin, ArrowRight, Flame } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink, WA_DEFAULT_MSG } from "@/lib/landing-constants";

const ICONS = {
  id: CreditCard,
  tax: ReceiptText,
  pin: MapPin,
} as const;

export function DocRequirements() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
            SYARAT PALING MUDAH DI INDONESIA
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#241A4F] md:text-5xl">
            <span className="text-gold-grad italic">3 Dokumen.</span> 1 Transfer.{" "}
            <span className="text-gold-grad italic">Besok Sah.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#241A4F]/60">
            Tidak perlu akta notaris. Tidak perlu modal ratusan juta. Tidak perlu keluar
            rumah. Siapkan tiga hal ini, kirim via WhatsApp — tim kami yang mengurus
            sisanya sampai PT Anda sah.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {[
            { key: "id", ...{ title: "KTP", desc: "Foto/scan KTP yang masih berlaku. Satu NIK hanya berhak satu PT Perseorangan — slotnya eksklusif, pakai sebelum kepemilikan Anda terpakai." } },
            { key: "tax", ...{ title: "NPWP", desc: "NPWP pribadi aktif. Belum punya? Kami pandu pembuatan lewat Coretax dalam hitungan menit — gratis, dibimbing sampai jadi." } },
            { key: "pin", ...{ title: "Alamat Usaha", desc: "Alamat rumah atau tempat usaha — boleh alamat rumah sendiri. Tidak perlu gedung kantor, tidak perlu surat keterangan usaha." } },
          ].map((doc, i) => {
            const Icon = ICONS[doc.key as keyof typeof ICONS];
            return (
              <Reveal key={doc.title} delay={i * 120} variant="scale">
                <div className="glass gold-hairline group relative h-full overflow-hidden rounded-2xl p-6 md:p-7">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#7C3AED]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-150" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#7C3AED]/35 bg-gradient-to-br from-[#7C3AED]/20 to-transparent transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      <Icon className="h-7 w-7 text-[#6D28D9]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-[#7C3AED]/80">
                        DOKUMEN {i + 1} DARI 3
                      </p>
                      <h3 className="font-serif-lux text-xl font-bold text-[#241A4F]">
                        {doc.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#241A4F]/60">
                    {doc.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-10">
          <div className="glass-strong gold-hairline glow-gold mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl px-6 py-7 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#b8342f]/40 to-transparent">
                <Flame className="h-6 w-6 text-[#ff9d95]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#241A4F]">
                  Rumus cepat: Transfer + KTP + NPWP + Alamat = PT sah besok
                </p>
                <p className="mt-1 text-xs text-[#241A4F]/55">
                  Semakin cepat dokumen masuk, semakin cepat PT Anda terbit — 1×24 jam.
                </p>
              </div>
            </div>
            <a
              href={waLink(WA_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold"
            >
              Kirim 3 Dokumen Sekarang
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
