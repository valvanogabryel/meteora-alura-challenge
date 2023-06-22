"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { AiOutlineCheckCircle as CheckCircle } from "react-icons/ai";
import { IoMdClose as CloseIcon } from "react-icons/io";

interface ModalHeaderProps {
  onClose: () => void;
  children: ReactNode;
}

export function ModalHeader({ children, onClose }: ModalHeaderProps) {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-black flex items-center px-7 py-1.5 gap-5 lg:justify-center">
      <motion.div
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <CheckCircle className="text-meteora-lime-yellow h-10 w-10" />
      </motion.div>
      <motion.p
        className="text-xl text-white font-medium"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.p>
      <motion.div
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
          delay: 0.5,
        }}
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
      >
        <CloseIcon
          className="text-meteora-dark-gray h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
      </motion.div>
    </header>
  );
}
