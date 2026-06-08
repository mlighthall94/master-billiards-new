import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Phone, Check, Star, ShieldCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LandingLeadForm } from "@/components/landing-lead-form"
import { landingPages, getLandingPage, PHONE_DISPLAY, PHONE_HREF } from "@/lib/landing-content"

interface PageProps {
  params: Promise<{ service: string }>
}

export function generateStaticParams() {
  return landingPages.map((p) => ({ service: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params
  const page = getLandingPage(service)
  if (!page) return {}
  return {
    title: page.service,
    description: page.subhead,
    // Paid-traffic landing pages should not compete in organic search.
    robots: { index: false, follow: false },
    alternates: { canonical: `/lp/${page.slug}` },
  }
}

export default async function LandingPage({ params }: PageProps) {
  const { service } = await params
  const page = getLandingPage(service)
  if (!page) notFound()

  const Icon = page.icon

  return (
    <main className="min-h-dvh bg-background">
      {/* Top bar — logo + click-to-call, no site navigation */}
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-foreground tracking-tight">Master Billiards</span>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src={page.image || "/placeholder.svg"}
            alt={page.imageAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-10 lg:py-16 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          {/* Pitch */}
          <div className="text-background">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              <Icon className="h-3.5 w-3.5" />
              {page.eyebrow}
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-balance lg:text-4xl">
              {page.headline}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-background/90 text-pretty">
              {page.subhead}
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {page.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success">
                    <Check className="h-3.5 w-3.5 text-success-foreground" />
                  </span>
                  <span className="text-sm leading-relaxed text-background/95">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 hidden lg:flex items-center gap-4 text-sm text-background/90">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" /> Fully insured
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 text-accent" /> 5.0 rated
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" /> All of New England
              </span>
            </div>
          </div>

          {/* Form card */}
          <div className="mt-6 lg:mt-0">
            <div className="rounded-2xl bg-card p-5 shadow-2xl lg:p-6">
              <LandingLeadForm
                service={page.service}
                title={page.formTitle}
                subtitle={page.formSubtitle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-b border-border bg-secondary">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-3 gap-3">
          {page.highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="text-xl font-bold text-foreground lg:text-3xl">{h.stat}</div>
              <div className="text-xs text-muted-foreground mt-1 leading-tight lg:text-sm">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reassurance */}
      <section className="max-w-3xl mx-auto px-4 py-10 lg:py-14">
        <h2 className="text-xl font-bold text-foreground text-center text-balance lg:text-2xl">
          What You Can Count On
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {page.reassurance.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary">
        <div className="max-w-3xl mx-auto px-4 py-10 text-center lg:py-14">
          <h2 className="text-2xl font-bold text-primary-foreground text-balance">
            Ready to get started?
          </h2>
          <p className="mt-2 text-primary-foreground/80 leading-relaxed">
            Call now for a fast, free quote — or scroll up to send your details.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-5 py-6 px-8 text-base font-semibold">
            <a href={PHONE_HREF}>
              <Phone className="h-5 w-5 mr-2" />
              {PHONE_DISPLAY}
            </a>
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Mon–Fri 8am–5pm · Family-run · Fully insured
          </p>
        </div>
      </section>

      {/* Sticky mobile call bar */}
      <a
        href={PHONE_HREF}
        className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-center gap-2 bg-accent py-4 text-accent-foreground font-semibold lg:hidden"
      >
        <Phone className="h-5 w-5" />
        Call {PHONE_DISPLAY}
      </a>
      {/* Spacer so content isn't hidden behind the sticky bar on mobile */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </main>
  )
}
