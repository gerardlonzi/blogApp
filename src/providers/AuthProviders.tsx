'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface prop {
    children: React.ReactNode
}

const AuthProviders = ({children}:prop) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProviders