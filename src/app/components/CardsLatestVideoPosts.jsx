'use client'
import React, { useState, useEffect } from 'react'
import { CardVideo } from './CardVideo'
import { fetchingData } from '@/services/fetchingData'

export default function CardsLatestVideosPosts({
  id,
  qty,
  categorySlug,
  verticalAspect,
}) {
  const [qtyPosts, setQtyPosts] = useState(qty)
  const [posts, setPosts] = useState([])

  function handleClick() {
    setQtyPosts((prev) => prev + 2)
  }

  useEffect(() => {
    fetchingData({ id: id, categorySlug: categorySlug, qty: qtyPosts }).then(
      (res) => setPosts(res)
    )
  }, [qtyPosts])

  return (
    <div className=" w-full h-full flex flex-col items-center">
      <ul className=" w-full lg:max-w-[900px] h-fit px-4 py-4 lg:my-4 grid grid-cols-2 grid-rows-1  gap-3 md:gap-5 lg:gap-8 select-none">
        {posts?.map((post) => (
          <li
            key={post.id}
            className={` w-full h-full col-span-1 row-span-1  relative flex flex-col items-center justify-center rounded-lg md:rounded-xl`}
          >
            <CardVideo
              post={post}
              href={categorySlug + `/${post.id}`}
              verticalAspect={verticalAspect}
            />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className=" w-fit px-4 py-1 uppercase border-2 border-Secondary rounded-full text-White"
        onClick={handleClick}
      >
        Cargar más
      </button>
    </div>
  )
}
