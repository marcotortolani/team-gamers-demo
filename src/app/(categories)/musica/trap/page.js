import React from 'react'
import { Mic2Icon } from 'lucide-react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { CAT_EDITORIAL } from '@/utils/static_data'
import { getCategoryId } from '@/services/api-content'
import SliderLatestModernPosts from '@/app/components/SliderLatestModernPosts'
import LongCardsLatestPosts from '@/app/components/LongCardsLatestPosts'
import ShortCardsLatestPosts from '@/app/components/ShortCardsLatestPosts'

export default async function page() {
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId(cat.name)
  return (
    <main className=" z-0 relative w-full pt-28 mb-20 px-4 flex flex-col items-center gap-4 ">
      <TitleSection
        icon={Mic2Icon}
        title="Trap/Urbano"
        outline
        borderColor="border-Primary"
      />

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
        <LongCardsLatestPosts id={categoryID} qty={2} categorySlug={cat.slug} />
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
    </main>
  )
}
