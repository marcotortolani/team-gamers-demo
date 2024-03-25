import React from 'react'
import { getCategoryId } from '@/services/api-content'
import HorizontalLine from './ui/HorizontalLine'
import CardsLatestVideosPosts from './CardsLatestVideoPosts'

export default async function SectionRecommended({ category, qty }) {
  const categoryID = await getCategoryId(category.name)

  return (
    <section className=" w-full max-w-4xl mt-4 flex flex-col items-center gap-2">
      <div className=" w-full flex flex-col items-center">
        <div className=" w-full h-fit ">
          <HorizontalLine size="sm" color="white" />
          <h4
            className={
              ' mb-1 text-White uppercase text-xs md:text-sm lg:text-base'
            }
          >
            Otros videos que pueden interesarte
          </h4>
        </div>

        {categoryID !== undefined && (
          <CardsLatestVideosPosts
            id={categoryID}
            qty={qty}
            categorySlug={category.slug}
            verticalAspect
          />
        )}
      </div>
    </section>
  )
}
