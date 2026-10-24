"use client";

import { useState } from "react";
import { Send, ShieldCheck, Sparkles, BadgeCheck, FileUp, Crown } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink, WA_DISPLAY, PRICING_TIERS } from "@/lib/landing-constants";
import { toast } from "@/hooks/use-toast";

const BIZ_OPTIONS = [
  "Kuliner / F&B",
  "Fashion / Konveksi",
  "Toko Online / Dropship",
  "Jasa & Freelance",
  "Konstruksi / Kontraktor",
  "Beauty / Salon",
  "Pertanian / Perkebunan",
  "Lainnya",
];

export function RegistrationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pkgId, setPkgId] = useState<string>("legalitas-website");
  const [biz, setBiz] = useState(BIZ_OPTIONS[0]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const selectedTier =
    PRICING_TIERS.find((t) => t.id === pkgId) ?? PRICING_TIERS[1];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Mohon isi nama lengkap Anda.");
      return;
    }
    if (!/^[0-9+\-\s()]{9,17}$/.test(phone.trim())) {
      setError("Mohon isi nomor WhatsApp yang valid (9–17 digit).");
      return;
    }
    setError("");

    const msg = [
      "Halo Gunara Consultant! Saya mendaftar via Landing Page PT Perseorangan:",
      "",
      `• Nama: ${name.trim()}`,
      `• No. WhatsApp: ${phone.trim()}`,
      `• Paket yang dipilih: ${selectedTier.name} — Rp${selectedTier.price}`,
      `• Bidang usaha: ${biz}`,
      note.trim() ? `• Catatan: ${note.trim()}` : "",
      "",
      "Saya siap transfer ke BCA dan segera kirim 3 dokumen (KTP, NPWP, alamat usaha). Mohon diproses hari ini supaya PT saya jadi dalam 1 hari!",
    ]
      .filter(Boolean)
      .join("\n");

    toast({
      title: "Pendaftaran siap dikirim",
      description: "Anda akan diarahkan ke WhatsApp resmi kami.",
    });

    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-xl border border-[#7C3AED]/20 bg-[#FBFAFF]/60 px-4 py-3.5 text-sm text-[#241A4F] placeholder:text-[#241A4F]/30 outline-none transition-all duration-300 focus:border-[#7C3AED]/60 focus:bg-[#FBFAFF] focus:shadow-[0_0_0_3px_rgba(124, 58, 237,0.12)]";

  return (
    <section id="daftar" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-lux opacity-50" />
      <div className="aurora left-[10%] top-[20%] h-[380px] w-[420px] bg-[#7C3AED]/12" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left copy */}
          <Reveal variant="left">
            <p className="text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
              FORMULIR PENDAFTARAN KILAT
            </p>
            <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#241A4F] md:text-5xl">
              Daftar Sekarang,{" "}
              <span className="text-gold-grad italic">PT Anda Sah Besok</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#241A4F]/60">
              Isi formulir 30 detik — data Anda tersusun rapi dan langsung terkirim ke tim
              kami via WhatsApp. Lalu transfer dan kirim 3 dokumen: proses 1 hari langsung
              dimulai.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Dijawab langsung oleh tim pakar, bukan bot",
                "Dokumen KTP & NPWP Anda dijaga standar ISO 9001:2015",
                "Tanpa biaya apa pun sebelum Anda setuju dengan kontrak",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#241A4F]/75">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10">
                    <BadgeCheck className="h-4 w-4 text-[#6D28D9]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="glass gold-hairline mt-9 inline-flex items-center gap-3 rounded-2xl px-5 py-4">
              <FileUp className="h-6 w-6 shrink-0 text-[#25D366]" />
              <span className="text-xs leading-relaxed text-[#241A4F]/65">
                Setelah kirim form:{" "}
                <span className="font-semibold text-[#6D28D9]">
                  transfer ke BCA + foto KTP, NPWP, alamat
                </span>{" "}
                — dikirim ke WhatsApp {WA_DISPLAY}
              </span>
            </div>
          </Reveal>

          {/* form card */}
          <Reveal variant="right" delay={120}>
            <form
              onSubmit={submit}
              noValidate
              className="glass-strong gold-hairline glow-gold relative rounded-3xl p-7 md:p-9"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#6D28D9] to-transparent" />
              <div className="mb-7 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#7C3AED]" />
                <h3 className="font-serif-lux text-xl font-semibold text-[#241A4F]">
                  Kirim Permintaan Pendaftaran
                </h3>
              </div>

              <div className="grid gap-4.5">
                <div>
                  <label htmlFor="reg-name" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#241A4F]/70">
                    Nama Lengkap (sesuai KTP) *
                  </label>
                  <input
                    id="reg-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="cth. Ahmad Setiawan"
                    className={inputCls}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="reg-phone" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#241A4F]/70">
                    Nomor WhatsApp *
                  </label>
                  <input
                    id="reg-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="cth. 0812 3456 7890"
                    className={inputCls}
                    autoComplete="tel"
                  />
                </div>

                <fieldset>
                  <legend className="mb-2 block text-xs font-semibold tracking-wide text-[#241A4F]/70">
                    Paket yang Dipilih
                  </legend>
                  <div className="grid gap-2.5 sm:grid-cols-3">
                    {PRICING_TIERS.map((t) => {
                      const active = pkgId === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setPkgId(t.id)}
                          className={`relative rounded-xl border px-3 py-3 text-left transition-all duration-300 ${
                            active
                              ? "border-[#7C3AED]/70 bg-gradient-to-br from-[#7C3AED]/18 to-transparent shadow-[0_10px_30px_-12px_rgba(124, 58, 237,0.5)]"
                              : "border-[#7C3AED]/15 bg-[#FBFAFF]/50 hover:border-[#7C3AED]/40"
                          }`}
                        >
                          {t.badge && (
                            <span className="absolute -top-2 right-2 rounded-full bg-gradient-to-r from-[#b8342f] to-[#e0483f] px-1.5 py-0.5 text-[8px] font-black tracking-wider text-white">
                              {t.badge === "PALING LARIS" ? "TERLARIS" : t.badge}
                            </span>
                          )}
                          <span
                            className={`font-serif-lux block text-[13px] font-bold leading-tight ${
                              active ? "text-[#6D28D9]" : "text-[#241A4F]/80"
                            }`}
                          >
                            {t.id === "sultan-20x" ? "Sultan 20X" : t.id === "legalitas-website" ? "Legalitas + Web" : "Legalitas"}
                          </span>
                          <span className="mt-1 flex items-center gap-1">
                            <span className={`text-sm font-bold ${active ? "text-gold-grad" : "text-[#241A4F]/70"}`}>
                              Rp{t.price}
                            </span>
                            {active && <Crown className="h-3 w-3 text-[#7C3AED]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="grid gap-4.5 sm:grid-cols-1">
                  <div>
                    <label htmlFor="reg-biz" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#241A4F]/70">
                      Bidang Usaha
                    </label>
                    <select
                      id="reg-biz"
                      value={biz}
                      onChange={(e) => setBiz(e.target.value)}
                      className={`${inputCls} appearance-none`}
                    >
                      {BIZ_OPTIONS.map((o) => (
                        <option key={o} value={o} className="bg-[#F3F0FE]">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="reg-note" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#241A4F]/70">
                    Nama PT yang Diinginkan / Catatan (opsional)
                  </label>
                  <textarea
                    id="reg-note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    placeholder="cth. PT Ahmad Sejahtera Abadi — untuk usaha katering…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {error && (
                  <p role="alert" className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-2.5 text-xs font-medium text-red-300">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-gold mt-1 flex items-center justify-center gap-2.5 rounded-full py-4 text-[15px] font-bold"
                >
                  <Send className="h-4.5 w-4.5" />
                  Daftar & Kirim ke WhatsApp Sekarang
                </button>

                <p className="text-center text-[11px] leading-relaxed text-[#241A4F]/40">
                  Dengan mengirim, Anda diarahkan ke WhatsApp resmi kami ({WA_DISPLAY}).
                  Pembayaran hanya ke rekening resmi BCA a.n. Gugun Gunara — proses 1 hari
                  dimulai setelah transfer & dokumen lengkap.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
