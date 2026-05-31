import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface PageBannerProps {
  title: string
  subtitle?: string
  cta?: {
    label: string
    href: string
  }
}

export function PageBanner({ title, subtitle, cta }: PageBannerProps) {
  return (
    <section className="w-full bg-primary text-primary-foreground px-4 py-8 lg:py-16">
      <div className="max-w-lg mx-auto lg:max-w-6xl lg:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div>
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
