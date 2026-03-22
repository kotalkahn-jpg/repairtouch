"use client"

import Image from "next/image"

export default function DataProcess() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* INTRO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            Our Data Sanitization Process
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            A structured and verified approach ensuring your data is permanently
            destroyed and compliant with security standards.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE (PROCESS FLOW) */}
          <div className="relative h-[360px]">

            {/* STEP 1 */}
            <div className="absolute top-0 left-0 text-center">
              <Image src="/1.png" alt="Step 1" width={110} height={110} />
              <p className="text-sm mt-2 font-medium">Scan Device</p>
            </div>

            {/* STEP 2 */}
            <div className="absolute top-40 left-40 text-center">
              <Image src="/2.png" alt="Step 2" width={110} height={110} />
              <p className="text-sm mt-2 font-medium">Overwrite Data</p>
            </div>

            {/* STEP 3 */}
            <div className="absolute top-0 left-[320px] text-center">
              <Image src="/3.png" alt="Step 3" width={110} height={110} />
              <p className="text-sm mt-2 font-medium">Verification</p>
            </div>

            {/* STEP 4 */}
            <div className="absolute top-40 left-[480px] text-center">
              <Image src="/4.png" alt="Step 4" width={110} height={110} />
              <p className="text-sm mt-2 font-medium">Certification</p>
            </div>

            {/* ARROWS */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">

              <path
                d="M90 60 C140 110, 170 130, 200 170"
                stroke="#3b82f6"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              <path
                d="M260 200 L300 200 L300 80 L340 80"
                stroke="#3b82f6"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              <path
                d="M400 80 L500 200"
                stroke="#3b82f6"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="6"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
                </marker>
              </defs>

            </svg>

          </div>


          {/* RIGHT SIDE (FAQ CARDS) */}
          <div className="space-y-6">

            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold mb-2">
                1. What happens during scanning?
              </h4>
              <p className="text-sm text-gray-600">
                We detect all storage devices and hidden partitions to ensure no data
                is missed before the sanitization process begins.
              </p>
            </div>

            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold mb-2">
                2. How is data permanently removed?
              </h4>
              <p className="text-sm text-gray-600">
                We use secure overwrite techniques with multiple passes, ensuring
                data cannot be recovered by any standard or advanced tools.
              </p>
            </div>

            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold mb-2">
                3. How do you verify deletion?
              </h4>
              <p className="text-sm text-gray-600">
                After wiping, we run verification checks to confirm that all data
                sectors have been securely overwritten.
              </p>
            </div>

            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold mb-2">
                4. What proof do I receive?
              </h4>
              <p className="text-sm text-gray-600">
                You receive a Data Sanitization Certificate, which serves as
                official documentation for compliance and audit purposes.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}