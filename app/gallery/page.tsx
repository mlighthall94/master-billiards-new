import type { Metadata } from "next"
import Image from "next/image"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Gallery | Master Billiards",
  description:
    "See our work — pool table moves, re-felting, repairs, and finished game rooms across NH and MA.",
}

const gallery = [
  { src: "/images/hero-modern.jpg", alt: "Modern game room with professionally set up pool table" },
  { src: "/images/hero-red.jpg", alt: "Elegant pool table with new red felt" },
  { src: "/images/our-work.jpg", alt: "Professional pool table recovery with clean finish" },
  { src: "/images/hero-2.jpg", alt: "Game room featuring multiple pool tables" },
  { src: "/images/hero-measure.jpg", alt: "Technician measuring a pool table for setup" },
  { src: "/images/hero-bar.jpg", alt: "Bar area with pool tables" },
  { src: "/images/hero.png", alt: "Craftsman working on a pool table" },
  { src: "/images/hero-team.png", alt: "Master Billiards team at work" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Our Work"
          subtitle="A look at the tables we've moved, recovered, and restored for customers across the region."
        />

        <section className="px-3 py-6 max-w-lg mx-auto w-full">
          <div className="grid grid-cols-2 gap-2">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg border border-border"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 512px) 50vw, 256px"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </section>

        <CtaBanner
          title="Want your table to look like this?"
          subtitle="Get a free quote and we'll make it happen."
        />
      </main>
      <Footer />
    </div>
  )
}
