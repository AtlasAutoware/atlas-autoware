'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/members', label: 'Members' },
  { href: '/articles', label: 'Articles' },
  { href: '/sponsorship', label: 'Sponsorship' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#030305]/92 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-8 h-8 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Atlas Autoware"
                fill
                className="object-contain"
              />
            </div>
            <span
              className="text-base font-bold text-white group-hover:text-red-400 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-space)' }}
            >
              Atlas Autoware
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-red-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.paypal.com/donate?hosted_button_id=88VLJ6TS6554Q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-5 text-sm"
            >
              Donate
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.06]">
          <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-red-400 bg-red-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-white/[0.06]">
              <a
                href="https://www.paypal.com/donate?hosted_button_id=88VLJ6TS6554Q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
