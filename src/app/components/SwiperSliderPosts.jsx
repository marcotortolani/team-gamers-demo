'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import { PlayCircleIcon } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import PaginationBullets from './ui/PaginationBullets';
import ImageMissing from './ImageMissing';

SwiperCore.use([Pagination]);

export default function SwiperSliderPosts({
  posts,
  slidesPerView,
  delayPerView,
  spaceBetweenSlides,
  colorBullets,
  sizeBullets,
}) {
  const [indexPag, setIndexPag] = useState(0);
  const sliderRef = useRef(0);

  const qtyBullets = Object.keys(posts).length - parseInt(slidesPerView) + 1;

  const pagination = {
    clickable: true,
    type: 'custom',
    renderCustom: function (i, className) {
      setIndexPag(className);
      return null;
    },
  };

  return (
    <div className=" w-screen h-fit  ">
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
        centeredSlides={false}
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
            <div
              className={` relative w-full flex justify-center h-fit  gap-4`}
            >
              <div className="  relative w-[90%] min-h-[250px] md:min-h-[240px] lg:min-h-[250px] ">
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
              </div>

              <div className=" z-20 absolute bottom-0 w-5/6  h-full flex flex-col justify-end gap-2 pb-4">
                <h3
                  className={` bg-Black text-White uppercase px-2 text-start text-2xl `}
                >
                  {ReactHtmlParser(post.title)}
                </h3>
                <p
                  className={
                    ' w-5/6 px-2 lowercase text-xl md:text-2xl lg:text-base line-clamp-2 text-Black bg-White/80 overflow-hidden '
                  }
                >
                  {ReactHtmlParser(post.excerpt)}
                </p>
              </div>
            </div>
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
  );
}
