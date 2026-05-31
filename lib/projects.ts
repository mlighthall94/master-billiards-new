export interface Project {
  slug: string
  title: string
  logo: string
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
}

export const projects: Project[] = [
  {
    slug: "granite-state-billiards",
    title: "Granite State Billiards",
    logo: "/images/work/granite-state-billiards.png",
    location: "Manchester, NH",
    summary:
      "A full 12-table room outfitted with new Simonis cloth and precision-leveled slate for league play.",
    scope: [
      "Recovered 12 tables with Simonis 860 cloth",
      "Re-leveled three-piece slate to tournament spec",
      "Replaced cushions on six tables",
      "Ongoing seasonal maintenance contract",
    ],
    story: [
      "Granite State Billiards came to us ahead of their fall league season with a room full of tables that hadn't been touched in years. The cloth was worn through in the break areas and several tables had developed a noticeable roll.",
      "Over the course of a week, our team recovered all twelve tables with tournament-grade Simonis 860, re-leveled every slate seam, and rebuilt the cushions on the tables that saw the heaviest play. The result is a room that now hosts sanctioned league nights with confidence.",
    ],
    cover: "/images/hero-modern.jpg",
    gallery: [
      { src: "/images/hero-2.jpg", alt: "Row of recovered league tables at Granite State Billiards" },
      { src: "/images/our-work.jpg", alt: "Close-up of new tournament cloth installation" },
      { src: "/images/hero-measure.jpg", alt: "Technician leveling slate at Granite State Billiards" },
    ],
  },
  {
    slug: "seacoast-cue-club",
    title: "Seacoast Cue Club",
    logo: "/images/work/seacoast-cue-club.png",
    location: "Portsmouth, NH",
    summary:
      "Relocation and setup of a private cue club, including a careful move of two antique tables.",
    scope: [
      "Disassembled and moved two antique tables",
      "Refinished original rails and trim",
      "Installed new tournament blue cloth",
      "Set up break lighting over each table",
    ],
    story: [
      "When the Seacoast Cue Club moved to a new waterfront location, they needed their two antique tables relocated without a scratch. These were one-of-a-kind pieces with original woodwork, so every step required extra care.",
      "We fully disassembled both tables, transported the slate and frames separately, and reassembled everything on-site. After re-leveling and dressing the tables in tournament blue, the club reopened with its prized tables looking better than ever.",
    ],
    cover: "/images/hero-bar.jpg",
    gallery: [
      { src: "/images/hero-red.jpg", alt: "Antique table restored at Seacoast Cue Club" },
      { src: "/images/their-work.jpg", alt: "Detail of refinished rails" },
    ],
  },
  {
    slug: "north-shore-billiards",
    title: "North Shore Billiards",
    logo: "/images/work/north-shore-billiards.png",
    location: "Danvers, MA",
    summary:
      "New install of eight 9-foot tables for a brand-new billiards hall on the North Shore.",
    scope: [
      "Delivered and assembled eight 9-foot tables",
      "Installed new cloth across the floor",
      "Calibrated rail speed and pocket cut",
      "Trained staff on basic upkeep",
    ],
    story: [
      "North Shore Billiards opened its doors with a clean slate — quite literally. We delivered and assembled eight brand-new 9-foot tables, dialing in rail speed and pocket geometry so every table played consistently across the room.",
      "Before opening night, we walked the staff through day-to-day upkeep so they could keep the tables looking sharp between our scheduled visits.",
    ],
    cover: "/images/hero.png",
    gallery: [
      { src: "/images/hero-modern.jpg", alt: "New table install at North Shore Billiards" },
      { src: "/images/hero-2.jpg", alt: "Finished room at North Shore Billiards" },
    ],
  },
  {
    slug: "merrimack-valley-pool",
    title: "Merrimack Valley Pool Hall",
    logo: "/images/work/merrimack-valley-pool.png",
    location: "Lowell, MA",
    summary:
      "Re-felting and cushion replacement to bring a beloved neighborhood hall back to life.",
    scope: [
      "Recovered 10 tables with new cloth",
      "Replaced worn cushions throughout",
      "Repaired damaged pockets and leather",
      "Deep-cleaned and polished rails",
    ],
    story: [
      "This neighborhood hall had been a Lowell staple for decades, but years of steady play had taken their toll. The owners wanted to honor the room's character while bringing the tables back to playable condition.",
      "We recovered ten tables, replaced the tired cushions, and repaired the leather pockets — preserving the hall's classic feel while restoring a true, fast roll on every table.",
    ],
    cover: "/images/our-work.jpg",
    gallery: [
      { src: "/images/hero-red.jpg", alt: "Recovered table at Merrimack Valley Pool Hall" },
      { src: "/images/hero-bar.jpg", alt: "Restored bar-area tables" },
    ],
  },
  {
    slug: "lakes-region-game-room",
    title: "Lakes Region Game Room",
    logo: "/images/work/lakes-region-game-room.png",
    location: "Laconia, NH",
    summary:
      "A custom residential game room build featuring a showpiece table with custom cloth.",
    scope: [
      "Assembled a custom 8-foot table",
      "Installed custom-color cloth",
      "Mounted overhead billiard lighting",
      "Added wall-mounted cue storage",
    ],
    story: [
      "A lakeside homeowner wanted a game room that felt like a true escape. We helped them select a showpiece 8-foot table and dressed it in a custom cloth color to match the room's palette.",
      "Beyond the table, we handled the overhead lighting and built-in cue storage, delivering a finished space ready for family game nights.",
    ],
    cover: "/images/hero-red.jpg",
    gallery: [
      { src: "/images/hero-modern.jpg", alt: "Custom residential game room in the Lakes Region" },
      { src: "/images/hero.png", alt: "Showpiece table with custom cloth" },
    ],
  },
  {
    slug: "boston-cue-sports",
    title: "Boston Cue Sports",
    logo: "/images/work/boston-cue-sports.png",
    location: "Cambridge, MA",
    summary:
      "Tournament prep for a competitive venue, including precision leveling and fresh cloth.",
    scope: [
      "Recovered tournament tables with Simonis 760",
      "Precision-leveled every table to spec",
      "Tuned cushions for consistent rebound",
      "Same-week turnaround for event deadline",
    ],
    story: [
      "Boston Cue Sports was hosting a regional tournament and needed every table playing identically under a tight deadline. Consistency was everything — players would notice even the smallest variation.",
      "We recovered the tournament tables with fast Simonis 760, precision-leveled each one, and tuned the cushions for uniform rebound across the floor. The venue was event-ready with days to spare.",
    ],
    cover: "/images/hero-2.jpg",
    gallery: [
      { src: "/images/hero-measure.jpg", alt: "Precision leveling at Boston Cue Sports" },
      { src: "/images/our-work.jpg", alt: "Tournament-ready tables at Boston Cue Sports" },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
