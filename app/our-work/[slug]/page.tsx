import type { Metadata } from "next"
import { ZoomableImage } from "@/components/zoomable-image"
import { notFound } from "next/navigation"
import { Check, MapPin } from "lucide-react"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { CtaBanner } from "@/components/cta-banner"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { projects, getProject, getBannerTitle } from "@/lib/projects"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) {
    return { title: "Project Not Found" }
  }
  return pageMetadata({
    title: `${project.title} | Our Work`,
    description: project.summary,
    path: `/our-work/${slug}`,
    type: "article",
  })
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <BreadcrumbJsonLd
        trail={[
          { name: "Our Work", path: "/our-work" },
          { name: project.title, path: `/our-work/${project.slug}` },
        ]}
      />
      <MobileNavbar title={getBannerTitle(project)} backHref="/our-work" />
      <main className="flex-1 w-full">
        {/* Cover image */}
        <div className="relative h-60 w-full lg:h-[420px]">
          <ZoomableImage
            src={project.cover || "/placeholder.svg"}
            alt={`${project.title} project`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title block with logo */}
        <section className="bg-primary text-primary-foreground px-4 py-6 lg:py-10">
          <div className="max-w-lg mx-auto lg:max-w-4xl lg:px-8">
            <div className="min-w-0">
              <h1 className="text-xl font-bold leading-tight text-balance lg:text-4xl">
                {project.title}
              </h1>
              <p className="mt-1 flex items-center gap-1 text-sm text-primary-foreground/80 lg:text-base lg:mt-2">
                <MapPin className="h-4 w-4" />
                {project.location}
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-lg mx-auto w-full px-4 py-6 lg:max-w-4xl lg:px-8 lg:py-12">
          {/* Story */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {project.story.map((paragraph, index) => (
              <p key={index} className="text-base text-foreground/90 leading-relaxed lg:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Scope of work */}
          <div className="mt-8 lg:mt-12">
            <h2 className="text-lg font-semibold text-foreground lg:text-2xl">What we did</h2>
            <ul className="mt-3 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-3 lg:mt-5">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/90 lg:text-base">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="mt-8 lg:mt-12">
              <h2 className="text-lg font-semibold text-foreground lg:text-2xl">From the job</h2>
              <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-4 lg:mt-5">
                {project.gallery.map((item, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg border border-border"
                  >
                    <ZoomableImage
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 512px) 50vw, 256px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video testimonial */}
          {project.testimonial && (
            <div className="mt-8 lg:mt-12">
              <h2 className="text-lg font-semibold text-foreground lg:text-2xl">Hear from the owner</h2>
              <div className="mt-3 lg:mt-5">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.testimonial.youtubeId}`}
                    title={`${project.testimonial.name} testimonial for Master Billiards`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <p className="mt-3 text-sm text-foreground/90 lg:text-base">
                  <span className="font-semibold text-foreground">{project.testimonial.name}</span>
                  {" — "}
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          )}

          {/* About the venue */}
          <div className="mt-8 lg:mt-12">
            <h2 className="text-lg font-semibold text-foreground lg:text-2xl">About the venue</h2>
            <div className="mt-3 lg:mt-5">
              {project.logo ? (
                <div className="relative h-16 w-40">
                  <ZoomableImage
                    src={project.logo}
                    alt={`${project.title} logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              ) : (
                <h3 className="text-xl font-semibold text-foreground lg:text-2xl">{project.title}</h3>
              )}
              <p className="mt-4 text-base text-foreground/90 leading-relaxed lg:text-lg">
                {project.venue.description}
              </p>
              <p className="mt-4 text-sm text-muted-foreground lg:text-base">
                {project.venue.address}
                <br />
                {project.venue.cityStateZip}
              </p>
              {project.venue.website && (
                <p className="mt-3 text-sm lg:text-base">
                  <a
                    href={project.venue.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    {project.venue.websiteLabel}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <CtaBanner
          title="Have a room like this?"
          subtitle="Get a free quote and we'll get your tables playing their best."
        />
      </main>
      <Footer />
    </div>
  )
}
