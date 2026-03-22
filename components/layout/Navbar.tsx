"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  Server,
  Globe
} from "lucide-react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path :string) => pathname === path

  return (
    <div className="absolute top-8 left-0 w-full flex justify-center z-[200]">

      <div className="bg-white shadow-lg rounded-md flex items-center justify-between px-6 md:px-10 py-3 w-[95%] md:w-[1200px]">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          RepairTouch
        </Link>


        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">

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

                <Link href="/services"
                  className={`flex gap-3 p-3 rounded-lg transition ${
                    isActive("/services") ? "bg-blue-50" : "hover:bg-gray-100"
                  }`}>
                  <Server className="text-blue-700" />
                  <div>
                    <p className="font-semibold">Solutions</p>
                    <p className="text-xs text-gray-500">All IT services</p>
                  </div>
                </Link>

                <Link href="/business-it"
                  className={`flex gap-3 p-3 rounded-lg transition ${
                    isActive("/business-it") ? "bg-blue-50" : "hover:bg-gray-100"
                  }`}>
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
            { name: "VoIP Hosting", link: "/voip-hosting" },
            { name: "Web Hosting", link: "/web-hosting" },
            { name: "Data Sanitization", link: "/data-sanitization" },
            { name: "Online Shop", link: "/products" },
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

              <Link href="/learning"
                className={`block px-4 py-2 ${
                  isActive("/learning") ? "bg-blue-50" : "hover:bg-gray-100"
                }`}>
                Call Center
              </Link>

              <Link href="/contact"
                className={`block px-4 py-2 ${
                  isActive("/contact") ? "bg-blue-50" : "hover:bg-gray-100"
                }`}>
                Contact
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
            { name: "Web Hosting", link: "/web-hosting" },
            { name: "Data Sanitization", link: "/data-sanitization" },
            { name: "Online Shop", link: "/products" },
            { name: "Call Center", link: "/learning" },
            { name: "Contact", link: "/contact" },
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