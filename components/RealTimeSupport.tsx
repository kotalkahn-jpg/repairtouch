"use client"

import { MessageSquare, Phone, Bot, Activity } from "lucide-react"

export default function RealTimeSupport() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Real-Time Support & Automation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance communication with modern tools that enable instant support,
            automation, and seamless customer interaction.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* CHAT */}
          <div className="flex gap-4">
            <MessageSquare className="text-blue-700" />
            <div>
              <h4 className="font-semibold mb-2">Live Chat Integration</h4>
              <p className="text-sm text-gray-600">
                Provide instant messaging support for customers directly from your platform.
              </p>
            </div>
          </div>

          {/* VOICE */}
          <div className="flex gap-4">
            <Phone className="text-blue-700" />
            <div>
              <h4 className="font-semibold mb-2">Voice Support Systems</h4>
              <p className="text-sm text-gray-600">
                Handle real-time calls with clarity, routing, and monitoring tools.
              </p>
            </div>
          </div>

          {/* AUTOMATION */}
          <div className="flex gap-4">
            <Bot className="text-blue-700" />
            <div>
              <h4 className="font-semibold mb-2">Automation & AI Assistants</h4>
              <p className="text-sm text-gray-600">
                Automate responses and workflows using intelligent systems like chatbots.
              </p>
            </div>
          </div>

          {/* MONITORING */}
          <div className="flex gap-4">
            <Activity className="text-blue-700" />
            <div>
              <h4 className="font-semibold mb-2">Real-Time Monitoring</h4>
              <p className="text-sm text-gray-600">
                Track performance, call activity, and system health in real-time dashboards.
              </p>
            </div>
          </div>

        </div>


        {/* CTA */}
        <div className="mt-20 text-center">

          <h3 className="text-xl font-semibold mb-4">
            Build a Smarter Support System
          </h3>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800">
            Get Started
          </button>

        </div>

      </div>

    </section>
  )
}