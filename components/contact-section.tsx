"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03213d] mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to our team anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#d5a86f] hover:bg-[#c49860] text-white font-bold py-3 rounded-lg transition-colors duration-300 text-lg"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <MapPin className="w-6 h-6 text-[#d5a86f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#03213d] mb-1">Office Address</h3>
                <p className="text-gray-600">123 Luxury Avenue, Property District, Dubai, UAE 12345</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <Phone className="w-6 h-6 text-[#d5a86f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#03213d] mb-1">Phone</h3>
                <p className="text-gray-600">+971 4 123 4567</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <Mail className="w-6 h-6 text-[#d5a86f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#03213d] mb-1">Email</h3>
                <p className="text-gray-600">info@okluproperties.com</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <Clock className="w-6 h-6 text-[#d5a86f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#03213d] mb-1">Business Hours</h3>
                <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600 text-sm">Sat: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600 text-sm">Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
