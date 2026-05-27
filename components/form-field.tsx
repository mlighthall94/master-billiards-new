"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  htmlFor: string
  error?: string
  hint?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-foreground leading-none"
      >
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs text-muted-foreground leading-relaxed">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-destructive leading-relaxed" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
