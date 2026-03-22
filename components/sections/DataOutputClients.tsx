"use client"

export default function DataOutputClients() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* CERTIFICATE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Proof of Data Destruction
          </h2>
          <p className="text-gray-600">
            Every sanitization process is documented and verified with a formal
            Data Sanitization Certificate for compliance and audit purposes.
          </p>
        </div>

        {/* CLIENTS */}
        <div className="text-center">

          <h3 className="text-xl font-semibold mb-6">
            Who Needs This Service?
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-600">

            <span>Banks</span>
            <span>Law Firms</span>
            <span>Corporates</span>

          </div>

        </div>

      </div>

    </section>
  )
}