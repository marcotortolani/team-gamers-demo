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
const SLIDES_PER_VIEW = 3.25
const DELAY_PER_VIEW = 2500
const SPACE_BETWEEN_SLIDES = 0

export default function SliderGamers({ miniCards }) {
  const sliderRef = useRef(0)
  const [dataGamers, setDataGamers] = useState([])

  // esto asi no se puede hacer, es una doble peticion a la API
  // esto se debe a que "GAMERS" ("videos" hasta ahora) esta
  // creado como categoria pero no tiene TAG asignado
  // y no hay endpoint en la api para traer categorias 
  // filtrando por TAG
  
  // const gamersID = await getCategoryId('videos')
  // const { data } = await getData('categories?per_page=50')
  // const gamersCategories = data.filter((cat) => cat.parent === gamersID)

  useEffect(() => {
    
  }, [])

  return (
    <div className=" z-30 w-screen h-fit flex flex-col items-center justify-end overflow-hidden ">
      <Swiper
        ref={sliderRef}
        slidesPerView={miniCards ? SLIDES_PER_VIEW : 1.8}
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
        {GAMERS_CARD.map((gamerData) => (
          <SwiperSlide
            className=" relative pb-4 w-full h-full  cursor-pointer"
            key={gamerData.id}
          >
            <CardGamer gamerData={gamerData} miniCard={miniCards} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
