"use client"

export default function HostHero() {
  return (
    <section
      className="relative py-40 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hosting.jpg')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-600/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Web Hosting & Infrastructure
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          We don’t just host websites — we build and manage reliable,
          scalable infrastructure that powers your entire online presence.
        </p>

        <p className="mt-4 text-blue-200 font-semibold">
          “Your business, online — stable, secure, and always available.”
        </p>

      </div>

    </section>
  )
}