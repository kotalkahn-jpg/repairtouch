"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function DataWarningBanner() {

  const [show, setShow] = useState(false)
  const [modal, setModal] = useState(false)

  // RESET ON PAGE LOAD (fix reload issue)
  useEffect(() => {
    sessionStorage.removeItem("dataWarningShown")
  }, [])

  // Trigger once per scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sessionStorage.getItem("dataWarningShown")) return

      if (window.scrollY > 250) {
        setShow(true)
        sessionStorage.setItem("dataWarningShown", "true")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // LOCK SCROLL
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [show])

  // Auto hide
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false)
      }, 9000)

      return () => clearTimeout(timer)
    }
  }, [show])

  return (
    <>
      <AnimatePresence>

        {show && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              
            />

            {/* BANNER */}
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="fixed right-6 bottom-10 z-50 w-[90%] md:w-[420px]"
            >

              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, -6, 6, -4, 4, 0] }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-2xl p-6 border-l-4 border-red-600 relative"
              >

                {/* CLOSE */}
                <button
                  onClick={() => setShow(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-red-600 mb-3">
                  ⚠ Your Data Is Still Recoverable
                </h3>

                {/* TEXT */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Formatting or deleting files does not permanently remove data.
                  In many cases, sensitive information can still be recovered using
                  basic tools — exposing your business to serious risk.
                </p>

                <p className="text-gray-500 text-sm mb-4">
                  This can lead to:
                </p>

                <ul className="text-sm text-gray-600 space-y-1 mb-5">
                  <li>• Data breaches</li>
                  <li>• Legal and compliance violations</li>
                  <li>• Exposure of confidential client information</li>
                </ul>

                {/* CTA TEXT */}
                <p className="text-xs text-gray-500 mb-3">
                  Want to ensure your data is permanently destroyed?
                </p>

                {/* BUTTON */}
                <motion.button
                  onClick={() => setModal(true)}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700"
                >
                  Secure My Data
                </motion.button>

              </motion.div>

            </motion.div>
          </>
        )}

      </AnimatePresence>


      {/* MODAL */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
          >

            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white w-full max-w-4xl rounded-2xl grid md:grid-cols-2 overflow-hidden"
            >

              {/* LEFT */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Request Data Protection
                </h3>

                <form className="space-y-4">
                  <input className="w-full border p-3 rounded-md" placeholder="Name" />
                  <input className="w-full border p-3 rounded-md" placeholder="Phone" />
                  <textarea rows={3} className="w-full border p-3 rounded-md" placeholder="Describe your needs..." />

                  <button className="w-full bg-blue-700 text-white py-3 rounded-md">
                    Submit
                  </button>
                </form>
              </div>

              {/* RIGHT */}
              <div className="bg-blue-50 flex flex-col justify-center items-center p-8 text-center">

                <h4 className="text-lg font-semibold mb-4">
                  Immediate Assistance
                </h4>

                <button
                  onClick={() => {
                    window.location.href = "tel:+27835656464"
                    setTimeout(() => {
                      window.location.href = "tel:+265886337978"
                    }, 500)
                  }}
                  className="bg-blue-700 text-white px-6 py-3 rounded-md"
                >
                  Call Now
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}