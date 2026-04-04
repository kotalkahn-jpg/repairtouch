"use client"

import { useEffect, useState } from "react"
import { X, Gift } from "lucide-react"
import SlideInRight from "@/components/animations/SlideInRight"

export default function PromoBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
      document.body.style.overflow = "hidden"
    }, 3000) // ✅ changed to 3 seconds

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "auto"
    }
  }, [])

  const closeBanner = () => {
    setShow(false)
    document.body.style.overflow = "auto"
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999]">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* RIGHT SIDE CONTAINER */}
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 max-w-xl w-[95%]">

        <SlideInRight>
          <div className="relative bg-blue-600 p-7 sm:p-10 rounded-2xl text-white flex items-center justify-between shadow-2xl animate-[fadeIn_0.5s_ease-out]">

            {/* Close */}
            <button
              onClick={closeBanner}
              className="absolute top-3 right-3 text-white/80 hover:text-white animate-bounce"
            >
              <X size={20} />
            </button>

            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-5">

              <div>
                <span className="text-blue-100 text-sm">
                  Black friday sale
                </span>
                <br />
                <span className="text-2xl sm:text-3xl font-semibold text-white">
                  20% off every Product
                </span>
              </div>

              <a
                href="#"
                className="text-blue-700 bg-white hover:bg-gray-100 px-6 py-3 rounded-lg w-fit transition flex gap-2 items-center group animate-bounce"
              >
                <span>Buy now</span>

                <svg
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  />
                </svg>
              </a>

            </div>

            {/* RIGHT ICON */}
            <div className="hidden sm:flex items-center justify-center">
              <Gift className="w-20 h-20 text-blue-200 animate-pulse" />
            </div>

          </div>
        </SlideInRight>

      </div>

    </div>
  )
}