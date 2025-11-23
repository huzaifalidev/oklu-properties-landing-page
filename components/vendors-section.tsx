"use client"

import type React from "react"

import { useState } from "react"

export default function VendorsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "residential",
    location: "",
    expectedPrice: "",
    notes: "",
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
    console.log("Vendor form submitted:", formData)
    alert("Thank you for submitting your property! Our team will review it shortly.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "residential",
      location: "",
      expectedPrice: "",
      notes: "",
    })
  }

  return (
    <section id="vendors" className="py-20 px-4 sm:px-6 lg:px-8 bg-white w-full">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03213d] mb-4">List Your Property</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with us and showcase your property to our investor network. Reach qualified buyers faster.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-2xl shadow-lg border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Your Name *</label>
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
              <label className="block text-[#03213d] font-semibold mb-2">Property Type *</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
                placeholder="Property location"
              />
            </div>
            <div>
              <label className="block text-[#03213d] font-semibold mb-2">Expected Price *</label>
              <input
                type="text"
                name="expectedPrice"
                value={formData.expectedPrice}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
                placeholder="Expected price range"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#03213d] font-semibold mb-2">Property Description</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d5a86f] transition-colors"
              placeholder="Describe your property and key features..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d5a86f] hover:bg-[#c49860] text-white font-bold py-3 rounded-lg transition-colors duration-300 text-lg"
          >
            Submit Property Listing
          </button>
        </form>
      </div>
    </section>
  )
}
