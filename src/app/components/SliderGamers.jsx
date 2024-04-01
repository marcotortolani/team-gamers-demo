'use client'
import React, { useRef } from 'react'
import { CardGamer } from './CardGamer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

// const COLOR_BULLETS = 'white';
// const SIZE_BULLETS = 'default';
const SLIDES_PER_VIEW = 3
const DELAY_PER_VIEW = 2500
const SPACE_BETWEEN_SLIDES = 5

export default function SliderGamers({ gamersData, miniCards }) {
  const sliderRef = useRef(0)
  
  return (
    <div className=" z-30 w-full h-full px-2 flex flex-col items-center justify-end overflow-hidden ">
      <Swiper
        ref={sliderRef}
        slidesPerView={SLIDES_PER_VIEW}
        centeredSlides={miniCards ? false : true}
        spaceBetween={miniCards ? SPACE_BETWEEN_SLIDES : 20}
        autoplay={{
          delay: DELAY_PER_VIEW,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        navigation={false}
        className="mySwiper w-full h-full overflow-hidden "
      >
        {gamersData?.map((gamerData) => (
          <SwiperSlide
            className=" relative pb-4 w-full h-full  cursor-pointer"
            key={gamerData.id}
          >
            <CardGamer path="/gaming/gamers" gamerData={gamerData} miniCard={miniCards} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
