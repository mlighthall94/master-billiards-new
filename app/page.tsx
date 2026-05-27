import { ContactForm } from "@/components/contact-form"
import { MobileNavbar } from "@/components/mobile-navbar"

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <ContactForm />
      </main>
      <footer className="border-t border-border bg-card">
        <div className="max-w-lg mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-muted-foreground text-center">
            Built with accessibility and mobile-first design in mind.
          </p>
        </div>
      </footer>
    </div>
  )
}
