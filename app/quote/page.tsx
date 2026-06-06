"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Logo } from "@/components/logo"
import { Check, Camera, X, Lock, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { ZoomableImage } from "@/components/zoomable-image"
import { cn } from "@/lib/utils"
import { submitQuote } from "@/app/actions/submit-quote"

const services = [
  { id: "recovering", label: "Recovering", description: "New cloth installation" },
  { id: "relocation", label: "Relocation", description: "Move your table" },
  { id: "repair", label: "Repair", description: "Fix damage or issues" },
  { id: "leveling", label: "Leveling", description: "Perfect table balance" },
  { id: "refinishing", label: "Refinishing", description: "Restore wood finish" },
  { id: "restoration", label: "Full Restoration", description: "Complete overhaul" },
]

const tableSizes = [
  { id: "7ft", label: "7 ft" },
  { id: "8ft", label: "8 ft" },
  { id: "9ft", label: "9 ft" },
  { id: "other", label: "Other / Not Sure" },
]

const clothGrades = [
  { id: "standard", label: "Standard", description: "Durable wool blend" },
  { id: "premium", label: "Premium", description: "Tournament-grade worsted" },
]

const clothColors = [
  { id: "english-green", label: "English Green", color: "#1B5E20" },
  { id: "royal-blue", label: "Royal Blue", color: "#1565C0" },
  { id: "slate-grey", label: "Slate Grey", color: "#546E7A" },
  { id: "mocha", label: "Mocha", color: "#6D4C41" },
  { id: "burgundy", label: "Burgundy", color: "#6A1B3D" },
  { id: "spruce", label: "Spruce", color: "#2E4A3E" },
  { id: "electric-blue", label: "Electric Blue", color: "#0288D1" },
  { id: "camel", label: "Camel", color: "#A68B5B" },
  { id: "red", label: "Red", color: "#C62828" },
  { id: "dark-green", label: "Dark Green", color: "#1B4332" },
  { id: "tournament-blue", label: "Tournament Blue", color: "#1A237E" },
  { id: "gold", label: "Gold", color: "#B8860B" },
  { id: "purple", label: "Purple", color: "#6A1B9A" },
  { id: "petroleum-blue", label: "Petroleum Blue", color: "#01579B" },
  { id: "powder-blue", label: "Powder Blue", color: "#64B5F6" },
  { id: "olive", label: "Olive", color: "#7CB342" },
  { id: "burnt-orange", label: "Burnt Orange", color: "#E65100" },
  { id: "fuchsia", label: "Fuchsia", color: "#AD1457" },
  { id: "blue-green", label: "Blue Green", color: "#00695C" },
  { id: "grey", label: "Grey", color: "#757575" },
  { id: "chartreuse", label: "Chartreuse", color: "#9ACD32" },
  { id: "orange", label: "Orange", color: "#EF6C00" },
  { id: "dusty-pink", label: "Dusty Pink", color: "#C48B9F" },
]

const moveTypes = [
  { id: "local", label: "Local Move", description: "Within same area" },
  { id: "long", label: "Long Distance", description: "Different city/state" },
  { id: "inhouse", label: "In-House Move", description: "Different room" },
]

const accessTypes = [
  { id: "standard", label: "Standard Access", description: "Normal doorways" },
  { id: "stairs", label: "Stairs Involved", description: "Up or down stairs" },
  { id: "tight", label: "Tight Spaces", description: "Narrow hallways" },
]

const stepLabels = ["Services", "Table Info", "Details", "Contact"]

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [images, setImages] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    services: [] as string[],
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setImages((prev) => [...prev, event.target!.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.services.length > 0
      case 2:
        return formData.tableSize !== ""
      case 3:
        if (formData.services.includes("recovering")) {
          if (!formData.clothGrade || !formData.clothColor) return false
        }
        if (formData.services.includes("relocation")) {
          if (!formData.moveType || !formData.accessType) return false
        }
        return true
      case 4:
        return formData.name !== "" && formData.phone !== "" && formData.email !== ""
      default:
        return true
    }
  }

  const needsStep3 = () => {
    return formData.services.includes("recovering") || formData.services.includes("relocation")
  }

  const handleNext = () => {
    if (step === 2 && !needsStep3()) {
      setStep(4)
    } else {
      setStep((prev) => Math.min(prev + 1, totalSteps))
    }
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const handleBack = () => {
    if (step === 4 && !needsStep3()) {
      setStep(2)
    } else {
      setStep((prev) => Math.max(prev - 1, 1))
    }
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const handleSubmit = async () => {
    if (!canProceed() || submitting) return
    setSubmitting(true)
    setError("")
    try {
      const result = await submitQuote({ ...formData, images })
      if (result.ok) {
        setStep(5)
        window.scrollTo({ top: 0, behavior: "instant" })
      } else {
        setError(result.error)
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-dvh bg-background flex flex-col">
      {/* Minimal immersive header — hides all site chrome while in the flow */}
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="relative flex items-center justify-center h-14 px-4 lg:max-w-2xl lg:mx-auto">
          {step > 1 && step <= 4 ? (
            <button
              onClick={handleBack}
              aria-label="Go back a step"
              className="absolute left-2 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : null}
          <Link href="/" className="text-foreground" aria-label="Master Billiards home">
            <Logo className="h-7 w-auto" />
          </Link>
          <Link
            href="/"
            aria-label="Exit quote form"
            className="absolute right-2 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </Link>
        </div>
      </header>

      {/* Segmented progress tracker */}
      {step <= 4 && (
        <div className="px-4 pt-4 pb-4 bg-background border-b border-border">
          <div className="lg:max-w-2xl lg:mx-auto">
            <div className="flex items-center gap-1.5">
              {stepLabels.map((label, index) => {
                const stepNum = index + 1
                const isComplete = step > stepNum
                const isCurrent = step === stepNum
                return (
                  <div key={label} className="flex-1">
                    <div
                      className={cn(
                        "h-1.5 rounded-full transition-colors duration-300",
                        isComplete || isCurrent ? "bg-primary" : "bg-muted",
                      )}
                    />
                  </div>
                )
              })}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Step {step} of {totalSteps}
              </span>
              <span className="text-xs font-semibold text-foreground">{stepLabels[step - 1]}</span>
            </div>
          </div>
        </div>
      )}

      {/* Form content */}
      <main className="flex-1 px-4 py-7 pb-40 w-full lg:max-w-2xl lg:mx-auto lg:py-12">
        <div key={step} className="animate-in fade-in-0 slide-in-from-bottom-3 duration-300">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-balance">What can we help with?</h1>
                <p className="text-muted-foreground mt-1.5">Select all the services you need.</p>
              </div>
              <div className="grid gap-3">
                {services.map((service) => {
                  const selected = formData.services.includes(service.id)
                  return (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={cn(
                        "group w-full p-4 text-left border rounded-xl transition-all active:scale-[0.99]",
                        selected
                          ? "border-primary bg-primary/[0.04] shadow-sm"
                          : "border-border hover:border-foreground/30",
                      )}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-semibold text-base">{service.label}</p>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                        <div
                          className={cn(
                            "h-6 w-6 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                            selected
                              ? "border-primary bg-primary scale-100"
                              : "border-muted-foreground/30 bg-transparent",
                          )}
                        >
                          <Check
                            className={cn(
                              "h-4 w-4 text-primary-foreground transition-opacity duration-200",
                              selected ? "opacity-100" : "opacity-0",
                            )}
                          />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Table Info + Photos */}
          {step === 2 && (
            <div className="space-y-7">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-balance">Your table</h1>
                <p className="text-muted-foreground mt-1.5">A few details so we get it right.</p>
              </div>

              <div>
                <p className="font-semibold mb-3">Table Size</p>
                <div className="grid grid-cols-2 gap-3">
                  {tableSizes.map((size) => {
                    const selected = formData.tableSize === size.id
                    return (
                      <button
                        key={size.id}
                        onClick={() => setFormData((prev) => ({ ...prev, tableSize: size.id }))}
                        className={cn(
                          "p-4 text-center border rounded-xl transition-all active:scale-[0.98]",
                          selected
                            ? "border-primary bg-primary/[0.04] shadow-sm"
                            : "border-border hover:border-foreground/30",
                        )}
                      >
                        <p className="font-semibold text-base">{size.label}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Photo Upload Section */}
              <div>
                <div className="flex items-baseline gap-2 mb-3">
                  <p className="font-semibold">Photos</p>
                  <p className="text-xs text-muted-foreground">optional, but helpful</p>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <div className="grid grid-cols-3 gap-2.5">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden border border-border"
                    >
                      <ZoomableImage src={img} alt={`Upload ${index + 1}`} fill className="object-cover" unoptimized />
                      <button
                        onClick={() => removeImage(index)}
                        aria-label="Remove photo"
                        className="absolute top-1.5 right-1.5 h-6 w-6 bg-foreground/70 rounded-full flex items-center justify-center backdrop-blur-sm"
                      >
                        <X className="h-3.5 w-3.5 text-background" />
                      </button>
                    </div>
                  ))}

                  {images.length < 6 && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-1.5 hover:border-foreground/30 hover:bg-muted/40 transition-colors"
                    >
                      <Camera className="h-6 w-6 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Add</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Service-specific details */}
          {step === 3 && (
            <div className="space-y-8">
              {formData.services.includes("recovering") && (
                <div className="space-y-5">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-balance">Cloth selection</h1>
                    <p className="text-muted-foreground mt-1.5">Choose your grade and color.</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-3">Cloth Grade</p>
                    <div className="grid grid-cols-2 gap-3">
                      {clothGrades.map((grade) => {
                        const selected = formData.clothGrade === grade.id
                        return (
                          <button
                            key={grade.id}
                            onClick={() => setFormData((prev) => ({ ...prev, clothGrade: grade.id }))}
                            className={cn(
                              "p-4 text-left border rounded-xl transition-all active:scale-[0.98]",
                              selected
                                ? "border-primary bg-primary/[0.04] shadow-sm"
                                : "border-border hover:border-foreground/30",
                            )}
                          >
                            <p className="font-semibold text-sm">{grade.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{grade.description}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <p className="font-semibold">Cloth Color</p>
                      <p className="text-xs text-muted-foreground">swipe to see all</p>
                    </div>
                    <div className="overflow-x-auto -mx-4 px-4 pb-2 touch-pan-x">
                      <div className="flex gap-3 will-change-transform" style={{ width: "max-content" }}>
                        {clothColors.map((color) => {
                          const selected = formData.clothColor === color.id
                          return (
                            <button
                              key={color.id}
                              onClick={() => setFormData((prev) => ({ ...prev, clothColor: color.id }))}
                              className="flex flex-col items-center gap-2 min-w-[68px]"
                            >
                              <span
                                className={cn(
                                  "relative w-12 h-12 rounded-full transition-all duration-200 flex items-center justify-center ring-offset-2 ring-offset-background",
                                  selected ? "ring-2 ring-primary scale-105" : "ring-1 ring-black/10",
                                )}
                                style={{ backgroundColor: color.color }}
                              >
                                {selected && (
                                  <Check className="h-5 w-5 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                                )}
                              </span>
                              <span
                                className={cn(
                                  "text-[11px] leading-tight text-center whitespace-nowrap transition-colors",
                                  selected ? "font-semibold text-foreground" : "text-muted-foreground",
                                )}
                              >
                                {color.label}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {formData.services.includes("relocation") && (
                <div className="space-y-5">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-balance">Move details</h1>
                    <p className="text-muted-foreground mt-1.5">Tell us about the relocation.</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-3">Move Type</p>
                    <div className="grid gap-2.5">
                      {moveTypes.map((type) => {
                        const selected = formData.moveType === type.id
                        return (
                          <button
                            key={type.id}
                            onClick={() => setFormData((prev) => ({ ...prev, moveType: type.id }))}
                            className={cn(
                              "p-4 text-left border rounded-xl transition-all active:scale-[0.99]",
                              selected
                                ? "border-primary bg-primary/[0.04] shadow-sm"
                                : "border-border hover:border-foreground/30",
                            )}
                          >
                            <p className="font-semibold text-sm">{type.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{type.description}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-3">Access Type</p>
                    <div className="grid gap-2.5">
                      {accessTypes.map((type) => {
                        const selected = formData.accessType === type.id
                        return (
                          <button
                            key={type.id}
                            onClick={() => setFormData((prev) => ({ ...prev, accessType: type.id }))}
                            className={cn(
                              "p-4 text-left border rounded-xl transition-all active:scale-[0.99]",
                              selected
                                ? "border-primary bg-primary/[0.04] shadow-sm"
                                : "border-border hover:border-foreground/30",
                            )}
                          >
                            <p className="font-semibold text-sm">{type.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{type.description}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Contact Information */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-balance">Almost done</h1>
                <p className="text-muted-foreground mt-1.5">How can we reach you with your quote?</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name *</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                  <Input
                    type="tel"
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email *</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Service Address</label>
                  <Input
                    placeholder="Where is the table located?"
                    value={formData.address}
                    onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Additional Notes</label>
                  <Textarea
                    placeholder="Anything else we should know? (brand, age, condition, etc.)"
                    value={formData.notes}
                    onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                    rows={3}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Success */}
          {step === 5 && (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <div className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center mb-5 animate-in zoom-in-50 duration-500">
                <div className="h-14 w-14 rounded-full bg-success flex items-center justify-center">
                  <Check className="h-8 w-8 text-success-foreground" />
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight">Request submitted</h1>
              <p className="text-muted-foreground mt-2.5 max-w-sm text-balance">
                Thank you! We&apos;ll review your details and get back to you within 24 hours.
              </p>
              <Button asChild size="lg" className="mt-7 h-12 px-8 text-base font-semibold rounded-xl">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Bottom navigation - fixed */}
      {step <= 4 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="px-4 pt-3 pb-[calc(0.875rem+env(safe-area-inset-bottom))] lg:max-w-2xl lg:mx-auto">
            <div className="flex items-center gap-3">
              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  size="lg"
                  className="flex-1 h-14 text-base font-semibold rounded-xl"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed() || submitting}
                  size="lg"
                  className="flex-1 h-14 text-base font-semibold rounded-xl"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              )}
            </div>
            {error && (
              <p className="mt-2 text-center text-xs text-destructive" role="alert">
                {error}
              </p>
            )}
            <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>Your information is secure and never shared</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
