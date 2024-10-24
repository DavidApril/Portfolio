import React from 'react'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { uses } from '@/config'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: uses.metadata.title,
  description: uses.metadata.description,
}

export default function Uses() {
  return (
    <SimpleLayout title={uses.title} intro={uses.intro}>
      <div className="space-y-20">
        {uses.sections.map(({ title, items }, i) => (
          <ToolsSection key={i} title={title}>
            {items.map(({ title, description }, i) => (
              <Tool key={i} title={title}>
                {description}
              </Tool>
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  )
}