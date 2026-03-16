export default function ContactHero() {
  return (
    <section
      className="relative py-50 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/services/contact.jpg')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-800/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Have questions or need technical assistance?
          Our team is ready to help with repairs, consultations
          and IT solutions.
        </p>

      </div>

    </section>
  )
}