import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'content/articles')
const processedFiles = new Set<string>() // Cache to track processed files

export interface ArticleMetadata {
  title: string
  description: string
  date: string
  author: string
  image: string
  slug: string
}

function incrementDateIfNotProcessed(date: string, slug: string): string {
  if (!processedFiles.has(slug)) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + 1)
    processedFiles.add(slug)
    return newDate.toISOString().split('T')[0] // Returns YYYY-MM-DD format
  }
  return date
}

export async function getArticleData(slug: string) {
  // Remove the timestamp from the slug to find the correct file
  const originalSlug = slug.split('-').slice(0, -1).join('-')
  let fullPath = path.join(articlesDirectory, `${originalSlug}.md`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(articlesDirectory, `${originalSlug}.mdx`)
  }
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Article file not found: ${originalSlug}`)
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(content)
  
  const htmlContent = processedContent.toString()
  data.date = incrementDateIfNotProcessed(data.date, originalSlug)

  return {
    slug,
    htmlContent,
    ...(data as Omit<ArticleMetadata, 'slug'>)
  }
}

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      data.date = incrementDateIfNotProcessed(data.date, slug)

      // Ensure unique slug by appending a timestamp if needed
      const uniqueSlug = `${slug}-${Date.now()}`

      return {
        slug: uniqueSlug,
        ...(data as Omit<ArticleMetadata, 'slug'>)
      }
    })

  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

