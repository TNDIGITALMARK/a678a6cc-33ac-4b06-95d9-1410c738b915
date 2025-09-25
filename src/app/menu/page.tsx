'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { Plus, Minus, ShoppingCart, Filter, Star, Clock, Flame, Leaf } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  prepTime: string
  spicy?: boolean
  vegetarian?: boolean
  popular?: boolean
  rating: number
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState<{[key: number]: number}>({})
  const [showCart, setShowCart] = useState(false)

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'entrees', name: 'Entrees', icon: '🥩' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ]

  const menuItems: MenuItem[] = [
    // Appetizers
    {
      id: 1,
      name: "Calamari Fritti",
      description: "Golden fried squid rings served with marinara sauce and lemon",
      price: 14.95,
      image: "/generated/appetizers.png",
      category: "appetizers",
      prepTime: "12 min",
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      name: "Bruschetta Classica",
      description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
      price: 10.95,
      image: "/generated/appetizers.png",
      category: "appetizers",
      prepTime: "8 min",
      vegetarian: true,
      rating: 4.7
    },
    {
      id: 3,
      name: "Antipasto Platter",
      description: "Selection of cured meats, cheeses, olives, and roasted peppers",
      price: 18.95,
      image: "/generated/appetizers.png",
      category: "appetizers",
      prepTime: "5 min",
      rating: 4.9
    },

    // Pasta
    {
      id: 4,
      name: "Mom's Famous Spaghetti & Meatballs",
      description: "Hand-rolled pasta with our secret recipe meatballs and marinara",
      price: 18.95,
      image: "/generated/hero-spaghetti.png",
      category: "pasta",
      prepTime: "18 min",
      popular: true,
      rating: 4.9
    },
    {
      id: 5,
      name: "Fettuccine Alfredo",
      description: "Creamy parmesan sauce with fresh herbs over fettuccine pasta",
      price: 16.95,
      image: "/generated/pasta-selection.png",
      category: "pasta",
      prepTime: "15 min",
      vegetarian: true,
      rating: 4.6
    },
    {
      id: 6,
      name: "Penne Arrabbiata",
      description: "Spicy tomato sauce with garlic, red peppers, and fresh basil",
      price: 15.95,
      image: "/generated/pasta-selection.png",
      category: "pasta",
      prepTime: "14 min",
      spicy: true,
      vegetarian: true,
      rating: 4.7
    },
    {
      id: 7,
      name: "Carbonara Romana",
      description: "Classic Roman dish with pancetta, eggs, and pecorino cheese",
      price: 17.95,
      image: "/generated/pasta-selection.png",
      category: "pasta",
      prepTime: "16 min",
      rating: 4.8
    },

    // Pizza
    {
      id: 8,
      name: "Margherita",
      description: "Classic pizza with fresh mozzarella, tomato sauce, and basil",
      price: 16.95,
      image: "/generated/pizzas.png",
      category: "pizza",
      prepTime: "20 min",
      vegetarian: true,
      rating: 4.7
    },
    {
      id: 9,
      name: "Meat Lovers",
      description: "Pepperoni, sausage, ham, and bacon on our signature crust",
      price: 21.95,
      image: "/generated/pizzas.png",
      category: "pizza",
      prepTime: "22 min",
      popular: true,
      rating: 4.8
    },
    {
      id: 10,
      name: "Vegetarian Supreme",
      description: "Bell peppers, mushrooms, onions, olives, and fresh vegetables",
      price: 19.95,
      image: "/generated/pizzas.png",
      category: "pizza",
      prepTime: "20 min",
      vegetarian: true,
      rating: 4.6
    },

    // Entrees
    {
      id: 11,
      name: "Chicken Parmigiana",
      description: "Breaded chicken breast with melted mozzarella and marinara",
      price: 22.95,
      image: "/generated/chicken-parm.png",
      category: "entrees",
      prepTime: "25 min",
      popular: true,
      rating: 4.8
    },
    {
      id: 12,
      name: "Veal Marsala",
      description: "Tender veal medallions in a rich mushroom and wine sauce",
      price: 28.95,
      image: "/generated/chicken-parm.png",
      category: "entrees",
      prepTime: "28 min",
      rating: 4.9
    },

    // Desserts
    {
      id: 13,
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso-soaked ladyfingers",
      price: 8.95,
      image: "/generated/desserts.png",
      category: "desserts",
      prepTime: "5 min",
      rating: 4.9
    },
    {
      id: 14,
      name: "Cannoli Siciliani",
      description: "Crispy shells filled with sweet ricotta and chocolate chips",
      price: 7.95,
      image: "/generated/desserts.png",
      category: "desserts",
      prepTime: "3 min",
      rating: 4.7
    }
  ]

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }

  const removeFromCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }))
  }

  const cartTotal = Object.entries(cart).reduce((total, [itemId, quantity]) => {
    const item = menuItems.find(i => i.id === parseInt(itemId))
    return total + (item ? item.price * quantity : 0)
  }, 0)

  const cartItemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 text-[150px] font-script rotate-12">🍝</div>
            <div className="absolute bottom-20 right-20 text-[120px] font-script -rotate-12">🍕</div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-script font-bold mb-6">
              Our Family Recipes
            </h1>
            <p className="text-xl md:text-2xl font-serif mb-8 max-w-3xl mx-auto">
              Three generations of authentic Italian-American cuisine, made with love and served with pride
            </p>
            <div className="flex items-center justify-center gap-8 text-cream/90">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="font-sans">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="fill-current text-yellow-400" size={20} />
                <span className="font-sans">Family Recipes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-8 bg-cream border-b border-brown/20 sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif font-bold text-brown">Menu Categories</h2>
              <button
                onClick={() => setShowCart(!showCart)}
                className="bg-tomato hover:bg-tomato/90 text-cream px-6 py-3 rounded-full font-sans font-bold flex items-center gap-2 relative"
              >
                <ShoppingCart size={20} />
                <span>Cart ({cartItemCount})</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brown text-cream text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-tomato text-cream shadow-lg'
                      : 'bg-white text-brown hover:bg-brown/10 border border-brown/20'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-cream/40 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group border border-brown/10">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {item.popular && (
                        <span className="bg-tomato text-cream px-2 py-1 rounded-full text-xs font-bold">
                          Popular
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Flame size={12} /> Spicy
                        </span>
                      )}
                      {item.vegetarian && (
                        <span className="bg-basil text-cream px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Leaf size={12} /> Veggie
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      <span className="text-xs font-semibold">{item.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-serif font-bold text-xl text-brown group-hover:text-tomato transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-sans font-bold text-lg text-tomato">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-brown/80 font-sans text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-brown/60">
                        <Clock size={14} />
                        <span className="font-sans text-sm">{item.prepTime}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {cart[item.id] > 0 && (
                          <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-brown/20">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-tomato hover:bg-tomato/10 rounded-full p-1"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="font-sans font-semibold text-brown min-w-[20px] text-center">
                              {cart[item.id]}
                            </span>
                            <button
                              onClick={() => addToCart(item.id)}
                              className="text-tomato hover:bg-tomato/10 rounded-full p-1"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        )}

                        <button
                          onClick={() => addToCart(item.id)}
                          className="bg-tomato hover:bg-tomato/90 text-cream px-4 py-2 rounded-full font-sans font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-1"
                        >
                          <Plus size={14} />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cart Sidebar */}
        {showCart && (
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setShowCart(false)}>
            <div
              className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-brown/20">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif font-bold text-brown">Your Order</h3>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-brown hover:text-tomato"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {Object.entries(cart).filter(([_, quantity]) => quantity > 0).map(([itemId, quantity]) => {
                  const item = menuItems.find(i => i.id === parseInt(itemId))
                  if (!item) return null

                  return (
                    <div key={itemId} className="flex items-center gap-4 mb-4 p-4 bg-cream/40 rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-serif font-bold text-brown">{item.name}</h4>
                        <p className="text-sm text-brown/80">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-tomato hover:bg-tomato/10 rounded-full p-1"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-sans font-semibold text-brown min-w-[30px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="text-tomato hover:bg-tomato/10 rounded-full p-1"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  )
                })}

                {cartItemCount === 0 && (
                  <div className="text-center py-12">
                    <ShoppingCart className="mx-auto text-brown/40 mb-4" size={48} />
                    <p className="text-brown/60 font-sans">Your cart is empty</p>
                  </div>
                )}
              </div>

              {cartItemCount > 0 && (
                <div className="p-6 border-t border-brown/20 bg-cream/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-serif font-bold text-xl text-brown">Total:</span>
                    <span className="font-serif font-bold text-2xl text-tomato">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full bg-tomato hover:bg-tomato/90 text-cream py-4 rounded-full font-sans font-bold text-lg transition-all duration-300 transform hover:scale-105">
                    Proceed to Checkout
                  </button>
                  <p className="text-xs text-brown/60 text-center mt-3">
                    Delivery available within 5 miles • $2.99 delivery fee
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}