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
    default: `Лагерь «Созвездие» — детский оздоровительный лагерь в Ленинградской области`,
    template: `%s | Лагерь «Созвездие»`,
  },
  description: `${CAMP.shortDesc}. Смены 2025: июнь–август. От 48 000 ₽. Звоните: ${CAMP.phone}`,
  keywords: ['детский лагерь', 'Ленинградская область', 'летний лагерь 2025', 'отдых детей', 'лагерь Санкт-Петербург', 'Созвездие'],
  openGraph: {
    title: `Лагерь «Созвездие» — незабываемое лето в сосновом лесу`,
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
