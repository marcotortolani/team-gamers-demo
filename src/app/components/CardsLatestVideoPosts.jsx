import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'
import { getPostsByCategoryId } from '@/services/api-content'
import { cleanDataPosts, getLatestPosts } from '@/utils/functions'
import { PlayCircleIcon } from 'lucide-react'
import ImageMissing from './ImageMissing'

export default async function CardsLatestVideosPosts({
  id,
  qty,
  categorySlug,
  verticalAspect,
}) {
  const dataPosts = await getPostsByCategoryId({ id })

  const cardPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: dataPosts, qty: qty }),
    categorySlug,
  })

  return (
    <div className=" w-screen h-full flex justify-center">
      <ul className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit lg:max-h-[800px] px-4 py-4 lg:my-4 grid grid-cols-2 grid-rows-1  gap-3 lg:gap-4 select-none">
        {cardPosts?.map((post) => (
          <li
            key={post.id}
            className={` w-full h-full col-span-1 row-span-1  relative flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
          >
            <Link className="w-full h-full" href={categorySlug + `/${post.id}`}>
              <div className=" relative z-0 w-full h-full rounded-xl md:rounded-2xl lg:rounded-3xl">
                {post.images.length > 0 ? (
                  <Image
                    className={`${
                      verticalAspect ? 'aspect-[5/6]' : 'aspect-[4/3]'
                    } relative w-full  object-center object-cover rounded-[inherit] cursor-default pointer-events-none select-none`}
                    width={220}
                    height={220}
                    src={post.images[0]}
                    alt={`Image ${post.title}`}
                  />
                ) : (
                  <ImageMissing />
                )}
                <div className=" z-10 absolute top-0 w-full h-full flex items-center justify-center bg-black/30 rounded-[inherit] ">
                  <PlayCircleIcon color="white" size={verticalAspect ? 50 : 30} />
                </div>
              </div>
              <div className=" z-20 w-full h-full p-2 absolute bottom-0  pointer-events-none select-none">
                <h3
                  className={` absolute bottom-3 w-5/6 text-Black line-clamp-1 uppercase font-medium text-start text-[0.6rem] sm:text-base md:text-lg lg:text-2xl pointer-events-none select-none`}
                >
                  <span className=" px-2 pr-3 bg-White/90 box-decoration-clone leading-[1.2rem]">
                    {ReactHtmlParser(post.title)}
                  </span>
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
