"use client"

import { Search } from "lucide-react"
import { useState } from "react"

interface HeroSectionProps {
  setActiveSection: (section: string) => void
}

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen w-full relative flex items-center justify-center pt-16"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(213, 168, 111, 0.15) 0%, rgba(3, 33, 61, 0.2) 100%), url(/bg.jpg?height=1080&width=1920&query=luxury%20dubai%20skyline%20aerial)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Invest in premium properties, with expert guidance
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              Backed by local connections and developer access. We make investing in properties smoother and more
              personal.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-3 rounded-lg">
                <span className="font-semibold">11+</span>
                <span className="text-sm">Years</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-3 rounded-lg">
                <span className="font-semibold">500+</span>
                <span className="text-sm">Properties</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-3 rounded-lg">
                <span className="font-semibold">100+</span>
                <span className="text-sm">Investors</span>
              </div>
            </div>
          </div>

          {/* Right Decorative Space */}
          <div></div>
        </div>

        {/* Search Bar */}
        {/* <div className="mt-12 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d5a86f]">
                <option>Select Location</option>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d5a86f]">
                <option>Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Mixed Use</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d5a86f]">
                <option>Category</option>
                <option>Luxury</option>
                <option>Mid-Range</option>
                <option>Budget</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-[#d5a86f] hover:bg-[#c49860] text-white font-bold py-2 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
