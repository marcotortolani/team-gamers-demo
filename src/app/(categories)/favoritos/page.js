import React from 'react';
import FavouriteCardPost from '@/app/components-old/FavouriteCardPost';

export default function FavouritesPage() {
  return (
    <main className=" z-0 mt-36 w-full   h-full min-h-screen px-4 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center">
        <FavouriteCardPost />
      </div>

      <div className="w-full h-20"></div>
    </main>
  );
}
