import HeroSection from "@/components/sections/HeroSection"
import ImageGridFeature from "@/components/sections/ImageGridFeature"
import CloudIn from "@/components/sections/CloudIn"
import Image from "next/image"
import { CheckCircle, CloudIcon, Shield, Zap } from "lucide-react"
export default function HostingPage() {
  return (
    <>
      <HeroSection
        title="Web Hosting & Infrastructure"
        description="We don’t just host websites — we build and manage reliable, scalable infrastructure that powers your entire online presence."
        quote="Your business, online — stable, secure, and always available."
        backgroundImage="pages/watched-cloud.jpg"
      />
      <br></br><br></br><br></br><br></br><br></br>

       <ImageGridFeature />

       <CloudIn/>
      
    </>
  )
}