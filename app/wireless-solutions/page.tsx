import CTASection from "@/components/sections/CTASection"
import FadeIn from "@/components/animations/FadeIn"
import ScaleIn from "@/components/animations/ScaleIn"
import SlideInLeft from "@/components/animations/SlideInLeft"
import SlideInRight from "@/components/animations/SlideInRight"
import {
  RadioTower,
  Wifi,
  Building2,
  MapPinned,
  ShieldCheck,
  Signal,
} from "lucide-react"

export default function WirelessSolutionsPage() {
  const wirelessSolutions = [
    {
      title: "Point-to-Point (PtP)",
      icon: <Signal className="w-10 h-10 text-cyan-600" />,
      text: "High-speed dedicated wireless bridges for building-to-building connectivity, branch links, CCTV backhaul, and long-distance enterprise communication.",
    },
    {
      title: "Point-to-Multipoint (PtMP)",
      icon: <RadioTower className="w-10 h-10 text-cyan-600" />,
      text: "Scalable hub-and-spoke wireless architecture connecting multiple branches, warehouses, remote teams, and distributed office environments.",
    },
    {
      title: "Enterprise Wi-Fi",
      icon: <Wifi className="w-10 h-10 text-cyan-600" />,
      text: "Secure high-density indoor and outdoor wireless systems for campuses, hotels, schools, hospitals, and corporate offices.",
    },
  ]

  const deploymentAreas = [
    {
      title: "Corporate Campuses",
      icon: <Building2 className="w-8 h-8 text-cyan-600" />,
      text: "Seamless roaming, department segmentation, guest portals, and enterprise-grade Wi-Fi coverage for large office environments.",
    },
    {
      title: "Remote Branches",
      icon: <MapPinned className="w-8 h-8 text-cyan-600" />,
      text: "Long-range wireless links connecting branches, warehouses, and field sites without the need for costly fiber trenching.",
    },
    {
      title: "Secure Access",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
      text: "WPA3 security, user authentication, bandwidth shaping, access control, and secure guest network isolation.",
    },
  ]

  return (
    <main className="pt-32">
      {/* HERO */}
      <section
        className="relative py-50 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-blue-900/60"></div>

        <FadeIn>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Wireless Solutions
            </h1>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto leading-8">
              Advanced wireless systems for
              <strong> PtP</strong>, <strong>PtMP</strong>, and
              <strong> Enterprise Wi-Fi</strong> deployments built for
              performance, coverage, resilience, and secure connectivity.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <SlideInLeft>
            <div>
              <p className="text-cyan-700 font-semibold mb-3">
                Wireless Connectivity
              </p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Reliable coverage across buildings, branches, and campuses
              </h2>
              <p className="text-gray-600 text-lg leading-8">
                Our wireless solutions eliminate connectivity bottlenecks by
                delivering high-speed, secure, and scalable wireless coverage.
                From building bridges and branch backhaul to enterprise Wi-Fi
                roaming, guest access, and hotspot deployments, we engineer
                wireless environments that prioritize uptime, speed, and security.
              </p>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="bg-cyan-50 rounded-3xl p-10 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                What’s Included
              </h3>
              <ul className="space-y-4 text-gray-700 leading-8">
                <li>• Site surveys and heat mapping</li>
                <li>• Outdoor PtP and PtMP links</li>
                <li>• Enterprise access point deployment</li>
                <li>• Guest Wi-Fi portals</li>
                <li>• Secure authentication and policies</li>
                <li>• Monitoring and support</li>
              </ul>
            </div>
          </SlideInRight>
        </div>
      </section>
<br></br><br></br><br></br><br></br>
      {/* SOLUTIONS */}
      <section className="bg-cyan-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-12 text-center">
              Wireless Solution Types
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {wirelessSolutions.map((item, index) => (
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
      {/* DEPLOYMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Deployment Environments
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {deploymentAreas.map((item, index) => (
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

      {/* WHY CHOOSE */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Wireless Solutions?
            </h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-8">
              We combine enterprise-grade wireless design with real-world
              deployment expertise to ensure strong signal coverage, secure
              authentication, seamless roaming, and resilient branch
              connectivity across your business infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </main>
  )
}