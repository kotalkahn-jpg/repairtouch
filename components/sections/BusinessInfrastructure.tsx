"use client";

import {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Settings
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const categories = [
  {
    title: "Network Design & Installation",
    description:
      "Structured design and deployment of reliable business networks that ensure secure communication, stable connectivity, and scalable infrastructure.",
    icon: Network,
  },
  {
    title: "Server Setup & Management",
    description:
      "Professional configuration and management of business servers and storage systems that support critical operations and data availability.",
    icon: Server,
  },
  {
    title: "Secure Cloud Backup Systems",
    description:
      "Cloud-based backup and disaster recovery solutions designed to protect business data and ensure continuity during system disruptions.",
    icon: Cloud,
  },
  {
    title: "IT Security & Monitoring",
    description:
      "Advanced monitoring systems and security strategies that protect infrastructure, networks, and sensitive organizational data.",
    icon: ShieldCheck,
  },
  {
    title: "Business IT Consulting",
    description:
      "Strategic technology consulting that helps organizations design efficient IT systems aligned with operational goals and growth plans.",
    icon: Settings,
  },
];

export default function BusinessInfrastructure() {
  return (
    <section className="py-28 bg-black-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Infrastructure
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Reliable IT Infrastructure for Modern Businesses
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We design and implement technology infrastructure that enables
            businesses to operate securely, efficiently and at scale. Our
            infrastructure services ensure stability, security and long-term
            reliability for modern organizations.
          </p>

        </div>


        {/* ZIG-ZAG CARDS */}

        <div className="space-y-10">

          {categories.map((item, index) => {
            const Icon = item.icon;
            const isRight = index % 2 !== 0;

            return (
              <SlideUp key={item.title} delay={0.12 * index}>
                <div
                  className={`flex ${
                    isRight ? "justify-end" : "justify-start"
                  }`}
                >

                  <div
                    className={`
                      w-full md:w-[70%]
                      rounded-2xl
                      border border-white/40
                      bg-white/60
                      backdrop-blur-x2
                      shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                      px-8 py-10
                      ${isRight ? "md:ml-24" : "md:mr-24"}
                    `}
                  >

                    <div className="flex items-start gap-6">

                      {/* ICON */}

                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
                        <Icon className="w-8 h-8" />
                      </div>


                      {/* TEXT */}

                      <div>

                        <h3 className="text-2xl font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-gray-700 leading-relaxed text-lg">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              </SlideUp>
            );
          })}

        </div>

      </div>

    </section>
  );
}