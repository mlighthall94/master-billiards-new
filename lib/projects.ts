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
  /** Information about the venue itself, shown in an "About the venue" card */
  venue: {
    /** Short blurb describing the place */
    description: string
    /** Street address line */
    address: string
    /** City, state ZIP line */
    cityStateZip: string
    /** Public website URL */
    website: string
    /** Display label for the website link, e.g. "legendsbilliards.com" */
    websiteLabel: string
  }
}

export const projects: Project[] = [
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
      "A full 12-table room outfitted with new Simonis cloth and precision-leveled slate for league play.",
    scope: [
      "Recovered 12 tables with Simonis 860 cloth",
      "Re-leveled three-piece slate to tournament spec",
      "Replaced cushions on six tables",
      "Ongoing seasonal maintenance contract",
    ],
    story: [
      "Legends came to us ahead of their fall league season with a room full of tables that hadn't been touched in years. The cloth was worn through in the break areas and several tables had developed a noticeable roll.",
      "Over the course of a week, our team recovered all twelve tables with tournament-grade Simonis 860, re-leveled every slate seam, and rebuilt the cushions on the tables that saw the heaviest play. The result is a room that now hosts sanctioned league nights with confidence.",
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
    logo: "/images/work/backstreet-billiards.png",
    location: "Hudson, NH",
    summary:
      "Full table setup with custom brand decals — a new service that's quickly becoming popular.",
    scope: [
      "Recovered tables with green Simonis cloth",
      "Designed and applied custom Backstreet Bar & Grill rail decals",
      "Added Aramith and Simonis Cloth brand decals",
      "Re-leveled and tuned each table for league play",
    ],
    story: [
      "Backstreet Bar & Grill wanted their room to feel unmistakably their own, so we dressed every table in fresh green Simonis cloth and re-leveled the slate for true, consistent play across the floor.",
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
    logo: "/images/work/east-side-club.png",
    location: "Manchester, NH",
    summary:
      "Re-felting and cushion replacement to bring a beloved neighborhood club back to life.",
    scope: [
      "Recovered 10 tables with new cloth",
      "Replaced worn cushions throughout",
      "Repaired damaged pockets and leather",
      "Deep-cleaned and polished rails",
    ],
    story: [
      "This neighborhood club had been a Manchester staple for decades, but years of steady play had taken their toll. The owners wanted to honor the room's character while bringing the tables back to playable condition.",
      "We recovered ten tables, replaced the tired cushions, and repaired the leather pockets — preserving the club's classic feel while restoring a true, fast roll on every table.",
    ],
    cover: "/images/our-work.jpg",
    gallery: [
      { src: "/images/hero-red.jpg", alt: "Recovered table at East Side Club" },
      { src: "/images/hero-bar.jpg", alt: "Restored bar-area tables" },
    ],
    venue: {
      description:
        "A beloved neighborhood club that's been a Manchester staple for decades, East Side Club pairs classic character with ten freshly restored tables.",
      address: "350 Hanover Street",
      cityStateZip: "Manchester, NH 03104",
      website: "https://www.eastsideclubnh.com",
      websiteLabel: "eastsideclubnh.com",
    },
  },
  {
    slug: "breakaway-billiards",
    title: "Breakaway Billiards",
    logo: "/images/work/breakaway-billiards.png",
    location: "Clinton, MA",
    summary:
      "A custom build featuring a showpiece table with custom cloth and full room setup.",
    scope: [
      "Assembled a custom 8-foot table",
      "Installed custom-color cloth",
      "Mounted overhead billiard lighting",
      "Added wall-mounted cue storage",
    ],
    story: [
      "Breakaway Billiards wanted a flagship table that felt like a true centerpiece. We helped them select a showpiece 8-foot table and dressed it in a custom cloth color to match the room's palette.",
      "Beyond the table, we handled the overhead lighting and built-in cue storage, delivering a finished space ready for league nights and walk-in play.",
    ],
    cover: "/images/hero-red.jpg",
    gallery: [
      { src: "/images/hero-modern.jpg", alt: "Custom room build at Breakaway Billiards" },
      { src: "/images/hero.png", alt: "Showpiece table with custom cloth" },
    ],
    venue: {
      description:
        "A polished room in Clinton anchored by a custom showpiece table, Breakaway Billiards blends striking design with a welcoming spot for league nights and walk-in play.",
      address: "85 High Street",
      cityStateZip: "Clinton, MA 01510",
      website: "https://www.breakawaybilliardsma.com",
      websiteLabel: "breakawaybilliardsma.com",
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
      "Recovered tournament tables with Simonis 760",
      "Precision-leveled every table to spec",
      "Tuned cushions for consistent rebound",
      "Same-week turnaround for event deadline",
    ],
    story: [
      "Billiards Cafe was hosting a regional tournament and needed every table playing identically under a tight deadline. Consistency was everything — players would notice even the smallest variation.",
      "We recovered the tournament tables with fast Simonis 760, precision-leveled each one, and tuned the cushions for uniform rebound across the floor. The venue was event-ready with days to spare.",
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
    logo: "/placeholder.svg",
    location: "Harvard, MA",
    summary:
      "Full setup of a dedicated training facility, with tournament tables tuned for instruction and serious practice.",
    scope: [
      "Installed eight 9-foot tournament tables",
      "Dressed every table in Simonis 860 cloth",
      "Precision-leveled slate to coaching spec",
      "Tuned cushions for consistent practice play",
    ],
    story: [
      "Red Dragon set out to build more than a pool hall — they wanted a true training center where players could sharpen their game on tables that perform identically every time. Consistency across the room was the top priority.",
      "We installed and assembled eight 9-foot tournament tables, dressed them in fast Simonis 860 cloth, and precision-leveled every slate so coaches and students could trust a true, repeatable roll on any table in the room.",
    ],
    cover: "/images/hero-modern.jpg",
    gallery: [
      { src: "/images/hero-measure.jpg", alt: "Precision leveling a table at Red Dragon" },
      { src: "/images/our-work.jpg", alt: "Tournament tables ready for training at Red Dragon" },
    ],
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
