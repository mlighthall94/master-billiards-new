import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CtaBannerProps {
  title?: string
  subtitle?: string
}

export function CtaBanner({
  title = "Ready to get started?",
  subtitle = "Get a free, no-obligation quote today.",
}: CtaBannerProps) {
  return (
    <section className="w-full bg-secondary px-4 py-10 lg:py-20">
      <div className="max-w-lg mx-auto text-center lg:max-w-3xl">
        <h2 className="text-xl font-bold text-foreground text-balance lg:text-4xl">{title}</h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed lg:text-lg lg:mt-4">{subtitle}</p>
        <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:justify-center lg:gap-4 lg:mt-8">
          <Button asChild size="lg" className="w-full py-6 text-base font-semibold lg:w-auto lg:px-12">
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full py-6 text-base font-semibold bg-transparent lg:w-auto lg:px-12"
          >
            <a href="tel:+16032315345">
              <Phone className="h-4 w-4 mr-2" />
              603-231-5345
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
