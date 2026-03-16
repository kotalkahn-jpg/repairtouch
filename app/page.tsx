"use client"

import { useEffect, useState } from "react"

import Loader from "@/components/Loader"

import HeroCarousel from "@/components/sections/HeroCarousel"
import ServicesSection from "@/components/sections/ServicesSection"
import BusinessSolutions from "@/components/sections/BusinessSolutions"
import RepairProcess from "@/components/sections/RepairProcess"
import FAQSection from "@/components/sections/FAQSection"
import CTASection from "@/components/sections/CTASection"

export default function Home() {

  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [minTimePassed, setMinTimePassed] = useState(false)

  useEffect(() => {

    // MINIMUM LOADER TIME
    const timer = setTimeout(() => {
      setMinTimePassed(true)
    }, 5000)

    // PAGE ASSETS
    const handleLoad = () => {
      setAssetsLoaded(true)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener("load", handleLoad)
    }

  }, [])

  const loading = !(assetsLoaded && minTimePassed)

  return (

    <>
      <Loader visible={loading} />

      <main
        className={`transition-opacity duration-700
        ${loading ? "opacity-0" : "opacity-100"}`}
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