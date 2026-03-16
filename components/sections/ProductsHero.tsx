export default function ProductsHero() {
  return (
    <section className="relative h-[420px] md:h-[500px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/services/under.jpg')" }}
      />

    </section>
  )
}