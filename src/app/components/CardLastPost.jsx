import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImageMissing from './ImageMissing'
import ReactHtmlParser from 'react-html-parser'

export default function CardLastPost({ post, titleOnly }) {
  return (
    <Link
      className=" relative w-full h-fit "
      href={`/${post?.category}/${post?.id}`}
    >
      <div className={` relative w-full flex justify-center h-fit  gap-4`}>
        <div className="  relative w-[90%] aspect-[3/2] ">
          {post?.images.length > 0 ? (
            <Image
              className={` w-auto h-full md:w-full md:h-auto object-cover rounded-lg md:rounded-xl`}
              fill={true}
              sizes="(max-width: 350px)"
              src={post?.images[0]}
              alt={`Image ${post?.title}`}
            />
          ) : (
            <ImageMissing />
          )}
          {/* <div className=" z-0 absolute w-full h-full flex items-center justify-center ">
            <PlayCircleIcon color="white" size={60} />
          </div> */}
          <span className=" absolute top-3 left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 px-2 py-1 text-xs md:text-sm lg:text-base text-White bg-Black border-2 border-Secondary rounded-full ">
            Recién agregado
          </span>
        </div>

        <div className=" z-20 absolute bottom-4 w-5/6  h-full flex flex-col justify-end gap-2 md:gap-3 lg:gap-4 md:bottom-6 lg:bottom-8">
          <h3
            className={`text-White font-semibold line-clamp-1 uppercase text-start text-2xl md:text-3xl `}
          >
            <span className=" px-2 pr-4 md:pr-6 bg-Black box-decoration-clone leading-[3rem]">
              {ReactHtmlParser(post?.title)}
            </span>
          </h3>
          {!titleOnly && (
            <p
              className={
                ' font-medium text-xl md:text-2xl lg:text-2xl line-clamp-2 text-Black  overflow-hidden '
              }
            >
              <span className="px-2 pr-4 bg-White/90 box-decoration-clone leading-[2rem] md:leading-[2.3rem] lg:leading-[2.6rem]">
                {ReactHtmlParser(post?.excerpt)}
              </span>
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
