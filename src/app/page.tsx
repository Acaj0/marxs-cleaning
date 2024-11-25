
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import SiteHeader from "@/components/site-header"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  )
}

