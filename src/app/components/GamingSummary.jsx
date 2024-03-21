import React from 'react'
import {
  getCategoryId,
  getVideoPostsByCategoryId,
  getPostsByCategoryId,
  getData,
} from '../../services/api-content'
import { getRandomPosts, cleanDataPosts } from '@/utils/functions'
import { CAT_GAMERS, CAT_EDITORIAL } from '@/utils/static_data'
import { Gamepad2, Ticket, Wand2 } from 'lucide-react'
import SliderGamers from './SliderGamers'
import SliderLatestPosts from './SliderLatestPosts'
import SliderMiniVideoPosts from './SliderMiniVideoPosts'
import SliderLatestTricks from './SliderLatestTricks'
import CardsLatestVideosPosts from './CardsLatestVideoPosts'
import { TitleSummary } from './ui/TitleSummary'
import { TitleArticle } from './ui/TitleArticle'

const randomVideoElements = [
  {
    id: 1,
    category: '',
    title: 'Los sSports se apoderan de esta ciudad con el Venezuela Game Show',
    excerpt: '',
    images: ['/assets/Img-webp-TG/Eventos-Card1.webp'],
  },
  {
    id: 2,
    category: '',
    title: 'Cobertura SOFA 2023',
    excerpt: '',
    images: ['/assets/Img-webp-TG/Eventos-Card2.webp'],
  },
  {
    id: 3,
    category: '',
    title: 'Los sSports se apoderan de esta ciudad con el Venezuela Game Show',
    excerpt: '',
    images: ['/assets/Img-webp-TG/Eventos-Card1.webp'],
  },
  {
    id: 4,
    category: '',
    title: 'Cobertura SOFA 2023',
    excerpt: '',
    images: ['/assets/Img-webp-TG/Eventos-Card2.webp'],
  },
  {
    id: 5,
    category: '',
    title: 'Los sSports se apoderan de esta ciudad con el Venezuela Game Show',
    excerpt: '',
    images: ['/assets/Img-webp-TG/Eventos-Card1.webp'],
  },
  {
    id: 6,
    category: '',
    title: 'Cobertura SOFA 2023',
    excerpt: '',
    images: ['/assets/Img-webp-TG/Eventos-Card2.webp'],
  },
]

export default async function GamingSummary() {
  // const cat = CATEGORIES.bienestar;
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId(cat.name)

  const gamersID = await getCategoryId('gamers')
  const gamersRes = await getData(`categories?parent=${gamersID}&per_page=10`)

  // const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID });
  const videosCatID = 2
  const { data } = await getPostsByCategoryId({ id: videosCatID })

  const qtyVideoElements = 6
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: data, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  })

  return (
    <section className=" z-50  w-screen md:w-full lg:max-w-screen-lg h-fit relative top-0 flex flex-col items-center md:gap-4">
      <TitleSummary title="Nuestros Gamers" icon={Gamepad2} />

      <SliderGamers
        path="/gaming/gamers"
        gamersData={gamersRes?.data}
        miniCards
      />
      <p className=" w-full max-w-[350px] md:max-w-[450px] px-8 mb-4 text-White uppercase font-normal text-center md:text-lg">
        ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor gamer!
      </p>

      <article className=" w-full py-2 flex flex-col md:items-center gap-4">
        <TitleArticle title="Eventos" icon={Ticket} />

        {categoryID !== undefined && (
          <SliderLatestPosts id={categoryID} qty={5} categorySlug={cat.slug} />
        )}

        {randomVideoPosts && (
          <SliderMiniVideoPosts
            sliderElements={randomVideoPosts}
            slidesPerView={2.25}
            spaceBetweenSlides={5}
            delayPerView={2500}
            colorBullets={'default'}
            sizeBullets={'default'}
          />
        )}
      </article>

      <article className=" w-full py-2 flex flex-col md:items-center gap-4">
        <TitleArticle title="Trucos" icon={Wand2} />
        {categoryID !== undefined && (
          <SliderLatestTricks id={categoryID} qty={5} categorySlug={cat.slug} />
        )}
        {categoryID !== undefined && (
          <CardsLatestVideosPosts
            id={categoryID}
            qty={4}
            categorySlug={cat.slug}
          />
        )}
      </article>
    </section>
  )
}
