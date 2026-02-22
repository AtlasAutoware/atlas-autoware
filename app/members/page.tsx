import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Members',
  description: 'Meet the students powering Atlas Autoware.',
}

const teamMembers = [
  {
    name: 'Vrishak Vemuri',
    role: 'Co-President',
    image: '/assets/img/team/officers/459212774_534453352273716_5818706977539410234_n.jpg',
    department: 'Leadership',
  },
  {
    name: 'Eshan Iyer',
    role: 'Co-President',
    image: '/assets/img/team/officers/IMG_1311.webp',
    department: 'Leadership',
  },
  {
    name: 'Logan Bradley',
    role: 'Secretary',
    image: '/assets/img/team/officers/IMG_1308.webp',
    department: 'Leadership',
  },
  {
    name: 'Aarav Maram',
    role: 'Treasurer & Engineering Lead',
    image: '/assets/img/team/officers/IMG_1315.jpg',
    department: 'Engineering',
  },
  {
    name: 'Michael Yaroschuk',
    role: 'Web Master',
    image: '/assets/img/team/officers/458374250_1519871045589682_7325685962597737582_n.jpg',
    department: 'Technology',
  },
  {
    name: 'Parasmai Salunkhe',
    role: 'CS Lead',
    image: '/assets/img/team/Parasmai.webp',
    department: 'Technology',
  },
]

const departments = [
  {
    id: 'Leadership',
    label: 'Leadership',
    description: 'The executive team steering Atlas Autoware\'s vision and operations.',
  },
  {
    id: 'Engineering',
    label: 'Engineering',
    description: 'Hardware wizards designing and building our autonomous race car.',
  },
  {
    id: 'Technology',
    label: 'Technology',
    description: 'Software engineers powering the AI brain of our vehicle.',
  },
]

export default function Members() {
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
              The Team
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold title-gradient mb-6 animate-slide-up"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Our Members
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto animate-slide-up delay-200">
              Meet the passionate students driving autonomous vehicle innovation at TJHSST.
            </p>
          </div>
        </div>

        {/* ── Departments ───────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {departments.map((dept) => {
              const members = teamMembers.filter((m) => m.department === dept.id)
              if (members.length === 0) return null
              return (
                <div key={dept.id} className="mb-20 last:mb-0">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-red-500 to-red-800" />
                    <h2
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-space)' }}
                    >
                      {dept.label}
                    </h2>
                  </div>
                  <p className="text-slate-500 text-sm mb-8 pl-5">{dept.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {members.map((member, i) => (
                      <div
                        key={i}
                        className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-72 overflow-hidden bg-[#141420]">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                          <h3
                            className="text-lg font-bold text-white mb-1"
                            style={{ fontFamily: 'var(--font-space)' }}
                          >
                            {member.name}
                          </h3>
                          <p className="text-sm text-red-400 font-medium">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Join CTA ──────────────────────────────────────── */}
        <section className="py-20 bg-[#0d0d12]">
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Interested in joining?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              We&apos;re always looking for passionate TJHSST students excited about robotics, AI,
              and autonomous vehicles.
            </p>
            <a href="mailto:contact@atlasautoware.org" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
