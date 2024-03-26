'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { configSiteStatic } from '../../../../configSiteStatic.js'
import SearchBar from './SearchBar'
import DropdownMenu from './DropdownMenu'

const { logoHorizontal } = configSiteStatic.images

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lowerPosition, setLowerPosition] = useState(0)

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
      className={` ${isNavbarVisible ? 'top-0 ' : ' -top-44 lg:-top-[10.5rem]  '} ${
        lowerPosition >= 50
          ? 'bg-white/20 shadow-md backdrop-filter backdrop-blur-md ring-1 ring-gray-600'
          : 'bg-transparent'
      } z-50  rounded-b-xl  pb-2 transition-all duration-300 ease-in-out fixed w-screen  h-fit flex justify-center`}
    >
      <div className="  w-full flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-6 ">
        <div className="w-full h-auto py-4 bg-Primary flex items-center justify-center ">
          <Link href={'/'} className=" w-2/5 max-w-[250px] h-auto">
            <Image
              width={250}
              height={100}
              src={logoHorizontal}
              alt="Logo Horizontal Team Gamers"
              priority
            />
          </Link>
        </div>

        <SearchBar isVisible={isNavbarVisible} />
        <DropdownMenu />
      </div>
    </header>
  )
}
