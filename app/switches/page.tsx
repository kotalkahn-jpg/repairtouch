import CTASection from "@/components/sections/CTASection"
import FadeIn from "@/components/animations/FadeIn"
import ScaleIn from "@/components/animations/ScaleIn"
import SlideInLeft from "@/components/animations/SlideInLeft"
import SlideInRight from "@/components/animations/SlideInRight"
import { Network, ShieldCheck, Zap, Building2, Camera, Wifi } from "lucide-react"

export default function SwitchesPage() {
  const switchTypes = [
    {
      title: "Managed Switches",
      icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
      text: "Enterprise-grade switching for VLAN segmentation, QoS, ACLs, remote monitoring, traffic shaping, port security, and scalable department-level network control.",
    },
    {
      title: "Unmanaged Switches",
      icon: <Network className="w-10 h-10 text-blue-700" />,
      text: "Plug-and-play connectivity for branch offices, retail spaces, SMEs, and fast deployments where simplicity and cost efficiency are the priority.",
    },
    {
      title: "PoE Switches",
      icon: <Zap className="w-10 h-10 text-blue-700" />,
      text: "Power over Ethernet solutions for IP cameras, VoIP phones, biometric systems, wireless access points, IoT sensors, and access control devices.",
    },
  ]

  const useCases = [
    {
      title: "Corporate Offices",
      icon: <Building2 className="w-8 h-8 text-blue-700" />,
      text: "Securely connect departments, printers, VoIP phones, servers, and user devices with managed switching and VLAN separation.",
    },
    {
      title: "CCTV & Security",
      icon: <Camera className="w-8 h-8 text-blue-700" />,
      text: "PoE switching simplifies IP camera and biometric deployments by delivering power and data through a single Ethernet cable.",
    },
    {
      title: "Wireless Access",
      icon: <Wifi className="w-8 h-8 text-blue-700" />,
      text: "Support enterprise Wi-Fi rollouts by powering access points and managing bandwidth through centralized switching layers.",
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-blue-900/60"></div>

        <FadeIn>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Switches</h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-8">
              Enterprise switching solutions covering
              <strong> Managed</strong>, <strong>Unmanaged</strong>, and
              <strong> PoE</strong> environments for secure, scalable,
              and high-performance network connectivity.
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
                Enterprise Switching
              </p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Reliable network distribution for modern business
              </h2>
              <p className="text-gray-600 text-lg leading-8">
                Our switching solutions are designed to power enterprise
                connectivity, branch expansion, wireless deployments,
                IP surveillance, and secure office segmentation.
                From simple unmanaged switching to advanced PoE and
                fully managed infrastructures, we deploy solutions
                built for resilience and long-term scale.
              </p>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                What’s Included
              </h3>
              <ul className="space-y-4 text-gray-700 leading-8">
                <li>• VLAN configuration and segmentation</li>
                <li>• QoS and bandwidth optimization</li>
                <li>• PoE for CCTV and Wi-Fi systems</li>
                <li>• Port security and ACL policies</li>
                <li>• Rack deployment and patching</li>
                <li>• Monitoring and lifecycle support</li>
              </ul>
            </div>
          </SlideInRight>
        </div>
      </section>
<br></br><br></br><br></br><br></br>
      {/* SWITCH TYPES */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-12 text-center">
              Switch Categories
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {switchTypes.map((item, index) => (
              <ScaleIn key={index}>
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-8">
                    {item.text}
                  </p>
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
            Common Use Cases
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((item, index) => (
            <ScaleIn key={index}>
              <div className="border rounded-2xl p-8 shadow-sm">
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-8">
                  {item.text}
                </p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}