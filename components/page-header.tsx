import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <header className={cn("space-y-2", className)}>
      <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
        {title}
      </h1>
      {description && (
        <p className="text-base text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </header>
  )
}
