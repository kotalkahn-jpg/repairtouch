"use client";

import { motion } from "framer-motion";

export default function TextRevealMask({ text }: { text: string }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>
    </div>
  );
}