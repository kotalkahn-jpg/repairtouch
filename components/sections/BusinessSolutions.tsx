import { Server, Network, Cloud, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

import SlideUp from "@/components/animations/SlideUp"
import WordReveal from "@/components/animations/WordReveal"
import FadeIn from "@/components/animations/FadeIn"

export default function BusinessSolutions() {
  const solutions = [
    {
      title: "Network Infrastructure",
      description:
        "Design and deployment of secure and scalable business networks.",
      icon: Network,
    },
    {
      title: "Server & Systems Setup",
      description:
        "Installation and configuration of servers, storage and enterprise systems.",
      icon: Server,
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud backup, hosting and remote access solutions for modern businesses.",
      icon: Cloud,
    },
    {
      title: "Security Systems",
      description:
        "CCTV systems, access control and IT security infrastructure.",
      icon: ShieldCheck,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <SlideUp>
          <div className="text-center mb-16 max-w-3xl mx-auto">

            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Business Services
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              IT Infrastructure & Technology Solutions for Businesses
            </h2>

            <WordReveal
              text="We help organizations build reliable IT environments with secure networks, scalable systems and modern cloud infrastructure."
              className="mt-4 text-gray-600"
            />

          </div>
        </SlideUp>


        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Business IT Solutions
            </h2>

            <WordReveal
              text="We help businesses build reliable IT infrastructure, secure networks and scalable technology solutions that improve productivity and efficiency."
              className="text-gray-600 mb-6"
            />

            <Button className="bg-blue-700 hover:bg-blue-800">
              Explore Business Solutions
            </Button>
          </div>


          {/* RIGHT SOLUTIONS GRID */}
          <div className="grid grid-cols-2 gap-6">

            {solutions.map((solution, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div
                  className="p-6 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition"
                >

                  {/* ICON CONTAINER */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-700 mb-4">
                    <solution.icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-semibold mb-2">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {solution.description}
                  </p>

                </div>
              </FadeIn>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}