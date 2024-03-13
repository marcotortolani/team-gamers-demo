import React from 'react';
import { getPostsByCategoryId } from '@/services/api-content';
import { getLatestPosts, cleanDataPosts } from '@/utils/functions';
import SwiperSliderPosts from './SwiperSliderPosts';

export default async function SliderLatestTricks({ id, qty, categorySlug }) {
  const dataPosts = await getPostsByCategoryId({ id });

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: dataPosts, qty: qty }),
    categorySlug,
  });

  return (
    <SwiperSliderPosts
      posts={latestPosts}
      slidesPerView={1.1}
      centered
      delayPerView={3500}
      spaceBetweenSlides={-20}
      colorBullets={'white'}
      sizeBullets={'default'}
      titleOnly
    />
  );
}
