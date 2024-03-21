import React from 'react'
import {
  getCategoryId,
  getVideoPostsByCategoryId,
} from '../../services/api-content'
import { getRandomPosts, cleanDataPosts } from '@/utils/functions'
import { CATEGORIES, CAT_EDITORIAL } from '@/utils/static_data'
import { PlayCircleIcon } from 'lucide-react'
import SliderCoverLatestPosts from './SliderCoverLatestPosts'
import ShortCardsLatestPosts from './ShortCardsLatestPosts'
import LongCardsLatestPosts from './LongCardsLatestPosts'
import { TitleSummary } from './ui/TitleSummary'

export default async function MusicaSummary() {
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId(cat.name)

  // const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID });

  // const qtyVideoElements = 4;
  // const randomVideoPosts = cleanDataPosts({
  //   posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
  //   categorySlug: cat.slug,
  // });

  return (
    <section className=" z-50 w-screen md:w-full lg:max-w-screen-lg h-fit relative top-0 flex flex-col items-center gap-8">
      <TitleSummary title="Música" icon={PlayCircleIcon} />

      <article className=" ">
        <SliderCoverLatestPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.slug}
          styleColor="secondary"
        />
      </article>

      <article className=" w-full px-4 md:px-0 ">
        {/* subcategoria TRAP */}
        <ShortCardsLatestPosts
          id={categoryID}
          qty={4}
          categorySlug={cat.slug}
          miniCard
          accentColor="primary"
        />
      </article>

      <article className="w-full px-4 py-2 ">
        {/* subcategoria URBANO */}
        <LongCardsLatestPosts id={categoryID} qty={2} categorySlug={cat.slug} />
      </article>
    </section>
  )
}
