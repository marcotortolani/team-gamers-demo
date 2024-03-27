import React from 'react'
import { CircuitBoard } from 'lucide-react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { CAT_EDITORIAL as cat } from '@/utils/static_data'
import { getCategoryId } from '@/services/api-content'
import SliderLatestModernPosts from '@/app/components/SliderLatestModernPosts'
import LongCardsLatestPosts from '@/app/components/LongCardsLatestPosts'
import ShortCardsLatestPosts from '@/app/components/ShortCardsLatestPosts'

export default async function page() {
  const categoryID = await getCategoryId(cat.tecnologia.name)
  return (
    <main className=" z-0 relative w-full pt-28 mb-20 px-4 flex flex-col items-center gap-4 ">
      {/* subcategoria TECNOLOGIA */}
      <TitleSection
        icon={CircuitBoard}
        title="Tecnologia"
        outline
        borderColor="border-Primary"
      />

      {categoryID && (
        <SliderLatestModernPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.tecnologia.slug}
          paginationHide
        />
      )}

      {categoryID && (
        <LongCardsLatestPosts
          id={categoryID}
          page={2}
          categorySlug={cat.tecnologia.slug}
        />
      )}

      {categoryID && (
        <ShortCardsLatestPosts
          id={categoryID}
          page={1}
          categorySlug={cat.tecnologia.slug}
          miniCard
          accentColor="secondary"
        />
      )}
    </main>
  )
}
