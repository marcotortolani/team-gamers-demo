import React from 'react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { Ticket } from 'lucide-react'
import { getCategoryId, getData } from '@/services/api-content'
import SliderLatestPosts from '@/app/components/SliderLatestPosts'
import SliderMiniVideoPosts from '@/app/components/SliderMiniVideoPosts'
import { cleanDataPosts, getRandomPosts } from '@/utils/functions'
import { CAT_GAMERS as cat } from '@/utils/static_data'
import CardsLatestVideosPosts from '@/app/components/CardsLatestVideoPosts'

export default async function page() {
  const categoryID = await getCategoryId(cat.eventos.name)

  const videoTag = 72
  const { data: videosEventos } = await getData(
    `posts?categories=${categoryID}&tags=${videoTag}`
  )
  const qtyVideoElements = 6
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: videosEventos, qty: qtyVideoElements }),
    categorySlug: cat.eventos.slug,
  })

  return (
    <main className=" z-0 relative w-full h-full min-h-[50vh] pt-28 mb-28 px-4 flex flex-col items-center gap-2 ">
      <section className=" w-screen md:w-full lg:max-w-screen-lg h-fit relative top-0 flex flex-col items-center gap-4">
        <TitleSection
          icon={Ticket}
          title="Eventos"
          outline
          borderColor="border-Primary"
        />

        {categoryID && (
          <SliderLatestPosts
            id={categoryID}
            qty={5}
            categorySlug={`${cat.gaming.slug}/${cat.eventos.slug}`}
          />
        )}

        {randomVideoPosts.length > 0 && (
          <SliderMiniVideoPosts
            sliderElements={randomVideoPosts}
            slidesPerView={2.25}
            spaceBetweenSlides={5}
            delayPerView={2500}
            colorBullets={'default'}
            sizeBullets={'default'}
          />
        )}
        {categoryID && (
          <CardsLatestVideosPosts
            id={categoryID}
            qty={4}
            categorySlug={`${cat.gaming.slug}/${cat.eventos.slug}`}
          />
        )}
      </section>
    </main>
  )
}
