'use client'
import React, { useState, useEffect } from 'react'
import { getPostsByPageByCategoryId, getData } from '@/services/api-content'
import { cleanDataPosts } from '@/utils/functions'
import { CardVideo } from './CardVideo'

export default function GamerPosts({ dataPosts, pagesPosts, gamerID }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    if (data === null && dataPosts) {
      const dataCleaned = cleanDataPosts({ posts: dataPosts })
      setData(dataCleaned)
      setIsLoading(false)
      
    }
    if (totalPages === 0) {
      setTotalPages(parseInt(pagesPosts))
    }
    if (currentPage > 1) {
      console.log('Fetching nueva pagina')
      fetch(
        'http://content.ve.movistar.teamgamers.moob.club/wp-json/wp/v2/posts?categories=2',
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not OK')
          }
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
        })
        .catch((err) => {
          console.log('Error fetching data: ', err)
        })
        .finally(setIsLoading(false))
      // getData('posts?categories=52')
      //   .then((res) => {
      //     if (!res.ok) {
      //       throw new Error('Network response was not OK')
      //     }
      //     return res.json()
      //   })
      //   .then((data) => {
      //     console.log(data)
      //     setData(data)
      //   })
      //   .catch((err) => {
      //     console.log('Error fetching data: ', err)
      //   })
      //   .finally(setIsLoading(false))
      // getPostsByPageByCategoryId({ id: gamerID, page: currentPage })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data)
      //     setData(data)
      //   })
    }
  }, [currentPage])

  return (
    <section className=" relative w-full h-full min-h-40 flex flex-col items-center">
      {!isLoading ? (
        <ul className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit lg:max-h-[800px] px-4 py-4 lg:my-4 grid grid-cols-2 grid-rows-1  gap-3 lg:gap-4 select-none">
          {data?.map((post) => (
            <li
              key={post.id}
              className={` w-full h-full col-span-1 row-span-1  relative flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
            >
              {/* <CardVideo post={post} href={`/gaming/gamers/video/${post.id}`} /> */}
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

      <div className="  w-full mt-6 px-4 flex items-center justify-center gap-1 xs:gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`${
              currentPage === index + 1 ? 'bg-Secondary' : 'bg-gray-100'
            } w-5 h-5 text-xs aspect-square xs:w-6 xs:h-6 xs:text-sm rounded-full text-Black`}
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  )
}
