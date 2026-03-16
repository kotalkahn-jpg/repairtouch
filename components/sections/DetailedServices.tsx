"use client"

import { motion } from "framer-motion"
import {
  Monitor,
  Keyboard,
  Cpu,
  HardDrive,
  Settings,
  Smartphone,
  Battery,
  Camera,
  Droplets,
  Wifi,
  Server,
  Cloud,
  Shield,
  CheckCircle
} from "lucide-react"

export default function DetailedServices() {

  const services = [
    {
      title: "Laptop Repair Services",
      description:
        "Our technicians diagnose and repair laptop hardware and software issues for most major brands.",
      items: [
        { name: "Screen replacement", icon: Monitor, color: "bg-green-500" },
        { name: "Keyboard replacement", icon: Keyboard, color: "bg-blue-500" },
        { name: "Motherboard repairs", icon: Cpu, color: "bg-yellow-500" },
        { name: "SSD and RAM upgrades", icon: HardDrive, color: "bg-purple-500" },
        { name: "Operating system installation", icon: Settings, color: "bg-red-500" }
      ]
    },
    {
      title: "Phone Repair Services",
      description:
        "We repair smartphones quickly and professionally using quality replacement parts.",
      items: [
        { name: "Screen replacement", icon: Smartphone, color: "bg-blue-500" },
        { name: "Battery replacement", icon: Battery, color: "bg-yellow-500" },
        { name: "Charging port repair", icon: Cpu, color: "bg-green-500" },
        { name: "Camera repairs", icon: Camera, color: "bg-purple-500" },
        { name: "Water damage diagnostics", icon: Droplets, color: "bg-red-500" }
      ]
    },
    {
      title: "Business IT Solutions",
      description:
        "We help businesses design and maintain reliable IT infrastructure and network systems.",
      items: [
        { name: "Office network installation", icon: Wifi, color: "bg-blue-500" },
        { name: "Server setup and maintenance", icon: Server, color: "bg-green-500" },
        { name: "Cloud backup solutions", icon: Cloud, color: "bg-yellow-500" },
        { name: "Security systems and CCTV", icon: Shield, color: "bg-purple-500" },
        { name: "IT consulting and support", icon: Cpu, color: "bg-red-500" }
      ]
    }
  ]

  const tileSizes = [
    "col-span-2 row-span-2 h-44",
    "h-20",
    "h-20",
    "h-24",
    "h-24"
  ]

  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}

        <div className="max-w-3xl mb-20">

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Solutions
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Technology Services for Every Need
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            From individual device repairs to enterprise IT infrastructure,
            we deliver reliable solutions designed to keep your technology running smoothly.
          </p>

        </div>


        {/* SERVICES */}

        <div className="space-y-32">

          {services.map((service, index) => (

            <div
              key={index}
              className="grid md:grid-cols-2 gap-16 items-center"
            >

              {/* ICON GRID */}

              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>

                <div className="grid grid-cols-3 gap-3">

                  {service.items.map((item, i) => {
                    const Icon = item.icon

                    return (

                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className={`
                          relative
                          ${item.color}
                          text-white
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          transition
                          group
                          hover:-translate-y-1
                          hover:shadow-xl
                          ${tileSizes[i]}
                        `}
                      >

                        {/* Glow effect */}

                        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-30 blur-xl transition pointer-events-none"></div>

                        {/* Icon */}

                        <Icon
                          size={34}
                          className="transition-transform duration-300 group-hover:scale-125"
                        />

                      </motion.div>

                    )
                  })}

                </div>

              </div>


              {/* TEXT CONTENT */}

              <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>

                <h2 className="text-3xl font-bold mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 mb-8">
                  {service.description}
                </p>


                {/* FEATURE CHIPS */}

                <div className="flex flex-wrap gap-3 mb-8">

                  {service.items.map((item, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      {item.name}
                    </div>

                  ))}

                </div>


                {/* CTA */}

                <button className="text-blue-700 font-semibold hover:underline">
                  Learn More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}