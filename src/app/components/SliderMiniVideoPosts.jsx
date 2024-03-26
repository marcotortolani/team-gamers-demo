'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

import videoIcon from '../../../public/assets/icons/IconoVideo2.webp'
import ImageMissing from './ImageMissing'

export default function SliderMiniVideoPosts({
  sliderElements,
  slidesPerView,
  spaceBetweenSlides,
  delayPerView,
  colorBullets,
  sizeBullets,
  verticalAspect,
}) {
  const sliderRef = useRef(0)


  return (
    <div className=" w-screen lg:max-w-screen-lg  h-full  ">
      {sliderElements.length > 0 && (
        <Swiper
          ref={sliderRef}
          slidesPerView={sliderElements.length === 1 ? 1 : slidesPerView}
          centeredSlides={false}
          spaceBetween={spaceBetweenSlides}
          autoplay={{
            delay: delayPerView,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay, Navigation]}
          navigation={false}
          className="mySwiper w-full h-full overflow-hidden "
        >
          {sliderElements?.map((post, i) => (
            <SwiperSlide
              className={` ${
                i === sliderElements.length - 1 ? 'pr-2 md:pr-4 lg:pr-6' : ''
              } 
              ${
                verticalAspect
                  ? ' aspect-[5/6] md:aspect-[4/3]'
                  : 'aspect-[4/3]'
              } w-full pl-2 md:pl-4 lg:pl-6 h-full relative `}
              key={post.id}
            >
              <Link
                href={`/${post.category}/${post.id}`}
                className=" w-full h-full  "
              >
                <div className={` relative z-0 w-full h-full  rounded-lg `}>
                  {post.images.length > 0 ? (
                    <Image
                      className={` w-full h-auto object-cover rounded-[inherit]`}
                      fill={true}
                      sizes="(max-width: 250px)"
                      src={post.images[0]}
                      alt="Imagen"
                    />
                  ) : (
                    <ImageMissing />
                  )}
                </div>

                <div className=" z-20 w-full h-full flex flex-col items-start justify-end gap-2 absolute bottom-0  ">
                  <div className="absolute top-0 left-0 z-30 w-full h-full flex items-center justify-center ">
                    <Image
                      className=" w-auto h-1/4 min-h-[20px] max-h-[60px]"
                      width={90}
                      height={90}
                      src={videoIcon}
                      alt="Icono"
                    />
                  </div>
                  <h3
                    className={` z-10 absolute bottom-2 left-2 md:bottom-4 md:left-4 w-5/6 line-clamp-2 text-start font-medium text-xs sm:text-xs md:text-base lg:text-lg text-Black  `}
                  >
                    <span className=" px-1 pr-3 bg-White/90 box-decoration-clone leading-[1.4rem] md:leading-[1.8rem]">
                      {post.title}
                    </span>
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
