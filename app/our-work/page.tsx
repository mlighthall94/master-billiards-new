import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin } from "lucide-react"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Our Work | Master Billiards",
  description:
    "Explore pool rooms and billiards halls across New Hampshire and Massachusetts that Master Billiards has installed, recovered, and maintained.",
}

export default function OurWorkPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Our Work"
          subtitle="Pool rooms and billiards halls across NH and MA that we've installed, recovered, and maintained."
        />

        <section className="px-4 py-6 max-w-lg mx-auto w-full">
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/our-work/${project.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-border bg-background">
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain p-1"
                      sizes="64px"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold text-foreground leading-tight">
                      {project.title}
                    </h2>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2 leading-snug">
                      {project.summary}
                    </p>
                  </div>

                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CtaBanner
          title="Want your room featured here?"
          subtitle="Get a free quote and let's get your tables playing their best."
        />
      </main>
      <Footer />
    </div>
  )
}
