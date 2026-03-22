"use client";

import Link from "next/link";
import { PhoneCall, Network, Shield, Database, Battery } from "lucide-react";

import WordReveal from "@/components/animations/WordReveal";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export default function ServicesSection() {

  const services = [
    {
      title: "Call Center Systems",
      description: "VoIP, PBX, and agent infrastructure for modern businesses.",
      icon: PhoneCall,
      link: "/services?service=call-center",
    },
    {
      title: "Infrastructure",
      description: "Fiber, WiFi, structured cabling and enterprise networking.",
      icon: Network,
      link: "/services?service=infrastructure",
    },
    {
      title: "Security & SCADA",
      description: "CCTV, biometrics, automation and industrial control systems.",
      icon: Shield,
      link: "/services?service=security",
    },
    {
      title: "Data & Forensics",
      description: "Certified data sanitization, auditing and ICT forensics.",
      icon: Database,
      link: "/services?service=data",
    },
    {
      title: "Power & Solar",
      description: "UPS, batteries and solar systems for uninterrupted operations.",
      icon: Battery,
      link: "/services?service=solar",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Our Solutions
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Enterprise Technology Solutions for Modern Businesses
          </h2>

          <WordReveal
            text="From call center systems and enterprise networking to security, data lifecycle management and solar infrastructure — RepairTouch delivers integrated solutions that power your business."
            className="mt-6 text-gray-600 leading-relaxed"
          />

          {/* SERVICES GRID */}
          <SlideUp delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-6">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={index}
                    href={service.link}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition group"
                  >
                    <Icon className="text-blue-700 mb-3 group-hover:scale-110 transition" size={32} />
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </Link>
                );
              })}

            </div>
          </SlideUp>

        </div>


        {/* RIGHT SIDE (KEEP YOUR IMAGES) */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 gap-6 auto-rows-[200px]">

            <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-lg" style={{ backgroundImage: "url(/services/networking.jpg)", backgroundSize: "cover" }}></div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ backgroundImage: "url(/services/security.jpg)", backgroundSize: "cover" }}></div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ backgroundImage: "url(/services/data-recovery.jpg)", backgroundSize: "cover" }}></div>

            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg" style={{ backgroundImage: "url(/services/computer-repair.jpg)", backgroundSize: "cover" }}></div>

          </div>
        </FadeIn>

      </div>

    </section>
  );
}