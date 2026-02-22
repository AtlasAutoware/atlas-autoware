import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Sponsorship',
  description: 'Partner with Atlas Autoware and support the next generation of autonomous vehicle engineers.',
}

const whySponsors = [
  {
    title: 'Support Innovation',
    description:
      "Your sponsorship directly funds cutting-edge autonomous vehicle technology, pushing the boundaries of what's possible at the high school level.",
  },
  {
    title: 'Inspire Future Engineers',
    description:
      "By supporting our team, you're helping inspire and educate the next generation of engineers, programmers, and innovators in the AV industry.",
  },
  {
    title: 'Brand Visibility',
    description:
      'Gain exposure for your brand through competitions, events, and our online presence — reaching a tech-savvy, forward-thinking audience.',
  },
  {
    title: 'Community Impact',
    description:
      'Your support enables us to engage the community through workshops, demonstrations, and outreach programs promoting STEM education.',
  },
]

const tiers = [
  {
    name: 'Platinum',
    amount: '$10,000+',
    style: 'tier-platinum',
    labelColor: 'text-slate-300',
    amountColor: 'text-slate-200',
    featured: true,
    benefits: [
      'Large logo on team vehicle',
      'Prominent website placement',
      'Social media shoutouts',
      'VIP invitations to team events',
      'Exclusive team merchandise',
      'All Gold level benefits',
    ],
  },
  {
    name: 'Gold',
    amount: '$5,000 – $9,999',
    style: 'tier-gold',
    labelColor: 'text-yellow-400',
    amountColor: 'text-yellow-300',
    featured: false,
    benefits: [
      'Medium logo on team vehicle',
      'Website recognition',
      'Team photo and thank-you plaque',
      'All Silver level benefits',
    ],
  },
  {
    name: 'Silver',
    amount: '$1,000 – $4,999',
    style: 'tier-silver',
    labelColor: 'text-slate-400',
    amountColor: 'text-slate-300',
    featured: false,
    benefits: [
      'Small logo on team vehicle',
      'Website mention',
      'Team updates and newsletters',
    ],
  },
  {
    name: 'Bronze',
    amount: 'Up to $999',
    style: 'tier-bronze',
    labelColor: 'text-orange-400',
    amountColor: 'text-orange-300',
    featured: false,
    benefits: [
      'Website mention',
      'Team updates and newsletters',
    ],
  },
]

export default function Sponsorship() {
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
              Partner With Us
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold title-gradient mb-6 animate-slide-up"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Sponsorship
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-slide-up delay-200">
              Join us in shaping the future of autonomous vehicles and supporting the next generation of innovators.
            </p>
          </div>
        </div>

        {/* ── Why sponsor ───────────────────────────────────── */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3 text-center">
              Why Partner With Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Why Sponsor Atlas Autoware?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whySponsors.map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-8">
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-space)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sponsorship tiers ─────────────────────────────── */}
        <section className="py-24 bg-[#0d0d12]">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3 text-center">
              Investment Levels
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Sponsorship Tiers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`glass-card ${tier.style} rounded-2xl p-7 relative flex flex-col ${
                    tier.featured ? 'ring-1 ring-slate-400/30' : ''
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-xs font-semibold text-black bg-slate-300 px-3 py-1 rounded-full">
                        Top Tier
                      </span>
                    </div>
                  )}
                  <div className="mb-5">
                    <h3
                      className={`text-xl font-bold mb-1 ${tier.labelColor}`}
                      style={{ fontFamily: 'var(--font-space)' }}
                    >
                      {tier.name}
                    </h3>
                    <p className={`text-sm font-semibold ${tier.amountColor}`}>{tier.amount}</p>
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {tier.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <Check size={14} className="text-red-400 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Become a Sponsor Today
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Ready to partner with us? Reach out and we&apos;ll get back to you with a sponsorship
              package tailored to your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:contact@atlasautoware.org" className="btn-primary">
                Contact Us
              </a>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=88VLJ6TS6554Q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Donate via PayPal
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
