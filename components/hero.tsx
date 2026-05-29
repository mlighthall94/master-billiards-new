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
      duration: 25,
      dragFree: false,
      skipSnaps: false,
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  return (
    <section className="w-full">
      <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
        <div className="flex will-change-transform">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 transform-gpu">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
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
          size="lg"
          className="mt-5 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 text-base font-semibold"
        >
          <Link href="/quote">
            Get a Quote
            <svg className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="currentColor" />
              <circle cx="12" cy="12" r="5" fill="white" />
              <text x="12" y="14" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">8</text>
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  )
}
