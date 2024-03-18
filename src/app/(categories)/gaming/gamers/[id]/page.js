import React from 'react'
import {
  getCategoryNameById,
  getPostsByPageByCategoryId,
} from '@/services/api-content'
import { Gamepad2 } from 'lucide-react'
import GamerPosts from '@/app/components/GamerPosts'

export default async function page({ params }) {
  const { id } = params
  let gamerName = ''
  let response
  if (id) {
    gamerName = await getCategoryNameById(id)
    response = await getPostsByPageByCategoryId({ id: id })
  }
  const { data, pages } = response

  return (
    <div className="z-0 mt-28 mb-36 w-full h-full flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center">
        <h2 className=" px-4 py-[0.1rem] uppercase font-medium text-lg md:text-base flex items-center gap-3 bg-Black text-White border-[1px] border-Primary rounded-full">
          <div className=" w-6 h-6 ">
            <Gamepad2 width={'100%'} height={'100%'} />
          </div>
          {gamerName ? gamerName : 'No-name'}
        </h2>
        <GamerPosts dataPosts={data} pagesPosts={pages} gamerID={id} />
      </div>
    </div>
  )
}
