"use client"

import { Shield, Server, Database } from "lucide-react"

export default function HostingFeatures() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold">
            Built for Reliability and Security
          </h2>
        </div>

        {/* BOOK LAYOUT */}
        <div className="relative grid md:grid-cols-3 gap-12 items-start">

          {/* SPINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-blue-200"></div>


          {/* LEFT PAGE */}
          <div className="md:pr-10">

            <Server className="text-blue-700 mb-6" size={28} />

            <h3 className="text-xl font-semibold mb-4">
              High Uptime
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our infrastructure is engineered to ensure your systems remain
              online and accessible at all times, minimizing disruptions to your business.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Redundant systems to prevent failures
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Load-balanced environments for stability
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Continuous monitoring and response
              </li>
            </ul>

          </div>


          {/* CENTER (SPINE CONTENT) */}
          <div className="text-center md:px-6">

            <Shield className="text-blue-700 mb-6 mx-auto" size={28} />

            <h3 className="text-xl font-semibold mb-4">
              Security
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Security is integrated into every layer of our infrastructure,
              protecting your applications, data, and communication channels.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Secure server configurations</li>
              <li>Firewall and threat protection</li>
              <li>Access control and authentication</li>
            </ul>

          </div>


          {/* RIGHT PAGE */}
          <div className="md:pl-10">

            <Database className="text-blue-700 mb-6" size={28} />

            <h3 className="text-xl font-semibold mb-4">
              Backups
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We ensure your data is consistently protected with reliable backup
              systems, allowing quick recovery when needed.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Automated backup schedules
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Secure and redundant storage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Fast and reliable recovery systems
              </li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}