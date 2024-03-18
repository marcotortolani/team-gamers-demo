import { TitleSection } from '@/app/components/ui/TitleSection'
import { Ticket } from 'lucide-react'
import React from 'react'

export default function layout({ children }) {
  return (
    <main className=" z-0 relative w-full pt-28 mb-28 px-4 flex flex-col items-center gap-2 ">
      <section className=" w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-4">
        <TitleSection
          icon={Ticket}
          title="Trucos"
          outline
          borderColor="border-Primary"
        />
        {children}
      </section>
    </main>
  )
}
