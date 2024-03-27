import React from 'react'
import { CAT_MUSICA as cat } from '@/utils/static_data'
import { getCategoryId, getData } from '@/services/api-content'
import { Music, Mic2Icon, Sparkles } from 'lucide-react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import SliderCoverLatestPosts from '@/app/components/SliderCoverLatestPosts'
import SliderLatestModernPosts from '@/app/components/SliderLatestModernPosts'
import LongCardsLatestPosts from '@/app/components/LongCardsLatestPosts'
import ShortCardsLatestPosts from '@/app/components/ShortCardsLatestPosts'

export default async function page() {
  const categoryID = await getCategoryId(cat.musica.name)
  const { data } = await getData(`categories?parent=${categoryID}`)
  const dataCategories = data.reduce((acc, cat) => {
    acc[cat.slug] = { id: cat.id, name: cat.name, slug: cat.slug }
    return acc
  }, {})

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
          categorySlug={cat.musica.slug}
          styleColor="primary"
        />
      </section>

      <section className=" mt-2 w-full py-2 flex flex-col items-center gap-4">
        {/* subcategoria TRAP/URBANO */}
        <TitleSection icon={Mic2Icon} title="Trap & Urbano" />

        {categoryID && (
          <SliderLatestModernPosts
            id={dataCategories.trap.id}
            qty={5}
            categorySlug={`${cat.musica.slug}/${dataCategories.trap.slug}`}
            paginationHide
          />
        )}

        {categoryID && (
          <LongCardsLatestPosts
            id={dataCategories.trap.id}
            qty={2}
            categorySlug={`${cat.musica.slug}/${dataCategories.trap.slug}`}
          />
        )}

        {/* {categoryID && (
          <ShortCardsLatestPosts
            id={dataCategories.trap.id}
            qty={4}
            categorySlug={`${cat.musica.slug}/${dataCategories.trap.slug}`}
            // miniCard
            accentColor="secondary"
          />
        )} */}
      </section>

      <section className=" mt-6 w-full py-2 flex flex-col items-center gap-4">
        {/* subcategoria POP */}
        <TitleSection icon={Sparkles} title="Pop" />

        {categoryID && (
          <SliderLatestModernPosts
            id={dataCategories.pop.id}
            qty={5}
            categorySlug={`${cat.musica.slug}/${dataCategories.pop.slug}`}
            paginationHide
          />
        )}

        {categoryID && (
          <LongCardsLatestPosts
            id={dataCategories.pop.id}
            qty={2}
            categorySlug={`${cat.musica.slug}/${dataCategories.pop.slug}`}
          />
        )}

        {/* {categoryID && (
          <ShortCardsLatestPosts
            id={dataCategories.pop.id}
            qty={4}
            categorySlug={`${cat.musica.slug}/${dataCategories.pop.slug}`}
            // miniCard
            accentColor="secondary"
          />
        )} */}
      </section>
    </main>
  )
}
