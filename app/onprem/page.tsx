import HeroSection from "@/components/sections/HeroSection"
import ProductFilter from "@/components/ProductFilter"
import CTASection from "@/components/sections/CTASection"
export default function HostingPage() {
  return (
    <>
      <HeroSection
        title="On-Premise
IP PBX System"
        description="A reliable, secure, and feature-rich IP PBX system for SMBs. Unify business communication and customer engagement in one platform."
        backgroundImage="/pages/telephone.webp"
      />
<br></br><br></br><br></br>
    
      <ProductFilter/>

      <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Flexible Modular Design
      </h2>

      <p className="text-gray-600 mb-8">
        Customize your communication system with a modular architecture that adapts to your business needs. 
        Easily expand telephony interfaces, scale capacity, and integrate new capabilities without replacing your entire infrastructure.
      </p>

      {/* DROPDOWNS */}
      <div className="space-y-4">

        {/* ITEM 1 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
            Telephony Modules
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">
            Add FXS, FXO, BRI, and 4G modules to connect analog phones, PSTN lines, and cellular networks seamlessly.
          </p>
        </details>

        {/* ITEM 2 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
            Expansion Boards
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">
            Increase interface capacity with expansion boards, allowing your PBX to support more connections and advanced configurations.
          </p>
        </details>

        {/* ITEM 3 */}
        <details className="group border rounded-xl p-4 cursor-pointer">
          <summary className="flex justify-between items-center font-medium">
            Scalable System Capacity
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="text-sm text-gray-600 mt-3">
            Expand users and concurrent calls as your business grows, ensuring your communication system scales with demand.
          </p>
        </details>

      </div>

    </div>

    {/* RIGHT SIDE (IMAGE) */}
    <div className="flex justify-center">
      <img
        src="/pages/mode.png"
        alt="Flexible Modular Design"
        className="w-full max-w-md object-contain"
      />
    </div>

  </div>

</section>


<section className="py-24 bg-gray-50">

 <div className="max-w-7xl mx-auto px-6">

  {/* GRID */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* CARD 1 */}
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group">

      {/* IMAGE */}
      <div className="relative mb-6 h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl">
        <img
          src="/pages/linkus.webp"
          alt="Linkus UC Clients"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* OPTIONAL ICON OVERLAY */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow animate-bounce">
          ★
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Linkus UC Clients
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed">
        Feature-rich UC app for seamless collaboration. Available on web, desktop, and mobile, keeping your team connected anywhere.
      </p>

    </div>


    {/* CARD 2 */}
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group">

      {/* IMAGE */}
      <div className="mb-6 h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl">
        <img
          src="/pages/Operator.webp"
          alt="Operator Panel"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Operator Panel
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed">
        Gain real-time visibility into call flows and dispatch calls with ease using an intuitive drag-and-drop interface.
      </p>

      {/* OPTIONAL ICON OVERLAY */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow animate-bounce">
          ★
        </div>

    </div>


    {/* CARD 3 */}
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group">

      {/* IMAGE */}
      <div className="mb-6 h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl">
        <img
          src="/pages/voip.webp"
          alt="Call Center Console"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* OPTIONAL ICON OVERLAY */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow animate-bounce">
          ★
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Call Center Console
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed">
        Equip agents and supervisors with powerful tools like IVR, wallboards, and real-time analytics for better performance.
      </p>

    </div>

     {/* CARD 3 */}
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition group">

      {/* IMAGE */}
      <div className="mb-6 h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl">
        <img
          src="/pages/voip.webp"
          alt="Call Center Console"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* OPTIONAL ICON OVERLAY */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow animate-bounce">
          ★
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Call Center Console
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed">
        Equip agents and supervisors with powerful tools like IVR, wallboards, and real-time analytics for better performance.
      </p>

    </div>

  </div>

</div>
</section>

<CTASection/>


    </>
  )
}