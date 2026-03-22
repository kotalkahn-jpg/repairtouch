"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function HostingInfrastructure() {

  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const openModal = (service: string) => {
    setSelectedService(service)
    setOpen(true)
  }

  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Infrastructure That Powers Your Business
          </h2>
          <p className="text-gray-600">
            We don’t just host websites — we build and manage the underlying
            systems that keep your business online. Our infrastructure is designed
            for <span className="text-blue-700 font-medium">performance</span>,{" "}
            <span className="text-blue-700 font-medium">security</span>, and{" "}
            <span className="text-blue-700 font-medium">scalability</span>.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* VPS */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-transparent hover:border-blue-600 hover:shadow-md transition">

            <h4 className="font-semibold text-lg mb-3">
              VPS (Proxmox Virtualization)
            </h4>

            <p className="text-gray-600 text-sm mb-4">
              Virtualized infrastructure built for{" "}
              <span className="text-blue-700 font-medium">scalable</span> and{" "}
              <span className="text-blue-700 font-medium">isolated</span> environments.
            </p>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Dedicated virtual environments
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Scalable CPU, RAM, and storage
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Efficient resource utilization
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Strong system isolation
              </li>
            </ul>

            <button
              onClick={() => openModal("VPS (Proxmox)")}
              className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800"
            >
              Get Started
            </button>

          </div>


          {/* LINUX */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-transparent hover:border-blue-600 hover:shadow-md transition">

            <h4 className="font-semibold text-lg mb-3">
              Linux Server Environments
            </h4>

            <p className="text-gray-600 text-sm mb-4">
              Secure and{" "}
              <span className="text-blue-700 font-medium">high-performance</span>{" "}
              systems optimized for hosting workloads.
            </p>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Lightweight and secure OS
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Optimized for uptime and speed
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Compatible with modern stacks
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Regular updates and maintenance
              </li>
            </ul>

            <button
              onClick={() => openModal("Linux Servers")}
              className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800"
            >
              Get Started
            </button>

          </div>


          {/* DNS */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-transparent hover:border-blue-600 hover:shadow-md transition">

            <h4 className="font-semibold text-lg mb-3">
              DNS & Network Management
            </h4>

            <p className="text-gray-600 text-sm mb-4">
              Reliable and{" "}
              <span className="text-blue-700 font-medium">high-availability</span>{" "}
              routing systems for global accessibility.
            </p>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Domain routing and record management
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Fast name resolution
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Redundant DNS systems
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-700 mt-1" />
                Seamless service integration
              </li>
            </ul>

            <button
              onClick={() => openModal("DNS Management")}
              className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800"
            >
              Get Started
            </button>

          </div>

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
              className="bg-white w-full max-w-4xl rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden"
            >

              {/* FORM */}
              <div className="p-8">

                <button
                  onClick={() => setOpen(false)}
                  className="float-right text-gray-500"
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold mb-6">
                  Request a Quote
                </h3>

                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-md" />
                  <input type="tel" placeholder="+265 Phone Number" className="w-full border p-3 rounded-md" />

                  <select className="w-full border p-3 rounded-md">
                    <option>{selectedService}</option>
                    <option>VPS</option>
                    <option>Linux Hosting</option>
                    <option>DNS</option>
                  </select>

                  <textarea rows={3} className="w-full border p-3 rounded-md" placeholder="Details..." />

                  <button className="w-full bg-blue-700 text-white py-3 rounded-md">
                    Submit Request
                  </button>
                </form>

              </div>

              {/* RIGHT */}
              <div className="bg-blue-50 flex flex-col items-center justify-center p-8 text-center">

                <div className="relative w-40 h-40 mb-6">
                  <Image src="/agent.png" alt="Agent" fill className="object-contain" />
                </div>

                <button className="bg-blue-700 text-white px-6 py-3 rounded-md">
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