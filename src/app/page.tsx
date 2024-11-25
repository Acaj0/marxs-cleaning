import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import SiteHeader from "@/components/site-header";
import { ServicesSection } from "@/components/services-section";
import { ReviewsSection } from "@/components/reviews-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-clip">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ReviewsSection />
        <ServicesSection />
      </main>
    </div>
  );
}
