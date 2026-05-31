import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ChevronRight } from "lucide-react"

interface Crumb {
  label: string
  href?: string
}

interface PageBannerProps {
  title: string
  subtitle?: string
  cta?: {
    label: string
    href: string
  }
  /**
   * Trail leading up to the current page. The current page is appended
   * automatically using `title`, so only pass ancestors here.
   * Defaults to a single "Home" crumb.
   */
  breadcrumbs?: Crumb[]
}

export function PageBanner({
  title,
  subtitle,
  cta,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageBannerProps) {
  const trail: Crumb[] = [...breadcrumbs, { label: title }]

  return (
    <section className="w-full bg-primary text-primary-foreground px-4 py-8 lg:py-16">
      <div className="max-w-lg mx-auto lg:max-w-6xl lg:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div>
          <nav aria-label="Breadcrumb" className="mb-2 lg:mb-3">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-primary-foreground/70 lg:text-sm">
              {trail.map((crumb, index) => {
                const isLast = index === trail.length - 1
                return (
                  <li key={`${crumb.label}-${index}`} className="flex items-center gap-1">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-primary-foreground"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-primary-foreground/90" : undefined}>
                        {crumb.label}
                      </span>
                    )}
                    {!isLast && <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />}
                  </li>
                )
              })}
            </ol>
          </nav>
          <h1 className="text-2xl font-bold leading-tight text-balance lg:text-5xl">{title}</h1>
          {subtitle && (
            <p className="text-base text-primary-foreground/80 mt-2 leading-relaxed text-pretty lg:text-xl lg:mt-4 lg:max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        {cta && (
          <Button
            asChild
            size="lg"
            className="mt-5 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 text-base font-semibold lg:mt-0 lg:w-auto lg:flex-shrink-0 lg:px-8"
          >
            <a href={cta.href} target="_blank" rel="noopener noreferrer">
              <Star className="h-4 w-4 mr-2 fill-current" />
              {cta.label}
            </a>
          </Button>
        )}
      </div>
    </section>
  )
}
