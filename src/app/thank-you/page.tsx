import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { thank_you } from '@/config'

export const metadata: Metadata = {
  title: thank_you.metadata.title,
  description: thank_you.metadata.description,
}

export default function ThankYou() {
  return <SimpleLayout title={thank_you.title} intro={thank_you.intro} />
}