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
import { TitleSection } from './ui/TitleSection'

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
  const dataVideoPosts = await getPostsByCategoryId({ id: videosCatID })

  const qtyVideoElements = 4
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  })

  return (
    <section className=" z-50 w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center">
      <h1 className=" px-4 py-[0.15rem] mb-4 uppercase font-medium text-sm md:text-base flex items-center gap-2 bg-Secondary rounded-full">
        <div className=" w-4 h-4 ">
          <Gamepad2 width={'100%'} height={'100%'} />
        </div>
        Nuestros Gamers
      </h1>

      {/* Slider fotos de NUESTROS GAMERS */}
      <SliderGamers
        path="/gaming/gamers"
        gamersData={gamersRes?.data}
        miniCards
      />
      <p className=" w-full max-w-[350px] px-8 mb-4 text-White uppercase font-normal text-center">
        ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor gamer!
      </p>

      <article className=" w-full py-2 flex flex-col gap-4">
        <h2 className=" pl-4 flex items-center justify-start gap-1 text-White">
          <Ticket height={'100%'} />
          <span className=" border-b-4 leading-5 border-b-Primary">
            Eventos
          </span>
        </h2>

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

      <article className=" w-full py-2 flex flex-col gap-4">
        <h2 className=" pl-4 flex items-center justify-start gap-1 text-White">
          <Wand2 height={'100%'} />
          <span className=" border-b-4 leading-5 border-b-Primary">Trucos</span>
        </h2>
        {categoryID !== undefined && (
          <SliderLatestTricks id={categoryID} qty={5} categorySlug={cat.slug} />
        )}
      </article>

      {categoryID !== undefined && (
        <CardsLatestVideosPosts
          id={categoryID}
          qty={4}
          categorySlug={cat.slug}
        />
      )}
    </section>
  )
}
