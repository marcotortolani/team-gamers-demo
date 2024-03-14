'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'
import { PlayCircleIcon } from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import PaginationBullets from './ui/PaginationBullets'
import ImageMissing from './ImageMissing'

SwiperCore.use([Pagination])

export default function SwiperSliderPosts({
  posts,
  slidesPerView,
  centered,
  delayPerView,
  spaceBetweenSlides,
  colorBullets,
  sizeBullets,
  titleOnly,
}) {
  const [indexPag, setIndexPag] = useState(0)
  const sliderRef = useRef(0)

  const qtyBullets = Object.keys(posts).length - parseInt(slidesPerView) + 1

  const pagination = {
    clickable: true,
    type: 'custom',
    renderCustom: function (i, className) {
      setIndexPag(className)
      return null
    },
  }

  return (
    <div className=" w-screen h-fit  ">
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
        centeredSlides={centered}
        spaceBetween={spaceBetweenSlides}
        autoplay={{
          delay: delayPerView,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        pagination={pagination}
        modules={[Autoplay, Navigation]}
        navigation={false}
        className="mySwiper w-full  max-w-2xl md:max-w-2xl lg:max-w-4xl h-full lg:min-h-[250px] px-0 overflow-hidden flex justify-center items-center gap-6 "
      >
        {posts?.map((post) => (
          <SwiperSlide className={` w-full h-fit`} key={post.id}>
            <Link
              className=" relative w-full h-fit "
              href={`/${post.category}/${post.id}`}
            >
              <div
                className={` relative w-full flex justify-center h-fit  gap-4`}
              >
                <div className="  relative w-[90%] aspect-[3/2] ">
                  {post.images.length > 0 ? (
                    <Image
                      className={` w-auto h-full md:w-full md:h-auto object-cover rounded-lg`}
                      fill={true}
                      sizes="(max-width: 350px)"
                      src={post.images[0]}
                      alt={`Image ${post.title}`}
                    />
                  ) : (
                    <ImageMissing />
                  )}
                  <div className=" z-0 absolute w-full h-full flex items-center justify-center ">
                    <PlayCircleIcon color="white" size={60} />
                  </div>
                  <span className=" absolute top-3 left-3 px-2 py-1 text-xs text-White bg-Black border-2 border-Secondary rounded-full ">
                    Recién agregado
                  </span>
                </div>

                <div className=" z-20 absolute bottom-0 w-5/6  h-full flex flex-col justify-end gap-2 pb-4">
                  <h3
                    className={`text-White font-semibold line-clamp-1 uppercase text-start text-2xl `}
                  >
                    <span className=" px-2 pr-4 bg-Black box-decoration-clone leading-[3rem]">
                      {ReactHtmlParser(post.title)}
                    </span>
                  </h3>
                  {!titleOnly && (
                    <p
                      className={
                        ' lowercase font-medium text-xl md:text-2xl lg:text-base line-clamp-2 text-Black  overflow-hidden '
                      }
                    >
                      <span className="px-2 pr-4 bg-White/90 box-decoration-clone leading-[2rem]">
                        {ReactHtmlParser(post.excerpt)}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <PaginationBullets
        color={colorBullets}
        size={sizeBullets}
        qtyBullets={qtyBullets}
        index={indexPag}
      />
    </div>
  )
}
