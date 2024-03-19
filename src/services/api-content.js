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

  const totalPages = res.headers.get('X-WP-TotalPages')
    ? res.headers.get('X-WP-TotalPages')
    : 0

  return {
    data,
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
  const { data } = await getData('categories?per_page=30')

  let categoryId

  data?.map((cat) => {
    if (cat.name.toLowerCase() === categoryName.toLowerCase()) {
      categoryId = cat.id
    }
  })
  return categoryId
}

export async function getPostsByCategoryId({
  id,
  perPage = 50,
  tagExclude = 0,
}) {
  const { data } = await getData(
    `posts?per_page=${perPage}&categories=${id}&tags_exclude=${tagExclude}`
  )
  return data
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

export async function getVideoPostsByCategoryId({ id, tagID = 2 }) {
  const perPage = 50
  const { data } = await getData(
    `posts?per_page=${perPage}&categories=${id}&parent=${tagID}`
  )
  return data
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
