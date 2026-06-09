import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"

const SITE_URL = "https://www.masterbilliards.co"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Core marketing/navigation pages. These are the strongest sitelink
  // candidates, so they carry the highest priorities.
  const corePages: {
    path: string
    priority: number
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/our-work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.8, changeFrequency: "monthly" },
    { path: "/reviews", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/quote", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ]

  const coreEntries: MetadataRoute.Sitemap = corePages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Individual completed-project pages, generated straight from the data
  // source so the sitemap stays in sync automatically as projects are added
  // or removed.
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/our-work/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  // NOTE: The /lp/[service] ad landing pages are intentionally excluded.
  // They are marked noindex/nofollow and exist only for paid traffic, so
  // they should never appear in the sitemap or compete organically.
  return [...coreEntries, ...projectEntries]
}
