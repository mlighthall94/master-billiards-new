import { Logo } from "@/components/logo"
import { Facebook, Instagram, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      {/* Desktop footer */}
      <div className="hidden lg:block">
        <div className="max-w-6xl mx-auto px-8 py-14">
          <div className="grid grid-cols-4 gap-10">
            <div className="col-span-1 flex flex-col items-start gap-4">
              <Logo className="h-12 w-auto text-primary-foreground" />
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                Professional pool table moving, recovery, and repair anywhere in New England.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Master Billiards on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Master Billiards on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Master Billiards on TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.5 0h-3.2v16.2a3 3 0 1 1-2.4-2.94V9.9a6.3 6.3 0 1 0 5.6 6.26V7.1a7.6 7.6 0 0 0 4.4 1.4V5.3a4.4 4.4 0 0 1-4.4-4.4V0Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <p className="text-sm font-semibold mb-4">Explore</p>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <p className="text-sm font-semibold mb-4">Contact</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="tel:+16032315345"
                    className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    603-231-5345
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <MapPin className="h-4 w-4" />
                  Plaistow, NH
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <p className="text-sm font-semibold mb-4">Hours</p>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                Monday – Friday
                <br />
                8:00am – 5:00pm
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-primary-foreground/15">
            <p className="text-xs text-primary-foreground/50">
              &copy; {new Date().getFullYear()} Master Billiards, LLC. | Serving all of New England
            </p>
          </div>
        </div>
      </div>

      {/* Mobile footer */}
      <div
        className="lg:hidden px-4 py-6 flex flex-col items-center text-center gap-3"
        style={{ paddingBottom: "calc(5rem + env(safe-area-inset-bottom))" }}
      >
        <Logo className="h-12 w-auto text-primary-foreground" />

        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Master Billiards on Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Master Billiards on Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Master Billiards on TikTok"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16.5 0h-3.2v16.2a3 3 0 1 1-2.4-2.94V9.9a6.3 6.3 0 1 0 5.6 6.26V7.1a7.6 7.6 0 0 0 4.4 1.4V5.3a4.4 4.4 0 0 1-4.4-4.4V0Z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Master Billiards, LLC. | New England
        </p>
      </div>
    </footer>
  )
}
