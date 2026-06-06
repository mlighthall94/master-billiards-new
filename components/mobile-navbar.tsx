"use client"

import * as React from "react"
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  ArrowLeft,
  Home,
  Wrench,
  Images,
  FileText,
  Star,
  Hammer,
  Info,
  Mail,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

// Primary tabs shown in the bottom bar (Quote sits in the center)
const primaryTabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/gallery", label: "Gallery", icon: Images },
]

// Secondary destinations surfaced through the "More" sheet
const moreLinks = [
  { href: "/reviews", label: "Reviews", icon: Star },
  { href: "/our-work", label: "Our Work", icon: Hammer },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
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
  const [moreOpen, setMoreOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === "/"
  const currentTitle = title ?? pageTitles[pathname]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))
  const moreActive = moreLinks.some((link) => isActive(link.href))

  // Prevent body scroll when the More sheet is open
  React.useEffect(() => {
    if (moreOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [moreOpen])

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
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-all active:scale-95",
                    active
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
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-foreground/80 transition-all active:scale-95"
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

      {/* Mobile top bar: logo + page-context banner */}
      <div className="lg:hidden sticky top-0 z-[70]">
        <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
          <nav className="max-w-lg mx-auto px-4 sm:px-6">
            <div className="flex py-3 items-center justify-center relative">
              <Link href="/" className="text-foreground" aria-label="Home">
                <Logo className="h-14 w-auto" />
              </Link>
            </div>
          </nav>
        </header>

        {/* Banner: phone number on home, current page title elsewhere */}
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-lg mx-auto px-4 sm:px-6 py-1.5 relative flex items-center justify-center">
            {isHome ? (
              <a
                href="tel:+16032315345"
                className="flex items-center justify-center gap-2 text-lg font-semibold tracking-wide transition-transform touch-manipulation active:scale-95"
              >
                <Phone className="h-5 w-5 fill-current" />
                603-231-5345
              </a>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="absolute left-2.5 p-1 -ml-1 text-primary-foreground transition-transform touch-manipulation active:scale-90 hover:opacity-80"
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

      {/* Mobile bottom tab bar */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-[70] border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Primary"
      >
        <div className="max-w-lg mx-auto grid grid-cols-5 items-end px-1 pt-1.5 pb-1">
          {/* Home + Services */}
          {primaryTabs.slice(0, 2).map((tab) => {
            const Icon = tab.icon
            const active = isActive(tab.href)
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 py-1.5 rounded-md transition-all touch-manipulation active:scale-90 active:bg-secondary/60",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", active && "stroke-[2.5]")} />
                <span className="text-[11px] font-medium leading-none">{tab.label}</span>
              </Link>
            )
          })}

          {/* Center Quote CTA */}
          <div className="flex flex-col items-center">
            <Link
              href="/quote"
              aria-label="Get a Quote"
              className="flex flex-col items-center -mt-6"
            >
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-card transition-transform active:scale-95",
                  isActive("/quote") && "ring-primary/30"
                )}
              >
                <FileText className="h-6 w-6" />
              </span>
              <span
                className={cn(
                  "mt-1 text-[11px] font-semibold leading-none",
                  isActive("/quote") ? "text-primary" : "text-foreground"
                )}
              >
                Quote
              </span>
            </Link>
          </div>

          {/* Gallery */}
          {primaryTabs.slice(2).map((tab) => {
            const Icon = tab.icon
            const active = isActive(tab.href)
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 py-1.5 rounded-md transition-all touch-manipulation active:scale-90 active:bg-secondary/60",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", active && "stroke-[2.5]")} />
                <span className="text-[11px] font-medium leading-none">{tab.label}</span>
              </Link>
            )
          })}

          {/* More */}
          <button
            type="button"
            onClick={() => setMoreOpen(true)}
            className={cn(
              "flex flex-col items-center gap-0.5 py-1.5 rounded-md transition-all touch-manipulation active:scale-90 active:bg-secondary/60",
              moreActive || moreOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
            aria-label="Open menu"
            aria-expanded={moreOpen}
          >
            <Menu className={cn("h-5 w-5", (moreActive || moreOpen) && "stroke-[2.5]")} />
            <span className="text-[11px] font-medium leading-none">Menu</span>
          </button>
        </div>
      </nav>

      {/* More bottom sheet */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[75] transition-opacity duration-300",
          moreOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!moreOpen}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMoreOpen(false)} />

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 rounded-t-2xl border-t border-border bg-card transition-transform duration-300 ease-out",
            moreOpen ? "translate-y-0" : "translate-y-full"
          )}
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          role="dialog"
          aria-label="More navigation"
        >
          <div className="max-w-lg mx-auto px-4 pt-3 pb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="mx-auto h-1.5 w-10 rounded-full bg-border absolute left-1/2 -translate-x-1/2 top-2" />
              <span className="text-sm font-semibold text-foreground">Menu</span>
              <button
                type="button"
                onClick={() => setMoreOpen(false)}
                className="p-1 -mr-1 text-muted-foreground transition-transform touch-manipulation active:scale-90 hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {moreLinks.map((link) => {
                const Icon = link.icon
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border px-4 py-3 transition-all touch-manipulation active:scale-95",
                      active
                        ? "border-primary bg-secondary text-foreground"
                        : "border-border text-foreground hover:bg-secondary/60 active:bg-secondary/60"
                    )}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                )
              })}
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <Button
                asChild
                size="lg"
                className="w-full font-semibold"
                onClick={() => setMoreOpen(false)}
              >
                <Link href="/quote">
                  Get a Quote
                  <ArrowRight className="h-5 w-5 ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full font-semibold bg-transparent"
              >
                <a href="tel:+16032315345">
                  <Phone className="h-5 w-5 mr-1 fill-current" />
                  Call 603-231-5345
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
