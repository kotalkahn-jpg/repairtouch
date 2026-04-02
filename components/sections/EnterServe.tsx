"use client"

import Image from "next/image"
import { motion , AnimatePresence} from "framer-motion"
import CTASection from "@/components/sections/CTASection"
import {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Clock,
  DollarSign,
  CheckCircle,
  Settings,
  Phone, AppWindow,Vote, MonitorCloud
} from "lucide-react"

export default function BusinessServices() {

  const services = [
    {
      title: "Network Infrastructure",
      description:
        "Design and deployment of secure and scalable office networks.",
      icon: Network
    },
    {
      title: "Server Installation",
      description:
        "Setup and configuration of business servers and storage systems.",
      icon: Server
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud storage, remote access and backup solutions.",
      icon: Cloud
    },
    {
      title: "Security Systems",
      description:
        "CCTV, surveillance and access control solutions.",
      icon: ShieldCheck
    }
  ]

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}




      {/* OVERVIEW */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">


             {/* RIGHT FEATURES */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border rounded-xl p-8 shadow-sm"
          >

            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              From Calls to Customer Connections
            </h3>

            <ul className="space-y-6">

              {[
                {
                  icon: Phone,
                  text: "Call, chat, conferencing, SMS all in one phone system",
                },
                {
                  icon: AppWindow,
                  text: "iOS/Android, Windows/macOS and Web apps for hybrid work",
                },
                {
                  icon: Vote,
                  text: "CRM, Social Media and Microsoft 365, integrations for a complete workflow",
                },
                {
                  icon: MonitorCloud ,
                  text: "Custom infrastructure designed for your organization",
                },
              ].map((item, index) => {

                const Icon = item.icon

                return (

                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="flex items-start gap-4"
                  >

                    <div className="mt-1 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>

                    <p className="text-gray-700">
                      {item.text}
                    </p>

                  </motion.li>

                )
              })}

            </ul>

          </motion.div>

          {/* LEFT TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Easy-First Small Business
Phone System
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-900">
              Yeastar for Small Business
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Our team helps organizations design, deploy and maintain
              reliable IT environments that support modern business
              operations. From networking and servers to cloud systems
              and digital security, we provide scalable solutions
              tailored to your organization.
            </p>

          </motion.div>



         

        </div>

      </section>



      <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Power Easy Growth for UCaaS Service Providers
          </h2>
          
        </div>

        {/* GRID */}
       <div className="grid md:grid-cols-3 gap-8">

  {/* BYOC */}
  <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-transparent hover:border-blue-600 hover:shadow-md transition">

    <h4 className="font-semibold text-lg mb-3">
      Bring Your Own Carriers
    </h4>

    <p className="text-gray-600 text-sm mb-4">
      Package and manage your own{" "}
      <span className="text-blue-700 font-medium">SIP trunks</span> while maintaining full control over{" "}
      <span className="text-blue-700 font-medium">number routing</span> and call flows.
    </p>

    <ul className="text-sm text-gray-600 space-y-2 mb-6">
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Flexible SIP trunk integration
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Intelligent number routing control
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Maximize revenue and profit margins
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Full independence from providers
      </li>
    </ul>

    <button className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800">
      Get Started
    </button>

  </div>


  {/* WHITE LABEL */}
  <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-transparent hover:border-blue-600 hover:shadow-md transition">

    <h4 className="font-semibold text-lg mb-3">
      White-Label Branding
    </h4>

    <p className="text-gray-600 text-sm mb-4">
      Fully customize the platform with your own{" "}
      <span className="text-blue-700 font-medium">branding</span>, delivering a seamless and{" "}
      <span className="text-blue-700 font-medium">professional experience</span> to your customers.
    </p>

    <ul className="text-sm text-gray-600 space-y-2 mb-6">
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Custom logos, domains, and UI themes
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Branded web and mobile applications
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Consistent customer-facing identity
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Quick setup with point-and-click tools
      </li>
    </ul>

    <button className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800">
      Get Started
    </button>

  </div>


  {/* CENTRAL MANAGEMENT */}
  <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-transparent hover:border-blue-600 hover:shadow-md transition">

    <h4 className="font-semibold text-lg mb-3">
      Central Management
    </h4>

    <p className="text-gray-600 text-sm mb-4">
      Manage all your PBX systems from a single{" "}
      <span className="text-blue-700 font-medium">intuitive dashboard</span> with powerful automation and monitoring tools.
    </p>

    <ul className="text-sm text-gray-600 space-y-2 mb-6">
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Centralized provisioning and configuration
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Real-time monitoring and analytics
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Automated tasks and system alerts
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle size={16} className="text-blue-700 mt-1" />
        Efficient multi-tenant management
      </li>
    </ul>

    <button className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800">
      Get Started
    </button>

  </div>


  {/* INSTANT DEPLOYMENT */}
  



        </div>

      </div>


     

             


                 </section>
                 <CTASection/>

    </main>
  )

}