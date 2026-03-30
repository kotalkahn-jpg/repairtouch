"use client"

import Image from "next/image"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"

export default function SoftwarePage() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
          alt="Software PBX"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-4xl px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software PBX & Communication System
            </h1>
          </FadeIn>

          <SlideUp>
            <p className="text-lg md:text-xl mb-6">
              Fully functional, secure, and scalable unified communications
              deployed on your own infrastructure.
            </p>
          </SlideUp>

          <SlideUp>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-primary px-6 py-3 rounded-lg font-semibold">
                Get Trial License
              </button>
              <button className="border border-white px-6 py-3 rounded-lg">
                Download PBX
              </button>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Easy, Optimal, Scalable PBX Software
          </h2>
        </FadeIn>

        <SlideUp>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Meet all your communication needs in a single powerful system.
            Enjoy modern UI, flexible integrations, and full control with a
            self-hosted PBX solution.
          </p>
        </SlideUp>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Advanced Call Management",
              desc: "IVR, call routing, recording, voicemail and more."
            },
            {
              title: "Omnichannel Messaging",
              desc: "WhatsApp, SMS, live chat and social media in one place."
            },
            {
              title: "Video Conferencing",
              desc: "Secure browser-based meetings with screen sharing."
            },
            {
              title: "CRM Integrations",
              desc: "Connect with Microsoft Teams, CRM and helpdesk tools."
            },
            {
              title: "Call Center Tools",
              desc: "Queue management, analytics and supervisor dashboards."
            },
            {
              title: "Security & Encryption",
              desc: "TLS, SRTP, firewall and 2FA protection."
            }
          ].map((item, index) => (
            <SlideUp key={index}>
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </SlideUp>
          ))}

        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            All-in-One Communication Solutions
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">

          <SlideUp>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Phone System</h3>
              <p className="text-gray-600">
                Intelligent call routing, auto attendants, voicemail,
                and real-time monitoring for business communication.
              </p>
            </div>
          </SlideUp>

          <SlideUp>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Call Center</h3>
              <p className="text-gray-600">
                Manage inbound and outbound calls with queues,
                reporting tools, and performance dashboards.
              </p>
            </div>
          </SlideUp>

          <SlideUp>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Video Meetings</h3>
              <p className="text-gray-600">
                Host secure meetings with screen sharing,
                chat, and scheduling features.
              </p>
            </div>
          </SlideUp>

          <SlideUp>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Messaging Hub</h3>
              <p className="text-gray-600">
                Centralize WhatsApp, SMS, and live chat into one interface.
              </p>
            </div>
          </SlideUp>

        </div>
      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Deploy Anywhere, Stay in Control
            </h2>
          </FadeIn>

          <SlideUp>
            <p className="text-gray-600">
              Deploy on AWS, Azure, Google Cloud or your own servers.
              Maintain full ownership of your system, data, and security.
            </p>
          </SlideUp>

        </div>
      </section>

      {/* ================= WHITE LABEL ================= */}
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGE LEFT */}
<SlideUp>
  <div className="w-full flex justify-center">
    <Image
      src="/software.png"
      alt="White Label PBX"
      width={500}
      height={400}
      className="object-contain"
    />
  </div>
</SlideUp>
    

    {/* TEXT RIGHT */}
    <FadeIn>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          White Label in Minutes
        </h2>

        <p className="text-gray-600 mb-6">
          Be in control of everything from PBX branding, service packaging,
          installation, and support. This solution offers one of the easiest
          white-label setups in the market, featuring point-and-click branding
          that goes live in minutes.
        </p>

        <p className="text-gray-600 mb-8">
          Quickly grow your business with everything ready from a top-tier provider.
        </p>

        <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
          Learn More
        </button>
      </div>
    </FadeIn>

  </div>
</section>

     

    </div>
  )
}