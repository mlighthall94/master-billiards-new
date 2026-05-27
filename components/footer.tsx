import { Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="px-3 py-8">
        <Logo className="h-10 w-auto text-primary-foreground" />
        <p className="text-sm text-primary-foreground/60 mt-1">Master Billiards, LLC.</p>
        
        <Button
          asChild
          variant="outline"
          size="lg"
          className="mt-6 w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <a href="tel:+16032315345">
            <Phone className="h-4 w-4 mr-2" />
            603-231-5345
          </a>
        </Button>

        <p className="text-sm text-primary-foreground/60 text-center mt-3">
          Mon-Fri 8am-5pm | Southern NH
        </p>

        <div className="mt-8 pt-4 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/40 text-center">
            &copy; {new Date().getFullYear()} Master Billiards
          </p>
        </div>
      </div>
    </footer>
  )
}
