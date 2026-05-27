import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Pool Table Moving",
    description: "Disassembly, transport & precision setup",
  },
  {
    title: "Re-felting",
    description: "Premium cloth in any color",
  },
  {
    title: "Repairs",
    description: "Rails, pockets & leveling",
  },
]

export function Services() {
  return (
    <section className="w-full py-8">
      <div className="px-3">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          What We Do
        </h2>
        
        <div className="flex flex-col gap-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-center justify-between py-3 border-b border-border"
            >
              <div>
                <h3 className="font-medium text-foreground text-sm">{service.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Button asChild size="lg" className="w-full">
            <a href="tel:+16032315345">
              <Phone className="h-4 w-4 mr-2" />
              Call for Free Quote
            </a>
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Mon-Fri 8am-5pm | Serving Southern NH
          </p>
        </div>
      </div>
    </section>
  )
}
