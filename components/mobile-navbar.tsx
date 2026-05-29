"use client"

import * as React from "react"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/quote", label: "Get a Quote" },
]

export function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <div className="sticky top-0 z-[70]">
        <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
          <nav className="max-w-lg mx-auto px-4 sm:px-6">
            <div className="flex py-3 items-center justify-center relative">
              {/* Centered logo */}
              <a
                href="/"
                className="text-foreground"
                aria-label="Home"
              >
                <Logo className="h-14 w-auto" />
              </a>

              {/* Mobile menu button - positioned absolutely on the right */}
              <button
                type="button"
                className="sm:hidden absolute right-0 p-2 -mr-2 text-foreground z-[70]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-8 w-8 stroke-[2.5]" /> : <Menu className="h-8 w-8 stroke-[2.5]" />}
              </button>
            </div>
          </nav>
        </header>

        {/* Phone banner */}
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-lg mx-auto px-4 sm:px-6 py-1.5">
            <a 
              href="tel:+16032315345" 
              className="flex items-center justify-center gap-2 text-lg font-semibold tracking-wide"
            >
              <Phone className="h-5 w-5 fill-current" />
              603-231-5345
            </a>
          </div>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "sm:hidden fixed inset-0 z-[65] transition-all duration-500 ease-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Full screen dark overlay */}
        <div 
          className="absolute inset-0 bg-primary"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu content - full screen */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col transition-all duration-500 ease-out",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          )}
        >
          {/* Navigation links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "w-full text-center py-5 text-2xl font-semibold text-primary-foreground/90 hover:text-primary-foreground transition-all duration-300 rounded-xl hover:bg-primary-foreground/10",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${150 + index * 75}ms` : "0ms" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA section */}
          <div 
            className={cn(
              "px-8 pb-12 transition-all duration-500",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
          >
            <div className="border-t border-primary-foreground/20 pt-8">
              <p className="text-primary-foreground/60 text-center text-sm mb-4">
                Ready to get started?
              </p>
              <Button 
                asChild 
                size="lg" 
                className="w-full py-6 text-base font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="tel:+16032315345">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <p className="text-primary-foreground/40 text-center text-xs mt-4">
                Mon-Fri 8am-5pm | Southern NH
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
