import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/members', label: 'Members' },
  { href: '/articles', label: 'Articles' },
  { href: '/sponsorship', label: 'Sponsorship' },
]

const socialLinks = [
  {
    href: 'https://x.com/AtlasAutoware/following',
    label: 'X / Twitter',
    src: '/logo-white.png',
  },
  {
    href: 'https://www.instagram.com/atlasautoware/',
    label: 'Instagram',
    src: '/Instagram_Glyph_Gradient.png',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a10]">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Atlas Autoware" fill className="object-contain" />
              </div>
              <span
                className="text-base font-bold text-white group-hover:text-red-400 transition-colors"
                style={{ fontFamily: 'var(--font-space)' }}
              >
                Atlas Autoware
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              The premier high school-led self-driving car team — competing where universities dare.
            </p>
            <p className="text-xs text-slate-600">A 501(c)(3) Non-Profit Organization</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Connect</p>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:contact@atlasautoware.org"
                className="text-sm text-slate-500 hover:text-white transition-colors block"
              >
                contact@atlasautoware.org
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center
                             hover:border-white/20 hover:bg-white/[0.08] transition-all"
                >
                  <Image src={s.src} alt={s.label} width={16} height={16} className="object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} AtlasAutoware. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Built by students. Driven by innovation.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
