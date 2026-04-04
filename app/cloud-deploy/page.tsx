"use client"

import Image from "next/image"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import HeroSection from "@/components/sections/HeroSection"
import { useState } from "react"
import {
  Building2, Globe, Headphones, Network
} from "lucide-react"
import CTASection from "@/components/sections/CTASection"

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
      image: "/pages/callcenter.png",
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

export default function CloudDeployPage() {
  const [active, setActive] = useState(0)
  const [mainTab, setMainTab] = useState(0)
const [subTab, setSubTab] = useState(0)

const data = [
  {
    name: "Business Phone",
    sub: [
      {
        title: "Work from Anywhere",
        description:
          "Make and receive business calls with your preferred device and from anywhere. Stay connected on mobile, desktop, or browser with a consistent calling experience.",
        points: [
          "Up to 1,000 concurrent calls",
          "Direct calling to users or groups",
          "Dial from all devices",
        ],
        image: "/pages/phone.jpg",
      },
      {
        title: "Unified Communications",
        description:
          "Unify voice, messaging, and collaboration tools into a single platform for seamless communication.",
        points: [
          "Team messaging",
          "Video conferencing",
          "Presence status",
        ],
        image: "/pages/cont.jpg",
      },
      {
        title: "Call Efficiency",
        description:
          "Improve operational efficiency with advanced routing and automation tools.",
        points: [
          "Call routing",
          "Auto attendants",
          "Call analytics",
        ],
        image: "/pages/cloudit.jpg",
      },
    ],
  },
  {
    name: "Contact Center",
    sub: [
      {
        title: "Call Queues",
        description:
          "Efficiently manage incoming calls with advanced queue strategies.",
        points: [
          "Smart routing",
          "Agent distribution",
          "Queue monitoring",
        ],
        image: "/pages/cont.jpg",
      },
    ],
  },
  {
    name: "Open Ecosystem",
    sub: [
      {
        title: "Integrations",
        description:
          "Connect with CRM, helpdesk, and third-party tools for a complete ecosystem.",
        points: [
          "API access",
          "CRM integrations",
          "Automation workflows",
        ],
        image: "/pages/cont.jpg",
      },
    ],
  },
]
  return (

     <>
          <HeroSection
            title="EntCloud PBX Phone System for Business"
            description="Run your business phone system on the cloud with secure calling, unified communications, and centralized management.."
            backgroundImage="/hosting.jpg"
          />

          <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">
        Everything You Need in a Cloud PBX
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Bring telephony, contact center, and integrations together in one platform for daily business operations.
      </p>
    </div>

    {/* MAIN FILTER */}
    <div className="flex justify-center mb-10">
      {["Business Phone", "Contact Center", "Open Ecosystem"].map((item, i) => (
        <button
          key={i}
          onClick={() => {
            setMainTab(i)
            setSubTab(0)
          }}
          className={`px-6 py-3 rounded-full text-sm font-medium transition ${
            mainTab === i
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>

    {/* SUB FILTER */}
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {data[mainTab].sub.map((item, i) => (
        <button
          key={i}
          onClick={() => setSubTab(i)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
        >
          <span className={`w-5 h-5 rounded-full flex items-center justify-center ${
            subTab === i ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}>
            ✓
          </span>
          {item.title}
        </button>
      ))}
    </div>

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-10">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <img
          src={data[mainTab].sub[subTab].image}
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {data[mainTab].sub[subTab].description}
        </p>

        <ul className="space-y-4">
          {data[mainTab].sub[subTab].points.map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-800">
              <span className="w-5 h-5 bg-green-500 rounded-full"></span>
              {point}
            </li>
          ))}
        </ul>

      </div>

    </div>

  </div>

</section>
          
          
    <section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        AI-Powered Cloud PBX Communication
      </h2>
      <p className="text-gray-600">
        Built-in AI tools act as a virtual assistant, keeping your team productive and responsive in customer communications.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

        <span className="text-sm text-blue-600 font-medium">
          AI Feature
        </span>

        <h3 className="font-semibold text-lg mt-2 mb-3">
          Voicemail & Call Transcription
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          Instantly convert voicemails and calls into text, ensuring you never miss important messages and can quickly review conversations.
        </p>

        <img
          src="/pages/AI.webp"
          className="rounded-xl w-full object-cover"
        />

      </div>


      {/* CARD 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

        <span className="text-sm text-blue-600 font-medium">
          Transcription
        </span>

        <h3 className="font-semibold text-lg mt-2 mb-3">
          Natural Speech Translator
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          Transform text into expressive, lifelike voice messages with natural rhythm, enabling interactive and engaging communication.
        </p>

        <img
          src="/pages/quote.webp"
          className="rounded-xl w-full object-cover"
        />

      </div>


      {/* CARD 3 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

        <span className="text-sm text-blue-600 font-medium">
          Translator
        </span>

        <h3 className="font-semibold text-lg mt-2 mb-3">
          Call Summaries & Insights
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          Receive call summaries and action items immediately after each call, eliminating missed follow-ups and improving productivity.
        </p>

        <img
          src="/pages/translator.webp"
          className="rounded-xl w-full object-cover"
        />

      </div>


      {/* CARD 4 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">

        <span className="text-sm text-blue-600 font-medium">
          Summary
        </span>

        <h3 className="font-semibold text-lg mt-2 mb-3">
          Intelligent Communication Assistant
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          Enhance productivity with AI-powered assistance that helps teams manage conversations, extract insights, and respond faster.
        </p>

        <img
          src="/pages/assistant.webp"
          className="rounded-xl w-full object-cover"
        />

      </div>

    </div>

   <CTASection/> 

  </div>

</section>

      

      

      

     

  
    </>
  )
}