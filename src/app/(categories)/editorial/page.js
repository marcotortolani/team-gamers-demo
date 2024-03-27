import React from 'react'
import { CAT_EDITORIAL as cat } from '@/utils/static_data'
import {
  getCategoryId,
  getData,
  getPostsByCategoryId,
} from '@/services/api-content'
import { cleanDataPosts, getRandomPosts } from '@/utils/functions'
import { FileText, Gamepad2, Joystick, CircuitBoard } from 'lucide-react'

import { TitleSection } from '@/app/components/ui/TitleSection'
import SliderCoverLatestPosts from '@/app/components/SliderCoverLatestPosts'

import SliderLatestModernPosts from '@/app/components/SliderLatestModernPosts'
import LongCardsLatestPosts from '@/app/components/LongCardsLatestPosts'
import ShortCardsLatestPosts from '@/app/components/ShortCardsLatestPosts'

export default async function page() {
  const categoryID = await getCategoryId(cat.editorial.name)
  const { data } = await getData(`categories?parent=${categoryID}`)
  const dataCategories = data.reduce((acc, cat) => {
    acc[cat.slug] = { id: cat.id, name: cat.name, slug: cat.slug }
    return acc
  }, {})

  return (
    <main className=" z-0 relative w-full pt-28 mb-20 px-4 flex flex-col items-center gap-2 ">
      <section className=" w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-4">
        <TitleSection
          icon={FileText}
          title="Editoriales"
          outline
          borderColor="border-Secondary"
        />
        <SliderCoverLatestPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.editorial.slug}
          styleColor="primary"
        />
      </section>

      <section className=" mt-2 w-full py-2 flex flex-col items-center gap-4">
        <TitleSection icon={Gamepad2} title="Videojuegos" />

        {categoryID && (
          <SliderLatestModernPosts
            id={dataCategories.videojuegos.id}
            qty={5}
            categorySlug={`${cat.editorial.slug}/${dataCategories.videojuegos.slug}`}
            paginationHide
          />
        )}

        {/* subcategoria VIDEOJUEGOS */}
        {categoryID && (
          <LongCardsLatestPosts
            id={dataCategories.videojuegos.id}
            qty={5}
            page={2}
            categorySlug={`${cat.editorial.slug}/${dataCategories.videojuegos.slug}`}
          />
        )}

        {/* subcategoria VIDEOJUEGOS */}
        {/* {categoryID && (
          <ShortCardsLatestPosts
            id={dataCategories.videojuegos.id}
            qty={4}
            page={2}
            categorySlug={`${cat.editorial.slug}/${dataCategories.videojuegos.slug}`}
            // miniCard
            accentColor="secondary"
          />
        )} */}
      </section>

      <section className=" mt-6 w-full py-2 flex flex-col items-center gap-4">
        <TitleSection icon={Joystick} title="Retro" />

        {categoryID && (
          <SliderLatestModernPosts
            id={dataCategories.retro.id}
            qty={5}
            categorySlug={`${cat.editorial.slug}/${dataCategories.retro.slug}`}
            paginationHide
          />
        )}

        {/* subcategoria RETRO */}
        {/* {categoryID && (
          <LongCardsLatestPosts
            id={dataCategories.retro.id}
            qty={2}
            page={2}
            categorySlug={`${cat.editorial.slug}/${dataCategories.retro.slug}`}
          />
        )} */}

        {/* subcategoria RETRO */}
        {categoryID && (
          <ShortCardsLatestPosts
            id={dataCategories.retro.id}
            qty={4}
            page={2}
            categorySlug={`${cat.editorial.slug}/${dataCategories.retro.slug}`}
            // miniCard
            accentColor="secondary"
          />
        )}
      </section>

      <section className=" mt-6 w-full py-2 flex flex-col items-center gap-4">
        <TitleSection icon={CircuitBoard} title="Tecnología" />

        {categoryID && (
          <SliderLatestModernPosts
            id={dataCategories.tecnologia.id}
            qty={5}
            categorySlug={`${cat.editorial.slug}/${dataCategories.tecnologia.slug}`}
            paginationHide
          />
        )}

        {/* subcategoria TECNOLOGIA */}
        {categoryID && (
          <LongCardsLatestPosts
            id={dataCategories.tecnologia.id}
            qty={4}
            page={2}
            categorySlug={`${cat.editorial.slug}/${dataCategories.tecnologia.slug}`}
          />
        )}

        {/* subcategoria TECNOLOGIA */}
        {/* {categoryID && (
          <ShortCardsLatestPosts
            id={categoryID}
            qty={4}
            categorySlug={cat.slug}
            // miniCard
            accentColor="secondary"
          />
        )} */}
      </section>
    </main>
  )
}
