"use client"

import { Phone, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Pool Table Moving",
    description: "Professional disassembly, transport, and setup",
  },
  {
    title: "Re-felting",
    description: "Premium cloth replacement in any color",
  },
  {
    title: "Restoration",
    description: "Full restoration of antique and modern tables",
  },
]

export function LeadSection() {
  return (
    <section className="w-full">
      {/* Quick contact bar */}
      <div className="bg-secondary px-3 py-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Mon-Fri 8am-5pm</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>NH &amp; MA</span>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="px-3 py-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Our Services
        </p>
        <h2 className="text-xl font-semibold text-foreground mb-6 text-balance">
          Everything Your Game Room Needs
        </h2>
        
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg"
            >
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA block */}
      <div className="bg-primary text-primary-foreground p-5">
        <p className="text-sm text-primary-foreground/80 mb-1">
          Ready to get started?
        </p>
        <p className="font-semibold text-lg mb-4">
          Get a free quote in 24 hours
        </p>
        <div className="flex flex-col gap-3">
          <Button
            asChild
            variant="outline"
            className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="tel:+16032315345">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
