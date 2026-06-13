import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Get a Free Quote",
  description:
    "Request a free quote for pool table moving, recovery, re-felting, repairs, or assembly in NH and MA. Quick multi-step form — no obligation.",
  path: "/quote",
})

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
