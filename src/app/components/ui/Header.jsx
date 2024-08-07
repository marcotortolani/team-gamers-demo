'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { configSiteStatic } from '../../../../configSiteStatic.js'
import SearchBar from './SearchBar'
import DropdownMenu from './DropdownMenu'
import { HomeIcon, HeartIcon, Gamepad2 } from 'lucide-react'

const { logoHorizontal } = configSiteStatic.images

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lowerPosition, setLowerPosition] = useState(0)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY

    if (scrollPosition > lowerPosition + 100) {
      setLowerPosition(scrollPosition)
      setIsNavbarVisible(false)
    }
    if (scrollPosition + 50 <= lowerPosition) {
      setLowerPosition(scrollPosition)
      setIsNavbarVisible(true)
    }
  }, [lowerPosition])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <header
      className={` ${
        isNavbarVisible ? 'top-0 ' : ' -top-44 lg:-top-[10.5rem]  '
      } ${
        lowerPosition >= 50
          ? 'bg-white/20 shadow-md backdrop-filter backdrop-blur-md ring-1 ring-gray-600'
          : 'bg-transparent'
      } z-[200] rounded-b-xl  pb-2 transition-all duration-300 ease-in-out fixed w-screen  h-fit flex justify-center`}
    >
      <div className="  w-full flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-6 ">
        <div className="w-full h-auto py-4 bg-Primary flex items-center justify-center ">
          <div className=" w-full max-w-2xl h-fit flex items-center justify-center lg:justify-between">
            <IconTab
              href="/"
              title="Home section"
              icon={HomeIcon}
              path={pathname}
            />
            <Link
              href={'/'}
              className=" relative w-full max-w-[250px] h-[3rem] md:h-[3.5rem] lg:h-[4rem] cursor-pointer"
            >
              <Image
                className=" mx-auto w-auto h-full"
                width={250}
                height={64}
                src={logoHorizontal}
                alt="Logo Horizontal Team Gamers"
                priority
              />
            </Link>
            <div className=" flex items-center justify-center gap-4">
              <IconTab
                title="Gamers section"
                href="/gaming/gamers"
                icon={Gamepad2}
                path={pathname}
              />
              <IconTab
                title="Favourites section"
                href="/favoritos"
                icon={HeartIcon}
                path={pathname}
              />
            </div>
          </div>
        </div>

        <SearchBar isVisible={isNavbarVisible} />
        <DropdownMenu />
      </div>
    </header>
  )
}

export function IconTab({ title, href, icon, path }) {
  const IconComponent = icon
  const isActive = path === href || (href === '/' && path === '')
  return (
    <Link
      className={`${
        isActive ? 'bg-Black' : null
      } hidden lg:flex w-9 h-9 p-[0.35rem] transition-colors duration-200 ease-in-out items-center justify-center rounded-md`}
      href={href}
      aria-label={title}
    >
      <IconComponent color="white" width="100%" height="100%" />
    </Link>
  )
}
