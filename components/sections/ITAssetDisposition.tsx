"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function ITAssetDisposition() {

  const [open, setOpen] = useState(false) // ✅ ADDED

  return (
    <>
      <section className="py-28 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Secure IT Asset Disposition & Refurbishment
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              At Repairtouch, we provide a complete lifecycle solution for retired IT assets.
              From secure decommissioning to professional refurbishment, every device is handled
              with precision and strict data security standards.
            </p>
          </div>


          {/* PROCESS */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border mb-16">

            <h3 className="text-xl font-semibold text-blue-700 mb-6">
              Our Process: From Decommissioning to Certified Readiness
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">

              <div>
                <p className="font-medium text-gray-800 mb-1">
                  1. Secure Decommissioning
                </p>
                <p>
                  Organized removal of IT equipment including servers, networking gear,
                  and workstations with full accountability.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">
                  2. Certified Data Sanitization
                </p>
                <p>
                  Industry-grade data wiping ensures all storage media is permanently erased.
                  Each asset receives an official Data Sanitization Certificate.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">
                  3. Diagnostic Testing
                </p>
                <p>
                  All components including RAM, CPU, battery, and ports are tested to ensure
                  optimal performance.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">
                  4. Hardware Upgrades & Restoration
                </p>
                <p>
                  Devices are upgraded with SSDs or additional memory and restored to near-new
                  cosmetic condition.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">
                  5. Ready for Re-use
                </p>
                <p>
                  Fully certified devices are prepared for resale or donation programs,
                  extending their lifecycle.
                </p>
              </div>

            </div>

          </div>


          {/* COMPARISON */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border mb-16">

            <h3 className="text-xl font-semibold text-blue-700 mb-6">
              Refurbished vs. Second-Hand
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead>
                  <tr className="text-gray-800 border-b">
                    <th className="py-3">Feature</th>
                    <th className="py-3">Second-Hand</th>
                    <th className="py-3">Professional Refurbished</th>
                  </tr>
                </thead>

                <tbody className="divide-y">

                  <tr>
                    <td className="py-3 font-medium text-gray-800">Testing</td>
                    <td className="py-3">Rarely tested; sold as-is</td>
                    <td className="py-3">Extensive multi-point diagnostics</td>
                  </tr>

                  <tr>
                    <td className="py-3 font-medium text-gray-800">Data Security</td>
                    <td className="py-3">Data may still exist</td>
                    <td className="py-3">Certified sanitization with documentation</td>
                  </tr>

                  <tr>
                    <td className="py-3 font-medium text-gray-800">Condition</td>
                    <td className="py-3">Possible faults or dirt</td>
                    <td className="py-3">Cleaned, repaired, upgraded</td>
                  </tr>

                  <tr>
                    <td className="py-3 font-medium text-gray-800">Reliability</td>
                    <td className="py-3">High risk of failure</td>
                    <td className="py-3">Stable, expert-tested performance</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>


          {/* BENEFITS */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border mb-16">

            <h3 className="text-xl font-semibold text-blue-700 mb-6">
              Why Choose Refurbished Electronics?
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">

              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Cost Efficiency
                </p>
                <p>
                  Get enterprise-grade hardware from brands like Dell, HP, Lenovo,
                  Acer, and ASUS at a fraction of the original cost.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Sustainability
                </p>
                <p>
                  Reduce e-waste and environmental impact by extending the life of
                  existing electronics.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Quality Assurance
                </p>
                <p>
                  Refurbished devices are stress-tested and often more reliable than
                  new entry-level machines.
                </p>
              </div>

            </div>

          </div>


          {/* CTA (UNCHANGED) */}
          <div className="mt-20 bg-blue-600 text-white rounded-2xl p-10 text-center">

            <h3 className="text-2xl font-semibold mb-4">
              Secure Your IT Assets the Right Way
            </h3>

            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              Ensure your data is permanently destroyed and your hardware is handled
              responsibly. Partner with Repairtouch for secure IT asset disposition
              and professional refurbishment services.
            </p>

            <motion.button
              onClick={() => setOpen(true)}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              Request a Quote
            </motion.button>

          </div>

        </div>

      </section>


      {/* ✅ MODAL (ONLY ADDITION) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-3xl rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
            >

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-blue-700">
                  Request a Quote
                </h3>

                <button onClick={() => setOpen(false)}>✕</button>
              </div>

              <form className="space-y-6">

                <input placeholder="Company Name" className="modal-input" />
                <input placeholder="Contact Person" className="modal-input" />
                <input type="email" placeholder="Email Address" className="modal-input" />
                <input placeholder="Phone Number" className="modal-input" />

                <textarea
                  rows={4}
                  placeholder="Describe your requirements..."
                  className="modal-input"
                />

                <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full">
                  Submit Request
                </button>

              </form>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* INPUT STYLE */}
      <style jsx>{`
        .modal-input {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.7rem;
        }

        .modal-input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 1px #2563eb;
        }
      `}</style>

    </>
  )
}