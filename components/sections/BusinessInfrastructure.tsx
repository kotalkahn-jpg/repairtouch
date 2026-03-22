"use client";

import { useState } from "react";
import {
  Network,
  Cable,
  ShieldCheck,
  Cpu,
  Server
} from "lucide-react";

import SlideUp from "@/components/animations/SlideUp";
import ScaleIn from "@/components/animations/ScaleIn";

const categories = [
  {
    title: "Connectivity & Wireless",
    icon: Network,
    subServices: [
      { name: "WiFi Hotspots", desc: "Enterprise wireless coverage solutions." },
      { name: "PTP Links", desc: "Point-to-point high-speed connections." },
      { name: "PTMP Networks", desc: "Multi-location wireless distribution." },
    ],
  },
  {
    title: "Fiber & Structured Cabling",
    icon: Cable,
    subServices: [
      { name: "Fiber Installation", desc: "Professional fiber deployment." },
      { name: "Structured Cabling", desc: "CAT6 & enterprise wiring systems." },
      { name: "Network Switches", desc: "High-performance switching systems." },
    ],
  },
  {
    title: "Security & Surveillance",
    icon: ShieldCheck,
    subServices: [
      { name: "AI CCTV Systems", desc: "Smart surveillance & monitoring." },
      { name: "Biometric Access", desc: "Fingerprint & facial systems." },
      { name: "Electric Fencing", desc: "Perimeter security solutions." },
    ],
  },
  {
    title: "Automation & SCADA",
    icon: Cpu,
    subServices: [
      { name: "SCADA Systems", desc: "Industrial monitoring systems." },
      { name: "Gate Motors", desc: "Automated access systems." },
      { name: "Car Tracking", desc: "Fleet and vehicle tracking." },
    ],
  },
  {
    title: "Hosting & Server Infrastructure",
    icon: Server,
    subServices: [
      { name: "VPS Hosting", desc: "Proxmox-based virtual servers." },
      { name: "Email Hosting", desc: "Secure enterprise email systems." },
      { name: "Server Setup", desc: "On-premise server configuration." },
    ],
  },
];

export default function BusinessInfrastructure() {

  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedSubService, setSelectedSubService] = useState<string | null>(null);

  const isModalOpen = selectedCategory || selectedSubService;

  return (
    <section className="py-28 bg-gray-50 relative">

      {/* BLUR BACKGROUND */}
      <div className={isModalOpen ? "blur-sm pointer-events-none" : ""}>

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Infrastructure
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Advanced Infrastructure & Systems Engineering
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We design and deploy enterprise-grade infrastructure including networking,
              security, automation and hosting systems.
            </p>
          </div>

          {/* STACKED GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <SlideUp key={item.title} delay={0.1 * index}>
                  <div
                    onClick={() => setSelectedCategory(item)}
                    className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 cursor-pointer hover:shadow-xl hover:border-blue-500 transition"
                  >

                    <div className="flex items-start gap-6">

                      {/* BIG ICON */}
                      <div className="w-20 h-20 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                        <Icon className="w-10 h-10" />
                      </div>

                      {/* TEXT */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-gray-600">
                          Click to explore available solutions.
                        </p>
                      </div>

                    </div>

                  </div>
                </SlideUp>
              );
            })}

          </div>

        </div>
      </div>

      {/* STEP 1 MODAL */}
      {selectedCategory && !selectedSubService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[300]">

          <ScaleIn>
            <div className="bg-white rounded-xl p-10 w-[95%] max-w-3xl relative">

              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 text-gray-500"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold mb-8">
                {selectedCategory.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {selectedCategory.subServices.map((sub: any, index: number) => (
                  <div
                    key={index}
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
                  setSelectedCategory(null);
                }}
                className="absolute top-3 right-3 text-gray-500"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-6">
                Book: {selectedSubService}
              </h2>

              <form className="space-y-4">

                <input value={selectedSubService} readOnly className="w-full border p-3 rounded-lg bg-gray-100" />
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