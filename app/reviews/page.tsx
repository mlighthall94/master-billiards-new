import type { Metadata } from "next"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { Star } from "lucide-react"
import { getGoogleReviews } from "@/lib/google-reviews"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description:
    "Read what our customers across NH and MA say about Master Billiards' pool table moving, recovery, and repair services.",
  path: "/reviews",
})

export default async function ReviewsPage() {
  const { rating, totalRatings, reviews } = await getGoogleReviews()
  const ratingLabel = rating.toFixed(1)
  const roundedRating = Math.round(rating)

  const SITE_URL = "https://www.masterbilliards.co"
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Master Billiards, LLC",
    url: `${SITE_URL}/reviews`,
    ...(totalRatings > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: rating.toFixed(1),
            reviewCount: totalRatings,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    review: reviews.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
    })),
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <BreadcrumbJsonLd trail={[{ name: "Reviews", path: "/reviews" }]} />
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Customer Reviews"
          subtitle="We're proud of our reputation. Here's what customers across NH and MA have to say."
          cta={{
            label: "Leave a Review",
            href: "https://www.google.com/search?q=Master+Billiards+LLC+Plaistow+NH",
          }}
        />

        <section className="px-4 py-8 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:py-16">
          <div className="flex items-center gap-3 mb-6 p-4 lg:max-w-md lg:mx-auto lg:mb-12 lg:p-6 lg:justify-center">
            <span className="text-3xl font-bold text-foreground lg:text-4xl">{ratingLabel}</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < roundedRating
                        ? "h-4 w-4 fill-primary text-primary lg:h-5 lg:w-5"
                        : "h-4 w-4 text-muted-foreground lg:h-5 lg:w-5"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {totalRatings > 0
                  ? `Based on ${totalRatings} Google reviews`
                  : "Based on Google reviews"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-6">
            {reviews.map((review, index) => (
              <div key={`${review.name}-${index}`} className="border border-border rounded-lg p-4 lg:p-8 lg:bg-card lg:flex lg:flex-col">
                <div className="flex gap-0.5 mb-2 lg:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={
                        i < Math.round(review.rating)
                          ? "h-4 w-4 fill-primary text-primary lg:h-5 lg:w-5"
                          : "h-4 w-4 text-muted-foreground lg:h-5 lg:w-5"
                      }
                    />
                  ))}
                </div>
                <p className="text-base text-foreground leading-relaxed lg:text-lg lg:flex-1">
                  &quot;{review.text}&quot;
                </p>
                <p className="text-sm text-muted-foreground mt-3 font-medium lg:mt-6">
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
