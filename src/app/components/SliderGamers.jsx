'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tagGamer from '../../../public/assets/img/tag-team-gamers.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

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
];

// const COLOR_BULLETS = 'white';
// const SIZE_BULLETS = 'default';
const SLIDES_PER_VIEW = 3.25;
const DELAY_PER_VIEW = 2500;
const SPACE_BETWEEN_SLIDES = 0;

export default function SliderGamers() {
  const sliderRef = useRef(0);

  return (
    <div className=" z-30 mt-4 w-screen h-fit min-h-[160px]  flex flex-col items-center justify-end overflow-hidden  lg:hidden">
      <Swiper
        ref={sliderRef}
        slidesPerView={SLIDES_PER_VIEW}
        centeredSlides={false}
        spaceBetween={SPACE_BETWEEN_SLIDES}
        autoplay={{
          delay: DELAY_PER_VIEW,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        navigation={false}
        className="mySwiper w-full h-full px-0 overflow-hidden "
      >
        {GAMERS_CARD.map((el) => (
          <SwiperSlide
            className=" relative pb-4 w-full h-full  cursor-pointer"
            key={el.id}
          >
            <Link
              className="relative w-full h-full flex justify-center items-center hover:cursor-pointer "
              href={el.href}
            >
              <Image
                className=" w-5/6 min-w-[90px] max-w-[100px] border-[3px] border-Secondary sm:max-w-[120px] h-auto rounded-xl"
                width={90}
                height={90}
                src={el.imgSrc}
                alt={`Gamer ${el.name}`}
                loading="eager"
              />

              <div className=" z-20 absolute -bottom-2 object-cover aspect-[150/42]">
                <Image
                  src={tagGamer}
                  alt={'Tag Image Modern Gamer'}
                  width={"100%"}
                  height={'auto'}
                />
                <h4
                  className={
                    ' absolute bottom-1 w-full uppercase font-extrabold text-center text-lg text-White  '
                  }
                >
                  {el.name}
                </h4>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
