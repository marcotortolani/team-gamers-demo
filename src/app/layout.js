import { Oswald } from 'next/font/google'
import dynamic from 'next/dynamic'
import { StateProvider } from '@/providers/StateProvider'

const Header = dynamic(() => import('./components/ui/Header'))
const Footer = dynamic(() => import('./components/ui/Footer'))
const DownbarMobile = dynamic(() => import('./components/ui/DownbarMobile'))
import './globals.css'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Team Gamers',
  description:
    'Portal de contenido para gamers. Diseñado y desarrollado por Media Moob',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={
          oswald.className +
          ` relative w-screen overflow-scroll overflow-x-hidden scroll-smooth flex flex-col items-center bg-Background `
        }
      >
        <div className="bg-image-pattern -z-10 absolute top-0 w-screen h-full opacity-40 bg-repeat bg-fill " />
        <Header />
        <StateProvider>{children}</StateProvider>
        <DownbarMobile />
        <Footer />
      </body>
    </html>
  )
}
