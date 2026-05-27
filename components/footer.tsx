import { Phone, MapPin, Clock } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="px-3 py-10">
        {/* Logo */}
        <div className="mb-8">
          <Logo className="h-10 w-auto text-primary-foreground" />
          <p className="text-sm text-primary-foreground/70 mt-2">Master Billiards, LLC.</p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4 mb-8">
          <a
            href="tel:+16032315345"
            className="flex items-center gap-3 text-sm"
          >
            <Phone className="h-4 w-4 flex-shrink-0" />
            603-231-5345
          </a>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <span>Serving Southern New Hampshire</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 flex-shrink-0" />
            Mon-Fri 8am-5pm
          </div>
        </div>

        {/* Services */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-3">
            Services
          </p>
          <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <li>Pool Table Recovery</li>
            <li>Table Moving &amp; Setup</li>
            <li>Repairs &amp; Restoration</li>
            <li>New Table Installation</li>
          </ul>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Master Billiards. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-2">
            Pool table services in Manchester, Nashua, Concord, and surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  )
}
