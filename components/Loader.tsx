"use client"

import { useEffect, useState } from "react"

export default function Loader({ visible }: { visible: boolean }) {

  const word = "REPAIRTOUCH"

  const messages = [
    "INITIALIZING SYSTEM",
    "LOADING MODULES",
    "CONNECTING SERVICES",
    "PREPARING INTERFACE"
  ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState(messages[0])

  useEffect(() => {

    if (index < word.length) {

      const timeout = setTimeout(() => {

        setText(prev => prev + word[index])
        setStatus(messages[Math.floor(index / 3)] || messages[messages.length - 1])
        setIndex(prev => prev + 1)

      }, 250)

      return () => clearTimeout(timeout)

    }

  }, [index])

  return (

    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center
      bg-[radial-gradient(circle_at_center,#e8faff_0%,white_60%)]
      transition-opacity duration-700
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >

      <div className="text-center w-[90vw]">

        {/* SPINNER + LOGO */}

        <div className="relative w-[240px] h-[240px] flex items-center justify-center mx-auto">

          <div className="absolute w-[260px] h-[260px] rounded-full
          bg-[conic-gradient(transparent_0deg,transparent_240deg,#2bbcff_270deg,#2bbcff_300deg,transparent_330deg)]
          animate-spin"></div>

          <img
            src="/logo2.jpg"
            className="w-[200px] h-[200px] rounded-full object-contain animate-pulse"
          />

        </div>

        {/* TEXT */}

        <div className="mt-10 text-2xl tracking-[10px] font-semibold">
          {text}
        </div>

        {/* DOTS */}

        <div className="flex justify-center gap-3 mt-4">

          {word.split("").map((_, i) => (

            <div
              key={i}
              className={`w-[6px] h-[6px] rounded-full
              ${i === index - 1 ? "bg-black animate-bounce" : "bg-black/20"}`}
            />

          ))}

        </div>

        {/* STATUS */}

        <div className="mt-6 text-xs tracking-[3px] text-gray-600">
          {status}
        </div>

      </div>

    </div>
  )
}