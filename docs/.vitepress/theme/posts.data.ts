import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  author?: string,
  date: {
    time: number
    string: string
  }
  tags?: Array<string>,
  categories?: Array<string>,
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('_posts/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(8)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}