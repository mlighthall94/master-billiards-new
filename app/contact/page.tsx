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
    value: "kendra@masterbilliards.co",
    href: "mailto:kendra@masterbilliards.co",
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

        <section className="px-4 py-8 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:py-16 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="grid grid-cols-2 gap-3 mb-8 lg:mb-0">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="border border-border rounded-lg p-4 h-full lg:p-6">
                    <Icon className="h-5 w-5 text-primary mb-2 lg:h-6 lg:w-6 lg:mb-3" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground mt-0.5 lg:text-base">{item.value}</p>
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
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4 lg:text-2xl">Send a Message</h2>
            <SimpleContactForm />
          </div>
        </section>

        <section className="px-4 pb-10 max-w-lg mx-auto w-full lg:max-w-6xl lg:px-8 lg:pb-20">
          <h2 className="text-xl font-bold text-foreground mb-4 lg:text-2xl">Find Us</h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Map showing Master Billiards service area in Plaistow, NH"
              src="https://www.google.com/maps?q=Plaistow,+NH&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full lg:h-[420px]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
