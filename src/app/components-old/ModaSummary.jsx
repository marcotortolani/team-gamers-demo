import React from 'react';
import {
  getCategoryId,
  getVideoPostsByCategoryId,
} from '../../services/api-content';
import { cleanDataPosts, getRandomPosts } from '@/utils/functions';
import { CATEGORIES } from '@/utils/static_data';
import StaticCover from './StaticCover';
import SliderVideoPosts from '../components/SliderMiniVideoPosts';
import FeaturedPosts from '../components/FeaturedPosts';
import LatestPosts from '../components/LongCardsLatestPosts';
import { staticCoverModa } from '@/utils/static_data';

export default async function ModaSummary() {
  const cat = CATEGORIES.moda;
  const categoryID = await getCategoryId(cat.name);
  const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID });

  const qtyVideoElements = 4;
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  });

  return (
    <section className=" z-50 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit pb-0 mt-6 md:mt-0 relative top-0 flex flex-col items-center justify-around">
      <StaticCover elem={staticCoverModa} />

      <FeaturedPosts
        id={categoryID}
        qty={5}
        categorySlug={cat.slug}
        type={''}
      />

      <SliderVideoPosts
        sliderElements={randomVideoPosts}
        slidesPerView={2}
        spaceBetweenSlides={10}
        delayPerView={3500}
        colorBullets={'default'}
        sizeBullets={'default'}
      />

      <LatestPosts id={categoryID} qty={2} categorySlug={cat.slug} />
    </section>
  );
}
