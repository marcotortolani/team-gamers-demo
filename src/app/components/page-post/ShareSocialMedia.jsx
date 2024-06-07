'use client'
import React, { useEffect, useState } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'

import { FacebookIcon, XtwitterIcon } from '@/utils/icons'

export default function ShareSocialMedia({ post }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
    //setUrl('http://www.google.com')
  }, [])
  return (
    <div className=" flex items-center justify-center flex-wrap gap-2">
      <FacebookShareButton url={url} hashtag={`teamgamers`}>
        <FacebookIcon w={30} h={30} />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={post?.title}
        hashtags={['teamgamers', 'gamers', 'streaming', post?.category]}
      >
        <XtwitterIcon w={30} h={30} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={url}
        title={`Mirá este post de Team Gamers: ${post?.title}`}
      >
        <WhatsappIcon size={40} borderRadius={100} />
      </WhatsappShareButton>
      <TelegramShareButton
        url={url}
        title={`Mirá este post de Team Gamers: ${post?.title}`}
      >
        <TelegramIcon size={40} borderRadius={100} />
      </TelegramShareButton>
    </div>
  )
}
