'use client'
import React, { createContext, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import useLocalStorage from '@/hooks/useLocalStorage'
import { validateUser } from '@/utils/userAuth'

const ValidationContext = createContext()

function ValidationProvider({ children }) {
  const [validAccess, setValidAccess] = useState(false)
  const searchParams = useSearchParams()
  const hash = searchParams.get('hash') || 0

  useEffect(() => {
    // if (validateUser(hash)) {
    //   setValidAccess(true)
    // }
  }, [hash])

  return (
    <ValidationContext.Provider value={validAccess}>
      {children}
    </ValidationContext.Provider>
  )
}

export { ValidationContext, ValidationProvider }
