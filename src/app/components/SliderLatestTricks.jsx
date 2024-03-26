import React from 'react'
import { getPostsByCategoryId } from '@/services/api-content'
import { getLatestPosts, cleanDataPosts } from '@/utils/functions'
import SwiperSliderPosts from './SwiperSliderPosts'

export default async function SliderLatestTricks({ id, qty, categorySlug }) {
  const { data } = await getPostsByCategoryId({ id })

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: data, qty: qty }),
    categorySlug,
  })

  return latestPosts.length > 0 ? (
    <SwiperSliderPosts
      posts={latestPosts}
      slidesPerView={1}
      centered
      delayPerView={3500}
      spaceBetweenSlides={-20}
      colorBullets={'white'}
      sizeBullets={'default'}
      titleOnly
    />
  ) : (
    <div className=" w-fit p-4 text-Black md:text-lg lg:text-xl bg-Secondary rounded-lg">
      No hay contenido para esta categoría
    </div>
  )
}
