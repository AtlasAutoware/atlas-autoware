import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { getAllArticles } from '../lib/markdown'
import { Button } from "@/components/ui/button"

const sponsors: any[] = [
  // { name: "Sponsor 1", logo: "/sponsor-logo-1.png" },
  // { name: "Sponsor 2", logo: "/sponsor-logo-2.png" },
  // { name: "Sponsor 3", logo: "/sponsor-logo-3.png" },
]

export default function Home() {
  const articles = getAllArticles().slice(0, 2)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
            <source src="/herovid.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Driving the Future of Autonomous Technology
            </h1>
            <p className="text-lg md:text-xl mb-8">
              The premier high school-led self-driving car team
            </p>
            <Button asChild variant="secondary" size="sm">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center bg-secondary bg-opacity-10 p-6 rounded-lg">
                <Image src="/icon-innovation.svg" alt="Innovation" width={80} height={80} className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                <p>Pushing the boundaries of autonomous vehicle technology</p>
              </div>
              <div className="text-center bg-secondary bg-opacity-10 p-6 rounded-lg">
                <Image src="/icon-education.svg" alt="Education" width={80} height={80} className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Education</h3>
                <p>Fostering the next generation of engineers and innovators</p>
              </div>
              <div className="text-center bg-secondary bg-opacity-10 p-6 rounded-lg">
                <Image src="/icon-community.svg" alt="Community" width={80} height={80} className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Community</h3>
                <p>Building a network of passionate individuals and supporters</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Latest Articles</h2>
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
                    <h3 className="text-2xl font-bold mb-2 text-primary">{article.title}</h3>
                    <p className="mb-4">{article.description}</p>
                    <div className="flex justify-between items-center text-sm text-accent">
                    <span>{article.author}</span>
                    <time>{new Date(article.date).toLocaleDateString()}</time>
                    </div>
                  </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center text-white mt-12">
              <Button asChild variant="secondary" size="sm">
                <Link href="/articles">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent bg-opacity-10">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Our Sponsors</h2>
            {sponsors.length > 0 ? (
              <div className="flex flex-wrap justify-center items-center gap-8">
                {sponsors.map((sponsor, index) => (
                  <Image key={index} src={sponsor.logo} alt={sponsor.name} width={200} height={100} />
                ))}
              </div>
            ) : (
              <p className="text-center text-lg mb-8">We're currently looking for sponsors to support our mission.</p>
            )}
            <div className="text-center mt-12">
              <Button asChild variant="destructive" size="sm" className='bg-red-600 text-white'>
                <a href="mailto:contact@atlasautoware.org">Become a Sponsor</a>
              </Button>
            </div>
          </div>
        </section>
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

