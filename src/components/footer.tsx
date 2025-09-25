'use client'

import Link from 'next/link'
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Star } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Our Restaurant': [
      { name: 'About Us', href: '/story' },
      { name: 'Our Story', href: '/story' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Careers', href: '/careers' }
    ],
    'Menu & Ordering': [
      { name: 'View Menu', href: '/menu' },
      { name: 'Order Online', href: '/menu' },
      { name: 'Catering', href: '/catering' },
      { name: 'Gift Cards', href: '/gift-cards' }
    ],
    'Customer Service': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Reservations', href: '/reservations' },
      { name: 'Private Events', href: '/events' },
      { name: 'FAQs', href: '/faq' }
    ]
  }

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      href: 'https://facebook.com/momsspaghetti',
      hoverColor: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      href: 'https://instagram.com/momsspaghetti',
      hoverColor: 'hover:text-pink-500'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      href: 'https://twitter.com/momsspaghetti',
      hoverColor: 'hover:text-blue-400'
    }
  ]

  return (
    <footer className="bg-brown text-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 text-[200px] font-script rotate-12">
          ♥
        </div>
        <div className="absolute bottom-10 left-10 text-[150px] font-script -rotate-12">
          🍝
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Signup Section */}
        <div className="py-16 border-b border-cream/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-script font-bold mb-4">
              Join Our Family Table
            </h3>
            <p className="font-sans text-cream/90 text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know about special events, new menu items, and exclusive family recipes.
              Plus, get 10% off your next visit!
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-brown font-sans focus:outline-none focus:ring-2 focus:ring-tomato"
                required
              />
              <button
                type="submit"
                className="bg-tomato hover:bg-tomato/90 text-cream px-8 py-3 rounded-full font-sans font-bold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Join Family
              </button>
            </form>

            <p className="font-sans text-cream/70 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-4xl font-script font-bold text-cream mb-4">
                  Mom's Spaghetti
                </h2>
                <p className="font-serif text-cream/90 text-lg leading-relaxed">
                  Authentic Italian-American cuisine served with love in the heart of Houston since 1952.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="text-tomato flex-shrink-0" size={18} />
                  <span className="font-sans text-cream/90">123 Main Street, Downtown Houston, TX 77002</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-tomato flex-shrink-0" size={18} />
                  <span className="font-sans text-cream/90">(713) 555-MAMA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-tomato flex-shrink-0" size={18} />
                  <span className="font-sans text-cream/90">hello@momsspaghetti.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-tomato flex-shrink-0" size={18} />
                  <span className="font-sans text-cream/90">Open Daily 11AM - 10PM</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-serif font-bold text-xl mb-4">Follow Our Family</h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`text-cream/80 ${social.hoverColor} transition-colors duration-300 transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-serif font-bold text-xl mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="font-sans text-cream/90 hover:text-tomato transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="py-8 border-t border-cream/20 border-b border-cream/20">
          <div className="text-center">
            <h4 className="font-serif font-bold text-xl mb-6">Awards & Recognition</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="font-sans text-cream/90">Houston Chronicle "Best Italian" 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="font-sans text-cream/90">Yelp "Top 10 Houston Restaurants" 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="font-sans text-cream/90">TripAdvisor "Certificate of Excellence"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-cream/90 font-sans text-sm">
              <span>© {currentYear} Mom's Spaghetti. Made with</span>
              <Heart className="text-tomato fill-current" size={16} />
              <span>in Houston, Texas</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-cream/90 font-sans text-sm">
              <Link href="/privacy" className="hover:text-tomato transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-tomato transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-tomato transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-cream/20 text-center">
            <p className="font-script text-2xl text-cream/80 italic">
              "Benvenuti alla famiglia" - Welcome to the family
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}