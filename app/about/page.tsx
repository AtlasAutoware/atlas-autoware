import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { FAQAccordion } from './FAQAccordion'
import { Target, Lightbulb, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Atlas Autoware — the first high school team competing in F1 Tenth.',
}

const goals = [
  {
    icon: Target,
    text: 'Prove that high school students are capable of competing at the highest levels of autonomous vehicle development.',
  },
  {
    icon: Lightbulb,
    text: 'Inspire and educate peers about the exciting possibilities in robotics and AI.',
  },
  {
    icon: Rocket,
    text: 'Contribute meaningful innovations to the field of autonomous vehicles.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030305]">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* ── Page header ──────────────────────────────────── */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="absolute inset-0 red-glow-bg" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-4 animate-fade-in">
              Who We Are
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold title-gradient mb-6 animate-slide-up"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              About Atlas Autoware
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-slide-up delay-200">
              The first and only high school team competing in F1 Tenth — racing against universities worldwide.
            </p>
          </div>
        </div>

        {/* ── Team photo + intro ────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3] bg-[#141420]">
                <Image
                  src="/team-photo.jpg"
                  alt="Atlas Autoware Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/50 to-transparent" />
              </div>
              <div className="space-y-5">
                <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Our Story</p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white leading-snug"
                  style={{ fontFamily: 'var(--font-space)' }}
                >
                  Redefining what high schoolers can achieve
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Atlas Autoware is revolutionising the world of autonomous vehicles, one innovation at a time.
                  As the first and only high school-led team to compete in F1 Tenth, we&apos;re not just building
                  self-driving cars — we&apos;re shaping the future of transportation and inspiring the next
                  generation of engineers.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our mission goes beyond technology. We&apos;re committed to education, community engagement,
                  and pushing the boundaries of what young minds can achieve in robotics and AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why we formed ─────────────────────────────────── */}
        <section className="py-20 bg-[#0d0d12]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">Our Origins</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-5"
                style={{ fontFamily: 'var(--font-space)' }}
              >
                Why We Formed Atlas Autoware
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Atlas Autoware was born out of a shared passion for autonomous vehicle technology. As students at
                Thomas Jefferson High School for Science and Technology, we saw a gap: university teams were
                advancing autonomous racing, but no high school had stepped up — so we did.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
              {goals.map((g, i) => {
                const Icon = g.icon
                return (
                  <div key={i} className="glass-card rounded-xl p-6 flex items-start gap-5">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-red-400" />
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm">{g.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3 text-center">FAQ</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Frequently Asked Questions
            </h2>
            <FAQAccordion />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
