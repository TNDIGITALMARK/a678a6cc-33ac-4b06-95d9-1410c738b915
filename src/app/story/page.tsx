import Image from 'next/image'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import LocationHours from '../../components/location-hours'
import { Heart, Users, Award, Clock, MapPin, Star, Calendar } from 'lucide-react'

export default function StoryPage() {
  const timeline = [
    {
      year: '1952',
      title: 'The Journey Begins',
      description: 'Maria Rossi arrives in Houston from Sicily with her family recipes and a dream to share authentic Italian cuisine with her new community.',
      image: '/generated/family-legacy.png'
    },
    {
      year: '1965',
      title: 'Growing the Family',
      description: 'The restaurant expands to accommodate the growing number of loyal customers. Second generation joins the kitchen, learning Nonna\'s secrets.',
      image: '/generated/pasta-making.png'
    },
    {
      year: '1978',
      title: 'Community Recognition',
      description: 'Mom\'s Spaghetti receives its first major award from Houston Chronicle as "Best Family Restaurant" cementing its place in Houston\'s heart.',
      image: '/generated/family-legacy.png'
    },
    {
      year: '1995',
      title: 'Third Generation',
      description: 'The grandchildren officially join the business, bringing fresh ideas while preserving the traditional recipes that made the restaurant famous.',
      image: '/generated/pasta-making.png'
    },
    {
      year: '2010',
      title: 'Modern Touches',
      description: 'Restaurant undergoes renovation while maintaining its warm, family atmosphere. Online ordering and catering services launched.',
      image: '/generated/family-legacy.png'
    },
    {
      year: '2024',
      title: 'Today & Tomorrow',
      description: 'Still family-owned and operated, continuing to serve authentic Italian-American cuisine with the same love and dedication as day one.',
      image: '/generated/pasta-making.png'
    }
  ]

  const familyValues = [
    {
      icon: <Heart className="text-tomato" size={32} />,
      title: 'Made with Love',
      description: 'Every dish is prepared with the same care and attention Nonna Maria put into her cooking 70 years ago.'
    },
    {
      icon: <Users className="text-tomato" size={32} />,
      title: 'Family Tradition',
      description: 'Three generations working together, each bringing their unique touch while honoring our heritage.'
    },
    {
      icon: <Award className="text-tomato" size={32} />,
      title: 'Community Excellence',
      description: 'Proud to be Houston\'s longest-running Italian-American restaurant, serving our community with pride.'
    },
    {
      icon: <Clock className="text-tomato" size={32} />,
      title: 'Time-Tested Recipes',
      description: 'Our secret family recipes have been passed down unchanged for three generations.'
    }
  ]

  const achievements = [
    { year: '2023', award: 'Houston Chronicle "Best Italian Restaurant"', icon: '🏆' },
    { year: '2022', award: 'Yelp "Top 10 Houston Restaurants"', icon: '⭐' },
    { year: '2021', award: 'TripAdvisor "Certificate of Excellence"', icon: '🌟' },
    { year: '2020', award: 'Houston Press "Best Family Restaurant"', icon: '👨‍👩‍👧‍👦' },
    { year: '2019', award: 'Food & Wine "Local Gems"', icon: '💎' },
    { year: '2018', award: 'AAA "Recommended Restaurant"', icon: '🚗' }
  ]

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 text-[200px] font-script rotate-12">♥</div>
            <div className="absolute bottom-10 right-10 text-[150px] font-script -rotate-12">👨‍👩‍👧‍👦</div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-script font-bold mb-6">
                Meet the Family
              </h1>
              <p className="text-xl md:text-2xl font-serif mb-8">
                Three generations of authentic Italian-American tradition,
                served with love in the heart of Houston since 1952
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-cream/90 font-sans">
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>Est. 1952</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>3 Generations</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>Houston, Texas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Family Story */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-script font-bold text-brown mb-6">
                  Our Family Story
                </h2>
                <p className="text-brown/80 font-serif text-lg md:text-xl leading-relaxed">
                  From humble beginnings in Sicily to becoming Houston's beloved Italian-American destination,
                  our story is one of family, tradition, and the universal language of good food.
                </p>
              </div>

              {/* Family Values */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {familyValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/60 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-brown/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-brown mb-3">
                          {value.title}
                        </h3>
                        <p className="font-sans text-brown/80 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Extended Story */}
              <div className="bg-white/80 rounded-3xl p-8 md:p-12 shadow-xl border border-brown/10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-serif font-bold text-brown">
                      From Sicily to Houston
                    </h3>
                    <p className="font-sans text-brown/90 leading-relaxed">
                      In 1952, our founder Maria Rossi made the brave journey from her small village in Sicily
                      to Houston, Texas. She carried with her more than just belongings – she brought generations
                      of family recipes, culinary traditions, and an unwavering commitment to using only the
                      finest ingredients.
                    </p>
                    <p className="font-sans text-brown/90 leading-relaxed">
                      Starting with just a small storefront and a handful of tables, Maria began serving the
                      Italian-American community and slowly won over the hearts and taste buds of all Houstonians.
                      Her secret wasn't just in the recipes – it was in treating every customer like family.
                    </p>
                    <p className="font-sans text-brown/90 leading-relaxed">
                      Today, three generations later, we continue Maria's legacy. Her grandson Tony runs the
                      kitchen, her granddaughter Rosa manages operations, and her great-grandchildren are
                      already learning the family trade. The recipes remain unchanged, the warmth is still
                      the same, and every plate is still prepared with amore.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src="/generated/family-legacy.png"
                        alt="The Rossi family through the generations"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-brown/80 text-cream px-4 py-2 rounded-xl">
                        <p className="font-sans text-sm">Three generations of the Rossi family</p>
                      </div>
                    </div>

                    <blockquote className="bg-tomato/10 border-l-4 border-tomato rounded-r-2xl p-6">
                      <p className="font-serif italic text-brown text-lg mb-4">
                        "When you cook with love, people can taste it. When you serve with heart,
                        people can feel it. That's what makes a restaurant a home."
                      </p>
                      <cite className="font-sans text-brown/70 text-sm">
                        — Maria Rossi, Founder (1925-2018)
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-script font-bold text-brown mb-6">
                Our Journey Through Time
              </h2>
              <p className="text-brown/80 font-serif text-lg md:text-xl max-w-3xl mx-auto">
                Seven decades of serving Houston families, growing with our community,
                and preserving authentic Italian-American traditions.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row gap-8 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="flex-shrink-0 bg-tomato text-cream rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
                      <span className="font-serif font-bold text-xl">{event.year}</span>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-brown mb-4">
                        {event.title}
                      </h3>
                      <p className="font-sans text-brown/80 text-lg leading-relaxed max-w-lg">
                        {event.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="w-64 h-48 relative rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-script font-bold text-brown mb-6">
                Awards & Recognition
              </h2>
              <p className="text-brown/80 font-serif text-lg md:text-xl max-w-3xl mx-auto">
                We're honored to be recognized by our community and food critics alike
                for our commitment to authentic cuisine and exceptional service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-brown/10"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div className="font-serif font-bold text-lg text-tomato mb-2">
                    {achievement.year}
                  </div>
                  <div className="font-sans text-brown/80 text-sm leading-relaxed">
                    {achievement.award}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="font-sans text-brown/80 italic">
                Thank you to our Houston community for your continued support and recognition.
                These awards belong to all the families who have made us part of their lives.
              </p>
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <LocationHours />
      </main>

      <Footer />
    </>
  )
}