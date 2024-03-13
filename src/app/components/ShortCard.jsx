import React from 'react';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';
import ImageMissing from './ImageMissing';
import ButtonSeePost from './ui/ButtonSeePost';

export default function ShortCard({ qty, post, miniCard }) {
  return (
    <li
      className={`${
        qty % 2 !== 0 && qty === index + 1
          ? 'col-span-2 aspect-[5/3]'
          : 'col-span-1 aspect-[2/3]'
      } ${
        miniCard ? 'max-h-[150px]' : ''
      } col-row-1  relative w-full mt-0 bg-Primary rounded-xl md:rounded-xl lg:rounded-2xl `}
    >
      <div
        className={`${
          miniCard ? ' h-3/4 ' : 'h-5/6'
        } relative w-full  rounded-[inherit]`}
      >
        {post.images.length > 0 ? (
          <Image
            className={` absolute w-full h-full  object-center object-cover  rounded-[inherit]`}
            fill={true}
            sizes="(max-width: 350px)"
            src={post.images[0]}
            alt={`Image ${post.title}`}
          />
        ) : (
          <ImageMissing />
        )}
        <div
          className={`${
            miniCard ? 'pb-2' : 'pb-6'
          } absolute top-0 w-full h-full  px-2 flex flex-col justify-end `}
        >
          <h3
            className={`${
              miniCard ? 'text-xs' : 'text-base'
            } text-Black font-semibold line-clamp-2 uppercase text-start `}
          >
            <span
              className={` bg-White/80 px-1 pr-2 box-decoration-clone leading-[1.5rem]`}
            >
              {ReactHtmlParser(post.title)}
            </span>
          </h3>
        </div>
      </div>

      <div
        className={`${
          miniCard ? ' h-1/4' : 'h-1/6'
        } z-20 w-full  my-1 flex items-center justify-center`}
      >
        <ButtonSeePost
          text="Ver nota"
          href={`/${post.category}/${post.id}`}
          style="outlineSky"
          size="xs"
        />
      </div>
    </li>
  );
}
