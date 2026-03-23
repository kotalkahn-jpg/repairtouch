"use client"

import ITAssetDisposition from "@/components/sections/ITAssetDisposition"

export default function RefurbishmentServicesPage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">

        {/* BACKGROUND IMAGE */}
        <img
          src="/refurb.jpg"
          alt="Refurbishment Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-600/40"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            IT Refurbishment Services
          </h1>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Extend the life of your IT infrastructure with professional refurbishment,
            secure data handling, and enterprise-grade restoration processes.
          </p>

          <p className="mt-4 text-blue-200 font-semibold">
            “From decommissioned hardware to high-performance assets — ready for reuse.”
          </p>

        </div>

      </section>


      {/* ================= EXISTING SECTION ================= */}
      <ITAssetDisposition />


      {/* ================= QUOTE INFO CARDS ================= */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">
              Request a Quote Today
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to dispose of old infrastructure or acquire certified refurbished equipment?
              Submit your request and receive a detailed proposal within 24 hours.
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-8">

            {/* CONTACT */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-700">
                1. Contact Information
              </h3>

              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Company Name</li>
                <li>• Contact Person</li>
                <li>• Email Address (@wifitouch.co.za)</li>
                <li>• Phone Number</li>
                <li>• Location (Lilongwe / Johannesburg / Other)</li>
              </ul>
            </div>


            {/* EQUIPMENT */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-700">
                2. Equipment Inventory
              </h3>

              <p className="text-sm text-gray-600">
                Provide estimated quantities for servers, laptops, desktops,
                networking equipment, and storage devices.
              </p>
            </div>


            {/* SERVICES */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-700">
                3. Service Requirements
              </h3>

              <ul className="text-sm text-gray-600 space-y-2">
                <li>• On-Site Decommissioning</li>
                <li>• Certified Data Sanitization</li>
                <li>• Asset Refurbishment</li>
                <li>• Secure Logistics</li>
                <li>• E-Waste Recycling</li>
              </ul>
            </div>


            {/* DETAILS */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-blue-700">
                4. Additional Project Details
              </h3>

              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Preferred Timeline</li>
                <li>• Special Instructions</li>
              </ul>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATE SECTION ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Sample Data Sanitization Certificate
            </h2>

            <p className="text-gray-600">
              Every sanitized device is issued with a certified document confirming
              complete and irreversible data destruction.
            </p>
          </div>


          {/* CERTIFICATE CARD */}
          <div className="border-2 border-gray-200 rounded-2xl p-10 shadow-sm">

            <h3 className="text-xl font-semibold text-center mb-6">
              Certificate of Data Sanitization
            </h3>

            <div className="text-sm text-gray-700 space-y-4">

              <p><strong>Certificate Number:</strong> [Unique ID]</p>
              <p><strong>Date:</strong> March 23, 2026</p>

              <div>
                <p className="font-semibold">Client & Asset Information</p>
                <p>Organization: [Client Name]</p>
                <p>Asset Type: Server / Laptop / Workstation</p>
                <p>Make/Model: Dell / HP / Lenovo</p>
                <p>Serial Number: [Service Tag]</p>
                <p>Storage Type: HDD / SSD / NVMe</p>
              </div>

              <div>
                <p className="font-semibold">Sanitization Details</p>
                <p>Method: NIST 800-88 / DoD 5220.22-M</p>
                <p>Software: KillDisk / Blancco</p>
                <p>Verification: 100% Passed</p>
              </div>

              <div>
                <p className="font-semibold">Compliance & Assurance</p>
                <p>
                  All data has been permanently destroyed and is unrecoverable.
                  This process meets international data protection standards.
                </p>
              </div>

              <div>
                <p className="font-semibold">Authorized Signature</p>
                <p>Technician: ________________________</p>
                <p>Signature: ________________________</p>
                <p>Company Stamp</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}