import type { Metadata } from "next"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { ServiceArea } from "@/components/service-area"

export const metadata: Metadata = {
  title: "Service Area | Master Billiards",
  description:
    "Master Billiards serves Southern New Hampshire and Northern Massachusetts, including Rockingham, Strafford, Essex, and Middlesex counties.",
}

export default function ServiceAreaPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Where We Work"
          subtitle="Based in Plaistow, NH and serving customers throughout Southern NH and Northern MA."
        />

        <ServiceArea />

        <CtaBanner
          title="In our service area?"
          subtitle="Reach out for a free quote — we'll confirm availability for your town."
        />
      </main>
      <Footer />
    </div>
  )
}
