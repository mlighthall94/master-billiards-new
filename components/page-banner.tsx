interface PageBannerProps {
  title: string
  subtitle?: string
}

export function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="w-full bg-primary text-primary-foreground px-4 py-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold leading-tight text-balance">{title}</h1>
        {subtitle && (
          <p className="text-base text-primary-foreground/80 mt-2 leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
