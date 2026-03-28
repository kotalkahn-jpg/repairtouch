import CTASection from "@/components/sections/CTASection"

export default function NetworkInfrastructurePage() {
  const infrastructureServices = [
    {
      title: "Structured Cabling",
      text: "Professional CAT6, CAT6A, and fiber cabling systems for offices, campuses, data rooms, and enterprise buildings with clean rack management and scalability in mind.",
    },
    {
      title: "Core Routing & VLANs",
      text: "Advanced routing design, subnetting, VLAN segmentation, traffic prioritization, and secure department isolation for enterprise-grade performance.",
    },
    {
      title: "Redundancy & Failover",
      text: "High availability architecture with backup links, redundant switches, failover routing, and uptime-first network planning.",
    },
  ]

  return (
    <main className="pt-32">
      {/* HERO */}
      <section
        className="relative py-50 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Network Infrastructure
          </h1>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-8">
            Secure, scalable, and professionally engineered network
            infrastructure solutions for offices, campuses, hospitals,
            financial institutions, and enterprise environments.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-blue-700 font-semibold mb-3">
              Enterprise Connectivity
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Built for speed, resilience, and future expansion
            </h2>
            <p className="text-gray-600 text-lg leading-8">
              Our network infrastructure services cover everything from
              structured cabling and fiber backbone deployments to switch
              hierarchy planning, branch connectivity, VLAN security,
              and redundancy design. Every deployment is engineered to
              maximize performance, uptime, and long-term scalability.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              What’s Included
            </h3>
            <ul className="space-y-4 text-gray-700 leading-8">
              <li>• Structured office and campus cabling</li>
              <li>• Fiber uplinks and backbone deployment</li>
              <li>• Rack organization and patch management</li>
              <li>• VLAN segmentation and traffic control</li>
              <li>• Secure branch-to-branch connectivity</li>
              <li>• Firewall and switch integration</li>
            </ul>
          </div>
        </div>
      </section>


<br></br><br></br><br></br><br></br>

      {/* SERVICE BLOCKS */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Core Infrastructure Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {infrastructureServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-8">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT ENVIRONMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Ideal Deployment Environments
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Corporate Offices</h3>
            <p className="text-gray-600 leading-8">
              Stable enterprise LANs for departments, boardrooms,
              printers, VoIP systems, and secure internal resources.
            </p>
          </div>

          <div className="border rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Data Rooms</h3>
            <p className="text-gray-600 leading-8">
              High-performance rack environments with fiber uplinks,
              redundancy, server interconnectivity, and structured patching.
            </p>
          </div>

          <div className="border rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Branch Networks</h3>
            <p className="text-gray-600 leading-8">
              Secure branch connectivity using VPNs, routing policies,
              WAN optimization, and centralized monitoring.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}