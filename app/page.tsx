"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import InvestorsSection from "@/components/investors-section"
import VendorsSection from "@/components/vendors-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="bg-[#FFFFF0] text-[#03213d] font-sans">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection setActiveSection={setActiveSection} />
      <AboutSection />
      <InvestorsSection />
      <VendorsSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  )
}
