import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin } from "lucide-react"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore pool rooms and billiards halls across New Hampshire and Massachusetts that Master Billiards has installed, recovered, and maintained.",
  alternates: { canonical: "/our-work" },
}

const stateGroups = [
  { code: "NH", label: "New Hampshire" },
  { code: "MA", label: "Massachusetts" },
] as const

export default function OurWorkPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <BreadcrumbJsonLd trail={[{ name: "Our Work", path: "/our-work" }]} />
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Our Work"
          subtitle="Pool rooms and billiards halls across NH and MA that we've installed, recovered, and maintained."
        />

        <section className="px-4 py-6 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:py-12">
          <div className="flex flex-col gap-10 lg:gap-14">
            {stateGroups.map((group) => {
              const groupProjects = projects.filter((project) =>
                project.location.trim().endsWith(group.code),
              )
              if (groupProjects.length === 0) return null

              return (
                <div key={group.code}>
                  <div className="flex items-baseline gap-2 mb-4 lg:mb-6">
                    <h2 className="text-lg font-bold text-foreground lg:text-2xl">{group.label}</h2>
                    <span className="text-sm font-medium text-muted-foreground">{group.code}</span>
                  </div>

                  <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
                    {groupProjects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          href={`/our-work/${project.slug}`}
                          className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30 lg:h-full lg:p-6"
                        >
                          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-border bg-background">
                            <Image
                              src={project.cover || "/placeholder.svg"}
                              alt={`${project.title}`}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground leading-tight">
                              {project.title}
                            </h3>
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
                </div>
              )
            })}
          </div>
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
