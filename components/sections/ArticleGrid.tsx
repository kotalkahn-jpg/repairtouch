import { Card, CardContent } from "@/components/ui/card"

export default function ArticleGrid() {

  const articles = [
    {
      title: "How to Speed Up a Slow Laptop",
      description:
        "Simple steps to make your laptop faster and improve performance.",
      image: "articles/laptop.png",
      category: "Laptop"
    },
    {
      title: "How to Fix Overheating Laptops",
      description:
        "Learn the common causes of overheating and how to prevent it.",
      image: "/articles/overheating.webp",
      category: "Repair"
    },
    {
      title: "How to Secure Your WiFi Network",
      description:
        "Protect your home or office network from unauthorized access.",
      image: "/articles/secure.jpg",
      category: "Networking"
    },
    {
      title: "How to Remove Computer Viruses",
      description:
        "Steps to detect and remove malware from your computer safely.",
      image: "/articles/virus.webp",
      category: "Security"
    },
    {
      title: "Choosing the Right Laptop for Business",
      description:
        "Important factors to consider when buying a business laptop.",
      image: "/articles/choose.jpg",
      category: "Buying Guide"
    },
    {
      title: "Signs Your Laptop Battery Needs Replacement",
      description:
        "How to tell when your laptop battery is failing.",
      image: "/articles/signs.jpg",
      category: "Laptop"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technology Articles & Guides
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Helpful tips, troubleshooting guides, and expert advice to keep
            your computers and networks running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {articles.map((article, index) => (

            <Card
              key={index}
              className="group hover:shadow-xl transition duration-300 overflow-hidden rounded-xl"
            >

              <div className="overflow-hidden">
                <img
                  src={article.image}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  alt={article.title}
                />
              </div>

              <CardContent className="p-6">

                <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {article.category}
                </span>

                <h3 className="text-xl font-semibold mt-3 mb-2 group-hover:text-blue-700 transition">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>

                <button className="text-blue-700 font-semibold hover:underline flex items-center gap-1">
                  Read Article →
                </button>

              </CardContent>

            </Card>

          ))}

        </div>

      </div>

    </section>
  )
}