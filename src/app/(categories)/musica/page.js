import React from 'react'
import { CAT_EDITORIAL } from '@/utils/static_data'
import { getCategoryId, getPostsByCategoryId } from '@/services/api-content'
import { cleanDataPosts, getRandomPosts } from '@/utils/functions'
import { Music, Mic2Icon, Sparkles } from 'lucide-react'

import { TitleSection } from '@/app/components/ui/TitleSection'
import SliderCoverLatestPosts from '@/app/components/SliderCoverLatestPosts'

import SliderLatestModernPosts from '@/app/components/SliderLatestModernPosts'
import LongCardsLatestPosts from '@/app/components/LongCardsLatestPosts'
import ShortCardsLatestPosts from '@/app/components/ShortCardsLatestPosts'

export default async function page() {
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId(cat.name)

  // ---- data gamers ----

  // aca habria que tomar la informacion de los gamers (incluyendo la imagen destacada de cada uno)
  // y pasarla al componente Slider, pero genera conflicto porque internamente en CardGamer
  // tambien hay un fetch para poder conseguir una imagen en el ultimo post del gamerID

  //const gamersID = await getCategoryId('videos')
  // const { data } = await getData('categories?per_page=50')
  // const gamersCategories = data.filter((cat) => cat.parent === gamersID)

  // ----------

  const { data } = await getPostsByCategoryId({ id: categoryID })

  const qtyVideoElements = 10
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: data, qty: qtyVideoElements }),
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
      <section className=" w-screen md:w-5/6 lg:w-full lg:max-w-screen-lg h-fit relative top-0 flex flex-col items-center gap-4">
        <TitleSection
          icon={Music}
          title="Música"
          outline
          borderColor="border-Secondary"
        />
        <SliderCoverLatestPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.slug}
          styleColor="primary"
        />
      </section>

      <section className=" mt-2 w-full py-2 flex flex-col items-center gap-4">
        <TitleSection icon={Mic2Icon} title="Trap & Urbano" />

        {categoryID && (
          <SliderLatestModernPosts
            id={categoryID}
            qty={5}
            categorySlug={cat.slug}
            paginationHide
          />
        )}

        {/* subcategoria TRAP/URBANO */}
        {categoryID && (
          <LongCardsLatestPosts
            id={categoryID}
            qty={2}
            categorySlug={cat.slug}
          />
        )}

        {/* subcategoria TRAP/URBANO */}
        {categoryID && (
          <ShortCardsLatestPosts
            id={categoryID}
            qty={4}
            categorySlug={cat.slug}
            // miniCard
            accentColor="secondary"
          />
        )}
      </section>

      <section className=" mt-6 w-full py-2 flex flex-col items-center gap-4">
        <TitleSection icon={Sparkles} title="Pop" />

        {categoryID && (
          <SliderLatestModernPosts
            id={categoryID}
            qty={5}
            categorySlug={cat.slug}
            paginationHide
          />
        )}

        {/* subcategoria POP */}
        {categoryID && (
          <LongCardsLatestPosts
            id={categoryID}
            qty={2}
            categorySlug={cat.slug}
          />
        )}

        {/* subcategoria POP */}
        {categoryID && (
          <ShortCardsLatestPosts
            id={categoryID}
            qty={4}
            categorySlug={cat.slug}
            // miniCard
            accentColor="secondary"
          />
        )}
      </section>
    </main>
  )
}
