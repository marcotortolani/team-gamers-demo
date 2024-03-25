'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useContext } from 'react'
import { StateContext } from '@/providers/StateProvider'
import ReactHtmlParser from 'react-html-parser'
import ButtonLikeFav from './ui/ButtonLikeFav.jsx'

import ImageMissing from './ImageMissing.jsx'
import ButtonSeePost from './ui/ButtonSeePost.jsx'

export default function FavouriteCardPost() {
  const [favPosts, setFavPosts] = useState([])
  const { favouritePosts } = useContext(StateContext)

  useEffect(() => {
    if (favouritePosts !== 'undefined') {
      setFavPosts(favouritePosts)
    }
  }, [favouritePosts])

  return (
    <div className=" w-screen px-4 md:w-full h-full flex justify-center ">
      {favPosts?.length >= 1 ? (
        <ul className=" w-full h-full  flex flex-col items-center gap-2 md:gap-6">
          {favPosts?.map((post, index) => (
            <li key={post.id}>
              <FavouriteCard post={post} index={index} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-Secondary w-5/6 max-w-[400px] h-32 flex items-center justify-center font-normal rounded-xl">
          No hay favoritos agregados
        </div>
      )}
    </div>
  )
}

export function FavouriteCard({ post, index }) {
  return (
    <div
      className={` relative w-full h-full max-h-[200px] md:min-h-[300px] md:max-h-[300px] lg:min-h-[320px] lg:max-h-[380px] p-4 lg:p-8 my-2 mt-0 grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 rounded-xl md:rounded-xl lg:rounded-2xl ${
        index % 2 !== 0 ? 'bg-Primary ' : ' bg-Secondary  '
      } `}
    >
      <div
        className={`relative w-full aspect-square lg:aspect-[0] order-last col-span-1 lg:col-span-3 `}
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
        <div className=" absolute bottom-0 w-full h-full pb-2 px-2 flex flex-col justify-end ">
          <h3
            className={`${
              index % 2 !== 0 ? 'text-White' : 'text-Black'
            } font-semibold line-clamp-2 uppercase text-start text-base `}
          >
            <span
              className={`${
                index % 2 !== 0 ? 'bg-Black/80' : 'bg-White/80'
              } px-1 pr-2 box-decoration-clone leading-[1.7rem]`}
            >
              {ReactHtmlParser(post.title)}
            </span>
          </h3>
          <div className=" absolute top-2 right-2 w-10 md:w-12 lg:w-14 flex items-center justify-center bg-Black/80 rounded-full p-2 md:px-0 lg:p-2">
            <ButtonLikeFav
              post={post}
              color={index % 2 === 0 ? '#A26DAA' : '#39DFFF'}
            />
          </div>
        </div>
      </div>

      <div className=" relative col-span-1 lg:col-span-2 h-full flex flex-col gap-2 md:gap-2 lg:gap-4 ">
        <p
          className={`${
            index % 2 !== 0 ? 'text-White' : 'text-Black'
          } overflow-hidden text-sm md:text-base lg:text-lg line-clamp-[6] md:line-clamp-[7] lg:line-clamp-[7] `}
        >
          {ReactHtmlParser(post.excerpt)}
        </p>

        <div className=" z-20 absolute bottom-0 w-full h-1/6 flex items-center justify-center">
          <ButtonSeePost
            text="Ver nota"
            href={`/${post.category}/${post.id}`}
            style={index % 2 !== 0 ? 'outlineSky' : 'outlineViolet'}
            size="xs"
          />
        </div>
      </div>
    </div>
  )
}
