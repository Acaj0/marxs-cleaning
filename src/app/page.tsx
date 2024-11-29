import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import SiteHeader from "@/components/site-header";
import { ServicesSection } from "@/components/services-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import Footer from "@/components/Footer";
import FloatingPromo from "@/components/floating-promo";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-clip">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ReviewsSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
