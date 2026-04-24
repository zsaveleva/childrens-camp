import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBar from '@/components/layout/MobileBar'
import { CAMP } from '@/lib/data'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: {
    default: `СОК «Ракета» — детский оздоровительный лагерь в Ленинградской области`,
    template: `%s | СОК «Ракета»`,
  },
  description: `${CAMP.shortDesc}. Смены круглый год. От 48 000 ₽. Звоните: ${CAMP.phone}`,
  keywords: ['детский лагерь', 'Ленинградская область', 'детский лагерь круглый год', 'отдых детей', 'лагерь Санкт-Петербург', 'Ракета', 'Карельский перешеек'],
  openGraph: {
    title: `СОК «Ракета» — незабываемый отдых на Карельском перешейке`,
    description: CAMP.shortDesc,
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        <Header />
        {children}
        <Footer />
        <MobileBar />
      </body>
    </html>
  )
}
