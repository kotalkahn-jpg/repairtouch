"use client";

import Image from "next/image";
import { Smartphone, Laptop, Wrench, Network, HardDrive, Shield } from "lucide-react";

import WordReveal from "@/components/animations/WordReveal";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

export default function ServicesSection() {

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Reliable Repair & IT Solutions
          </h2>

          <WordReveal
            text="We provide reliable repair services and IT solutions for individuals and businesses. Our technicians specialize in diagnostics, hardware repairs and technology infrastructure."
            className="mt-6 text-gray-600 leading-relaxed"
          />

          <WordReveal
            text="From device repair to networking systems, we ensure your technology runs smoothly and efficiently."
            className="mt-4 text-gray-600 leading-relaxed"
            delay={0.2}
          />

          {/* SERVICES ICON ROW */}
          <SlideUp delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-10">

              <div className="flex flex-col items-center text-center">
                <Smartphone className="text-blue-700 mb-3" size={36} />
                <p className="text-sm text-gray-600">Phone Repair</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Laptop className="text-blue-700 mb-3" size={36} />
                <p className="text-sm text-gray-600">Laptop Repair</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Wrench className="text-blue-700 mb-3" size={36} />
                <p className="text-sm text-gray-600">Computer Repair</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Network className="text-blue-700 mb-3" size={36} />
                <p className="text-sm text-gray-600">Networking</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <HardDrive className="text-blue-700 mb-3" size={36} />
                <p className="text-sm text-gray-600">Data Recovery</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Shield className="text-blue-700 mb-3" size={36} />
                <p className="text-sm text-gray-600">Security Systems</p>
              </div>

            </div>
          </SlideUp>

        </div>


        {/* RIGHT IMAGE GRID */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 gap-6 auto-rows-[200px]">

            {/* TALL IMAGE */}
            <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/services/computer-repair.jpg"
                alt="Device Repair"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/services/security.jpg"
                alt="Laptop Repair"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/services/data-recovery.jpg"
                alt="Networking"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* WIDE IMAGE */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/services/networking.jpg"
                alt="IT Services"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>
        </FadeIn>

      </div>

    </section>
  );
}