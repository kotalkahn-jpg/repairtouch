"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/sections/HeroSection"
import CTASection from "@/components/sections/CTASection"

export default function HostingPage() {
  return (
    <>
      <HeroSection
        title="web client"
        description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
        backgroundImage="/pages/web.webp"
      />

      {/* NEW SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT (ANIMATED IMAGE) */}
          <AnimatedImages />

          {/* RIGHT (TEXT) */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Stay Connected Right from Your Web Browser
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Skip downloading any applications. Access all key phone system features directly from your web browser. 
              Easily manage calls anytime from anywhere.
            </p>

            <div className="space-y-4">

              {[
                "Click to make and receive audio/video calls",
                "Transfer, hold, and mute calls as needed",
                "Set call forwarding rules and strategies",
                "Listen to, transcript, download, and delete voicemails",
                "Keep track of call history and recordings",
                
              ].map((item, i) => (
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

        </div>

      </section>

       <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        The Right Set of UC Capabilities
      </h2>

      <p className="text-gray-600 mb-8">
       Empower your hybrid working employees, sales teams, support agents, and call centers with a powerful and easy-to-access set of unified communication tools that elevate their communication and collaboration efficiency.
      </p>

      {/* DROPDOWNS */}
      <div className="space-y-4">

        {/* ITEM 1 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
            Video Conferencing
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">
           Hold secure face-to-face meetings with anyone right from your web browser. Linkus Web Client supports integrated video conferencing, in-meeting team chat, and screen sharing to make remote team meetings easy and engaging.
          </p>
        </details>

        {/* ITEM 2 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
           Call Center Console
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">
          Visualize, manage, and monitor your call activities in queues with ease in real-time. The call center console empower you with dynamic Queue Panel, Wallboard, and all agent productivity tools in one place. Learn
          </p>
        </details>

        {/* ITEM 3 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
          Omnichannel Messaging
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">
             Support your customers through WhatsApp & SMS messaging and collaborate with colleagues via internal team chats & file sharing. Send, receive, and manage all chats and messages in one place.
          </p>
        </details>

        {/* ITEM 4 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
         Presence
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">View the real-time availability of your colleagues before reaching out. Determine the most appropriate time and method for connecting with them on the first try.

          </p>
        </details>

        {/* ITEM 5 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
          Function Keys
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">
          Assign function keys for quick access to frequently used features, like speed dial and voicemail check, with just a button press.
          </p>
        </details>

        {/* ITEM 6 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
         Call Flip & Switch
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">
           Easily transfer an ongoing call among your Linkus Web, Desktop, and Mobile Client, and desk phones with just one touch, ensuring a seamless calling experience without interruptions or loss of vital information..
          </p>
        </details>

      </div>

    </div>

    {/* RIGHT SIDE (IMAGE) */}
    <div className="flex justify-center">
      <img
        src="/pages/uc.webp"
        alt="Flexible Modular Design"
        className="w-full max-w-md object-contain"
      />
    </div>

  </div>

<CTASection/>
</section>
    </>
  )
}


function AnimatedImages() {
  const images = [
    "/pages/communi.webp",
    "/pages/commm.webp",
    "/pages/comm.webp",
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
 {/* NEW SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT (ANIMATED IMAGE) */}
          <AnimatedImages />

          {/* RIGHT (TEXT) */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Stay Connected Right from Your Web Browser
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Skip downloading any applications. Access all key phone system features directly from your web browser. 
              Easily manage calls anytime from anywhere.
            </p>

            <div className="space-y-4">

              {[
                "Click to make and receive audio/video calls",
                "Transfer, hold, and mute calls as needed",
                "Set call forwarding rules and strategies",
                "Listen to, transcript, download, and delete voicemails",
                "Keep track of call history and recordings",
                
              ].map((item, i) => (
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

        </div>


<CTASection/>
      </section>
      
      






