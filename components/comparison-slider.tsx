"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/their-work.jpg",
    alt: "Poor quality pool table work with torn felt",
    label: "Their Work",
    description: "Sloppy cuts, exposed staples, torn fabric",
  },
  {
    image: "/images/our-work.jpg",
    alt: "Professional pool table work with clean finish",
    label: "Our Work",
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

      {/* Tab buttons */}
      <div className="flex px-3 mb-4 gap-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "flex-1 py-2.5 text-sm font-medium rounded-md transition-colors",
              selectedIndex === index
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {slide.label}
          </button>
        ))}
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
              </div>
              <div className="px-3 py-4 bg-card">
                <p className={cn(
                  "text-sm font-semibold",
                  index === 0 ? "text-destructive" : "text-success"
                )}>
                  {slide.label}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality commitment */}
      <div className="px-3 pt-4 border-t border-border mt-4">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Every job backed by our satisfaction guarantee. If you&apos;re not happy, we&apos;ll make it right.
        </p>
      </div>
    </section>
  )
}
