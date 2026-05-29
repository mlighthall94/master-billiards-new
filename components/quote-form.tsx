"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Check, ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

// Service options for Step 1
const services = [
  { id: "recovering", label: "Recovering", description: "New cloth installation" },
  { id: "relocation", label: "Relocation", description: "Move & setup" },
  { id: "repair", label: "Repair", description: "Fix issues" },
  { id: "leveling", label: "Leveling", description: "Perfect balance" },
  { id: "refinishing", label: "Refinishing", description: "Wood restoration" },
  { id: "full-restoration", label: "Full Restoration", description: "Complete overhaul" },
]

// Table sizes
const tableSizes = [
  { id: "7ft", label: "7 ft", description: "Bar size" },
  { id: "8ft", label: "8 ft", description: "Standard home" },
  { id: "9ft", label: "9 ft", description: "Tournament" },
  { id: "other", label: "Other", description: "Not sure" },
]

// Cloth grades
const clothGrades = [
  { id: "standard", label: "Standard", description: "Great for casual play", price: "$" },
  { id: "tournament", label: "Tournament", description: "Professional grade", price: "$$" },
  { id: "premium", label: "Premium", description: "Top-tier Simonis", price: "$$$" },
  { id: "not-sure", label: "Not Sure", description: "Help me decide", price: "" },
]

// Cloth colors
const clothColors = [
  { id: "not-sure", label: "Not Sure", color: "#9CA3AF" },
  { id: "green", label: "Green", color: "#228B22" },
  { id: "blue", label: "Blue", color: "#1E3A5F" },
  { id: "red", label: "Red", color: "#DC2626" },
  { id: "black", label: "Black", color: "#1F2937" },
  { id: "burgundy", label: "Burgundy", color: "#722F37" },
  { id: "camel", label: "Camel", color: "#C19A6B" },
  { id: "gray", label: "Gray", color: "#6B7280" },
]

// Move types
const moveTypes = [
  { id: "same-room", label: "Same Room", description: "Within same space" },
  { id: "same-building", label: "Same Building", description: "Different room/floor" },
  { id: "local", label: "Local Move", description: "Within 30 miles" },
  { id: "long-distance", label: "Long Distance", description: "Over 30 miles" },
]

// Access types
const accessTypes = [
  { id: "ground", label: "Ground Floor", description: "No stairs" },
  { id: "stairs", label: "Stairs", description: "Up or down" },
  { id: "elevator", label: "Elevator", description: "Building elevator" },
  { id: "tight", label: "Tight Access", description: "Narrow halls" },
]

interface FormData {
  services: string[]
  tableSize: string
  clothGrade: string
  clothColor: string
  moveType: string
  accessType: string
  name: string
  phone: string
  email: string
  address: string
  notes: string
}

