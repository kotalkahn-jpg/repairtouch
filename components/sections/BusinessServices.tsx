"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Clock,
  DollarSign,
  Settings
} from "lucide-react"

export default function BusinessServices() {

  const services = [
    {
      title: "Network Infrastructure",
      description:
        "Design and deployment of secure and scalable office networks.",
      icon: Network
    },
    {
      title: "Server Installation",
      description:
        "Setup and configuration of business servers and storage systems.",
      icon: Server
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud storage, remote access and backup solutions.",
      icon: Cloud
    },
    {
      title: "Security Systems",
      description:
        "CCTV, surveillance and access control solutions.",
      icon: ShieldCheck
    }
  ]

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}




      {/* OVERVIEW */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Service Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Reliable Business Technology Infrastructure
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Our team helps organizations design, deploy and maintain
              reliable IT environments that support modern business
              operations. From networking and servers to cloud systems
              and digital security, we provide scalable solutions
              tailored to your organization.
            </p>

          </motion.div>



          {/* RIGHT FEATURES */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border rounded-xl p-8 shadow-sm"
          >

            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              What We Provide
            </h3>

            <ul className="space-y-6">

              {[
                {
                  icon: ShieldCheck,
                  text: "Secure and professionally managed IT infrastructure",
                },
                {
                  icon: Clock,
                  text: "Reliable system uptime and ongoing support",
                },
                {
                  icon: DollarSign,
                  text: "Cost-effective technology solutions for businesses",
                },
                {
                  icon: Settings,
                  text: "Custom infrastructure designed for your organization",
                },
              ].map((item, index) => {

                const Icon = item.icon

                return (

                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="flex items-start gap-4"
                  >

                    <div className="mt-1 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>

                    <p className="text-gray-700">
                      {item.text}
                    </p>

                  </motion.li>

                )
              })}

            </ul>

          </motion.div>

        </div>

      </section>



      {/* SERVICES GRID */}


    </main>
  )
}