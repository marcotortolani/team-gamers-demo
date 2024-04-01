import React from 'react'
import { getData, getCategoryId } from '../../services/api-content'
import { CAT_MUSICA as cat } from '@/utils/static_data'
import SliderCoverLatestPosts from './SliderCoverLatestPosts'
import ShortCardsLatestPosts from './ShortCardsLatestPosts'
import LongCardsLatestPosts from './LongCardsLatestPosts'
import { TitleSummary } from './ui/TitleSummary'
import { TitleArticle } from './ui/TitleArticle'
import { PlayCircleIcon, Sparkles, Mic2Icon } from 'lucide-react'

export default async function MusicaSummary() {
  const categoryID = await getCategoryId(cat.musica.name)
  const { data } = await getData(`categories?parent=${categoryID}`)
  const dataCategories = data.reduce((acc, cat) => {
    acc[cat.slug] = { id: cat.id, name: cat.name, slug: cat.slug }
    return acc
  }, {})

  return (
    <section className=" z-50 w-screen md:w-full lg:max-w-screen-lg h-fit relative top-0 flex flex-col items-center gap-8">
      <TitleSummary title="Música" icon={PlayCircleIcon} />

      <article className=" ">
        <SliderCoverLatestPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.musica.slug}
          styleColor="secondary"
        />
      </article>

      <article className=" w-full px-4 md:px-0 ">
        {/* subcategoria TRAP */}
        <TitleArticle title="Trap/Urbano" icon={Mic2Icon} />
        <ShortCardsLatestPosts
          id={dataCategories.trap.id}
          qty={4}
          categorySlug={`${cat.musica.slug}/${dataCategories.trap.slug}`}
          miniCard
          accentColor="primary"
        />
      </article>

      <article className="w-full px-4 py-2 ">
        {/* subcategoria POP */}
        <TitleArticle title="Pop" icon={Sparkles} />
        <LongCardsLatestPosts
          id={dataCategories.pop.id}
          qty={2}
          categorySlug={`${cat.musica.slug}/${dataCategories.pop.slug}`}
        />
      </article>
    </section>
  )
}
