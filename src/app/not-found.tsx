import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { not_found } from '@/config'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          {not_found.error_code}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {not_found.title}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {not_found.description}
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          {not_found.btn_label}
        </Button>
      </div>
    </Container>
  )
}