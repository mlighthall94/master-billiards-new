import { MobileNavbar } from "@/components/mobile-navbar"
import { Hero } from "@/components/hero"
import { LeadSection } from "@/components/lead-section"
import { ComparisonSlider } from "@/components/comparison-slider"

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <Hero />
        <LeadSection />
        <ComparisonSlider />
      </main>
    </div>
  )
}
