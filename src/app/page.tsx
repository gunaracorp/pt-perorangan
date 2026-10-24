import { Preloader } from "@/components/landing/preloader";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { InstitutionMarquee } from "@/components/landing/marquee";
import { Advantages } from "@/components/landing/advantages";
import { Comparison } from "@/components/landing/comparison";
import { Process } from "@/components/landing/process";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { Payment } from "@/components/landing/payment";
import { Faq } from "@/components/landing/faq";
import { RegistrationForm } from "@/components/landing/registration-form";
import { FinalCta, Footer } from "@/components/landing/footer-cta";
import { FloatingWhatsApp, CursorGlow } from "@/components/landing/floating";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#05060A]">
      <Preloader />
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InstitutionMarquee />
        <Advantages />
        <Comparison />
        <Process />
        <Pricing />
        <Testimonials />
        <Payment />
        <Faq />
        <RegistrationForm />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
