"use client"

import * as React from "react"
import { Menu, X, Phone, ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const pageTitles: Record<string, string> = {
  "/services": "Services",
  "/gallery": "Gallery",
  "/reviews": "Reviews",
  "/our-work": "Our Work",
  "/about": "About Us",
  "/contact": "Contact",
  "/quote": "Get a Quote",
}

export function MobileNavbar({ title }: { title?: string } = {}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === "/"
  const currentTitle = title ?? pageTitles[pathname]

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
      {/* Desktop header */}
      <header className="hidden lg:block sticky top-0 z-[70] border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-20">
          <Link href="/" className="text-foreground shrink-0" aria-label="Home">
            <Logo className="h-12 w-auto" />
          </Link>

          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+16032315345"
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-foreground/80 transition-colors"
            >
              <Phone className="h-4 w-4 fill-current" />
              603-231-5345
            </a>
            <Button asChild size="sm" className="font-semibold">
              <Link href="/quote">
                Get a Quote
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="lg:hidden sticky top-0 z-[70]">
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
                className="lg:hidden absolute right-0 p-2 -mr-2 text-foreground z-[70]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-8 w-8 stroke-[2.5]" /> : <Menu className="h-8 w-8 stroke-[2.5]" />}
              </button>
            </div>
          </nav>
        </header>

        {/* Banner: phone number on home, current page title elsewhere */}
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-lg mx-auto px-4 sm:px-6 py-1.5 relative flex items-center justify-center">
            {isHome ? (
              <a 
                href="tel:+16032315345" 
                className="flex items-center justify-center gap-2 text-lg font-semibold tracking-wide"
              >
                <Phone className="h-5 w-5 fill-current" />
                603-231-5345
              </a>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="absolute left-0 text-primary-foreground transition-opacity hover:opacity-80"
                  aria-label="Go back to previous page"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <p className="flex items-center justify-center text-lg font-semibold tracking-wide">
                  {currentTitle ?? "Master Billiards"}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[65] transition-all duration-500 ease-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Full screen dark overlay */}
        <div 
          className="absolute inset-0 bg-black"
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
          <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-8 pt-20">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "w-full text-center py-3 text-2xl font-semibold text-primary-foreground/90 hover:text-primary-foreground transition-all duration-300 rounded-xl hover:bg-primary-foreground/10",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${150 + index * 60}ms` : "0ms" }}
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
            <div className="border-t border-primary-foreground/20 pt-6 flex flex-col gap-3">
              <Button 
                asChild 
                size="lg" 
                className="w-full py-6 text-base font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/quote">
                  Get a Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="w-full py-6 text-base font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="tel:+16032315345">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <p className="text-primary-foreground/40 text-center text-xs mt-1">
                Mon-Fri 8am-5pm | Southern NH &amp; Northern MA
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
