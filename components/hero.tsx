"use client"

import { ZoomableImage } from "@/components/zoomable-image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    image: "/images/hero-recover.png",
    alt: "Technician recovering a pool table with new green felt",
  },
  {
    image: "/images/hero-slate-work.png",
    alt: "Master Billiards technician drilling into a pool table slate during installation",
  },
  {
    image: "/images/hero-2.jpg",
    alt: "Game room with pool tables",
  },
  {
    image: "/images/hero.png",
    alt: "Craftsman upholstering furniture",
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
    <section className="w-full h-[calc(100svh-116px)] flex flex-col lg:flex-row lg:h-[calc(100vh-80px)] lg:max-h-[680px]">
      {/* Image Carousel - takes remaining space */}
      <div className="overflow-hidden touch-pan-y flex-1 min-h-0 lg:flex-[0_0_60%] lg:h-full" ref={emblaRef}>
        <div className="flex will-change-transform h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 transform-gpu h-full">
              <ZoomableImage
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content - fixed at bottom */}
      <div className="bg-primary text-primary-foreground px-4 py-5 flex-shrink-0 lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:px-16 lg:py-0">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-primary-foreground/70 ml-1">5.0 on Google</span>
        </div>
        
        <h1 className="text-2xl font-bold leading-tight lg:text-5xl lg:leading-[1.05] text-balance">
          Pool Table Services in NH and MA
        </h1>
        
        <p className="text-base text-primary-foreground/80 mt-2 lg:text-xl lg:mt-4 lg:max-w-md">
          Moving, recovery, repairs. Done right.
        </p>

        <Button
          asChild
          size="lg"
          className="mt-5 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 text-base font-semibold lg:w-auto lg:self-start lg:mt-8 lg:px-12 lg:py-7 lg:text-lg"
        >
          <Link href="/quote">Get a Quote</Link>
        </Button>
      </div>
    </section>
  )
}
