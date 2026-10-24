"use client";

import { useState } from "react";
import { Send, ShieldCheck, Sparkles, BadgeCheck, FileUp } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink, WA_DISPLAY, PRICING_TIERS } from "@/lib/landing-constants";
import { toast } from "@/hooks/use-toast";

const PACKAGE_OPTIONS = PRICING_TIERS.map((t) => `${t.name} — Rp${t.price}`);
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
  const [pkg, setPkg] = useState(PACKAGE_OPTIONS[0]);
  const [biz, setBiz] = useState(BIZ_OPTIONS[0]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

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
      `• Paket yang dipilih: ${pkg}`,
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
    "w-full rounded-xl border border-[#d4af37]/20 bg-[#05060A]/60 px-4 py-3.5 text-sm text-[#EDE6D6] placeholder:text-[#EDE6D6]/30 outline-none transition-all duration-300 focus:border-[#d4af37]/60 focus:bg-[#05060A] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]";

  return (
    <section id="daftar" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-lux opacity-50" />
      <div className="aurora left-[10%] top-[20%] h-[380px] w-[420px] bg-[#d4af37]/12" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left copy */}
          <Reveal variant="left">
            <p className="text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
              FORMULIR PENDAFTARAN KILAT
            </p>
            <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#EDE6D6] md:text-5xl">
              Daftar Sekarang,{" "}
              <span className="text-gold-grad italic">PT Anda Sah Besok</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#EDE6D6]/60">
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
                <li key={item} className="flex items-center gap-3 text-sm text-[#EDE6D6]/75">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10">
                    <BadgeCheck className="h-4 w-4 text-[#f1de9b]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="glass gold-hairline mt-9 inline-flex items-center gap-3 rounded-2xl px-5 py-4">
              <FileUp className="h-6 w-6 shrink-0 text-[#25D366]" />
              <span className="text-xs leading-relaxed text-[#EDE6D6]/65">
                Setelah kirim form:{" "}
                <span className="font-semibold text-[#f1de9b]">
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
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#f1de9b] to-transparent" />
              <div className="mb-7 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#d4af37]" />
                <h3 className="font-serif-lux text-xl font-semibold text-[#EDE6D6]">
                  Kirim Permintaan Pendaftaran
                </h3>
              </div>

              <div className="grid gap-4.5">
                <div>
                  <label htmlFor="reg-name" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#EDE6D6]/70">
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
                  <label htmlFor="reg-phone" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#EDE6D6]/70">
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

                <div className="grid gap-4.5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="reg-pkg" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#EDE6D6]/70">
                      Paket yang Dipilih
                    </label>
                    <select
                      id="reg-pkg"
                      value={pkg}
                      onChange={(e) => setPkg(e.target.value)}
                      className={`${inputCls} appearance-none`}
                    >
                      {PACKAGE_OPTIONS.map((o) => (
                        <option key={o} value={o} className="bg-[#0a0c14]">
                          {o}
                        </option>
                      ))}
                      <option value="Belum tahu, mohon direkomendasikan" className="bg-[#0a0c14]">
                        Belum tahu — mohon rekomendasi
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="reg-biz" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#EDE6D6]/70">
                      Bidang Usaha
                    </label>
                    <select
                      id="reg-biz"
                      value={biz}
                      onChange={(e) => setBiz(e.target.value)}
                      className={`${inputCls} appearance-none`}
                    >
                      {BIZ_OPTIONS.map((o) => (
                        <option key={o} value={o} className="bg-[#0a0c14]">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="reg-note" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#EDE6D6]/70">
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

                <p className="text-center text-[11px] leading-relaxed text-[#EDE6D6]/40">
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
