"use client"

import { Shield, Server, Database, CheckCircle, AppWindowMac , AlignEndHorizontal ,Blend} from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    title: "Reliable Systems",
    description: "Built with stability and performance in mind."
  },

  {
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    title: "Bulk PBX Auto-provisioning"


    
  },

  {
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    title: "24/7 Monitoring & Alerts",
    
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    title: "One-click Remote Access",
    
  },
]

 const services = [
    {
      title: "Grow Your Business",
      desc: "Package your own SIP trunking & other services, set your own prices, and have complete customer ownship. We support you in full..",
      image: "/services/under2.webp",
    },
  ]

export default function SoftMore() {
  return (
    <section className="py-32 bg-white">  

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold">
          Work the Way You Do with a Peace of Mind
          </h2>
<br></br>
          <h4 className="text-1xl font-bold">
          Work the Way You Do with a Peace of Mind
          </h4>
        </div>

        {/* BOOK LAYOUT */}
        <div className="relative grid md:grid-cols-3 gap-12 items-start">

          {/* SPINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-blue-200"></div>


          {/* LEFT PAGE */}
          <div className="md:pr-10">

            <AppWindowMac  className="text-blue-700 mb-6" size={28} />

            <h3 className="text-xl font-semibold mb-4">
           Enable Remote Working
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Remote-enabled your teams and connect remote locations & SIP devices with encrypted and trouble-free remote access service.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Redundant systems to prevent failures
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Load-balanced environments for stability
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Continuous monitoring and response
              </li>
            </ul>

          </div>


          {/* CENTER (SPINE CONTENT) */}
          <div className="text-center md:px-6">

            <AlignEndHorizontal  className="text-blue-700 mb-6 mx-auto" size={28} />

            <h3 className="text-xl font-semibold mb-4">
              Built-in Security
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
             TLS and SRTP encryption, firewall, automatic/static IP defense, SBC, 2FA, restricted country access, and more to safeguard you from attacks.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Secure server configurations</li>
              <li>Firewall and threat protection</li>
              <li>Access control and authentication</li>
            </ul>

          </div>


          {/* RIGHT PAGE */}
          <div className="md:pl-10">

            <Blend className="text-blue-700 mb-6" size={28} />

            <h3 className="text-xl font-semibold mb-4">
             Maximized Uptime

            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Solid PBX hot standby redundancy to keep your business calls continuing as usual even in case of unexpected server failure.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm">
              
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Automated backup schedules
              </li>
              
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Secure and redundant storage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700">—</span>
                Fast and reliable recovery systems
              </li>
            </ul>

          </div>

        </div>

      </div>

<br></br><br></br><br></br><br></br>
<div className="grid md:grid-cols-2 gap-12 items-center">

  {/* LEFT SIDE (TEXT + ICONS) */}
  <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Central Management for Partners
          </h2>

          <p className="text-muted-foreground mb-6">
            Reach, manage, and monitor your fleet of customer-premises PBXs with ease. Yeastar empowers partners with a fully-fledged remote management portal with features such as PBX monitoring, task management, and more.
          </p>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                {feature.icon}
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

  {/* RIGHT SIDE (IMAGE) */}
  <div>
    <img
      src="/services/2003.i105.032..isometric computer repair service horizontal illustration.jpg"
      alt="Digital Solutions"
      className="rounded-2xl shadow-lg w-full object-cover"
    />
  </div>

</div>

          
    </section>

    
    
    
  )

  
}


    

     
    
  