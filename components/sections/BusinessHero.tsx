export default function BusinessHero() {
  return (
    <section className="relative py-48 text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/services/businesshero.jpg')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-blue-900/40"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Business IT Solutions
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          We help businesses build reliable IT infrastructure, secure
          networks and scalable technology systems that improve
          productivity and efficiency.
        </p>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>

    </section>
  )
}