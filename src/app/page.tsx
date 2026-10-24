import { Preloader } from "@/components/landing/preloader";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { InstitutionMarquee } from "@/components/landing/marquee";
import { Advantages } from "@/components/landing/advantages";
import { Comparison } from "@/components/landing/comparison";
import { Process } from "@/components/landing/process";
import { DocRequirements } from "@/components/landing/doc-requirements";
import { Pricing } from "@/components/landing/pricing";
import { RoiCalculator } from "@/components/landing/roi-calculator";
import { Testimonials } from "@/components/landing/testimonials";
import { Payment } from "@/components/landing/payment";
import { Faq } from "@/components/landing/faq";
import { RegistrationForm } from "@/components/landing/registration-form";
import { FinalCta, Footer } from "@/components/landing/footer-cta";
import { FloatingWhatsApp, CursorGlow } from "@/components/landing/floating";
import { LiveFeed } from "@/components/landing/live-feed";
import { StickyCta } from "@/components/landing/sticky-cta";
import { FAQS, PRICING_TIERS } from "@/lib/landing-constants";

/* V10 — structured data: Organization + Product offers + FAQ */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Gunara Consultant",
      url: "https://gunara.web.id",
      email: "halo@gunaraconsultant.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II",
        addressLocality: "Tasikmalaya",
        addressRegion: "Jawa Barat",
        postalCode: "46115",
        addressCountry: "ID",
      },
    },
    {
      "@type": "Product",
      name: "Jasa Pendirian PT Perseorangan — Gunara Consultant",
      description:
        "Pendirian PT Perseorangan (Perseroan Perseorangan) sah dalam 1 hari kerja: NIB, Sertifikat Pendaftaran, Akta Perseorangan. Cukup KTP + NPWP + alamat, tanpa notaris.",
      brand: { "@type": "Brand", name: "Gunara Consultant" },
      offers: PRICING_TIERS.map((t) => ({
        "@type": "Offer",
        name: t.name,
        price: Number(t.price.replace(/\./g, "")),
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1200",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#05060A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grain-overlay" aria-hidden="true" />
      <Preloader />
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InstitutionMarquee />
        <Advantages />
        <Comparison />
        <Process />
        <DocRequirements />
        <Pricing />
        <RoiCalculator />
        <Testimonials />
        <Payment />
        <Faq />
        <RegistrationForm />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <LiveFeed />
      <StickyCta />
    </div>
  );
}
