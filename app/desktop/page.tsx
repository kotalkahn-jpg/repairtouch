"use client"
import { useEffect, useState } from "react"
import HeroSection from "@/components/sections/HeroSection"
import { Bell } from "lucide-react"
import { Headset, Blocks, Smartphone } from "lucide-react"
import CTASection from "@/components/sections/CTASection"

export default function HostingPage() {
  return (
    <>
      <HeroSection
        title="desktop"
        description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
        backgroundImage="/pages/desktop.webp"
      />

      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">

  {/* Blue Card */}
  <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 text-white px-10 md:px-20 py-12 text-center">
    <p className="text-lg md:text-xl leading-relaxed">
      Compatible with Yeastar{" "}
      <span className="text-cyan-300 underline cursor-pointer">
        P-Series Phone System
      </span>
      , Linkus Desktop Client is a versatile and user-friendly softphone
      application for both Windows and Mac users, providing a virtual desktop
      phone experience with ease-of-use, advanced communication features.
    </p>
  </div>

  {/* Info Line */}
  <div className="max-w-4xl mx-auto mt-6 flex items-center justify-center gap-3 text-gray-700 text-sm md:text-base">

    {/* Lucide Icon */}
    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white">
      <Bell size={14} strokeWidth={2} />
    </div>

    {/* Text */}
    <p className="text-center">
      If you are using{" "}
      <span className="text-blue-600 font-medium cursor-pointer">
        Yeastar S-Series VoIP PBX
      </span>
      , click here to download the{" "}
      <span className="text-blue-600 font-medium cursor-pointer">
        Linkus Lite
      </span>{" "}
      version.
    </p>

  </div>

</section>
      
 {/* NEW SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT (ANIMATED IMAGE) */}
          <AnimatedImages />

          {/* RIGHT (TEXT) */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
             Powering Anywhere Office
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
             Seamlessly access your office phone system using your computer from anywhere, whether you’re working from home, on the road, or anywhere outside the office.

Linkus Desktop Client enables you to easily and quickly:
            </p>

            <div className="space-y-4">

              {[
                "Click to make and receive audio/video callsMake and receive audio/video calls and switch between",
                "Transfer, hold, and mute calls as needed",
                "Set up call forwarding rules and ring strategies",
                "Keep track of call history and recordings",
                "Listen to, download, and delete voicemails",
                
              ]
              
              
              .map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg"
                >
                  <span className="w-5 h-5 bg-blue-600 text-white flex items-center justify-center rounded-full text-xs">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}

            </div>

          </div>
          <p className="text-gray-600 mb-8 leading-relaxed">
             Seamlessly access your office phone system using your computer from anywhere, whether you’re working from home, on the road, or anywhere outside the office.

Linkus Desktop Client enables you to easily and quickly:
            </p>

        </div>

      </section>

      <section className="w-full bg-slate-100 py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">

    {/* Card 1 */}
    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col gap-6">
      <Headset size={36} strokeWidth={1.5} className="text-gray-700" />

      <h3 className="text-2xl font-semibold text-gray-900">
        Headset Integration
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Use any WebHID-compliant headsets with Linkus Desktop Client to answer,
        reject, end, mute, and hold calls and adjust volume directly.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col gap-6">
      <Blocks size={36} strokeWidth={1.5} className="text-gray-700" />

      <h3 className="text-2xl font-semibold text-gray-900">
        CRM & Helpdesk Integration
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Supporting HubSpot, Salesforce, Zoho, Bitrix24, Odoo CRM, as well as
        Zendesk and Zoho Desk.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col gap-6">
      <Smartphone size={36} strokeWidth={1.5} className="text-gray-700" />

      <h3 className="text-2xl font-semibold text-gray-900">
        Door Phone Video Preview
      </h3>

      <p className="text-gray-600 leading-relaxed">
        See who’s visiting from the camera to determine if you want to talk to
        the visitor before answering the video calls.
      </p>
    </div>

  </div>

</section>

<CTASection/>
    </>
  )
}

function AnimatedImages() {
  const images = [
    "/pages/Office.webp",
    "/pages/video.webp",
    "/pages/voice.webp",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full flex justify-center">

      {/* background glow */}
      <div className="absolute w-72 h-72 bg-blue-100 rounded-full blur-3xl"></div>

      <img
        key={index}
        src={images[index]}
        className="relative w-full max-w-md object-contain transition-all duration-700"
      />

    </div>
  )

  
}