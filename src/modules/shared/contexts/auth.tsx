/**
 * AuthContext.tsx
 * ==============================
 * This file defines the AuthContext, which provides authentication state and actions
 * to the rest of the application. It includes hooks for accessing the context and managing authentication.
 */
import type React from 'react'
import { createContext, useContext, useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import { getMeQuery } from '@/auth'

type User = {
  id: number
  email: string
}

interface AuthContextType {
  user: User | undefined
  isLoading: boolean
  refetchUser: () => Promise<User | null>
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = useQueryClient()
  const { data: user, isLoading, refetch } = useQuery(getMeQuery())

  const refetchUser = async () => {
    try {
      const userData = await refetch()
      return userData.data || null
    } catch (error) {
      console.error('Error refetching user data:', error)
      return null
    }
  }

  useEffect(() => {
    // Optionally, you can prefetch the user data on mount
    queryClient.prefetchQuery(getMeQuery()).catch((error) => {
      console.error('Error prefetching user data:', error)
    })
  }, [queryClient])

  return (
    <AuthContext.Provider value={{ user, isLoading, refetchUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
