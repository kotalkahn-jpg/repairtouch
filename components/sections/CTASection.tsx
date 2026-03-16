"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import QuoteModal from "@/components/modals/QuoteModal"
import RepairModal from "@/components/modals/RepairModal"

export default function CTASection() {

  const [quoteOpen, setQuoteOpen] = useState(false)
  const [repairOpen, setRepairOpen] = useState(false)

  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}

        <div className="text-center mb-16 max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>

          <p className="text-gray-600">
            Whether you need a device repaired or a business IT solution,
            our team is ready to help.
          </p>

        </div>


        {/* CTA GRID */}

        <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-2xl border">

          {/* REPAIR SIDE */}

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white p-16 flex flex-col justify-center"
          >

            <h2 className="text-4xl font-bold mb-4">
              Need a Device Repair?
            </h2>

            <p className="mb-8 text-blue-100 max-w-md">
              Our technicians repair laptops, phones and computers quickly and professionally.
            </p>

            <button
              onClick={() => setRepairOpen(true)}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg w-fit transition"
            >
              Request a Repair
              <ArrowRight size={18} />
            </button>

          </motion.div>


          {/* CONSULTATION SIDE */}

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="relative bg-white p-16 flex flex-col justify-center border-l"
          >

            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Planning an IT Project?
            </h2>

            <p className="mb-8 text-gray-600 max-w-md">
              Request a quotation or consultation for networking,
              infrastructure and IT equipment.
            </p>

            <button
              onClick={() => setQuoteOpen(true)}
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg w-fit transition"
            >
              Request Consultation
              <ArrowRight size={18} />
            </button>

          </motion.div>

        </div>

      </div>

      {/* MODALS */}

      {quoteOpen && <QuoteModal close={() => setQuoteOpen(false)} />}
      {repairOpen && <RepairModal close={() => setRepairOpen(false)} />}

    </section>
  )
} 