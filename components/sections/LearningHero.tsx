export default function LearningHero() {
  return (
    <section
      className="relative py-40 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/learning.jpg')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-900/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Tech Guides & Tutorials
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Learn how to solve common technology problems and improve
          your devices with step-by-step guides from our technicians.
        </p>

      </div>

    </section>
  )
}