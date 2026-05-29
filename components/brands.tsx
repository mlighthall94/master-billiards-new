"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const brands = [
  { name: "Diamond", logo: "/images/brands/diamond.svg" },
  { name: "Predator", logo: "/images/brands/predator.svg" },
  { name: "Aramith", logo: "/images/brands/aramith.svg" },
  { name: "Simonis", logo: "/images/brands/simonis.svg" },
  { name: "Brunswick", logo: "/images/brands/brunswick.svg" },
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
    <section className="w-full py-8 bg-black">
      <div className="px-3 mb-4">
        <p className="text-sm text-white/60 text-center">
          Brands We Work With
        </p>
      </div>

      <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
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
                className="brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
