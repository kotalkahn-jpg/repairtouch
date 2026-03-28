import CTASection from "@/components/sections/CTASection"
import FadeIn from "@/components/animations/FadeIn"
import ScaleIn from "@/components/animations/ScaleIn"
import SlideInLeft from "@/components/animations/SlideInLeft"
import SlideInRight from "@/components/animations/SlideInRight"

export default function ServersPage() {
  const serverSolutions = [
    {
      title: "Rackmount Servers",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      text: "High-density enterprise servers designed for rack environments, data centers, virtualization clusters, database workloads, and mission-critical applications.",
    },
    {
      title: "Tower Servers",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop",
      text: "Standalone office-friendly servers ideal for SMEs, branch offices, backup systems, file sharing, local ERP deployments, and business applications.",
    },
    {
      title: "Storage / NAS",
      image:
        "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop",
      text: "Centralized storage platforms for backup, disaster recovery, surveillance retention, virtualization storage, shared access, and business continuity.",
    },
  ]

  return (
    <main className="pt-32">
      {/* HERO */}
      <section
        className="relative py-50 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 to-blue-900/60"></div>

        <FadeIn>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Servers</h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-8">
              Enterprise-grade server infrastructure including
              <strong> Rackmount</strong>, <strong>Tower</strong>, and
              <strong> Storage/NAS</strong> solutions for compute,
              virtualization, storage, and mission-critical business workloads.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <SlideInLeft>
            <div>
              <p className="text-blue-700 font-semibold mb-3">
                Enterprise Compute
              </p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Reliable infrastructure for modern workloads
              </h2>
              <p className="text-gray-600 text-lg leading-8">
                We design and deploy enterprise server environments that support
                databases, ERP systems, virtualization, backup systems,
                surveillance retention, cloud sync, and business-critical
                workloads. Every solution is optimized for uptime, security,
                scalability, and long-term lifecycle management.
              </p>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Server Services Include
              </h3>
              <ul className="space-y-4 text-gray-700 leading-8">
                <li>• Virtualization and VM deployment</li>
                <li>• RAID storage and redundancy planning</li>
                <li>• Backup and disaster recovery</li>
                <li>• Active Directory and domain services</li>
                <li>• File, print, and ERP hosting</li>
                <li>• Monitoring and lifecycle support</li>
              </ul>
            </div>
          </SlideInRight>
        </div>
      </section>

<br></br><br></br><br></br><br></br>
      {/* SERVER TYPES */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-12 text-center">
              Server Solutions
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {serverSolutions.map((server, index) => (
              <ScaleIn key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img
                    src={server.image}
                    alt={server.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">
                      {server.title}
                    </h3>
                    <p className="text-gray-600 leading-8">
                      {server.text}
                    </p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

<br></br><br></br><br></br><br></br>
      {/* USE CASES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Ideal Use Cases
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          <SlideInLeft>
            <div className="border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Business ERP</h3>
              <p className="text-gray-600 leading-8">
                Run ERPNext, databases, HR systems, finance applications,
                and internal portals with reliable compute resources.
              </p>
            </div>
          </SlideInLeft>

          <FadeIn>
            <div className="border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Virtualization</h3>
              <p className="text-gray-600 leading-8">
                Host multiple virtual servers for web apps, backup nodes,
                internal systems, and isolated testing environments.
              </p>
            </div>
          </FadeIn>

          <SlideInRight>
            <div className="border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Storage Backup</h3>
              <p className="text-gray-600 leading-8">
                Centralize business backups, CCTV archives, document storage,
                and disaster recovery snapshots.
              </p>
            </div>
          </SlideInRight>
        </div>
      </section>

      <CTASection />
    </main>
  )
}