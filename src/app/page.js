import React from 'react'
import dynamic from 'next/dynamic'
import { getData } from '@/services/api-content'
import Loading from './components/skeleton/Loading'
const SliderRandomPostsHomeCover = dynamic(
  () => import('./components/SliderRandomPostsHomeCover'),
  { loading: () => <Loading /> }
)

const GamingSummary = dynamic(() => import('./components/GamingSummary'), {
  loading: () => <Loading />,
})
const EditorialesSummary = dynamic(
  () => import('./components/EditorialesSummary'),
  { loading: () => <Loading /> }
)
const MusicaSummary = dynamic(() => import('./components/MusicaSummary'), {
  loading: () => <Loading />,
})

export default async function Home() {
  const { data } = await getData('categories?per_page=50&parent=0')
  const { data: tagsData } = await getData('tags')

  const videoTagID = await tagsData.filter((tag) =>
    tag.slug.includes('video')
  )[0].id

  const categoriesIDExcluded = await data
    .filter((cat) => cat.slug.includes('video') || cat.slug === 'sin-categoria')
    .map((cat) => cat.id)

  const categoriesIDFiltered = await data
    .filter((cat) => !cat.slug.includes('video'))
    .filter((cat) => cat.slug !== 'sin-categoria')
    .map((cat) => ({ id: cat.id, slug: cat.slug }))

  const stringIDExcluded = await categoriesIDExcluded.join(',')
  const { data: dataPostsFiltered } = await getData(
    `posts?per_page=10&categories_exclude=${stringIDExcluded}&tags_exclude=${videoTagID}`
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
