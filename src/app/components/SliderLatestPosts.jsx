import React from 'react'
import { getPostsByCategoryId } from '@/services/api-content'
import { getLatestPosts, cleanDataPosts } from '@/utils/functions'
import SwiperSliderPosts from './SwiperSliderPosts'

export default async function SliderLatestPosts({
  id,
  qty,
  categorySlug,
  paginationHide,
}) {
  const { data } = await getPostsByCategoryId({ id })

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: data, qty: qty }),
    categorySlug,
  })

  return (
    <SwiperSliderPosts
      posts={latestPosts}
      slidesPerView={1}
      delayPerView={3500}
      spaceBetweenSlides={0}
      colorBullets={'white'}
      sizeBullets={'default'}
      paginationHide={paginationHide}
    />
  )
}
