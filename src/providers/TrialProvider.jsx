'use client'
import React, { createContext, useEffect, useState } from 'react'
import { getTrialToken, createTrialToken } from '@/utils/userAuth'
import NextCrypto from 'next-crypto'

const cryptoTrial = new NextCrypto('trial')
const TrialContext = createContext()

async function TrialProvider({ children }) {
  const [trialToken, setTrialToken] = useState({ ok: false, value: '0' })
  const activeTrialNumber = parseInt(trialToken?.value)

  if (activeTrialNumber > 0) {
    const req = { trialValue: activeTrialNumber - 1 }
    createTrialToken(req).catch((err) => console.log(err))
  }

  async function getDecryptedTrial(dataCrypted) {
    await cryptoTrial.decrypt(dataCrypted.value).then((res) => {
      setTrialToken({ ok: dataCrypted.ok, value: res })
    })
  }

  useEffect(() => {
    getTrialToken().then((res) => {
      getDecryptedTrial(res)
    })
  }, [])

  return <TrialContext.Provider value={''}>{children}</TrialContext.Provider>
}

export { TrialContext, TrialProvider }
