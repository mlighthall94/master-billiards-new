"use client"

import { Star } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

const reviews = [
  {
    name: "Mike R.",
    location: "Manchester, NH",
    text: "Best in the business. They moved and recovered my 9-foot Brunswick and it plays better than ever.",
  },
  {
    name: "Sarah T.",
    location: "Nashua, NH",
    text: "Fast, professional, and the felt quality is outstanding. Highly recommend.",
  },
  {
    name: "Dave K.",
    location: "Concord, NH",
    text: "Third time using Master Billiards. Consistent quality every time.",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 25,
    skipSnaps: false,
  })
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
    <section className="w-full py-8 bg-secondary">
      <div className="px-3 mb-4">
        <h2 className="text-xl font-bold text-foreground">Reviews</h2>
      </div>

      <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
        <div className="flex will-change-transform">
          {reviews.map((review, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-3 transform-gpu">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base text-foreground leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {review.name} - {review.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === selectedIndex ? "w-4 bg-primary" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
