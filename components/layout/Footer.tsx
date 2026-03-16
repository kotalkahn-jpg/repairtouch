import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* COMPANY */}

        <div>

          <h3 className="text-white text-xl font-bold mb-4">
            RepairTouch
          </h3>

          <p className="text-sm text-gray-400">
            Professional IT repair services and business technology
            solutions for individuals and organizations.
          </p>

        </div>

        {/* SERVICES */}

        <div>

          <h4 className="text-white font-semibold mb-4">
            Services
          </h4>

          <ul className="space-y-2 text-sm">

            <li>Phone Repair</li>
            <li>Laptop Repair</li>
            <li>Computer Repair</li>
            <li>Networking</li>
            <li>Security Systems</li>

          </ul>

        </div>

        {/* COMPANY LINKS */}

        <div>

          <h4 className="text-white font-semibold mb-4">
            Company
          </h4>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/about">About Us</Link>
            </li>

            <li>
              <Link href="/services">Services</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

          </ul>

        </div>

        {/* CONTACT */}

        <div>

          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <Phone size={16} /> +265 XXX XXX XXX
            </li>

            <li className="flex items-center gap-2">
              <Mail size={16} /> info@repairtouch.com
            </li>

            <li className="flex items-center gap-2">
              <MapPin size={16} /> Malawi
            </li>

          </ul>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} RepairTouch. All rights reserved.
      </div>

    </footer>
  )
}