import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = 'https://masterbilliards.co'
const SITE_DESCRIPTION =
  'Professional pool table moving, recovery, re-felting, repairs, leveling, and assembly serving all of New England. Family-run, fully insured. Call 603-231-5345.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Master Billiards | Pool Table Moving, Recovery & Repair in NH & MA',
    template: '%s | Master Billiards',
  },
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  applicationName: 'Master Billiards',
  keywords: [
    'pool table movers',
    'pool table moving NH',
    'pool table recovery',
    'pool table re-felting',
    'pool table repair',
    'pool table leveling',
    'pool table assembly',
    'billiards table service',
    'pool table movers Plaistow NH',
    'pool table movers near me',
    'Southern New Hampshire',
    'Northern Massachusetts',
  ],
  authors: [{ name: 'Master Billiards, LLC' }],
  creator: 'Master Billiards, LLC',
  publisher: 'Master Billiards, LLC',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: 'Master Billiards | Pool Table Moving, Recovery & Repair in NH & MA',
    description: SITE_DESCRIPTION,
    siteName: 'Master Billiards',
    url: SITE_URL,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-recover.png',
        width: 1626,
        height: 967,
        alt: 'Master Billiards — professional pool table services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Billiards | Pool Table Moving, Recovery & Repair in NH & MA',
    description: SITE_DESCRIPTION,
    images: ['/images/hero-recover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Master Billiards, LLC',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: '+1-603-231-5345',
    email: 'kendra@masterbilliards.co',
    image: `${SITE_URL}/images/hero-recover.png`,
    logo: `${SITE_URL}/icon.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Plaistow',
      addressRegion: 'NH',
      postalCode: '03865',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.8362,
      longitude: -71.0939,
    },
    sameAs: ['https://www.youtube.com/@MasterBilliardsLLC'],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Rockingham County, NH' },
      { '@type': 'AdministrativeArea', name: 'Strafford County, NH' },
      { '@type': 'AdministrativeArea', name: 'Essex County, MA' },
      { '@type': 'AdministrativeArea', name: 'Middlesex County, MA' },
      { '@type': 'City', name: 'Plaistow, NH' },
      { '@type': 'City', name: 'Haverhill, MA' },
      { '@type': 'City', name: 'Newburyport, MA' },
      { '@type': 'City', name: 'Amesbury, MA' },
      { '@type': 'City', name: 'Salisbury, MA' },
      { '@type': 'City', name: 'Seabrook, NH' },
      { '@type': 'City', name: 'Exeter, NH' },
      { '@type': 'City', name: 'Portsmouth, NH' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pool Table Services',
      itemListElement: [
        'Pool Table Moving',
        'Pool Table Recovery & Re-Felting',
        'Pool Table Repair',
        'Pool Table Leveling',
        'Pool Table Assembly',
        'Pool Table Restoration',
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service },
      })),
    },
  }

  return (
    <html lang="en" className={`bg-background ${inter.className}`}>
      <body className="antialiased min-h-dvh pb-16 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="G-YTMD5CGPFM" />}
    </html>
  )
}
