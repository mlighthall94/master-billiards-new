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
    <section className="w-full py-8 lg:py-20">
      <div className="px-3 lg:max-w-6xl lg:mx-auto lg:px-8">
        <h2 className="text-xl font-bold text-foreground mb-4 lg:text-3xl lg:text-center lg:mb-12">
          What We Do
        </h2>
        
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-center justify-between py-3 border-b border-border lg:block lg:border lg:rounded-xl lg:p-8 lg:bg-card lg:text-center lg:transition-shadow lg:hover:shadow-md"
            >
              <div>
                <h3 className="font-semibold text-foreground text-base lg:text-xl">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5 lg:mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 lg:mt-12 lg:flex-row lg:justify-center lg:items-center">
          <Button asChild size="lg" className="w-full py-6 text-base font-semibold lg:w-auto lg:px-12">
            <a href="tel:+16032315345">
              <Phone className="h-4 w-4 mr-2" />
              Call for Free Quote
            </a>
          </Button>
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            Mon-Fri 8am-5pm | Serving all of New England
          </p>
        </div>
      </div>
    </section>
  )
}
