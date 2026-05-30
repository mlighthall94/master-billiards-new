import { MapPin } from "lucide-react"

const areas = [
  "Plaistow, NH",
  "Newburyport, MA",
  "Amesbury, MA",
  "Salisbury, MA",
  "Haverhill, MA",
  "Seabrook, NH",
  "Exeter, NH",
  "Portsmouth, NH",
  "Southern NH",
  "North Shore MA",
]

export function ServiceArea() {
  return (
    <section className="w-full py-10 bg-secondary">
      <div className="px-3">
        <div className="flex items-start gap-3 mb-4">
          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-foreground">Areas We Serve</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Based in Plaistow, NH — serving the surrounding region
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden border border-border shadow-sm">
          <iframe
            title="Master Billiards service area map centered on Plaistow, New Hampshire"
            src="https://www.google.com/maps?q=Plaistow,+NH&z=10&output=embed"
            width="100%"
            height="240"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Area chips */}
        <ul className="flex flex-wrap gap-2 mt-4">
          {areas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-1 rounded-full bg-card text-foreground px-3 py-1.5 text-sm border border-border"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {area}
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
          Don&apos;t see your town? We likely service your area. Give us a call to confirm availability.
        </p>
      </div>
    </section>
  )
}
