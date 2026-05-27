"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/their-work.jpg",
    alt: "Poor quality pool table work with torn felt",
    label: "Them",
    description: "Sloppy cuts, exposed staples, torn fabric",
  },
  {
    image: "/images/our-work.jpg",
    alt: "Professional pool table work with clean finish",
    label: "Us",
    description: "Clean lines, professional finish, built to last",
  },
]

export function ComparisonSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <section className="w-full py-8 bg-background">
      <div className="px-3 mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Quality You Can See
        </h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          We don&apos;t cut corners. Every table we service receives meticulous attention to detail - from precision fabric cuts to hidden staple work. The difference between amateur and professional craftsmanship is clear.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1.5">
                    {slide.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              selectedIndex === index ? "bg-primary" : "bg-muted"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
