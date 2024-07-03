'use client'
import React, { useState, useEffect, useMemo } from 'react'
import { CardVideo } from './CardVideo'
import { fetchingData } from '@/services/fetchingData'

export default function CardsLatestVideosPosts({
  id,
  qty,
  categorySlug,
  verticalAspect,
}) {
  const [qtyPosts, setQtyPosts] = useState(qty)
  const [totalPosts, setTotalPosts] = useState()
  const [posts, setPosts] = useState([])

  const buttonIsDisable = useMemo(() => {
    return parseInt(qtyPosts) === parseInt(totalPosts) || posts.length === 0
  }, [qtyPosts, totalPosts, posts])

  function handleClick() {
    if (totalPosts - qtyPosts > 4) {
      setQtyPosts((prev) => prev + 4)
    } else {
      setQtyPosts(totalPosts)
    }
  }

  useEffect(() => {
    fetchingData({ id, categorySlug, qty: qtyPosts }).then((res) => {
      setPosts(res.cardPosts)
      setTotalPosts(res.posts)
    })
  }, [qtyPosts])

  return posts.length > 0 ? (
    <div className=" w-full h-full flex flex-col items-center">
      <ul className=" w-full lg:max-w-[900px] h-fit px-4 py-4 lg:my-4 grid grid-cols-2 grid-rows-1  gap-3 md:gap-5 lg:gap-8 select-none">
        {posts?.map((post, index) => (
          <li
            key={post.id}
            className={` w-full h-full col-span-1 row-span-1  relative flex flex-col items-center justify-center rounded-lg md:rounded-xl`}
          >
            <CardVideo
              post={post}
              index={index}
              href={`/${categorySlug}/video/${post.id}`}
              verticalAspect={verticalAspect}
            />
          </li>
        ))}
      </ul>
      <button
        type="button"
        disabled={buttonIsDisable}
        className=" w-fit px-4 py-1 uppercase border-2 border-Secondary disabled:border-gray-900 disabled:bg-gray-400 disabled:text-gray-300 disabled:scale-90 transition-all duration-200 ease-in-out rounded-full text-White"
        onClick={handleClick}
      >
        Cargar más
      </button>
    </div>
  ) : null
}
