'use client'
import React from 'react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import ButtonSeePost from './ui/ButtonSeePost'
import PaginationBullets from './ui/PaginationBullets'
import ImageMissing from './ImageMissing'

SwiperCore.use([Pagination])

export default function SwiperSliderCoverPosts({
  posts,
  slidesPerView,
  delayPerView,
  spaceBetweenSlides,
  colorBullets,
  sizeBullets,
  styleColor,
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
    <div className=" top-0 w-full h-full flex flex-col items-center justify-center">
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
        centeredSlides={true}
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
            <div
              className={`${
                styleColor === 'primary'
                  ? 'bg-Primary text-White '
                  : 'bg-Secondary text-Black'
              } z-0 relative mx-auto w-[95%] xl:w-full max-w-[700px] aspect-[6/6] lg:max-w-2xl lg:aspect-[7/5] flex flex-col items-center justify-between rounded-lg md:rounded-xl lg:rounded-2xl`}
            >
              <div className=" z-0 relative top-0 w-full h-4/5 overflow-hidden rounded-[inherit]  ">
                {post.images ? (
                  <Image
                    className={` z-0 relative w-full h-auto lg:w-auto lg:h-full object-cover rounded-[inherit]`}
                    src={post.images[0]}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 90vw)"
                    alt="Background Image"
                    style={{ animationDuration: `${delayPerView + 5000}ms` }}
                  />
                ) : (
                  <ImageMissing />
                )}
                <div className=" z-20 absolute top-0 w-full h-full flex items-center justify-center">
                  <ButtonSeePost
                    text="Ver nota"
                    href={`/${post.category}/${post.id}`}
                    style="outlineSky"
                    size="md"
                  />
                </div>
              </div>

              <div className=" z-30 relative w-full h-1/5  px-6  flex items-center justify-start ">
                <h2
                  className={
                    '  uppercase font-medium pointer-events-none cursor-default line-clamp-1 box-decoration-clone text-lg md:text-xl lg:text-2xl text-left  '
                  }
                >
                  {parse(post.title || '')}
                </h2>
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
  )
}
