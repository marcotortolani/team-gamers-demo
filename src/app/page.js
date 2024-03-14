import React from 'react';
import { getData } from '@/services/api-content';
import { CATEGORIES } from '@/utils/static_data';

import SliderRandomPostsHomeCover from './components/SliderRandomPostsHomeCover';
import GamersSummary from './components/GamersSummary';
import EditorialesSummary from './components/EditorialesSummary';
import MusicaSummary from './components/MusicaSummary';

export default async function Home() {
  const dataCategories = await getData('categories?per_page=30');

  const categoriesIDExcluded = await dataCategories
    .filter(
      (cat) =>
        cat.slug === CATEGORIES.videos.slug || cat.slug === 'sin-categoria'
    )
    .map((cat) => cat.id);

  const categoriesIDFiltered = await dataCategories
    .filter(
      (cat) =>
        cat.slug !== CATEGORIES.videos.slug || cat.slug !== 'sin-categoria'
    )
    .map((cat) => ({ id: cat.id, slug: cat.slug }));

  const stringIDExcluded = await categoriesIDExcluded.join(',');

  const dataPostsFiltered = await getData(
    `posts?per_page=30&categories_exclude=${stringIDExcluded}`
  );

  return (
    <main className=" z-0 relative w-full pt-44 px-4 flex flex-col items-center gap-2 ">
      <SliderRandomPostsHomeCover
        posts={dataPostsFiltered}
        qty={5}
        catFiltered={categoriesIDFiltered}
      />
      
      <GamersSummary />
      <EditorialesSummary />
      <MusicaSummary />
      <div className="w-full h-16"></div>
    </main>
  );
}
