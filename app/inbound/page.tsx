import CTASection from "@/components/sections/CTASection"
import HeroSection from "@/components/sections/HeroSection"
import { Check } from "lucide-react"

export default function HostingPage() {
  return (
    <>
      <HeroSection
        title="Enterprise-Grade Phone System for Modern Businesses"
        description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
        backgroundImage="/hosting.jpg"
      />
<br></br><br></br>
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
      More for greater customer experience
    </h2>
  </div>

  <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-gray-50 rounded-2xl overflow-hidden">
      <img src="/images/omnichannel.png" className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          Omnichannel Messaging
        </h3>
        <p className="mt-3 text-gray-600">
          Provide customers more ways to get in touch with live chat and integration
          with WhatsApp, Facebook, and SMS. Access and respond to messages from
          multiple channels in one place.
        </p>
        <span className="mt-4 inline-block text-blue-600 font-medium cursor-pointer">
          Learn more →
        </span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-50 rounded-2xl overflow-hidden">
      <img src="/images/crm.png" className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          CRM Integration
        </h3>
        <p className="mt-3 text-gray-600">
          Rich ready-made CRM/helpdesk integrations to automate repetitive tasks,
          keep a central record of customer interactions, and elevate agent productivity.
        </p>
        <span className="mt-4 inline-block text-blue-600 font-medium cursor-pointer">
          Learn more →
        </span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-50 rounded-2xl overflow-hidden">
      <img src="/images/outbound.png" className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          Outbound Call Center
        </h3>
        <p className="mt-3 text-gray-600">
          Maximize your proactive outreach by running outbound call campaigns.
          Enable dialing automation, improve connect rates, and create more revenue opportunities.
        </p>
        <span className="mt-4 inline-block text-blue-600 font-medium cursor-pointer">
          Learn more →
        </span>
      </div>
    </div>

  </div>

</section>


<br></br><br></br>
<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
      Real-time Performance Tracking
    </h2>

    <p className="mt-6 text-gray-600 text-lg">
      Discover up-to-the-minute call center metrics and KPIs from the central
      call center Wallboard. All data are automatically calculated in real-time
      for monitoring, management & optimization.
    </p>
  </div>

  <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-center">

    {/* Left List */}
    <ul className="space-y-4 text-gray-700">
      {[
        "Track sum of all queues or statistics of individual queue",
        "17 Key Performance Metrics",
        "Real-time Monitoring",
        "Flexible Calculation Time Frame",
        "Customizable Widgets",
        "Multi-screen Display"
      ].map((item, i) => (
        <li key={i} className="flex items-center gap-3">
          <Check className="text-green-500" size={18} />
          {item}
        </li>
      ))}
    </ul>

    {/* Image */}
    <div>
      <img src="/images/wallboard.png" className="rounded-2xl w-full" />
    </div>

  </div>

</section>
<br></br><br></br>

<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left */}
    <div className="space-y-6">
      {[
        "Enhance call waiting experience",
        "Fine tune the call flow",
        "Coach agents with ease",
        "Implement missed call follow-up",
        "Set SLA for quality assurance",
        "Conduct satisfaction survey"
      ].map((item, i) => (
        <div key={i} className="flex justify-between items-center border-b pb-4">
          <span className="text-lg text-slate-900">{item}</span>
          <span className="text-gray-400">›</span>
        </div>
      ))}
    </div>

    {/* Image */}
    <div>
      <img src="/images/sla.png" className="rounded-2xl w-full" />
    </div>

  </div>

</section>
<br></br><br></br>
<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Card */}
    <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
      <h3 className="text-2xl font-semibold text-slate-900">
        Connect customers to agents
      </h3>

      <p className="mt-4 text-gray-600">
        With easy to set up IVR menus, call queues, and intuitive agent dashboard,
        managing calls is easy.
      </p>

      <ul className="mt-6 space-y-3 text-gray-700">
        <li className="flex gap-3">
          <Check className="text-green-500" size={18} />
          Automatic call distribution with skill-based routing
        </li>
        <li className="flex gap-3">
          <Check className="text-green-500" size={18} />
          Flexible queue strategies
        </li>
        <li className="flex gap-3">
          <Check className="text-green-500" size={18} />
          Automatic callback during busy times
        </li>
        <li className="flex gap-3">
          <Check className="text-green-500" size={18} />
          Monitor call traffic anytime
        </li>
      </ul>
    </div>

    {/* Image */}
    <div>
      <img src="/images/agents.png" className="rounded-2xl w-full" />
    </div>

  </div>

</section>

<br></br><br></br>
<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Image */}
    <div>
      <img src="/images/agent.png" className="rounded-2xl w-full" />
    </div>

    {/* Text */}
    <div>
      <h2 className="text-4xl font-semibold text-slate-900">
        What is Yeastar Call Center Solution?
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed">
        The Yeastar P-Series Phone System has a built-in call center solution.
        It offers a comprehensive package for calls, video, messaging,
        integrations, and more. It is suitable for businesses of all sizes.
      </p>

      <p className="mt-4 text-gray-600">
        With the all-in-one solution, you can cut down call resolution time,
        decrease workload, and transform customer experience.
      </p>
    </div>

  </div>

</section>
      

      <CTASection/>
    </>
  )
}