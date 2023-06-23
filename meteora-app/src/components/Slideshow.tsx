"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";

import imageMobile1 from "@/assets/mobile/Banner carousel 1 _ 375.png";
import imageMobile2 from "@/assets/mobile/Banner carousel 2 _ 375.png";
import imageMobile3 from "@/assets/mobile/Banner carousel 3 _ 375.png";

import banners from "@/utils/bannerImagesImports";

import { useBreakpoint } from "use-breakpoint";

import {
  AiOutlineCaretRight as ArrowRight,
  AiOutlineCaretLeft as ArrowLeft,
} from "react-icons/ai";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  let images;

  if (breakpoint?.match("mobile")) {
    images = [banners.mobile[0], banners.mobile[1], banners.mobile[2]];
  } else if (breakpoint?.match("tablet")) {
    images = [banners.tablet[0], banners.tablet[1], banners.tablet[2]];
  } else {
    images = [banners.desktop[0], banners.desktop[1], banners.desktop[2]];
  }

  const imageIndex = wrap(0, images.length, page);
  const backgrounds = ["#895FB5", "#F58D90", "#F87F46"];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div
      className="caroussel-container"
      style={{ backgroundColor: backgrounds[imageIndex] }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute max-w-full"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        <ArrowRight />
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <ArrowLeft />
      </div>
    </div>
  );
};
