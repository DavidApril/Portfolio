'use client'

import React, { createContext, useEffect, useRef, useState } from 'react'
import { notFound, usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'
import { NextIntlClientProvider } from 'next-intl'
import { AbstractIntlMessages } from 'use-intl'
import { routing } from '@/i18n/routing'
import { getMessages } from 'next-intl/server'

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export const AppContext = createContext<{ previousPathname?: string }>({})

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null)

  async function getAllMessages() {
    return await getMessages()
  }

  useEffect(() => {
    getAllMessages()
      .then((m) => setMessages(m))
      .catch((e) => console.log(e))
  }, [])


  return (
    <AppContext.Provider value={{ previousPathname }}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <ThemeWatcher />
          {children}
        </ThemeProvider>
    </AppContext.Provider>
  )
}