"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import bannerMobile1 from "@/assets/desktop/Banner carousel 1 _ 375.png";
import bannerMobile2 from "@/assets/mobile/Banner carousel 2 _ 375.png";
import bannerMobile3 from "@/assets/mobile/Banner carousel 3 _ 375.png";

const banners = [
  {
    id: 1,
    image: bannerMobile1,
    title: "",
    content: "",
  },
  {
    id: 2,
    image: bannerMobile2,
    title: "Coleção Atemporal",
    content: "Estilo e qualidade para durar.",
  },
  {
    id: 3,
    image: bannerMobile3,
    title: "Coleção Atemporal",
    content: "Alto impacto visual, baixo impacto ambiental.",
  },
];

const Slidershow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <motion.div
        className="slider flex -z-50 relative"
        style={{
          width: `${banners.length}00vw`,
          transform: `translateX(-${currentIndex}00%)`,
        }}
      >
        {banners.map((banner) => (
          <div className="banner w-full flex-shrink-0" key={banner.id}>
            <Image src={banner.image} alt="" width={375} height={375} />
          </div>
        ))}
      </motion.div>

      <button
        className="prev-button bg-gray-200 p-2 rounded-full"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className="next-button bg-gray-200 p-2 rounded-full"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slidershow;
