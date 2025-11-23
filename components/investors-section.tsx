"use client"

import type React from "react"

import { useState } from "react"

export default function InvestorsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentType: "residential",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Investor form submitted:", formData)
    alert("Thank you for your interest! We will contact you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentType: "residential",
      message: "",
    })
  }

  return (
    <section id="investors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white w-full">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03213d] mb-4">Become an Investor</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our network of investors and gain access to exclusive property deals and expert consultations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Email *</label>
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
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Investment Type *</label>
              <select
                name="investmentType"
                value={formData.investmentType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="portfolio">Portfolio</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#03213d] font-semibold mb-2">Message / Notes</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
              placeholder="Tell us more about your investment goals..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d5a86f] hover:bg-[#c49860] text-white font-bold py-3 rounded-lg transition-colors duration-300 text-lg"
          >
            Start Investing
          </button>
        </form>
      </div>
    </section>
  )
}
