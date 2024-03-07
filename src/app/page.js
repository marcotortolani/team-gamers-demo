import React from 'react';
import { getData } from '@/services/api-content';
import { CATEGORIES } from '@/utils/static_data';

import SliderRandomPostsHomeCover from './components/SliderRandomPostsHomeCover';
import SliderCategoryButtons from './components-old/SliderCategoryButtons';
import BienestarSummary from './components-old/BienestarSummary';
import AmorSummary from './components-old/AmorSummary';
import ModaSummary from './components-old/ModaSummary';
import HorizontalLine from './components-old/ui/HorizontalLine';
import BellezaSummary from './components-old/BellezaSummary';
import RecetasSummary from './components-old/RecetasSummary';
import GamersSummary from './components/GamersSummary';

export default async function Home() {
  const dataCategories = await getData('categories?per_page=30');

  const categoriesIDExcluded = await dataCategories
    .filter(
      (cat) =>
        cat.slug === CATEGORIES.videos.slug ||
        cat.slug === CATEGORIES.recetas.slug ||
        cat.slug === 'sin-categoria'
    )
    .map((cat) => cat.id);

  const categoriesIDFiltered = await dataCategories
    .filter(
      (cat) =>
        cat.slug !== CATEGORIES.videos.slug ||
        cat.slug !== CATEGORIES.recetas.slug ||
        cat.slug !== 'sin-categoria'
    )
    .map((cat) => ({ id: cat.id, slug: cat.slug }));

  const stringIDExcluded = await categoriesIDExcluded.join(',');

  const dataPostsFiltered = await getData(
    `posts?per_page=30&categories_exclude=${stringIDExcluded}`
  );

  return (
    <main className=" z-0 relative w-full px-4 flex flex-col items-center gap-2 ">
      {/* <div className=" z-40 relative top-0 w-screen h-[92vh] min-h-[500px] flex flex-col items-center"></div> */}
      <SliderRandomPostsHomeCover
        posts={dataPostsFiltered}
        qty={5}
        catFiltered={categoriesIDFiltered}
      />

      <GamersSummary />

      {/* <SliderCategoryButtons /> */}

      {/* <BienestarSummary /> */}

      <div className=" w-full mb-4 md:mb-0 md:h-20 md:w-5/6 lg:max-w-4xl lg:w-4/6 flex justify-center items-center ">
        {/* <HorizontalLine /> */}
      </div>

      {/* <AmorSummary /> */}

      <div className=" w-full md:h-20 md:w-5/6 lg:max-w-4xl lg:w-4/6 flex justify-center items-center ">
        {/* <HorizontalLine /> */}
      </div>

      {/* <ModaSummary /> */}

      <div className=" w-full md:h-20 md:w-5/6 lg:max-w-4xl lg:w-4/6 flex justify-center items-center ">
        {/* <HorizontalLine /> */}
      </div>

      {/* <BellezaSummary /> */}

      <div className=" w-full md:h-20 md:w-5/6 lg:max-w-4xl lg:w-4/6 flex justify-center items-center ">
        {/* <HorizontalLine /> */}
      </div>

      {/* <RecetasSummary /> */}

      <div className=" w-full md:h-20 md:w-5/6 lg:max-w-4xl lg:w-4/6 flex justify-center items-center ">
        {/* <HorizontalLine /> */}
      </div>

      <div className="w-full h-44"></div>
    </main>
  );
}
