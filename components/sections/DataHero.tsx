"use client"

export default function DataHero() {
  return (
    <section
      className="relative py-40 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/data.jpg')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Data Sanitization & Secure Erasure
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Ensure sensitive data is permanently destroyed before disposal,
          resale, or system reuse — meeting security and compliance standards.
        </p>

        <p className="mt-4 text-blue-300 font-semibold">
          “Compliance + Data Protection Service”
        </p>

      </div>

    </section>
  )
}