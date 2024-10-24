import React from 'react'
import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { main_layout } from '@/config'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}