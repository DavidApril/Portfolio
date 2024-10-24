import React from 'react'
import { type Metadata } from 'next'

import { Providers } from '@/app/[locale]/providers'
import { Layout } from '@/components/Layout'

import { main_layout } from '@/config'

import '@/styles/tailwind.css'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export const metadata: Metadata = {
  title: {
    template: main_layout.metadata.title.template,
    default: main_layout.metadata.title.default,
  },
  description: main_layout.metadata.description,
  alternates: {
    types: {
      'application/rss+xml':
        main_layout.metadata.alternates.types['application/rss+xml'],
    },
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}