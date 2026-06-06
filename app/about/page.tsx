import type { Metadata } from "next"
import { ZoomableImage } from "@/components/zoomable-image"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { ShieldCheck, Clock, Award, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Master Billiards is a family-run pool table service company serving NH and MA with craftsmanship, care, and decades of combined experience.",
  alternates: { canonical: "/about" },
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

        <section className="bg-card border-y border-border">
          <div className="px-4 py-10 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:py-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Then & Now photo pairing */}
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <div className="relative aspect-[4/5] w-[78%] ml-auto overflow-hidden rounded-xl border border-border shadow-sm">
                  <ZoomableImage
                    src="/images/hero-team.png"
                    alt="Kendra Morasse today, working in the Master Billiards shop"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Today
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-[48%] rounded-xl border-4 border-card bg-card shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <ZoomableImage
                      src="/images/kendra-young.png"
                      alt="Kendra Morasse at age 12, learning the trade in the family shop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="block py-1.5 text-center text-xs font-semibold text-muted-foreground">
                    Age 12
                  </span>
                </div>
              </div>

              {/* Story */}
              <div className="mt-8 lg:mt-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Second Generation
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground text-balance lg:text-4xl">
                  Meet Kendra Morasse
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-base text-muted-foreground leading-relaxed lg:text-lg">
                  <p>
                    Kendra is the daughter of founder Joe Morasse — and she&apos;s been around pool tables
                    her entire life. She started working on them at just 12 years old, learning the craft
                    one slate, rail, and cloth job at a time.
                  </p>
                  <p>
                    More than a decade later, that hands-on apprenticeship has made her one of the most
                    skilled people in the shop. The same passion that had her stretching cloth as a kid still
                    drives the care she brings to every table today — backed by industry-leading certifications.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
                    <Award className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm font-semibold text-foreground leading-tight">
                      Diamond&trade; Certified
                      <span className="block text-xs font-normal text-muted-foreground">Table Mechanic</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
                    <Award className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm font-semibold text-foreground leading-tight">
                      Predator&reg; Certified
                      <span className="block text-xs font-normal text-muted-foreground">Table Mechanic</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-8 pb-8 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:pt-16 lg:pb-20">
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
