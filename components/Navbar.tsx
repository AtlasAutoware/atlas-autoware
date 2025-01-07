'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md py-7 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Atlas Autoware Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-primary">Atlas Autoware</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-primary hover:text-secondary transition-colors">About</Link>
          <Link href="/members" className="text-primary hover:text-secondary transition-colors">Members</Link>
          <Link href="/articles" className="text-primary hover:text-secondary transition-colors">Articles</Link>
          <Link href="/sponsorship" className="text-primary hover:text-secondary transition-colors">Sponsorship</Link>
          <Button asChild variant="destructive" size="sm" className="w-full bg-red-600 text-white" style={{ height: '30px' }}>
                <a href="https://www.paypal.com/donate?hosted_button_id=88VLJ6TS6554Q" target="_blank" rel="noopener noreferrer">
                  Donate
                </a>
              </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="text-primary hover:text-secondary transition-colors">About</Link>
            <Link href="/members" className="text-primary hover:text-secondary transition-colors">Members</Link>
            <Link href="/articles" className="text-primary hover:text-secondary transition-colors">Articles</Link>
            <Link href="/sponsorship" className="text-primary hover:text-secondary transition-colors">Sponsorship</Link>
            <Button asChild variant="destructive" size="sm" className="w-full bg-red-600 text-white">
                <a href="https://www.paypal.com/donate?hosted_button_id=88VLJ6TS6554Q" target="_blank" rel="noopener noreferrer">
                  Donate
                </a>
              </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

