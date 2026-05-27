"use client"

import { Star } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

const reviews = [
  {
    name: "Mike R.",
    location: "Manchester, NH",
    rating: 5,
    text: "Best in the business. They moved and recovered my 9-foot Brunswick and it plays better than ever.",
  },
  {
    name: "Sarah T.",
    location: "Nashua, NH",
    rating: 5,
    text: "Fast, professional, and the felt quality is outstanding. Highly recommend for any pool table work.",
  },
  {
    name: "Dave K.",
    location: "Concord, NH",
    rating: 5,
    text: "Third time using Master Billiards. Consistent quality every time. These guys know what they're doing.",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
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

  return (
    <section className="w-full py-10 bg-secondary">
      <div className="px-3">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Reviews
        </p>
        <h2 className="text-xl font-semibold text-foreground mb-6">
          What Our Customers Say
        </h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((review, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
              <div className="bg-card p-4 border border-border">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-3">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === selectedIndex
                ? "w-6 bg-primary"
                : "w-1.5 bg-muted-foreground/40"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
