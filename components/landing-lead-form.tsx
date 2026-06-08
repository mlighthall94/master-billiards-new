"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2, Phone } from "lucide-react"
import { submitContact } from "@/app/actions/submit-contact"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/landing-content"

interface LandingLeadFormProps {
  service: string
  title: string
  subtitle: string
}

export function LandingLeadForm({ service, title, subtitle }: LandingLeadFormProps) {
  const [submitted, setSubmitted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" })

  const canSubmit = form.name !== "" && form.email !== "" && form.phone !== "" && !submitting

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    setError(null)
    const message = form.message.trim()
      ? `[${service} Lead] ${form.message.trim()}`
      : `[${service} Lead] Requested a quote for ${service.toLowerCase()}.`
    const result = await submitContact({ ...form, message })
    setSubmitting(false)
    if (result.ok) {
      setSubmitted(true)
    } else {
      setError(result.error)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="h-14 w-14 rounded-full bg-success/10 flex items-center justify-center">
          <CheckCircle2 className="h-7 w-7 text-success" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Request received!</h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto leading-relaxed">
            Thanks! We&apos;ll reach out shortly with your quote. Need an answer now? Call us.
          </p>
        </div>
        <Button asChild variant="outline" className="w-full">
          <a href={PHONE_HREF}>
            <Phone className="h-4 w-4 mr-2" />
            {PHONE_DISPLAY}
          </a>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold text-foreground text-balance lg:text-2xl">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <Label htmlFor="lp-name" className="text-sm font-medium mb-1 block">
            Name *
          </Label>
          <Input
            id="lp-name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Your name"
            autoComplete="name"
            className="h-12"
          />
        </div>

        <div>
          <Label htmlFor="lp-phone" className="text-sm font-medium mb-1 block">
            Phone *
          </Label>
          <Input
            id="lp-phone"
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            placeholder="(603) 555-0123"
            autoComplete="tel"
            className="h-12"
          />
        </div>

        <div>
          <Label htmlFor="lp-email" className="text-sm font-medium mb-1 block">
            Email *
          </Label>
          <Input
            id="lp-email"
            type="email"
            inputMode="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="you@example.com"
            autoComplete="email"
            className="h-12"
          />
        </div>

        <div>
          <Label htmlFor="lp-message" className="text-sm font-medium mb-1 block">
            Anything we should know?
          </Label>
          <Textarea
            id="lp-message"
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            placeholder="Table size, location, timing, etc."
            rows={3}
          />
        </div>

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" size="lg" disabled={!canSubmit} className="w-full py-6 text-base font-semibold">
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Get My Free Quote"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          No obligation. We&apos;ll never share your info.
        </p>
      </form>
    </div>
  )
}
