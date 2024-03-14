import React from 'react'
import { CATEGORIES } from '@/utils/static_data'
import {
  getData,
  getCategoryId,
  getPostsByCategoryId,
} from '@/services/api-content'
import { cleanDataPosts } from '@/utils/functions'
import CardsVideoPost from '@/app/components/CardsVideoPost'
import { Gamepad2 } from 'lucide-react'
import SliderGamers from '@/app/components/SliderGamers'
import CardsGamers from "@/app/components/CardsGamers"

function cleanDataCategories({ dataCategories }) {
  return dataCategories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
  }))
}

export default async function GamersPage() {
  const cat = CATEGORIES.videos
  const categoryID = await getCategoryId(cat.name)

  return (
    <main className=" z-0 relative w-full pt-28 mb-24 px-4 flex flex-col items-center gap-2 ">
      <section className=" w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-4">
        <h2 className=" px-4 py-[0.1rem] uppercase font-medium text-lg md:text-base flex items-center gap-3 bg-Black text-White border-[1px] border-Primary rounded-full">
          <div className=" w-6 h-6 ">
            <Gamepad2 width={'100%'} height={'100%'} />
          </div>
          Gamers
        </h2>
        <p className=" w-full max-w-[350px] px-8 mb-4 text-White uppercase font-normal text-center">
          ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor
          gamer!
        </p>
        {/* <SliderGamers /> */}
        <CardsGamers />
      </section>


      {/* Ver video-posts de todas las categorias, con contenido */}
      {/* <CardsVideoPost id={categoryID} /> */}
    </main>
  )
}
