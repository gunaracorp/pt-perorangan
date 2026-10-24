import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pendirian Badan Usaha Perseorangan Resmi — 2–4 Hari Kerja | Gunara Consultant",
  description:
    "Legalitas usaha perseorangan 100% resmi tanpa notaris. NIB, sertifikat, NPWP — selesai 2–4 hari kerja mulai Rp750.000. Tersertifikasi ISO 9001:2015, terdaftar Kemenkumham RI, melayani 38 provinsi Indonesia.",
  keywords: [
    "badan usaha perseorangan",
    "pendirian PO",
    "UPTA",
    "NIB OSS RBA",
    "legalitas UMKM",
    "izin usaha perseorangan",
    "Gunara Consultant",
    "pendirian PT perseorangan",
    "konultan perizinan",
  ],
  authors: [{ name: "Gunara Consultant" }],
  openGraph: {
    title: "Badan Usaha Perseorangan Resmi dalam 2–4 Hari | Gunara Consultant",
    description:
      "Tanpa notaris. Mulai Rp750.000. ISO 9001:2015 • Kemenkumham RI • 38 Provinsi. Konsultasi gratis via WhatsApp.",
    siteName: "Gunara Consultant",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badan Usaha Perseorangan Resmi — Gunara Consultant",
    description:
      "Legalitas usaha Anda selesai 2–4 hari kerja, mulai Rp750.000. Standar kelas dunia ISO 9001:2015.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${manrope.variable} antialiased bg-[#05060A] text-[#EDE6D6]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
