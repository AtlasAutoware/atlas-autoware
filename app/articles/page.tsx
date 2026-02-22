import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { getAllArticles } from '../../lib/markdown'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Insights and research from the Atlas Autoware team on autonomous vehicle technology.',
}

export default function Articles() {
  const articles = getAllArticles()

  return (
    <div className="min-h-screen flex flex-col bg-[#030305]">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* ── Header ───────────────────────────────────────── */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="absolute inset-0 red-glow-bg" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-4 animate-fade-in">
              Knowledge Base
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold title-gradient mb-6 animate-slide-up"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Articles
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto animate-slide-up delay-200">
              Deep dives into autonomous vehicle technology, AI research, and team insights.
            </p>
          </div>
        </div>

        {/* ── Articles grid ─────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Link
                    href={`/articles/${article.slug}`}
                    key={article.slug}
                    className="glass-card rounded-2xl overflow-hidden group block transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-52 overflow-hidden bg-[#141420]">
                      <Image
                        src={article.image || '/placeholder.jpg'}
                        alt={article.title}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent" />
                    </div>
                    <div className="p-7">
                      <h2
                        className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-red-400 transition-colors"
                        style={{ fontFamily: 'var(--font-space)' }}
                      >
                        {article.title}
                      </h2>
                      <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{article.author}</span>
                        <time>
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                    <div className="px-7 pb-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-400 group-hover:gap-2.5 transition-all">
                        Read article <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-16 text-center max-w-md mx-auto">
                <p className="text-slate-400">No articles published yet — check back soon.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
