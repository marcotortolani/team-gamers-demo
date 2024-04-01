import React from 'react'
import { Skeleton } from '@/app/components/ui/skeleton'

export default function loading() {
  return (
    <main className=" z-0 relative w-full px-4 flex flex-col items-center ">
      <div className="w-full h-40"></div>
      <section className="w-full h-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] px-4 flex flex-col gap-4 lg:gap-6">
        <div className=" px-4 md:px-10 py-12 flex items-center space-x-4 bg-Secondary rounded-xl">
          <Skeleton className="h-12 w-12 rounded-full bg-Primary bg-opacity-80" />
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-2/3 bg-Primary bg-opacity-80" />
            <Skeleton className="h-4 w-2/5 bg-Primary bg-opacity-80" />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
          <div className="w-full sm:w-1/2 px-4 py-12 flex items-center space-x-4 bg-Secondary rounded-xl">
            <Skeleton className="h-12 w-12 rounded-full bg-Primary bg-opacity-80" />
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-2/3 bg-Primary bg-opacity-80" />
              <Skeleton className="h-4 w-2/5 bg-Primary bg-opacity-80" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 py-12 flex items-center space-x-4 bg-Secondary rounded-xl">
            <Skeleton className="h-12 w-12 rounded-full bg-Primary bg-opacity-80" />
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-2/3 bg-Primary bg-opacity-80" />
              <Skeleton className="h-4 w-2/5 bg-Primary bg-opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-20"></div>
    </main>
  )
}
