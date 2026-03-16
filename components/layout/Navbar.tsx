"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="absolute top-8 left-0 w-full flex justify-center z-[200]">

      <div className="bg-white shadow-lg rounded-md flex items-center justify-between px-6 md:px-10 py-3 w-[95%] md:w-[1000px]">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          RepairTouch
        </Link>


        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          <Link href="/services" className="hover:text-blue-700 transition">
            Services
          </Link>

          <Link href="/business-it" className="hover:text-blue-700 transition">
            Business IT
          </Link>

          <Link href="/products" className="hover:text-blue-700 transition">
            Products
          </Link>

          <Link href="/learning" className="hover:text-blue-700 transition">
            Learn
          </Link>

          <Link href="/contact" className="hover:text-blue-700 transition">
            Contact
          </Link>

        </div>


        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Button className="bg-blue-700 hover:bg-blue-800">
            Book Repair
          </Button>
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>


      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-md shadow-xl flex flex-col items-center gap-6 py-8 text-sm font-medium text-gray-700 md:hidden">

          <Link onClick={() => setMenuOpen(false)} href="/services">
            Services
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/business-it">
            Business IT
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/products">
            Products
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/learning">
            Learn
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/contact">
            Contact
          </Link>

          <Button className="bg-blue-700 hover:bg-blue-800">
            Book Repair
          </Button>

        </div>
      )}

    </div>
  )
}