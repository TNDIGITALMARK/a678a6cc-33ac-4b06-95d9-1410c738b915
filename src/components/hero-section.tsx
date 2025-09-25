'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, MapPin, Clock } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated/hero-spaghetti.png"
          alt="Mom's Famous Spaghetti and Meatballs"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          {/* Tagline */}
          <p className="text-cream/90 font-sans text-lg md:text-xl mb-4 tracking-wide">
            Authentic Italian-American Since 1952
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-script font-bold text-cream mb-6 leading-tight">
            Welcome to the Family
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-serif text-cream/95 mb-8 max-w-3xl mx-auto leading-relaxed">
            Taste the Tradition, Share the Love
          </h2>

          {/* Description */}
          <p className="text-cream/80 font-sans text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Three generations of authentic Italian recipes, made with love in Houston's heart.
            Every plate tells a story of family, tradition, and the finest ingredients.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Link
            href="/menu"
            className="bg-tomato hover:bg-tomato/90 text-cream px-8 py-4 rounded-full font-sans font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl min-w-[200px]"
          >
            View Menu
          </Link>

          <Link
            href="/story"
            className="bg-transparent border-2 border-cream text-cream hover:bg-cream hover:text-brown px-8 py-4 rounded-full font-sans font-bold text-lg transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            Our Story
          </Link>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-cream/80 font-sans">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Downtown Houston</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>Open Daily 11am - 10pm</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cream/60" size={32} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="w-20 h-20 border-2 border-cream rounded-full"></div>
      </div>
      <div className="absolute top-32 right-16 opacity-20">
        <div className="w-12 h-12 border-2 border-cream rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <div className="w-16 h-16 border-2 border-cream rounded-full"></div>
      </div>
    </section>
  )
}