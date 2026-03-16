import { Card, CardContent } from "@/components/ui/card"

export default function EquipmentGrid() {

  const products = [
    {
      name: "Dell Business Laptop",
      image: "/laptop-product.jpg"
    },
    {
      name: "Office Router",
      image: "/router-product.jpg"
    },
    {
      name: "External SSD Storage",
      image: "/ssd-product.jpg"
    },
    {
      name: "Wireless Access Point",
      image: "/wifi-product.jpg"
    },
    {
      name: "Office Printer",
      image: "/printer-product.jpg"
    },
    {
      name: "Network Switch",
      image: "/switch-product.jpg"
    }
  ]

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product, index) => (

            <Card key={index} className="hover:shadow-lg transition">

              <CardContent className="p-0">

                <img
                  src={product.image}
                  className="rounded-t-xl w-full h-48 object-cover"
                  alt={product.name}
                />

                <div className="p-6">

                  <h3 className="font-semibold text-lg">
                    {product.name}
                  </h3>

                </div>

              </CardContent>

            </Card>

          ))}

        </div>

      </div>

    </section>
  )
}