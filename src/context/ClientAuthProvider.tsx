'use client'

import { AuthContextProvider } from '@/context/AuthContext'

export function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}