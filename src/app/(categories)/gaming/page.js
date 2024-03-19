import React from 'react'
import SliderGamers from '@/app/components/SliderGamers'
import SliderLatestPosts from '@/app/components/SliderLatestPosts'
import SliderMiniVideoPosts from '@/app/components/SliderMiniVideoPosts'
import { CAT_EDITORIAL } from '@/utils/static_data'
import { getCategoryId, getData, getPostsByCategoryId } from '@/services/api-content'
import { cleanDataPosts, getRandomPosts } from '@/utils/functions'
import { Gamepad2, Ticket } from 'lucide-react'
import { Wand2 } from 'lucide-react'
import SliderLatestTricks from '@/app/components/SliderLatestTricks'
import CardsLatestVideosPosts from '@/app/components/CardsLatestVideoPosts'
import { TitleSection } from '@/app/components/ui/TitleSection'

export default async function page() {
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId(cat.name)

  const gamersID = await getCategoryId('gamers')
  const gamersRes = await getData(`categories?parent=${gamersID}&per_page=30`)

  // ---- data gamers ----

  // aca habria que tomar la informacion de los gamers (incluyendo la imagen destacada de cada uno)
  // y pasarla al componente Slider, pero genera conflicto porque internamente en CardGamer
  // tambien hay un fetch para poder conseguir una imagen en el ultimo post del gamerID

  //const gamersID = await getCategoryId('videos')
  // const { data } = await getData('categories?per_page=50')
  // const gamersCategories = data.filter((cat) => cat.parent === gamersID)

  // ----------

  const dataVideoPosts = await getPostsByCategoryId({ id: categoryID })

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
        <TitleSection
          icon={Gamepad2}
          title="Gamers"
          outline
          borderColor="border-Secondary"
        />
        <p className=" w-full max-w-[350px] px-8 mb-4 text-White uppercase font-normal text-center">
          ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor
          gamer!
        </p>
        <SliderGamers gamersData={gamersRes?.data} />
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
              slidesPerView={2.5}
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
