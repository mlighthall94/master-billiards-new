import type { LucideIcon } from "lucide-react"
import { Truck, Layers, Wrench, Ruler, PackageCheck, Sparkles } from "lucide-react"

export interface LandingContent {
  slug: string
  /** Short service name used in the form subject + reply */
  service: string
  icon: LucideIcon
  /** Hero background image */
  image: string
  imageAlt: string
  /** Small kicker above the headline */
  eyebrow: string
  headline: string
  subhead: string
  /** Three to four short selling points shown as a checklist */
  benefits: string[]
  /** "Why us" trust points with a stat/label */
  highlights: { stat: string; label: string }[]
  /** FAQ-style reassurance items */
  reassurance: { title: string; body: string }[]
  formTitle: string
  formSubtitle: string
}

export const PHONE_DISPLAY = "(603) 231-5345"
export const PHONE_HREF = "tel:+16032315345"

export const landingPages: LandingContent[] = [
  {
    slug: "pool-table-moving",
    service: "Pool Table Moving",
    icon: Truck,
    image: "/images/hero-team.png",
    imageAlt: "Master Billiards team moving a pool table",
    eyebrow: "Professional Pool Table Movers",
    headline: "Move Your Pool Table Without the Damage Risk",
    subhead:
      "Full disassembly, careful transport, and precision reassembly by an insured team that moves tables every single day.",
    benefits: [
      "Complete disassembly and professional reassembly",
      "Slate handled and re-leveled the right way",
      "Fully insured — your home and table are protected",
      "Local crew serving all of New England",
    ],
    highlights: [
      { stat: "1,000+", label: "Tables moved" },
      { stat: "Fully", label: "Insured & licensed" },
      { stat: "5.0", label: "Star-rated service" },
    ],
    reassurance: [
      {
        title: "Will my table be level after the move?",
        body: "Yes. Every move includes precision slate leveling at the destination so your table plays perfectly from day one.",
      },
      {
        title: "Do you move tables between floors or homes?",
        body: "Absolutely — across town or up and down stairs. We assess access ahead of time so there are no surprises on move day.",
      },
    ],
    formTitle: "Get Your Free Moving Quote",
    formSubtitle: "Tell us about your table and we'll send a fast, no-obligation quote.",
  },
  {
    slug: "recovery-refelting",
    service: "Re-felting & Recovery",
    icon: Layers,
    image: "/images/hero-recover.png",
    imageAlt: "Technician recovering a pool table with new felt",
    eyebrow: "Premium Cloth Recovery",
    headline: "Bring Your Table Back to Life With New Cloth",
    subhead:
      "Tournament-grade felt installed tight and true, in any color you want. Worn, torn, or faded cloth replaced like new.",
    benefits: [
      "Championship and tournament-grade cloth options",
      "Dozens of colors to match your room",
      "Tight, wrinkle-free installation that plays fast",
      "Rails recovered for a flawless, consistent finish",
    ],
    highlights: [
      { stat: "20+", label: "Cloth colors" },
      { stat: "Pro", label: "Tournament-grade felt" },
      { stat: "Same-day", label: "Service available" },
    ],
    reassurance: [
      {
        title: "What cloth do you use?",
        body: "We install premium worsted and woolen cloth from trusted brands, so you get the speed and durability that fits how you play.",
      },
      {
        title: "Can you match my room's colors?",
        body: "Yes — choose from a wide range of colors and we'll help you pick the perfect look for your space.",
      },
    ],
    formTitle: "Get Your Free Recovery Quote",
    formSubtitle: "Pick a color and we'll quote your re-felting fast.",
  },
  {
    slug: "repairs-restoration",
    service: "Repairs & Restoration",
    icon: Wrench,
    image: "/images/hero-2.jpg",
    imageAlt: "Pool table being repaired and restored",
    eyebrow: "Expert Repair & Restoration",
    headline: "Repair, Restore, and Renew Your Pool Table",
    subhead:
      "From bouncing cushions and worn pockets to full restorations of cherished tables — we make old tables play and look like new.",
    benefits: [
      "Cushion and rubber replacement for true bounce",
      "New pockets, leather, and hardware",
      "Frame, leg, and finish restoration",
      "Honest assessment — we fix what's needed",
    ],
    highlights: [
      { stat: "All", label: "Brands serviced" },
      { stat: "Antique", label: "Restoration experts" },
      { stat: "Free", label: "On-site assessment" },
    ],
    reassurance: [
      {
        title: "My cushions don't bounce — can you fix that?",
        body: "Yes. Dead cushions are one of the most common repairs we do. We replace the rubber so the ball rebounds true again.",
      },
      {
        title: "Do you restore older or antique tables?",
        body: "We specialize in it. We can refinish wood, replace worn parts, and bring heirloom tables back to their best.",
      },
    ],
    formTitle: "Get Your Free Repair Quote",
    formSubtitle: "Describe the issue and we'll diagnose the fix for you.",
  },
  {
    slug: "leveling-setup",
    service: "Leveling & Setup",
    icon: Ruler,
    image: "/images/hero-slate-work.png",
    imageAlt: "Technician leveling pool table slate",
    eyebrow: "Precision Leveling & Setup",
    headline: "A Perfectly Level Table That Plays True",
    subhead:
      "If your ball rolls off-line, the slate isn't level. We dial in precision leveling so every shot is fair and accurate.",
    benefits: [
      "Machinist-level precision slate leveling",
      "Seams set and filled for a seamless surface",
      "Eliminates drifting and rolling balls",
      "Tournament-quality playing surface",
    ],
    highlights: [
      { stat: "0.001\"", label: "Leveling precision" },
      { stat: "3-piece", label: "Slate specialists" },
      { stat: "Fast", label: "Same-week booking" },
    ],
    reassurance: [
      {
        title: "How do I know my table needs leveling?",
        body: "If balls drift or curve on a slow roll, your slate is off. We measure across the whole surface and correct it precisely.",
      },
      {
        title: "Can you fix a table someone else set up?",
        body: "Definitely. We frequently re-level and re-seam tables that were installed incorrectly by others.",
      },
    ],
    formTitle: "Get Your Free Leveling Quote",
    formSubtitle: "Tell us about your table and we'll get it playing true.",
  },
  {
    slug: "assembly-installation",
    service: "Assembly & Installation",
    icon: PackageCheck,
    image: "/images/hero-modern.jpg",
    imageAlt: "New pool table assembled and installed",
    eyebrow: "New Table Assembly & Install",
    headline: "Your New Table, Assembled and Dialed In Right",
    subhead:
      "Bought a new or used table? We deliver, assemble, and precision-level it so it's ready to play the day it arrives.",
    benefits: [
      "Expert assembly of new and used tables",
      "Slate installed, seamed, and leveled precisely",
      "New cloth installed if needed",
      "We handle the heavy lifting and setup",
    ],
    highlights: [
      { stat: "Any", label: "Brand or model" },
      { stat: "Precision", label: "Leveled & seamed" },
      { stat: "Insured", label: "& professional" },
    ],
    reassurance: [
      {
        title: "I bought a table online — can you set it up?",
        body: "Yes. We assemble tables purchased anywhere, install the slate properly, and level it for true play.",
      },
      {
        title: "Do you install the cloth too?",
        body: "We can install new cloth during assembly or work with what came with your table — your choice.",
      },
    ],
    formTitle: "Get Your Free Assembly Quote",
    formSubtitle: "Tell us about your table and we'll schedule your install.",
  },
  {
    slug: "maintenance-cleaning",
    service: "Maintenance & Cleaning",
    icon: Sparkles,
    image: "/images/hero-bar.jpg",
    imageAlt: "Clean, well-maintained pool table",
    eyebrow: "Maintenance & Cloth Care",
    headline: "Keep Your Table Playing Like New",
    subhead:
      "Regular tune-ups, deep cloth cleaning, and care that extends the life of your table and protects your investment.",
    benefits: [
      "Deep cloth cleaning and de-pilling",
      "Cushion, rail, and pocket inspection",
      "Re-leveling and tightening tune-up",
      "Advice to keep your table in top shape",
    ],
    highlights: [
      { stat: "Extend", label: "Cloth lifespan" },
      { stat: "Full", label: "Tune-up service" },
      { stat: "Flexible", label: "Scheduling" },
    ],
    reassurance: [
      {
        title: "How often should my table be serviced?",
        body: "For regular play, an annual tune-up keeps the cloth, cushions, and level in great shape and prevents costly issues.",
      },
      {
        title: "Can you clean cloth without replacing it?",
        body: "Yes. A professional deep clean removes chalk and debris and noticeably improves play without a full recovery.",
      },
    ],
    formTitle: "Get Your Free Maintenance Quote",
    formSubtitle: "Tell us about your table and we'll set up a tune-up.",
  },
]

export function getLandingPage(slug: string): LandingContent | undefined {
  return landingPages.find((p) => p.slug === slug)
}
