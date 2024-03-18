import React from 'react'
import Image from 'next/image'
import ImageMissing from './ImageMissing'
import ReactHtmlParser from 'react-html-parser'
import ButtonSeePost from './ui/ButtonSeePost'

export default function CardLastModernPost({ post, titleOnly }) {
  return (
    <div className=" w-full h-fit flex justify-center">
      <div
        className={` relative w-[90%] aspect-square bg-Primary flex flex-col items-center rounded-xl`}
      >
        <div className="  relative w-full h-4/5 rounded-[inherit]">
          {post?.images.length > 0 ? (
            <Image
              className={` w-auto h-full md:w-full md:h-auto object-cover rounded-[inherit]`}
              fill={true}
              sizes="(max-width: 350px)"
              src={post?.images[0]}
              alt={`Image ${post?.title}`}
            />
          ) : (
            <ImageMissing />
          )}
          <h3
            className={`absolute bottom-2 left-2 text-Black font-semibold line-clamp-2 uppercase text-start text-lg `}
          >
            <span className=" px-2 pr-4 bg-White/80 box-decoration-clone leading-[2rem]">
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

        <div className=" h-1/5 flex items-center">
          <ButtonSeePost
            text="Ver nota"
            href={`/${post?.category}/${post?.id}`}
            style="outlineSky"
            size="xs"
          />
        </div>
      </div>
    </div>
  )
}
