"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2, Phone } from "lucide-react"
import { submitContact } from "@/app/actions/submit-contact"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/landing-content"

const TABLE_COUNTS = ["1", "2", "3", "4", "5+"]
const ITEM_OPTIONS = [
  "Pool table",
  "Shuffleboard table",
  "Bar / game room",
  "Arcade games",
  "Other",
]

export function MovingQuoteForm() {
  const [submitted, setSubmitted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    movingFrom: "",
    movingTo: "",
    tables: "1",
    timeframe: "",
    message: "",
  })
  const [items, setItems] = React.useState<string[]>(["Pool table"])

  const canSubmit =
    form.name !== "" && form.phone !== "" && form.email !== "" && form.movingFrom !== "" && !submitting

  const toggleItem = (item: string) => {
    setItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    setError(null)

    const lines = [
      `[Pool Table Moving Lead]`,
      `Moving from: ${form.movingFrom.trim()}`,
      `Moving to: ${form.movingTo.trim() || "Not provided"}`,
      `Number of tables: ${form.tables}`,
      `Items to move: ${items.length ? items.join(", ") : "Not specified"}`,
      `Preferred timeframe: ${form.timeframe.trim() || "Not provided"}`,
      form.message.trim() ? `Details: ${form.message.trim()}` : "",
    ].filter(Boolean)

    const result = await submitContact({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: lines.join("\n"),
    })
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
            Thanks! We&apos;ll reach out shortly with your moving quote. Need an answer now? Call us.
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
        <h2 className="text-xl font-bold text-foreground text-balance lg:text-2xl">
          Get Your Free Moving Quote
        </h2>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
          Tell us what you&apos;re moving and where — we&apos;ll send a fast, no-obligation quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <Label htmlFor="mv-name" className="text-sm font-medium mb-1 block">
            Name *
          </Label>
          <Input
            id="mv-name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Your name"
            autoComplete="name"
            className="h-12"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="mv-phone" className="text-sm font-medium mb-1 block">
              Phone *
            </Label>
            <Input
              id="mv-phone"
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
            <Label htmlFor="mv-email" className="text-sm font-medium mb-1 block">
              Email *
            </Label>
            <Input
              id="mv-email"
              type="email"
              inputMode="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="you@example.com"
              autoComplete="email"
              className="h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="mv-from" className="text-sm font-medium mb-1 block">
              Moving from *
            </Label>
            <Input
              id="mv-from"
              value={form.movingFrom}
              onChange={(e) => setForm((p) => ({ ...p, movingFrom: e.target.value }))}
              placeholder="City or town"
              className="h-12"
            />
          </div>
          <div>
            <Label htmlFor="mv-to" className="text-sm font-medium mb-1 block">
              Moving to
            </Label>
            <Input
              id="mv-to"
              value={form.movingTo}
              onChange={(e) => setForm((p) => ({ ...p, movingTo: e.target.value }))}
              placeholder="City or town"
              className="h-12"
            />
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium mb-1.5 block">How many tables?</Label>
          <div className="flex flex-wrap gap-2">
            {TABLE_COUNTS.map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setForm((p) => ({ ...p, tables: count }))}
                className={`h-11 min-w-12 px-4 rounded-lg border text-sm font-semibold transition-colors ${
                  form.tables === count
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/50"
                }`}
                aria-pressed={form.tables === count}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium mb-1.5 block">What are we moving?</Label>
          <div className="flex flex-wrap gap-2">
            {ITEM_OPTIONS.map((item) => {
              const active = items.includes(item)
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleItem(item)}
                  className={`h-11 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                  aria-pressed={active}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <Label htmlFor="mv-timeframe" className="text-sm font-medium mb-1 block">
            Preferred timeframe
          </Label>
          <Input
            id="mv-timeframe"
            value={form.timeframe}
            onChange={(e) => setForm((p) => ({ ...p, timeframe: e.target.value }))}
            placeholder="e.g. ASAP, next week, flexible"
            className="h-12"
          />
        </div>

        <div>
          <Label htmlFor="mv-message" className="text-sm font-medium mb-1 block">
            Anything else we should know?
          </Label>
          <Textarea
            id="mv-message"
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            placeholder="Table size, stairs, access, slate type, etc."
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
            "Get My Free Moving Quote"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          No obligation. We&apos;ll never share your info.
        </p>
      </form>
    </div>
  )
}
