"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import banners from "@/utils/bannerImagesImports";

const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const getImageSrc = () => {
    if (isMobile) {
      return banners.mobile;
    } else if (isTablet) {
      return banners.tablet;
    } else if (isDesktop) {
      return banners.desktop;
    }
  };

  const images = getImageSrc();

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images?.map((image) => (
        <SwiperSlide key={image} className="lg:h-[346px]">
          <Image
            src={image}
            alt="Banner"
            width={1200}
            height={800}
            sizes="100vw"
            quality={100}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
