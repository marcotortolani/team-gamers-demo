import React from 'react'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { PlayCircleIcon } from 'lucide-react'

export default function layout({ children }) {
  return (
    <main className=" z-0 mt-28 mb-16 w-screen h-full min-h-screen px-0 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center"></div>
      <TitleSection
        icon={PlayCircleIcon}
        title="Videos"
        outline
        borderColor="border-Primary"
      />
      {children}
    </main>
  )
}
