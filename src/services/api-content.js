'use server'
import { API_CONTENT } from '../config/config'

export async function getData(slug) {
  const res = await fetch(API_CONTENT + slug, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`)
  }

  const totalPosts = res.headers.get('X-WP-Total')
    ? res.headers.get('X-WP-Total')
    : 0

  const totalPages = res.headers.get('X-WP-TotalPages')
    ? res.headers.get('X-WP-TotalPages')
    : 0

  return {
    data,
    posts: totalPosts,
    pages: totalPages,
  }
}

export async function getDataPostById(id) {
  const { data } = await getData(`posts/${id}`)
  return data
}

export async function getDataCategoryByPostId(id) {
  const { data } = await getData(`categories?post=${id}`)
  return data
}

export async function getCategoryId(categoryName) {
  const { data } = await getData(`categories?search=${categoryName}`)

  const categoryLink = data[0]._links.self[0].href.split('/')
  const categoryLinkLength = categoryLink.length

  const categoryID = parseInt(
    categoryLink.slice(categoryLinkLength - 1, categoryLinkLength)[0]
  )
  return categoryID
}

export async function getPostsByCategoryId({
  id,
  perPage = 10,
  tagExclude = 0,
  tags = 0,
}) {
  const { data, posts, pages } = await getData(
    `posts?per_page=${perPage}&categories=${id}&tags_exclude=${tagExclude}`
  )
  return { data, posts, pages }
}

export async function getPostsByPageByCategoryId({
  id,
  page = 1,
  perPage = 10,
  tagExclude = 0,
}) {
  const { data, pages } = await getData(
    `posts?per_page=${perPage}&page=${page}&categories=${id}&tags_exclude=${tagExclude}`
  )

  return { data, pages }
}

export async function getVideoPostsByCategoryId({
  id,
  perPage = 10,
  page = 1,
  parentID = 0,
}) {
  const videoTag = 72
  const { data, pages } = await getData(
    `posts?per_page=${perPage}&page=${page}&categories=${id}&parent=${parentID}&tags=${videoTag}`
  )

  return { data, pages }
}

export async function searchData(slug) {
  const { data } = await getData(`posts?search=${slug}`)
  return data
}

export async function getCategoryNameByPostId(id) {
  const { data } = await getData(`categories?post=${id}`)
  return data[0].name.toLowerCase()
}

export async function getCategoryNameById(id) {
  const { data } = await getData(`categories/${id}`)

  return data.name
}
