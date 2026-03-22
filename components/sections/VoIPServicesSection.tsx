"use client"

import { useState } from "react"
import Image from "next/image"

import FadeIn from "@/components/animations/FadeIn"
import SlideInLeft from "@/components/animations/SlideInLeft"
import SlideInRight from "@/components/animations/SlideInRight"
import HoverLift from "@/components/animations/HoverLift"

import VoIPModal from "./VoIPModal"

const services = [
  {
    title: "Hosted PBX",
    desc: "Cloud-based PBX systems removing the need for on-site hardware while giving full control and scalability.",
  },
  {
    title: "SIP Management",
    desc: "Advanced SIP trunk configuration ensuring seamless communication across devices and networks.",
  },
  {
    title: "Call Routing",
    desc: "Intelligent routing systems that optimize call flow, reduce latency, and improve quality.",
  },
  {
    title: "Multi-Tenant Systems",
    desc: "Support multiple businesses on a single infrastructure with isolation and scalability.",
  },
]

export default function VoIPServicesSection() {

  const [selectedService, setSelectedService] = useState<any>(null)

  return (
    <section className="py-28 bg-gray-50">

      {/* INTRO */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-20 px-6">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Enterprise VoIP Infrastructure
          </h2>
          <p className="text-gray-600">
            We architect and host scalable communication systems designed for reliability,
            performance, and secure global connectivity.
          </p>
        </div>
      </FadeIn>


      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* CENTER DIVIDER */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-blue-200"></div>


        {/* LEFT VISUAL */}
        <SlideInLeft>
          <div className="relative w-full h-[480px] flex items-center justify-center">

            <div className="grid grid-cols-2 gap-4 w-full h-full">
              {[1,2,3,4].map((i) => (
                <div key={i} className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/net.jpg"
                    alt="VoIP"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* CROSS LINES */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-blue-600 opacity-60"></div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-600 opacity-60"></div>
            </div>

          </div>
        </SlideInLeft>


        {/* RIGHT CONTENT */}
        <SlideInRight>
          <div className="relative flex flex-col justify-center h-full">

            <div className="space-y-8 relative">

              {services.map((service, index) => (

                <div key={index} className="relative flex items-start gap-6">

                  {/* CONNECTOR LINE */}
                  <div className="hidden md:block absolute -left-10 top-4 w-10 h-[2px] bg-blue-400"></div>

                  {/* DOT */}
                  <div className="hidden md:block w-3 h-3 bg-blue-600 rounded-full mt-2"></div>

                  {/* CARD */}
                  <HoverLift>
                    <div
                      onClick={() => setSelectedService(service)}
                      className="bg-white p-5 rounded-lg shadow hover:shadow-md transition cursor-pointer w-full"
                    >
                      <h4 className="font-semibold mb-1">
                        {service.title}
                      </h4>

                      <p className="text-sm text-gray-600 line-clamp-2">
                        {service.desc}
                      </p>

                      {/* MOBILE BUTTON */}
                      <button className="mt-3 text-blue-700 text-sm font-semibold md:hidden">
                        Learn More →
                      </button>

                    </div>
                  </HoverLift>

                </div>

              ))}

            </div>

          </div>
        </SlideInRight>

      </div>


      {/* MODAL */}
      {selectedService && (
        <VoIPModal
          service={selectedService}
          close={() => setSelectedService(null)}
        />
      )}

    </section>
  )
}