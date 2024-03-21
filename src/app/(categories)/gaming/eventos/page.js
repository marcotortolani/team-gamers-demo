import React from 'react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { Ticket } from 'lucide-react'
import { getCategoryId, getPostsByCategoryId } from '@/services/api-content'
import SliderLatestPosts from '@/app/components/SliderLatestPosts'
import SliderMiniVideoPosts from '@/app/components/SliderMiniVideoPosts'
import { cleanDataPosts, getRandomPosts } from '@/utils/functions'
import { CAT_EDITORIAL } from '@/utils/static_data'
import CardsLatestVideosPosts from '@/app/components/CardsLatestVideoPosts'

export default async function page() {
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId(cat.name)

  const videosCatID = 2
  const { data } = await getPostsByCategoryId({ id: videosCatID })

  const qtyVideoElements = 10
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: data, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  })
  const firstRandomVideoPosts = randomVideoPosts.slice(0, qtyVideoElements / 2)
  const secondRandomVideoPosts = randomVideoPosts.slice(
    qtyVideoElements / 2,
    qtyVideoElements
  )

  return (
    <main className=" z-0 relative w-full pt-28 mb-28 px-4 flex flex-col items-center gap-2 ">
      <section className=" w-screen md:w-full lg:max-w-screen-lg h-fit relative top-0 flex flex-col items-center gap-4">
        <TitleSection
          icon={Ticket}
          title="Eventos"
          outline
          borderColor="border-Primary"
        />

        {categoryID !== undefined && (
          <SliderLatestPosts id={categoryID} qty={5} categorySlug={cat.slug} />
        )}

        {randomVideoPosts && (
          <>
            <SliderMiniVideoPosts
              sliderElements={firstRandomVideoPosts}
              slidesPerView={2.25}
              spaceBetweenSlides={5}
              delayPerView={2500}
              colorBullets={'default'}
              sizeBullets={'default'}
              verticalAspect
            />
            <SliderMiniVideoPosts
              sliderElements={secondRandomVideoPosts}
              slidesPerView={2.5}
              spaceBetweenSlides={5}
              delayPerView={4500}
              colorBullets={'default'}
              sizeBullets={'default'}
            />
          </>
        )}
        {categoryID && (
          <CardsLatestVideosPosts
            id={categoryID}
            qty={4}
            categorySlug={cat.slug}
          />
        )}
      </section>
    </main>
  )
}
