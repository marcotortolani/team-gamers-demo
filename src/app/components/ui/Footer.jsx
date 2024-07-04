import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { configSiteStatic } from '../../../../configSiteStatic.js'
const { logoHorizontal } = configSiteStatic.images

export default function Footer() {
  return (
    <footer
      className={` -z-20 w-full min-h-[160px] max-h-[250px] py-4 mb-20 bg-Primary  flex flex-col items-center justify-around gap-2`}
    >
      <div className="w-full max-w-[200px] h-1/4 sm:h-2/5 md:h-1/3 flex items-center justify-center  cursor-default pointer-events-none">
        <Link
          href={'/'}
          className=" w-fit h-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
        >
          <Image
            width={250}
            height={250}
            className=" w-auto h-full"
            src={logoHorizontal}
            alt="Logo Epa Mujer"
          />
        </Link>
      </div>
      <div className=" h-1/3 flex flex-col items-center gap-0 pointer-events-none cursor-defaul select-none">
        <p className=" uppercase text-xs md:text-sm lg:text-base leading-4 text-White">
          Team Gamers es un sitio de Media Moob S.A.
        </p>
        <p className=" uppercase text-xs md:text-sm lg:text-base leading-4 text-White">
          Todos los derechos reservados.
        </p>
      </div>
      <Link
        href={'/tyc/'}
        className=" h-1/4 uppercase text-xs md:text-sm lg:text-base text-Secondary hover:text-SecondaryDark underline"
      >
        Términos y Condiciones
      </Link>
      <Link
        href={'http://dinamic.ve.movistar.teamgamers.club/landing/'}
        target="_blank"
        className=" h-1/4 uppercase text-xs md:text-sm lg:text-base text-Secondary hover:text-SecondaryDark underline"
      >
        Suscripción
      </Link>
    </footer>
  )
}
