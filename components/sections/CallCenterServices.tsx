"use client"

import { PhoneCall, Headphones, Settings, Users } from "lucide-react"

export default function CallCenterServices() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Call Center Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide complete call center systems designed to improve customer
            experience, streamline communication, and enhance operational efficiency.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-4 gap-8">

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <PhoneCall className="text-blue-700 mb-4" />
            <h4 className="font-semibold mb-2">Inbound & Outbound Calls</h4>
            <p className="text-sm text-gray-600">
              Manage customer support, inquiries, and outreach campaigns efficiently.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Headphones className="text-blue-700 mb-4" />
            <h4 className="font-semibold mb-2">Customer Support Systems</h4>
            <p className="text-sm text-gray-600">
              Provide reliable support channels for clients through integrated systems.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Settings className="text-blue-700 mb-4" />
            <h4 className="font-semibold mb-2">Call Routing & IVR</h4>
            <p className="text-sm text-gray-600">
              Intelligent routing ensures customers reach the right department instantly.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Users className="text-blue-700 mb-4" />
            <h4 className="font-semibold mb-2">Multi-Agent Systems</h4>
            <p className="text-sm text-gray-600">
              Support multiple agents with centralized monitoring and management.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}