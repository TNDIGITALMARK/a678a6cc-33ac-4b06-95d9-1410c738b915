'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/story', label: 'Our Story' },
    { href: '/location', label: 'Location' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-cream/95 backdrop-blur-md shadow-lg border-b border-brown/20'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-script font-bold text-tomato">
              Mom's Spaghetti
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brown hover:text-tomato font-serif font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tomato transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Order Online Button */}
            <Link
              href="/menu"
              className="bg-tomato hover:bg-tomato/90 text-cream px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <ShoppingCart size={18} />
              <span>Order Online</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brown hover:text-tomato transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-cream/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-brown/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-2 text-brown hover:text-tomato font-serif font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Order Online Button */}
            <div className="px-6 pt-2">
              <Link
                href="/menu"
                className="w-full bg-tomato hover:bg-tomato/90 text-cream px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart size={18} />
                <span>Order Online</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}