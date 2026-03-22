"use client"

import { motion } from "framer-motion"

export default function DataWarning() {
  return (
    <section
      className="relative py-32 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/eraser.webp')" }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* MAIN WARNING TEXT */}
        <div className="max-w-3xl">

          <h2 className="text-4xl font-bold text-red-500 mb-6">
            Formatting Does NOT Delete Data
          </h2>

          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Deleting files or formatting a drive only removes access to data —
            it does not destroy it. In most cases, sensitive information can still
            be recovered using basic tools.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Without proper sanitization, your business risks data breaches,
            legal exposure, and compliance violations.
          </p>

        </div>


        {/* SIDE TEXT (adds that "around" feeling) */}
        <div className="hidden md:block absolute right-10 top-1/3 max-w-sm text-gray-300 text-sm leading-relaxed">
          Sensitive data remains recoverable unless it is securely overwritten.
          Proper data sanitization ensures complete and irreversible destruction.
        </div>


        {/* CTA AREA */}
        <div className="mt-16 max-w-md">

          <p className="text-gray-300 mb-4">
            Want to be protected from data breaches and compliance risks?
          </p>

          {/* THROBBING BUTTON */}
          <motion.button
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-red-700"
          >
            Press Me
          </motion.button>

        </div>

      </div>

    </section>
  )
}