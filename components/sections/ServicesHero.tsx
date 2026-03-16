export default function ServicesHero() {
  return (
    <section className="relative text-white py-40">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/services/service.jpg')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-blue-900/20"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our IT Services
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          We provide professional repair services, IT infrastructure solutions,
          and technology support for individuals and businesses.
        </p>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>

    </section>
  )
}