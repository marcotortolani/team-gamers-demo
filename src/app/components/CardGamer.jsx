import React from 'react'
import Link from 'next/link'

export async function CardGamer({ path, gamerData, miniCard }) {
  return (
    <Link
      className="z-30 relative w-full h-full flex justify-center items-center hover:cursor-pointer  "
      href={path + `/${gamerData.id}/1`}
    >
      <div
        className={`${
          miniCard
            ? 'w-full min-w-[80px] max-w-[120px] md:max-w-[180px] lg:max-w-[220px]  aspect-square md:aspect-video border-[0px] '
            : 'w-full max-w-[200px] aspect-[3/2] border-[0px]'
        } relative flex items-center border-transparent shadow-inner hover:scale-x-110 transition-all duration-200 ease-in-out shadow-black h-full bg-gradient-to-br from-Secondary to-pink-800 rounded-xl md:rounded-2xl`}
      >
        <div
          className={` z-20 relative w-full flex items-center justify-center  object-cover `}
        >
          <h4
            className={`${
              miniCard ? ' text-lg lg:text-xl text-shadow' : ' text-lg md:text-2xl text-shadow'
            }  w-5/6 line-clamp-2  flex items-center justify-center uppercase  shadow-Black font-extrabold text-center overflow-hidden cursor-default pointer-events-none text-White`}
          >
            {gamerData.name}
          </h4>
        </div>
      </div>
    </Link>
  )
}
