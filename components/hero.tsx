"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"

const slides = [
  {
    image: "/images/hero-2.jpg",
    alt: "Game room with pool tables",
  },
  {
    image: "/images/hero.png",
    alt: "Craftsman upholstering furniture",
  },
]

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

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
            <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-primary-foreground/70 ml-1">5.0 on Google</span>
        </div>
        
        <h1 className="text-xl font-semibold leading-tight">
          Pool Table Services in Southern NH
        </h1>
        
        <p className="text-sm text-primary-foreground/80 mt-2">
          Moving, recovery, repairs. Done right.
        </p>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === selectedIndex
                  ? "w-6 bg-primary-foreground"
                  : "w-1.5 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="mt-4 w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <a href="#contact">Get a Quote</a>
        </Button>
      </div>
    </section>
  )
}
