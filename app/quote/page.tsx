"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Check, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

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
  { id: "green", label: "Green", color: "bg-green-600" },
  { id: "blue", label: "Blue", color: "bg-blue-600" },
  { id: "red", label: "Red", color: "bg-red-600" },
  { id: "burgundy", label: "Burgundy", color: "bg-red-900" },
  { id: "tan", label: "Tan", color: "bg-amber-200" },
  { id: "black", label: "Black", color: "bg-gray-900" },
  { id: "other", label: "Other", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
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

export default function QuotePage() {
  const [step, setStep] = useState(1)
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
        return formData.name !== "" && formData.phone !== ""
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
  }

  const handleBack = () => {
    if (step === 4 && !needsStep3()) {
      setStep(2)
    } else {
      setStep((prev) => Math.max(prev - 1, 1))
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    setStep(5)
  }

  return (
    <div className="min-h-dvh bg-background flex flex-col">
      {/* Header - Use same nav as main pages */}
      <MobileNavbar />

      {/* Progress indicator */}
      {step <= 4 && (
        <div className="px-4 py-4 bg-card border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {step} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">
              {step === 1 && "Select Services"}
              {step === 2 && "Table Size"}
              {step === 3 && "Service Details"}
              {step === 4 && "Contact Info"}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Form content */}
      <main className="flex-1 px-4 py-6">
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold">What do you need?</h1>
              <p className="text-muted-foreground mt-1">Select all that apply</p>
            </div>
            <div className="grid gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={cn(
                    "w-full p-4 text-left border-2 rounded-lg transition-all",
                    formData.services.includes(service.id)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-base">{service.label}</p>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    {formData.services.includes(service.id) && (
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Table Size */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold">Table Size</h1>
              <p className="text-muted-foreground mt-1">What size is your pool table?</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tableSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setFormData((prev) => ({ ...prev, tableSize: size.id }))}
                  className={cn(
                    "p-4 text-center border-2 rounded-lg transition-all",
                    formData.tableSize === size.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  <p className="font-semibold text-base">{size.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Service-specific details */}
        {step === 3 && (
          <div className="space-y-6">
            {formData.services.includes("recovering") && (
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold">Cloth Selection</h1>
                  <p className="text-muted-foreground mt-1">Choose your cloth grade and color</p>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Cloth Grade</p>
                  <div className="grid grid-cols-2 gap-3">
                    {clothGrades.map((grade) => (
                      <button
                        key={grade.id}
                        onClick={() => setFormData((prev) => ({ ...prev, clothGrade: grade.id }))}
                        className={cn(
                          "p-3 text-left border-2 rounded-lg transition-all",
                          formData.clothGrade === grade.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-muted-foreground"
                        )}
                      >
                        <p className="font-semibold text-sm">{grade.label}</p>
                        <p className="text-xs text-muted-foreground">{grade.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Cloth Color</p>
                  <div className="grid grid-cols-4 gap-2">
                    {clothColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setFormData((prev) => ({ ...prev, clothColor: color.id }))}
                        className={cn(
                          "flex flex-col items-center gap-1 p-2 border-2 rounded-lg transition-all",
                          formData.clothColor === color.id
                            ? "border-primary"
                            : "border-border hover:border-muted-foreground"
                        )}
                      >
                        <div className={cn("w-8 h-8 rounded-full", color.color)} />
                        <span className="text-xs">{color.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {formData.services.includes("relocation") && (
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold">Move Details</h1>
                  <p className="text-muted-foreground mt-1">Tell us about the move</p>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Move Type</p>
                  <div className="grid gap-2">
                    {moveTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFormData((prev) => ({ ...prev, moveType: type.id }))}
                        className={cn(
                          "p-3 text-left border-2 rounded-lg transition-all",
                          formData.moveType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-muted-foreground"
                        )}
                      >
                        <p className="font-semibold text-sm">{type.label}</p>
                        <p className="text-xs text-muted-foreground">{type.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Access Type</p>
                  <div className="grid gap-2">
                    {accessTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFormData((prev) => ({ ...prev, accessType: type.id }))}
                        className={cn(
                          "p-3 text-left border-2 rounded-lg transition-all",
                          formData.accessType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-muted-foreground"
                        )}
                      >
                        <p className="font-semibold text-sm">{type.label}</p>
                        <p className="text-xs text-muted-foreground">{type.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold">Contact Info</h1>
              <p className="text-muted-foreground mt-1">How can we reach you?</p>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium mb-1 block">Name *</label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Phone *</label>
                <Input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Address</label>
                <Input
                  placeholder="Service location"
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Additional Notes</label>
                <Textarea
                  placeholder="Anything else we should know?"
                  value={formData.notes}
                  onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                  rows={3}
                />
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {step === 5 && (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold">Request Submitted!</h1>
            <p className="text-muted-foreground mt-2 max-w-xs">
              We&apos;ll review your request and get back to you within 24 hours.
            </p>
            <Button asChild className="mt-6">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        )}
      </main>

      {/* Navigation buttons */}
      {step <= 4 && (
        <div className="sticky bottom-0 bg-card border-t border-border p-4 space-y-3">
          <div className="flex gap-3">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
            )}
            {step < 4 ? (
              <Button 
                onClick={handleNext} 
                disabled={!canProceed()}
                className="flex-1"
              >
                Continue
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                disabled={!canProceed()}
                className="flex-1"
              >
                Submit Request
              </Button>
            )}
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Prefer to talk?</span>
            <a href="tel:+16032315345" className="flex items-center gap-1 text-primary font-medium">
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <a href="mailto:info@masterbilliards.com" className="flex items-center gap-1 text-primary font-medium">
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
