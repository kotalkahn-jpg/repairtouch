import { Laptop, Router, HardDrive, Printer } from "lucide-react"

export default function ProductCategories() {

  const categories = [
    {
      title: "Laptops",
      icon: Laptop
    },
    {
      title: "Networking Equipment",
      icon: Router
    },
    {
      title: "Storage Devices",
      icon: HardDrive
    },
    {
      title: "Printers & Accessories",
      icon: Printer
    }
  ]

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {categories.map((cat, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >

              <cat.icon className="w-10 h-10 text-blue-700 mx-auto mb-4" />

              <h3 className="font-semibold text-lg">
                {cat.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}