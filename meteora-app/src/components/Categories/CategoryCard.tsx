import { motion } from "framer-motion";
import Image from "next/image";

export function CategoryCard({
  category,
}: {
  category: {
    name: string;
    image: string;
  };
}) {
  return (
    <motion.div className="relative group cursor-pointer">
      <div className="bg-meteora-lime-yellow">
        <Image
          src={category.image}
          alt=""
          className="m-auto w-full object-cover"
          width={3000}
          height={3000}
        />
      </div>
      <div className="bg-black text-white px-4 py-2">
        <p className="font-medium text-center duration-300 group-hover:scale-105">
          {category.name}
        </p>
      </div>
    </motion.div>
  );
}
