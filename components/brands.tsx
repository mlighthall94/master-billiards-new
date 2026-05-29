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
      align: "center",
      dragFree: true,
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

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-[0_0_50%] min-w-0 px-4 flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={50}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
