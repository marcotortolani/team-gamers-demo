'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '600'],
  display: 'swap',
  fallback: ['sans-serif'],
})

export default function Breadcrumb({ homeElement, separator }) {
  const paths = usePathname()
  //console.log(paths.split("/"));
  // const pathArray = paths.split("/");
  // const pathPostId = pathArray[pathArray.length - 1];
  // console.log(pathPostId);

  const pathNames = paths
    .split('/')
    .map((path) => (path === '' ? homeElement : path))
    .filter((path) => !/^\d+$/.test(path))

  return (
    <div className={poppins.className + ' z-20  w-full h-10 flex md:p-0  '}>
      <ul className=" w-full h-full flex">
        {pathNames.map((el, i) => (
          <li key={i} className=" flex items-center">
            <Link
              className={`${
                i % 2 !== 0 ? 'bg-SecondaryDarker' : ' bg-Primary'
              }  text-White px-4 py-1 capitalize font-medium text-sm md:text-base cursor-pointer rounded-full`}
              href={`${
                i === 0
                  ? '/'
                  : i === 1
                  ? `/${pathNames[1]}`
                  : i === 2
                  ? `/${pathNames[1]}/${pathNames[2]}`
                  : ''
              }`}
              target="_self"
            >
              {el}
            </Link>
            {i + 1 < pathNames.length && (
              <span className=" mx-1 text-lg font-normal  ">{separator}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
