import type { Metadata } from "next"
import { ZoomableImage } from "@/components/zoomable-image"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { CtaBanner } from "@/components/cta-banner"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "See our work — pool table moves, re-felting, repairs, and finished game rooms across NH and MA.",
  path: "/gallery",
})

const gallery = [
  { src: "/images/gallery/gallery-diamond-gray.png", alt: "Black Diamond pool table with gray cloth in a green-walled game room" },
  { src: "/images/gallery/gallery-diamond-lightblue.png", alt: "Brown Diamond pool table with light blue cloth in a home game room" },
  { src: "/images/gallery/gallery-oak-blue-angle.png", alt: "Weathered-oak pool table with royal blue cloth freshly recovered" },
  { src: "/images/gallery/gallery-oak-blue-room.png", alt: "Weathered-oak table with royal blue cloth set up in a finished basement" },
  { src: "/images/gallery/gallery-antique-red-full.png", alt: "Antique carved pool table with burgundy cloth and fringed leather pockets on an oriental rug" },
  { src: "/images/gallery/gallery-antique-red-angle.png", alt: "Angled view of an antique table with burgundy cloth and tasseled drop pockets" },
  { src: "/images/gallery/gallery-teal-pocket.png", alt: "Close-up of a black leather drop pocket with new teal cloth" },
  { src: "/images/gallery/gallery-gray-pocket.png", alt: "Close-up of a corner pocket with freshly installed gray cloth" },
  { src: "/images/gallery/gallery-gray-rail-macro.png", alt: "Macro view of a pool table rail and pocket with new gray cloth" },
  { src: "/images/gallery/gallery-gc7-room.png", alt: "Brunswick Gold Crown VII pool table with light blue cloth in a bright coastal game room" },
  { src: "/images/gallery/gallery-gc7-front.png", alt: "Front view of a white Brunswick pool table with blue cloth in a modern kitchen game room" },
  { src: "/images/gallery/gallery-gc7-angle.png", alt: "Angled view of a Brunswick Gold Crown VII table with blue cloth beside a white kitchen" },
  { src: "/images/gallery/gallery-gc7-felt.png", alt: "Close-up of the blue cloth and pocket on a freshly recovered Brunswick Gold Crown VII" },
  { src: "/images/gallery/gallery-32.png", alt: "Finished basement game room with two blue-cloth pool tables under modern LED ring lights" },
  { src: "/images/gallery/gallery-21.png", alt: "Diamond table with red rails and blue cloth in a bar" },
  { src: "/images/gallery/gallery-25.png", alt: "Row of chrome-railed tables with bright blue cloth in a pool hall" },
  { src: "/images/gallery/gallery-27.png", alt: "Blue-felt table with wooden bar stools against a red wall" },
  { src: "/images/gallery/gallery-31.png", alt: "Master Billiards technician smiling while installing a table rail" },
  { src: "/images/gallery/gallery-24.png", alt: "Recovered rails laid out with blue cloth during a table install" },
  { src: "/images/gallery/gallery-23.png", alt: "Close-up of a corner pocket with new blue cloth" },
  { src: "/images/gallery/gallery-26.png", alt: "Close-up of a pocket with the panther logo on the rail cap" },
  { src: "/images/gallery/gallery-28.png", alt: "Stapling new blue cloth tight to a rail with a pneumatic stapler" },
  { src: "/images/gallery/gallery-29.png", alt: "Fresh blue cloth wrapped over a corner pocket" },
  { src: "/images/gallery/gallery-20.png", alt: "Cart loaded with Master Billiards tools and DeWalt cases ready for a job" },
  { src: "/images/gallery/gallery-1.png", alt: "Master Billiards team with a freshly recovered table under an LED light fixture" },
  { src: "/images/gallery/gallery-2.png", alt: "Two Diamond tables with blue cloth in a sports bar" },
  { src: "/images/gallery/gallery-4.png", alt: "Black Diamond table with light blue cloth in a sunlit clubhouse" },
  { src: "/images/gallery/gallery-7.png", alt: "Olhausen table with blue cloth in a busy pool hall" },
  { src: "/images/gallery/gallery-9.png", alt: "Recovered table with blue cloth on a checkered floor" },
  { src: "/images/gallery/gallery-12.png", alt: "Ornate carved antique table with blue cloth on a wood floor" },
  { src: "/images/gallery/gallery-14.png", alt: "APA Pool Leagues room with multiple blue-felt tables" },
  { src: "/images/gallery/gallery-19.png", alt: "Brunswick Gold Crown VII table with light cloth" },
  { src: "/images/gallery/gallery-3.png", alt: "Close-up of a precision pocket with new blue cloth" },
  { src: "/images/gallery/gallery-13.png", alt: "Dark wood table with blue cloth racked and ready to play" },
  { src: "/images/gallery/gallery-8.png", alt: "Table mid-install with the slate exposed before re-felting" },
  { src: "/images/gallery/gallery-11.png", alt: "Table with blue cloth and a fresh rack in a home game room" },
  { src: "/images/gallery/gallery-15.png", alt: "Predator branded tournament table with blue cloth at an expo" },
  { src: "/images/gallery/gallery-17.png", alt: "Brunswick table with blue cloth in a dimly lit workshop" },
  { src: "/images/gallery/gallery-18.png", alt: "Brown table with blue cloth on a dark area rug" },
  { src: "/images/gallery/gallery-6.png", alt: "Killington branded shuffleboard table" },
  { src: "/images/gallery/gallery-16.png", alt: "Bumper pool table set up with red and white pegs" },
  { src: "/images/gallery/gallery-10.png", alt: "Ballroom full of tournament tables being assembled" },
  { src: "/images/gallery/gallery-5.png", alt: "CueSports International Expo welcome entrance" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <BreadcrumbJsonLd trail={[{ name: "Gallery", path: "/gallery" }]} />
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Gallery"
          subtitle="A look at the tables we've moved, recovered, and restored for customers across the region."
        />

        <section className="px-3 py-6 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:py-12">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg border border-border group"
              >
                <ZoomableImage
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover lg:transition-transform lg:duration-300 lg:group-hover:scale-105"
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
