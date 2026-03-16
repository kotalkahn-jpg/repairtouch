"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import ProductsHero from "@/components/sections/ProductsHero"

export default function ProductsPage() {

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {

    // Disable scrolling immediately
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "auto"
    }

  }, [])

  return (
    <main className="relative">

      {/* PAGE CONTENT */}
      <div className={showPopup ? "blur-sm transition duration-300" : ""}>
        <ProductsHero />
      </div>


      {/* POPUP OVERLAY */}
      {showPopup && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
        >

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -8, 0]
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >

            <Image
              src="/services/be-back-soon.gif"
              alt="Be back soon"
              width={420}
              height={420}
              className="rounded-2xl"
              priority
              unoptimized
            />

          </motion.div>

        </motion.div>

      )}

    </main>
  )
}