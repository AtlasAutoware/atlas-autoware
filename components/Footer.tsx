import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/members', label: 'Members' },
  { href: '/sponsorship', label: 'Sponsorship' },
]

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.749l7.73-8.835L2.189 2.25H8.08l4.258 5.624 5.906-5.624zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { href: 'https://x.com/AtlasAutoware', label: 'X / Twitter', icon: <XIcon /> },
  { href: 'https://www.instagram.com/atlasautoware/', label: 'Instagram', icon: <InstagramIcon /> },
]

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.06] bg-[var(--bg-footer)]">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-8 h-8 text-gray-900 dark:text-white">
                <Image src="/logo.svg" alt="Atlas Autoware" fill className="object-contain dark:invert" />
              </div>
              <span
                className="text-base font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                style={{ fontFamily: 'var(--font-space)' }}
              >
                Atlas Autoware
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              The premier high school-led self-driving car team — competing where universities dare.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600">A 501(c)(3) Non-Profit Organization</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors w-fit"
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
                className="text-sm text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors block"
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
                  className="w-9 h-9 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07] flex items-center justify-center
                             text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:border-red-400/40 hover:bg-red-500/5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/[0.05] dark:border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
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
