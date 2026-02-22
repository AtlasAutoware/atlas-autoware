import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cpu, GraduationCap, Users, Trophy } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { getAllArticles } from '../lib/markdown'

const stats = [
  { value: '#1', label: 'High School F1 Tenth Team' },
  { value: 'TJHSST', label: 'Alexandria, Virginia' },
  { value: 'ML + CV', label: 'AI-Driven Technology' },
  { value: '501(c)(3)', label: 'Non-Profit Organization' },
]

const pillars = [
  {
    icon: Cpu,
    title: 'Innovation',
    description:
      'Pushing boundaries with convolutional neural networks, reinforcement learning, and novel algorithms spanning computer vision to graph theory.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Equipping the next generation of engineers through workshops, mentorship, and hands-on experience with cutting-edge autonomous systems.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Building a network of passionate students, mentors, and supporters united by the mission to advance autonomous vehicle technology.',
  },
]

export default function Home() {
  const articles = getAllArticles().slice(0, 2)

  return (
    <div className="min-h-screen flex flex-col bg-[#030305]">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 red-glow-bg" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        >
          <source src="/herovid.webm" type="video/webm" />
        </video>
        {/* fade to bg color at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030305]/50 to-[#030305]" />

        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
          <div className="badge-red mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            First &amp; Only High School F1 Tenth Team
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.08] mb-6 animate-slide-up"
            style={{ fontFamily: 'var(--font-space)' }}
          >
            Driving the Future<br />
            <span className="gradient-text">of Autonomous Tech</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-200">
            The premier high school-led self-driving car team — competing head-to-head
            with university teams from around the world.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-slide-up delay-300">
            <Link href="/about" className="btn-primary">
              Learn More <ArrowRight size={16} />
            </Link>
            <Link href="/articles" className="btn-outline">
              Read Articles
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section className="py-14 border-y border-white/[0.06] bg-[#0d0d12]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                  style={{ fontFamily: 'var(--font-space)' }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission pillars ───────────────────────────────────── */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <h2 className="section-title title-gradient">Our Mission</h2>
          <p className="section-subtitle">
            We&apos;re not just building self-driving cars — we&apos;re shaping the future of
            transportation and inspiring a new generation of engineers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className={`glass-card rounded-2xl p-8 group animate-slide-up delay-${(i + 1) * 100}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-all">
                    <Icon size={22} className="text-red-400" />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-space)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{p.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Competition highlight ─────────────────────────────── */}
      <section className="py-20 bg-[#0d0d12]">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
            {/* decorative glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Trophy size={36} className="text-red-400" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Competition</p>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-space)' }}
              >
                F1 Tenth — The World Stage
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-xl">
                Atlas Autoware is the first and only high school team to compete in F1 Tenth, going head-to-head with
                university teams from around the globe in high-speed autonomous racing.
              </p>
            </div>
            <div className="md:ml-auto shrink-0">
              <Link href="/about" className="btn-primary whitespace-nowrap">
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest Articles ───────────────────────────────────── */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <h2 className="section-title title-gradient">Latest Articles</h2>
          <p className="section-subtitle">
            Deep dives into autonomous vehicle technology, AI research, and team updates.
          </p>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                    <h3
                      className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-space)' }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>{article.author}</span>
                      <time>
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500 mb-12">No articles yet — check back soon.</p>
          )}

          <div className="text-center">
            <Link href="/articles" className="btn-outline">
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sponsors ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0d12]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title title-gradient">Our Sponsors</h2>
          <p className="section-subtitle">
            We&apos;re looking for forward-thinking organisations to support our mission and help
            shape the future of autonomous vehicle technology.
          </p>

          <div className="glass-card rounded-2xl p-12 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
            <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
              Sponsoring Atlas Autoware puts your brand in front of a passionate, technically skilled
              community — and directly fuels the next generation of autonomous vehicle engineers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <a href="mailto:contact@atlasautoware.org" className="btn-primary">
                Become a Sponsor
              </a>
              <Link href="/sponsorship" className="btn-outline">
                View Tiers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
