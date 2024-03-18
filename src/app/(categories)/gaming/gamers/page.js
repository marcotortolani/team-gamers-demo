import React from 'react'
import { getData, getCategoryId } from '@/services/api-content'
import { Gamepad2 } from 'lucide-react'
import CardsGamers from '@/app/components/CardsGamers'
import { TitleSection } from '@/app/components/ui/TitleSection'

// function cleanDataCategories({ dataCategories }) {
//   return dataCategories.map((category) => ({
//     id: category.id,
//     name: category.name,
//     slug: category.slug,
//   }))
// }

export default async function GamersPage() {
  const gamersID = await getCategoryId('videos')
  const { data } = await getData('categories?per_page=50')
  const gamersCategories = data.filter((cat) => cat.parent === gamersID)

  return (
    <main className=" z-0 relative w-full pt-28 mb-24 px-4 flex flex-col items-center gap-2 ">
      <section className=" w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-4">

        <TitleSection
          icon={Gamepad2}
          title="Gamers"
          outline
          borderColor="border-Primary"
        />
        <p className=" w-full max-w-[350px] px-8 mb-4 text-White uppercase font-normal text-center">
          ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor
          gamer!
        </p>

        <CardsGamers gamersData={gamersCategories} path={'/gaming/gamers/'} />
      </section>
    </main>
  )
}
