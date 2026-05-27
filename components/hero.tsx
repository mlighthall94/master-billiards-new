import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero image */}
      <div className="relative aspect-[1/1] sm:aspect-[5/2] w-full">
        <Image
          src="/images/hero.png"
          alt="Craftsman upholstering furniture"
          fill
          className="object-cover"
          priority
        />
        {/* Tinted overlay */}
        <div className="absolute inset-0 bg-foreground/70" />
        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-background leading-tight text-balance">
            Expert Upholstery Services
          </h1>
          <p className="mt-2 text-sm sm:text-base text-background/90 leading-relaxed max-w-md">
            Quality craftsmanship for furniture restoration and custom work.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center bg-background text-foreground font-semibold px-6 py-3 rounded-md text-sm w-fit"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
