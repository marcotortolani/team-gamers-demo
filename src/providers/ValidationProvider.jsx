'use client'
import React, { createContext, useEffect } from 'react'
import { validateUser } from '@/utils/userAuth'

const ValidationContext = createContext()

function ValidationProvider({ children }) {
  function getParam() {
    return window.location.href.split('/?')[1] || null
  }


  useEffect(() => {
    const hashID = getParam()
    validateUser(hashID)
  }, [])

  return (
    <ValidationContext.Provider value={''}>
      {children}
    </ValidationContext.Provider>
  )
}

export { ValidationContext, ValidationProvider }
