import type { Metadata } from "next"

type PageMetaInput = {
  title: string
  description: string
  /** Root-relative path, e.g. "/services". Used for both canonical and og:url. */
  path: string
  /** Optional OG type; defaults to "website". */
  type?: "website" | "article"
}

/**
 * Builds per-page metadata with the canonical URL and OpenGraph url/title
 * aligned to the same path. Relative paths resolve against `metadataBase`
 * (set in app/layout.tsx) to the canonical www host, so social shares and
 * search engines see a unique, consistent URL for every page.
 */
export function pageMetadata({ title, description, path, type = "website" }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Master Billiards`,
      description,
      url: path,
      siteName: "Master Billiards",
      locale: "en_US",
      type,
      images: [
        {
          url: "/images/hero-recover.png",
          width: 1626,
          height: 967,
          alt: "Master Billiards — professional pool table services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Master Billiards`,
      description,
      images: ["/images/hero-recover.png"],
    },
  }
}
