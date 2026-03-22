"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoIPModal({
  service,
  close,
}: {
  service: { title: string; desc: string };
  close: () => void;
}) {

  const modalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  function handleBackdropClick(e: any) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      close();
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6"
      >

        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.35 }}
          className="bg-white w-full max-w-lg rounded-xl p-8 shadow-xl"
        >

          <button
            onClick={close}
            className="float-right text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          <h3 className="text-2xl font-bold mb-2">
            {service.title}
          </h3>

          <p className="text-gray-600 mb-6 text-sm">
            {service.desc}
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-md"
              required
            />

            <input
              type="tel"
              placeholder="+265 Phone Number"
              className="w-full border p-3 rounded-md"
              required
            />

            <select className="w-full border p-3 rounded-md">
              <option>{service.title}</option>
            </select>

            <textarea
              placeholder="Project details"
              rows={3}
              className="w-full border p-3 rounded-md"
            />

            <button
              className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800"
            >
              Request Quote
            </button>

          </form>

        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}