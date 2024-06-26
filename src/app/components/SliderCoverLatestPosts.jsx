import React from 'react'
import { getPostsByCategoryId } from '@/services/api-content'
import { getLatestPosts, cleanDataPosts } from '@/utils/functions'
import SwiperSliderCoverPosts from './SwiperSliderCoverPosts'

export default async function SliderCoverLatestPosts({
  id,
  qty,
  categorySlug,
  styleColor,
}) {
  const { data } = await getPostsByCategoryId({ id })

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: data, qty: qty }),
    categorySlug,
  })

  return (
    <div className=" w-screen max-w-screen-2xl h-full ">
      <SwiperSliderCoverPosts
        posts={latestPosts}
        slidesPerView={1.8}
        delayPerView={3500}
        spaceBetweenSlides={0}
        colorBullets={'white'}
        sizeBullets={'default'}
        styleColor={styleColor}
      />
    </div>
  )
}
