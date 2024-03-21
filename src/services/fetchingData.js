'use server'

import { getPostsByCategoryId } from '@/services/api-content'
import { cleanDataPosts, getLatestPosts } from '@/utils/functions'

export async function fetchingData({ id, categorySlug, qty }) {
  const dataPosts = await getPostsByCategoryId({ id })

  const cardPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: dataPosts, qty: qty }),
    categorySlug,
  })

  return cardPosts
}
