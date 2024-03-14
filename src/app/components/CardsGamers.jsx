import React from 'react'
import { CardGamer } from "./CardGamer"

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

export default function CardsGamers({ miniCards }) {
  return (
    <ul className={`  w-full px-6 grid grid-cols-2 gap-x-6 gap gap-y-12`}>
      {GAMERS_CARD.map((gamerData) => (
        <li key={gamerData.id} className=" col-span-1 row-span-1">
          <CardGamer gamerData={gamerData} miniCard={miniCards} />
        </li>
      ))}
    </ul>
  )
}