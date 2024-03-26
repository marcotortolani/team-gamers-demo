import React from 'react'
import { getData } from '@/services/api-content'
import SliderRandomPostsHomeCover from './components/SliderRandomPostsHomeCover'
import GamingSummary from './components/GamingSummary'
import EditorialesSummary from './components/EditorialesSummary'
import MusicaSummary from './components/MusicaSummary'

export default async function Home() {
  const { data } = await getData('categories?per_page=50')

  const categoriesIDExcluded = await data
    .filter((cat) => cat.slug === 'videos' || cat.slug === 'sin-categoria')
    .map((cat) => cat.id)

  const categoriesIDFiltered = await data
    .filter((cat) => cat.slug !== 'videos')
    .filter((cat) => cat.slug !== 'sin-categoria')
    .map((cat) => ({ id: cat.id, slug: cat.slug }))

  const stringIDExcluded = await categoriesIDExcluded.join(',')

  const { data: dataPostsFiltered } = await getData(
    `posts?per_page=10&categories_exclude=${stringIDExcluded}`
  )

  return (
    <main className=" z-0 relative overflow-x-hidden w-full top-[11rem] md:top-[13rem] lg:top-[16rem] px-4 flex flex-col items-center gap-6 ">
      <SliderRandomPostsHomeCover
        posts={dataPostsFiltered}
        qty={5}
        catFiltered={categoriesIDFiltered}
      />

      <GamingSummary />
      <EditorialesSummary />
      <MusicaSummary />
      <div className="w-full h-[12rem] md:h-[15rem] lg:h-[22rem]"></div>
    </main>
  )
}
