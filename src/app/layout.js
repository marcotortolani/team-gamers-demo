import './globals.css';
import { Oswald } from 'next/font/google';
import { StateProvider } from '@/providers/StateProvider';
import DownbarMobile from './components/ui/DownbarMobile';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata = {
  title: 'Team Gamers',
  description:
    'Portal de contenido para gamers. Diseñado y desarrollado por Media Moob',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={
          oswald.className +
          ` relative w-screen overflow-scroll overflow-x-hidden scroll-smooth flex flex-col items-center bg-Background `
        }
      >
        <div className="bg-image-pattern -z-10 absolute top-0 w-screen h-full opacity-30 bg-repeat bg-fill " />
        <Header />
        <StateProvider>{children}</StateProvider>
        <DownbarMobile />
        <Footer />
      </body>
    </html>
  );
}
