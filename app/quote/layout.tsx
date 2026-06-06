import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free quote for pool table moving, recovery, re-felting, repairs, or assembly in NH and MA. Quick multi-step form — no obligation.",
  alternates: { canonical: "/quote" },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
