'use client'
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import PaginationBullets from './ui/PaginationBullets'
import CardLastPost from './CardLastPost'
import CardLastModernPost from './CardLastModernPost'

SwiperCore.use([Pagination])

export default function SwiperSliderModernPosts({
  posts,
  slidesPerView,
  centered,
  delayPerView,
  spaceBetweenSlides,
  colorBullets,
  sizeBullets,
  titleOnly,
  paginationHide,
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
        className="mySwiper w-full   max-w-2xl md:max-w-2xl lg:max-w-4xl h-full lg:min-h-[250px] "
      >
        {posts?.map((post) => (
          <SwiperSlide className={` w-full h-fit `} key={post.id}>
            <CardLastModernPost post={post} titleOnly={titleOnly} />
          </SwiperSlide>
        ))}
      </Swiper>
      {!paginationHide && (
        <PaginationBullets
          color={colorBullets}
          size={sizeBullets}
          qtyBullets={qtyBullets}
          index={indexPag}
        />
      )}
    </div>
  )
}
