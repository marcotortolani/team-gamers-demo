import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getData } from '@/services/api-content'
import { getImageHeaderPost } from '@/utils/functions'
import tagGamer from '../../../public/assets/img/tag-team-gamers.webp'

export async function CardGamer({ path, gamerData, miniCard }) {
  // Hay que arreglar esto, para poder obtener la imagen el componente va a hacer
  // 1 petición por cada gamer, cada vez que se utilice este componente

  // let gamerImage = ''
  // if (!gamerData.imgSrc) {
  //   const { data } = await getData(
  //     `posts?per_page=1&categories=${gamerData.id}`
  //   )
  //   gamerImage = getImageHeaderPost(data[0])
  // }

  return (
    <Link
      className="relative w-full h-full flex justify-center items-center  hover:cursor-pointer "
      href={path + `/${gamerData.id}`}
    >
      <div
        className={`${
          miniCard
            ? 'w-5/6 min-w-[80px] max-w-[100px] sm:max-w-[120px] min-h-[120px] border-[3px]'
            : 'w-full max-w-[200px] aspect-[3/4] border-[6px]'
        } relative border-Secondary h-full bg-Secondary rounded-xl`}
      >
        {/* {gamerData && (
          <Image
            className={` absolute object-cover object-center w-full h-full rounded-[inherit]`}
            fill
            src={gamerData.imgSrc ? gamerData.imgSrc : gamerImage}
            alt={`Imágen de ${gamerData.name}`}
            loading="eager"
          />
        )} */}
      </div>

      <div
        className={`${
          miniCard ? 'w-full -bottom-2' : 'w-[110%] -bottom-6'
        } z-20 absolute flex items-center justify-center  object-cover  aspect-[150/42]`}
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
            miniCard ? ' text-lg text-shadow-sm' : ' text-2xl text-shadow-lg'
          } absolute bottom-0 w-5/6 h-full flex items-center justify-center uppercase  shadow-Black font-extrabold text-center overflow-hidden cursor-default pointer-events-none text-White`}
        >
          {gamerData.name}
        </h4>
      </div>
    </Link>
  )
}
