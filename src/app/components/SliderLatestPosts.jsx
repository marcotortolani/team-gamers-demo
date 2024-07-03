import React from 'react'
import { getData, getPostsByCategoryId } from '@/services/api-content'
import { getLatestPosts, cleanDataPosts } from '@/utils/functions'
import SwiperSliderPosts from './SwiperSliderPosts'

export default async function SliderLatestPosts({
  id,
  qty,
  categorySlug,
  paginationHide,
}) {
  const { data: tagsData } = await getData('tags')
  const videoTagID = await tagsData.filter((tag) =>
    tag.slug.includes('video')
  )[0].id
  
  const { data } = await getPostsByCategoryId({ id, tagExclude: videoTagID })

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: data, qty: qty }),
    categorySlug,
  })

  return latestPosts.length > 0 ? (
    <SwiperSliderPosts
      posts={latestPosts}
      slidesPerView={1}
      delayPerView={3500}
      spaceBetweenSlides={0}
      colorBullets={'white'}
      sizeBullets={'default'}
      paginationHide={paginationHide}
    />
  ) : null
}
