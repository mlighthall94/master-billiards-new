import { MobileNavbar } from "@/components/mobile-navbar"
import { Hero } from "@/components/hero"
import { LeadSection } from "@/components/lead-section"
import { ComparisonSlider } from "@/components/comparison-slider"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <Hero />
        <LeadSection />
        <ComparisonSlider />
        <Testimonials />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
