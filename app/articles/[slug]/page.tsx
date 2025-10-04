import type { Metadata } from "next"
import { Navbar } from "../../../components/Navbar"
import { getArticleData, getAllArticles } from "../../../lib/markdown"
import Image from "next/image"
import { format } from "date-fns"

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleData(params.slug)
  return {
    title: article.title,
    description: article.description,
  }
}

interface ArticleProps {
  params: { slug: string }
}

export default async function Article({ params }: ArticleProps) {
  const article = await getArticleData(params.slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={1200}
            height={600}
            className="rounded-lg shadow-lg mb-8 w-full"
          />

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center text-slate-600">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <time>{format(new Date(article.date), "yyyy-MM-dd")}</time>
            </div>
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
        </article>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/monkeyfavicon.png" alt="Atlas Autoware Logo" width={30} height={30} />
            <p>&copy; 2024 AtlasAutoware - A 501(c)(3) Non-Profit Organization. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

