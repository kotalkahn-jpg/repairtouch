"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function HostingCore() {

  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const services = [
    {
      title: "Grow Your Business",
      desc: "Package your own SIP trunking & other services, set your own prices, and have complete customer ownship. We support you in full..",
      image: "/pages/grow.jpg",
    },
    {
      title: "Reliable Cloud",
      desc: "Hosted in our cloud or yours. 99.99% reliability, 24/7 monitoring, and multi-layer security ensures your customers are always online.",
     image: "/pages/3d.jpg",
    },
    {
      title: "Easy White Label",
      desc: "Swiftly establish your brand in the market. Rebrand the solution with point-and-click white-label settings that go live immediately..",
      image: "/pages/white.jpg",
    },
  ]

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl font-bold mb-6">
            For Service Providers
          </h2>
          <p className="text-gray-600">
           Your Fast Track to Launching Hosted Voice Services with Ease, Whether you are new to the hosted UCaaS market or an established service provider looking to upgrade your offerings, Yeastar offers a ready-to-go solution with low-barrier entry.
          </p>
        </div>


        {/* SERVICES */}
        <div className="space-y-32">

          {services.map((service, index) => (

            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  
                />
              </motion.div>


              {/* TEXT */}
              <div className="flex flex-col justify-center">

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.desc}
                </p>

                <button
                  onClick={() => {
                    setSelectedService(service.title)
                    setOpen(true)
                  }}
                  className="w-fit bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
                >
                  Get Started
                </button>

              </div>

            </div>

          ))}

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

              {/* LEFT FORM */}
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
                    <option>{selectedService}</option>
                    <option>Website Hosting</option>
                    <option>Email Hosting</option>
                    <option>Domain & DNS Setup</option>
                    <option>VoIP Hosting</option>
                  </select>

                  <textarea placeholder="Describe your needs..." rows={3} className="w-full border p-3 rounded-md" />

                  <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
                    Submit Request
                  </button>

                </form>

              </div>


              {/* RIGHT PANEL */}
              <div className="bg-blue-50 flex flex-col justify-center items-center p-8 text-center">

                <div className="relative w-40 h-40 mb-6">
                  <Image src="/agent.png" alt="Agent" fill className="object-contain" />
                </div>

                <h4 className="text-xl font-semibold mb-3">
                  Need Immediate Assistance?
                </h4>

                <p className="text-gray-600 mb-6 text-sm">
                  Talk directly with our agents for instant support.
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