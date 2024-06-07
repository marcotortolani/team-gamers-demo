'use client'
import React, { useEffect, useState } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share'

import {
  FacebookIcon,
  XtwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from '@/utils/icons'

export default function ShareSocialMedia({ title, category }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])
  return (
    <div className=" flex items-center justify-center flex-wrap gap-2">
      <FacebookShareButton url={url} hashtag={`teamgamers`}>
        <FacebookIcon w={30} h={30} />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        hashtags={['teamgamers', 'gamers', 'streaming', category]}
      >
        <XtwitterIcon w={30} h={30} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={url}
        title={`Mirá este post de Team Gamers: ${title}`}
      >
        <WhatsappIcon w={30} h={30} />
      </WhatsappShareButton>
      <TelegramShareButton
        url={url}
        title={`Mirá este post de Team Gamers: ${title}`}
      >
        <TelegramIcon w={30} h={30} />
      </TelegramShareButton>
    </div>
  )
}
