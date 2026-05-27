import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full">
      {/* Image container with controlled height */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Craftsman upholstering furniture"
          fill
          className="object-cover object-center scale-110"
          priority
        />
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
          <Button
            asChild
            variant="outline"
            className="mt-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="#contact">Get a Free Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
