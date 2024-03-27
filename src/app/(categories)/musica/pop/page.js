import React from 'react'
import { Sparkles } from 'lucide-react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { CAT_MUSICA as cat } from '@/utils/static_data'
import { getCategoryId } from '@/services/api-content'
import SliderLatestModernPosts from '@/app/components/SliderLatestModernPosts'
import LongCardsLatestPosts from '@/app/components/LongCardsLatestPosts'
import ShortCardsLatestPosts from '@/app/components/ShortCardsLatestPosts'

export default async function page() {
  const categoryID = await getCategoryId(cat.pop.name)
  return (
    <main className=" z-0 relative w-full pt-28 mb-20 px-4 flex flex-col items-center gap-4 ">
      {/* subcategoria POP */}
      <TitleSection
        icon={Sparkles}
        title="Pop"
        outline
        borderColor="border-Primary"
      />

      {categoryID && (
        <SliderLatestModernPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.pop.slug}
        />
      )}

      {categoryID && (
        <LongCardsLatestPosts id={categoryID} categorySlug={cat.pop.slug} />
      )}

      {/* {categoryID && (
        <ShortCardsLatestPosts
          id={categoryID}
          qty={4}
          categorySlug={cat.pop.slug}
          // miniCard
          accentColor="secondary"
        />
      )} */}
    </main>
  )
}
