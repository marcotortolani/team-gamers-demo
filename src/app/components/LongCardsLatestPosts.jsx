import React from 'react'
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'

import { getPostsByCategoryId } from '@/services/api-content.js'
import { getLatestPosts, cleanDataPosts } from '@/utils/functions.js'
import ImageMissing from './ImageMissing.jsx'
import ButtonSeePost from './ui/ButtonSeePost.jsx'

//const tagIDVideoPost = 14;

export default async function LongCardsLatestPosts({
  id,
  qty,
  categorySlug,
  tagExclude = 14,
}) {
  const { data } = await getPostsByCategoryId({ id, tagExclude: tagExclude })

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: data, qty: qty }),
    categorySlug: categorySlug,
  })

  return (
    <div className=" w-full  h-full flex justify-center ">
      <ul className=" w-full max-w-2xl h-full  flex flex-col items-center gap-2 md:gap-6">
        {latestPosts?.map((post, index) => (
          <li
            key={post.id}
            className={` relative w-full h-full max-h-[200px] md:min-h-[300px] md:max-h-[300px] lg:max-h-[380px] p-4 lg:p-8 my-2 mt-0 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 rounded-xl md:rounded-xl lg:rounded-2xl ${
              index % 2 !== 0 ? 'bg-Primary ' : ' bg-Secondary  '
            } `}
          >
            <div
              className={`relative w-full order-last col-span-1 lg:col-span-2 `}
            >
              {post.images.length > 0 ? (
                <Image
                  className={` absolute w-full h-full  object-center object-cover  rounded-lg md:rounded-xl lg:rounded-2xl`}
                  fill
                  sizes="(max-width: 350px)"
                  src={post.images[0]}
                  alt={`Image ${post.title}`}
                />
              ) : (
                <ImageMissing />
              )}
              <div className=" absolute bottom-0 w-full h-full pb-2 px-2 md:pl-3 md:pb-3  flex flex-col justify-end ">
                <h3
                  className={`${
                    index % 2 !== 0 ? 'text-White' : 'text-Black'
                  } font-semibold line-clamp-2 uppercase text-start text-base md:text-lg lg:text-xl `}
                >
                  <span
                    className={`${
                      index % 2 !== 0 ? 'bg-Black/80' : 'bg-White/80'
                    } px-1 pr-2 box-decoration-clone leading-[1.7rem] md:leading-[1.9rem] lg:leading-[2.1rem]`}
                  >
                    {ReactHtmlParser(post.title)}
                  </span>
                </h3>
              </div>
            </div>

            <div className=" relative col-span-1 lg:col-span-2 h-full flex flex-col justify-between gap-2 md:gap-2 lg:gap-4 ">
              <p
                className={`${
                  index % 2 !== 0 ? 'text-White' : 'text-Black'
                } w-full text-xs md:text-lg lg:text-lg line-clamp-6 md:line-clamp-[7] lg:line-clamp-[8] `}
              >
                {ReactHtmlParser(post.excerpt)}
              </p>

              <div className=" z-20 bottom-0 w-full h-1/6 flex items-center justify-center">
                <ButtonSeePost
                  text="Ver nota"
                  href={`/${post.category}/${post.id}`}
                  style={index % 2 !== 0 ? 'outlineSky' : 'outlineViolet'}
                  size="xs"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
