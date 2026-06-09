const SITE_URL = "https://www.masterbilliards.co"

type Crumb = {
  name: string
  path: string
}

/**
 * Renders BreadcrumbList structured data (JSON-LD) for a page.
 * This helps search engines display the page's position in the site
 * hierarchy and encourages indented sitelinks under the main listing.
 *
 * Pass the trail starting after Home, e.g. [{ name: "Services", path: "/services" }].
 * Home is added automatically as the first item.
 */
export function BreadcrumbJsonLd({ trail }: { trail: Crumb[] }) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    ...trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
