'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { configSiteStatic } from '../../../../configSiteStatic.js'
//import SidebarMenu from '../../components-old/ui/SidebarMenu';
//import BurguerMenu from '../../components-old/ui/BurguerMenu';
import Navbar from '../../components-old/ui/Navbar'
import SearchBar from './SearchBar'
import DropdownMenu from './DropdownMenu'

const { logoHorizontal, logoVertical } = configSiteStatic.images

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lowerPosition, setLowerPosition] = useState(0)
  //const [sectionName, setSectionName] = useState('')
  //const [sidebarOpen, setSidebarOpen] = useState(false);
  //const path = usePathname()

  // function openSidebar() {
  //   setSidebarOpen(true);
  // }
  // function closeSidebar() {
  //   setSidebarOpen(false);
  // }

  // set the section name to use it in header
  // useEffect(() => {
  //   if (path === '/') {
  //     setSectionName('home')
  //   }
  //   if (path !== '/') {
  //     setSectionName(path.split('/')[1])
  //   }
  // }, [path])

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY

    if (scrollPosition > lowerPosition + 100) {
      setLowerPosition(scrollPosition)
      setIsNavbarVisible(false)
      //setSidebarOpen(false);
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
      className={` ${isNavbarVisible ? 'top-0 ' : ' -top-44  '} ${
        lowerPosition >= 50
          ? 'bg-white/20 shadow-md backdrop-filter backdrop-blur-md ring-1 ring-gray-600'
          : 'bg-transparent'
      } z-50  rounded-b-xl  pb-2 transition-all duration-200 ease-in-out fixed lg:top-0 lg:absolute w-full h-fit flex justify-center`}
    >
      <div className=" absolute top-4 lg:top-0 w-screen h-20 hidden lg:flex items-center justify-evenly bg-Primary shadow-md shadow-gray-800  rounded-b-2xl">
        <div className=" w-1/6 h-full flex items-center justify-center  cursor-default pointer-events-none">
          <Link
            href={'/'}
            className=" w-fit h-1/2 flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
          >
            {logoHorizontal && (
              <Image
                width={250}
                height={250}
                className="w-auto h-full"
                src={logoHorizontal}
                alt="Logo Team Gamers"
              />
            )}
          </Link>
        </div>
        <Navbar />
        <SearchBar />
      </div>

      {/* <SidebarMenu
        isVisible={isNavbarVisible}
        isOpen={sidebarOpen}
        onOpen={openSidebar}
        onClose={closeSidebar}
      /> */}

      <HeaderMobile />
    </header>
  )
}

export function HeaderMobile() {
  return (
    <div className=" lg:hidden  w-full max-w-[460px] flex flex-col items-center justify-center gap-3 ">
      <div className="w-full h-full py-4 bg-Primary flex items-center justify-center ">
        {/* <BurguerMenu onOpen={openSidebar} /> */}
        <Link href={'/'} className=" w-2/5 max-w-[250px]">
          <Image
            width={250}
            height={100}
            src={logoHorizontal}
            alt="Logo Horizontal Team Gamers"
          />
        </Link>
      </div>

      <SearchBar />
      <DropdownMenu />
    </div>
  )
}
