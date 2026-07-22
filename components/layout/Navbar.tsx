"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight, // ✅ ADD THIS
  Server,
  Globe
} from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
const [voipMenu, setVoipMenu] = useState({
  open: false,
  
})
const [voipOpen, setVoipOpen] = useState(false)
const [activePanel, setActivePanel] = useState<string | null>(null)
const [level1, setLevel1] = useState<string | null>(null)
const [level2, setLevel2] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const voipRef = useRef<HTMLDivElement | null>(null)
let timeout: NodeJS.Timeout

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (voipRef.current && !voipRef.current.contains(event.target as Node)) {
      setVoipOpen(false)
      setActivePanel(null) // optional: reset submenu
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])




  return (
    <div className="absolute top-8 left-0 w-full flex justify-center z-[200]">
      <div className="bg-white shadow-lg rounded-md flex items-center justify-between px-6 md:px-10 py-3 w-[95%] md:w-[1200px]">

     {/* LOGO */}
<Link href="/" className="flex items-center">
  <Image
    src="/logo.jpg"
    alt="RepairTouch Logo"
    width={180}
    height={50}
    priority
    className="h-12 w-auto"
  />
</Link>   

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">

<div ref={voipRef} className="relative">

  {/* TRIGGER */}
  <div
    onClick={() => setVoipOpen(!voipOpen)}
    className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-blue-700"
  >
    VoIP Hosting <ChevronDown size={16} />
  </div>

  {/* WRAPPER (important for side-by-side layout) */}
  {voipOpen && (
    <div className="absolute top-12 left-0 flex gap-2 z-50">

      {/* LEFT PANEL */}
      <div className="w-64 bg-white rounded-xl shadow-xl p-2 space-y-1">

        <Link href="/voip-hosting" className="block px-3 py-2 hover:bg-gray-100 rounded-md">
          voip hosting
        </Link>

        <div
          onClick={() => setActivePanel("bps")}
          className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          Business Phone System
          <ChevronRight size={16} />
        </div>

        <div
          onClick={() => setActivePanel("linkus")}
          className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          Linkus UC Clients
          <ChevronRight size={16} />
        </div>

         <div
          onClick={() => setActivePanel("products")}
          className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          more products
          <ChevronRight size={16} />
        </div>

        <Link href="/central-management" className="block px-3 py-2 hover:bg-gray-100 rounded-md">
          CENTRAL MANAGEMENT
        </Link>

      
      </div>

      {/* RIGHT PANEL (DYNAMIC) */}
      {activePanel === "bps" && (
        <div className="w-72 bg-white rounded-xl shadow-xl p-3 space-y-4">

          <div>
            <p className="text-xs text-gray-500 mb-1">By Edition</p>
            <Link href="/cloud" className="block py-1 hover:text-blue-700">Cloud</Link>
            <Link href="/software" className="block py-1 hover:text-blue-700">Software</Link>
            <Link href="/appliance" className="block py-1 hover:text-blue-700">Appliance</Link>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">By Size</p>
            <Link href="/small" className="block py-1 hover:text-blue-700">Small</Link>
            
            <Link href="/enterprise" className="block py-1 hover:text-blue-700">Enterprise</Link>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">By Deployment</p>
            <Link href="/cloud-deploy" className="block py-1 hover:text-blue-700">Cloud</Link>
            <Link href="/onprem" className="block py-1 hover:text-blue-700">On-Premise</Link>
          </div>

        </div>
      )}

      {activePanel === "linkus" && (
        <div className="w-72 bg-white rounded-xl shadow-xl p-3 space-y-2">
          <Link href="/web" className="block py-1 hover:text-blue-700">
           Linkus Web Client
          </Link>
          <Link href="/mobile" className="block py-1 hover:text-blue-700">
            Linkus Mobile client
          </Link>
          <Link href="/desktop" className="block py-1 hover:text-blue-700">
            Linkus Desktop Client
          </Link>
        </div>
      )}

      {activePanel === "products" && (
        <div className="w-72 bg-white rounded-xl shadow-xl p-3 space-y-2">
          <Link href="/voipgate" className="block py-1 hover:text-blue-700">
            VOIPGateway
          </Link>
           <Link href="/Fanvil" className="block py-1 hover:text-blue-700">
           Fanvil
          </Link>
          <Link href="/Fanvil" className="block py-1 hover:text-blue-700">
           cisco
          </Link>
          <Link href="/Fanvil" className="block py-1 hover:text-blue-700">
            Yealink
          </Link>
          <Link href="/Fanvil" className="block py-1 hover:text-blue-700">
           yeastar
          </Link>
          <Link href="/Fanvil" className="block py-1 hover:text-blue-700">
           Jabra
          </Link>
          <Link href="/Fanvil" className="block py-1 hover:text-blue-700">
           grandream
          </Link>
          <Link href="/Fanvil" className="block py-1 hover:text-blue-700">
          Erickson
          </Link>
          <Link href="/Fanvil" className="block py-1 hover:text-blue-700">
          snom
          </Link>
          
        </div>
      )}

    </div>
  )}
</div>

          {/* SOLUTIONS MEGA MENU */}
          <div className="relative group">
            <div className={`flex items-center gap-1 cursor-pointer transition ${
              isActive("/services") || isActive("/business-it")
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-700"
            }`}>
              Solutions <ChevronDown size={16} />
            </div>

            <div className="absolute top-12 left-0 w-[420px] bg-white shadow-xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/services"
                  className={`flex gap-3 p-3 rounded-lg transition ${
                    isActive("/services") ? "bg-blue-50" : "hover:bg-gray-100"
                  }`}
                >
                  <Server className="text-blue-700" />
                  <div>
                    <p className="font-semibold">Solutions</p>
                    <p className="text-xs text-gray-500">All IT services</p>
                  </div>
                </Link>

                <Link
                  href="/business-it"
                  className={`flex gap-3 p-3 rounded-lg transition ${
                    isActive("/business-it") ? "bg-blue-50" : "hover:bg-gray-100"
                  }`}
                >
                  <Globe className="text-blue-700" />
                  <div>
                    <p className="font-semibold">Specialized</p>
                    <p className="text-xs text-gray-500">Custom enterprise systems</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* TOP LEVEL LINKS */}
          {[
            
            { name: "Website & Design", link: "/web-hosting" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`transition ${
                isActive(item.link)
                  ? "text-blue-700"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {item.name}
            </Link>
          ))}


          {/* DATA SANITIZATION DROPDOWN */}
          <div className="relative group">
            <div className={`flex items-center gap-1 cursor-pointer transition ${
              isActive("/data-sanitization") || isActive("/refurbishment-services")
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-700"
            }`}>
              Data Sanitization <ChevronDown size={16} />
            </div>

            <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md py-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/data-sanitization"
                className={`block px-4 py-2 ${
                  isActive("/data-sanitization") ? "bg-blue-50" : "hover:bg-gray-100"
                }`}
              >
                Data Sanitization
              </Link>

              <Link
                href="/refurbishment-services"
                className={`block px-4 py-2 ${
                  isActive("/refurbishment-services") ? "bg-blue-50" : "hover:bg-gray-100"
                }`}
              >
                Refurbishment Services
              </Link>
            </div>
          </div>

          {/* ONLINE SHOP */}
          <Link
            href="/products"
            className={`transition ${
              isActive("/products")
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-700"
            }`}
          >
            Online Shop
          </Link>

          {/* CALL CENTER DROPDOWN */}
          <div className="relative group">
            <div className={`flex items-center gap-1 cursor-pointer transition ${
              isActive("/learning") || isActive("/contact")
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-700"
            }`}>
              Call Center <ChevronDown size={16} />
            </div>

            <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md py-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/learning"
                className={`block px-4 py-2 ${
                  isActive("/learning") ? "bg-blue-50" : "hover:bg-gray-100"
                }`} 
              >
                Call Center
              </Link>

              <Link
                href="/contact"
                className={`block px-4 py-2 ${
                  isActive("/contact") ? "bg-blue-50" : "hover:bg-gray-100"
                }`}
              >
                Contact
              </Link>
              
               <Link
                href="/inbound"
                className={`block px-4 py-2 ${
                  isActive("/inbound") ? "bg-blue-50" : "hover:bg-gray-100"
                }`}
              >
                inbound call center
              </Link>

              <Link
                href="/outbound"
                className={`block px-4 py-2 ${
                  isActive("/outbound") ? "bg-blue-50" : "hover:bg-gray-100"
                }`}
              >
                outbound call center
              </Link>
            </div>
          </div>

          {/* NEW NETWORK DROPDOWN */}
          <div className="relative group">
            <div className={`flex items-center gap-1 cursor-pointer transition ${
              isActive("/network-infrastructure") ||
              isActive("/servers") ||
              isActive("/switches") ||
              isActive("/wireless-solutions")
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-700"
            }`}>
              Network <ChevronDown size={16} />
            </div>

            <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md py-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/network-infrastructure" className="block px-4 py-2 hover:bg-gray-100">
                Network Infrastructure
              </Link>
              <Link href="/servers" className="block px-4 py-2 hover:bg-gray-100">
                Servers
              </Link>
              <Link href="/switches" className="block px-4 py-2 hover:bg-gray-100">
                Switches
              </Link>
              <Link href="/wireless-solutions" className="block px-4 py-2 hover:bg-gray-100">
                Wireless Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="bg-blue-700 hover:bg-blue-800">
            Book a Technician
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-md shadow-xl flex flex-col gap-2 py-6 text-sm font-medium md:hidden">
          {[
            { name: "Solutions", link: "/services" },
            { name: "Specialized Solutions", link: "/business-it" },
            { name: "VoIP Hosting", link: "/voip-hosting" },
            { name: "Website & Design", link: "/web-hosting" },
            { name: "Data Sanitization", link: "/data-sanitization" },
            { name: "Refurbishment Services", link: "/refurbishment-services" },
            { name: "Online Shop", link: "/products" },
            { name: "Call Center", link: "/learning" },
            { name: "Contact", link: "/contact" },
            { name: "Network Infrastructure", link: "/network-infrastructure" },
            { name: "Servers", link: "/servers" },
            { name: "Switches", link: "/switches" },
            { name: "Wireless Solutions", link: "/wireless-solutions" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className={`w-full px-6 py-3 transition ${
                isActive(item.link)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 active:bg-blue-100 active:text-blue-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="px-6 pt-4">
            <Button className="w-full bg-blue-700 hover:bg-blue-800">
              Book a Technician
            </Button>
          </div>
        </div>
      )}
    </div>  
  )
}
