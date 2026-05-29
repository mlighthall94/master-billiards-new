import { MobileNavbar } from "@/components/mobile-navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Brands } from "@/components/brands"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <Brands />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
