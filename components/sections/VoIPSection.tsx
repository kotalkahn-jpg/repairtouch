"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

import { Server, Phone, Shield, Cloud, Network, Users } from "lucide-react"

export default function VoIPSection() {

  const [open, setOpen] = useState(false)

  const services = [
    "Hosted PBX",
    "SIP Management",
    "Call Routing",
    "Multi-Tenant Systems",
    "VoIP Hosting",
    "Web Hosting",
    "Data Sanitization",
  ]

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Cloud-Powered VoIP Infrastructure
          </h2>

          <p className="text-gray-600 text-lg">
            Our VoIP hosting solutions provide businesses with a fully managed,
            cloud-based communication system. From call routing to SIP management,
            we ensure your voice infrastructure is reliable, scalable, and secure.
          </p>
        </div>


        {/* FEATURES */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Advanced Features
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="flex gap-4">
              <Users className="text-blue-700" />
              <div>
                <h4 className="font-semibold">Multi-Tenant Systems</h4>
                <p className="text-gray-600 text-sm">
                  Support multiple organizations on a single infrastructure with
                  full isolation and scalability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Cloud className="text-blue-700" />
              <div>
                <h4 className="font-semibold">Remote Access</h4>
                <p className="text-gray-600 text-sm">
                  Access your communication system from anywhere, enabling remote
                  teams and distributed operations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Server className="text-blue-700" />
              <div>
                <h4 className="font-semibold">High Uptime</h4>
                <p className="text-gray-600 text-sm">
                  Built for reliability with redundant systems ensuring minimal downtime.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Shield className="text-blue-700" />
              <div>
                <h4 className="font-semibold">Secure Connections</h4>
                <p className="text-gray-600 text-sm">
                  Encryption and secure protocols to protect voice data and prevent
                  unauthorized access.
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* INFRASTRUCTURE */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Infrastructure & Technology
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">VPS (Proxmox)</h4>
              <p className="text-gray-600 text-sm">
                Virtualized environments using Proxmox for efficient resource
                allocation and system isolation.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Cloud Servers</h4>
              <p className="text-gray-600 text-sm">
                Scalable cloud infrastructure to handle growing communication demands.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Network Reliability</h4>
              <p className="text-gray-600 text-sm">
                Optimized networking and redundancy to ensure consistent voice quality.
              </p>
            </div>

          </div>
        </div>


        {/* CTA */}
        <div className="text-center bg-blue-700 text-white rounded-2xl p-10">

          <h3 className="text-2xl font-semibold mb-4">
            Ready to Modernize Your Communication?
          </h3>

          <p className="mb-6 text-blue-100">
            Let us handle your VoIP infrastructure while you focus on your business.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </button>

        </div>

      </div>


      {/* MODAL */}
      <AnimatePresence>
        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6"
            onClick={() => setOpen(false)}
          >

            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
            >

              {/* LEFT SIDE */}
              <div className="p-8">

                <button
                  onClick={() => setOpen(false)}
                  className="float-right text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold mb-6">
                  Request a Quote
                </h3>

                <form className="space-y-4">

                  <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-md" required />
                  <input type="tel" placeholder="+265 Phone Number" className="w-full border p-3 rounded-md" required />

                  <select className="w-full border p-3 rounded-md">
                    <option>Select Service</option>
                    {services.map((s, i) => (
                      <option key={i}>{s}</option>
                    ))}
                  </select>

                  <textarea placeholder="Describe your needs..." rows={3} className="w-full border p-3 rounded-md" />

                  <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
                    Submit Request
                  </button>

                </form>

              </div>


              {/* RIGHT SIDE */}
              <div className="relative bg-blue-50 flex flex-col justify-center items-center p-8 text-center">

                <div className="relative w-40 h-40 mb-6">
                  <Image src="/agent.png" alt="Agent" fill className="object-contain" />
                </div>

                <h4 className="text-xl font-semibold mb-3">
                  Need Immediate Assistance?
                </h4>

                <p className="text-gray-600 mb-6 text-sm">
                  Talk directly with our agents for instant support and consultation.
                </p>

                <button
                  onClick={() => {
                    window.location.href = "tel:+27835656464"
                    setTimeout(() => {
                      window.location.href = "tel:+265886337978"
                    }, 500)
                  }}
                  className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
                >
                  Talk to Our Agents
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </section>
  )
}