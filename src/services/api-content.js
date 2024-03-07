import { API_CONTENT } from '../config/config';

export async function getData(slug) {
  const res = await fetch(API_CONTENT + slug, {
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

export async function getDataPostById(id) {
  const data_post = await getData(`posts/${id}`);
  return data_post;
}

export async function getDataCategoryByPostId(id) {
  const data_category = await getData(`categories?post=${id}`);
  return data_category;
}

export async function getCategoryId(categoryName) {
  const data_categs = await getData('categories?per_page=30');

  let categoryId;

  data_categs?.map((cat) => {
    if (cat.name.toLowerCase() === categoryName.toLowerCase()) {
      categoryId = cat.id;
    }
  });
  return categoryId;
}

export async function getPostsByCategoryId({ id, tagExclude = 0 }) {
  const perPage = 50;
  const data_posts = await getData(
    `posts?per_page=${perPage}&categories=${id}&tags_exclude=${tagExclude}`
  );
  return data_posts;
}

export async function getVideoPostsByCategoryId({ id, tagID = 14 }) {
  const perPage = 50;
  const data_posts = await getData(
    `posts?per_page=${perPage}&categories=${id}&tags=${tagID}`
  );
  return data_posts;
}

export async function searchData(slug) {
  const data = await getData(`posts?search=${slug}`);
  return data;
}

export async function getCategoryNameByPostId(id) {
  const data = await getData(`categories?post=${id}`);
  return data[0].name.toLowerCase();
}
