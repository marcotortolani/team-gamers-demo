import { Oswald } from 'next/font/google'
import dynamic from 'next/dynamic'
import Providers from '@/providers/Providers'

const Header = dynamic(() => import('./components/ui/Header'))
const Footer = dynamic(() => import('./components/ui/Footer'))
const DownbarMobile = dynamic(() => import('./components/ui/DownbarMobile'))
import './globals.css'
import ChatBot from './components/ChatBot'

const oswald = Oswald({ subsets: ['latin'], preload: true })

export const metadata = {
  title: 'Team Gamers',
  description:
    'Portal de contenido para gamers. Diseñado y desarrollado por Media Moob',
  openGraph: {
    title: 'Team Gamers',
    description:
      'Portal de contenido para gamers. Diseñado y desarrollado por Media Moob',
    url: 'https://ve.movistar.teamgamers.club/',
    siteName: 'TeamGamers',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={
          oswald.className +
          ` z-20 relative w-screen overflow-scroll overflow-x-hidden scroll-smooth flex flex-col items-center bg-Background `
        }
      >
        <div className="bg-image-pattern -z-50 absolute top-0 w-screen h-full opacity-40 bg-repeat bg-fill " />
        <Header />
        <Providers>{children}</Providers>
        <DownbarMobile />
        <ChatBot />
        <Footer />
      </body>
    </html>
  )
}
