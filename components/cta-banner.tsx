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
    <section className="w-full bg-secondary px-4 py-10">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-xl font-bold text-foreground text-balance">{title}</h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{subtitle}</p>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild size="lg" className="w-full py-6 text-base font-semibold">
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full py-6 text-base font-semibold bg-transparent"
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
