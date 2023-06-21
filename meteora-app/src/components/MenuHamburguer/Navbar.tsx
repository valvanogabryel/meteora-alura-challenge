"use client";
import { motion } from "framer-motion";

export function Navbar() {
  const isActive = true;

  return (
    <motion.nav
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-meteora-darker-gray animate-expand absolute right-0 top-0 transition-all duration-300"
    >
      <ul className="p-8 pb-4">
        <motion.li
          className={`py-2 border-b-2 border-[#CED4DA] ${
            isActive && "text-meteora-lime-yellow font-bold"
          }`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <a href="/">Home</a>
        </motion.li>
        <motion.li
          className="py-2 border-b-2 border-[#CED4DA]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <a href="/">Nossas lojas</a>
        </motion.li>
        <motion.li
          className="py-2 border-b-2 border-[#CED4DA]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <a href="/">Novidades</a>
        </motion.li>
        <motion.li
          className="py-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <a href="/">Promoções</a>
        </motion.li>
      </ul>
    </motion.nav>
  );
}
