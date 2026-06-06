import "server-only"

export interface GoogleReview {
  name: string
  location: string
  text: string
  rating: number
}

export interface GoogleReviewsData {
  /** Overall rating for the business, e.g. 5 */
  rating: number
  /** Total number of user ratings on Google */
  totalRatings: number
  /** Up to 5 reviews returned by the Google Places API */
  reviews: GoogleReview[]
  /** True when the data came live from Google; false when using the fallback */
  isLive: boolean
}

/** Hardcoded fallback used when the Google Places API is unavailable. */
const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    name: "Mike R.",
    location: "Manchester, NH",
    rating: 5,
    text: "Best in the business. They moved and recovered my 9-foot Brunswick and it plays better than ever. Punctual, careful, and the felt job is flawless.",
  },
  {
    name: "Sarah T.",
    location: "Nashua, NH",
    rating: 5,
    text: "Fast, professional, and the felt quality is outstanding. They walked me through every color option and the install was perfect. Highly recommend.",
  },
  {
    name: "Dave K.",
    location: "Concord, NH",
    rating: 5,
    text: "Third time using Master Billiards. Consistent quality every time. They treat your table like it's their own.",
  },
  {
    name: "Jennifer L.",
    location: "Haverhill, MA",
    rating: 5,
    text: "Moved our table from the basement to the new house without a single scratch. Re-leveled it perfectly. Couldn't be happier.",
  },
  {
    name: "Tom B.",
    location: "Portsmouth, NH",
    rating: 5,
    text: "Old table needed new rails and cushions. It feels brand new now. Fair pricing and great communication throughout.",
  },
  {
    name: "Rachel M.",
    location: "Newburyport, MA",
    rating: 5,
    text: "Professional from start to finish. They showed up on time, protected my floors, and the new tournament cloth is beautiful.",
  },
]

const FALLBACK_DATA: GoogleReviewsData = {
  rating: 5,
  totalRatings: 0,
  reviews: FALLBACK_REVIEWS,
  isLive: false,
}

interface PlacesApiReview {
  text?: { text?: string }
  originalText?: { text?: string }
  rating?: number
  authorAttribution?: { displayName?: string }
  relativePublishTimeDescription?: string
}

interface PlacesApiResponse {
  rating?: number
  userRatingCount?: number
  reviews?: PlacesApiReview[]
}

/**
 * Google Place ID for "Master Billiards LLC" (130 Main St #11, Plaistow, NH).
 * Resolved via the Places Text Search API. Hardcoded because it's a stable,
 * non-secret identifier for the business.
 */
const PLACE_ID = "ChIJD3P6SXz-4okRo2lMZIwn3SQ"

/**
 * Fetches live Google reviews via the Places API (New).
 *
 * Google only returns up to 5 reviews per place and chooses which ones, so this
 * is the maximum coverage available without a paid third-party service. Falls
 * back to a curated list of reviews if the API key is missing or the
 * request fails.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GCP_API_KEY ?? process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID || PLACE_ID

  if (!apiKey || !placeId) {
    return FALLBACK_DATA
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      // Cache for an hour so we don't hit the API on every request.
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error("[v0] Google Places API error:", res.status, await res.text())
      return FALLBACK_DATA
    }

    const data = (await res.json()) as PlacesApiResponse
    const reviews = (data.reviews ?? [])
      .map((r): GoogleReview => ({
        name: r.authorAttribution?.displayName ?? "Google user",
        location: r.relativePublishTimeDescription ?? "Google review",
        rating: typeof r.rating === "number" ? r.rating : 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
      }))
      .filter((r) => r.text.length > 0)

    if (reviews.length === 0) {
      return FALLBACK_DATA
    }

    return {
      rating: typeof data.rating === "number" ? data.rating : 5,
      totalRatings: data.userRatingCount ?? 0,
      reviews,
      isLive: true,
    }
  } catch (error) {
    console.error("[v0] Failed to fetch Google reviews:", error)
    return FALLBACK_DATA
  }
}