export function QuoteForm() {
  const [step, setStep] = React.useState(1)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState<FormData>({
    services: [],
    tableSize: "",
    clothGrade: "",
    clothColor: "",
    moveType: "",
    accessType: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  })

  const totalSteps = 4

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.services.length > 0
      case 2:
        return formData.tableSize !== ""
      case 3:
        // Details step - depends on selected services
        if (formData.services.includes("recovering")) {
          return formData.clothGrade !== ""
        }
        if (formData.services.includes("relocation")) {
          return formData.moveType !== ""
        }
        return true
      case 4:
        return formData.name !== "" && formData.phone !== ""
      default:
        return true
    }
  }

  const handleNext = () => {
    if (step < totalSteps && canProceed()) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (canProceed()) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="w-full py-10 bg-background">
        <div className="px-3">
          <div className="bg-primary text-primary-foreground p-8 text-center">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-base text-primary-foreground/80">
              We&apos;ve received your quote request. We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="w-full py-10 bg-background">
      <div className="px-3">
        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-base font-semibold transition-colors",
                  s < step
                    ? "bg-primary text-primary-foreground"
                    : s === step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {s < step ? <Check className="h-5 w-5" /> : s}
              </div>
              {s < 4 && (
                <div
                  className={cn(
                    "h-1 w-8 sm:w-12 mx-1",
                    s < step ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  What can we help you with?
                </h2>
                <p className="text-base text-muted-foreground mt-1">
                  Select all services you need
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={cn(
                      "p-4 border-2 rounded-lg text-left transition-all",
                      formData.services.includes(service.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <p className="font-semibold text-foreground">{service.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {service.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Table Info */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Tell us about your table
                </h2>
                <p className="text-base text-muted-foreground mt-1">
                  What size is your pool table?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {tableSizes.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => updateField("tableSize", size.id)}
                    className={cn(
                      "p-4 border-2 rounded-lg text-left transition-all",
                      formData.tableSize === size.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <p className="font-semibold text-foreground">{size.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {size.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Service Details */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Service Details
                </h2>
                <p className="text-base text-muted-foreground mt-1">
                  Help us understand your needs
                </p>
              </div>

              {/* Recovering options */}
              {formData.services.includes("recovering") && (
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Cloth Grade</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {clothGrades.map((grade) => (
                      <button
                        key={grade.id}
                        type="button"
                        onClick={() => updateField("clothGrade", grade.id)}
                        className={cn(
                          "p-4 border-2 rounded-lg text-left transition-all",
                          formData.clothGrade === grade.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <div className="flex justify-between items-start">
                          <p className="font-semibold text-foreground">{grade.label}</p>
                          {grade.price && (
                            <span className="text-primary text-sm font-medium">
                              {grade.price}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {grade.description}
                        </p>
                      </button>
                    ))}
                  </div>

                  <Label className="text-base font-semibold">Cloth Color</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {clothColors.map((color) => (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => updateField("clothColor", color.id)}
                        className={cn(
                          "p-2 border-2 rounded-lg flex flex-col items-center transition-all",
                          formData.clothColor === color.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <div
                          className="w-8 h-8 rounded-full mb-1"
                          style={{ backgroundColor: color.color }}
                        />
                        <span className="text-xs text-foreground">{color.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Relocation options */}
              {formData.services.includes("relocation") && (
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Move Type</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {moveTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => updateField("moveType", type.id)}
                        className={cn(
                          "p-4 border-2 rounded-lg text-left transition-all",
                          formData.moveType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <p className="font-semibold text-foreground">{type.label}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {type.description}
                        </p>
                      </button>
                    ))}
                  </div>

                  <Label className="text-base font-semibold">Access Type</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {accessTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => updateField("accessType", type.id)}
                        className={cn(
                          "p-4 border-2 rounded-lg text-left transition-all",
                          formData.accessType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <p className="font-semibold text-foreground">{type.label}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {type.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Generic options for other services */}
              {!formData.services.includes("recovering") &&
                !formData.services.includes("relocation") && (
                  <div className="space-y-4">
                    <p className="text-base text-muted-foreground">
                      Great! We&apos;ll get all the details on the next step.
                    </p>
                  </div>
                )}
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  How can we reach you?
                </h2>
                <p className="text-base text-muted-foreground mt-1">
                  We&apos;ll respond within 24 hours
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    required
                    className="mt-1.5 h-12 text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    required
                    className="mt-1.5 h-12 text-base"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="mt-1.5 h-12 text-base"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-base font-medium">
                    Service Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className="mt-1.5 h-12 text-base"
                    placeholder="City, State"
                  />
                </div>

                <div>
                  <Label htmlFor="notes" className="text-base font-medium">
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    className="mt-1.5 min-h-[100px] text-base"
                    placeholder="Table brand, special requests, questions..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button
              type="button"
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className="text-base"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            {step < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!canProceed()}
                className="text-base"
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button type="submit" disabled={!canProceed()} className="text-base">
                Submit Quote Request
              </Button>
            )}
          </div>
        </form>

        {/* Contact fallback */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-base text-muted-foreground mb-3">
            Prefer to talk to someone?
          </p>
          <div className="flex flex-col gap-2 items-center">
            <a
              href="tel:+16032315345"
              className="inline-flex items-center gap-2 text-base font-semibold text-foreground"
            >
              <Phone className="h-4 w-4" />
              603-231-5345
            </a>
            <a
              href="mailto:info@masterbilliards.com"
              className="inline-flex items-center gap-2 text-base text-muted-foreground"
            >
              <Mail className="h-4 w-4" />
              info@masterbilliards.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
