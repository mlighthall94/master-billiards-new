import type { Metadata } from "next"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Reviews | Master Billiards",
  description:
    "Read what our customers across NH and MA say about Master Billiards' pool table moving, recovery, and repair services.",
}

const reviews = [
  {
    name: "Mike R.",
    location: "Manchester, NH",
    text: "Best in the business. They moved and recovered my 9-foot Brunswick and it plays better than ever. Punctual, careful, and the felt job is flawless.",
  },
  {
    name: "Sarah T.",
    location: "Nashua, NH",
    text: "Fast, professional, and the felt quality is outstanding. They walked me through every color option and the install was perfect. Highly recommend.",
  },
  {
    name: "Dave K.",
    location: "Concord, NH",
    text: "Third time using Master Billiards. Consistent quality every time. They treat your table like it's their own.",
  },
  {
    name: "Jennifer L.",
    location: "Haverhill, MA",
    text: "Moved our table from the basement to the new house without a single scratch. Re-leveled it perfectly. Couldn't be happier.",
  },
  {
    name: "Tom B.",
    location: "Portsmouth, NH",
    text: "Old table needed new rails and cushions. It feels brand new now. Fair pricing and great communication throughout.",
  },
  {
    name: "Rachel M.",
    location: "Newburyport, MA",
    text: "Professional from start to finish. They showed up on time, protected my floors, and the new tournament cloth is beautiful.",
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Customer Reviews"
          subtitle="We're proud of our reputation. Here's what customers across NH and MA have to say."
        />

        <section className="px-4 py-8 max-w-lg mx-auto w-full">
          <div className="flex items-center gap-3 mb-6 rounded-lg bg-secondary p-4">
            <span className="text-3xl font-bold text-foreground">5.0</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">Based on Google reviews</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {reviews.map((review) => (
              <div key={review.name} className="border border-border rounded-lg p-4">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base text-foreground leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <p className="text-sm text-muted-foreground mt-3 font-medium">
                  {review.name} — {review.location}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CtaBanner
          title="Join our happy customers"
          subtitle="Experience the Master Billiards difference. Request a free quote today."
        />
      </main>
      <Footer />
    </div>
  )
}
