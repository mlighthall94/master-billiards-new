import { MapPin } from "lucide-react"

const counties = [
  "Strafford County, NH",
  "Rockingham County, NH",
  "Essex County, MA",
  "Middlesex County, MA",
]

const towns = [
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
    <section className="w-full py-10 bg-secondary lg:py-20">
      <div className="px-3 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="flex items-start gap-3 mb-4 lg:mb-10">
          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 lg:h-7 lg:w-7" />
          <div>
            <h2 className="text-xl font-semibold text-foreground lg:text-3xl">Areas We Serve</h2>
            <p className="text-sm text-muted-foreground mt-1 lg:text-base">
              Based in Plaistow, NH — serving Southern NH &amp; Northern MA
            </p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-border shadow-sm">
            <iframe
              title="Master Billiards service area map centered on Plaistow, New Hampshire"
              src="https://www.google.com/maps?q=Plaistow,+NH&z=9&output=embed"
              width="100%"
              height="280"
              className="lg:h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Areas */}
          <div className="lg:pt-2">
            {/* Counties */}
            <p className="text-sm font-semibold text-foreground mt-5 mb-2 lg:mt-0 lg:text-base lg:mb-4">Counties Served</p>
            <ul className="flex flex-wrap gap-2">
              {counties.map((county) => (
                <li
                  key={county}
                  className="flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {county}
                </li>
              ))}
            </ul>

            {/* Towns */}
            <p className="text-sm font-semibold text-foreground mt-5 mb-1 lg:mt-8 lg:text-base lg:mb-2">Towns &amp; Regions</p>
            <p className="text-xs text-muted-foreground leading-relaxed lg:text-sm">
              {towns.join(" · ")}
            </p>

            <p className="text-xs text-muted-foreground mt-4 leading-relaxed lg:text-sm lg:mt-6">
              Don&apos;t see your town? We likely service your area. Give us a call to confirm availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
