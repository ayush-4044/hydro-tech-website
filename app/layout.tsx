import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'HYDRO TECH | Radhe Enterprise',
    template: '%s | HYDRO TECH',
  },

  description:
    'Premium Quality Quick Release Couplings (QRC) and hydraulic components manufactured by Radhe Enterprise, Rajkot.',

  keywords: [
    'hydraulic couplings',
    'quick release couplings',
    'QRC',
    'tractor parts',
    'hydraulic fittings',
    'agricultural machinery',
    'hydraulic components',
    'B2B hydraulic products',
    'Radhe Enterprise',
    'HYDRO TECH',
  ],

  applicationName: 'HYDRO TECH',

  generator: 'Next.js',

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#28282b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-svh antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && (
          <Analytics />
        )}
      </body>
    </html>
  )
}