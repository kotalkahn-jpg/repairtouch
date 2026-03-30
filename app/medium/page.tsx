"use client"

import Image from "next/image"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"

const pillars = [
  {
    title: "Department Communication",
    desc: "Streamline internal communication across teams and departments.",
  },
  {
    title: "Multi-site Connectivity",
    desc: "Connect branches globally with unified communication.",
  },
  {
    title: "Call Center",
    desc: "Advanced queueing, analytics, and customer experience tools.",
  },
  {
    title: "Open Ecosystem",
    desc: "Integrate with CRM, APIs, and third-party systems.",
  },
]

const deployments = [
  "On-Premise Deployment",
  "Cloud Deployment",
  "Hybrid Deployment",
  "Bring Your Own Infrastructure",
]

export default function MediumPage() {
  return (
    <div className="w-full">

     {/* ================= HERO ================= */}
<section className="relative min-h-[650px] md:h-[85vh] flex items-center text-white">

  {/* BACKGROUND IMAGE */}
  <Image
    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    alt="Enterprise Communication"
    fill
    className="object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <FadeIn>
        <p className="text-sm uppercase tracking-wide text-gray-300 mb-4">
          Enterprise Communication Solution
        </p>
      </FadeIn>

      <FadeIn>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Powering Communication for Large Enterprises
        </h1>
      </FadeIn>

      <SlideUp>
        <p className="text-gray-300 text-lg mb-8">
          A scalable, secure, and centralized phone system designed to handle
          global operations, high call volumes, and complex enterprise workflows.
        </p>
      </SlideUp>

      <SlideUp>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-primary px-6 py-3 rounded-lg font-semibold">
            Request a Demo
          </button>
          <button className="border border-white px-6 py-3 rounded-lg">
            Contact Sales
          </button>
        </div>
      </SlideUp>
    </div>

    {/* RIGHT VISUAL */}
    <SlideUp>
      <div className="hidden md:block bg-white/10 backdrop-blur p-6 rounded-xl">
        <p className="text-lg font-semibold mb-2">System Highlights</p>
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>• Multi-site global connectivity</li>
          <li>• 1000+ concurrent calls</li>
          <li>• Centralized admin control</li>
          <li>• High availability architecture</li>
        </ul>
      </div>
    </SlideUp>

  </div>
</section>

      {/* ================= TRUST ================= */}
      <section className="py-12 bg-gray-50 text-center text-gray-500">
        <p>Trusted by enterprises worldwide</p>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

          {pillars.map((item, i) => (
            <SlideUp key={i}>
              <div className="p-6 border rounded-xl">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
              </div>
            </SlideUp>
          ))}

        </div>
      </section>

      {/* ================= DEEP DIVE ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideUp>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Global Communication at Scale
                </h2>
                <p className="text-gray-600 mb-4">
                  Support thousands of users and concurrent calls across multiple
                  locations with seamless communication.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Multi-site connectivity</li>
                  <li>• High call capacity</li>
                  <li>• Centralized routing</li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="relative h-80 rounded-xl overflow-hidden shadow">
                <Image src="/software.png" alt="Global" fill className="object-cover" />
              </div>
            </SlideUp>
          </div>

          {/* BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideUp>
              <div className="relative h-80 rounded-xl overflow-hidden shadow">
                <Image src="/software.png" alt="Call Center" fill className="object-cover" />
              </div>
            </SlideUp>

            <SlideUp>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Advanced Call Center Operations
                </h2>
                <p className="text-gray-600 mb-4">
                  Deliver exceptional customer service with advanced call center tools.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Queue management & analytics</li>
                  <li>• Real-time monitoring</li>
                  <li>• Performance dashboards</li>
                </ul>
              </div>
            </SlideUp>
          </div>

        </div>
      </section>

      {/* ================= ADMIN ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">

          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">
              Centralized Administration & Control
            </h2>
          </FadeIn>

          <SlideUp>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Manage users, permissions, and system configurations from a single
              dashboard with automation and monitoring tools.
            </p>
          </SlideUp>

        </div>
      </section>

      {/* ================= AI + SECURITY ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              title: "AI Productivity",
              desc: "Call transcription, summaries, and insights.",
            },
            {
              title: "Enterprise Security",
              desc: "Encryption, firewall, and advanced protection.",
            },
            {
              title: "High Availability",
              desc: "99.99% uptime with failover systems.",
            },
          ].map((item, i) => (
            <SlideUp key={i}>
              <div className="p-6 border rounded-xl">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            </SlideUp>
          ))}

        </div>
      </section>

      {/* ================= DEPLOYMENT ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              Flexible Deployment Options
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {deployments.map((item, i) => (
              <SlideUp key={i}>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  {item}
                </div>
              </SlideUp>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center px-6 bg-black text-white">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-6">
            Power Your Enterprise Communication
          </h2>
        </FadeIn>

        <SlideUp>
          <button className="bg-primary px-8 py-4 rounded-lg">
            Get Started
          </button>
        </SlideUp>
      </section>

    </div>
  )
}