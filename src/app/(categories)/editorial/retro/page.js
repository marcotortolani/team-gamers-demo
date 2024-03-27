import React from 'react'
import { Joystick } from 'lucide-react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { CAT_EDITORIAL as cat } from '@/utils/static_data'
import { getCategoryId } from '@/services/api-content'
import SliderLatestModernPosts from '@/app/components/SliderLatestModernPosts'
import LongCardsLatestPosts from '@/app/components/LongCardsLatestPosts'
import ShortCardsLatestPosts from '@/app/components/ShortCardsLatestPosts'

export default async function page() {
  const categoryID = await getCategoryId(cat.retro.name)
  return (
    <main className=" z-0 relative w-full pt-28 mb-20 px-4 flex flex-col items-center gap-4 ">
      {/* subcategoria RETRO */}
      <TitleSection
        icon={Joystick}
        title="Retro"
        outline
        borderColor="border-Primary"
      />

      {categoryID && (
        <SliderLatestModernPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.retro.slug}
          paginationHide
        />
      )}

      {categoryID && (
        <LongCardsLatestPosts
          id={categoryID}
          page={2}
          categorySlug={cat.retro.slug}
        />
      )}

      {categoryID && (
        <ShortCardsLatestPosts
          id={categoryID}
          categorySlug={cat.retro.slug}
          miniCard
          accentColor="secondary"
        />
      )}
    </main>
  )
}
