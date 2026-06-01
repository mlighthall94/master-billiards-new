import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Master Billiards',
  description: 'Professional pool table services in NH and MA — moving, recovery, repairs, and setup.',
  generator: 'v0.app',
  openGraph: {
    title: 'Master Billiards',
    description: 'Professional pool table services in NH and MA — moving, recovery, repairs, and setup.',
    siteName: 'Master Billiards',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1456,
        height: 1088,
        alt: 'Master Billiards — professional pool table services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Billiards',
    description: 'Professional pool table services in NH and MA — moving, recovery, repairs, and setup.',
    images: ['/og-image.png'],
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
  return (
    <html lang="en" className={`bg-background ${inter.className}`}>
      <body className="antialiased min-h-dvh pb-16 lg:pb-0">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
