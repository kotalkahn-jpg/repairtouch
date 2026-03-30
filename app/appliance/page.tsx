"use client"

import Image from "next/image"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"

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

      {/* ================= ZIG-ZAG FEATURES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {features.map((item, index) => (
            <SlideUp key={item.title}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* IMAGE */}
                <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Appliance Capability
                  </p>

                  <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

              </div>
            </SlideUp>
          ))}

        </div>
      </section>

      {/* ================= HARDWARE SECTION ================= */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <SlideUp>
            <div className="flex justify-center">
              <Image
                src="/appliance.png"
                alt="PBX Hardware"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </SlideUp>

          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade Hardware Reliability
              </h2>

              <p className="text-gray-600 mb-6 text-lg">
                Designed for maximum uptime and performance, ensuring your
                business communication remains uninterrupted.
              </p>

              <p className="text-gray-600 text-lg">
                Optimized hardware architecture supports high call volumes
                while maintaining stability and efficiency.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= FEATURE LIST ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Everything You Need in One System
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 text-gray-600">

            {[
              "Call Routing & Forwarding",
              "Multi-level IVR",
              "Voicemail & Email Integration",
              "Call Recording",
              "Queue Management",
              "Outbound Campaign Tools",
              "Video Conferencing",
              "Team Messaging",
              "CRM Integration",
              "API & SDK",
              "Auto Provisioning",
              "Remote Management",
            ].map((item, i) => (
              <SlideUp key={i}>
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Communication Infrastructure?
          </h2>
        </FadeIn>

        <SlideUp>
          <p className="text-gray-300 mb-8">
            Deploy a powerful and scalable PBX appliance tailored for your business.
          </p>
        </SlideUp>

        <SlideUp>
          <button className="bg-primary px-8 py-4 rounded-lg text-lg font-semibold">
            Get Started
          </button>
        </SlideUp>
      </section>

    </div>
  )
}