"use client";
import { motion } from "framer-motion";

export function Navbar() {
  const isActive = true;

  return (
    <motion.nav className="bg-meteora-darker-gray animate-expand-height z-50 absolute -left-40 transition-all duration-300">
      <ul>
        <motion.li
          className={`border-b-2 border-[#CED4DA] p-4 ${
            isActive && "text-meteora-lime-yellow font-bold"
          }`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          home
        </motion.li>
        <motion.li
          className="border-b-2 border-[#CED4DA] p-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          home
        </motion.li>
        <motion.li
          className="border-b-2 border-[#CED4DA] p-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          home
        </motion.li>
        <motion.li
          className="p-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          home
        </motion.li>
      </ul>
    </motion.nav>
  );
}
