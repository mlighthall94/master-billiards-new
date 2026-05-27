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
      <div className="sticky top-0 z-[70]">
        <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
          <nav className="max-w-lg mx-auto px-4 sm:px-6">
            <div className="flex py-3 items-center justify-center relative">
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
                className="sm:hidden absolute right-0 p-2 -mr-2 text-foreground z-[70]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-8 w-8 stroke-[3]" /> : <Menu className="h-8 w-8 stroke-[3]" />}
              </button>
            </div>
          </nav>
        </header>

        {/* Phone banner */}
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-lg mx-auto px-4 sm:px-6 py-1.5">
            <a 
              href="tel:+16032315345" 
              className="flex items-center justify-center gap-2 text-base font-semibold tracking-wide"
            >
              <Phone className="h-4 w-4 fill-current" />
              603-231-5345
            </a>
          </div>
        </div>
      </div>

      {/* Slide-out mobile menu */}
      <div
        className={cn(
          "sm:hidden fixed inset-0 z-[65] transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-foreground/20"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-64 bg-card border-l border-border shadow-lg transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col pt-20 px-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-4 text-lg font-medium text-foreground border-b border-border"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
