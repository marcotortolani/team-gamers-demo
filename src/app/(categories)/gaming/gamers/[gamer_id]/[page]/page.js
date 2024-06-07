import React from 'react'
import {
  getCategoryNameById,
  getPostsByPageByCategoryId,
} from '@/services/api-content'
import { Gamepad2 } from 'lucide-react'
import GamerPosts from '@/app/components/GamerPosts'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { CAT_GAMERS as cat } from '@/utils/static_data'

export default async function page({ params }) {
  const { gamer_id, page } = params
  let gamerName = ''
  let response
  if (gamer_id) {
    gamerName = await getCategoryNameById(gamer_id)
    response = await getPostsByPageByCategoryId({ id: gamer_id, page: page })
  }
  const { data, pages } = response

  return (
    <div className="z-0 mt-28 mb-36 w-full h-full flex flex-col items-center justify-between ">
      <div className=" w-full lg:max-w-screen-lg flex flex-col items-center">
        <TitleSection
          title={gamerName ? gamerName : 'No-name'}
          icon={Gamepad2}
          outline
          borderColor="border-Primary"
        />
        <GamerPosts
          path={`/${cat.gamers.slug}/${gamer_id}`}
          dataPosts={data}
          page={page}
          pagesPosts={pages}
          gamerID={gamer_id}
        />
      </div>
    </div>
  )
}
