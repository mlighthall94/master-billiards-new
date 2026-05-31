import { Logo } from "@/components/logo"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="px-4 py-6 flex flex-col items-center text-center gap-3">
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
          &copy; {new Date().getFullYear()} Master Billiards, LLC. | Southern NH
        </p>
      </div>
    </footer>
  )
}
