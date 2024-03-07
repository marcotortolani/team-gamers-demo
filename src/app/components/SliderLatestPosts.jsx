import React from 'react';
import { getPostsByCategoryId } from '@/services/api-content';
import { getLatestPosts, cleanDataPosts } from '@/utils/functions';
import SwiperSliderPosts from './SwiperSliderPosts';

export default async function SliderLatestPosts({ id, qty, categorySlug }) {
  const dataPosts = await getPostsByCategoryId({ id });

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: dataPosts, qty: qty }),
    categorySlug,
  });

  return (
    <SwiperSliderPosts
      posts={latestPosts}
      slidesPerView={1}
      delayPerView={3500}
      spaceBetweenSlides={0}
      colorBullets={'white'}
      sizeBullets={'default'}
    />
  );
}
