export interface Project {
  slug: string
  title: string
  /**
   * Optional shorter title used in space-constrained spots like the banner.
   * If omitted, getBannerTitle() will derive one from `title` when it's too long.
   */
  bannerTitle?: string
  logo?: string
  location: string
  summary: string
  /** Short list of the work performed, shown on the detail page */
  scope: string[]
  /** Longer narrative paragraphs about the job */
  story: string[]
  /** Hero image shown at the top of the detail page */
  cover: string
  /** Additional images featured on the detail page */
  gallery: { src: string; alt: string }[]
  /** Optional video testimonial from the venue owner/operator */
  testimonial?: {
    /** Name of the person giving the testimonial */
    name: string
    /** Their role/title, e.g. "Owner, Red Dragon Billiards" */
    role: string
    /** Full URL to the testimonial video */
    videoUrl: string
    /** YouTube video ID used to embed the player */
    youtubeId: string
  }
  /** Information about the venue itself, shown in an "About the venue" card */
  venue: {
    /** Short blurb describing the place */
    description: string
    /** Street address line */
    address: string
    /** City, state ZIP line */
    cityStateZip: string
    /** Public website URL */
    website?: string
    /** Display label for the website link, e.g. "legendsbilliards.com" */
    websiteLabel?: string
  }
}

