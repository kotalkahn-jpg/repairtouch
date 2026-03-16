"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function HoverLift({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
}