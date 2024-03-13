'use client';
import React from 'react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import ButtonSeePost from './ui/ButtonSeePost';
import PaginationBullets from './ui/PaginationBullets';
import ImageMissing from './ImageMissing';

SwiperCore.use([Pagination]);

export default function SwiperSliderHomeCover({
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
    <div className=" top-0 w-full h-full flex flex-col items-center justify-center">
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
        className="mySwiper w-full h-full overflow-hidden flex items-center "
      >
        {posts?.map((post, index) => (
          <SwiperSlide
            className={`${
              index === 0 ? '' : ' '
            } w-full min-w-[160px] h-full relative`}
            key={post.id}
          >
            <div className=" mx-auto w-[90%] h-full flex flex-col items-center justify-center rounded-xl">
              <div className=" -z-10 relative top-0 w-full h-full lg:h-full sm:min-h-[400px] overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl ">
                {post.image ? (
                  <Image
                    className={`${
                      indexPag === index + 1 ? '.animation-image-bg' : ''
                    }  relative w-full h-auto lg:w-auto lg:h-full object-cover rounded-[inherit]`}
                    src={post.image}
                    fill
                    priority
                    sizes="(max-width: 90vw)"
                    alt="Background Image"
                    style={{ animationDuration: `${delayPerView + 5000}ms` }}
                  />
                ) : (
                  <ImageMissing />
                )}
              </div>
              <div className=" absolute bottom-4 w-full h-2/3 px-8 flex flex-col items-center justify-end gap-5 ">
                <div className=" w-full max-w-[800px] h-fit flex flex-col items-start justify-around gap-0 ">
                  <h2
                    className={
                      ' mb-2 uppercase font-medium pointer-events-none cursor-default line-clamp-2 text-pretty text-2xl md:text-3xl lg:text-4xl text-White text-left  '
                    }
                  >
                    <span className=" px-2 pr-4 bg-Black box-decoration-clone leading-[40px] ">
                      {ReactHtmlParser(post.title)}
                    </span>
                  </h2>
                  <h4
                    className={
                      ' w-5/6 font-medium pointer-events-none cursor-default line-clamp-2 text-lg md:text:lg lg:text-xl text-Black first-letter:uppercase '
                    }
                  >
                    <span className=" px-3 bg-White/80 box-decoration-clone leading-[2.1rem] ">
                      {ReactHtmlParser(post.excerpt)}
                    </span>
                  </h4>
                </div>

                <ButtonSeePost
                  text="Ver más"
                  href={`/${post.category}/${post.id}`}
                  style="gradient"
                  size="md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" z-50 relative bottom-0">
        <PaginationBullets
          color={colorBullets}
          size={sizeBullets}
          qtyBullets={qtyBullets}
          index={indexPag}
        />
      </div>
    </div>
  );
}
