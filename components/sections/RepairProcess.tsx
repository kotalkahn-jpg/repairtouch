import { ClipboardList, Wrench, Settings, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Diagnosis & Assessment",
    description:
      "We inspect your device to identify the exact issue and determine the best repair solution.",
    icon: ClipboardList,
  },
  {
    title: "Repair & Replacement",
    description:
      "Our technicians repair or replace faulty components using reliable tools and parts.",
    icon: Wrench,
  },
  {
    title: "Testing & Optimization",
    description:
      "The device is carefully tested to ensure performance, stability and functionality.",
    icon: Settings,
  },
  {
    title: "Ready for Pickup",
    description:
      "Once everything is working perfectly, your device is ready for collection or delivery.",
    icon: CheckCircle,
  },
];

export default function RepairProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            How It Works
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Our Repair Process
          </h2>
        </div>

        {/* PROCESS GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="relative">

                {/* STEP CARD */}
                <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

                  {/* NUMBER BADGE */}
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <div className="mt-6">

                    <Icon className="w-6 h-6 text-blue-600 mb-4" />

                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-gray-600 text-sm">
                      {step.description}
                    </p>

                  </div>
                </div>

                {/* ARROW CONNECTOR */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-10 transform -translate-y-1/2 items-center justify-center">
                    <ArrowRight className="w-10 h-10 text-blue-600" />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}