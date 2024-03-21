'use server'

import { getPostsByCategoryId } from '@/services/api-content'
import { cleanDataPosts } from '@/utils/functions'

export async function fetchingData({ id, categorySlug, qty }) {
  const { data, posts } = await getPostsByCategoryId({ id, perPage: qty })

  const cardPosts = cleanDataPosts({
    posts: data,
    categorySlug,
  })

  return { cardPosts, posts }
}
