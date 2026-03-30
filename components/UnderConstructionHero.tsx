"use client"

export default function UnderConstructionHero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-center overflow-hidden">

      {/* 🔥 Background Image */}
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        alt="Under Construction"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔥 Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Website Under Construction 🚧
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          We're building something powerful for you. This page will be available soon.
        </p>

        {/* Optional CTA */}
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
          Go Back Home
        </button>
      </div>

    </section>
  )
}