import React from 'react'
import { CardGamer } from './CardGamer'

export default function CardsGamers({ gamersData, path, miniCards }) {
  return (
    <ul className={`  w-full px-6 grid grid-cols-2 gap-x-6 gap gap-y-12`}>
      {gamersData.map((gamerData) => (
        <li key={gamerData.id} className=" col-span-1 row-span-1">
          <CardGamer path={path} gamerData={gamerData} miniCard={miniCards} />
        </li>
      ))}
    </ul>
  )
}
