import { Navbar } from '../../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles } from '../../lib/markdown'

export default function Articles() {
  const articles = getAllArticles()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center mb-16">Articles</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link href={`/articles/${article.slug}`} key={article.slug}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    width={600} 
                    height={400} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                    <p className="text-slate-600">{article.description}</p>
                    <div className="mt-4 text-sm text-slate-500">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <time>{new Date(article.date).toLocaleDateString()}</time>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
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

