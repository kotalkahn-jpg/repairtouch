"use client"
import HeroSection from "@/components/sections/HeroSection"
import EnterServe from "@/components/sections/EnterServe"
import { useState } from "react"
import {
  Building2, Globe, Headphones, Network
} from "lucide-react"

const filters = [
    {
      title: "Call to Departments",
      icon: <Building2 size={18} />,
      description:
        "Route calls intelligently across departments with advanced IVR and dial-by-name features. Ensure every team is reachable and communication flows efficiently.",
      points: [
        "Up to 1,000 concurrent calls",
        "Department-based routing",
        "Smart IVR navigation",
      ],
      image: "/images/pbx-dashboard.png",
    },
    {
      title: "Multi-Site & Global Communication",
      icon: <Globe size={18} />,
      description:
        "Connect multiple offices and teams globally under one unified communication system. Maintain seamless collaboration across locations.",
      points: [
        "Global office connectivity",
        "Centralized communication",
        "Cross-location call routing",
      ],
      image: "/images/global.png",
    },
    {
      title: "Call Center",
      icon: <Headphones size={18} />,
      description:
        "Build and manage powerful call center operations with queue management, monitoring, and performance tracking tools.",
      points: [
        "Queue management",
        "Real-time monitoring",
        "Agent performance tracking",
      ],
      image: "/images/callcenter.png",
    },
    {
      title: "Interconnected Ecosystem",
      icon: <Network size={18} />,
      description:
        "Integrate your communication system with CRM, helpdesk, and collaboration tools to create a unified business ecosystem.",
      points: [
        "CRM integrations",
        "API & SDK access",
        "Automation workflows",
      ],
      image: "/images/integration.png",
    },
  ]

  

export default function HostingPage() {
  const [active, setActive] = useState(0)
  return (
    <>
      <HeroSection
        title="Enterprise-Grade Phone System for Modern Businesses"
        description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
        backgroundImage="/hosting.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Powerful Communication Capabilities
        </h2>
        <p className="text-gray-600">
          Explore features designed to elevate your business communication.
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition ${
              active === i
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>

      {/* CONTENT CARD */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-lg p-8">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={filters[active].image}
            alt={filters[active].title}
            className="rounded-xl shadow-md w-full max-w-md object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div>

          <h3 className="text-2xl font-semibold mb-4">
            {filters[active].title}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {filters[active].description}
          </p>

          <ul className="space-y-3">
            {filters[active].points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {point}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
<EnterServe/>
      
      

  

    
  

      
    </>
  )
}
