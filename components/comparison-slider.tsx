"use client"

import * as React from "react"
import { ZoomableImage } from "@/components/zoomable-image"
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
    <section className="w-full py-8 bg-background lg:py-20">
      <div className="px-3 mb-6 lg:max-w-6xl lg:mx-auto lg:px-8 lg:mb-10 lg:text-center">
        <h2 className="text-xl font-semibold text-foreground lg:text-3xl">
          Quality You Can See
        </h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed lg:text-lg lg:mt-4 lg:max-w-3xl lg:mx-auto">
          We don&apos;t cut corners. Every table we service receives meticulous attention to detail - from precision fabric cuts to hidden staple work. The difference between amateur and professional craftsmanship is clear.
        </p>
      </div>

      {/* Mobile slider */}
      <div className="overflow-hidden lg:hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <ZoomableImage
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

      {/* Dot indicators (mobile) */}
      <div className="flex justify-center gap-2 mt-4 lg:hidden">
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

      {/* Desktop side-by-side */}
      <div className="hidden lg:grid grid-cols-2 gap-6 max-w-6xl mx-auto px-8">
        {slides.map((slide, index) => (
          <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <ZoomableImage src={slide.image} alt={slide.alt} fill className="object-cover" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wider px-4 py-2">
                {slide.label}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 left-24">
              <p className="text-right text-sm text-white font-medium drop-shadow-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
