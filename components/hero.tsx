import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full">
      {/* Image container with controlled height */}
      <div className="relative h-56 sm:h-72 w-full overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Craftsman upholstering furniture"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Subtle tint to let image breathe */}
        <div className="absolute inset-0 bg-foreground/30" />
      </div>
      
      {/* Clean CTA section below image */}
      <div className="bg-primary text-primary-foreground">
        <div className="px-5 py-6">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-2">
            Custom Upholstery
          </p>
          <h1 className="text-xl font-semibold leading-snug text-balance">
            Expert Craftsmanship for Your Furniture
          </h1>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground border-b border-primary-foreground/50 pb-0.5 hover:border-primary-foreground transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
