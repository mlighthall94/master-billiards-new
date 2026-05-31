import type { Metadata } from "next"
import Image from "next/image"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { ShieldCheck, Clock, Award, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Master Billiards",
  description:
    "Master Billiards is a family-run pool table service company serving NH and MA with craftsmanship, care, and decades of combined experience.",
}

const values = [
  {
    icon: Award,
    title: "Craftsmanship",
    description: "Every job is done with precision and pride. We treat your table like our own.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On time, every time. We respect your schedule and finish what we start.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Licensed and insured, so your home and table are protected on every job.",
  },
  {
    icon: Heart,
    title: "Local & Trusted",
    description: "A family-run business proudly serving our New England neighbors.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <div className="relative h-56 w-full lg:h-96">
          <Image
            src="/images/hero-team.png"
            alt="The Master Billiards team"
            fill
            className="object-cover"
            priority
          />
        </div>

        <PageBanner
          title="About Master Billiards"
          subtitle="Family-run pool table specialists serving NH and MA with care and craftsmanship."
        />

        <section className="px-4 py-8 max-w-lg mx-auto w-full lg:max-w-3xl lg:py-16">
          <h2 className="text-xl font-bold text-foreground lg:text-3xl">Our Story</h2>
          <div className="mt-3 flex flex-col gap-4 text-base text-muted-foreground leading-relaxed lg:mt-5 lg:text-lg lg:gap-5">
            <p>
              Master Billiards started with a simple belief: a pool table is more than furniture — it&apos;s
              where families and friends make memories. That&apos;s why we treat every table with the
              attention and respect it deserves.
            </p>
            <p>
              Based in Plaistow, New Hampshire, we&apos;ve spent years perfecting the craft of pool table
              moving, recovery, and repair. From precision slate leveling to tournament-grade cloth
              installation, we bring the same meticulous standards to every job — big or small.
            </p>
            <p>
              When you work with us, you&apos;re working with people who genuinely care about getting it
              right. No shortcuts, no surprises — just honest work and tables that play beautifully.
            </p>
          </div>
        </section>

        <section className="px-4 pb-8 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:pb-20">
          <h2 className="text-xl font-bold text-foreground mb-4 lg:text-3xl lg:text-center lg:mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="border border-border rounded-lg p-4 lg:p-8 lg:bg-card">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 lg:h-14 lg:w-14 lg:mb-5">
                    <Icon className="h-5 w-5 text-primary lg:h-7 lg:w-7" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground lg:text-lg">{value.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed lg:text-sm lg:mt-2">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
