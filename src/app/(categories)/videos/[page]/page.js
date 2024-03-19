import React from 'react'
import {
  getPostsByPageByCategoryId,
  getCategoryId,
} from '@/services/api-content'
import { cleanDataPosts } from '@/utils/functions'
import { CATEGORIES } from '@/utils/static_data'
import Pagination from './Pagination'
import { CardVideo } from '@/app/components/CardVideo'

export default async function VideosByPage({ params }) {
  const { page } = params
  const cat = CATEGORIES.videos
  const categoryID = await getCategoryId(cat.name)
  const { data, pages } = await getPostsByPageByCategoryId({
    id: categoryID,
    page: page,
  })

  let dataCleaned
  if (data !== null) {
    dataCleaned = cleanDataPosts({ posts: data })
  }

  return (
    <section className=" relative w-full h-full min-h-40 flex flex-col items-center">
      <ul className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit lg:max-h-[800px] px-4 py-4 lg:my-4 grid grid-cols-2 grid-rows-1  gap-3 lg:gap-4 select-none">
        {dataCleaned?.map((post) => (
          <li
            key={post.id}
            className={` w-full h-full col-span-1 row-span-1  relative flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
          >
            <CardVideo post={post} href={`/gaming/gamers/video/${post.id}`} />
          </li>
        ))}
      </ul>

      {pages && <Pagination page={page} pages={pages} />}
    </section>
  )
}
