"use client"

import Image from "next/image"
import { CheckCircle, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    title: "Reliable Systems",
    description: "Built with stability and performance in mind."
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Fast Performance",
    description: "Optimized for speed and efficiency."
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Secure Architecture",
    description: "Security-first approach for your systems."
  }
]



export default function ImageGridFeature() {
  return (
    <section className="w-full py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - IMAGE GRID */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[400px] md:h-[500px]">

          {/* BIG IMAGE */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
            <Image
              src="/services/security.jpg"
              alt="Main"
              fill
              sizes="(max-width: 400px) 20vw, 30vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* SMALL */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/services/security.jpg"
              alt="Small 1"
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* SMALL */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/services/security.jpg"
              alt="Small 2"
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* WIDE */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden">
            <Image
              src="/services/security.jpg"
              alt="Wide"
              fill
              sizes="400px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Digital Solutions
          </h2>

          <p className="text-muted-foreground mb-6">
            We build scalable, reliable, and secure systems tailored to your business.
          </p>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                {feature.icon}
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}