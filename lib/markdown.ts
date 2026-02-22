import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleMetadata {
  title: string
  description: string
  date: string
  author: string
  image: string
  slug: string
}

export async function getArticleData(slug: string) {
  let fullPath = path.join(articlesDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(articlesDirectory, `${slug}.mdx`)
  }
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Article not found: ${slug}`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)

  return {
    slug,
    htmlContent: processedContent.toString(),
    ...(data as Omit<ArticleMetadata, 'slug'>),
  }
}

export function getAllArticles(): ArticleMetadata[] {
  const fileNames = fs.readdirSync(articlesDirectory)
  const seen = new Set<string>()

  // Sort so .md files are processed before .mdx (prefer .md when both exist)
  const sorted = [...fileNames].sort((a, b) => {
    if (a.endsWith('.md') && b.endsWith('.mdx')) return -1
    if (a.endsWith('.mdx') && b.endsWith('.md')) return 1
    return a.localeCompare(b)
  })

  const articles = sorted
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      if (seen.has(slug)) return null
      seen.add(slug)

      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        ...(data as Omit<ArticleMetadata, 'slug'>),
      }
    })
    .filter(Boolean) as ArticleMetadata[]

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1))
}
