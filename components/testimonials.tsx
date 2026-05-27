"use client"

import { Star } from "lucide-react"

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
  return (
    <section className="w-full py-10 bg-secondary">
      <div className="px-3">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Reviews
        </p>
        <h2 className="text-xl font-semibold text-foreground mb-6">
          What Our Customers Say
        </h2>

        <div className="flex flex-col gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-4 border border-border"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
