import { Navbar } from '../../../components/Navbar'
import { getArticleData, getAllArticles } from '../../../lib/markdown'
import Image from 'next/image'

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function Article({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticleData(params.slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <Image
            src={article.image}
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
              <time>{new Date(article.date).toLocaleDateString()}</time>
            </div>
          </div>

          <div 
            className="prose prose-lg "
            dangerouslySetInnerHTML={{ __html: article.htmlContent }} 
          />
        </article>
      </main>

      <footer className="bg-primary text-white py-8">
              <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <Image src="/logo.png" alt="Atlas Autoware Logo" width={30} height={30} />
                  <p className="text-sm md:text-base">&copy; 2024 AtlasAutoware - A 501(c)(3) Non-Profit Organization. All rights reserved</p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/Facebook_Logo_Primary.png" alt="Facebook" width={24} height={24} />
                  </a>
                  <a href="https://x.com/AtlasAutoware/following" target="_blank" rel="noopener noreferrer">
                    <Image src="/logo-white.png" alt="Twitter" width={24} height={24} />
                  </a>
                  <a href="https://www.instagram.com/atlasautoware/" target="_blank" rel="noopener noreferrer">
                    <Image src="/Instagram_Glyph_Gradient.png" alt="Instagram" width={24} height={24} />
                  </a>
                </div>
              </div>
            </footer>
    </div>
  )
}

