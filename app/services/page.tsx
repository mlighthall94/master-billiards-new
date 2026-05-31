import type { Metadata } from "next"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { ComparisonSlider } from "@/components/comparison-slider"
import { Truck, Scissors, Wrench, Ruler, Sparkles, PackageCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Master Billiards",
  description:
    "Professional pool table moving, recovery, re-felting, repairs, leveling, and assembly serving NH and MA.",
}

const services = [
  {
    icon: Truck,
    title: "Pool Table Moving",
    description:
      "Full disassembly, careful transport, and precision reassembly. Whether you're moving across town or across the region, we handle your table with care.",
  },
  {
    icon: Scissors,
    title: "Re-felting & Recovery",
    description:
      "Premium Simonis and championship-grade cloth in dozens of colors. Tournament-quality installation for a true, fast playing surface.",
  },
  {
    icon: Wrench,
    title: "Repairs & Restoration",
    description:
      "Rail replacement, pocket repair, cushion replacement, and frame restoration to bring older tables back to life.",
  },
  {
    icon: Ruler,
    title: "Leveling & Setup",
    description:
      "Precision slate leveling for a perfectly flat, accurate playing surface. We don't leave until it plays right.",
  },
  {
    icon: PackageCheck,
    title: "Assembly & Installation",
    description:
      "New table delivery and assembly. We assemble, level, and felt your new table so it's ready to play.",
  },
  {
    icon: Sparkles,
    title: "Maintenance & Cleaning",
    description:
      "Cloth brushing, rail cleaning, and tune-ups to keep your table looking and playing like new for years.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Our Services"
          subtitle="Expert pool table care from moving to recovery, repairs, and everything in between."
        />

        <section className="px-4 py-8 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="flex gap-4 lg:flex-col lg:gap-4 lg:border lg:border-border lg:rounded-xl lg:p-8 lg:bg-card">
                  <div className="flex-shrink-0">
                    <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center lg:h-14 lg:w-14">
                      <Icon className="h-5 w-5 text-primary lg:h-7 lg:w-7" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-foreground lg:text-xl">{service.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed lg:text-base lg:mt-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <ComparisonSlider />

        <CtaBanner
          title="Need a service quote?"
          subtitle="Tell us about your table and we'll send a free estimate."
        />
      </main>
      <Footer />
    </div>
  )
}
