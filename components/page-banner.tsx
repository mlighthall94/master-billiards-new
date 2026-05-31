interface PageBannerProps {
  title: string
  subtitle?: string
}

export function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="w-full bg-primary text-primary-foreground px-4 py-8 lg:py-16">
      <div className="max-w-lg mx-auto lg:max-w-6xl lg:px-8">
        <h1 className="text-2xl font-bold leading-tight text-balance lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="text-base text-primary-foreground/80 mt-2 leading-relaxed text-pretty lg:text-xl lg:mt-4 lg:max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
