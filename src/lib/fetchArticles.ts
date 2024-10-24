import { getAllArticles } from '@/lib/articles'

export async function getArticles() {
  return (await getAllArticles()).slice(0, 4)
}