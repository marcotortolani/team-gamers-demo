import React from 'react'
import { Gamepad2 } from 'lucide-react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { CAT_EDITORIAL as cat } from '@/utils/static_data'
import { getCategoryId } from '@/services/api-content'
import SliderLatestModernPosts from '@/app/components/SliderLatestModernPosts'
import LongCardsLatestPosts from '@/app/components/LongCardsLatestPosts'
import ShortCardsLatestPosts from '@/app/components/ShortCardsLatestPosts'

export default async function page() {
  const categoryID = await getCategoryId(cat.videojuegos.name)

  return (
    <main className=" z-0 relative w-full pt-28 mb-20 px-4 flex flex-col items-center gap-4 ">
      {/* subcategoria VIDEOJUEGOS */}
      <TitleSection
        icon={Gamepad2}
        title="Videojuegos"
        outline
        borderColor="border-Primary"
      />

      {categoryID && (
        <SliderLatestModernPosts
          id={categoryID}
          qty={10}
          categorySlug={cat.videojuegos.slug}
          paginationHide
        />
      )}

      {categoryID && (
        <LongCardsLatestPosts
          id={categoryID}
          qty={10}
          page={2}
          categorySlug={cat.videojuegos.slug}
        />
      )}

      {categoryID && (
        <ShortCardsLatestPosts
          id={categoryID}
          qty={10}
          page={3}
          categorySlug={cat.videojuegos.slug}
          miniCard
          accentColor="secondary"
        />
      )}
    </main>
  )
}
