"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const brands = [
  { name: "Diamond", logo: "/images/brands/diamond.svg", invert: true },
  { name: "Predator", logo: "/images/brands/predator.svg", invert: true },
  { name: "Aramith", logo: "/images/brands/aramith.svg", invert: true },
  { name: "Simonis", logo: "/images/brands/simonis.svg", invert: true },
  { name: "Brunswick", logo: "/images/brands/brunswick.svg", invert: true },
  { name: "Perimeter Lights", logo: "/images/brands/perimeter-lights.png", invert: false },
]

export function Brands() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: false,
      duration: 25,
      skipSnaps: false,
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  )

  return (
    <section className="w-full py-8 bg-black lg:py-16">
      <div className="px-3 mb-4 lg:mb-10">
        <p className="text-sm text-white/60 text-center">
          Brands We Work With
        </p>
      </div>

      {/* Mobile carousel */}
      <div className="overflow-hidden touch-pan-y lg:hidden" ref={emblaRef}>
        <div className="flex will-change-transform">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 px-8 flex items-center justify-center transform-gpu"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={80}
                className={brand.invert ? "brightness-0 invert" : ""}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop static row */}
      <div className="hidden lg:flex max-w-6xl mx-auto px-8 items-center justify-between gap-8">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand.logo}
            alt={brand.name}
            width={160}
            height={64}
            className={`opacity-70 hover:opacity-100 transition-opacity ${brand.invert ? "brightness-0 invert" : ""}`}
          />
        ))}
      </div>
    </section>
  )
}
