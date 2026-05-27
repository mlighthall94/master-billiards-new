"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"

const slides = [
  {
    image: "/images/hero-team.png",
    alt: "Master Billiards team member in workshop",
    label: "Meet the Team",
    headline: "Family-Owned Craftsmanship Since Day One",
  },
  {
    image: "/images/hero.png",
    alt: "Craftsman upholstering furniture",
    label: "Custom Upholstery",
    headline: "Expert Craftsmanship for Your Furniture",
  },
  {
    image: "/images/hero-2.jpg",
    alt: "Game room with pool tables",
    label: "Game Rooms",
    headline: "Premium Pool Table Services",
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

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const currentSlide = slides[selectedIndex]

  return (
    <section className="w-full">
      {/* Slider container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className={`object-cover scale-110 ${
                    index === 0 ? "object-top" : "object-center"
                  }`}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean CTA section below image */}
      <div className="bg-primary text-primary-foreground">
        <div className="px-5 py-6">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-2">
            {currentSlide.label}
          </p>
          <h1 className="text-xl font-semibold leading-snug text-balance">
            {currentSlide.headline}
          </h1>
          
          {/* Dots indicator */}
          <div className="flex gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-6 bg-primary-foreground"
                    : "w-1.5 bg-primary-foreground/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

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
