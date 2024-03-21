'use client'
import React, { useRef, useState, useEffect } from 'react'
import { getCategoryId, getData } from '@/services/api-content'
import { CardGamer } from './CardGamer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

const GAMERS_CARD = [
  {
    id: 1,
    name: 'Kevin',
    imgSrc: '/assets/Img-webp-TG/CardKevin-GAMERS.webp',
    href: '',
  },
  {
    id: 2,
    name: 'Alejandro',
    imgSrc: '/assets/Img-webp-TG/CardAlejandro-GAMERS.webp',
    href: '',
  },
  {
    id: 3,
    name: 'Yue',
    imgSrc: '/assets/Img-webp-TG/CardYue-GAMERS.webp',
    href: '',
  },
  {
    id: 4,
    name: 'Linker',
    imgSrc: '/assets/Img-webp-TG/CardLinker-GAMERS.webp',
    href: '',
  },
  {
    id: 5,
    name: 'Ramona',
    imgSrc: '/assets/Img-webp-TG/CardYue-GAMERS.webp',
    href: '',
  },
  {
    id: 6,
    name: 'Carlos',
    imgSrc: '/assets/Img-webp-TG/CardKevin-GAMERS.webp',
    href: '',
  },
]

// const COLOR_BULLETS = 'white';
// const SIZE_BULLETS = 'default';
const SLIDES_PER_VIEW = 3
const DELAY_PER_VIEW = 2500
const SPACE_BETWEEN_SLIDES = 0

export default function SliderGamers({ gamersData, miniCards }) {
  const sliderRef = useRef(0)
  
  return (
    <div className=" z-30 w-full h-full flex flex-col items-center justify-end overflow-hidden ">
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
