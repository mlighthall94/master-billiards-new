"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export function SimpleContactForm() {
  const [submitted, setSubmitted] = React.useState(false)
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" })

  const canSubmit = form.name !== "" && form.email !== "" && form.message !== ""

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Message sent!</h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto leading-relaxed">
            Thanks for reaching out. We&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setForm({ name: "", email: "", phone: "", message: "" })
            setSubmitted(false)
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 lg:gap-3 lg:max-h-[60vh] lg:overflow-y-auto lg:pr-2"
    >
      <div>
        <Label htmlFor="name" className="text-sm font-medium mb-1 block">
          Name *
        </Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          placeholder="Your name"
          autoComplete="name"
          className="h-12 lg:h-10"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium mb-1 block">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          inputMode="email"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          placeholder="you@example.com"
          autoComplete="email"
          className="h-12 lg:h-10"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium mb-1 block">
          Phone
        </Label>
        <Input
          id="phone"
          type="tel"
          inputMode="tel"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          placeholder="(603) 555-0123"
          autoComplete="tel"
          className="h-12 lg:h-10"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium mb-1 block">
          Message *
        </Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="How can we help with your pool table?"
          rows={4}
          className="lg:min-h-[80px]"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={!canSubmit}
        className="w-full py-6 lg:py-5 text-base font-semibold"
      >
        Send Message
      </Button>
    </form>
  )
}
