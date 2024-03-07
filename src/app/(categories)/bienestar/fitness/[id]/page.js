import React from 'react';
import { CATEGORIES } from '@/utils/static_data';
import SectionRecommended from '@/app/components-old/SectionRecommended';
import PagePost from '@/app/components-old/PagePost';

export default function page({ params }) {
  const { id } = params;
  const cat = CATEGORIES.fitness;

  return (
    <main
      className={`z-0 mt-36 w-full h-full min-h-screen px-4 flex flex-col items-center gap-4`}
    >
      <PagePost id={id} />
      <SectionRecommended category={cat} qty={2} />

      <div className="w-full h-20"></div>
    </main>
  );
}
