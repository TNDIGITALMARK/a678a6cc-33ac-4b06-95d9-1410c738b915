'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, Navigation, Car, Calendar } from 'lucide-react'

export default function LocationHours() {
  const [selectedDay, setSelectedDay] = useState('today')

  const hours = [
    { day: 'Monday', time: '11:00 AM - 9:30 PM', isToday: false },
    { day: 'Tuesday', time: '11:00 AM - 9:30 PM', isToday: true },
    { day: 'Wednesday', time: '11:00 AM - 9:30 PM', isToday: false },
    { day: 'Thursday', time: '11:00 AM - 9:30 PM', isToday: false },
    { day: 'Friday', time: '11:00 AM - 10:30 PM', isToday: false },
    { day: 'Saturday', time: '12:00 PM - 10:30 PM', isToday: false },
    { day: 'Sunday', time: '12:00 PM - 9:00 PM', isToday: false }
  ]

  const contactInfo = [
    {
      icon: <MapPin className="text-tomato" size={24} />,
      title: "Address",
      details: ["123 Main Street", "Downtown Houston, TX 77002"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="text-tomato" size={24} />,
      title: "Phone",
      details: ["(713) 555-MAMA", "(713) 555-6262"],
      action: "Call Now"
    },
    {
      icon: <Mail className="text-tomato" size={24} />,
      title: "Email",
      details: ["hello@momsspaghetti.com", "catering@momsspaghetti.com"],
      action: "Send Email"
    }
  ]

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-[120px] font-script text-brown rotate-12">
          📍
        </div>
        <div className="absolute bottom-20 right-20 text-[100px] font-script text-brown -rotate-12">
          🍝
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-tomato font-sans font-semibold text-sm tracking-wide uppercase mb-4">
            Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script font-bold text-brown mb-6">
            Location & Hours
          </h2>
          <p className="text-brown/80 font-serif text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Find us in the heart of Downtown Houston, where tradition meets convenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map and Location Info */}
          <div className="space-y-8">
            {/* Interactive Map Placeholder */}
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden h-80 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-tomato/20 to-brown/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-tomato mx-auto mb-4" size={48} />
                  <h3 className="font-serif font-bold text-2xl text-brown mb-2">
                    Mom's Spaghetti
                  </h3>
                  <p className="font-sans text-brown/80 mb-4">
                    123 Main Street<br />
                    Downtown Houston, TX 77002
                  </p>
                  <button className="bg-tomato hover:bg-tomato/90 text-cream px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center gap-2 mx-auto">
                    <Navigation size={18} />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-brown/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-serif font-bold text-lg text-brown mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-sans text-brown/80 text-sm md:text-base">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <button className="bg-tomato/10 hover:bg-tomato/20 text-tomato px-4 py-2 rounded-full font-sans text-sm font-semibold transition-colors duration-200">
                      {info.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Parking Information */}
            <div className="bg-basil/10 border-l-4 border-basil rounded-r-2xl p-6">
              <div className="flex items-start gap-3">
                <Car className="text-basil flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-serif font-bold text-lg text-brown mb-2">
                    Parking Information
                  </h4>
                  <p className="font-sans text-brown/80 text-sm md:text-base">
                    Free parking available in our private lot behind the restaurant.
                    Street parking also available. Valet service on weekends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours and Additional Info */}
          <div className="space-y-8">
            {/* Operating Hours */}
            <div className="bg-white/80 rounded-3xl p-8 shadow-xl border border-brown/10">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-tomato" size={32} />
                <h3 className="font-serif font-bold text-2xl text-brown">
                  Operating Hours
                </h3>
              </div>

              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 rounded-xl transition-colors duration-200 ${
                      schedule.isToday
                        ? 'bg-tomato/10 border border-tomato/20'
                        : 'hover:bg-cream/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`font-serif font-semibold ${
                        schedule.isToday ? 'text-tomato' : 'text-brown'
                      }`}>
                        {schedule.day}
                      </span>
                      {schedule.isToday && (
                        <span className="bg-tomato text-cream px-2 py-1 rounded-full text-xs font-sans font-bold">
                          TODAY
                        </span>
                      )}
                    </div>
                    <span className={`font-sans ${
                      schedule.isToday ? 'text-tomato font-semibold' : 'text-brown/80'
                    }`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-basil/10 rounded-xl">
                <p className="font-sans text-sm text-brown/80 text-center">
                  <strong>Note:</strong> Kitchen closes 30 minutes before closing time.
                  Last seating 1 hour before close.
                </p>
              </div>
            </div>

            {/* Reservation Info */}
            <div className="bg-tomato/5 border-2 border-tomato/20 rounded-3xl p-8">
              <div className="text-center">
                <Calendar className="text-tomato mx-auto mb-4" size={48} />
                <h3 className="font-serif font-bold text-2xl text-brown mb-4">
                  Make a Reservation
                </h3>
                <p className="font-sans text-brown/80 mb-6">
                  Planning a special dinner or gathering? Reserve your table to ensure
                  the perfect experience for your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-tomato hover:bg-tomato/90 text-cream px-6 py-3 rounded-full font-sans font-bold transition-all duration-300 transform hover:scale-105">
                    Reserve Online
                  </button>
                  <button className="bg-transparent border-2 border-tomato text-tomato hover:bg-tomato hover:text-cream px-6 py-3 rounded-full font-sans font-bold transition-all duration-300">
                    Call for Reservation
                  </button>
                </div>
              </div>
            </div>

            {/* Special Notices */}
            <div className="space-y-4">
              <div className="bg-yellow-100/80 border-l-4 border-yellow-500 rounded-r-xl p-4">
                <p className="font-sans text-sm text-brown">
                  <strong>Happy Hour:</strong> Monday-Thursday 3:00-6:00 PM
                  • $2 off appetizers • $5 house wine
                </p>
              </div>
              <div className="bg-blue-100/80 border-l-4 border-blue-500 rounded-r-xl p-4">
                <p className="font-sans text-sm text-brown">
                  <strong>Family Night:</strong> Sundays • Kids eat free with adult entree
                  • Live accordion music 6:00-8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}