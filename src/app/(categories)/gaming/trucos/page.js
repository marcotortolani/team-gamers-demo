import React from 'react'
import { getCategoryId } from '@/services/api-content'
import { CAT_GAMERS as cat } from '@/utils/static_data'
import SliderLatestTricks from '@/app/components/SliderLatestTricks'
import CardsLatestVideosPosts from '@/app/components/CardsLatestVideoPosts'

export default async function page() {
  const categoryID = await getCategoryId(cat.trucos.name)

  return (
    <>
      {categoryID !== undefined && (
        <SliderLatestTricks
          id={categoryID}
          qty={5}
          categorySlug={cat.trucos.slug}
        />
      )}

      {categoryID !== undefined && (
        <CardsLatestVideosPosts
          id={categoryID}
          qty={4}
          categorySlug={cat.trucos.slug}
          verticalAspect
        />
      )}
    </>
  )
}
