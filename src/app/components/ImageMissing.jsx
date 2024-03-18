import React from 'react'

export default function ImageMissing({
  text = 'Imágen faltante',
  colorBg = 'bg-Details',
}) {
  return (
    <div
      className={` ${colorBg} text-Secondary bg-opacity-80 md:bg-opacity-20 absolute top-0 object-cover w-full h-full px-2 flex items-center justify-center text-center overflow-hidden text-sm md:text-base lg:text-lg xl:text-xl  rounded-lg md:rounded-xl lg:rounded-2xl`}
    >
      {text}
    </div>
  )
}
