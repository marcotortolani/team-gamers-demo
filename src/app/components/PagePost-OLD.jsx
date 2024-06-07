import React from 'react'
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'
import { cleanDataPosts } from '@/utils/functions'
import {
  getDataPostById,
  getDataCategoryByPostId,
} from '@/services/api-content'

import ImageMissing from './ImageMissing'
import ButtonLikeFav from './ui/ButtonLikeFav'

export default async function PagePostNew({ id }) {
  const dataPost = await getDataPostById(id)
  const categoryData = await getDataCategoryByPostId(`${id}&parent=0`)

  const contentPostParsed = ReactHtmlParser(dataPost?.content.rendered)

  const post = cleanDataPosts({
    posts: new Array(dataPost),
    categorySlug: categoryData[0].slug,
  })

  return (
    <section className=" w-full lg:max-w-4xl bg-white flex flex-col items-center gap-4">
      <div
        className={` w-full aspect-video relative flex flex-col items-center justify-center rounded-lg lg:rounded-xl`}
      >
        {post[0].images.length > 0 ? (
          <div className=" w-full h-full  rounded-[inherit]">
            <Image
              className={`  w-full h-auto  object-cover rounded-[inherit]  `}
              fill={true}
              src={post[0].images[0]}
              alt="Imagen Header Post"
              loading="eager"
            />
          </div>
        ) : (
          <ImageMissing text={''} colorBg={'bg-Primary'} />
        )}
        <div className=" z-10 absolute top-0 w-full h-full bg-black opacity-30 line-clamp-1 content-normal rounded-[inherit]" />

        <div className="z-50 absolute top-0 m-2 p-2 right-0 w-10 h-10 flex items-center justify-center bg-Black/80 rounded-full">
          <ButtonLikeFav post={post[0]} />
        </div>
      </div>
      <div className=" z-20 w-full h-full py-[2%]">
        <h2
          className={
            ' mb-2 uppercase font-normal pointer-events-none cursor-default line-clamp-2 text-pretty text-xl md:text-2xl lg:text-3xl text-White text-left  '
          }
        >
          <span className=" px-2 lg:px-4 pr-4 bg-Secondary box-decoration-clone leading-[2.2rem] md:leading-[2.6rem] lg:leading-[3.2rem] ">
            {ReactHtmlParser(post[0]?.title)}
          </span>
        </h2>
      </div>
      <div className=" post-parsed text-lg font-normal md:text-xl lg:text-2xl leading-6 md:leading-8 lg:leading-9 ">
        {contentPostParsed}
      </div>
    </section>
  )
}
