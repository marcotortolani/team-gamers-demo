import React from 'react'
import SliderGamers from '@/app/components/SliderGamers'
import SliderLatestPosts from '@/app/components/SliderLatestPosts'
import SliderMiniVideoPosts from '@/app/components/SliderMiniVideoPosts'
import { CAT_EDITORIAL } from '@/utils/static_data'
import { getCategoryId, getPostsByCategoryId } from '@/services/api-content'
import { cleanDataPosts, getRandomPosts } from '@/utils/functions'
import { Gamepad2, Ticket } from 'lucide-react'
import { Wand2 } from 'lucide-react'
import SliderLatestTricks from '@/app/components/SliderLatestTricks'
import CardsLatestVideosPosts from '@/app/components/CardsLatestVideoPosts'

export default async function page() {
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId(cat.name)

  // const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID });
  const videosCatID = 2
  const dataVideoPosts = await getPostsByCategoryId({ id: videosCatID })

  const qtyVideoElements = 10
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  })
  const randomVideoPostsFirstSlice = randomVideoPosts.slice(
    0,
    parseInt(qtyVideoElements / 2)
  )
  const randomVideoPostsSecondSlice = randomVideoPosts.slice(
    parseInt(qtyVideoElements / 2),
    qtyVideoElements
  )

  return (
    <main className=" z-0 relative w-full pt-28 mb-20 px-4 flex flex-col items-center gap-2 ">
      <section className=" w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-4">
        <h2 className=" px-4 py-[0.1rem] uppercase font-medium text-lg md:text-base flex items-center gap-3 bg-Black text-White border-[1px] border-Secondary rounded-full">
          <div className=" w-6 h-6 ">
            <Gamepad2 width={'100%'} height={'100%'} />
          </div>
          Gamers
        </h2>
        <p className=" w-full max-w-[350px] px-8 mb-4 text-White uppercase font-normal text-center">
          ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor
          gamer!
        </p>
        <SliderGamers />
      </section>

      <section className=" mt-6 w-full py-2 flex flex-col items-center gap-4">
        <TitleSection icon={Ticket} title="Eventos" />

        {categoryID !== undefined && (
          <SliderLatestPosts id={categoryID} qty={5} categorySlug={cat.slug} />
        )}

        {randomVideoPosts && (
          <>
            <SliderMiniVideoPosts
              sliderElements={randomVideoPostsFirstSlice}
              slidesPerView={2.25}
              spaceBetweenSlides={5}
              delayPerView={4000}
              colorBullets={'default'}
              sizeBullets={'default'}
              verticalAspect
            />
            <SliderMiniVideoPosts
              sliderElements={randomVideoPostsSecondSlice}
              slidesPerView={2.25}
              spaceBetweenSlides={5}
              delayPerView={2500}
              colorBullets={'default'}
              sizeBullets={'default'}
              verticalAspect
            />
          </>
        )}
      </section>

      <section className=" mt-6 w-full py-2 flex flex-col items-center gap-4">
        <TitleSection icon={Wand2} title="Trucos" />

        {categoryID !== undefined && (
          <SliderLatestTricks id={categoryID} qty={5} categorySlug={cat.slug} />
        )}

        {categoryID !== undefined && (
          <CardsLatestVideosPosts
            id={categoryID}
            qty={4}
            categorySlug={cat.slug}
            verticalAspect
          />
        )}
      </section>
    </main>
  )
}

export function TitleSection({ icon, title }) {
  const Icon = icon
  return (
    <h2 className=" flex items-center justify-center gap-2 text-xl text-White">
      <div className=" w-7 h-7">
        <Icon width={'100%'} height={'100%'} />
      </div>
      <span className=" border-b-4 leading-6 border-b-Primary">{title}</span>
    </h2>
  )
}
