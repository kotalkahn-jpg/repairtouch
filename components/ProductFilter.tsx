"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const products = [
  {
    name: "P520",
    description:
      "Entry-level IP PBX ideal for small businesses. Supports essential call features with reliable performance.",
    users: "Up to 20 users",
    image: "/sections/route.png",
    specs: {
      Storage: "32GB",
      Calls: "10 concurrent",
      Support: "VoIP",
      Deployment: "On-premise",
    },
  },
  {
    name: "P550",
    description:
      "Mid-range solution with advanced call handling, IVR, and integration capabilities.",
    users: "Up to 50 users",
    image: "/sections/ppp.png",
    specs: {
      Storage: "64GB",
      Calls: "25 concurrent",
      Support: "VoIP + SIP",
      Deployment: "Hybrid",
    },
  },
  {
    name: "P560",
    description:
      "Designed for growing teams with enhanced scalability and remote access features.",
    users: "Up to 100 users",
    image: "/services/pp.png",
    specs: {
      Storage: "128GB",
      Calls: "50 concurrent",
      Support: "VoIP + API",
      Deployment: "Cloud",
    },
  },
  {
    name: "P570",
    description:
      "Enterprise-grade IP PBX with high availability, redundancy, and advanced security.",
    users: "100+ users",
    image: "/services/p570.png",
    specs: {
      Storage: "256GB",
      Calls: "Unlimited",
      Support: "Full Suite",
      Deployment: "Enterprise",
    },
  },
]

export default function ProductFilter() {
  const [active, setActive] = useState(0)

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Explore our IP PBX lineup
        </h2>
        <p className="text-gray-600">
          Find the perfect fit for your business.
        </p>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {products.map((product, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              active === i
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {product.name}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative">

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white/70 backdrop-blur-xl border rounded-2xl p-8 shadow-lg"
          >

            {/* LEFT: IMAGE */}
            <div className="flex justify-center">
              <img
                src={products[active].image}
                alt={products[active].name}
                className="w-[300px] object-contain"
              />
            </div>

            {/* RIGHT: DETAILS */}
            <div>

              <h3 className="text-2xl font-semibold mb-3">
                {products[active].name}
              </h3>

              <p className="text-gray-600 mb-4">
                {products[active].description}
              </p>

              <div className="text-blue-600 font-medium mb-6">
                {products[active].users}
              </div>

              {/* SPECS */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                {Object.entries(products[active].specs).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-3 rounded-lg">
                    <span className="block font-medium text-gray-800">
                      {key}
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>

    </div>
  )
}