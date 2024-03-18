import React from 'react'
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'

import { getPostsByCategoryId } from '@/services/api-content.js'
import { getLatestPosts, cleanDataPosts } from '@/utils/functions.js'
import ShortCard from './ShortCard.jsx'

//const tagIDVideoPost = 2;

export default async function ShortCardsLatestPosts({
  id,
  qty,
  categorySlug,
  miniCard,
  accentColor,
  tagExclude = 2,
}) {
  const dataPosts = await getPostsByCategoryId({ id, tagExclude: tagExclude })

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: dataPosts, qty: qty }),
    categorySlug: categorySlug,
  })

  return (
    <div className=" w-full h-full flex justify-center ">
      <ul className=" w-full h-full grid grid-cols-2 grid-rows-1  gap-3 md:gap-4">
        {latestPosts?.map((post, index) => (
          <ShortCard
            key={post.id}
            qty={latestPosts.length}
            post={post}
            miniCard={miniCard}
            accentColor={accentColor}
          />
        ))}
      </ul>
    </div>
  )
}
