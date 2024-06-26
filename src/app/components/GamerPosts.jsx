'use client'
import React, { useState, useEffect } from 'react'
import { cleanDataPosts } from '@/utils/functions'
import { CardVideo } from './CardVideo'
import Pagination from './ui/Pagination'

export default function GamerPosts({
  path,
  dataPosts,
  page,
  pagesPosts,
  gamerID,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    if (data === null && dataPosts) {
      const dataCleaned = cleanDataPosts({ posts: dataPosts })
      setData(dataCleaned)
      setIsLoading(false)
    }
  }, [])

  return (
    <section className=" relative w-full h-full min-h-40 flex flex-col items-center">
      {!isLoading ? (
        <ul className=" w-full h-fit px-4 py-4 md:px-8 lg:my-4 grid grid-cols-2 grid-rows-1 gap-3 md:gap-5 lg:gap-6 select-none">
          {data?.map((post) => (
            <li
              key={post.id}
              className={`${
                data.length === 1 ? 'w-full md:w-3/5 lg:w-1/2 mx-auto col-span-2' : 'w-full  col-span-1'
              } h-full  row-span-1 relative flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
            >
              <CardVideo
                post={post}
                href={`/gaming/gamers/${gamerID}/video/${post.id}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="relative inline-block h-8 w-8 my-8 animate-spin rounded-full border-4 border-solid border-Secondary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
      )}

      {isLoading && !data && (
        <div className=" w-2/3 py-6 mt-8 text-center rounded-xl text-Black bg-Secondary">
          No hay datos de este gamer
        </div>
      )}

      {page && <Pagination path={path} page={page} pages={pagesPosts} />}
    </section>
  )
}
