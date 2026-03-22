import HostHero from "@/components/sections/HostHero"
import HostingOverviewSection from "@/components/sections/HostingOverviewSection"
import HostingInfrastructure from "@/components/sections/HostingInfrastructure"
import HostingFeatures from "@/components/sections/HostingFeatures"

export default function HostingPage() {
  return (
    <main>
      <HostHero />
      <HostingOverviewSection />
      <HostingInfrastructure />
      <HostingFeatures />
    </main>
  )
}