import { MapPin } from "lucide-react"

const areas = [
  "Manchester",
  "Nashua", 
  "Concord",
  "Derry",
  "Salem",
  "Merrimack",
  "Bedford",
  "Londonderry",
  "Hudson",
  "Portsmouth",
]

export function ServiceArea() {
  return (
    <section className="w-full py-10 bg-background">
      <div className="px-3">
        <div className="flex items-start gap-3 mb-4">
          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Serving Southern New Hampshire
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Professional pool table services throughout the region
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {areas.map((area) => (
            <span
              key={area}
              className="text-xs bg-secondary text-foreground px-3 py-1.5 border border-border"
            >
              {area}, NH
            </span>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
          Don&apos;t see your town? We likely service your area. Give us a call to confirm availability.
        </p>
      </div>
    </section>
  )
}
