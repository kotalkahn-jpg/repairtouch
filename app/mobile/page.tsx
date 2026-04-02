import CTASection from "@/components/sections/CTASection"
import HeroSection from "@/components/sections/HeroSection"
import { Box, ShieldCheck, ThumbsUp } from "lucide-react"

export default function HostingPage() {
  return (
    <>
      <HeroSection
        title="mobile"
        description="Unified communication, centralized management, and enterprise-level reliability, ensuring stable, scalable, and secure communication across every branch."
        backgroundImage="/hosting.jpg"
      />
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT IMAGE */}
    <div className="relative flex justify-center">

      {/* background glow */}
      <div className="absolute w-80 h-80 bg-blue-100 rounded-full blur-3xl"></div>

      <img
        src="/images/mobile-ui.png"
        alt="Mobile Client"
        className="relative w-full max-w-sm object-contain opacity-90"
      />

    </div>

    {/* RIGHT CONTENT */}
    <div className="space-y-12">

      {/* ITEM 1 */}
      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Say Hello on the Go
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Make, transfer, hold, and mute your business calls on the go. 
          Your contacts and teams are just one tap away.
        </p>
      </div>

      {/* ITEM 2 */}
      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Never Miss a Conversation
        </h3>
        <p className="text-gray-600 leading-relaxed">
          In one clear list view, check your call logs, voicemails, and call recordings. 
          Listen to what was left and call back your contact in one simple click.
        </p>
      </div>

      {/* ITEM 3 */}
      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Easily Switch Devices
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Move your calls seamlessly between mobile, desktop, and web without interruption, 
          ensuring continuous communication wherever you are.
        </p>
      </div>

    </div>

  </div>

</section>
      
     




    <section className="w-full bg-blue-600 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left">

        {/* Item 1 */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Box size={40} strokeWidth={1.5} />
          <h3 className="text-2xl font-semibold">
            Call, Chat, and Meet
          </h3>
          <p className="text-base leading-relaxed text-blue-100">
            Easily move between all the ways you collaborate and stay connected
            in a single app.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <ShieldCheck size={40} strokeWidth={1.5} />
          <h3 className="text-2xl font-semibold">
            Secure Everywhere
          </h3>
          <p className="text-base leading-relaxed text-blue-100">
            Encrypted off-premise connection in one click without extra VPN and
            firewall settings.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <ThumbsUp size={40} strokeWidth={1.5} />
          <h3 className="text-2xl font-semibold">
            Easy for Everyone
          </h3>
          <p className="text-base leading-relaxed text-blue-100">
            Simply install, login, then it works! The features & settings are in
            sync with your Yeastar PBX.
          </p>
        </div>

      </div>
    </section>


<section className="w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">

    {/* Item 1 */}
    <div className="flex flex-col items-center gap-4 px-6 py-8">
      <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
      </svg>

      <h3 className="text-2xl font-medium text-gray-800">
        Document
      </h3>

      <p className="text-gray-600 max-w-xs">
        User Manual, Configuration Guide, etc.
      </p>
    </div>

    {/* Item 2 */}
    <div className="flex flex-col items-center gap-4 px-6 py-8">
      <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a3 3 0 016 0v6M5 17h14M12 3v4" />
      </svg>

      <h3 className="text-2xl font-medium text-gray-800">
        Download Linkus
      </h3>

      <p className="text-gray-600 max-w-xs">
        Available for iOS, Android, Windows and MacOS
      </p>
    </div>

    {/* Item 3 */}
    <div className="flex flex-col items-center gap-4 px-6 py-8">
      <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a6 6 0 10-12 0v4a2 2 0 002 2h1v-6H8a4 4 0 118 0h-1v6h1a2 2 0 002-2v-4z" />
      </svg>

      <h3 className="text-2xl font-medium text-gray-800">
        Free Trial
      </h3>

      <p className="text-gray-600 max-w-xs">
        The fully-loaded Linkus can be tested with the P-Series free trial.
      </p>
    </div>

  </div>
</section>

    <CTASection/>
  

    </>
  )
}