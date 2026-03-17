"use client"

import HeroCarousel from "@/components/sections/HeroCarousel"
import ServicesSection from "@/components/sections/ServicesSection"
import BusinessSolutions from "@/components/sections/BusinessSolutions"
import RepairProcess from "@/components/sections/RepairProcess"
import FAQSection from "@/components/sections/FAQSection"
import CTASection from "@/components/sections/CTASection"

export default function Home() {

  return (

    <>

      <main
        className="transition-opacity duration-700 opacity-100"
      >

        <HeroCarousel />

        <br /><br /><br /><br />

        <ServicesSection />

        <BusinessSolutions />

        <RepairProcess />

        <FAQSection />

        <CTASection />

      </main>
    </>
  )
}