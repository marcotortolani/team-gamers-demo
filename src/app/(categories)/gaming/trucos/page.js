import React from 'react'
import { getCategoryId, getPostsByCategoryId } from '@/services/api-content'
import { cleanDataPosts, getRandomPosts } from '@/utils/functions'
import { CAT_EDITORIAL } from '@/utils/static_data'
import SliderLatestTricks from '@/app/components/SliderLatestTricks'
import CardsLatestVideosPosts from '@/app/components/CardsLatestVideoPosts'

export default async function page() {
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId('videos')

  const videosCatID = 2
  const dataVideoPosts = await getPostsByCategoryId({ id: videosCatID })

  const qtyVideoElements = 10
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  })
  const firstRandomVideoPosts = randomVideoPosts.slice(0, qtyVideoElements / 2)
  const secondRandomVideoPosts = randomVideoPosts.slice(
    qtyVideoElements / 2,
    qtyVideoElements
  )

  return (
    <>
      {categoryID !== undefined && (
        <SliderLatestTricks
          id={categoryID}
          qty={5}
          categorySlug="gaming/trucos/video"
        />
      )}

      {categoryID !== undefined && (
        <CardsLatestVideosPosts
          id={categoryID}
          qty={4}
          categorySlug={cat.slug}
          verticalAspect
        />
      )}
    </>
  )
}
