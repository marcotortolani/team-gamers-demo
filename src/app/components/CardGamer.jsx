import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tagGamer from '../../../public/assets/img/tag-team-gamers.webp'

export function CardGamer({ gamerData, miniCard }) {
  return (
    <Link
      className="relative w-full h-full flex justify-center items-center hover:cursor-pointer "
      href={gamerData.href}
    >
      <Image
        className={`${
          miniCard
            ? 'w-5/6 min-w-[80px] max-w-[100px] sm:max-w-[120px] border-[3px]'
            : 'w-full max-w-[200px] border-[6px]'
        } border-Secondary h-auto rounded-xl`}
        width={90}
        height={90}
        src={gamerData.imgSrc}
        alt={`Gamer ${gamerData.name}`}
        loading="eager"
      />

      <div
        className={`${
          miniCard ? 'w-full -bottom-2' : 'w-[110%] -bottom-6'
        } z-20 absolute  object-cover  aspect-[150/42]`}
      >
        <Image
          className="w-full"
          src={tagGamer}
          alt={'Tag Image Modern Gamer'}
          width={'100%'}
          height={'auto'}
        />
        <h4
          className={`${
            miniCard
              ? 'bottom-1 text-lg text-shadow-sm'
              : ' bottom-3 text-3xl text-shadow-lg'
          } absolute  w-full uppercase  shadow-Black font-extrabold text-center overflow-hidden cursor-default pointer-events-none text-White`}
        >
          {gamerData.name}
        </h4>
      </div>
    </Link>
  )
}
