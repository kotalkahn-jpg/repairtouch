"use client";

import Image from "next/image";
import { useState } from "react";
import { PhoneCall, Network, Shield, Database, Battery } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import ScaleIn from "@/components/animations/ScaleIn";
import HoverLift from "@/components/animations/HoverLift";

const services = [
  {
    key: "call-center",
    name: "Call Center Systems",
    icon: PhoneCall,
    image: "/services/networking.jpg",
    description: "Complete call center solutions including PBX, VoIP and agent systems.",
    subServices: [
      { name: "PBX Setup", desc: "Yeastar & Grandstream systems." },
      { name: "VoIP Phones", desc: "Cisco, Yealink devices." },
      { name: "Agent Setup", desc: "Remote and office agent systems." },
    ],
  },
  {
    key: "infrastructure",
    name: "Infrastructure",
    icon: Network,
    image: "/services/networking.jpg",
    description: "Enterprise networking, fiber, WiFi and structured cabling.",
    subServices: [
      { name: "WiFi & Wireless", desc: "PTP, PTMP and hotspot solutions." },
      { name: "Fiber & Cabling", desc: "Structured cabling and fiber install." },
      { name: "Server Cabinets", desc: "Rack and network housing systems." },
    ],
  },
  {
    key: "security",
    name: "Security & SCADA",
    icon: Shield,
    image: "/services/security.jpg",
    description: "Advanced surveillance, biometrics and industrial automation systems.",
    subServices: [
      { name: "CCTV Systems", desc: "AI surveillance and monitoring." },
      { name: "Biometrics", desc: "Access control & attendance systems." },
      { name: "Electric Fencing", desc: "Perimeter protection systems." },
    ],
  },
  {
    key: "data",
    name: "Data & Forensics",
    icon: Database,
    image: "/services/data-recovery.jpg",
    description: "Certified data destruction, auditing and forensic analysis.",
    subServices: [
      { name: "Data Sanitization", desc: "KillDisk certified wiping." },
      { name: "PC Auditing", desc: "Belarc system audits." },
      { name: "ICT Forensics", desc: "Legal digital investigations." },
    ],
  },
  {
    key: "solar",
    name: "Power & Solar",
    icon: Battery,
    image: "/services/computer-repair.jpg",
    description: "Reliable solar and backup power systems for business continuity.",
    subServices: [
      { name: "Solar Systems", desc: "Panels, inverters, batteries." },
      { name: "UPS Systems", desc: "Backup power solutions." },
      { name: "Power Audit", desc: "Energy usage analysis." },
    ],
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedSubService, setSelectedSubService] = useState<string | null>(null);

  const isModalOpen = selectedService || selectedSubService;

  return (
    <section className="py-28 bg-gray-50 relative">

      {/* BLUR BACKGROUND */}
      <div className={isModalOpen ? "blur-sm pointer-events-none" : ""}>

        <div className="max-w-7xl mx-auto px-6">

          <FadeIn>
            <div className="max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Solutions
              </p>

              <h2 className="mt-3 text-4xl font-bold text-gray-900">
                Core Technology Solutions
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                Explore our enterprise solutions designed to power modern businesses.
              </p>
            </div>
          </FadeIn>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <SlideUp key={index} delay={index * 0.1}>
                  <HoverLift>
                    <div
                      className="relative h-72 cursor-pointer group"
                      onClick={() => setSelectedService(service)}
                    >

                      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">

                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition" />

                        {/* CONTENT */}
                        <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">

                          <Icon className="mb-3 text-blue-400" size={28} />

                          <h3 className="text-xl font-semibold mb-2">
                            {service.name}
                          </h3>

                          {/* HOVER DESCRIPTION */}
                          <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300">
                            {service.description}
                          </p>

                        </div>

                      </div>

                    </div>
                  </HoverLift>
                </SlideUp>
              );
            })}

          </div>
        </div>
      </div>

      {/* STEP 1 MODAL (BIGGER + HIGHLIGHT) */}
      {selectedService && !selectedSubService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[300]">

          <ScaleIn>
            <div className="bg-white rounded-xl p-10 w-[95%] max-w-3xl relative">

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold mb-8">
                {selectedService.name}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {selectedService.subServices.map((sub: any, index: number) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <div
                      onClick={() => setSelectedSubService(sub.name)}
                      className="p-6 border rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-500 transition shadow-sm hover:shadow-md"
                    >
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {sub.name}
                      </h3>

                      <p className="text-sm text-gray-600">
                        {sub.desc}
                      </p>
                    </div>
                  </SlideUp>
                ))}

              </div>

            </div>
          </ScaleIn>

        </div>
      )}

      {/* STEP 2 MODAL */}
      {selectedSubService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[300]">

          <ScaleIn>
            <div className="bg-white rounded-xl p-8 w-[95%] max-w-lg relative">

              <button
                onClick={() => {
                  setSelectedSubService(null);
                  setSelectedService(null);
                }}
                className="absolute top-3 right-3 text-gray-500"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-6">
                Book: {selectedSubService}
              </h2>

              <form className="space-y-4">

                <input
                  value={selectedSubService}
                  readOnly
                  className="w-full border p-3 rounded-lg bg-gray-100"
                />

                <textarea placeholder="Describe your request" className="w-full border p-3 rounded-lg" />

                <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-lg" />

                <input type="text" placeholder="Phone Number" className="w-full border p-3 rounded-lg" />

                <input type="date" className="w-full border p-3 rounded-lg" />

                <button className="w-full bg-blue-700 text-white py-3 rounded-lg">
                  Submit Request
                </button>

              </form>

            </div>
          </ScaleIn>

        </div>
      )}

    </section>
  );
}