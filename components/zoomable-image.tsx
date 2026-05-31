"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Image, { type ImageProps } from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type ZoomableImageProps = ImageProps & {
  /** Optional class applied to the wrapper button. Useful with `fill`. */
  wrapperClassName?: string
}

export function ZoomableImage({ wrapperClassName, className, alt, src, ...props }: ZoomableImageProps) {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  // The src for the expanded view (next/image src can be a string or import object)
  const expandedSrc = typeof src === "string" ? src : (src as { src: string }).src

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Expand image${typeof alt === "string" && alt ? `: ${alt}` : ""}`}
        className={cn(
          "group/zoom block cursor-zoom-in bg-transparent p-0 border-0 appearance-none",
          // When using fill, the parent provides sizing; stretch to fill it.
          props.fill ? "absolute inset-0 h-full w-full" : "",
          wrapperClassName,
        )}
      >
        <Image src={src} alt={alt} className={className} {...props} />
      </button>

      {mounted && open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Image preview"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close image preview"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
              <div
                className="relative max-h-[90vh] max-w-[92vw]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Use a plain img so the expanded view sizes naturally to the viewport */}
                <img
                  src={expandedSrc || "/placeholder.svg"}
                  alt={typeof alt === "string" ? alt : ""}
                  className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
