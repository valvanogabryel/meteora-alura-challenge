"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu as ClosedMenuBurguer } from "react-icons/fi";
import { RiCloseLine as OpenedMenuBurguer } from "react-icons/ri";
import { Navbar } from "./Navbar";
export default function MenuBurguer() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonVariants = {
    open: {
      rotate: 180,
      scale: 1.5,
    },
    closed: {
      rotate: 0,
      scale: 1,
    },
  };

  return (
    <div className="">
      <motion.button
        className="relative md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        variants={buttonVariants}
        initial="closed"
        whileTap={isOpen ? { scale: 1.2 } : { scale: 0.9 }}
        animate={isOpen ? "open" : "closed"}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
        }}
      >
        {isOpen ? (
          <OpenedMenuBurguer className="text-meteora-lime-yellow scale-150 relative z-50" />
        ) : (
          <ClosedMenuBurguer className="text-meteora-lime-yellow scale-150" />
        )}
      </motion.button>

      {isOpen && <Navbar />}
    </div>
  );
}