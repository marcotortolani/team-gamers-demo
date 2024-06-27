'use client'
import React, { createContext, useEffect, useState } from 'react'
import { getTrialToken, createTrialToken } from '@/utils/userAuth'

const TrialContext = createContext()

function TrialProvider({ children }) {
  const [trialToken, setTrialToken] = useState({ ok: false, value: '0' })
  const activeTrialNumber = parseInt(trialToken?.value)

  if (activeTrialNumber > 0) {
    const req = { trialValue: activeTrialNumber - 1 }
    createTrialToken(req)
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getTrialToken().then((res) => setTrialToken(res))
  }, [])

  return <TrialContext.Provider value={''}>{children}</TrialContext.Provider>
}

export { TrialContext, TrialProvider }
