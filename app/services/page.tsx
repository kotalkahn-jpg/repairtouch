import ServicesHero from "@/components/sections/ServicesHero"
import ServicesGrid from "@/components/sections/ServicesGrid"
import DetailedServices from "@/components/sections/DetailedServices"
import RepairProcess from "@/components/sections/RepairProcess"
import CTASection from "@/components/sections/CTASection"

export default function ServicesPage() {
  return (
    <main>

      <ServicesHero />

      <ServicesGrid />

      <DetailedServices />

      

      <CTASection />

    </main>
  )
}