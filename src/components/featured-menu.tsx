'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, DollarSign } from 'lucide-react'

export default function FeaturedMenu() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const featuredItems = [
    {
      id: 1,
      name: "Mom's Famous Spaghetti & Meatballs",
      description: "Hand-rolled pasta with our secret recipe meatballs, slow-simmered marinara sauce, and fresh basil",
      price: "$18.95",
      prepTime: "20 min",
      rating: 4.9,
      image: "/generated/hero-spaghetti.png",
      popular: true,
      category: "Pasta"
    },
    {
      id: 2,
      name: "Classic Appetizer Trio",
      description: "Crispy calamari, bruschetta, and stuffed mushrooms - perfect for sharing with the family",
      price: "$16.95",
      prepTime: "15 min",
      rating: 4.8,
      image: "/generated/appetizers.png",
      popular: false,
      category: "Appetizers"
    },
    {
      id: 3,
      name: "Chicken Parmigiana",
      description: "Golden breaded chicken breast topped with melted mozzarella, marinara sauce, and spaghetti",
      price: "$22.95",
      prepTime: "25 min",
      rating: 4.7,
      image: "/generated/chicken-parm.png",
      popular: true,
      category: "Entrees"
    },
    {
      id: 4,
      name: "Nonna's Dessert Selection",
      description: "Homemade tiramisu, cannoli, and gelato - the perfect sweet ending to your meal",
      price: "$12.95",
      prepTime: "5 min",
      rating: 4.9,
      image: "/generated/desserts.png",
      popular: false,
      category: "Desserts"
    }
  ]

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C41E3A' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-tomato font-sans font-semibold text-sm tracking-wide uppercase mb-4">
            Signature Dishes
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script font-bold text-brown mb-6">
            Our Family Recipes
          </h2>
          <p className="text-brown/80 font-serif text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the flavors that have made us Houston's favorite Italian-American restaurant
            for over 70 years.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-cream/40 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 border border-brown/10 ${
                hoveredItem === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-4 left-4 z-20 bg-tomato text-cream px-3 py-1 rounded-full text-xs font-sans font-bold">
                  Most Popular
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20 bg-brown/80 text-cream px-3 py-1 rounded-full text-xs font-sans">
                {item.category}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-brown/80 font-sans text-sm">
                    {item.rating}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-xl md:text-2xl text-brown mb-3 group-hover:text-tomato transition-colors duration-300">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-brown/80 font-sans text-sm md:text-base leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Details Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-brown/70">
                      <Clock size={16} />
                      <span className="font-sans text-sm">{item.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-brown/70">
                      <DollarSign size={16} />
                      <span className="font-sans text-sm font-semibold text-tomato">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-tomato/95 flex items-center justify-center transition-all duration-300 ${
                  hoveredItem === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-full'
                }`}>
                  <div className="text-center text-cream p-6">
                    <p className="font-script text-2xl mb-4">Add to Order</p>
                    <button className="bg-cream text-tomato px-6 py-3 rounded-full font-sans font-bold hover:bg-cream/90 transition-colors duration-200">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-brown/80 font-serif text-lg mb-6">
            Hungry for more? Explore our full menu with over 50 authentic dishes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="bg-tomato hover:bg-tomato/90 text-cream px-8 py-4 rounded-full font-sans font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Full Menu
            </Link>
            <Link
              href="/menu"
              className="bg-transparent border-2 border-tomato text-tomato hover:bg-tomato hover:text-cream px-8 py-4 rounded-full font-sans font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}