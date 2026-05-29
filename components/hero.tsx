"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    image: "/images/hero-2.jpg",
    alt: "Game room with pool tables",
  },
  {
    image: "/images/hero.png",
    alt: "Craftsman upholstering furniture",
  },
  {
    image: "/images/hero-measure.jpg",
    alt: "Technician measuring pool table",
  },
  {
    image: "/images/hero-modern.jpg",
    alt: "Modern game room with pool table",
  },
  {
    image: "/images/hero-red.jpg",
    alt: "Elegant pool table with red felt",
  },
  {
    image: "/images/hero-bar.jpg",
    alt: "Bar with pool tables",
  },
]

export function Hero() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
      dragFree: false,
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  return (
    <section className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-56 sm:h-72 w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary text-primary-foreground px-4 py-5">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-primary-foreground/70 ml-1">5.0 on Google</span>
        </div>
        
        <h1 className="text-2xl font-bold leading-tight">
          Pool Table Services in Southern NH
        </h1>
        
        <p className="text-base text-primary-foreground/80 mt-2">
          Moving, recovery, repairs. Done right.
        </p>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="mt-4 w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <Link href="/quote">Get a Quote</Link>
        </Button>
      </div>
    </section>
  )
}
