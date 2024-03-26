import React from 'react'
import {
  getData,
  getCategoryId,
} from '../../services/api-content'
import { CAT_EDITORIAL } from '@/utils/static_data'
import { FileText } from 'lucide-react'
import SliderCoverLatestPosts from './SliderCoverLatestPosts'
import ShortCardsLatestPosts from './ShortCardsLatestPosts'
import LongCardsLatestPosts from './LongCardsLatestPosts'
import { TitleSummary } from './ui/TitleSummary'
import { TitleArticle } from './ui/TitleArticle'
import { CircuitBoard } from 'lucide-react'
import { Gamepad2 } from 'lucide-react'

export default async function EditorialesSummary() {
  const cat = CAT_EDITORIAL
  const categoryID = await getCategoryId(cat.editorial.name)

  const { data } = await getData(`categories?parent=${categoryID}`)
  const dataCategories = data.reduce((acc, cat) => {
    acc[cat.slug] = { id: cat.id, name: cat.name, slug: cat.slug }
    return acc
  }, {})


  return (
    <section className=" z-50 w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-8">
      <TitleSummary title="Editoriales" icon={FileText} />

      <SliderCoverLatestPosts
        id={categoryID}
        qty={5}
        categorySlug={cat.editorial.slug}
        styleColor="primary"
      />

      <article className=" w-full px-4 md:px-0 ">
        {/* subcategoria VIDEOJUEGOS */}
        <TitleArticle title="Videojuegos" icon={Gamepad2} />
        <ShortCardsLatestPosts
          id={dataCategories.videojuegos.id}
          qty={2}
          categorySlug={`${cat.editorial.slug}/${dataCategories.videojuegos.slug}`}
          accentColor="primary"
        />
      </article>

      <article className="w-full px-4 py-2 md:px-0 ">
        {/* subcategoria TECNOLOGIA */}
        <TitleArticle title="Tecnología" icon={CircuitBoard} />
        <LongCardsLatestPosts
          id={dataCategories.tecnologia.id}
          qty={2}
          categorySlug={`${cat.editorial.slug}/${dataCategories.tecnologia.slug}`}
        />
      </article>
    </section>
  )
}
