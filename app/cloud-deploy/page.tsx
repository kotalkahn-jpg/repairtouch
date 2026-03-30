"use client"

import Image from "next/image"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"

export default function CloudDeployPage() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO (PLATFORM STYLE) ================= */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-indigo-700 via-blue-600 to-indigo-800 text-white">

        <div className="max-w-6xl mx-auto text-center">

          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Launch Your Own UCaaS Platform
            </h1>
          </FadeIn>

          <SlideUp>
            <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-10">
              A fully managed, turnkey cloud solution to deliver voice,
              video, messaging, and collaboration services under your brand.
            </p>
          </SlideUp>

          {/* FLOATING STACK (NOT CARDS GRID) */}
          <div className="relative h-[300px] mt-12">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-white text-black p-4 rounded-xl shadow-lg w-64">
              PBX Instance
            </div>
            <div className="absolute left-[20%] top-20 bg-white text-black p-4 rounded-xl shadow-lg w-64">
              Customer Portal
            </div>
            <div className="absolute right-[20%] top-20 bg-white text-black p-4 rounded-xl shadow-lg w-64">
              Admin Console
            </div>
          </div>

        </div>
      </section>

      {/* ================= PLATFORM BLOCK ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Complete UCaaS Platform, Ready to Go
            </h2>
          </FadeIn>

          <SlideUp>
            <p className="text-gray-600 text-lg">
              Instantly deploy and manage multiple PBX instances while giving
              each customer full control of their own communication system.
            </p>
          </SlideUp>

        </div>
      </section>

      {/* ================= OPERATIONS PANEL ================= */}
      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6">
                  Simplified Operations at Scale
                </h2>
              </FadeIn>

              <SlideUp>
                <ul className="space-y-4 text-gray-600">
                  <li>• Automated provisioning for all customers</li>
                  <li>• Bulk upgrades, backups, and restore</li>
                  <li>• Real-time monitoring & alerts</li>
                  <li>• One-click remote troubleshooting</li>
                </ul>
              </SlideUp>
            </div>

            <SlideUp>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image src="/software.png" alt="Operations" fill className="object-cover"/>
              </div>
            </SlideUp>

          </div>

        </div>

      </section>

      {/* ================= ARCHITECTURE (DIFFERENT STYLE) ================= */}
      <section className="py-24 px-6 bg-black text-white">

        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Built on High-Availability Cloud Infrastructure
            </h2>
          </FadeIn>

          {/* FLOW STYLE (NEW) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center">

            {["Users", "Internet", "Cloud Core", "PBX Instances", "Devices"].map((step, i) => (
              <SlideUp key={i}>
                <div className="bg-white/10 px-6 py-4 rounded-lg">
                  {step}
                </div>
              </SlideUp>
            ))}

          </div>

          <SlideUp>
            <p className="text-gray-400 text-center mt-12 max-w-3xl mx-auto">
              Powered by distributed cloud architecture with load balancing,
              failover systems, and enterprise-grade security.
            </p>
          </SlideUp>

        </div>

      </section>

      {/* ================= DEPLOYMENT (NOT GRID HEAVY) ================= */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Flexible Deployment That Fits Your Strategy
            </h2>
          </FadeIn>

          <div className="space-y-6">

            {[
              "Cloud Turnkey (Fully Managed)",
              "Self-hosted Cloud Deployment",
              "On-Premise Integration",
              "Bring Your Own Infrastructure",
            ].map((item, i) => (
              <SlideUp key={i}>
                <div className="p-6 border rounded-xl flex justify-between items-center hover:shadow-md transition">
                  <span>{item}</span>
                  <span>→</span>
                </div>
              </SlideUp>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">

        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your UCaaS Business Today
          </h2>
        </FadeIn>

        <SlideUp>
          <p className="text-blue-100 mb-8">
            Launch, scale, and manage your communication platform effortlessly.
          </p>
        </SlideUp>

        <SlideUp>
          <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold">
            Get Started
          </button>
        </SlideUp>

      </section>

    </div>
  )
}