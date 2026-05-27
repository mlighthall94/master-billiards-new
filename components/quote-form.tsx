"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone } from "lucide-react"

export function QuoteForm() {
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="w-full py-10 bg-background">
        <div className="px-3 text-center">
          <div className="bg-primary text-primary-foreground p-6">
            <p className="text-lg font-semibold mb-2">Thank You!</p>
            <p className="text-sm text-primary-foreground/80">
              We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="w-full py-10 bg-background">
      <div className="px-3">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Get a Free Quote
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              required
              className="mt-1.5"
              placeholder="Your name"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1.5"
              placeholder="(555) 555-5555"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="mt-1.5"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-sm font-medium">
              Service Needed
            </Label>
            <select
              id="service"
              name="service"
              className="mt-1.5 w-full h-10 px-3 text-sm bg-background border border-input rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="recover">Felt Recovery</option>
              <option value="move">Table Moving</option>
              <option value="repair">Repairs</option>
              <option value="setup">New Table Setup</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              Project Details
            </Label>
            <Textarea
              id="message"
              name="message"
              className="mt-1.5 min-h-[100px]"
              placeholder="Table brand, size, what you need done..."
            />
          </div>

          <Button type="submit" className="w-full mt-2">
            Request Free Quote
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground mb-3">
            Prefer to talk? Call us directly.
          </p>
          <a
            href="tel:+16032315345"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4" />
            603-231-5345
          </a>
        </div>
      </div>
    </section>
  )
}
