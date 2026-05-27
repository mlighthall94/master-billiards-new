import { MobileNavbar } from "@/components/mobile-navbar"
import { Hero } from "@/components/hero"

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full">
        <Hero />
      </main>
    </div>
  )
}
