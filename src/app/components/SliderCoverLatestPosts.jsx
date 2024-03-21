import React from 'react';
import { getPostsByCategoryId } from '@/services/api-content';
import { getLatestPosts, cleanDataPosts } from '@/utils/functions';
import SwiperSliderCoverPosts from './SwiperSliderCoverPosts';

export default async function SliderCoverLatestPosts({
  id,
  qty,
  categorySlug,
  styleColor,
}) {
  const dataPosts = await getPostsByCategoryId({ id });

  const latestPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: dataPosts, qty: qty }),
    categorySlug,
  });

  return (
    <div className=" w-screen h-full ">
      <SwiperSliderCoverPosts
        posts={latestPosts}
        slidesPerView={1}
        delayPerView={3500}
        spaceBetweenSlides={0}
        colorBullets={'white'}
        sizeBullets={'default'}
        styleColor={styleColor}
      />
    </div>
  );
}
