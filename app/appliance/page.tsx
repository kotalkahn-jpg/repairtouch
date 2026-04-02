"use client"

import Image from "next/image"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import ProductFilter from "@/components/ProductFilter"
import CTASection from "@/components/sections/CTASection"
import {
  PhoneCall,
  Workflow,
  Mail,
  Mic,
  Users,
  Megaphone,
  Video,
  MessageSquare,
  Database,
  Code,
  Settings,
  Globe
} from "lucide-react"
const features = [
  {
    title: "Call Management",
    description:
      "Intelligent call routing, IVR, auto attendants, voicemail, call recording, time conditions, and advanced call handling to ensure every interaction is efficient and professional.",
    image: "/appliance.png",
  },
  {
    title: "Call Center Capabilities",
    description:
      "Inbound and outbound call management with queues, real-time monitoring, wallboards, reporting, queue callbacks, surveys, and campaign tools.",
    image: "/appliance.png",
  },
  {
    title: "Unified Communications",
    description:
      "Voice, video, messaging, and presence combined into one seamless experience across desktop, mobile, and web platforms.",
    image: "/appliance.png",
  },
  {
    title: "Omnichannel Messaging",
    description:
      "Engage customers via WhatsApp, SMS, live chat, and social platforms in one unified interface with centralized conversation tracking.",
    image: "/appliance.png",
  },
  {
    title: "Security & Reliability",
    description:
      "Enterprise-grade protection with TLS, SRTP encryption, firewall, intrusion prevention, 2FA, and high-availability systems.",
    image: "/appliance.png",
  },
  {
    title: "Scalability & Flexibility",
    description:
      "Expand users, extensions, and call capacity as your business grows without changing infrastructure.",
    image: "/appliance.png",
  },
]

export default function AppliancePage() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[600px] h-[80vh] flex items-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
          alt="PBX Appliance"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
              IP PBX Appliance for Modern Businesses
            </h1>
          </FadeIn>

          <SlideUp>
            <p className="text-lg md:text-xl max-w-xl mb-8">
              A powerful hardware-based communication system combining voice,
              video, messaging, and customer experience tools into one solution.
            </p>
          </SlideUp>

          <SlideUp>
            <button className="bg-primary px-8 py-4 rounded-lg font-semibold">
              Request a Demo
            </button>
          </SlideUp>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 text-center px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            PBX Plus More Than Just a Phone System
          </h2>
        </FadeIn>

        <SlideUp>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Go beyond traditional telephony with a unified system that integrates
            calling, collaboration, messaging, and customer experience tools —
            all in one powerful appliance.
          </p>
        </SlideUp>
      </section>

<ProductFilter/>
     

      

      {/* ================= FEATURE LIST ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Everything You Need in One System
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">

  {[
    { title: "Call Routing & Forwarding", icon: <PhoneCall /> },
    { title: "Multi-level IVR", icon: <Workflow /> },
    { title: "Voicemail & Email Integration", icon: <Mail /> },
    { title: "Call Recording", icon: <Mic /> },
    { title: "Queue Management", icon: <Users /> },
    { title: "Outbound Campaign Tools", icon: <Megaphone /> },
    { title: "Video Conferencing", icon: <Video /> },
    { title: "Team Messaging", icon: <MessageSquare /> },
    { title: "CRM Integration", icon: <Database /> },
    { title: "API & SDK", icon: <Code /> },
    { title: "Auto Provisioning", icon: <Settings /> },
    { title: "Remote Management", icon: <Globe /> },
  ].map((item, i) => (
    <SlideUp key={i}>
      <div className="group bg-white/70 backdrop-blur-lg border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">

        {/* ICON */}
        <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
          {item.icon}
        </div>

        {/* TITLE */}
        <h4 className="font-semibold text-gray-800 mb-1">
          {item.title}
        </h4>

        {/* OPTIONAL SUBTEXT */}
        <p className="text-sm text-gray-500">
          Powerful feature to enhance your communication system.
        </p>

      </div>
    </SlideUp>
  ))}

</div>

        </div>
      </section>

<div className="grid md:grid-cols-2 gap-12 items-center">

  {/* LEFT SIDE (TEXT + ICONS) */}
  <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Robust and ready-made IP PBX integrations
          </h2>

          <p className="text-muted-foreground mb-6">
            Integrate Yeastar IP PBX to collaboration tools, CRM, helpdesk, and more, and enhance your existing infrastructure. Enjoy the flexibility and tailored experiences enabled by a robust app ecosystem.With deeper integrations, your IP PBX becomes a central hub for managing interactions—whether it’s calls, messages, or customer records—ensuring that every touchpoint is connected and consistent. This allows your teams to respond faster, make better decisions, and deliver more personalized experiences.
          </p>

          

        </div>

  {/* RIGHT SIDE (IMAGE) */}
  <div>
    <img
      src="/services/robust.png"
      alt="Digital Solutions"
      className="rounded-2xl shadow-lg w-full object-cover"
    />
  </div>

</div>

<CTASection/>

    </div>
  )
}