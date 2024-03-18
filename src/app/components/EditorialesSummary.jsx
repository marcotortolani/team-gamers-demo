import React from 'react'
import {
  getCategoryId,
  getVideoPostsByCategoryId,
} from '../../services/api-content'
import { getRandomPosts, cleanDataPosts } from '@/utils/functions'
import { CAT_EDITORIAL } from '@/utils/static_data'
import { FileText } from 'lucide-react'
import SliderCoverLatestPosts from './SliderCoverLatestPosts'
import ShortCardsLatestPosts from './ShortCardsLatestPosts'
import LongCardsLatestPosts from './LongCardsLatestPosts'
import CardLastPost from './CardLastPost'

export default async function EditorialesSummary() {
  const cat = CAT_EDITORIAL.editorial
  const categoryID = await getCategoryId(cat.name)

  const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID })

  const qtyVideoElements = 4
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  })

  return (
    <section className=" z-50 w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-8">
      <h1 className=" px-8 py-[0.15rem] uppercase font-medium text-sm md:text-base flex items-center gap-2 bg-Secondary rounded-full">
        <div className=" w-4 h-4 ">
          <FileText width={'100%'} height={'100%'} />
        </div>
        Editoriales
      </h1>

      <article className=" ">
        <SliderCoverLatestPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.slug}
          styleColor="primary"
        />
      </article>

      <article className=" w-full px-4 ">
        {/* subcategoria VIDEOJUEGOS */}
        <ShortCardsLatestPosts
          id={categoryID}
          qty={2}
          categorySlug={cat.slug}
          accentColor="primary"
        />
      </article>

      <article className="w-full px-4 py-2 ">
        {/* subcategoria TECNOLOGIA */}
        <LongCardsLatestPosts id={categoryID} qty={2} categorySlug={cat.slug} />
      </article>
    </section>
  )
}
