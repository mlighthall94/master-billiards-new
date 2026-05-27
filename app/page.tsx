import { MobileNavbar } from "@/components/mobile-navbar"

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MobileNavbar />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Content goes here */}
      </main>
    </div>
  )
}
