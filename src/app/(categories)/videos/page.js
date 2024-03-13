import React from 'react';
import { CATEGORIES } from '@/utils/static_data';
import {
  getData,
  getCategoryId,
  getPostsByCategoryId,
} from '@/services/api-content';
import { cleanDataPosts } from '@/utils/functions';
import FeaturedPosts from '@/app/components/FeaturedPosts';
import CardsVideoPost from '@/app/components/CardsVideoPost';

function cleanDataCategories({ dataCategories }) {
  return dataCategories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
  }));
}

export default async function VideosPage() {
  const cat = CATEGORIES.videos;
  const categoryID = await getCategoryId(cat.name);

  return (
    <main className=" z-0 mt-28 w-full   h-full min-h-screen px-4 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center">
        {/* Ver videos simples, sin contenidos */}

        {/* <FeaturedPosts
          id={categoryID}
          qty={'all'}
          categorySlug={cat.slug}
          tagExclude={categoryID}
        /> */}

        {/* Ver video-posts de todas las categorias, con contenido */}
        <CardsVideoPost id={categoryID} />

        <div className="w-full h-20"></div>
      </div>
    </main>
  );
}
