"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormField } from "@/components/form-field"
import { FormSection } from "@/components/form-section"
import { PageHeader } from "@/components/page-header"
import { CheckCircle2, Loader2 } from "lucide-react"

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.string().min(1, "Please select your role"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  subscribe: z.boolean().default(false),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms to continue",
  }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subscribe: false,
      terms: false,
    },
  })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("[v0] Form submitted:", data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <div className="rounded-full bg-success/10 p-4">
          <CheckCircle2 className="h-8 w-8 text-success" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Thank you!
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
            Your message has been received. We&apos;ll be in touch soon.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-4"
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <PageHeader
        title="Get in touch"
        description="Fill out the form below and we&apos;ll get back to you as soon as possible."
      />

      <FormSection title="Your details">
        <FormField
          label="Full name"
          htmlFor="fullName"
          error={errors.fullName?.message}
          required
        >
          <Input
            id="fullName"
            placeholder="Jane Doe"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
        </FormField>

        <FormField
          label="Email address"
          htmlFor="email"
          error={errors.email?.message}
          required
        >
          <Input
            id="email"
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </FormField>

        <FormField
          label="Phone number"
          htmlFor="phone"
          error={errors.phone?.message}
          hint="Optional, but helpful for quick responses"
        >
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
            inputMode="tel"
            {...register("phone")}
          />
        </FormField>
      </FormSection>

      <FormSection title="About your inquiry">
        <FormField
          label="Company"
          htmlFor="company"
          error={errors.company?.message}
        >
          <Input
            id="company"
            placeholder="Acme Inc."
            autoComplete="organization"
            {...register("company")}
          />
        </FormField>

        <FormField
          label="Your role"
          htmlFor="role"
          error={errors.role?.message}
          required
        >
          <Select onValueChange={(value) => setValue("role", value)}>
            <SelectTrigger
              id="role"
              className="w-full"
              aria-invalid={!!errors.role}
            >
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="founder">Founder / CEO</SelectItem>
              <SelectItem value="product">Product Manager</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
          required
        >
          <Textarea
            id="message"
            placeholder="Tell us about your project or question..."
            className="min-h-[120px] resize-none"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        </FormField>
      </FormSection>

      <FormSection>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Checkbox
              id="subscribe"
              checked={watch("subscribe")}
              onCheckedChange={(checked) =>
                setValue("subscribe", checked as boolean)
              }
              className="mt-0.5"
            />
            <label
              htmlFor="subscribe"
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer select-none"
            >
              Send me product updates and announcements
            </label>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={watch("terms")}
              onCheckedChange={(checked) =>
                setValue("terms", checked as boolean)
              }
              aria-invalid={!!errors.terms}
              className="mt-0.5"
            />
            <div className="space-y-1">
              <label
                htmlFor="terms"
                className="text-sm text-foreground leading-relaxed cursor-pointer select-none"
              >
                I agree to the terms of service and privacy policy
                <span className="text-accent ml-0.5">*</span>
              </label>
              {errors.terms && (
                <p className="text-xs text-destructive" role="alert">
                  {errors.terms.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </FormSection>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-12 text-base font-medium"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  )
}
