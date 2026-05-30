import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="px-4 py-6 flex flex-col items-center text-center gap-2">
        <Logo className="h-12 w-auto text-primary-foreground" />
        <p className="text-xs text-primary-foreground/50">
          &copy; {new Date().getFullYear()} Master Billiards, LLC. | Southern NH
        </p>
      </div>
    </footer>
  )
}
