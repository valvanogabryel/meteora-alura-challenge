"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu as ClosedMenuBurguer } from "react-icons/fi";
import { RiCloseLine as OpenedMenuBurguer } from "react-icons/ri";
import { Navbar } from "./Navbar";
export default function MenuBurguer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("!overflow-hidden");
      // document.body.style.overflowY = "hidden";
    } else {
      document.documentElement.classList.remove("!overflow-hidden");
      // document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  const buttonVariants = {
    open: {
      rotate: 90,
      scale: 1.5,
    },
    closed: {
      rotate: 0,
      scale: 1,
    },
  };

  return (
    <div>
      <motion.button
        className="relative z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        variants={buttonVariants}
        initial="closed"
        whileTap={isOpen ? { scale: 1.2 } : { scale: 0.9 }}
        animate={isOpen ? "open" : "closed"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
      >
        {isOpen ? (
          <OpenedMenuBurguer className="text-meteora-lime-yellow scale-150 sticky" />
        ) : (
          <ClosedMenuBurguer className="text-meteora-lime-yellow scale-150" />
        )}
      </motion.button>

      {isOpen && <Navbar />}
    </div>
  );
}
