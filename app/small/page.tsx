"use client"

import Image from "next/image"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import HeroSection from "@/components/sections/HeroSection"
import SmallServe from "@/components/sections/SmallServe"


export default function SmallPage() {
  return (
<>
    <HeroSection
            title="Yeastar for Small Business"
            description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
            backgroundImage="/"
          />

    <SmallServe/>
    </>
  )
}