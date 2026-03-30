"use client"

import Image from "next/image"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"

export default function SmallPage() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <FadeIn>
              <p className="text-sm font-semibold text-primary mb-3">
                Yeastar for Small Business
              </p>
            </FadeIn>

            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Easy-First Small Business Phone System
              </h1>
            </FadeIn>

            <SlideUp>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• Call, chat, conferencing, SMS all in one phone system</li>
                <li>• iOS/Android, Windows/macOS and Web apps for hybrid work</li>
                <li>• CRM, Social Media & Microsoft 365 integrations</li>
                <li>• Scalable pricing with no heavy upfront cost</li>
              </ul>
            </SlideUp>

            <SlideUp>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
                  Free Trial
                </button>
                <button className="border px-6 py-3 rounded-lg">
                  Contact Us
                </button>
              </div>
            </SlideUp>
          </div>

          {/* RIGHT (STACKED UI CARDS) */}
          <div className="relative h-[400px]">

            <SlideUp>
              <div className="absolute top-0 left-10 bg-white shadow-lg rounded-xl p-4 w-56">
                <Image src="/software.png" alt="Slide 1" width={300} height={200} />
              </div>
            </SlideUp>

            <SlideUp>
              <div className="absolute top-20 right-0 bg-white shadow-lg rounded-xl p-4 w-56">
                <Image src="/software.png" alt="Slide 2" width={300} height={200} />
              </div>
            </SlideUp>

            <SlideUp>
              <div className="absolute bottom-0 left-0 bg-white shadow-lg rounded-xl p-4 w-56">
                <Image src="/software.png" alt="Slide 3" width={300} height={200} />
              </div>
            </SlideUp>

          </div>

        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section className="py-10 border-y bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-gray-600 text-sm">

          <span>Call</span>
          <span>Chat</span>
          <span>Conferencing</span>
          <span>SMS</span>
          <span>Integrations</span>

        </div>
      </section>

      {/* ================= CORE SHOWCASE ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              From Calls to Customer Connections
            </h2>
          </FadeIn>

          {/* FEATURE BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            <SlideUp>
              <div>
                <h3 className="text-2xl font-bold mb-4">Chat & Connection</h3>
                <p className="text-gray-600">
                  Seamless 1:1 and group chat for teamwork, plus the ability to reach your customers via WhatsApp, Facebook, and other social channels.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="relative h-80 rounded-xl overflow-hidden shadow">
                <Image src="/software.png" alt="Chat" fill className="object-cover" />
              </div>
            </SlideUp>

          </div>

          {/* FEATURE BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            <SlideUp>
              <div className="relative h-80 rounded-xl overflow-hidden shadow">
                <Image src="/software.png" alt="Calls" fill className="object-cover" />
              </div>
            </SlideUp>

            <SlideUp>
              <div>
                <h3 className="text-2xl font-bold mb-4">Handle Calls</h3>
                <p className="text-gray-600">
                  Advanced call handling with routing, IVR, queues, monitoring tools, and automation for business efficiency.
                </p>
              </div>
            </SlideUp>

          </div>

          {/* FEATURE BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            <SlideUp>
              <div>
                <h3 className="text-2xl font-bold mb-4">Meet Anywhere</h3>
                <p className="text-gray-600">
                  Start or schedule meetings with screen sharing, chat, and collaboration tools across all devices.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="relative h-80 rounded-xl overflow-hidden shadow">
                <Image src="/software.png" alt="Meet" fill className="object-cover" />
              </div>
            </SlideUp>

          </div>

          {/* FEATURE BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <SlideUp>
              <div className="relative h-80 rounded-xl overflow-hidden shadow">
                <Image src="/software.png" alt="SMS" fill className="object-cover" />
              </div>
            </SlideUp>

            <SlideUp>
              <div>
                <h3 className="text-2xl font-bold mb-4">SMS & Send Fax</h3>
                <p className="text-gray-600">
                  Send SMS and fax messages directly from your system, improving customer communication efficiency.
                </p>
              </div>
            </SlideUp>

          </div>

        </div>
      </section>

      {/* ================= AI SECTION ================= */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              AI Empowers Your Modern Communication
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">

            <SlideUp>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">
                  Voicemail & Call Transcription
                </h3>
                <p className="text-gray-300">
                  Convert voicemails and calls into text instantly and never miss important information.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">
                  Natural Speech Translator
                </h3>
                <p className="text-gray-300">
                  Turn text into expressive, lifelike voice messages for interactive communication.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">
                  Call Summaries & Insights
                </h3>
                <p className="text-gray-300">
                  Receive summaries and action items after each call automatically.
                </p>
              </div>
            </SlideUp>

          </div>

        </div>
      </section>

      {/* ================= BUSINESS SECTION ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Power Easy Growth for Businesses
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              {
                title: "Bring Your Own Carriers",
                desc: "Manage your SIP trunks and maximize profitability.",
              },
              {
                title: "White-Label Branding",
                desc: "Customize branding for a consistent professional image.",
              },
              {
                title: "Central Management",
                desc: "Monitor and manage all PBXs from one dashboard.",
              },
              {
                title: "Instant Deployment & Scalability",
                desc: "Deploy quickly and scale effortlessly.",
              },
            ].map((item, i) => (
              <SlideUp key={i}>
                <div className="p-6 border rounded-xl">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.desc}</p>
                </div>
              </SlideUp>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gray-100 px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-6">
            Start Your Communication Transformation Today
          </h2>
        </FadeIn>

        <SlideUp>
          <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg">
            Get Started
          </button>
        </SlideUp>
      </section>

    </div>
  )
}