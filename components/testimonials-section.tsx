"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Property Investor",
    content:
      "OKLU transformed my investment portfolio. The team's expertise and attention to detail is unmatched in the industry. Highly recommended!",
    rating: 5,
    image: "AH",
  },
  {
    id: 2,
    name: "Fatima Al-Mansouri",
    role: "Real Estate Developer",
    content:
      "Working with OKLU has been a game-changer. Their innovative approach to property management sets them apart from competitors.",
    rating: 5,
    image: "FM",
  },
  {
    id: 3,
    name: "Mohammed Al-Kaabi",
    role: "Business Owner",
    content:
      "The customer service at OKLU is exceptional. They understood our needs perfectly and delivered beyond expectations.",
    rating: 5,
    image: "MK",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Investment Manager",
    content:
      "OKLU properties have shown consistent growth. Their market analysis and strategic planning are invaluable to our portfolio.",
    rating: 5,
    image: "SJ",
  },
  {
    id: 5,
    name: "Khalid Al-Maktoum",
    role: "Entrepreneur",
    content:
      "From initial consultation to final handover, OKLU maintained the highest standards. Truly a premium experience.",
    rating: 5,
    image: "KM",
  },
]

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return

    const autoScroll = () => {
      const container = scrollContainerRef.current
      if (container) {
        container.scrollBy({ left: 320, behavior: "smooth" })

        // Reset to beginning when reaching end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 50) {
          container.scrollBy({ left: -(container.scrollWidth - 320), behavior: "auto" })
        }
      }
    }

    autoScrollIntervalRef.current = setInterval(autoScroll, 5000)

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [isAutoScrolling])

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
    }

    return () => {
      window.removeEventListener("resize", checkScroll)
      if (container) {
        container.removeEventListener("scroll", checkScroll)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 320
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03213d] mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by investors and developers across the region. Hear their success stories.
          </p>
          <div className="w-20 h-1 bg-[#d5a86f] mx-auto mt-6"></div>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-[#d5a86f] hover:bg-[#c19560] disabled:bg-gray-300 disabled:cursor-not-allowed p-2 rounded-full transition-all shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Testimonials Scroll Container */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 border-t-4 border-[#d5a86f]"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d5a86f] text-[#d5a86f]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d5a86f] flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-[#03213d]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-[#d5a86f] hover:bg-[#c19560] disabled:bg-gray-300 disabled:cursor-not-allowed p-2 rounded-full transition-all shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Info Text */}
        <p className="text-center text-sm text-gray-500 mt-8">Hover over testimonials to pause auto-scroll</p>
      </div>
    </section>
  )
}
