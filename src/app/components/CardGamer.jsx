import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tagGamer from '../../../public/assets/img/tag-team-gamers.webp'

export async function CardGamer({ path, gamerData, miniCard }) {
  return (
    <Link
      className="relative w-full h-full flex justify-center items-center  hover:cursor-pointer "
      href={path + `/${gamerData.id}/1`}
    >
      <div
        className={`${
          miniCard
            ? 'w-5/6 min-w-[80px] max-w-[100px] aspect-square sm:max-w-[120px] border-[0px]'
            : 'w-full max-w-[200px] aspect-[3/2] border-[0px]'
        } relative flex items-center border-transparent shadow-inner shadow-black h-full bg-gradient-to-br from-Secondary to-pink-800 rounded-xl`}
      >
        <div
          className={`${
            miniCard ? 'w-full ' : 'w-[100%] '
          } z-20 relative flex items-center justify-center  object-cover  aspect-[150/42]`}
        >
          {/* <Image
            className="w-full"
            src={tagGamer}
            alt={'Tag Image Modern Gamer'}
            width={'100%'}
            height={'auto'}
          /> */}
          <h4
            className={`${
              miniCard ? ' text-lg text-shadow' : ' text-2xl text-shadow'
            }  w-5/6 line-clamp-2 flex items-center justify-center uppercase  shadow-Black font-extrabold text-center overflow-hidden cursor-default pointer-events-none text-White`}
          >
            {gamerData.name}
          </h4>
        </div>
      </div>
    </Link>
  )
}
