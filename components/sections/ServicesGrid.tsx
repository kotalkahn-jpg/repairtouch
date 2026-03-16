"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    name: "Phone Repair",
    image: "/services/phone-repair.jpg",
    description:
      "Screen replacement, battery repair and hardware diagnostics for most smartphone brands.",
  },
  {
    name: "Laptop Repair",
    image: "/services/laptop-repair.jpg",
    description:
      "Laptop diagnostics, keyboard replacement, motherboard repairs and system upgrades.",
  },
  {
    name: "Computer Repair",
    image: "/services/computer-repair.jpg",
    description:
      "Desktop troubleshooting, virus removal and hardware replacement services.",
  },
  {
    name: "Data Recovery",
    image: "/services/data-recovery.jpg",
    description:
      "Recover important files from damaged hard drives, SSDs and external storage.",
  },
  {
    name: "Networking",
    image: "/services/networking.jpg",
    description:
      "Office network installation, router setup and reliable connectivity solutions.",
  },
  {
    name: "Security Systems",
    image: "/services/security.jpg",
    description:
      "CCTV installation, surveillance systems and access control solutions.",
  },
];

export default function ServicesGrid() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>(
    new Array(services.length).fill(false)
  );
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll flip for mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setFlipped((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Technology Services We Provide
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Our technicians deliver reliable repair services and IT solutions
            designed to keep your devices and business infrastructure running smoothly.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
              key={service.name}
              ref={(el) => {
  cardRefs.current[index] = el
}}
              data-index={index}
              className="relative h-72 perspective"
              onClick={() => {
                if (isMobile) {
                  setFlipped((prev) => {
                    const next = [...prev];
                    next[index] = !next[index];
                    return next;
                  });
                }
              }}
            >
              <div
                className={`
                  relative w-full h-full transition-transform duration-700
                  transform-style-preserve-3d
                  ${flipped[index] ? "rotate-y-180" : ""}
                  md:hover:rotate-y-180
                `}
              >

                {/* FRONT */}

                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="text-xl font-semibold">
                      {service.name}
                    </h3>
                  </div>
                </div>


                {/* BACK */}

                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-white border shadow-md p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <p className="mt-4 text-sm font-medium text-blue-600">
                    Professional service available
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Helpers */}

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .md\\:hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}