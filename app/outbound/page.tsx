import CTASection from "@/components/sections/CTASection"
import HeroSection from "@/components/sections/HeroSection"
import PromoBanner from "@/components/PromoBanner"
import { Check,  ShieldCheck,
      BarChart3,
      Users,
      Zap } from "lucide-react"
      import Heading from "@/components/ui/Heading"

export default function HostingPage() {
  return (
    <>
      <HeroSection
        title="Enterprise-Grade Phone System for Modern Businesses"
        description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
        backgroundImage="/pages/outboundtts.png"
      />
<br></br><br></br>
<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-4 gap-6">

  {[
    {
      title: "Step up proactive outreach",
      desc: "Maximize campaign efficiency with 3-in1 auto dialers (Power, Progressive, Agentless).",
      icon: <Zap size={20} strokeWidth={1.5} />
    },
    {
      title: "Empower your teams",
      desc: "Centralize call list, contact details, and callback schedules in one place.",
      icon: <Users size={20} strokeWidth={1.5} />
    },
    {
      title: "Unlock actionable insights",
      desc: "Optimize operations with campaign wallboard and performance metrics.",
      icon: <BarChart3 size={20} strokeWidth={1.5} />
     
    },
    {
      title: "Improve security & compliance",
      desc: "Stay secure with GDPR/PCI compliance and automatic DNC screening.",
      icon: <ShieldCheck size={20} strokeWidth={1.5} />
    }
  ].map((item, i) => (
    <div key={i} className="bg-gray-50 rounded-2xl p-6">

      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 mb-4 shadow-sm">
        {item.icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {item.title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm">
        {item.desc}
      </p>

    </div>
  ))}

</div>
</section>

<br></br><br></br>

<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-5xl mx-auto text-center">
    <Heading className="text-4xl md:text-5xl font-semibold text-slate-900">
      Easy Outbound Call Campaign Management
    </Heading>

    <p className="mt-6 text-gray-600 text-lg">
      Maximize outreach by running outbound call campaigns. Enable managers to
      create, schedule, and monitor calls effortlessly.
    </p>
  </div>

  <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-center">

    {/* Image */}
    <img src="/pages/camp.webp" className="rounded-2xl w-full" />

    {/* Features */}
    <div className="grid grid-cols-2 gap-4 text-gray-700">
      {[
        "Power Dialer",
        "Progressive Dialer",
        "Agentless Dialer",
        "Dialing Hours",
        "Call Attempt Control",
        "Call Disposition Tags",
        "Unified Campaign View",
        "Outbound Queue Management"
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <Check className="text-green-500" size={18} />
          {item}
        </div>
      ))}
    </div>

  </div>

</section>


<br></br><br></br>

<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Image */}
    <img src="/pages/agents.webp" className="rounded-2xl w-full" />

    {/* Text */}
    <div>
      <h2 className="text-4xl font-semibold text-slate-900">
        Unified Agent Workspace to Streamline the Operations
      </h2>

      <p className="mt-6 text-gray-600">
        Equip your outbound agents with a centralized interface that simplifies
        workflows. Manage calls, switch statuses, and perform actions quickly.
      </p>

      <ul className="mt-6 space-y-3 text-gray-700">
        {[
          "Active & waiting outbound call list in one view",
          "Handle calls with simple controls",
          "Complete view of customer details",
          "Label calls and add remarks",
          "Scheduled callback management"
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <Check className="text-green-500" size={18} />
            {item}
          </li>
        ))}
      </ul>
    </div>

  </div>

</section>
<br></br><br></br>


<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
      Speed Up Lead Generation with Automated Dialers
    </h2>

    <p className="mt-6 text-gray-600 text-lg">
      Yeastar offers 3-in-1 auto dialer modes that reduce manual dialing efforts
      and boost conversions.
    </p>
  </div>

  <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div className="space-y-8">

      <div>
        <h3 className="text-xl font-semibold text-slate-900">
          Progressive Dialer
        </h3>
        <p className="text-gray-600 mt-2">
          Dials based on agent availability ensuring a 1:1 call ratio.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-900">
          Power Dialer
        </h3>
        <p className="text-gray-600 mt-2">
          Dials multiple contacts automatically to maximize outreach.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-900">
          Agentless Dialer
        </h3>
        <p className="text-gray-600 mt-2">
          Transfers connected calls to IVR or pre-configured destinations.
        </p>
      </div>

    </div>

    {/* Video/Image */}
    <img src="/pages/dial.webp" className="rounded-2xl w-full" />

  </div>

</section>


<br></br><br></br>

<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

    {/* Products */}
    <div className="bg-blue-50 rounded-2xl p-8">
      <h3 className="text-2xl font-semibold text-slate-900">
        Related Products
      </h3>

      <ul className="mt-6 space-y-3 text-blue-600">
        <li>→ P-Series Phone System</li>
        <li>→ Linkus UC Clients</li>
        <li>→ Inbound Call Center Solution</li>
      </ul>
    </div>

    {/* Resources */}
    <div className="bg-blue-50 rounded-2xl p-8">
      <h3 className="text-2xl font-semibold text-slate-900">
        Related Resources
      </h3>

      <ul className="mt-6 space-y-3 text-blue-600">
        <li>→ Download Solution Brochure</li>
        <li>→ Download Related Podcast</li>
      </ul>
    </div>

  </div>

</section>

<CTASection/>
<PromoBanner />
</>
      )
      }