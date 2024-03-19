import React from 'react'
import { getData, getCategoryId } from '@/services/api-content'
import { Gamepad2 } from 'lucide-react'
import CardsGamers from '@/app/components/CardsGamers'
import { TitleSection } from '@/app/components/ui/TitleSection'

export default async function GamersPage() {
  // este nombre de categoria en realidad es "gamers" pero no
  // esta funcionando, puede ser algo de cache en los cambios
  const gamersID = await getCategoryId('gamers')
  const { data } = await getData(
    `categories?parent=${gamersID}&per_page=30`
  )

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

        <CardsGamers gamersData={data} path={'/gaming/gamers/'} />
      </section>
    </main>
  )
}
