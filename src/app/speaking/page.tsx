import React from 'react'
import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { speaking } from '@/config'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: speaking.metadata.title,
  description: speaking.metadata.description,
}

export default function Speaking() {
  return (
    <SimpleLayout title={speaking.title} intro={speaking.intro}>
      <div className="space-y-20">
        {speaking.sections.map(({ title, appearances }, i) => (
          <SpeakingSection key={i} title={title}>
            {appearances.map((appearance, i) => (
              <Appearance key={i} {...appearance} />
            ))}
          </SpeakingSection>
        ))}
      </div>
    </SimpleLayout>
  )
}