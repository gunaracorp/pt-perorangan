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
  title: "Pendirian PT Perseorangan — 1 Hari Jadi, Mulai Rp750rb | Gunara Consultant",
  description:
    "PT Perseorangan sah dalam 1 hari kerja: cukup KTP + NPWP + alamat, tanpa notaris. NIB, Sertifikat Pendaftaran, dan Akta Perseorangan diurus penuh lewat jalur resmi OSS-RBA & Kemenkumham RI. Harga khusus mulai Rp750.000 dari normal Rp2.000.000. Tersertifikasi ISO 9001:2015, melayani 38 provinsi.",
  keywords: [
    "pendirian PT perseorangan",
    "perseroan perseorangan",
    "PT perorangan 1 hari",
    "NIB PT perseorangan",
    "sertifikat pendaftaran PT",
    "akta perseorangan",
    "PT tanpa notaris",
    "badan hukum UMKM",
    "Gunara Consultant",
    "jasa pendirian PT murah",
  ],
  authors: [{ name: "Gunara Consultant" }],
  openGraph: {
    title: "PT Perseorangan Sah dalam 1 Hari Kerja — Mulai Rp750rb | Gunara Consultant",
    description:
      "Cukup KTP + NPWP + alamat, tanpa notaris. NIB + Sertifikat Pendaftaran + Akta Perseorangan terbit via jalur resmi OSS-RBA & Kemenkumham RI. Konsultasi gratis via WhatsApp.",
    siteName: "Gunara Consultant",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Perseorangan Sah dalam 1 Hari — Gunara Consultant",
    description:
      "Cukup KTP + NPWP + alamat. Mulai Rp750rb dari normal Rp2jt. Standar kelas dunia ISO 9001:2015.",
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
