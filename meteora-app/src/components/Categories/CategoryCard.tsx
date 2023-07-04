import { SetStateAction } from "react";
import Image from "next/image";

import { AiOutlineClose as X } from "react-icons/ai";

import { motion } from "framer-motion";

export function CategoryCard({
  category,
  selectedCategory,
  setSelectedCategory,
}: {
  category: {
    name: string;
    image: string;
  };
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<SetStateAction<string | null>>;
}) {
  const isCurrentCategory = selectedCategory?.includes(category.name);

  const closeButtonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      className={`relative group cursor-pointer -mt-3 md:-mt-2 lg:mt-0 transition-all hover:scale-105 hover:shadow-2xl ${
        isCurrentCategory &&
        "scale-105 shadow-xl ring-2 ring-meteora-light-purple"
      }`}
    >
      <button
        onClick={() => setSelectedCategory(category.name)}
        className="w-full"
      >
        <div className="bg-meteora-lime-yellow">
          <Image
            src={category.image}
            alt=""
            className="m-auto w-full object-cover"
            width={3000}
            height={3000}
          />
        </div>
        <div className="bg-black text-white px-4 py-2 lg:py-1.5 lg:px-2">
          <p className="font-medium text-center duration-300">
            {category.name}
          </p>
        </div>
      </button>
      {isCurrentCategory && (
        <motion.button
          className="absolute -top-4 transition-all -right-4 bg-white p-2 rounded-full ring-1 ring-meteora-light-purple
          "
          onClick={() => setSelectedCategory(null)}
          variants={closeButtonVariants}
          initial="hidden"
          animate="visible"
          layout
          whileHover={{ scale: 0.9 }}
          transition={{
            duration: 0.1,
          }}
        >
          <X />
        </motion.button>
      )}
    </div>
  );
}
