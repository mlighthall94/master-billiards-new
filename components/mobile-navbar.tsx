"use client"

import * as React from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
]

export function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <nav className="max-w-lg mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-center relative">
            {/* Centered logo */}
            <a
              href="#"
              className="text-foreground"
              aria-label="Home"
            >
              <Logo className="h-14 w-auto" />
            </a>

            {/* Desktop nav - positioned absolutely on the right */}
            <div className="hidden sm:flex items-center gap-6 absolute right-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button - positioned absolutely on the right */}
            <button
              type="button"
              className="sm:hidden absolute right-0 p-2 -mr-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-7 w-7 stroke-[2.5]" /> : <Menu className="h-7 w-7 stroke-[2.5]" />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={cn(
              "sm:hidden overflow-hidden transition-all duration-200 ease-in-out",
              isOpen ? "max-h-64 pb-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 text-sm text-foreground rounded-md hover:bg-muted transition-colors active:bg-muted/80"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Phone banner */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-lg mx-auto px-4 sm:px-6 py-2">
          <a 
            href="tel:+16032315345" 
            className="flex items-center justify-center gap-2 text-base font-semibold tracking-wide"
          >
            <Phone className="h-4 w-4 fill-current" />
            603-231-5345
          </a>
        </div>
      </div>
    </>
  )
}
