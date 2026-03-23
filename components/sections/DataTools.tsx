"use client"

import { motion } from "framer-motion"

export default function DataTools() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Industry-Standard Tools
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We use trusted, enterprise-grade tools to ensure complete and
            irreversible data destruction — meeting compliance and security standards.
          </p>
        </div>


        {/* TOOL DETAIL */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border">

          <h4 className="font-semibold text-xl mb-4 text-blue-700">
            Active@ KillDisk
          </h4>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Active@ KillDisk is a professional-grade data sanitization solution used
            globally for secure disk wiping. It ensures that sensitive information is
            permanently destroyed using certified overwrite standards.
          </p>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">

            <div>
              <p className="font-medium text-gray-800 mb-1">
                Certified Data Erasure
              </p>
              <p>
                Supports multiple overwrite standards ensuring data cannot be recovered.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-1">
                Multiple Pass Wiping
              </p>
              <p>
                Performs repeated overwrite cycles for maximum data destruction.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-1">
                Verification Process
              </p>
              <p>
                Confirms that all sectors have been securely wiped after completion.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-1">
                Audit & Reporting
              </p>
              <p>
                Generates detailed reports and certificates for compliance purposes.
              </p>
            </div>

          </div>

        </div>


       

      </div>

    </section>
  )
}