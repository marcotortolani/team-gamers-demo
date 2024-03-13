import React from 'react';
import { CAT_EDITORIAL } from '@/utils/static_data';
import {
  getCategoryId,
  getPostsByCategoryId,
  getVideoPostsByCategoryId,
} from '@/services/api-content';
import { getRandomPosts, cleanDataPosts } from '@/utils/functions';
import FeaturedPosts from '@/app/components/FeaturedPosts';
import SliderVideoPosts from '@/app/components/SliderMiniVideoPosts';
import LatestPosts from '@/app/components/LongCardsLatestPosts';
import SliderCover from '@/app/components-old/SliderCover';
import SubcategoriesItems from '@/app/components-old/SubcategoriesItems';
import { subcategoriesAmor } from '@/utils/static_data';

const videoTag = 14;

export default async function AmorPage() {
  const cat = CAT_EDITORIAL.editorial;
  const categoryID = await getCategoryId(cat.name);
  const dataPosts = await getPostsByCategoryId({ id: categoryID });
  const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID });

  const qtyElements = 4;
  const randomPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataPosts, qty: qtyElements }),
    categorySlug: cat.slug,
  });

  const qtyVideoElements = 4;
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  });

  return (
    <main className=" z-0 mt-36 w-full   h-full min-h-screen px-4 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center">
        <SliderCover
          sliderElements={randomPosts}
          slidesPerView={1}
          spaceBetweenSlides={30}
          delayPerView={3500}
          colorBullets={'primary'}
          sizeBullets={'default'}
        />

        <SubcategoriesItems subcatElem={subcategoriesAmor} />

        <FeaturedPosts
          id={categoryID}
          qty={5}
          categorySlug={cat.slug}
          tagExclude={videoTag}
        />

        <SliderVideoPosts
          sliderElements={randomVideoPosts}
          slidesPerView={2}
          spaceBetweenSlides={10}
          delayPerView={3500}
          colorBullets={'default'}
          sizeBullets={'default'}
        />

        <LatestPosts id={categoryID} qty={'all'} categorySlug={cat.slug} />
      </div>

      <div className="w-full h-20"></div>
    </main>
  );
}