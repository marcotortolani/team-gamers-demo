import React from 'react';
import { Skeleton } from '@/app/components-old/ui/skeleton';
import HorizontalLine from '@/app/components-old/ui/HorizontalLine';

export default function loading() {
  return (
    <main className=" z-0 relative w-full px-4 flex flex-col items-center ">
      <div className="w-full h-40"></div>
      <section className="w-full h-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] px-4 flex flex-col gap-4 lg:gap-6">
        <div className=" px-4 md:px-10 py-12 flex items-center space-x-4 bg-EpaPostButton rounded-xl">
          <Skeleton className="h-12 w-12 rounded-full bg-EpaPrimary bg-opacity-50" />
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-2/3 bg-EpaPrimary bg-opacity-50" />
            <Skeleton className="h-4 w-2/5 bg-EpaPrimary bg-opacity-50" />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
          <div className="w-full sm:w-1/2 px-4 py-12 flex items-center space-x-4 bg-EpaPostButton rounded-xl">
            <Skeleton className="h-12 w-12 rounded-full bg-EpaPrimary bg-opacity-50" />
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-2/3 bg-EpaPrimary bg-opacity-50" />
              <Skeleton className="h-4 w-2/5 bg-EpaPrimary bg-opacity-50" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 py-12 flex items-center space-x-4 bg-EpaPostButton rounded-xl">
            <Skeleton className="h-12 w-12 rounded-full bg-EpaPrimary bg-opacity-50" />
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-2/3 bg-EpaPrimary bg-opacity-50" />
              <Skeleton className="h-4 w-2/5 bg-EpaPrimary bg-opacity-50" />
            </div>
          </div>
        </div>
      </section>
      <div className=" w-full h-20 md:h-20 md:w-5/6 lg:max-w-4xl lg:w-4/6 flex justify-center items-center ">
        <HorizontalLine color={'defaultLight'} />
      </div>
      <section className="w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] px-4 flex flex-col gap-4 lg:gap-6">
        <div className=" px-4 md:px-10 py-12 flex items-center space-x-4 bg-EpaPostButton rounded-xl">
          <Skeleton className="h-12 w-12 rounded-full bg-EpaPrimary bg-opacity-50" />
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-2/3 bg-EpaPrimary bg-opacity-50" />
            <Skeleton className="h-4 w-2/5 bg-EpaPrimary bg-opacity-50" />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
          <div className="w-full sm:w-1/2 px-4 py-12 flex items-center space-x-4 bg-EpaPostButton rounded-xl">
            <Skeleton className="h-12 w-12 rounded-full bg-EpaPrimary bg-opacity-50" />
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-2/3 bg-EpaPrimary bg-opacity-50" />
              <Skeleton className="h-4 w-2/5 bg-EpaPrimary bg-opacity-50" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 py-12 flex items-center space-x-4 bg-EpaPostButton rounded-xl">
            <Skeleton className="h-12 w-12 rounded-full bg-EpaPrimary bg-opacity-50" />
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-2/3 bg-EpaPrimary bg-opacity-50" />
              <Skeleton className="h-4 w-2/5 bg-EpaPrimary bg-opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-20"></div>
    </main>
  );
}
