import type { Metadata } from "next"
import { MobileNavbar } from "@/components/mobile-navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { SimpleContactForm } from "@/components/simple-contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Master Billiards",
  description:
    "Get in touch with Master Billiards for pool table moving, recovery, and repairs in NH and MA. Call 603-231-5345 or send us a message.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Call or Text",
    value: "603-231-5345",
    href: "tel:+16032315345",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@masterbilliards.com",
    href: "mailto:info@masterbilliards.com",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Plaistow, NH",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 8am–5pm",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <PageBanner
          title="Get in Touch"
          subtitle="Questions about your table? Send us a message or give us a call — we're happy to help."
        />

        <section className="px-4 py-8 max-w-lg mx-auto w-full">
          <div className="grid grid-cols-2 gap-3 mb-8">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="border border-border rounded-lg p-4 h-full">
                  <Icon className="h-5 w-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">{item.value}</p>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          <h2 className="text-xl font-bold text-foreground mb-4">Send a Message</h2>
          <SimpleContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
