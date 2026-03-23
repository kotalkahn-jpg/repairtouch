"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* CONTACT INFO */}

        <div>

          <h2 className="text-4xl font-bold mb-6">
            Let's Talk
          </h2>

          <p className="text-gray-600 mb-10 max-w-md">
            Have questions about repairs, IT consultations or
            equipment purchases? Our technicians are ready to help.
          </p>

          <div className="space-y-6">

            {/* Phone */}

            <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm">

              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="text-blue-700" size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                
              </div>

            </div>

            {/* Email */}

            <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm">

              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="text-blue-700" size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                
              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm">

              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="text-blue-700" size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                
              </div>

            </div>

          </div>

        </div>

        {/* CONTACT FORM */}

        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <h3 className="text-2xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-full font-medium"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}