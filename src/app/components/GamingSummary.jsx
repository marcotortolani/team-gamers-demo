import React from 'react'
import { getCategoryId, getData } from '../../services/api-content'
import { getRandomPosts, cleanDataPosts } from '@/utils/functions'
import { CAT_GAMERS as cat } from '@/utils/static_data'
import { Gamepad2, Ticket, Wand2 } from 'lucide-react'
import SliderGamers from './SliderGamers'
import SliderLatestPosts from './SliderLatestPosts'
import SliderMiniVideoPosts from './SliderMiniVideoPosts'
import SliderLatestTricks from './SliderLatestTricks'
import CardsLatestVideosPosts from './CardsLatestVideoPosts'
import { TitleSummary } from './ui/TitleSummary'
import { TitleArticle } from './ui/TitleArticle'

export default async function GamingSummary() {
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
    categorySlug: `${cat.gaming.slug}/${dataCategories.eventos.slug}`,
  })

  return (
    <section className=" z-50  w-screen md:w-full lg:max-w-screen-lg h-fit relative top-0 flex flex-col items-center gap-4">
      <TitleSummary title="Nuestros Gamers" icon={Gamepad2} />

      <SliderGamers path="/gaming/gamers" gamersData={gamersData} miniCards />
      <p className=" w-full max-w-[350px] md:max-w-[450px] px-8 mb-4 text-White uppercase font-normal text-center md:text-lg">
        ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor gamer!
      </p>

      <article className=" w-full py-2 flex flex-col md:items-center gap-4">
        <TitleArticle title="Eventos" icon={Ticket} />

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
        ) : null}
      </article>

      <article className=" w-full py-2 flex flex-col md:items-center gap-4">
        <TitleArticle title="Trucos" icon={Wand2} />
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
      </article>
    </section>
  )
}
