import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full">
      <div className="relative h-56 sm:h-72 w-full overflow-hidden">
        <Image
          src="/images/hero-2.jpg"
          alt="Game room with pool tables"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="bg-primary text-primary-foreground px-4 py-5">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-primary-foreground/70 ml-1">5.0 on Google</span>
        </div>
        
        <h1 className="text-xl font-semibold leading-tight">
          Pool Table Services in Southern NH
        </h1>
        
        <p className="text-sm text-primary-foreground/80 mt-2">
          Moving, recovery, repairs. Done right.
        </p>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="mt-4 w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <a href="tel:+16032315345">Call 603-231-5345</a>
        </Button>
      </div>
    </section>
  )
}
