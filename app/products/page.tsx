"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

type Region = "MW" | "ZA" | "US" | "GB" | "EU" | "KE";

const products = [
  {
    id: 1,
    name: "Dell Latitude 7490",
    category: "laptop",
    image: "/services/data-recovery.jpg",
    specs: "Intel i7, 16GB RAM, 512GB SSD",
    grade: "Grade A",
    use: "Ideal for executives and remote teams.",
    priceMWK: 850000,
    priceZAR: 12000,
  },
  {
    id: 2,
    name: "HP EliteDesk 800 G5",
    category: "desktop",
    image: "/services/phone-repair.jpg",
    specs: "Intel i5, 8GB RAM, 256GB SSD",
    grade: "Grade A",
    use: "Perfect for call centers and office setups.",
    priceMWK: 650000,
    priceZAR: 9000,
  },
  {
    id: 3,
    name: "Lenovo ThinkPad T480",
    category: "laptop",
    image: "/services/security.jpg",
    specs: "Intel i5, 8GB RAM, 256GB SSD",
    grade: "Grade B",
    use: "Reliable everyday business laptop.",
    priceMWK: 500000,
    priceZAR: 7500,
  },
  {
    id: 4,
    name: "Dell Precision 5820",
    category: "workstation",
    image: "/services/133183-OSAONX-702.jpg",
    specs: "Xeon CPU, 32GB RAM, 1TB SSD",
    grade: "Grade A",
    use: "High-performance for developers and designers.",
    priceMWK: 1500000,
    priceZAR: 22000,
  },
  {
    id: 5,
    name: "HP ProBook 640 G5",
    category: "laptop",
    image: "/services/computer-repair.jpg",
    specs: "Intel i5, 16GB RAM, 512GB SSD",
    grade: "Grade A",
    use: "Balanced performance for business users.",
    priceMWK: 700000,
    priceZAR: 10000,
  },
  {
    id: 6,
    name: "Lenovo ThinkCentre M720",
    category: "desktop",
    image: "/products/desktop2.jpg",
    specs: "Intel i5, 8GB RAM, 512GB SSD",
    grade: "Grade A",
    use: "Efficient desktop for enterprise environments.",
    priceMWK: 600000,
    priceZAR: 8500,
  },
];

export default function ProductsPage() {

  const [filter, setFilter] = useState("all");
  const [region, setRegion] = useState<Region>("ZA");

  // 🔥 Load saved region
  useEffect(() => {
    const saved = localStorage.getItem("region") as Region | null;
    if (saved) setRegion(saved);
  }, []);

  // 🔥 Save region
  useEffect(() => {
    localStorage.setItem("region", region);
  }, [region]);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div>

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center text-white">

        <Image
          src="/equipment.jpg"
          alt="Equipment"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6">

          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
              Certified IT Equipment for Business & Enterprise
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg max-w-xl text-gray-200">
              Professionally refurbished laptops, desktops and workstations
              designed for performance, reliability and scalability.
            </p>
          </FadeIn>

        </div>

      </section>


      {/* PRODUCTS SECTION */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-16 text-center max-w-3xl mx-auto">

            <h2 className="text-4xl font-bold text-gray-900">
              Available Systems
            </h2>

            <p className="mt-4 text-gray-600">
              Filter and explore systems based on your business needs.
            </p>

          </div>


          {/* FILTER + REGION */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

            {/* FILTER */}
            <div className="flex gap-3 flex-wrap">

              {["all", "laptop", "desktop", "workstation"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 rounded-full text-sm ${
                    filter === type
                      ? "bg-blue-700 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}

            </div>

            {/* REGION TOGGLE */}
            <div className="flex items-center gap-2 border px-3 py-1 rounded text-sm flex-wrap">

              {[
                 { code: "ZA", label: "🇿🇦 ZAR" },
                { code: "MW", label: "🇲🇼 MWK" },
                { code: "US", label: "🇺🇸 USD" },
                { code: "GB", label: "🇬🇧 GBP" },
                { code: "EU", label: "🇪🇺 EUR" },
                { code: "KE", label: "🇰🇪 KES" },
              ].map((r, i, arr) => (
                <div key={r.code} className="flex items-center gap-2">

                  <button
                    onClick={() => setRegion(r.code as Region)}
                    className={`px-2 py-1 rounded ${
                      region === r.code
                        ? "font-bold text-blue-700 bg-blue-50"
                        : ""
                    }`}
                  >
                    {r.label}
                  </button>

                  {i !== arr.length - 1 && <span>|</span>}

                </div>
              ))}

            </div>

          </div>


          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {filteredProducts.map((product, index) => {

              const getPrice = () => {
                switch (region) {
                  case "MW":
                    return `MWK ${product.priceMWK.toLocaleString()}`;
                  case "ZA":
                    return `R ${product.priceZAR.toLocaleString()}`;
                  case "US":
                    return `$ ${(product.priceZAR / 18).toFixed(2)}`;
                  case "GB":
                    return `£ ${(product.priceZAR / 22).toFixed(2)}`;
                  case "EU":
                    return `€ ${(product.priceZAR / 20).toFixed(2)}`;
                  case "KE":
                    return `KES ${(product.priceZAR * 8).toLocaleString()}`;
                  default:
                    return `MWK ${product.priceMWK.toLocaleString()}`;
                }
              };

              return (
                <SlideUp key={product.id} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

                    {/* IMAGE */}
                    <div className="relative h-52">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>

                      <p className="text-blue-600 text-sm mt-1">
                        {product.grade}
                      </p>

                      <p className="mt-3 text-sm text-gray-700">
                        {product.specs}
                      </p>

                      <p className="mt-3 text-sm text-gray-600">
                        {product.use}
                      </p>

                      <p className="mt-4 font-semibold text-gray-900">
                        {getPrice()}
                      </p>

                      <p className="text-xs text-gray-500 mt-2">
                        Certified • Warranty Included
                      </p>

                    </div>

                  </div>
                </SlideUp>
              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
}