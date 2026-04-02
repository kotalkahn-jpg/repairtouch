import HeroSection from "@/components/sections/HeroSection"
import SoftMore from "@/components/sections/SoftMore"
import FaqALL from "@/components/sections/FaqALL"
import CTASection from "@/components/sections/CTASection"
import { Cloud } from "lucide-react"

const faqs = [
  {
    question: "What is PBX software?",
    answer: "sdsd."
  },
  {
    question: "Do I need hardware with Yeastar PBX software?",
    answer: "Not necessarily. It can be self-hosted on your own server, which could be a physical server, a virtual machine, or a cloud server. This flexibility allows you to deploy Yeastar PBX software in a way that best suits your business needs, whether you prefer to use existing hardware or opt for a cloud-based environment."
  },
  {
    question: "How does software PBX work for a business?",
    answer: "Software PBX uses VoIP technology to handle and route calls over the internet. It replaces traditional hardware-based phone systems, offering features such as call routing, voicemail, and conferencing. It enables businesses to streamline communication, reduce costs, and scale easily while providing flexibility and advanced functionality."
  },
  {
question: "Is Yeastar PBX software suitable for businesses of what size?",
answer: "Capable of handling up to 10,000 users and 1,000 concurrent calls, Yeastar software PBX is suitable for businesses of all sizes, from SMBs to large enterprises. Its scalability ensures that it can grow with the business, whether it’s a startup with a few employees or a multinational corporation with thousands of users."
  }
]

export default function HostingPage() {
  return (
    <>
      <HeroSection
        title="Esoftware"
        description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
        backgroundImage="/hosting.jpg"
      />

 <SoftMore/>

 <FaqALL
        title="Frequently Asked Questions"
        subtitle="Everything you need to know"
        faqs={faqs}
      />  
    
<CTASection/>

    </>
  )
}