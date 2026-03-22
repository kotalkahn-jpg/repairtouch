export default function VoipHero() {
  return (
    <section
      className="relative py-40 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/ip.jpg')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-900/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6">
          VoIP Hosting Solutions
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          We host, manage, and scale your communication systems in the cloud —
          delivering reliable, secure, and enterprise-grade VoIP infrastructure.
        </p>

        <p className="mt-4 text-blue-200 font-semibold">
          “We host your communication system.”
        </p>

      </div>

    </section>
  )
}