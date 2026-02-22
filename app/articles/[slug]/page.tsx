import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { Navbar } from '../../../components/Navbar'
import { Footer } from '../../../components/Footer'
import { getArticleData, getAllArticles } from '../../../lib/markdown'

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getArticleData(params.slug)
  return {
    title: article.title,
    description: article.description,
  }
}

export default async function Article({ params }: { params: { slug: string } }) {
  const article = await getArticleData(params.slug)

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen flex flex-col bg-[#030305]">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* ── Hero image ────────────────────────────────────── */}
        <div className="relative w-full h-[50vh] min-h-[320px] overflow-hidden bg-[#0d0d12]">
          <Image
            src={article.image || '/placeholder.jpg'}
            alt={article.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent" />

          {/* Header overlaid on image */}
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Articles
            </Link>
            <h1
              className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-5"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <User size={14} className="text-red-400" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-red-400" />
                <time>{formattedDate}</time>
              </span>
            </div>
          </div>
        </div>

        {/* ── Article body ──────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {article.description && (
                <p className="text-lg text-slate-300 leading-relaxed mb-10 pb-10 border-b border-white/[0.06]">
                  {article.description}
                </p>
              )}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.htmlContent }}
              />
            </div>
          </div>
        </section>

        {/* ── Back link ─────────────────────────────────────── */}
        <div className="py-12 border-t border-white/[0.06]">
          <div className="container mx-auto px-6 max-w-3xl">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft size={16} /> Back to all articles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
