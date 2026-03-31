"use client"

type HeroSectionProps = {
  title: string
  description: string
  quote?: string
  backgroundImage: string
}

export default function HeroSection({
  title,
  description,
  quote,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="relative py-40 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-600/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          {description}
        </p>

        {quote && (
          <p className="mt-4 text-blue-200 font-semibold">
            {quote}
          </p>
        )}

      </div>
    </section>
  )
}