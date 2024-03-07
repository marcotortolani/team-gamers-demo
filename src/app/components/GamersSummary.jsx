import React from 'react';
import { getCategoryId } from '../../services/api-content';
import { CATEGORIES } from '@/utils/static_data';
import { Gamepad2, Ticket } from 'lucide-react';
import SliderGamers from './SliderGamers';
import SliderLatestPosts from './SliderLatestPosts';

export default async function GamersSummary() {
  const cat = CATEGORIES.bienestar;
  const id = await getCategoryId(cat.name);

  return (
    <section className=" z-50 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit pb-1 relative top-0 bg-red-500 flex flex-col items-center">
      {/* <LabelCategory title={summaryElements[0].title} /> */}
      <h1 className=" px-2 py-1 uppercase font-medium text-sm md:text-base flex items-center gap-2 bg-Secondary rounded-full">
        <Gamepad2 /> Nuestros Gamers
      </h1>

      {/* Slider fotos de NUESTROS GAMERS */}
      <SliderGamers />
      <p className=" w-full max-w-[350px] px-8 mb-4 text-White uppercase font-normal text-center">
        ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor gamer!
      </p>

      <article className=" flex flex-col gap-2">
        <h2 className=" pl-4 flex items-center text-White">
          <Ticket />
          <span className=" border-b-4 leading-5 border-b-Primary">Eventos</span>
        </h2>
        <SliderLatestPosts id={id} qty={5} categorySlug={cat.slug} />
      </article>

      {/* <StaticCover elem={staticCoverBienestar} /> */}
      {/* <SubcategoriesItems subcatElem={subcategoriesBienestar} /> */}

      {/* <CardsLatestPosts id={id} qty={2} categorySlug={cat.slug} /> */}

      <div className=" w-screen  h-full pt-6 flex items-center justify-center md:bg-Primary md:bg-opacity-80 ">
        {/* <SliderRandomPosts id={id} qty={4} categorySlug={cat.slug} /> */}
      </div>
    </section>
  );
}
