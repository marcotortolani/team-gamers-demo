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
              className={` w-auto h-full md:w-full md:h-auto object-cover rounded-lg`}
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
          <span className=" absolute top-3 left-3 px-2 py-1 text-xs text-White bg-Black border-2 border-Secondary rounded-full ">
            Recién agregado
          </span>
        </div>

        <div className=" z-20 absolute bottom-0 w-5/6  h-full flex flex-col justify-end gap-2 pb-4">
          <h3
            className={`text-White font-semibold line-clamp-1 uppercase text-start text-2xl `}
          >
            <span className=" px-2 pr-4 bg-Black box-decoration-clone leading-[3rem]">
              {ReactHtmlParser(post?.title)}
            </span>
          </h3>
          {!titleOnly && (
            <p
              className={
                ' lowercase font-medium text-xl md:text-2xl lg:text-base line-clamp-2 text-Black  overflow-hidden '
              }
            >
              <span className="px-2 pr-4 bg-White/90 box-decoration-clone leading-[2rem]">
                {ReactHtmlParser(post?.excerpt)}
              </span>
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
