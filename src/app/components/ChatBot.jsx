'use client'
import { useState, useEffect } from 'react'
//import { useRouter } from "next/router"
import { ChatBotIcon } from '@/utils/icons'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  preload: true,
})

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false)
  //const router = useRouter()

  // console.log(router)

  // useEffect(() => {
  //   setChatOpen(false)
  // }, [router])

  return (
    <div
      className={
        poppins.className +
        'z-[800000000] fixed bottom-16 md:bottom-12 lg:bottom-4 right-4 w-full md:w-3/5 h-fit bg-red-900/0'
      }
    >
      <iframe
        src="http://test.moob.club:8000/IA/ve/movistar/teamgamers/chat/"
        className={`${
          chatOpen
            ? ' opacity-100 scale-y-100 flex translate-x-0'
            : ' opacity-0 scale-y-0 translate-x-[200%]  '
        } flex justify-end bg-sky-800/0 absolute bottom-10 md:bottom-16 -right-4 md:right-0 w-full md:w-[400px] lg:w-[450px] h-[350px] xsm:h-[500px] transition-all duration-150 ease-in-out`}
      />
      <div className=" w-full flex items-center justify-end gap-4">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className=" relative w-12 h-12 md:w-16 md:h-16 p-1 shadow-black shadow-md bg-Primary rounded-full "
        >
          <ChatBotIcon />
        </button>
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className=" hidden md:flex px-4 lg:px-8 py-4 shadow-black shadow-md text-lg lg:text-lg xl:text-xl text-White bg-Primary rounded-full "
        >
          ¡Hablá con nuestro asistente online!
        </button>
      </div>
    </div>
  )
}
