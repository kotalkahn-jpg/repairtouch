"use client"

import { Button } from "@/components/ui/button"
import SlideInLeft from "@/components/animations/SlideInLeft"
import SlideInRight from "@/components/animations/SlideInRight"

export default function HeroCarousel() {

  return (
    <section className="relative w-full h-[95vh] text-white">

      {/* BACKGROUND IMAGE */}
      <div
        className="relative w-full h-[95vh] flex items-center"
        style={{
          backgroundImage: `url(/repair.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* HERO CONTENT */}
        <div className="relative mx-auto max-w-7xl px-6 pt-32">

          <SlideInLeft>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
              Integrated Infrastructure, Security & Data Lifecycle Management
            </h1>
          </SlideInLeft>

          <SlideInLeft delay={0.2}>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
              From high-performance call centers and enterprise networking to certified data sanitization and solar power systems — RepairTouch engineers the technology that powers modern African businesses.
            </p>
          </SlideInLeft>

          <SlideInRight delay={0.4}>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3">
                Book a Technician
              </Button>

              <Button variant="outline" className="bg-blue-700  -500 hover:bg-yellow-600 text-black font-semibold px-6 py-3">
                Visit Online Shop
              </Button>
            </div>
          </SlideInRight>

        </div>

      </div>


      {/* OVERLAPPING SERVICE CARDS */}

      <div className="absolute -bottom-24 right-10 w-[600px]">

        <div className="grid grid-cols-4 gap-4">

          <SlideInLeft delay={0.1}>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-700 mb-1">01</div>
              <h3 className="font-semibold text-sm">Call Centers</h3>
              <p className="text-xs text-gray-600">
                VoIP, PBX & agent systems.
              </p>
            </div>
          </SlideInLeft>

          <SlideInRight delay={0.2}>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-700 mb-1">02</div>
              <h3 className="font-semibold text-sm">Infrastructure</h3>
              <p className="text-xs text-gray-600">
                Fiber, WiFi & networking.
              </p>
            </div>
          </SlideInRight>

          <SlideInLeft delay={0.3}>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-700 mb-1">03</div>
              <h3 className="font-semibold text-sm">Security & SCADA</h3>
              <p className="text-xs text-gray-600">
                CCTV, automation & control.
              </p>
            </div>
          </SlideInLeft>

          <SlideInRight delay={0.4}>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-700 mb-1">04</div>
              <h3 className="font-semibold text-sm">Power & Solar</h3>
              <p className="text-xs text-gray-600">
                UPS, batteries & solar systems.
              </p>
            </div>
          </SlideInRight>

        </div>

      </div>

    </section>
  )
}