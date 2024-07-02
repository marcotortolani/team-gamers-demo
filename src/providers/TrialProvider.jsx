'use client'
import React, { createContext, useEffect, useState } from 'react'
import {
  getTrialValue,
  updateTrialValue,
} from '@/app/actions/auth'
import SubscribeCard from '@/app/components/SubscribeCard'

const TrialContext = createContext()

function TrialProvider({ children }) {
  const [trialToken, setTrialToken] = useState(0)

  useEffect(() => {
    async function fetchTrialValue() {
      const value = await getTrialValue()
      setTrialToken(value)
      if (value > 0) {
        updateTrialToken()
      }
    }
    fetchTrialValue()
  }, [])

  async function updateTrialToken() {
    const value = await getTrialValue()
    return await updateTrialValue(value - 1)
  }

  return (
    <TrialContext.Provider value={{ trialToken, updateTrialToken }}>
      {trialToken > 0 ? children : <SubscribeCard />}
    </TrialContext.Provider>
  )
}

export { TrialContext, TrialProvider }