export const projects: Project[] = [
  {
    slug: "sharkys-billiards",
    title: "Sharky's Billiards",
    location: "Somersworth, NH",
    summary:
      "A full room of brand-new Olhausen tables installed and recovered in Simonis 860HR Tournament Blue, with ongoing service to keep every table playing true.",
    scope: [
      "Delivered and assembled brand-new Olhausen tables",
      "Recovered every table in Simonis 860HR Tournament Blue",
      "Precision-leveled slate for true, consistent play",
      "Ongoing service and maintenance for the room",
    ],
    story: [
      "Sharky's Billiards wanted a room that played as good as it looked, so we outfitted the entire floor with brand-new Olhausen tables — the best in billiards. Each one was delivered, assembled, and precision-leveled so the whole room rolls fast and true.",
      "We recovered every table in Simonis 860HR Tournament Blue for a sharp, consistent look across the floor, and we continue to service the room so the tables stay in tournament-ready shape night after night.",
    ],
    cover: "/images/work/sharkys-1.png",
    gallery: [
      { src: "/images/work/sharkys-2.png", alt: "Two new Olhausen tables with blue cloth at Sharky's Billiards" },
      { src: "/images/work/sharkys-3.png", alt: "Olhausen rails being installed during the table setup at Sharky's Billiards" },
      { src: "/images/work/sharkys-4.png", alt: "The room at Sharky's Billiards before the new Olhausen tables were set up" },
    ],
    venue: {
      description:
        "A billiards room in Somersworth outfitted with a full set of brand-new Olhausen tables, Sharky's Billiards is a sharp, welcoming spot for casual players and league nights alike.",
      address: "369 NH-108",
      cityStateZip: "Somersworth, NH 03878",
    },
  },
  {
    slug: "the-nest",
    title: "The Nest",
    logo: "/images/work/the-nest-logo.png",
    location: "Plaistow, NH",
    summary:
      "Install and setup of twelve 8-foot Diamond tables for a pool hall hosting APA Tri Cup tournaments and various leagues.",
    scope: [
      "Delivered and assembled twelve 8-foot Diamond tables",
      "Installed Simonis cloth across the floor",
      "Calibrated rail speed and pocket cut to tournament spec",
      "Set up the room for APA Tri Cup and league play",
    ],
    story: [
      "The Nest opened its doors with a clean slate — quite literally. We delivered and assembled twelve brand-new 8-foot Diamond tables, dialing in rail speed and pocket geometry so every table played consistently across the room.",
      "Because The Nest hosts APA Tri Cup tournaments and various leagues, the tables had to perform to tournament spec night after night. We tuned each one accordingly and walked the staff through day-to-day upkeep so they could keep the tables sharp between our scheduled visits.",
      "The Nest has been one of our most loyal customers, dating back over 10 years of work together — a relationship we're proud to have built and continue to maintain.",
    ],
    cover: "/images/work/the-nest-1.jpg",
    gallery: [
      { src: "/images/work/the-nest-2.jpg", alt: "Rows of Diamond tables with blue Simonis cloth at The Nest" },
      { src: "/images/work/the-nest-3.jpg", alt: "Close-up of a freshly clothed Diamond table at The Nest" },
    ],
    venue: {
      description:
        "The Nest Pub & Grill in Plaistow offers a clean, modern room for casual players and serious shooters alike, alongside dining, spirits, and entertainment.",
      address: "4 Plaistow Road",
      cityStateZip: "Plaistow, NH 03865",
      website: "https://thenestpubandgrill.com/",
      websiteLabel: "thenestpubandgrill.com",
    },
  },
  {
    slug: "legends-billiards",
    title: "Legends Bar & Billiards",
    logo: "/images/work/legends-logo.webp",
    location: "Portsmouth, NH",
    summary:
      "A full 12-table room recovered in Simonis 860HR Tournament Green, with new pockets and all-new rubber cushions back in 2018.",
    scope: [
      "Recovered 12 tables with Simonis 860HR in Tournament Green",
      "Installed brand-new pockets throughout",
      "Replaced all the rubber cushions back in 2018",
      "Re-leveled three-piece slate to tournament spec",
    ],
    story: [
      "Back in 2018, Legends brought us in to give their room a complete refresh. Every table got brand-new pockets and a full set of new rubber cushions — the foundation of a true, fast roll.",
      "We recovered all twelve tables in Simonis 860HR Tournament Green and re-leveled every slate seam so the room could host sanctioned league nights with confidence. Years later, those tables still play sharp.",
    ],
    cover: "/images/work/legends-1.png",
    gallery: [
      { src: "/images/work/legends-2.png", alt: "Freshly recovered table with oak rails at Legends" },
      { src: "/images/work/legends-3.png", alt: "Head-on view of a newly clothed table at Legends" },
      { src: "/images/work/legends-4.png", alt: "Technician measuring and leveling a table at Legends" },
    ],
    venue: {
      description:
        "A lively bar and billiards room in the heart of Portsmouth, Legends hosts sanctioned league nights and welcomes walk-in players across its twelve tournament-grade tables.",
      address: "100 Market Street",
      cityStateZip: "Portsmouth, NH 03801",
      website: "https://www.legendsbilliards.com",
      websiteLabel: "legendsbilliards.com",
    },
  },
  {
    slug: "backstreet-billiards",
    title: "Backstreet Bar & Grill",
    logo: "/images/work/backstreet-logo.png",
    location: "Hudson, NH",
    summary:
      "Full table setup with custom brand decals — a new service that's quickly becoming popular.",
    scope: [
      "Recovered tables with Simonis 860HR in Tournament Green",
      "Designed and applied custom Backstreet Bar & Grill rail decals",
      "Added Aramith and Simonis Cloth brand decals",
      "Re-leveled and tuned each table for league play",
    ],
    story: [
      "Backstreet Bar & Grill wanted their room to feel unmistakably their own, so we recovered every table in fresh Simonis 860HR Tournament Green and re-leveled the slate for true, consistent play across the floor.",
      "To finish the room, we designed and applied custom Backstreet Bar & Grill brand decals to each table rail — a new service we offer that's quickly becoming popular. The branded rails turn ordinary tables into a signature part of the venue, and the result gives the whole space a polished, professional look.",
    ],
    cover: "/images/work/backstreet-1.jpg",
    gallery: [
      { src: "/images/work/backstreet-2.jpg", alt: "Backstreet Bar & Grill tables with custom brand decals" },
      { src: "/images/work/backstreet-3.jpg", alt: "Close-up of a custom Backstreet Bar & Grill rail decal" },
    ],
    venue: {
      description:
        "A lively sports bar and billiards room in Hudson, Backstreet Bar & Grill pairs custom-branded tables with a full bar, league play, and a wall of New England sports memorabilia.",
      address: "12 Central Street",
      cityStateZip: "Hudson, NH 03051",
      website: "https://www.backstreetcueclub.com",
      websiteLabel: "backstreetcueclub.com",
    },
  },
  {
    slug: "east-side-club",
    title: "East Side Club",
    location: "Manchester, NH",
    summary:
      "Relocated the club from across the street to their new building and installed brand-new 9' Diamond Pro Am tables in Simonis 860HR Tournament Blue.",
    scope: [
      "Moved the club from across the street to their new building",
      "Installed brand-new 9' Diamond Pro Am tables",
      "Recovered tables in Simonis 860HR Tournament Blue",
      "Precision-leveled every table for true, consistent play",
    ],
    story: [
      "When East Side Club moved into their new building just across the street, we handled the entire relocation — carefully moving them out of the old space and into their new home.",
      "Once they were settled in, we installed brand-new 9' Diamond Pro Am tables and recovered them in Simonis 860HR Tournament Blue, then precision-leveled each one for a true, fast roll throughout the room.",
    ],
    cover: "/images/work/east-side-1.jpg",
    gallery: [
      { src: "/images/work/east-side-2.jpg", alt: "Two freshly recovered Diamond tables at East Side Club" },
      { src: "/images/work/east-side-3.jpg", alt: "Close-up of a Diamond table with new blue cloth at East Side Club" },
    ],
    venue: {
      description:
        "A beloved neighborhood club that's been a Manchester staple for decades, East Side Club pairs classic character with freshly restored Diamond tables.",
      address: "750 Massabesic St",
      cityStateZip: "Manchester, NH 03103",
      website: "https://www.eastsideclubnh.com",
      websiteLabel: "eastsideclubnh.com",
    },
  },
  {
    slug: "breakaway-billiards",
    title: "Break-Away Billiards",
    location: "Clinton, MA",
    summary:
      "Eight Olhausen tables recovered and re-leveled with brand-new pockets throughout.",
    scope: [
      "Recovered 8 Olhausen tables with new green cloth",
      "Installed brand-new leather pockets on every table",
      "Re-leveled each table for true, consistent play",
      "Cleaned and detailed rails and oak woodwork",
    ],
    story: [
      "Break-Away Billiards came to us with a full room of eight classic Olhausen tables that had seen years of heavy league and walk-in play. The cloth was worn, the pockets were tired, and several tables had drifted out of level.",
      "We recovered all eight tables in fresh green cloth, fit each one with brand-new pockets, and re-leveled the slate so every table played fast and true. The result is a room full of tables that look and roll like new.",
    ],
    cover: "/images/work/break-away-1.jpg",
    gallery: [
      { src: "/images/work/break-away-3.jpg", alt: "Room full of recovered Olhausen tables at Break-Away Billiards" },
      { src: "/images/work/break-away-2.jpg", alt: "Freshly recovered Olhausen tables near the bar at Break-Away Billiards" },
    ],
    venue: {
      description:
        "A spacious billiards hall in Clinton with a room full of classic Olhausen tables, Break-Away Billiards is a welcoming spot for league nights and walk-in play.",
      address: "104 Sterling St",
      cityStateZip: "Clinton, MA 01510",
    },
  },
  {
    slug: "billiards-cafe",
    title: "Billiards Cafe",
    logo: "/images/work/billiards-cafe.png",
    location: "Ayer, MA",
    summary:
      "Tournament prep for a competitive venue, including precision leveling and fresh cloth.",
    scope: [
      "Recovered tournament tables with Simonis 860HR in Tournament Blue",
      "Precision-leveled every table to spec",
      "Tuned cushions for consistent rebound",
      "Same-week turnaround for event deadline",
    ],
    story: [
      "Billiards Cafe was hosting a regional tournament and needed every table playing identically under a tight deadline. Consistency was everything — players would notice even the smallest variation.",
      "We recovered the tournament tables with Simonis 860HR in Tournament Blue, precision-leveled each one, and tuned the cushions for uniform rebound across the floor. The venue was event-ready with days to spare.",
    ],
    cover: "/images/hero-2.jpg",
    gallery: [
      { src: "/images/hero-measure.jpg", alt: "Precision leveling at Billiards Cafe" },
      { src: "/images/our-work.jpg", alt: "Tournament-ready tables at Billiards Cafe" },
    ],
    venue: {
      description:
        "A competitive venue in Ayer that regularly hosts regional tournaments, Billiards Cafe is built for serious players who demand consistent, tournament-grade tables.",
      address: "22 Main Street",
      cityStateZip: "Ayer, MA 01432",
      website: "https://www.billiardscafema.com",
      websiteLabel: "billiardscafema.com",
    },
  },
  {
    slug: "red-dragon-billiards",
    title: "Red Dragon Billiards Club & Training Center",
    bannerTitle: "Red Dragon Billiards",
    location: "Harvard, MA",
    summary:
      "Full setup of a dedicated training facility outfitted with a mix of coin-op, Diamond, and 9' Brunswick tables tuned for instruction and serious practice.",
    scope: [
      "Set up two coin-op tables, three Diamond tables, and two 9' Brunswick tables",
      "Recovered every table in Simonis 860 cloth",
      "Precision-leveled slate to coaching spec",
      "Tuned cushions for consistent practice play",
    ],
    story: [
      "Red Dragon set out to build more than a pool hall — they wanted a true training center where players could sharpen their game on tables that perform identically every time. Consistency across the room was the top priority.",
      "We outfitted the room with two coin-op tables, three Diamond tables, and two 9' Brunswick tables, recovered them in fast Simonis 860 cloth, and precision-leveled every slate so coaches and students could trust a true, repeatable roll on any table in the room.",
    ],
    cover: "/images/work/red-dragon-1.png",
    gallery: [
      { src: "/images/work/red-dragon-3.png", alt: "Room full of blue-felt tournament tables at Red Dragon Billiards" },
      { src: "/images/work/red-dragon-2.png", alt: "Freshly recovered Brunswick tables beneath the Red Dragon logo wall" },
    ],
    testimonial: {
      name: "Roy Pastor",
      role: "Owner, Red Dragon Billiards Club & Training Center",
      videoUrl: "https://www.youtube.com/watch?v=gWRK95chX7w",
      youtubeId: "gWRK95chX7w",
    },
    venue: {
      description:
        "A dedicated billiards club and training center in Harvard, Red Dragon pairs tournament-grade tables with a coaching-focused environment for players looking to level up their game.",
      address: "285 Ayer Rd",
      cityStateZip: "Harvard, MA 01451",
      website: "https://www.reddragonbilliards.com",
      websiteLabel: "reddragonbilliards.com",
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/**
 * Returns a title suitable for the space-constrained banner.
 *
 * Order of preference:
 * 1. An explicit `bannerTitle` override on the project.
 * 2. The full `title` if it's within `maxLength`.
 * 3. The portion of the title before a connector ("&", "-", "|", "—") if that
 *    shortened version fits — e.g. "Red Dragon Billiards Club & Training Center"
 *    becomes "Red Dragon Billiards Club". If still too long, it keeps dropping
 *    trailing words until it fits.
 * 4. A truncated version with an ellipsis as a last resort.
 */
export function getBannerTitle(
  project: Pick<Project, "title" | "bannerTitle">,
  maxLength = 22,
): string {
  if (project.bannerTitle) return project.bannerTitle

  const title = project.title.trim()
  if (title.length <= maxLength) return title

  // Cut at the first connector (handles "Club & Training Center" tails).
  const beforeConnector = title.split(/\s+[&|–—-]\s+/)[0].trim()

  // Drop trailing words until the result fits within maxLength.
  const words = beforeConnector.split(/\s+/)
  while (words.length > 1 && words.join(" ").length > maxLength) {
    words.pop()
  }
  const candidate = words.join(" ")

  if (candidate.length <= maxLength) return candidate

  // Last resort: hard truncate on a word boundary with an ellipsis.
  const truncated = candidate.slice(0, maxLength - 1)
  return `${truncated.slice(0, truncated.lastIndexOf(" ") || truncated.length).trim()}…`
}

