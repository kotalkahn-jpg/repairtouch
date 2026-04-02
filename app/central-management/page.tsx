"use client"
import { useEffect, useState } from "react"
import HeroSection from "@/components/sections/HeroSection"
import { Bell } from "lucide-react"
import { Headset, Blocks, Smartphone } from "lucide-react"
import CTASection from "@/components/sections/CTASection"
import {
  Check,
  Server,
  LayoutDashboard,
  Boxes,
  Cpu,
  Box,
  Share2
} from "lucide-react"

export default function HostingPage() {

  return (
    <>
      <HeroSection
        title="central-management"
        description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
        backgroundImage="/hosting.jpg"
      />

<br></br><br></br>
<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
      Centrally Manage All - Cloud, Software, and Hardware
    </h2>

    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
      Built for partners of all kinds, Yeastar Central Management (YCM) offers
      easy-to-use, enterprise-level tools to manage all Yeastar PBXs and TA
      gateways before, during, and after deployment. It enable opportunities to
      quickly launch UCaaS business and provides centralized interfaces to
      provision, manage, monitor, and support Yeastar products individually or
      in batches, no matter where they are deployed.
    </p>
  </div>
</section>
<br></br><br></br>
<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Image */}
    <div className="relative">
      <img
        src="/images/cloud-pbx.png"
        alt="Cloud PBX"
        className="rounded-2xl w-full object-cover"
      />
    </div>

    {/* Text */}
    <div>
      <h2 className="text-4xl font-semibold text-slate-900 leading-tight">
        Cloud PBX Delivery and Management
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed">
        For MSPs and service providers, YCM works as your multi-instance hosted
        platform and gives you the ability to open your sales channel—bring
        resellers or go direct. Featuring a full suite of UCaaS with carrier-grade
        reliability and security, you can create and deliver Cloud PBXs in seconds,
        monitor resource usage and terminal registrations by endpoint type, adjust
        capacity, and more, all at the touch of a button. Spend less time on the
        upkeep and make more money.
      </p>

      <ul className="mt-6 space-y-3 text-gray-700">
        <li className="flex items-center gap-3">
          <Check className="text-green-500" size={18} />
          Yeastar P-Series UCaaS or white label
        </li>
      </ul>
    </div>

  </div>
</section>
<br></br><br></br>
<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Text */}
    <div>
      <h2 className="text-4xl font-semibold text-slate-900 leading-tight">
        Software & Device Remote Management
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed">
        YCM also allows for hassle-free management and configuration of
        customer-premises Yeastar PBX Systems and FXS VoIP Gateways across
        multiple locations. Gain a panoramic view of devices performance.
        Check detailed information about each device. Spot issues before
        customers do and quickly troubleshoot through HTTPS-secured remote
        connections. Provide your customers with Level 2 technical support
        and better SLAs.
      </p>

      <ul className="mt-6 space-y-3 text-gray-700">
        <li className="flex items-center gap-3">
          <Check className="text-green-500" size={18} />
          Add and manage all on one interface
        </li>
        <li className="flex items-center gap-3">
          <Check className="text-green-500" size={18} />
          Provision PBXs in bulk with templates
        </li>
      </ul>
    </div>

    {/* Image */}
    <div>
      <img
        src="/images/device-management.png"
        alt="Device Management"
        className="rounded-2xl w-full object-cover"
      />
    </div>

  </div>
</section>

<section className="w-full bg-slate-100 py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl p-8 border border-gray-200">
      <Server size={28} className="text-gray-700 mb-4" />
      <h3 className="text-xl font-semibold text-slate-900">
        30+ Types of Alarm
      </h3>
      <p className="mt-4 text-gray-600">
        With proactive monitoring, should a critical issue occur, you will be
        notified immediately – even before your customer spot it.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl p-8 border border-gray-200">
      <LayoutDashboard size={28} className="text-gray-700 mb-4" />
      <h3 className="text-xl font-semibold text-slate-900">
        Dashboard
      </h3>
      <p className="mt-4 text-gray-600">
        A widget-based dynamic dashboard real-time overview of all your managed
        PBX, including PBX status, device status, alarm trend, tasks status, etc.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl p-8 border border-gray-200">
      <Boxes size={28} className="text-gray-700 mb-4" />
      <h3 className="text-xl font-semibold text-slate-900">
        Provisioning Template
      </h3>
      <p className="mt-4 text-gray-600">
        Automate basic PBX configurations for your customers with customizable
        provisioning templates.
      </p>
    </div>

    {/* Row 2 (icons only placeholders if needed) */}
    <div className="bg-white rounded-2xl p-8 border border-gray-200 flex items-center justify-center">
      <Cpu className="text-gray-400" size={28} />
    </div>

    <div className="bg-white rounded-2xl p-8 border border-gray-200 flex items-center justify-center">
      <Box className="text-gray-400" size={28} />
    </div>

    <div className="bg-white rounded-2xl p-8 border border-gray-200 flex items-center justify-center">
      <Share2 className="text-gray-400" size={28} />
    </div>

  </div>

</section>
<CTASection/>

      </>
      )
      }