'use client'

import Image from 'next/image'
import { Heart, Users, Award, Clock } from 'lucide-react'

export default function OurStory() {
  const highlights = [
    {
      icon: <Clock className="text-tomato" size={32} />,
      title: "70+ Years",
      description: "Serving Houston families since 1952"
    },
    {
      icon: <Users className="text-tomato" size={32} />,
      title: "3 Generations",
      description: "Recipes passed down through the family"
    },
    {
      icon: <Heart className="text-tomato" size={32} />,
      title: "Made with Love",
      description: "Every dish prepared with care and tradition"
    },
    {
      icon: <Award className="text-tomato" size={32} />,
      title: "Local Favorite",
      description: "Houston's beloved Italian-American destination"
    }
  ]

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 text-[200px] font-script text-brown rotate-12">
          &
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-script text-brown -rotate-12">
          ♥
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-tomato font-sans font-semibold text-sm tracking-wide uppercase mb-4">
            Our Heritage
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script font-bold text-brown mb-6">
            A Family Legacy
          </h2>
          <p className="text-brown/80 font-serif text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From Nonna's kitchen in Sicily to the heart of Houston, our story is one of
            love, tradition, and the perfect plate of spaghetti.
          </p>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brown mb-4">
              It All Started with Nonna Maria
            </h3>

            <p className="text-brown/90 font-sans text-base md:text-lg leading-relaxed">
              In 1952, Maria Rossi brought her cherished family recipes from Sicily to Houston,
              Texas. Armed with nothing but love, determination, and the secret to the perfect
              tomato sauce, she opened a small trattoria that would become the heart of the community.
            </p>

            <p className="text-brown/90 font-sans text-base md:text-lg leading-relaxed">
              Three generations later, we continue Nonna's tradition of treating every guest
              like family. Our pasta is still rolled by hand, our sauce simmers for hours,
              and every meatball is shaped with the same love and care that Nonna Maria taught us.
            </p>

            <p className="text-brown/90 font-sans text-base md:text-lg leading-relaxed">
              Today, Mom's Spaghetti isn't just a restaurant – it's a gathering place where
              memories are made, stories are shared, and every meal feels like coming home.
            </p>

            <blockquote className="border-l-4 border-tomato pl-6 italic">
              <p className="text-brown font-serif text-lg md:text-xl">
                "Cooking is an act of love. When you cook for someone, you're giving them
                a piece of your heart."
              </p>
              <cite className="text-brown/70 font-sans text-sm mt-2 block">
                — Nonna Maria Rossi, Founder
              </cite>
            </blockquote>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/generated/family-legacy.png"
                alt="The Rossi family in their original kitchen, 1952"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                quality={90}
              />
              <div className="absolute bottom-4 left-4 bg-brown/80 text-cream px-4 py-2 rounded-lg">
                <p className="font-sans text-sm">The Rossi Family, 1952</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/generated/pasta-making.png"
                alt="Traditional pasta making by hand"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                quality={90}
              />
              <div className="absolute bottom-4 left-4 bg-brown/80 text-cream px-4 py-2 rounded-lg">
                <p className="font-sans text-sm">Handmade pasta, just like Nonna taught us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-brown/10"
            >
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h4 className="font-serif font-bold text-xl text-brown mb-2">
                {highlight.title}
              </h4>
              <p className="font-sans text-brown/80 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}