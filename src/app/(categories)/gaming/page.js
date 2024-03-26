import React from 'react'
import SliderGamers from '@/app/components/SliderGamers'
import SliderLatestPosts from '@/app/components/SliderLatestPosts'
import SliderMiniVideoPosts from '@/app/components/SliderMiniVideoPosts'
import { CAT_GAMERS as cat } from '@/utils/static_data'
import { getData, getCategoryId } from '@/services/api-content'
import { cleanDataPosts, getRandomPosts } from '@/utils/functions'
import { Gamepad2, Ticket, Wand2 } from 'lucide-react'
import SliderLatestTricks from '@/app/components/SliderLatestTricks'
import CardsLatestVideosPosts from '@/app/components/CardsLatestVideoPosts'
import { TitleSection } from '@/app/components/ui/TitleSection'

export default async function page() {
  const categoryID = await getCategoryId(cat.gaming.name)
  const { data } = await getData(`categories?parent=${categoryID}`)

  const dataCategories = data.reduce((acc, cat) => {
    acc[cat.slug] = { id: cat.id, name: cat.name, slug: cat.slug }
    return acc
  }, {})

  const { data: gamersData } = await getData(
    `categories?parent=${dataCategories.gamers.id}&per_page=10`
  )

  const videoTag = 72
  const { data: videosEventos } = await getData(
    `posts?categories=${dataCategories.eventos.id}&tags=${videoTag}`
  )
  const qtyVideoElements = 6
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: videosEventos, qty: qtyVideoElements }),
    categorySlug: dataCategories.eventos.slug,
  })

  return (
    <main className=" z-0 relative w-full pt-28 mb-20 px-4 flex flex-col items-center gap-2 ">
      <section className=" w-screen md:w-5/6 lg:w-4/6 lg:max-w-screen-lg h-fit relative top-0 flex flex-col items-center gap-4">
        <TitleSection icon={Gamepad2} title="Gamers" />
        <p className=" w-full max-w-[350px] md:max-w-[450px] px-8 mb-4 text-base md:text-lg lg:text-xl text-White uppercase font-normal text-center">
          ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor
          gamer!
        </p>
        <SliderGamers gamersData={gamersData} />
      </section>

      <section className=" mt-6 w-full py-2 flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
        <TitleSection icon={Ticket} title="Eventos" />

        {dataCategories?.eventos.id && (
          <SliderLatestPosts
            id={dataCategories.eventos.id}
            qty={5}
            categorySlug={`${cat.gaming.slug}/${dataCategories.eventos.slug}`}
          />
        )}

        {randomVideoPosts.length > 0 ? (
          <SliderMiniVideoPosts
            sliderElements={randomVideoPosts}
            slidesPerView={2.25}
            spaceBetweenSlides={5}
            delayPerView={2500}
            colorBullets={'default'}
            sizeBullets={'default'}
          />
        ) : (
          <div className=" w-fit p-4 text-Black md:text-lg lg:text-xl bg-Secondary rounded-lg">
            No hay contenido para esta categoría
          </div>
        )}
      </section>

      <section className=" mt-6 w-full py-2 flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
        <TitleSection icon={Wand2} title="Trucos" />

        {dataCategories?.trucos.id && (
          <SliderLatestTricks
            id={dataCategories.trucos.id}
            qty={5}
            categorySlug={`${cat.gaming.slug}/${dataCategories.trucos.slug}`}
          />
        )}

        {dataCategories?.trucos.id && (
          <CardsLatestVideosPosts
            id={dataCategories.trucos.id}
            qty={4}
            categorySlug={`${cat.gaming.slug}/${dataCategories.trucos.slug}`}
          />
        )}
      </section>
    </main>
  )
}
