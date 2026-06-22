import type { Metadata } from "next"
import {
  Phone,
  Check,
  Star,
  ShieldCheck,
  MapPin,
  Truck,
  Layers,
  Wrench,
  Package,
  Briefcase,
  Boxes,
  Gamepad2,
  Wine,
  Sofa,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNavbar } from "@/components/mobile-navbar"
import { MovingQuoteForm } from "@/components/moving-quote-form"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/landing-content"

export const metadata: Metadata = {
  title: "Pool Table Moving",
  description:
    "Professional, fully-insured pool table moving across New England. Enclosed trailer, custom transport gear, and a crew that moves tables every day.",
  // Paid-traffic landing page — keep it out of organic search.
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/pool-table-moving" },
}

const benefits = [
  "Complete disassembly and professional reassembly",
  "Slate handled, transported, and re-leveled the right way",
  "Fully insured — your home and table are protected",
  "Local crew that travels throughout New England",
]

const equipment = [
  {
    icon: Truck,
    title: "18ft Enclosed Trailer",
    body: "Your table travels protected from weather and road debris — never strapped to an open bed.",
  },
  {
    icon: Layers,
    title: "Up to 5 Tables at Once",
    body: "Bulk moves for homes, dealers, and game rooms handled in a single trip.",
  },
  {
    icon: MapPin,
    title: "We Travel",
    body: "Local or long-distance — we go where the job is, throughout New England and beyond.",
  },
  {
    icon: Boxes,
    title: "Custom Transport Gear",
    body: "Specialized dollies and one-piece slate carts move heavy slate safely, without flexing or cracking.",
  },
  {
    icon: Package,
    title: "Blankets & Moving Wrap",
    body: "Professional moving blankets and plastic wrap shield every rail, leg, and finished surface.",
  },
  {
    icon: Wrench,
    title: "Proper Fastening Tools",
    body: "The right tools and tie-downs to secure every component for a damage-free ride.",
  },
  {
    icon: Briefcase,
    title: "Hardware Bags & Cases",
    body: "Dedicated bags and padded cases keep bolts, pockets, and delicate items organized and safe.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    body: "Complete coverage and peace of mind from pickup to final setup.",
  },
]

const alsoMove = [
  { icon: Sofa, label: "Game Rooms" },
  { icon: Wine, label: "Bars" },
  { icon: Layers, label: "Shuffleboard Tables" },
  { icon: Gamepad2, label: "Arcade Games" },
]

export default function PoolTableMovingLanding() {
  return (
    <main className="min-h-dvh bg-background">
      <MobileNavbar title="Pool Table Moving" backHref="/" />

      {/* Hero — solid dark band to match the site */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:px-8 lg:py-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Pitch */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-primary-foreground/70 ml-1">5.0 on Google</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-balance lg:text-5xl lg:leading-[1.05]">
              Move Your Pool Table Without the Damage Risk
            </h1>
            <p className="mt-3 text-base leading-relaxed text-primary-foreground/80 text-pretty lg:text-xl lg:mt-4 lg:max-w-md">
              Full disassembly, careful enclosed-trailer transport, and precision reassembly by an insured crew
              that moves tables every single day.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Check className="h-3.5 w-3.5 text-accent-foreground" />
                  </span>
                  <span className="text-sm leading-relaxed text-primary-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form card */}
          <div className="mt-8 lg:mt-0">
            <div className="rounded-xl border border-border bg-card p-5 shadow-xl lg:p-6">
              <MovingQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-b border-border bg-secondary">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-3 gap-3 lg:px-8">
          <div className="text-center">
            <div className="text-xl font-bold text-foreground lg:text-3xl">1,000+</div>
            <div className="text-xs text-muted-foreground mt-1 leading-tight lg:text-sm">Tables moved</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-foreground lg:text-3xl">Up to 5</div>
            <div className="text-xs text-muted-foreground mt-1 leading-tight lg:text-sm">Tables per trip</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-foreground lg:text-3xl">5.0</div>
            <div className="text-xs text-muted-foreground mt-1 leading-tight lg:text-sm">Star-rated service</div>
          </div>
        </div>
      </section>

      {/* Equipment & capabilities */}
      <section className="max-w-6xl mx-auto px-4 py-10 lg:px-8 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-foreground text-balance lg:text-4xl">
            The Right Equipment for a Damage-Free Move
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed lg:text-lg lg:mt-4">
            Moving a pool table is heavy, precise work. We show up with purpose-built gear to protect your table,
            your home, and your investment from start to finish.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-12 lg:gap-8">
          {equipment.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5 lg:p-6">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center lg:h-12 lg:w-12">
                  <Icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
                </div>
                <h3 className="mt-3 font-semibold text-foreground leading-snug">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* We also move */}
      <section className="bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:px-8 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-foreground text-balance lg:text-4xl">
              We Move More Than Pool Tables
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed lg:text-lg lg:mt-4">
              Relocating a whole game room? We handle the big, awkward, and delicate pieces other movers
              won&apos;t touch.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-12 lg:gap-8">
            {alsoMove.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 py-10 text-center lg:py-20">
          <h2 className="text-2xl font-bold text-balance lg:text-4xl">Ready to move your table?</h2>
          <p className="mt-2 text-primary-foreground/80 leading-relaxed lg:text-lg lg:mt-4">
            Call now for a fast, free quote — or scroll up to send your details.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 px-8 text-base font-semibold lg:mt-8 lg:px-12"
          >
            <a href={PHONE_HREF}>
              <Phone className="h-5 w-5 mr-2" />
              {PHONE_DISPLAY}
            </a>
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/70">Mon–Fri 8am–5pm · Family-run · Fully insured</p>
        </div>
      </section>
    </main>
  )
}
