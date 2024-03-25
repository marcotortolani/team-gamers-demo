import React from 'react'
import { getDataPostById } from '@/services/api-content'
import { getVimeoNumber } from '@/utils/functions'
import SectionRecommended from '@/app/components/SectionRecommended'
import { CAT_EDITORIAL } from '@/utils/static_data'
import ReactHtmlParser from 'react-html-parser'

export default async function VideoPage({ params }) {
  const { id } = params
  const cat = CAT_EDITORIAL.editorial
  const dataVideo = await getDataPostById(id)
  //const imageHeader = getImageHeaderPost(dataVideo)
  const vimeoNumber = getVimeoNumber({ string: dataVideo?.content.rendered })

  return (
    <div className=" w-full px-4  flex flex-col items-center">
      <div className=" w-full aspect-video rounded-md lg:rounded-lg">
        {vimeoNumber && (
          <iframe
            src={
              'https://player.vimeo.com/video/' +
              vimeoNumber +
              `?background=0&badge=1&autoplay=0&autopause=1&byline=0&controls=1&pip=none&quality_selector=0`
            }
            className=" rounded-[inherit]"
            frameBorder="0"
            loading="lazy"
            width="100%"
            height="100%"
            allow="fullscreen"
            allowFullScreen
            autoPlay={false}
            // style="position:absolute;top:0;left:0;width:100%;height:100%;"
            title={dataVideo?.title.rendered}
          ></iframe>
        )}
      </div>
      <div className=" z-20 mt-2 w-full h-full py-[2%]">
        <h3
          className={` w-fit px-2 py-1 bg-Secondary text-Black uppercase font-medium text-left text-xl md:text-xl lg:text-2xl xl:text-3xl line-clamp-1`}
        >
          {ReactHtmlParser(dataVideo?.title.rendered)}
        </h3>
      </div>
      <SectionRecommended category={cat} qty={2} />
    </div>
  )
}
