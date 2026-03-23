import DataHero from "@/components/sections/DataHero"
import DataProcess from "@/components/sections/DataProcess"
import DataTools from "@/components/sections/DataTools"
import ITAssetDisposition from "@/components/sections/ITAssetDisposition"
import DataWarningBanner from "@/components/sections/DataWarningBanner"

export default function DataPage() {
  return (
    <main>
      <DataHero />
      <DataWarningBanner/>
      <DataProcess />
      <ITAssetDisposition/>
      <DataTools />

      
    </main>
  )
}